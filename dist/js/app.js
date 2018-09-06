(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)r=s[d],i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0170":function(e,t,n){},"034f":function(e,t,n){"use strict";var a=n("c21b"),i=n.n(a);i.a},"088c":function(e,t,n){},"2af1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.selections.length?n("region-picker"):e._e(),n("h3",[e._v("Your studies")]),n("studies-vlist",{attrs:{items:e.selections}}),n("button",{staticClass:"btn btn-primary mx-auto-auto",on:{click:function(t){e.showModal=!0}}},[e._v("Add a dataset")]),e.showModal?n("adder-wizard",{on:{"config-ready":e.sendConfig,close:function(t){e.showModal=!1}}}):e._e()],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header"},[n("h3",[e._v("Add a GWAS")]),n("button",{staticClass:"pull-right",attrs:{"aria-label":"close"},on:{click:function(t){e.$emit("close")}}},[e._v("X")])]),n("div",{staticClass:"modal-body"},["select_source"===e.currentPage?n("div",[e.adderMode?"file"===e.adderMode?n("div",[n("tabix-file",{on:{connected:e.connectReader}})],1):"url"===e.adderMode?n("div",[n("tabix-url",{on:{connected:e.connectReader}})],1):e._e():n("div",[n("p",[e._v("How would you like to load your data?")]),n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn btn-info",on:{click:function(t){e.adderMode="file"}}},[e._v("\n                  Local file\n                ")]),n("br"),e._v("\n                or"),n("br"),n("button",{staticClass:"btn btn-info",on:{click:function(t){e.adderMode="url"}}},[e._v("\n                  Remote URL\n                ")])])])]):"select_options"===e.currentPage?n("div",[n("tabix-options",{on:{connected:e.connectParser}})],1):"accept_options"===e.currentPage?n("div",[n("label",[e._v("Name: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.previewName,expression:"previewName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.previewName},on:{input:function(t){t.target.composing||(e.previewName=t.target.value)}}})]),n("button",{staticClass:"btn btn-primary",on:{click:e.sendOptions}},[e._v("\n              Add to plot\n            ")])]):n("div",{staticClass:"text-error"},[e._v("\n            You have reached this page in error. Please report this message to our developers.\n          ")])]),n("div",{staticClass:"modal-footer"})])])])])},s=[],c=(n("f751"),n("a481"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Select a file...\n    "),n("input",{attrs:{id:"file-picker",type:"file",multiple:"",accept:"application/gzip,.tbi"},on:{change:function(t){e.addSource(t)}}})]),n("p",{attrs:{id:"validation-message"}},[e._v(e._s(e.validationMessage))])])}),l=[],u=(n("7f7f"),n("aef6"),{data:function(){return{validationMessage:""}},methods:{addSource:function(e){var t=this;t.validationMessage="";for(var n,a,i=e.target.files,o=0;o<i.length;o++){var r=i.item(o);r.name.endsWith(".tbi")?n=r:a=r}if(2===i.length&&n){var s=n.name.replace(/\.gz|\.tbi/gi,"");blobReader(a,n).then(function(e){t.$emit("connected",e,s)}).catch(function(e){t.validationMessage=e})}else t.validationMessage="Must select two files: gzipped data and accompanying tabix index"}}}),d=u,p=n("2877"),v=Object(p["a"])(d,c,l,!1,null,null,null);v.options.__file="TabixFile.vue";var f=v.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",[e._v("Marker column:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.marker_col,expression:"marker_col"}],staticClass:"number-field",attrs:{type:"number",min:"0",step:"1",placeholder:"0"},domProps:{value:e.marker_col},on:{input:function(t){t.target.composing||(e.marker_col=t.target.value)}}})]),n("label",[e._v("P-value column:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pvalue_col,expression:"pvalue_col"}],staticClass:"number-field",attrs:{type:"number",min:"0",step:"1",placeholder:"1"},domProps:{value:e.pvalue_col},on:{input:function(t){t.target.composing||(e.pvalue_col=t.target.value)}}})]),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.is_log_p,expression:"is_log_p"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.is_log_p)?e._i(e.is_log_p,null)>-1:e.is_log_p},on:{change:function(t){var n=e.is_log_p,a=t.target,i=!!a.checked;if(Array.isArray(n)){var o=null,r=e._i(n,o);a.checked?r<0&&(e.is_log_p=n.concat([o])):r>-1&&(e.is_log_p=n.slice(0,r).concat(n.slice(r+1)))}else e.is_log_p=i}}}),e._v("Uses -log(p)\n  ")]),n("label",[e._v("Delimiter:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.delimiter,expression:"delimiter"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.delimiter=t.target.multiple?n:n[0]}}},e._l(e.delimiter_options,function(t){return n("option",{key:t[0],domProps:{value:t[0]}},[e._v("\n        "+e._s(t[1])+"\n      ")])}))]),n("button",{staticClass:"btn btn-primary",on:{click:e.sendOptions}},[e._v("Accept options")])])},_=[],g={name:"TabixOptions",data:function(){return{delimiter_options:[["\t","Tab"],[" ","Space"],[",","Comma"]],marker_col:4,pvalue_col:5,is_log_p:!1,delimiter:"\t"}},methods:{sendOptions:function(){var e=this.marker_col,t=this.pvalue_col,n=this.is_log_p,a=this.delimiter;this.$emit("connected",{marker_col:e,pvalue_col:t,is_log_p:n,delimiter:a})}}},h=g,b=(n("9107"),Object(p["a"])(h,m,_,!1,null,"169358cf",null));b.options.__file="TabixOptions.vue";var w=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.url,expression:"url",modifiers:{trim:!0}}],attrs:{type:"url",placeholder:"Specify a URL"},domProps:{value:e.url},on:{input:function(t){t.target.composing||(e.url=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),n("button",{staticClass:"btn-primary",on:{click:e.addSource}},[e._v("Add")]),n("p",{attrs:{id:"validation-message"}},[e._v(e._s(e.validationMessage))])])},x=[],k=(n("28a5"),{data:function(){return{url:"",validationMessage:""}},methods:{addSource:function(){var e=this;e.validationMessage="";var t="".concat(this.url,".tbi"),n=t.split("/").pop().replace(/\.gz|\.tbi/gi,"");urlReader(this.url,t).then(function(t){e.$emit("connected",t,n)}).catch(function(t){e.validationMessage=t})}}}),M=k,O=(n("c18f"),Object(p["a"])(M,y,x,!1,null,null,null));O.options.__file="TabixUrl.vue";var C=O.exports,P={name:"adder-wizard",data:function(){return{currentPage:"select_source",adderMode:null,previewReader:null,previewName:null,previewParserOptions:{}}},methods:{connectReader:function(e,t){this.previewReader=e,this.previewName=t.replace(/[^A-Za-z0-9_]/g,"_"),this.currentPage="select_options"},connectParser:function(e){this.previewParserOptions=e,this.currentPage="accept_options"},sendOptions:function(){var e=this.previewName,t=this.previewReader,n=this.previewParserOptions;this.$emit("config-ready",e,t,Object.assign({},n)),this.$emit("close")}},components:{TabixUrl:C,TabixFile:f,TabixOptions:w}},j=P,$=(n("9d5c"),Object(p["a"])(j,r,s,!1,null,"7fe56fa6",null));$.options.__file="adder-wizard.vue";var L=$.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.region,expression:"region"}],staticClass:"form-control",attrs:{type:"text",placeholder:"chr:start-end"},domProps:{value:e.region},on:{input:function(t){t.target.composing||(e.region=t.target.value)}}}),n("button",{staticClass:"btn btn-primary",on:{click:e.selectRegion}},[e._v("Go to region")]),n("span",[e._v(e._s(e.validationMessage))])])},R=[],N=n("9393"),S=(n("4917"),n("c5f6"),/(?:chr)?(.+):(\d+)[_:]?(\w+)?[/:|]?([^_]+)?_?(.*)?/),T=/(?:chr)?(.+):(\d+)-(\d+)/,Z={name:"region-picker",props:{max_range:{type:Number,default:5e5}},data:function(){return{region:null,validationMessage:""}},methods:{positionToRange:function(e){var t=Math.floor(this.max_range/2);return[e-t,e+t]},selectRegion:function(){this.validationMessage="";var e,t,n,a=this.region.match(T),i=this.region.match(S);if(a){var o=a.slice(1),r=Object(N["a"])(o,3);e=r[0],t=r[1],n=r[2]}else{if(!i)return void(this.validationMessage="Could not parse specified range");var s,c=i.slice(1),l=Object(N["a"])(c,2);e=l[0],s=l[1],s=+s;var u=this.positionToRange(s),d=Object(N["a"])(u,2);t=d[0],n=d[1]}t=+t,n=+n,this.$root.$emit("select-range",{chr:e,start:t,end:n})}}},z=Z,E=(n("c812"),Object(p["a"])(z,A,R,!1,null,"48fa24f6",null));E.options.__file="region-picker.vue";var U=E.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.items.length?n("div",[n("ul",{staticClass:"list-group"},e._l(e.items,function(t,a){return n("li",{key:a,staticClass:"list-group-item"},[e._v("\n        "+e._s(t)+"\n      ")])}))]):n("div",[e._v("\n    No studies selected\n  ")])])},G=[],W={name:"studies-vlist",props:{items:{type:Array,default:function(){return[]}}}},F=W,J=(n("e9c2"),Object(p["a"])(F,D,G,!1,null,"46b5e1f7",null));J.options.__file="studies-vlist.vue";var K=J.exports,Y={name:"gwas-chooser",data:function(){return{showModal:!1,selections:[]}},methods:{sendConfig:function(e,t,n){this.selections.push(e),this.$root.$emit("config-ready",e,t,n)}},components:{AdderWizard:L,StudiesVlist:K,RegionPicker:U}},q=Y,H=(n("034f"),Object(p["a"])(q,i,o,!1,null,null,null));H.options.__file="App.vue";var I=H.exports;n("7872");function V(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n.id_field="variant";var a="https://portaldev.sph.umich.edu/api/v1/",i=(new LocusZoom.DataSources).add("assoc",["TabixAssociationLZ",{tabix_reader:t,params:n}]).add("ld",["LDLZ",{url:"".concat(a,"pair/LD/")}]).add("gene",["GeneLZ",{url:"".concat(a,"annotation/genes/"),params:{source:2}}]).add("recomb",["RecombLZ",{url:"".concat(a,"annotation/recomb/results/"),params:{source:15}}]).add("constraint",["GeneConstraintLZ",{url:"http://exac.broadinstitute.org/api/constraint"}]),o=LocusZoom.Layouts.get("plot","standard_association",{state:{chr:"10",start:123802119,end:124202119}});o.panels[0].title={text:e},window.plot=LocusZoom.populate("#lz-plot",i,o),window.data_sources=i}function X(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};n.id_field="variant";var a="assoc_".concat(e);window.data_sources.add(a,["TabixAssociationLZ",{tabix_reader:t,params:n}]);var i={namespace:{default:a,assoc:a,ld:"ld"},id:a,title:{text:e},y_index:-1},o=LocusZoom.Layouts.get("panel","association",i);window.plot.addPanel(o)}LocusZoom.KnownDataSources.extend("AssociationLZ","TabixAssociationLZ",{parseInit:function(e){this.params=e.params,this.reader=e.tabix_reader},getCacheKey:function(e,t,n){return[e.chr,e.start,e.end].join("_")},fetchRequest:function(e,t,n){var a=this;return new Promise(function(t,n){a.reader.fetch(e.chr,e.start,e.end,function(e,a){a&&n(a),t(e)})})},normalizeResponse:function(e){var t=this;return e.map(function(e){var n=e.split(t.params.delimiter),a=n[t.params.marker_col-1],i=a.match(S);if(!i)throw"Could not understand marker format. Must be of format chr:pos or chr:pos_ref/alt";var o=i.slice(1),r=Object(N["a"])(o,4),s=r[0],c=r[1],l=r[2],u=r[3],d=l&&u?"_".concat(l,"/").concat(u):"",p=+n[t.params.pvalue_col-1],v=t.params.is_log_p?p:-Math.log10(p);return{chromosome:s,position:+c,ref_allele:l||null,log_pvalue:v,variant:"".concat(s,":").concat(c).concat(d)}})}}),a["a"].config.productionTip=!1;var B=new a["a"]({render:function(e){return e(I)}}).$mount("#choose-gwas");B.$on("config-ready",function(e,t,n){window.plot?X(e,t,n):V(e,t,n)}),B.$on("select-range",function(e){return window.plot.applyState(e)})},"5d9d":function(e,t,n){},9107:function(e,t,n){"use strict";var a=n("088c"),i=n.n(a);i.a},"9d5c":function(e,t,n){"use strict";var a=n("5d9d"),i=n.n(a);i.a},c18f:function(e,t,n){"use strict";var a=n("0170"),i=n.n(a);i.a},c21b:function(e,t,n){},c812:function(e,t,n){"use strict";var a=n("c81c"),i=n.n(a);i.a},c81c:function(e,t,n){},e9c2:function(e,t,n){"use strict";var a=n("2af1"),i=n.n(a);i.a}});
//# sourceMappingURL=app.js.map