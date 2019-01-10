<script>
/**
 * A LocusZoom Plot
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
    },
    beforeDestroy() {
        delete window[this.plot_id];
    },
    data() {
        return {
            // plot: null,
            data_sources: null,
        };
    },
    methods: {
        createLZ(source_options, plot_options) {
            const [plot, data_sources] = createPlot(`#${this.dom_id}`, source_options, plot_options);
            // // The component should re-emit all plot-level event hooks
            Object.keys(plot.event_hooks)
                .forEach((name) => {
                    if (name === 'state_changed') {
                        // Plot.state often tracks a lot of internals that we don't want to expose
                        // to the outside world. Instead, mask this single event with one that
                        // just exposes position/ region changes.
                        plot.on('state_changed', (data) => {
                            const state = data.data;
                            const position = Object.keys(state).reduce((acc, key) => {
                                if (['chr', 'start', 'end'].contains(key)) {
                                    acc[key] = state[key];
                                }
                                return acc;
                            }, {});
                            if (Object.keys(position).length) {
                                this.$emit('region_changed', position);
                            }
                        });
                    } else {
                        // All other events are emitted outside the component exactly as given
                        plot.on(name, data => this.$emit(name, data));
                    }
                });
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
        plot_state: {
            handler() {
                // Parent components may only set a few parameters, and not know about all the
                //    other info that plot.state is responsible for managing.
                const diffs = Object.keys(this.plot_state).reduce((acc, key) => {
                    const new_val = this.plot_state[key];
                    if (new_val !== this.plot.state[key]) {
                        acc[key] = new_val;
                    }
                    return acc;
                }, {});

                if (Object.keys(diffs).length) {
                    // Only re-render if the passed-in state values would be different
                    this.plot.applyState(this.plot_state);
                }
            },
            deep: true,
        },
    },
};
</script>

<template>
    <!-- TODO: Does .populate correctly and persistently override the slot contents? -->
    <div>
        <div :id="dom_id" class="lz-container-responsive"></div>
    </div>
</template>

<style>
</style>
