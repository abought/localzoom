(function(e){function t(t){for(var o,r,n=t[0],l=t[1],c=t[2],d=0,p=[];d<n.length;d++)r=n[d],s[r]&&p.push(s[r][0]),s[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],o=!0,n=1;n<a.length;n++){var l=a[n];0!==s[l]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var o={},s={app:0},i=[];function r(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=o,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(a,o,function(t){return e[t]}.bind(null,o));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var o=a("c21b"),s=a.n(o);s.a},"115a":function(e,t,a){"use strict";var o=a("504d"),s=a.n(o);s.a},"4b25":function(e,t,a){},"504d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var o=a("9393"),s=(a("cadf"),a("551c"),a("097d"),a("2b0e")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.studyCount<e.maxStudies?a("div",[a("tabix-file",{staticClass:"float-left mr-3",on:{connected:e.connectReader}}),e.showModal?a("adder-wizard",{attrs:{file_reader:e.fileReader,file_name:e.displayName},on:{"update:file_name":function(t){e.displayName=t},"config-ready":e.sendConfig,close:function(t){e.showModal=!1}}}):e._e()],1):e._e(),e.studyCount?a("region-picker",{staticClass:"float-right"}):e._e(),e.studyCount?e._e():a("bs-dropdown",{staticClass:"float-right",attrs:{text:"Plot options",variant:"info"}},[a("div",{staticClass:"px-3"},[a("strong",[e._v("Annotations")]),a("br"),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.hasCatalog,expression:"hasCatalog"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"show-catalog"},domProps:{checked:Array.isArray(e.hasCatalog)?e._i(e.hasCatalog,null)>-1:e.hasCatalog},on:{change:function(t){var a=e.hasCatalog,o=t.target,s=!!o.checked;if(Array.isArray(a)){var i=null,r=e._i(a,i);o.checked?r<0&&(e.hasCatalog=a.concat([i])):r>-1&&(e.hasCatalog=a.slice(0,r).concat(a.slice(r+1)))}else e.hasCatalog=s}}}),a("label",{staticClass:"form-check-label",attrs:{for:"show-catalog"}},[e._v("GWAS Catalog")])]),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.hasCredibleSets,expression:"hasCredibleSets"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"show-credible-set"},domProps:{checked:Array.isArray(e.hasCredibleSets)?e._i(e.hasCredibleSets,null)>-1:e.hasCredibleSets},on:{change:function(t){var a=e.hasCredibleSets,o=t.target,s=!!o.checked;if(Array.isArray(a)){var i=null,r=e._i(a,i);o.checked?r<0&&(e.hasCredibleSets=a.concat([i])):r>-1&&(e.hasCredibleSets=a.slice(0,r).concat(a.slice(r+1)))}else e.hasCredibleSets=s}}}),a("label",{staticClass:"form-check-label",attrs:{for:"show-credible-set"}},[e._v("Credible sets")])]),a("strong",[e._v("Genome Build")]),a("br"),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.build,expression:"build"}],staticClass:"form-check-input",attrs:{type:"radio",id:"build-37",name:"build",value:"GRCh37"},domProps:{checked:e._q(e.build,"GRCh37")},on:{change:function(t){e.build="GRCh37"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"build-37"}},[e._v("GRCh37")])]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.build,expression:"build"}],staticClass:"form-check-input",attrs:{type:"radio",id:"build-38",name:"build",value:"GRCh38"},domProps:{checked:e._q(e.build,"GRCh38")},on:{change:function(t){e.build="GRCh38"}}}),a("label",{staticClass:"form-check-label",attrs:{for:"build-38"}},[e._v("GRCh38")])])])])],1)},r=[],n=(a("f751"),a("e14e")),l=a("0096"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[a("h3",[e._v("Select file options...")]),a("button",{staticClass:"pull-right",attrs:{"aria-label":"close"},on:{click:function(t){e.$emit("close")}}},[e._v("X\n          ")])]),a("div",{staticClass:"modal-body"},[a("div",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-3",attrs:{for:"display_name"}},[e._v("Dataset Label")]),a("div",{staticClass:"col-sm-9"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.file_name,expression:"file_name"}],staticClass:"form-control",attrs:{id:"display_name",type:"text"},domProps:{value:e.file_name},on:{input:function(t){t.target.composing||(e.file_name=t.target.value)}}})])]),a("bs-tabs",{model:{value:e.variant_spec_tab,callback:function(t){e.variant_spec_tab=t},expression:"variant_spec_tab"}},[a("bs-tab",{staticClass:"pt-3",attrs:{title:"Variant from columns"}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2",attrs:{for:"vs-chr"}},[e._v("Chromosome")]),a("div",{staticClass:"col-sm-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.chr_col,expression:"chr_col"}],staticClass:"form-control",attrs:{id:"vs-chr",disabled:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.chr_col=t.target.multiple?a:a[0]}}},e._l(e.column_titles,function(t,o){return a("option",{key:o,domProps:{value:o}},[e._v("\n                        "+e._s(t)+"\n                      ")])}))]),a("label",{staticClass:"col-sm-2",attrs:{for:"vs-pos"}},[e._v("Position")]),a("div",{staticClass:"col-sm-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.pos_col,expression:"pos_col"}],staticClass:"form-control",attrs:{id:"vs-pos",disabled:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.pos_col=t.target.multiple?a:a[0]}}},e._l(e.column_titles,function(t,o){return a("option",{key:o,domProps:{value:o}},[e._v("\n                        "+e._s(t)+"\n                      ")])}))])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2",attrs:{for:"vs-ref"}},[e._v("Ref allele")]),a("div",{staticClass:"col-sm-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.ref_col,expression:"ref_col"}],staticClass:"form-control",attrs:{id:"vs-ref"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.ref_col=t.target.multiple?a:a[0]}}},e._l(e.column_titles,function(t,o){return a("option",{key:o,domProps:{value:o}},[e._v("\n                        "+e._s(t)+"\n                      ")])}))]),a("label",{staticClass:"col-sm-2",attrs:{for:"vs-alt"}},[e._v("Alt allele")]),a("div",{staticClass:"col-sm-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.alt_col,expression:"alt_col"}],staticClass:"form-control",attrs:{id:"vs-alt"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.alt_col=t.target.multiple?a:a[0]}}},e._l(e.column_titles,function(t,o){return a("option",{key:o,domProps:{value:o}},[e._v("\n                        "+e._s(t)+"\n                      ")])}))])])]),a("bs-tab",{staticClass:"pt-3",attrs:{title:"Variant from marker"}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2",attrs:{for:"vs-marker"}},[e._v("Marker")]),a("div",{staticClass:"col-sm-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.marker_col,expression:"marker_col"}],staticClass:"form-control",attrs:{id:"vs-marker"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.marker_col=t.target.multiple?a:a[0]}}},e._l(e.column_titles,function(t,o){return a("option",{key:o,domProps:{value:o}},[e._v("\n                        "+e._s(t)+"\n                      ")])}))])])])],1),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2",attrs:{for:"vs-pval"}},[e._v("P-value column")]),a("div",{staticClass:"col-sm-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.pvalue_col,expression:"pvalue_col"}],staticClass:"form-control",attrs:{id:"vs-pval"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.pvalue_col=t.target.multiple?a:a[0]}}},e._l(e.column_titles,function(t,o){return a("option",{key:o,domProps:{value:o}},[e._v("\n                    "+e._s(t)+"\n                  ")])}))]),a("div",{staticClass:"col-sm-2"},[a("label",{staticClass:"form-check-label",staticStyle:{"white-space":"nowrap"},attrs:{for:"is_log_p"}},[e._v("\n                  Uses "),a("em",[e._v("-log"),a("sub",[e._v("10")]),e._v("(p)")])])]),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-check float-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.is_log_p,expression:"is_log_p"}],staticClass:"form-check-input",attrs:{id:"is_log_p",type:"checkbox"},domProps:{checked:Array.isArray(e.is_log_p)?e._i(e.is_log_p,null)>-1:e.is_log_p},on:{change:function(t){var a=e.is_log_p,o=t.target,s=!!o.checked;if(Array.isArray(a)){var i=null,r=e._i(a,i);o.checked?r<0&&(e.is_log_p=a.concat([i])):r>-1&&(e.is_log_p=a.slice(0,r).concat(a.slice(r+1)))}else e.is_log_p=s}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"card card-body bg-light"},[e.isValid&&e.preview.error?a("div",[a("span",{staticClass:"text-danger"},[e._v(e._s(e.preview.error))])]):e.isValid?a("div",[e._v("\n                  Variant: "+e._s(e.preview.variant)),a("br"),e._v("\n                  -log"),a("sub",[e._v("10")]),e._v("(p): "+e._s(e.preview.log_pvalue.toFixed(3))+"\n                ")]):a("div",[e._v("\n                  Please select options to preview parsed data\n                ")])])]),a("div",{staticClass:"row mt-3"},[a("button",{staticClass:"btn btn-primary ml-auto",attrs:{disabled:!e.isValid},on:{click:e.sendOptions}},[e._v("\n                Accept options\n              ")])])],1)])])])])])},u=[],d=(a("ac6a"),a("456d"),a("a481"),a("28a5"),a("40bb")),p=a("a212"),v=(a("7872"),a("4917"),/(?:chr)?(.+):(\d+)[_:]?(\w+)?[/:|]?([^_]+)?_?(.*)?/),m=/(?:chr)?(.+):(\d+)-(\d+)/;function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.marker_col,a=e.chr_col,s=e.pos_col,i=e.ref_col,r=e.alt_col,n=e.pvalue_col,l=e.is_log_p,c=void 0===l||l,u=e.delimiter,d=void 0===u?"\t":u;if(void 0!==t&&void 0!==a&&void 0!==s)throw new Error("Must specify either marker OR chr + pos");if(void 0===t&&(void 0===a||void 0===s))throw new Error("Must specify how to locate marker");return function(e){var l,u,p,m,f=e.split(d);if(void 0!==t){var _=f[t],h=_.match(v);if(!h)throw new Error("Could not understand marker format. Must be of format chr:pos or chr:pos_ref/alt");var g=h.slice(1),b=Object(o["a"])(g,4);l=b[0],u=b[1],p=b[2],m=b[3]}else{if(void 0===a||void 0===s)throw new Error("Must specify how to parse file");l=f[a].replace(/^chr/g,""),u=f[s],p=f[i],m=f[r]}var C=+f[n],y=c?C:-Math.log10(C);p=p||null,m=m||null;var w=p&&m?"_".concat(p,"/").concat(m):"";return{chromosome:l,position:+u,ref_allele:p,alt_allele:m,log_pvalue:y,variant:"".concat(l,":").concat(u).concat(w)}}}var _=f,h={name:"adder-wizard",mounted:function(){var e=this;document.body.addEventListener("keyup",function(t){"Escape"===t.key&&e.$emit("close")})},props:["file_reader","file_name"],data:function(){return{column_titles:[],sample_data:"",variant_spec_tab:0,marker_col:null,ref_col:null,alt_col:null,pvalue_col:null,is_log_p:!1}},watch:{file_reader:{immediate:!0,handler:function(){var e=this;this.file_reader.skip||this.file_reader.fetchHeader(function(t,a){e.column_titles=t[t.length-1].replace(/^#+/g,"").split("\t")}),this.file_reader.fetchHeader(function(t,a){e.file_reader.skip&&(e.column_titles=t[e.file_reader.skip-1].replace(/^#+/g,"").split("\t")),e.sample_data=t[t.length-1]},{nLines:25,metaOnly:!1})}}},computed:{chr_col:function(){return this.file_reader.colSeq-1},pos_col:function(){return this.file_reader.colStart-1},variantSpec:function(){var e=this.marker_col,t=this.chr_col,a=this.pos_col,o=this.ref_col,s=this.alt_col;return 1===this.variant_spec_tab&&null!==e?{marker_col:e}:null!==a&&null!==t?{chr_col:t,pos_col:a,ref_col:o,alt_col:s}:{}},parserOptions:function(){var e=this.pvalue_col,t=this.is_log_p;return Object.assign({},this.variantSpec,{pvalue_col:e,is_log_p:t})},isValid:function(){var e=0!==Object.keys(this.variantSpec).length,t=null!==this.pvalue_col;return e&&t},parser:function(){return this.isValid?_(this.parserOptions):function(){}},preview:function(){try{return this.parser(this.sample_data)}catch(e){return{error:"Could not parse column contents"}}}},methods:{sendOptions:function(){var e=this.preview.position,t={chr:this.preview.chromosome,start:Math.min(0,e-25e4),end:e+25e4};this.$emit("config-ready",Object.assign({},this.parserOptions),t),this.$emit("close")}},components:{bsTab:p["a"],bsTabs:d["a"]}},g=h,b=(a("8717"),a("2877")),C=Object(b["a"])(g,c,u,!1,null,"65ed7395",null);C.options.__file="AdderWizard.vue";var y=C.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{staticClass:"btn btn-success",attrs:{for:"file-picker"}},[e._v("Add a file...")]),a("input",{staticStyle:{opacity:"0"},attrs:{id:"file-picker",type:"file",multiple:"",accept:"application/gzip,.tbi"},on:{change:function(t){e.addSource(t)}}}),a("span",{attrs:{id:"validation-message"}},[e._v(e._s(e.validationMessage))])])},k=[],x=(a("7f7f"),a("aef6"),{data:function(){return{validationMessage:""}},methods:{addSource:function(e){var t=this;t.validationMessage="";for(var a,o,s=e.target.files,i=0;i<s.length;i++){var r=s.item(i);r.name.endsWith(".tbi")?a=r:o=r}if(2===s.length&&a){var n=a.name.replace(/\.gz|\.tbi/gi,"");blobReader(o,a).then(function(e){t.$emit("connected",e,n)}).catch(function(e){t.validationMessage=e})}else t.validationMessage="Must select two files: gzipped data and accompanying tabix index"}}}),S=x,A=Object(b["a"])(S,w,k,!1,null,null,null);A.options.__file="TabixFile.vue";var L=A.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.region,expression:"region"}],staticClass:"form-control",attrs:{type:"text",placeholder:"chr:start-end"},domProps:{value:e.region},on:{input:function(t){t.target.composing||(e.region=t.target.value)}}}),a("button",{staticClass:"btn btn-primary",on:{click:e.selectRegion}},[e._v("Go to region")]),a("span",[e._v(e._s(e.validationMessage))])])},P=[],R=(a("c5f6"),{name:"region-picker",props:{max_range:{type:Number,default:5e5}},data:function(){return{region:null,validationMessage:""}},methods:{positionToRange:function(e){var t=Math.floor(this.max_range/2);return[e-t,e+t]},selectRegion:function(){this.validationMessage="";var e,t,a,s=this.region.match(m),i=this.region.match(v);if(s){var r=s.slice(1),n=Object(o["a"])(r,3);e=n[0],t=n[1],a=n[2]}else{if(!i)return void(this.validationMessage="Could not parse specified range");var l,c=i.slice(1),u=Object(o["a"])(c,2);e=u[0],l=u[1],l=+l;var d=this.positionToRange(l),p=Object(o["a"])(d,2);t=p[0],a=p[1]}t=+t,a=+a,this.$root.$emit("select-range",{chr:e,start:t,end:a})}}}),M=R,j=(a("115a"),Object(b["a"])(M,O,P,!1,null,"753910e6",null));j.options.__file="RegionPicker.vue";var N=j.exports,Z={name:"gwas-chooser",data:function(){return{showModal:!1,studyCount:0,maxStudies:3,fileReader:null,displayName:null,hasCatalog:!1,hasCredibleSets:!1,build:"GRCh37"}},methods:{reset:function(){this.fileReader=null,this.displayName=null},connectReader:function(e,t){this.fileReader=e,this.displayName=t,this.showModal=!0},sendConfig:function(e,t){this.studyCount+=1;var a={gwas_catalog:this.hasCatalog,credible_sets:this.hasCredibleSets},o=this.build;this.$root.$emit("config-ready",{label:this.displayName,reader:this.fileReader,parser_config:e},{annotations:a,build:o,state:Object.assign({genome_build:this.build},t)}),this.reset()}},components:{bsDropdown:n["a"],bsDropdownItem:l["a"],AdderWizard:y,RegionPicker:N,TabixFile:L}},G=Z,$=(a("034f"),Object(b["a"])(G,i,r,!1,null,null,null));$.options.__file="App.vue";var E=$.exports,T=a("8afe");a("8615");function z(e){return e.replace(/[^A-Za-z0-9_]/g,"_")}function D(e){var t,a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{credible_sets:!1,gwas_catalog:!0},s=(arguments.length>2&&arguments[2],[]),i=z(e),r={assoc:"assoc_".concat(i),credset:"credset_".concat(i),catalog:"catalog"},n=LocusZoom.Layouts.get("panel","association",{id:"association_".concat(i),title:{text:e},namespace:r}),l=n.data_layers[2],c=l.tooltip,u=[];Object.values(o).some(function(e){return!!e})&&u.push({type:"display_options",position:"right",color:"blue",button_html:"Display options...",button_title:"Control how plot items are displayed",layer_name:"associationpvalues",default_config_display_name:"Default view",options:[]});var d=[];if(o.credible_sets){var p,v=LocusZoom.Layouts.get("panel","association_credible_set",{namespace:r});(p=u[0].options).push.apply(p,Object(T["a"])(v.dashboard.components.pop().options)),d.push("{{namespace[credset]}}posterior_prob","{{namespace[credset]}}contrib_fraction","{{namespace[credset]}}is_member"),c.html+="<br>Posterior probability: <strong>{{{{namespace[credset]}}posterior_prob|scinotation}}</strong><br>"}if(o.gwas_catalog){var m,f=LocusZoom.Layouts.get("panel","association_catalog",{namespace:r});(m=u[0].options).push.apply(m,Object(T["a"])(f.dashboard.components.pop().options)),d.push("{{namespace[catalog]}}rsid","{{namespace[catalog]}}trait","{{namespace[catalog]}}log_pvalue"),c.html+='{{#if {{namespace[catalog]}}rsid}}<br><a href="https://www.ebi.ac.uk/gwas/search?query={{{{namespace[catalog]}}rsid}}" target="_new">See hits in GWAS catalog</a>{{/if}}'}return(t=l.fields).push.apply(t,d),(a=n.dashboard.components).push.apply(a,u),s.push(LocusZoom.Layouts.get("panel","association",n)),o.gwas_catalog&&s.push(LocusZoom.Layouts.get("panel","annotation_catalog",{id:"catalog_".concat(i),namespace:r})),s}function V(e,t,a){var o=t.label,s=t.reader,i=t.parser_config;i.id_field="variant";var r="assoc_".concat(z(o));return e.add(r,["TabixAssociationLZ",{tabix_reader:s,params:i}]),e.add("credset_".concat(z(o)),["CredibleSetLZ",{params:{fields:{log_pvalue:"".concat(r,":log_pvalue")},threshold:.95}}]),D(o,a.annotations,a.build)}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{label:null,reader:null,parser_config:null},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{annotations:{},state:{}};t.parser_config.id_field="variant";var o="https://portaldev.sph.umich.edu/api/v1/",s="https://portaldev.sph.umich.edu/api_internal_dev/v1/",i=new LocusZoom.DataSources,r=V(i,t,a);r.push(LocusZoom.Layouts.get("panel","genes",{proportional_height:.5}));var n=LocusZoom.Layouts.get("plot","standard_association",{state:a.state,panels:r});i.add("catalog",["GwasCatalogLZ",{url:"".concat(o,"annotation/gwascatalog/results/")}]).add("ld",["LDLZ2",{url:"https://portaldev.sph.umich.edu/ld/",params:{source:"1000G",population:"ALL"}}]).add("gene",["GeneLZ",{url:"".concat(o,"annotation/genes/")}]).add("recomb",["RecombLZ",{url:"".concat(s,"annotation/recomb/results/")}]).add("constraint",["GeneConstraintLZ",{url:"http://exac.broadinstitute.org/api/constraint"}]);var l=LocusZoom.populate(e,i,n);return[l,i]}function W(e,t,a,o){var s=V(t,a,o);s.forEach(function(t){t.y_index=-1,e.addPanel(t)})}LocusZoom.KnownDataSources.extend("AssociationLZ","TabixAssociationLZ",{parseInit:function(e){this.params=e.params,this.parser=_(this.params),this.reader=e.tabix_reader},getCacheKey:function(e,t,a){return[e.chr,e.start,e.end].join("_")},fetchRequest:function(e,t,a){var o=this;return new Promise(function(t,a){o.reader.fetch(e.chr,e.start,e.end,function(e,o){o&&a(new Error("Could not read requested region. This may indicate an error with the .tbi index.")),t(e)})})},normalizeResponse:function(e){return e.map(this.parser)}}),s["a"].config.productionTip=!1;var F=new s["a"]({render:function(e){return e(E)}}).$mount("#choose-gwas");F.$on("config-ready",function(e,t){if(window.plot)W(window.plot,window.data_sources,e,t);else{var a=q("#lz-plot",e,t),s=Object(o["a"])(a,2);window.plot=s[0],window.data_sources=s[1]}}),F.$on("select-range",function(e){return window.plot.applyState(e)})},8717:function(e,t,a){"use strict";var o=a("4b25"),s=a.n(o);s.a},c21b:function(e,t,a){}});
//# sourceMappingURL=app.js.map