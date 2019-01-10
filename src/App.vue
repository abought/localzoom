<script>
import bsCard from 'bootstrap-vue/es/components/card/card';
import bsCollapse from 'bootstrap-vue/es/components/collapse/collapse';
import bsNav from 'bootstrap-vue/es/components/nav/nav';
import bsNavItem from 'bootstrap-vue/es/components/nav/nav-item';
import bsTab from 'bootstrap-vue/es/components/tabs/tab';
import bsTabs from 'bootstrap-vue/es/components/tabs/tabs';
import bsToggle from 'bootstrap-vue/es/directives/toggle/toggle';

import GwasToolbar from './components/GwasToolbar.vue';
import LzAssocPlot from './components/LzAssocPlot.vue';

// TODO: Add component options for PheWAS plots


export default {
    name: 'LocalZoom',
    beforeCreate() {
        // Preserve a reference to component widgets so that their methods can be accessed directly
        //  Some- esp LZ plots- behave very oddly when wrapped as a nested observable; we can
        //  bypass these problems by assigning them as static properties instead of nested
        //  observables.
        this.assoc_plot = null;
        this.phewas_plot = null;
        this.export_table = null;
    },
    data() {
        return {
            // Placeholder values passed from toolbar to assoc plot
            tmp_options_plot: null,
            tmp_options_source: null,
            assoc_region: {}, // Keys chrom, start, end (used in plot.state and elsewhere)

            // State to be tracked across all components
            study_names: [],
        };
    },
    methods: {
        getPlotOptions(source_options, plot_options) {
            this.study_names.push(source_options.label);
            this.tmp_options_plot = plot_options;
            this.tmp_options_source = source_options;
        },
    },
    components: {
        LzAssocPlot,
        GwasToolbar,
        bsCollapse,
        bsCard,
        bsNav,
        bsNavItem,
        bsTab,
        bsTabs,
    },
    directives: { 'b-toggle': bsToggle },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1><strong>LocalZoom: Plot your own data with LocusZoom.js</strong></h1>
        <hr>
        <button class="btn-link" v-b-toggle.instructions>Instructions</button>
        <bs-collapse id="instructions" class="mt-2">
          <bs-card>
            <div class="card-text">
            This is a demonstration of loading GWAS results via the web browser, fetching only the
            data
            required for that region. It relies on four assumptions:
            <ol>
              <li>Your data has been stored in a compressed format, and indexed using Tabix. The
                index file must be in the same path, with the suffix <em>.tbi</em></li>
              <li>The data is hosted in a place that is reachable by web browser (eg local files
                or a service such as S3)
              </li>
              <li>If using a remote URL, the host location must support byte range requests. (<a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests#Checking_if_a_server_supports_partial_requests">how
                to check</a>)
              </li>
              <li>Your file contains information required to draw a plot. Chromosome, position,
                ref, and alt alleles can be specified as either individual columns, or a SNP
                marker (eg <code>chr:pos_ref/alt</code>); there must also be a p-value
                (or -log10 pvalue) for each SNP as a separate column.
                <em>Client-side plots cannot be generated from rsIDs.</em></li>
            </ol>

            <p>This service is designed to efficiently fetch only the data needed for the plot
              region of interest. Therefore, it cannot generate summary views that would require
              processing the entire file (eg Manhattan plots).
            </p>

            <p>
              LD and overlay information is based on a specific build (<strong>build GRCh37</strong>
              or <strong>build GRCh38</strong> are supported). Exercise caution when interpreting
              plots based on a GWAS with positions from a different build.
            </p>

            <p>
              Credible sets are
              <a href="https://github.com/statgen/gwas-credible-sets/">calculated</a> based on the
              p-values for the displayed region. At the moment this tool does not support
              uploading your own custom credible set annotations.
            </p>
            </div>
          </bs-card>
        </bs-collapse>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <gwas-toolbar
            @config-ready="getPlotOptions"
            @select-range="assoc_region = $event"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <bs-nav vertical tabs>
          <bs-nav-item active>GWAS</bs-nav-item>
          <bs-nav-item>PheWAS</bs-nav-item>
          <bs-nav-item>Export</bs-nav-item>
        </bs-nav>
      </div>
      <div class="col-md-9">
        <keep-alive>

        <lz-assoc-plot
            :source_options="tmp_options_source"
            :plot_options="tmp_options_plot"
            :region="assoc_region"
            @region_changed="assoc_region = $event"
            @connected="assoc_plot = $event">
          <div class="placeholder-plot" style="display:table;">
            <span class="text-center" style="display: table-cell; vertical-align:middle">
              Please add a GWAS track to continue
            </span>
          </div>
        </lz-assoc-plot>
        </keep-alive>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <footer style="text-align: center;">
          &copy; Copyright 2019 <a href="https://github.com/statgen">The University of Michigan Center
          for Statistical
          Genetics</a><br>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .placeholder-plot {
        width: 100%;
          height: 400px;
          border-style: dashed;
    }
</style>
