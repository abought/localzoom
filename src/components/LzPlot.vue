<script>
/**
 * A generic Vue component to wrap a LocusZoom instance
 *
 * This can handle any type of plot that LocusZoom supports, including multiple panels and
 *  custom datasources
 */

import LocusZoom from 'locuszoom';
import { plotUpdatesUrl, plotWatchesUrl } from 'locuszoom/dist/ext/lz-dynamic-urls.min';

import { stateUrlMapping } from '../util/lz-helpers';

let uid = 0; // Ensure that every component instance has a unique DOM id, for use by d3
export default {
    name: 'LzPlot',
    props: {
        // The initial layout and datasources used to create this LZ instance.
        base_layout: { type: Object },
        base_sources: { type: Array },
        // Plot region
        chr: { type: String },
        start: { type: Number },
        end: { type: Number },

        show_loading: { type: Boolean, default: false }, // Show loading indicators
        // Change URL when plot updates. Only one plot on the page should use this.
        dynamic_urls: { default: false },
    },
    beforeCreate() {
        uid += 1;
        this.dom_id = `lz-plot-${uid}`; // DOM element
        this.plot_id = this.dom_id.replace(/-/g, '_'); // How to expose the plot instance globally

        // This is important: plot must be assigned as a static property. If it were a field in
        //  `data` , vue would recursively wrap it as an observable, and Really Bad Things Happen.
        this.plot = null;
        this.data_sources = null;
    },
    mounted() {
        this.createLZ(this.base_layout, this.base_sources);
    },
    beforeDestroy() {
        delete window[this.plot_id];
    },
    computed: {
        region() { // Hack: make sure that all 3 region properties get updated atomically
            const { chr, start, end } = this;
            return { chr, start, end };
        },
    },
    methods: {
        /**
         * Create an LZ plot
         * @param {object} base_layout
         * @param {Array[]} base_sources
         */
        createLZ(base_layout, base_sources) {
            // Create and populate the plot
            const data_sources = new LocusZoom.DataSources();
            base_sources.forEach(([name, config]) => data_sources.add(name, config));
            const plot = LocusZoom.populate(`#${this.dom_id}`, data_sources, base_layout);

            if (this.show_loading) {
                // Add loading indicator to every panel if appropriate
                plot.layout.panels.forEach(panel => plot.panels[panel.id].addBasicLoader());
            }

            // Save references to the plot for manipulation later
            this.plot = plot;
            this.data_sources = data_sources;
            window[this.plot_id] = plot; // TODO: This fits existing usage patterns, but it's icky

            // Expose events to things outside this component
            // IMPORTANT: never consume this value in a way that would wrap it as an observable
            //   (eg by assigning it to a field in `data`).
            this.connectListeners(plot);
            this.$emit('connected', plot, data_sources);
        },
        /**
         * The component should re-emit (most) plot-level event hooks built in to LocusZoom
         * @private
         * @param plot
         */
        connectListeners(plot) {
            Object.keys(plot.event_hooks)
                .forEach(name => plot.on(name, event => this.$emit(name, event)));

            // Also create a synthetic event not part of LZ, that makes it a little nicer to work
            //  with region data. (by returning what was actually displayed, not what was requested)
            plot.on('state_changed', (event) => {
                // An interesting quirk of region changing in LZ: event data provides
                //  the state requested (input), not final start/end (output)
                // The event we echo should use final plot.state as source of truth
                const { chr, start, end } = plot.state;
                const position_changed = Object.keys(event.data)
                    .some(key => ['chr', 'start', 'end'].includes(key));

                if (position_changed) {
                    this.$emit('region_changed', { chr, start, end });
                }
            });

            // Changes in the plot can be reflected in the URL, and vice versa (eg browser back
            //  button can go back to a previously viewed region).
            if (this.dynamic_urls) {
                plotUpdatesUrl(plot, stateUrlMapping);
                plotWatchesUrl(plot, stateUrlMapping);
            }
        },
    },
    watch: {
        region: {
            handler() {
                // FIXME: this component receives notifications of a value it changes, a design
                //   quirk that risks infinite update loops
                // Only apply new region information if it has changed
                const diffs = Object.keys(this.region).reduce((acc, key) => {
                    const new_val = this.region[key];
                    if (new_val !== this.plot.state[key]) {
                        acc[key] = new_val;
                    }
                    return acc;
                }, {});
                if (Object.keys(diffs).length) {
                    // Only re-render if the passed-in state values would be different
                    this.plot.applyState(diffs);
                }
            },
            deep: true,
        },
    },
};
</script>

<template>
    <div>
        <div :id="dom_id" class="lz-container-responsive"><slot></slot></div>
    </div>
</template>
