/* global $, LocusZoom */
import Vue from 'vue';
import App from './App.vue';

import { createPlot, addPlotPanel } from './util/lz-helpers';

Vue.config.productionTip = false;

const TABLE_CREDSET_SELECTOR = $('#table-credsets');
const BUTTON_CREDSET_SELECTOR = $('#download-credsets');

function formatSciNotation(cell, params) {
    // Tabulator cell formatter using sci notation
    const value = cell.getValue();
    return LocusZoom.TransformationFunctions.get('scinotation')(value);
}

function createTable(table_selector, button_selector) {
    // FIXME: The table part of the demo will ONLY work for the first panel-set added (known issue)
    table_selector.tabulator({
        index: 'id',
        height: 300,
        layout: 'fitColumns',
        layoutColumnsOnNewData: true,
        columns: [
            { title: 'Variant', field: 'assoc:variant' },
            { title: 'Chrom', field: 'assoc:chromosome' },
            { title: 'Pos', field: 'assoc:position' },
            { title: 'Pos', field: 'assoc:ref_allele' },
            { title: 'Alt', field: 'assoc:alt_allele' },
            { title: '-log10 pvalue', field: 'assoc:log_pvalue', formatter: formatSciNotation },
            { title: 'Posterior probability', field: 'assoc:credibleSetPosteriorProb|scinotation' },
            { title: 'Credible set contribution', field: 'assoc:credibleSetContribution', formatter: formatSciNotation, sorter: 'number' },
        ],
        placeholder: 'No Data Available',
        initialSort: [
            { column: 'assoc:credibleSetContribution', dir: 'desc' },
        ],
    });

    button_selector.on('click', () => {
        table_selector.tabulator('download', 'csv', 'credible-set-members.csv');
    });
}

// Add a tabulator widget representing results (does not use VueJS)
createTable(TABLE_CREDSET_SELECTOR, BUTTON_CREDSET_SELECTOR);

const app = new Vue({ render: h => h(App) })
    .$mount('#choose-gwas');

// LocusZoom exists outside the Vue instance, and responds to controls via event listeners
//  References to the plot and data_sources objects will be deliberately attached to root to
//  facilitate debugging
app.$on('config-ready', (name, reader, options) => {
    if (!window.plot) {
        [window.plot, window.data_sources] = createPlot('#lz-plot', name, reader, options);

        window.plot.subscribeToData([
            'assoc:variant', 'assoc:chromosome', 'assoc:position', 'assoc:ref_allele',
            'assoc:alt_allele', 'assoc:log_pvalue', 'assoc:isCredible',
            'assoc:credibleSetPosteriorProb|scinotation',
            'assoc:credibleSetContribution',
        ], (data) => {
            const credible = data.filter(item => item['assoc:isCredible']);
            TABLE_CREDSET_SELECTOR.tabulator('setData', credible);
        });
    } else {
        addPlotPanel(window.plot, window.data_sources, name, reader, options);
    }
});

app.$on('select-range', state => window.plot.applyState(state));
