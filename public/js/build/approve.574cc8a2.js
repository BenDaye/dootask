import{m as l,n as o}from"./app.910f462d.js";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-approve"},[s("PageTitle",{attrs:{title:e.$L("\u5BA1\u6279")}}),s("div",{ref:"fileWrapper",staticClass:"approve-wrapper"},[s("div",{staticClass:"approve-head"},[s("div",{staticClass:"approve-nav"},[s("h1",[e._v(e._s(e.$L("\u5BA1\u6279")))])])]),s("div",{staticClass:"approve-search"},[s("Select",{attrs:{filterable:"",clearable:"","remote-method":e.remoteMethod,placeholder:e.$L("\u8BF7\u9009\u62E9\u9879\u76EE\u540D\u79F0"),loading:e.loadIng>0},on:{"on-query-change":e.remoteMethodClear,"on-change":e.getLists},model:{value:e.project,callback:function(a){e.project=a},expression:"project"}},[e._l(e.projectList,function(a,i){return s("Option",{key:i,attrs:{value:a.id}},[e._v(e._s(a.name))])}),e.next_page_url!=null?s("div",{staticStyle:{"text-align":"center",padding:"8px 0",cursor:"pointer",color:"#8bcf70"},attrs:{slot:"drop-append"},on:{click:e.moreProject},slot:"drop-append"},[e._v(e._s(e.$L("\u70B9\u51FB\u67E5\u770B\u66F4\u591A")))]):e._e()],2),s("Input",{attrs:{suffix:"ios-search",placeholder:e.$L("\u8BF7\u8F93\u5165\u4EFB\u52A1\u540D\u79F0")},on:{"on-change":e.getLists},model:{value:e.searchKey,callback:function(a){e.searchKey=a},expression:"searchKey"}})],1),s("div",{staticClass:"approve-table"},[s("div",{staticClass:"table-page-box"},[s("Table",{attrs:{columns:e.columns,data:e.lists,loading:e.loadIng>0,"no-data-text":e.$L(e.noDataText),stripe:""}}),s("Page",{attrs:{total:e.listTotal,current:e.listPage,"page-size":e.listPageSize,disabled:e.loadIng>0,simple:"","page-size-opts":[10,20,30,50,100],"show-elevator":"","show-sizer":"","show-total":""},on:{"on-change":e.setPage,"on-page-size-change":e.setPageSize}})],1)])]),s("Modal",{attrs:{title:e.$L("\u62D2\u7EDD\u7533\u8BF7"),"mask-closable":!1},model:{value:e.refuseShow,callback:function(a){e.refuseShow=a},expression:"refuseShow"}},[s("Form",{ref:"addDelay",attrs:{model:e.formData,rules:e.refuseRule,"label-width":"auto"},nativeOn:{submit:function(a){a.preventDefault()}}},[s("FormItem",{staticStyle:{"margin-bottom":"10px"},attrs:{prop:"refuseReason",label:e.$L("\u62D2\u7EDD\u539F\u56E0")}},[s("Input",{attrs:{type:"textarea"},model:{value:e.formData.refuseReason,callback:function(a){e.$set(e.formData,"refuseReason",a)},expression:"formData.refuseReason"}})],1)],1),s("div",{staticClass:"adaption",attrs:{slot:"footer"},slot:"footer"},[s("Button",{attrs:{type:"default"},on:{click:e.cancel}},[e._v(e._s(e.$L("\u53D6\u6D88")))]),s("Button",{attrs:{type:"primary",loading:e.loadIng>0},on:{click:e.refuse}},[e._v(e._s(e.$L("\u786E\u5B9A")))])],1)],1)],1)},c=[];const h={name:"approve",computed:{...l(["userId","wsMsg"])},data(){return{searchKey:"",columns:[{title:this.$L("\u9879\u76EE\u540D\u79F0"),width:120,render:(e,{row:t})=>{var s;return e("span",((s=t.project)==null?void 0:s.name)||"")}},{title:this.$L("\u4EFB\u52A1\u540D\u79F0"),align:"center",width:120,render:(e,{row:t})=>{var s;return e("span",((s=t.project_task)==null?void 0:s.name)||"")}},{title:this.$L("\u53D1\u8D77\u4EBA"),align:"center",width:120,render:(e,{row:t})=>{var s;return e("span",((s=t.user)==null?void 0:s.nickname)||"")}},{title:this.$L("\u5EF6\u671F\u65F6\u95F4"),align:"center",width:120,render:(e,{row:t})=>e("span",t.days+this.$L("\u5929")||"")},{title:this.$L("\u5BA1\u6279\u72B6\u6001"),align:"center",width:120,render:(e,{row:t})=>e("span",this.statusR(t.status))},{title:this.$L("\u5BA1\u6279\u4EBA"),align:"center",width:120,render:(e,{row:t})=>{var s;return e("span",((s=t.audit_user)==null?void 0:s.nickname)||"-")}},{title:this.$L("\u7533\u8BF7\u539F\u56E0"),align:"center",width:120,render:(e,{row:t})=>e("span",t.reason||"-")},{title:this.$L("\u62D2\u7EDD\u7406\u7531"),align:"center",width:120,render:(e,{row:t})=>e("span",t.status_reason||"-")},{title:this.$L("\u64CD\u4F5C"),align:"center",width:100,minWidth:100,render:(e,{row:t})=>{let s=[];return s.push(e("Icon",{props:{type:"md-checkmark-circle"},style:{color:t.status!="0"||t.audit_userid!=this.userId?"#6b6e72":"#84c56a",opacity:t.status!="0"||t.audit_userid!=this.userId?"0.3":"",cursor:t.status!="0"||t.audit_userid!=this.userId?"not-allowed":"pointer",marginRight:"12px",fontSize:"18px"},on:{click:()=>{if(t.status!="0"||t.audit_userid!=this.userId)return null;this.pass(t)}}})),s.push(e("Icon",{props:{type:"md-close-circle"},style:{color:t.status!="0"||t.audit_userid!=this.userId?"#6b6e72":"#ed4014",opacity:t.status!="0"||t.audit_userid!=this.userId?"0.3":"",cursor:t.status!="0"||t.audit_userid!=this.userId?"not-allowed":"pointer",fontSize:"18px"},on:{click:()=>{if(t.status!="0"||t.audit_userid!=this.userId)return null;this.refuseId=t.id,this.refuseShow=!0}}})),e("div",s)}}],loadIng:0,listTotal:0,listPage:1,listPageSize:10,noDataText:this.$L("\u6CA1\u6709\u76F8\u5173\u7684\u6570\u636E"),lists:[],refuseId:"",refuseShow:!1,formData:{refuseReason:""},refuseRule:{refuseReason:[{required:!0,message:this.$L("\u8BF7\u586B\u5199\u62D2\u7EDD\u539F\u56E0\uFF01"),trigger:"change"}]},projectPage:1,project:"",projectList:[],next_page_url:null}},watch:{wsMsg:{handler(e){const{type:t,action:s}=e;switch(t){case"approve":s=="backlog"&&this.getLists();break}},deep:!0}},activated(){this.getLists(),this.remoteMethodClear("")},methods:{getLists(){this.loadIng++,this.$store.dispatch("call",{url:"project/task/applyList",data:{task_name:this.searchKey,project_id:this.project,page:this.listPage,pagesize:this.listPageSize}}).then(({data:e})=>{this.loadIng--,this.lists=e.data,this.listTotal=e.total,this.next_page_url=e.next_page_url,this.noDataText="\u6CA1\u6709\u76F8\u5173\u7684\u6570\u636E"}).catch(()=>{this.loadIng--,this.noDataText="\u6570\u636E\u52A0\u8F7D\u5931\u8D25"})},pass(e){$A.modalConfirm({title:"\u901A\u8FC7\u5BA1\u6838",content:"\u662F\u5426\u901A\u8FC7\u8FD9\u6761\u4EFB\u52A1\u7684\u5EF6\u671F\uFF1F",onOk:()=>{this.loadIng++,this.$store.dispatch("call",{url:"project/task/delayApprove",data:{id:e.id,pass:!0}}).then(({msg:t})=>{this.loadIng--,$A.messageSuccess(t)}).catch(({msg:t})=>{$A.messageError(t),this.loadIng--})}})},cancel(){this.formData.refuseReason="",this.refuseId="",this.refuseShow=!1},refuse(){this.formData.refuseReason!=""&&(this.loadIng++,this.$store.dispatch("call",{url:"project/task/delayApprove",data:{id:this.refuseId,reason:this.formData.refuseReason,pass:!1}}).then(({msg:e})=>{$A.messageSuccess(e),this.loadIng--,this.cancel()}).catch(({msg:e})=>{$A.messageError(e),this.loadIng--}))},statusR(e){let t="";switch(e){case 0:t=this.$L("\u5F85\u5BA1\u6838");break;case 1:t=this.$L("\u901A\u8FC7");break;case 2:t=this.$L("\u62D2\u7EDD");break}return t},setPage(e){this.listPage=e,this.getLists()},setPageSize(e){Math.max($A.runNum(this.listPageSize),10)!==e&&(this.listPageSize=e,this.getLists())},remoteMethod(e){e!==""?(this.loadIng++,this.projectPage=1,this.$store.dispatch("call",{url:"project/personal/list",data:{keyword:e,page:this.projectPage,pagesize:20}}).then(({data:t})=>{this.loadIng--,this.projectList=t.data,this.next_page_url=t.next_page_url}).catch(()=>{this.loadIng--})):this.project=""},remoteMethodClear(e){e==""&&(this.loadIng++,this.projectPage=1,this.$store.dispatch("call",{url:"project/personal/list",data:{keyword:e,page:this.projectPage,pagesize:20}}).then(({data:t})=>{this.loadIng--,this.projectList=t.data,this.next_page_url=t.next_page_url}).catch(()=>{this.loadIng--}))},moreProject(){this.loadIng++,this.projectPage++,this.$store.dispatch("call",{url:"project/personal/list",data:{page:this.projectPage,pagesize:20}}).then(({data:e})=>{this.loadIng--,e.data.forEach(t=>{this.projectList.push(t)}),this.next_page_url=e.next_page_url}).catch(()=>{this.loadIng--})}}},r={};var d=o(h,n,c,!1,p,null,null,null);function p(e){for(let t in r)this[t]=r[t]}var g=function(){return d.exports}();export{g as default};
