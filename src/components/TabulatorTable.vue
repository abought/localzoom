<script>
import Tabulator from 'tabulator-tables';

export default {
    name: 'TabulatorTable',
    props: { data: Object, columns: Array, initialSort: Object },
    data() {
        return { tabulator: null };
    },
    watch: {
        tableData: {
            handler(value) {
                this.tabulator.replaceData(value);
            },
            deep: true,
        },
        columns: {
            handler(value) {
                this.tabulator.setColumns(value);
            },
            deep: true,
        },
        initialSort: {
            handler(value) {
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
<div ref="table"></div>
</template>

<style scoped>
</style>
