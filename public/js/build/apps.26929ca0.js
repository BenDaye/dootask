import{M as p}from"./MicroApps.a44762c7.js";import{n as m}from"./app.6774a170.js";import"./vue.b897e178.js";import"./@traptitech.1821eed0.js";import"./katex.2732e2fc.js";import"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./DialogWrapper.34d2df53.js";import"./le5le-store.aa7d93fc.js";import"./longpress.5305f240.js";import"./index.8b24509a.js";import"./quill-hi.e6e4752e.js";import"./parchment.d5c5924e.js";import"./quill-delta.d6950112.js";import"./fast-diff.f17881f3.js";import"./lodash.clonedeep.ec617ffd.js";import"./lodash.isequal.038e9b23.js";import"./eventemitter3.78b735ad.js";import"./lodash-es.df04b444.js";import"./quill-mention-hi.659f555b.js";import"./vue-jsonp.be27271b.js";import"./vue-virtual-scroll-list-hi.cfa6db23.js";import"./ImgUpload.c5f50f82.js";import"./view-design-hi.7db296b2.js";import"./details.e013b309.js";import"./jquery.e4b73507.js";import"./localforage.df21e8aa.js";import"./markdown-it.67231d85.js";import"./entities.797c3e49.js";import"./uc.micro.4d0617d5.js";import"./mdurl.6c31ac34.js";import"./linkify-it.afb42329.js";import"./punycode.69e96b57.js";import"./highlight.js.b91af88c.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./axios.6ec123f8.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.9fd7ffef.js";import"./clipboard.844c30f9.js";import"./default-passive-events.a3d698c9.js";import"./vuedraggable.95307f2f.js";import"./sortablejs.3b0c8136.js";import"./vue-resize-observer.ad42cb7f.js";import"./element-sea.5f08028a.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.be6bd013.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.d40a63be.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";import"./tip.da38598d.js";var e=function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"electron-single-micro-apps"},[!t.loading&&t.$route.name=="single-apps"?i("MicroApps",{attrs:{url:t.appUrl,path:t.path}}):t._e()],1)},a=[];const n={components:{MicroApps:p},data(){return{loading:!1,appUrl:"",path:""}},deactivated(){this.loading=!0},watch:{$route:{handler(t){this.loading=!0,t.name=="single-apps"?this.$nextTick(()=>{this.loading=!1,this.appUrl="http://127.0.0.1:5567/",this.path=this.$route.query.path||""}):this.appUrl=""},immediate:!0}}},o={};var s=m(n,e,a,!1,l,null,null,null);function l(t){for(let r in o)this[r]=o[r]}var ct=function(){return s.exports}();export{ct as default};
