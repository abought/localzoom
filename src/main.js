// /* global $ */
import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import App from './App.vue';

new Vue({ render: h => h(App) })
    .$mount('#app');
