(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{460:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={data:function(){return{rules:{required:function(t){return!!t||"Required!"},number:function(t){return!isNaN(t)||"Must be a number!"}}}}}},461:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})},464:function(t,e,n){var content=n(478);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("c6a73764",content,!0,{sourceMap:!1})},475:function(t,e,n){var r=n(32);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},476:function(t,e,n){"use strict";n(240)("small",function(t){return function(){return t(this,"small","","")}})},477:function(t,e,n){"use strict";var r=n(464);n.n(r).a},478:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".upload-btn[data-v-23e895ce]{padding-left:16px;padding-right:16px}.upload-btn input[type=file][data-v-23e895ce]{position:absolute;height:.1px;width:.1px;overflow:hidden;opacity:0;z-index:-1}.upload-btn>.v-btn__content>span[data-v-23e895ce]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.upload-btn.v-btn--disabled[data-v-23e895ce]{background-color:grey!important}.upload-btn-hover[data-v-23e895ce]{cursor:pointer}",""])},479:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},480:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(78),n(238),n(41);var r={data:function(){return{snack:{text:"none",color:"error",show:!1}}},computed:{auth:function(){return this.$store.state.auth}},methods:{checkRole:function(t){var e=this;return new Promise(function(n,r){e.auth.loggedIn||n(!1),e.$auth.getUserRoles().then(function(e){e.find(function(e){return e.name===t||e.id===t})?n(!0):n(!1)}).catch(function(t){console.error(t),r(t)})})},checkRoles:function(t){var e=this;return new Promise(function(n,r){e.auth.loggedIn||n(!1),e.$auth.getUserRoles().then(function(e){t.forEach(function(t){e.find(function(e){return e.name===t||e.id===t})?n(!0):n(!1)})}).catch(function(t){console.error(t),r(t)})})},noPerms:function(){this.snack.text="Not logged in or insufficient permissions!",this.snack.color="error",this.snack.show=!0}}}},481:function(t,e,n){"use strict";n(239);var r={name:"DataTable",props:{name:{type:String,default:null},add:Boolean,useSearch:Boolean,search:{type:String,default:null},loading:Boolean,snack:{type:Object,default:function(){return{text:"none",color:"error",show:!1}}}},computed:{searchModel:{get:function(){return this.search},set:function(t){this.$emit("update:search",t)}}}},o=n(40),l=n(95),c=n.n(l),d=n(150),f=n(151),h=n(171),v=n(208),m=n(217),x=n(166),y=n(219),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:"info",elevation:"5"}},[n("v-toolbar",{attrs:{color:"primary","extension-height":"65px",dense:"",card:""},scopedSlots:t._u([t.useSearch?{key:"extension",fn:function(){return[n("v-text-field",{staticClass:"grow",attrs:{"append-icon":"search",label:"Search "+t.name,color:"accent","persistent-hint":"",box:"","hide-details":"",clearable:"",dark:""},model:{value:t.searchModel,callback:function(e){t.searchModel=e},expression:"searchModel"}}),t._v(" "),t._t("extension")]},proxy:!0}:null],null,!0)},[n("v-toolbar-title",{staticClass:"secondary--text"},[t._v("\n      "+t._s(t.name||"")+"\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),t._t("buttons"),t._v(" "),t.add?n("v-btn",{staticClass:"secondary--text",attrs:{loading:t.loading,color:"success",small:""},on:{click:function(e){return t.$emit("add")}}},[t._v("\n      Add"+t._s(t.name?" "+t.name:"")+"\n    ")]):t._e()],2),t._v(" "),t._t("default"),t._v(" "),n("v-snackbar",{attrs:{timeout:5e3,color:t.snack.color},model:{value:t.snack.show,callback:function(e){t.$set(t.snack,"show",e)},expression:"snack.show"}},[t._v("\n    "+t._s(t.snack.text)+"\n    "),n("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.snack.show=!1}}},[t._v("\n      Close\n    ")])],1)],2)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VSnackbar:h.a,VSpacer:v.e,VTextField:m.a,VToolbar:x.a,VToolbarTitle:y.d})},482:function(t,e,n){"use strict";var r={name:"NewData",props:{name:{type:String,default:null},show:Boolean}},o=n(40),l=n(95),c=n.n(l),d=n(151),f=n(218),h=n(152),v=n(87),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.show,"max-width":"500px",persistent:""}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-title",{staticClass:"title secondary--text justify-center"},[t._v("\n      New"+t._s(t.name?" "+t.name:"")+"\n    ")]),t._v(" "),n("v-card-text",[t._t("default")],2),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[t._t("actions")],2)],1)],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardActions:f.b,VCardText:f.d,VCardTitle:h.a,VDialog:v.a})},483:function(t,e,n){"use strict";var r={name:"EditData",props:{name:{type:String,default:null},item:{type:Object,default:function(){}},show:Boolean}},o=n(40),l=n(95),c=n.n(l),d=n(151),f=n(218),h=n(152),v=n(87),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.show,"max-width":"500px",persistent:""}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-title",{staticClass:"title secondary--text justify-center pb-0"},[t._v("\n      Edit"+t._s(t.name?" "+t.name:"")+t._s(t.item&&t.item.type?" "+t.item.type.slice(0,1).toUpperCase()+t.item.type.slice(1):"")+"\n    ")]),t._v(" "),t.item?n("v-card-title",{staticClass:"body-2 secondary--text justify-center py-0"},[t._v("\n      "+t._s(t.item.name||"")+"\n    ")]):t._e(),t._v(" "),n("v-card-text",[t._t("default")],2),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[t._t("actions")],2)],1)],1)},[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardActions:f.b,VCardText:f.d,VCardTitle:h.a,VDialog:v.a})},484:function(t,e,n){"use strict";n(78),n(476);var r={name:"UploadBtn",props:{accept:{default:"*",type:String},block:{default:!1,type:Boolean},depressed:{default:!1,type:Boolean},color:{default:"primary",type:String},disabled:{default:!1,type:Boolean},fixedWidth:{default:null,type:String},flat:{default:!1,type:Boolean},hover:{default:!0,type:Boolean},icon:{default:!1,type:Boolean},labelClass:{default:"",type:String},large:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},maxWidth:{default:"100%",type:String},multiple:{default:!1,type:Boolean},name:{default:"uploadFile",type:String},outline:{default:!1,type:Boolean},ripple:{default:!0,type:Boolean},round:{default:!1,type:Boolean},small:{default:!1,type:Boolean},title:{default:"Upload",type:String},noTitleUpdate:{default:!1,type:Boolean}},data:function(){return{uTitle:null}},computed:{classes:function(){var t={"v-btn--block":this.block,"v-btn--flat":this.flat,"upload-btn-hover":this.hover,"v-btn--icon":this.icon,"v-btn--large":this.large,"v-btn--loading":this.loading,"v-btn--outline v-btn--depressed":this.outline,"v-btn--round":this.round,"v-btn--small":this.small,"v-btn--disabled":this.disabled,"v-btn--depressed":this.depressed};this.flat&&(this.color="");var e="";for(var n in t)t[n]&&(e+="".concat(n," "));return e}},methods:{fileChanged:function(t){if(t)if(t.target.files.length>0)if(this.multiple){for(var title="",i=0;i<t.target.files.length;i++)title+=t.target.files[i].name+", ";title=title.slice(0,title.length-2),this.uTitle=title,this.$emit("file-update",t.target.files)}else this.uTitle=t.target.files[0].name,this.$emit("file-update",t.target.files[0]);else this.uTitle=null,this.$emit("file-update")},clear:function(){document.getElementById("".concat(this._uid,"uploadFile")).value="",this.$emit("file-update"),this.uTitle=null}}},o=(n(477),n(40)),l=n(479),c=n.n(l),d=n(26),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-btn"},[n("input",{ref:"fileInput",attrs:{id:t._uid+"uploadFile",type:"file",name:t.name,accept:t.accept,multiple:t.multiple},on:{change:t.fileChanged}}),t._v(" "),n("label",{directives:[{name:"ripple",rawName:"v-ripple",value:t.ripple,expression:"ripple"}],class:"v-btn "+t.classes+t.color+" "+t.labelClass+" upload-btn",style:{maxWidth:t.maxWidth,width:t.fixedWidth||"auto"},attrs:{id:"label"+t._uid+"uploadFile",for:t._uid+"uploadFile"}},[n("div",{staticClass:"v-btn__content",staticStyle:{"max-width":"100%"}},[t._t("icon-left"),t._v(" "),n("span",[t._v("\n        "+t._s(t.icon?"":t.noTitleUpdate?t.title:t.uTitle||t.title)+"\n      ")]),t._v(" "),t._t("icon")],2)])])},[],!1,null,"23e895ce",null);e.a=component.exports;c()(component,{Ripple:d.a})},488:function(t,e,n){"use strict";var strong=n(489),r=n(475);t.exports=n(490)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},489:function(t,e,n){"use strict";var r=n(34).f,o=n(181),l=n(237),c=n(62),d=n(235),f=n(236),h=n(186),v=n(241),m=n(188),x=n(31),y=n(234).fastKey,_=n(475),w=x?"_s":"size",k=function(t,e){var n,r=y(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,h){var v=t(function(t,r){d(t,v,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[w]=0,null!=r&&f(r,n,t[h],t)});return l(v.prototype,{clear:function(){for(var t=_(this,e),data=t._i,n=t._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete data[n.i];t._f=t._l=void 0,t[w]=0},delete:function(t){var n=_(this,e),r=k(n,t);if(r){var o=r.n,l=r.p;delete n._i[r.i],r.r=!0,l&&(l.n=o),o&&(o.p=l),n._f==r&&(n._f=o),n._l==r&&(n._l=l),n[w]--}return!!r},forEach:function(t){_(this,e);for(var n,r=c(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!k(_(this,e),t)}}),x&&r(v.prototype,"size",{get:function(){return _(this,e)[w]}}),v},def:function(t,e,n){var r,o,l=k(t,e);return l?l.v=n:(t._l=l={i:o=y(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=l),r&&(r.n=l),t[w]++,"F"!==o&&(t._i[o]=l)),t},getEntry:k,setStrong:function(t,e,n){h(t,e,function(t,n){this._t=_(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?v(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,v(1))},n?"entries":"values",!n,!0),m(e)}}},490:function(t,e,n){"use strict";var r=n(18),o=n(25),l=n(35),c=n(237),meta=n(234),d=n(236),f=n(235),h=n(32),v=n(30),m=n(242),x=n(98),y=n(233);t.exports=function(t,e,n,_,w,k){var C=r[t],S=C,D=w?"set":"add",T=S&&S.prototype,V={},$=function(t){var e=T[t];l(T,t,"delete"==t?function(a){return!(k&&!h(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(k&&!h(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!h(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof S&&(k||T.forEach&&!v(function(){(new S).entries().next()}))){var E=new S,j=E[D](k?{}:-0,1)!=E,B=v(function(){E.has(1)}),F=m(function(t){new S(t)}),O=!k&&v(function(){for(var t=new S,e=5;e--;)t[D](e,e);return!t.has(-0)});F||((S=e(function(e,n){f(e,S,t);var r=y(new C,e,S);return null!=n&&d(n,w,r[D],r),r})).prototype=T,T.constructor=S),(B||O)&&($("delete"),$("has"),w&&$("get")),(O||j)&&$(D),k&&T.clear&&delete T.clear}else S=_.getConstructor(e,t,w,D),c(S.prototype,n),meta.NEED=!0;return x(S,t),V[t]=S,o(o.G+o.W+o.F*(S!=C),V),k||_.setStrong(S,t,w),S}},508:function(t,e,n){"use strict";n.r(e);n(41);var r=n(461),o=n(481),l=n(482),c=n(460),d={name:"NewClothing",components:{NewData:l.a},mixins:[c.a],props:{show:Boolean},data:function(){return{form:null,loading:!1,formData:{name:null,type:null,rarity:null}}},watch:{show:function(t,e){var n=this;t&&"all"!==localStorage.getItem("clothingTypeSelected")&&(this.formData.type=localStorage.getItem("clothingTypeSelected")||null),t&&this.$nextTick(function(){return n.$refs.clothingNameField.focus()})}},mounted:function(){this.reset(),this.formData.type=localStorage.getItem("clothingTypeSelected")||null},methods:{add:function(){var t=this;this.loading=!0,this.$api.post("/clothing",this.formData).then(function(e){t.$emit("close","success"),t.reset()}).catch(function(e){console.error(e),t.$emit("close","error"),t.reset()})},reset:function(){this.loading=!1,this.$refs.form.reset()}}},f=n(40),h=n(95),v=n.n(h),m=n(150),x=n(156),y=n(170),_=n(159),w=n(112),k=n(217),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("new-data",{attrs:{show:t.show,name:"Clothing"},scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-btn",{staticClass:"secondary--text",attrs:{color:"warning"},on:{click:function(e){t.$emit("close"),t.reset()}}},[t._v("\n      Cancel\n    ")]),t._v(" "),n("v-btn",{staticClass:"primary--text",attrs:{color:"info"},on:{click:function(e){return t.$refs.form.reset()}}},[t._v("\n      Reset\n    ")]),t._v(" "),n("v-btn",{staticClass:"secondary--text",attrs:{disabled:!t.form,loading:t.loading,color:"success"},on:{click:t.add}},[t._v("\n      Add\n    ")])]},proxy:!0}])},[n("v-form",{ref:"form",model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",md6:"","px-1":""}},[n("v-text-field",{ref:"clothingNameField",attrs:{rules:[t.rules.required],label:"Clothing Name",color:"accent",box:"","persistent-hint":""},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md6:"","px-1":""}},[n("v-select",{attrs:{rules:[t.rules.required],items:["Head","Torso","Legs"],label:"Type",color:"accent",box:"","persistent-hint":""},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md6:"","px-1":""}},[n("v-select",{attrs:{items:["Common","Uncommon","Rare","Exotic","Stash","unknown"],rules:[t.rules.required],label:"Item Rarity",color:"accent",box:"","persistent-hint":""},model:{value:t.formData.rarity,callback:function(e){t.$set(t.formData,"rarity",e)},expression:"formData.rarity"}})],1)],1)],1)],1)},[],!1,null,null,null),C=component.exports;v()(component,{VBtn:m.a,VFlex:x.a,VForm:y.a,VLayout:_.a,VSelect:w.a,VTextField:k.a});n(96),n(185),n(488),n(78);var S=n(483),D=n(484),T={name:"EditClothing",components:{EditData:S.a,UploadButton:D.a},mixins:[c.a],props:{show:Boolean,item:{type:Object,default:function(){}}},data:function(){return{form:!1,loading:!1,formData:{cultures:[],tiers:[],flavor:null,base:null,notes:null},tiers:[{text:"Tier 1",value:1},{text:"Tier 2",value:2},{text:"Tier 3",value:3},{text:"Tier 4",value:4}]}},watch:{item:function(t,e){null===t?this.formData={cultures:[],tiers:[],flavor:null,base:null,notes:null}:(this.formData.cultures=t.cultures,this.formData.tiers=t.tiers,this.formData.notes=t.notes)}},methods:{edit:function(){var t=this;this.loading=!0,this.$api.get("/clothing/"+this.item._id).then(function(e){var n={name:e.data.name,type:e.data.type,cultures:Object(r.a)(new Set([].concat(Object(r.a)(e.data.cultures),Object(r.a)(t.formData.cultures)))),tiers:Object(r.a)(new Set([].concat(Object(r.a)(e.data.tiers),Object(r.a)(t.formData.tiers)))),notes:t.formData.notes},o=new FormData;for(var l in n)n.hasOwnProperty(l)&&o.append(l,n[l]);t.formData.flavor&&o.append("flavor",t.formData.flavor),t.formData.base&&o.append("base",t.formData.base),t.$api.put("/clothing/"+t.item._id,o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.reset(),t.$emit("close","success")}).catch(function(e){console.error(e),t.reset(),t.$emit("close","error")})})},reset:function(){this.loading=!1,this.$refs.flavor.clear(),this.$refs.base.clear()}}},V=n(158),$=n(92),E=Object(f.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("edit-data",{attrs:{show:t.show,name:"Clothing",item:t.item||null},scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-btn",{staticClass:"secondary--text",attrs:{color:"error"},on:{click:function(e){return t.$emit("close")}}},[t._v("\n      Cancel\n    ")]),t._v(" "),n("v-btn",{staticClass:"secondary--text",attrs:{disabled:!t.form,loading:t.loading,color:"success"},on:{click:t.edit}},[t._v("\n      Edit\n    ")])]},proxy:!0}])},[t.item?n("v-form",{ref:"form",model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"","px-1":""}},[n("v-select",{attrs:{rules:[t.rules.required],items:["Saborian","Kioki","Marauder","Other"],disabled:"Stash"===t.item.rarity,label:"Culture(s)",color:"accent",multiple:"",box:"","persistent-hint":""},model:{value:t.formData.cultures,callback:function(e){t.$set(t.formData,"cultures",e)},expression:"formData.cultures"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"","px-1":""}},[n("v-select",{attrs:{rules:[t.rules.required],items:t.tiers,disabled:"Stash"===t.item.rarity,label:"Found in tier(s)",color:"accent",multiple:"",chips:"",box:"","persistent-hint":""},model:{value:t.formData.tiers,callback:function(e){t.$set(t.formData,"tiers",e)},expression:"formData.tiers"}})],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("div",{staticClass:"text-xs-center title"},[t._v("\n          Flavor Text Image\n        ")]),t._v(" "),n("upload-button",{ref:"flavor",staticClass:"px-1",attrs:{disabled:!!t.item.flavor,"no-title-update":!!t.item.flavor,title:t.item.flavor?"Uploaded":"Upload","label-class":"primary--text "+(t.item.flavor?"":"accent"),block:""},on:{"file-update":function(e){t.formData.flavor=e}},scopedSlots:t._u([{key:"icon-left",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[t._v("\n              attach_file\n            ")])]},proxy:!0}],null,!1,3401617800)})],1),t._v(" "),n("v-flex",{attrs:{xs6:""}},[n("div",{staticClass:"text-xs-center title"},[t._v("\n          Base Image\n        ")]),t._v(" "),n("upload-button",{ref:"base",staticClass:"px-1",attrs:{disabled:!!t.item.base,"no-title-update":!!t.item.base,title:t.item.base?"Uploaded":"Upload","label-class":"primary--text accent",block:""},on:{"file-update":function(e){t.formData.base=e}},scopedSlots:t._u([{key:"icon-left",fn:function(){return[n("v-icon",{attrs:{color:"primary"}},[t._v("\n              attach_file\n            ")])]},proxy:!0}],null,!1,3401617800)})],1),t._v(" "),n("v-flex",{attrs:{xs12:"","mt-1":""}},[n("v-textarea",{attrs:{color:"accent",label:"Notes","auto-grow":"",outline:"",clearable:""},model:{value:t.formData.notes,callback:function(e){t.$set(t.formData,"notes",e)},expression:"formData.notes"}})],1)],1)],1):t._e()],1)},[],!1,null,null,null),j=E.exports;v()(E,{VBtn:m.a,VFlex:x.a,VForm:y.a,VIcon:V.a,VLayout:_.a,VSelect:w.a,VTextarea:$.a});var B=n(480),F={name:"Clothing",head:function(){return{title:"Clothing",meta:[{hid:"og:title",name:"og:title",content:"Clothing"},{hid:"og:description",name:"og:description",content:"A ongoing collection of all the clothing"}]}},components:{DataTable:o.a,NewClothing:C,EditClothing:j},mixins:[B.a],data:function(){return{newLoading:!1,data:{loading:!0,error:!1},snack:{text:"none",color:"error",show:!1},dialogs:{new:!1,edit:!1},clothing:{head:[],torso:[],legs:[]},typeSelected:"Head",rarityFilter:["Common","Uncommon","Rare","Exotic","Stash"],currentEdit:null,search:null,headers:[{text:"Image",sortable:!1},{text:"Name",value:"name"},{text:"Rarity",value:"rarity"},{text:"Tier(s)",sortable:!1},{text:"Culture(s)",sortable:!1},{text:"Flavor Image",sortable:!1,align:"center"},{text:"Edit",sortable:!1,align:"center"},{text:"Notes",sortable:!1,width:"200px"}]}},computed:{compClothing:function(){switch(this.typeSelected){case"all":return[].concat(Object(r.a)(this.clothing.head),Object(r.a)(this.clothing.torso),Object(r.a)(this.clothing.legs));default:return this.clothing[this.typeSelected.toLowerCase()]}}},mounted:function(){this.refresh(),this.typeSelected=localStorage.getItem("clothingTypeSelected")||"Head",localStorage.getItem("clothingRaritiesSelected")&&(this.rarityFilter=JSON.parse(localStorage.getItem("clothingRaritiesSelected")))},methods:{refresh:function(){var t=this;this.data.loading=!0,this.clothing={head:[],torso:[],legs:[]},this.$api.get("/clothing/all").then(function(e){e.data.forEach(function(e){t.clothing[e.type].push(e)})}).catch(function(e){console.error(e),t.data.error=!0}).finally(function(){return t.data.loading=!1})},openNew:function(){var t=this;this.newLoading=!0,this.checkRole("Collector").then(function(e){t.newLoading=!1,e?t.dialogs.new=!0:t.noPerms()})},close:function(t,e){switch(this.currentEdit=null,this.dialogs[t]=!1,e){case"success":this.snack.color="success",this.snack.text="Successfully updated clothing!",this.refresh();break;case"error":this.snack.color="error",this.snack.text="Error updating clothing!"}e&&(this.snack.show=!0)},edit:function(t){var e=this;this.checkRole("Collector").then(function(n){n?(e.dialogs.edit=!0,e.currentEdit=t):e.noPerms()})},width:function(t){switch(t){case"head":return"100px";case"torso":return"80px";case"legs":return"50px"}},storage:function(t,e){localStorage.setItem(t,e)}}},O=n(168),I=n(177),N=n(87),R=n(86),U=n(174),L=Object(f.a)(F,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",lg11:"",xl8:""}},[n("data-table",{attrs:{name:"Clothing",search:t.search,loading:t.newLoading,snack:t.snack,add:"","use-search":""},on:{"update:search":function(e){t.search=e},"update:loading":function(e){t.newLoading=e},add:t.openNew},scopedSlots:t._u([{key:"buttons",fn:function(){return[n("v-btn",{staticClass:"primary--text",attrs:{loading:t.data.loading,color:"accent",small:""},on:{click:t.refresh}},[t._v("\n          Refresh\n        ")])]},proxy:!0},{key:"extension",fn:function(){return[n("v-select",{staticClass:"ml-2 shrink",staticStyle:{"max-width":"200px"},attrs:{items:["Head","Torso","Legs",{text:"(all)",value:"all"}],label:"Select a type",color:"accent","hide-details":"",dark:""},on:{change:function(e){return t.storage("clothingTypeSelected",e)}},model:{value:t.typeSelected,callback:function(e){t.typeSelected=e},expression:"typeSelected"}}),t._v(" "),n("v-select",{staticClass:"ml-2 shrink",staticStyle:{width:"355px"},attrs:{items:["Common","Uncommon","Rare","Exotic","Stash"],label:"Rarities",color:"accent","hide-details":"",clearable:"",multiple:"",dark:""},on:{change:function(e){t.rarityFilter.sort(),t.storage("clothingRaritiesSelected",JSON.stringify(e))}},model:{value:t.rarityFilter,callback:function(e){t.rarityFilter=e},expression:"rarityFilter"}})]},proxy:!0}])},[t._v(" "),t._v(" "),n("v-data-table",{staticClass:"pa-2",attrs:{headers:"all"===t.typeSelected?[{text:"Type",value:"type"}].concat(t.headers):t.headers,items:t.compClothing.filter(function(e){return t.rarityFilter.indexOf(e.rarity)>-1}),loading:!!t.data.loading&&"info",search:t.search,dark:"","must-sort":"","hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return["all"===t.typeSelected?n("td",[t._v("\n            "+t._s(e.item.type.slice(0,1).toUpperCase()+e.item.type.slice(1))+"\n          ")]):t._e(),t._v(" "),e.item.base?n("td",{staticClass:"px-2 text-xs-center"},[n("img",{attrs:{src:"https://drive.google.com/uc?id="+e.item.base,width:t.width(e.item.type)}})]):n("td",[t._v("\n            Missing\n          ")]),t._v(" "),n("td",[t._v(t._s(e.item.name))]),t._v(" "),n("td",[t._v(t._s(e.item.rarity))]),t._v(" "),n("td",[t._v(t._s(e.item.tiers.join(", ")||"unknown"))]),t._v(" "),n("td",[t._v(t._s(e.item.cultures.join(", ")||"unknown"))]),t._v(" "),e.item.flavor?n("td",{staticClass:"text-xs-center"},[n("v-dialog",{attrs:{value:e.item.dialog,"max-width":"200px"},scopedSlots:t._u([{key:"activator",fn:function(e){var dialog=e.on;return[n("span",[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"primary--text",attrs:{color:"info",small:""}},Object.assign({},dialog,r)),[t._v("\n                        Image\n                      ")])]}}],null,!0)},[t._v("\n                    Flavor text image\n                    ")])],1)]}}],null,!0)},[t._v(" "),n("v-img",{staticClass:"primary lighten-2",attrs:{src:"https://drive.google.com/uc?id="+e.item.flavor}})],1)],1):n("td",{staticClass:"text-xs-center"},[t._v("\n            Missing\n          ")]),t._v(" "),n("td",{staticClass:"text-xs-center"},[n("v-tooltip",{attrs:{top:""}},[n("v-btn",{attrs:{slot:"activator",color:"primary",icon:""},on:{click:function(n){return t.edit(e.item)}},slot:"activator"},[n("v-icon",{attrs:{color:"info"}},[t._v("\n                  edit\n                ")])],1),t._v("\n              Edit the story\n            ")],1)],1),t._v(" "),n("td",{staticClass:"caption"},[t._v("\n            "+t._s(e.item.notes)+"\n          ")])]}},{key:"no-data",fn:function(){return[!t.data.loading&&t.data.error?n("v-alert",{staticClass:"primary--text",attrs:{type:"error",value:!0}},[t._v("\n            Error loading clothing data. Probably a network issue.\n          ")]):t.data.loading&&!t.data.error?n("v-alert",{staticClass:"primary--text",attrs:{type:"info",value:!0}},[t._v("\n            Loading clothing data...\n          ")]):t.data.loading||t.data.error?t._e():n("v-alert",{staticClass:"primary--text",attrs:{type:"info",value:!0}},[t._v("\n            No clothing data!\n          ")])]},proxy:!0}])})],1),t._v(" "),n("new-clothing",{attrs:{show:t.dialogs.new},on:{close:function(e){return t.close("new",e)}}}),t._v(" "),n("edit-clothing",{attrs:{show:t.dialogs.edit,item:t.currentEdit},on:{close:function(e){return t.close("edit",e)}}})],1)],1)},[],!1,null,null,null);e.default=L.exports;v()(L,{VAlert:O.a,VBtn:m.a,VDataTable:I.a,VDialog:N.a,VFlex:x.a,VIcon:V.a,VImg:R.a,VLayout:_.a,VSelect:w.a,VTooltip:U.a})}}]);