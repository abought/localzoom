// /* global $ */
import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';
// import { createTableConfig } from './util/credible-set-ui';

Vue.config.productionTip = false;

// const PLOT_ID = '#lz-plot';
// const CREDSET_TABLE_SELECTOR = $('#credible-set-table');
// const CREDSET_OPTION_SELECTOR = $('#credible-set-datasets');
// const CREDSET_BUTTON_SELECTOR = $('#credible-set-download');

const app = new Vue({ render: h => h(App) })
    .$mount('#localzoom-ui');
//
// // LocusZoom exists outside the Vue instance, and responds to controls via event listeners
// //  References to the plot and data_sources objects will be deliberately attached to root to
// //  facilitate debugging
// app.$on('config-ready', (source_options, plot_options) => {
//     if (plot_options.annotations.credible_sets) {
//         $(`<option value="${source_options.label}">${source_options.label}</option>`).appendTo(CREDSET_OPTION_SELECTOR);
//     }
// });
//
// // Redraw the plot whenever region selection changes
// app.$on('select-range', state => window.plot.applyState(state));
//
// // Control drawing of credible set results table (if this feature is selected)
// CREDSET_TABLE_SELECTOR.tabulator({
//     index: 'id',
//     height: 300,
//     layout: 'fitColumns',
//     layoutColumnsOnNewData: true,
// });
// // eslint-disable-next-line func-names
// CREDSET_OPTION_SELECTOR.change(function () {
//     CREDSET_BUTTON_SELECTOR.removeClass('d-none');
//     CREDSET_TABLE_SELECTOR.removeClass('d-none');
//
//     const source_label = $(this).val();
//     const source_name = sourceName(source_label);
//
//     // Redefine the table to associate with the correct data
//     const config = createTableConfig(source_name);
//     CREDSET_TABLE_SELECTOR.tabulator('setColumns', config);
//     CREDSET_TABLE_SELECTOR.tabulator('setSort', `credset_${source_name}:posterior_prob`, 'desc');
//
//     window.plot.subscribeToData([
//         `assoc_${source_name}:variant`, `assoc_${source_name}:chromosome`,
//         `assoc_${source_name}:position`, `assoc_${source_name}:ref_allele`,
//         `assoc_${source_name}:alt_allele`, `assoc_${source_name}:log_pvalue`,
//         `credset_${source_name}:is_member`,
//         `credset_${source_name}:posterior_prob`,
//     ], (data) => {
//         const credible = data.filter(item => item[`credset_${source_name}:is_member`]);
//         CREDSET_TABLE_SELECTOR.tabulator('setData', credible);
//     });
//     // In this use case, the plot already has data; make sure it feeds data to the table immediately
//     window.plot.emit('data_rendered');
// });
//
// CREDSET_BUTTON_SELECTOR.on('click', () => {
//     CREDSET_TABLE_SELECTOR.tabulator('download', 'csv', 'credible-set-members.csv');
// });
