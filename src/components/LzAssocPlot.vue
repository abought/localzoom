<script>
/**
 * A LocusZoom Plot
 * TODO: Generalize to any plot (with mechanisms to push configuration)
 */
import { createPlot, addPanels } from '../util/lz-helpers';

let uid = 0; // Ensure that every component instance has a unique DOM id, for use by d3

export default {
    name: 'LzPlot',
    props: ['source_options', 'plot_options', 'region'],
    beforeCreate() {
        uid += 1;
        this.dom_id = `lz-plot-${uid}`; // DOM element
        this.plot_id = this.dom_id.replace(/-/g, '_'); // How to expose the plot instance globally

        // This is important: plot must be assigned as a static property. If it were a field in
        //  `data` , vue would recursively wrap it as an observable, and Really Bad Things Happen.
        this.plot = null;
        this.data_sources = null;
    },
    beforeDestroy() {
        delete window[this.plot_id];
    },
    methods: {
        createLZ(source_options, plot_options) {
            const [plot, data_sources] = createPlot(`#${this.dom_id}`, source_options, plot_options);
            this.connectListeners(plot);
            this.plot = plot;
            this.data_sources = data_sources;
            // Expose a global reference to the plot, to facilitate debugging. (TODO: revisit)
            window[this.plot_id] = plot;
            // IMPORTANT: never consume this value in a way that would wrap it as an observable
            //   (eg by assigning it to a field in `data`).
            this.$emit('connected', plot);
        },
        updateLZ(source_options, plot_options) {
            addPanels(this.plot, this.data_sources, source_options, plot_options);
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
        },
    },
    watch: {
        source_options: {
            handler() {
                const { plot_options } = this;
                const source_options = Object.assign({}, this.source_options);
                source_options.parser_config = Object.assign({}, source_options.parser_config);

                if (!this.plot) {
                    this.createLZ(source_options, plot_options);
                } else {
                    this.updateLZ(source_options, plot_options);
                }
            },
            deep: true,
        },
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

<style>
</style>
