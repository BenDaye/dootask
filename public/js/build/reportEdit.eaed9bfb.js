import{R as i}from"./ReportEdit.787e09fa.js";import{n}from"./app.28d0186b.js";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"electron-report"},[r("PageTitle",{attrs:{title:t.title}}),r("ReportEdit",{attrs:{id:t.reportEditId},on:{saveSuccess:t.saveSuccess}})],1)},a=[];const d={components:{ReportEdit:i},data(){return{detail:{}}},computed:{reportEditId(){if(/^\d+$/.test(this.detail.id))return parseInt(this.detail.id);const{reportEditId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)},title(){return this.$L(this.reportEditId>0?"\u4FEE\u6539\u62A5\u544A":"\u65B0\u589E\u62A5\u544A")}},methods:{saveSuccess(t){this.detail=t,this.$isSubElectron&&($A.Electron.sendMessage("sendForwardMain",{channel:"reportSaveSuccess",data:t}),window.close())}}},s={};var c=n(d,o,a,!1,l,"807ce0ea",null,null);function l(t){for(let e in s)this[e]=s[e]}var p=function(){return c.exports}();export{p as default};
