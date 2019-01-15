<script>
/* global LocusZoom */
import LzPlot from '@/components/LzPlot.vue';

export default {
    name: 'PhewasMaker',
    beforeCreate() {
        // LZ plots must be stored as static references, not observables
        this.plot = null;
        this.datasources = null;
    },
    props: ['variant_name', 'build', 'your_study', 'your_logpvalue'],
    computed: {
        display_logpvalue() {
            return LocusZoom.TransformationFunctions.get('scinotation')(this.your_logpvalue);
        },
        base_phewas_layout() {
            return LocusZoom.Layouts.get(
                'plot', 'standard_phewas',
                {
                    height: 250,
                    min_height: 200,
                    panels: [LocusZoom.Layouts.get('panel', 'phewas', { unnamespaced: true })],
                    state: { variant: this.variant_name, genome_build: this.build },
                },
            );
        },
        base_phewas_sources() {
            return [
                ['phewas', ['PheWASLZ', { url: 'https://portaldev.sph.umich.edu/ukbb/v1/statistic/phewas/' }]],
            ];
        },
    },
    methods: {
        receivePlot(plot, datasources) {
            this.plot = plot;
            this.datasources = datasources;
        },
    },
    watch: {
        variant_name() {
            if (!this.plot) {
                return;
            }
            this.plot.applyState({ variant: this.variant_name });
        },
    },
    components: { LzPlot },
};
</script>

<template>
<div>
  <p v-if="!variant_name">
    Please select a variant in order to generate a PheWAS plot. You can click on any scatter plot
    point in an association track.
  </p>
  <div v-else>
    <h3>{{ variant_name }} in context</h3>
    <p>
      In your study <em>{{ your_study }}, this variant has a </em> -log<sub>10</sub> p-value of:
      <strong>{{ display_logpvalue }}</strong>.
    </p>

    <lz-plot
        :base_layout="base_phewas_layout"
        :base_sources="base_phewas_sources"
        :show_loading="true"

        @connected="receivePlot" />
  </div>
  <p>
    PheWAS results are draw from a large-scale analysis of the UK Biobank dataset, as described in
    <a href="https://doi.org/10.1038/s41588-018-0184-y">Nature Genetics volume 50, pages 1335–1341 (2018)</a>.
  </p>

</div>
</template>


<style scoped>

</style>
