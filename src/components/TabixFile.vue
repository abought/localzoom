<script type="application/javascript">
/**
 * Create a reader instance by picking files from a local machine
 */

import { blobReader } from 'tabix-reader';

export default {
    methods: {
        addSource(event) {
            const self = this;
            const { files } = event.target;

            let tabix_file;
            let gwas_file;
            for (let i = 0; i < files.length; i++) {
                const f = files.item(i);
                if (f.name.endsWith('.tbi')) {
                    tabix_file = f;
                } else {
                    gwas_file = f;
                }
            }
            if (files.length !== 2 || !tabix_file) {
                self.$emit('fail', 'Must select two files: gzipped data and accompanying tabix index');
                return;
            }
            const name = tabix_file.name.replace(/\.gz|\.tbi/gi, '');
            blobReader(gwas_file, tabix_file).then((reader) => {
                self.$emit('ready', reader, name);
            }).catch((err) => {
                self.$emit('fail', err);
            }).finally(() => {
                // Ensure that onchange fires even if same file selected later
                event.target.value = null;
            });
        },
    },
};
</script>

<template>
<span>
  <label class="btn btn-success mb-0" for="file-picker">Add a file...</label>
    <input id="file-picker" type="file" style="opacity: 0; width:0; height:0"
           multiple accept="application/gzip,.tbi" @change="addSource($event)">
</span>
</template>
