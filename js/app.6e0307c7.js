(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)s=r[u],i[s]&&m.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},o=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/clapbackplusplus/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"09bf":function(t,e,a){},3365:function(t,e,a){"use strict";var n=a("09bf"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"md-layout",attrs:{id:"app"}},[a("div",{staticClass:"md-layout-item"},[a("ClapBack")],1)]),a("div",{staticClass:"md-layout footer"},[a("md-content",{staticClass:"md-layout-item footer-item"},[a("div",{staticClass:"md-layout md-alignment-bottom-left"},[a("p",[a("a",{attrs:{href:"https://jenniferplusplus.com/a-job-i-did-not-get/"}},[t._v("Read why")])])])]),a("md-content",{staticClass:"md-layout-item footer-item"},[a("div",{staticClass:"md-layout md-inline md-alignment-bottom-right"},[a("p",{staticClass:"text-align-right"},[t._v("Made with 💁‍♀️ by "),a("a",{attrs:{href:"https://jenniferplusplus.com"}},[t._v("Jennifer++")]),a("br"),a("a",{attrs:{href:"https://twitter.com/jennplusplus"}},[t._v("Get @ me")])])])])],1)])},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-layout md-alignment-center"},[a("form",{staticClass:"md-layout-item md-size-75",attrs:{novalidate:""}},[a("md-card",[a("md-card-header",[a("div",{staticClass:"md-title"},[t._v(t._s(t.title))]),a("div",[a("h2",[t._v(t._s(t.sassyText))])])]),a("md-card-content",[a("div",{staticClass:"md-layout md-alignment-top-left"},[a("md-field",{staticClass:"md-layout-item md-size-65 md-small-size-100 breathe"},[a("label",{attrs:{for:"txtMain"}},[t._v("Make it sassy")]),a("md-input",{attrs:{name:"txtMain",id:"txtMain"},model:{value:t.form.txtMain,callback:function(e){t.$set(t.form,"txtMain",e)},expression:"form.txtMain"}})],1),a("div",{staticClass:"md-layout-item"},[a("md-field",[a("label",{attrs:{for:"txtFill"}},[t._v("Emoji fillers")]),a("md-input",{attrs:{name:"txtFill",id:"txtFill"},model:{value:t.form.txtFill,callback:function(e){t.$set(t.form,"txtFill",e)},expression:"form.txtFill"}})],1),a("md-field",{staticClass:"hide"},[a("md-select")],1)],1)],1),a("div",{staticClass:"md-layout md-alignment-bottom-left"},[a("div",{staticClass:"md-layout-item"},[a("h3",{staticClass:"md-layout"},[t._v("Text options")]),a("div",{staticClass:"md-layout"},[a("md-switch",{on:{change:function(e){return t.textOptChange("allCaps")}},model:{value:t.form.options.allCaps,callback:function(e){t.$set(t.form.options,"allCaps",e)},expression:"form.options.allCaps"}},[t._v("ALL CAPS")]),a("md-switch",{on:{change:function(e){return t.textOptChange("randomCase")}},model:{value:t.form.options.randomCase,callback:function(e){t.$set(t.form.options,"randomCase",e)},expression:"form.options.randomCase"}},[t._v("RanDoM CAsE\n              ")]),a("md-switch",{on:{change:function(e){return t.textOptChange("titleCase")}},model:{value:t.form.options.titleCase,callback:function(e){t.$set(t.form.options,"titleCase",e)},expression:"form.options.titleCase"}},[t._v("Title Case\n              ")])],1)]),a("div",{staticClass:"md-layout-item"},[a("h3",{staticClass:"md-layout"},[t._v("Emoji options")]),a("div",{staticClass:"md-layout"},[a("md-switch",{model:{value:t.form.options.randomEmoji,callback:function(e){t.$set(t.form.options,"randomEmoji",e)},expression:"form.options.randomEmoji"}},[t._v("Randomize")]),a("md-switch",{model:{value:t.form.options.punctuate,callback:function(e){t.$set(t.form.options,"punctuate",e)},expression:"form.options.punctuate"}},[t._v("Punctuate")]),a("md-switch",{staticClass:"hide",model:{value:t.form.options.keepSlackmoji,callback:function(e){t.$set(t.form.options,"keepSlackmoji",e)},expression:"form.options.keepSlackmoji"}},[t._v("Keep slackmoji")])],1)])])]),a("md-card-actions",[a("a",{staticClass:"breathe",attrs:{href:t.sassyText?"https://twitter.com/intent/tweet?text="+t.sassyText:"/",onclick:t.sassyText?"return true;":"return false;","data-size":"large"}},[a("md-button",{staticClass:"md-icon-button md-raised"},[a("i",{staticClass:"fab fa-twitter twitter-button"})])],1),a("md-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.sassyText,expression:"sassyText",arg:"copy"}],staticClass:"md-raised md-accent"},[t._v("Copy "),a("i",{staticClass:"far fa-clipboard"})]),a("md-button",{staticClass:"md-raised md-primary",on:{click:t.submit}},[t._v("Clap it out")])],1)],1)],1)])},r=[],l=(a("28a5"),a("cd8c")),c=a.n(l);function d(t){return String(t).toUpperCase()}function u(t){var e=String(t).toLocaleLowerCase().split(""),a=e.map(function(t){return Math.random()>.5?t.toUpperCase():t});return a.join("")}function m(t){return c()(String(t))}var f={capitalize:d,randomCase:u,titleCase:m},p=f,h=a("d225"),v=a("b0b4"),C=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object(h["a"])(this,t),this.list=e,this.randomize=a,this.idx=0,this.length=this.list.length}return Object(v["a"])(t,[{key:"next",value:function(){var t;return this.randomize?(t=b(0,this.length),this.idx=t):(t=this.idx++,this.idx=this.idx>=this.length?0:this.idx),this.list[t]}}]),t}();function b(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}var x=C,y={clapback:g,punctuate:j};function g(t){var e=t.text,a=t.emojis,n=void 0===a?["👏"]:a,i=t.randomize,o=void 0!==i&&i,s=new x(n,o),r=e.split(/\s+/);return k(r,s,!0)}function j(t){var e=t.text,a=t.emojis,n=void 0===a?["👏"]:a,i=t.randomize,o=void 0!==i&&i,s=new x(n,o),r=e.split(/[,.?!]+/);return k(r,s,!1)}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new x([""],!1),a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return 1===t.length?"".concat(e.next()," ").concat(t[0]," ").concat(e.next()):t.reduce(function(t,n,i,o){return i===o.length-1?t+n:a?t+(n+" ".concat(e.next()," ")):t+(n+"".concat(e.next()))},"").trim()}var _=y,w=a("ecfb"),M={name:"ClapBack",data:function(){return{title:"Need a sassy comeback?",sassyText:"",form:{txtMain:"",txtFill:"👏",options:{allCaps:!1,randomCase:!1,titleCase:!1,randomEmoji:!1,keepSlackmoji:!1,punctuate:!1}}}},methods:{textOptChange:function(t){"allCaps"!==t&&(this.form.options.allCaps=!1),"randomCase"!==t&&(this.form.options.randomCase=!1),"titleCase"!==t&&(this.form.options.titleCase=!1)},submit:function(){var t,e=this.form.txtMain;t=e,this.form.options.titleCase&&(t=p.titleCase(e)),this.form.options.randomCase&&(t=p.randomCase(e)),this.form.options.allCaps&&(t=p.capitalize(e));var a={text:t,emojis:Object(w["toArray"])(this.form.txtFill),randomize:this.form.options.randomEmoji};t=this.form.options.punctuate?_.punctuate(a):_.clapback(a),this.sassyText=t}}},O=M,S=(a("3365"),a("2877")),T=Object(S["a"])(O,s,r,!1,null,"3309e8e1",null),z=T.exports,$={name:"app",components:{ClapBack:z}},E=$,F=(a("034f"),Object(S["a"])(E,i,o,!1,null,null,null)),P=F.exports,A=a("9c30"),B=a("4eb5"),L=a.n(B);a("51de"),a("e094");n["default"].config.productionTip=!1,n["default"].use(A["MdContent"]),n["default"].use(A["MdCard"]),n["default"].use(A["MdButton"]),n["default"].use(A["MdField"]),n["default"].use(A["MdSwitch"]),n["default"].use(L.a),new n["default"]({render:function(t){return t(P)}}).$mount("#app")},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.6e0307c7.js.map