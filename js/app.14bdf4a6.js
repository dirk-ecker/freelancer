(function(e){function t(t){for(var r,u,c=t[0],l=t[1],i=t[2],s=0,d=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e145d":"b94c823e","chunk-2d0e4f96":"26b3a7fa","chunk-2d21d853":"1ce3c494","chunk-2d0c22aa":"bcfdf00d","chunk-25e13ea8":"821de72c","chunk-3d75e0ca":"9eca8df2","chunk-5ea2cf34":"740adfb1","chunk-66e16d51":"db3e1459","chunk-d2abd3ec":"5895e880"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var i=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/freelancer/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var f=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("ce5b"),a=n.n(o);n("bf40");r["default"].use(a.a,{theme:{primary:"#D3C3BC",secondary:"#BFADA5",accent:"#D8EBF1",info:"#5B5C79"},iconfont:"mdi"});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{color:"secondary",rounded:""}},[e._t("default")],2)},c=[],l=n("2877"),i={},s=Object(l["a"])(i,u,c,!1,null,null,null),f=s.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"display-3 v-heading mb-3 font-weight-light"},[e._t("default")],2)},p=[],h={props:{tag:{type:String,default:"h1"}}},b=h,m=(n("9997"),Object(l["a"])(b,d,p,!1,null,null,null)),g=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"display-1 v-heading mb-3 font-weight-light"},[e._t("default")],2)},y=[],w={props:{tag:{type:String,default:"h1"}}},_=w,j=Object(l["a"])(_,v,y,!1,null,null,null),x=j.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title font-weight-light",staticStyle:{"line-height":"1.7 !important"}},[e._t("default")],2)},k=[],B={},C=Object(l["a"])(B,O,k,!1,null,null,null),E=C.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-img",{staticClass:"grow hidden-sm-and-down",attrs:{contain:"","max-height":"200",width:"100%",position:"top right",src:n("94e0")}})},P=[],$={},T=Object(l["a"])($,S,P,!1,null,null,null),M=T.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-img",{staticClass:"grow hidden-sm-and-down",attrs:{contain:"","max-height":"200",width:"100%",position:"bottom left",src:n("9af2")}})},D=[],F={},J=Object(l["a"])(F,A,D,!1,null,null,null),L=J.exports;r["default"].component("BaseBtn",f),r["default"].component("BaseHeading",g),r["default"].component("BaseSubheading",x),r["default"].component("BaseText",E),r["default"].component("BaseBubble1",M),r["default"].component("BaseBubble2",L);var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("core-toolbar"),n("core-view"),n("core-footer")],1)},H=[],V={components:{CoreFooter:function(){return n.e("chunk-2d0e145d").then(n.bind(null,"7a74"))},CoreToolbar:function(){return n.e("chunk-2d21d853").then(n.bind(null,"d23b"))},CoreView:function(){return n.e("chunk-2d0e4f96").then(n.bind(null,"9306"))}}},z=V,G=Object(l["a"])(z,q,H,!1,null,null,null),I=G.exports,K=n("2f62");r["default"].use(K["a"]);var N=new K["a"].Store({state:{},mutations:{},actions:{}});n("d5e8"),n("41e6");r["default"].config.productionTip=!1,new r["default"]({store:N,render:function(e){return e(I)}}).$mount("#app")},"94e0":function(e,t,n){e.exports=n.p+"img/bubbles1.3c57343c.png"},9997:function(e,t,n){"use strict";var r=n("a57d"),o=n.n(r);o.a},"9af2":function(e,t,n){e.exports=n.p+"img/bubbles2.30136c7d.png"},a57d:function(e,t,n){}});
//# sourceMappingURL=app.14bdf4a6.js.map