<script>
/**
 * A LocusZoom Plot
 */

import { createPlot, addPanels } from '../util/lz-helpers';

let uid = 0; // Ensure that every component instance has a unique DOM id, for use by d3

export default {
    name: 'LzPlot',
    props: ['source_options', 'plot_options', 'plot_state'],
    beforeCreate() {
        uid += 1;
        this.dom_id = `lz-plot-${uid}`; // DOM element
        this.plot_id = this.dom_id.replace(/-/g, '_'); // How to expose the plot instance globally
    },
    deforeDestroy() {
        delete window[this.plot_id];
    },
    data() {
        return {
            plot: null,
            data_sources: null,
        };
    },
    methods: {
        createLZ(source_options, plot_options) {
            const [plot, data_sources] = createPlot(`#${this.dom_id}`, source_options, plot_options);

            // The component should re-emit all plot-level event hooks
            Object.keys(plot.event_hooks)
                .forEach(name => plot.on(name, data => this.$emit(name, data)));

            this.plot = plot;
            this.data_sources = data_sources;

            // Expose a global reference to the plot, to facilitate debugging
            window[this.plot_id] = plot;
            this.$emit('connected', plot);
        },
        updateLZ(source_options, plot_options) {
            addPanels(this.plot, this.data_sources, source_options, plot_options);
        },
    },
    watch: {
        source_options() {
            if (!this.plot) {
                this.createLZ(this.source_options, this.plot_options);
            } else {
                this.updateLZ(this.source_options, this.plot_options);
            }
        },
        plot_state() {
            this.plot.applyState(this.plot_state);
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

<style scoped>

</style>
