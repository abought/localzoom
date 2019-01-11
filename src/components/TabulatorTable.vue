<script>
import Tabulator from 'tabulator-tables';
import 'tabulator-tables/dist/css/tabulator.min.css'; // TODO: is this necessary?

export default {
    name: 'TabulatorTable',
    props: { data: Object, columns: Array, initialSort: Object }, // Option names per tabulator docs
    beforeCreate() {
        // DOM-manipulating widgets should store reference statically, not dynamically
        this.tabulator = null;
    },
    watch: {
        data: {
            handler(value) {
                this.tabulator.setData(value);
            },
            deep: true,
        },
        columns: { // Redefine the table
            handler(value) {
                this.tabulator.setColumns(value);
                this.tabulator.setSort(value);
            },
            deep: true,
        },
    },
    mounted() {
        this.tabulator = new Tabulator(this.$refs.table, {
            data: this.data,
            columns: this.columns,
            initialSort: this.initialSort,
        });
        // Expose a reference to the raw table object, for advanced usages such as click events
        this.$emit('connected', this.tabulator);
    },
};
</script>

<template>
  <div>
    <div ref="table"><slot></slot></div>
  </div>
</template>
