"use strict";(self["webpackChunkadassample"]=self["webpackChunkadassample"]||[]).push([[422],{996:function(e,l,a){a.r(l),a.d(l,{default:function(){return E}});var t=a(3396),s=a(9242),d=a(7139),i=a(870),n=a(4075);const u={class:"mx-2 mt-1 mb-2"},c={key:0,class:"div-title text-subtitle-1 mt-2 mb-2"},o={class:"d-flex justify-space-between"},r=(0,t._)("label",{class:"label-default",style:{width:"50px"}},"제목",-1),p={class:"table-none w-100"},m=(0,t._)("td",{style:{width:"146px"}},[(0,t._)("label",{class:"label-default"},"업무/시스템")],-1),w={style:{width:"188px"}},b=["value"],_=["value"],v=(0,t._)("td",null,[(0,t._)("label",{class:"label-default"},"업무담당자/대표개발자")],-1),g=["value"],f=["value"],h={class:"table-none w-100"},y=(0,t._)("td",{style:{width:"150px"}},[(0,t._)("label",{class:"label-default"},"변경 근거 및 사유")],-1),D={colspan:"2"},k=(0,t._)("td",null,null,-1),x=(0,t._)("td",{style:{width:"150px"}},[(0,t._)("label",{class:"label-default"},"1. 변경 근거")],-1),C=["value"],U=(0,t._)("td",null,null,-1),W=(0,t._)("td",null,[(0,t._)("label",{class:"label-default"},"2. 데이터 범주")],-1),R=["value"],V=(0,t._)("td",null,null,-1),L=(0,t._)("td",null,[(0,t._)("label",{class:"label-default"},"3. 발생 범주")],-1),M=["value"],T=(0,t._)("td",null,null,-1),O=(0,t._)("td",null,[(0,t._)("label",{class:"label-default"},"4. 동종OP 재신청 여부")],-1),z=["value"],H=(0,t._)("td",null,[(0,t._)("label",{class:"label-default"},"변경 요청 사항")],-1),q={colspan:"2",class:"pt-1"},S=(0,t._)("td",null,[(0,t._)("label",{class:"label-default"},"변경 협의 사항")],-1),P={colspan:"2"},K=(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("label",{class:"label-default"},"기타")]),(0,t._)("td",{colspan:"2"},[(0,t._)("textarea",{class:"textarea-default",rows:"5"})])],-1),Y=(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("label",{class:"label-default"},"개인정보 마스킹 해제")]),(0,t._)("td",{colspan:"2"},[(0,t._)("input",{type:"checkbox"})])],-1),B={class:"table-none"},j=(0,t._)("td",{style:{width:"150px"}},[(0,t._)("label",{class:"label-default"},"예상 개발공수시간")],-1),A=(0,t._)("td",null,[(0,t._)("label",{class:"label-default"},"개발자")],-1),J=(0,t._)("td",null,[(0,t._)("label",{class:"label-default"},"(시간)")],-1),Z={class:"d-flex justify-end mt-2"};function I(e,l,a,I,F,G){return(0,t.wg)(),(0,t.iD)("div",u,[F.cshow?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",c,"데이터변경 요청서 작성")),(0,t._)("div",o,[r,(0,t.wy)((0,t._)("input",{type:"text",class:"input-w100 mb-1","onUpdate:modelValue":l[0]||(l[0]=e=>F.title=e)},null,512),[[s.nr,F.title]])]),(0,t.Wm)(n.J,{class:"mt-1 mb-1"}),(0,t._)("table",p,[(0,t._)("tr",null,[m,(0,t._)("td",w,[(0,t.wy)((0,t._)("select",{class:"select-big","onUpdate:modelValue":l[1]||(l[1]=e=>F.selectedWork=e)},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(F.workList,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.i,value:e.value},(0,d.zw)(e.name),9,b)))),128))],512),[[s.bM,F.selectedWork]])]),(0,t._)("td",null,[(0,t.wy)((0,t._)("select",{class:"select-big","onUpdate:modelValue":l[2]||(l[2]=e=>F.selectedSys=e)},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(F.sysList,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.i,value:e.value},(0,d.zw)(e.name),9,_)))),128))],512),[[s.bM,F.selectedSys]])])]),(0,t._)("tr",null,[v,(0,t._)("td",null,[(0,t.wy)((0,t._)("select",{class:"select-big","onUpdate:modelValue":l[3]||(l[3]=e=>F.selectedWorkOwn=e)},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(F.workOwnList,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.i,value:e.value},(0,d.zw)(e.name),9,g)))),128))],512),[[s.bM,F.selectedWorkOwn]])]),(0,t._)("td",null,[(0,t.wy)((0,t._)("select",{class:"select-big","onUpdate:modelValue":l[4]||(l[4]=e=>F.selectedRepDev=e)},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(F.repDevList,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.i,value:e.value},(0,d.zw)(e.name),9,f)))),128))],512),[[s.bM,F.selectedRepDev]])])])]),(0,t.Wm)(n.J,{class:"mt-1 mb-1"}),(0,t._)("table",h,[(0,t._)("tr",null,[y,(0,t._)("td",D,[(0,t.wy)((0,t._)("input",{type:"text",class:"input-w100 my-1","onUpdate:modelValue":l[5]||(l[5]=e=>F.reason=e)},null,512),[[s.nr,F.reason]])])]),(0,t._)("tr",null,[k,x,(0,t._)("td",null,[(0,t.wy)((0,t._)("select",{class:"select-big","onUpdate:modelValue":l[6]||(l[6]=e=>F.selectedChgRs=e)},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(F.chgRsList,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.i,value:e.value},(0,d.zw)(e.name),9,C)))),128))],512),[[s.bM,F.selectedChgRs]])])]),(0,t._)("tr",null,[U,W,(0,t._)("td",null,[(0,t.wy)((0,t._)("select",{class:"select-big","onUpdate:modelValue":l[7]||(l[7]=e=>F.selectedDataCat=e)},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(F.dataCatList,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.i,value:e.value},(0,d.zw)(e.name),9,R)))),128))],512),[[s.bM,F.selectedDataCat]])])]),(0,t._)("tr",null,[V,L,(0,t._)("td",null,[(0,t.wy)((0,t._)("select",{class:"select-big","onUpdate:modelValue":l[8]||(l[8]=e=>F.selectedOccurCat=e)},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(F.occurCatList,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.i,value:e.value},(0,d.zw)(e.name),9,M)))),128))],512),[[s.bM,F.selectedOccurCat]])])]),(0,t._)("tr",null,[T,O,(0,t._)("td",null,[(0,t.wy)((0,t._)("select",{class:"select-big","onUpdate:modelValue":l[9]||(l[9]=e=>F.selectedReapply=e)},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(F.reapplyList,(e=>((0,t.wg)(),(0,t.iD)("option",{key:e.i,value:e.value},(0,d.zw)(e.name),9,z)))),128))],512),[[s.bM,F.selectedReapply]])])]),(0,t._)("tr",null,[H,(0,t._)("td",q,[(0,t.wy)((0,t._)("textarea",{class:"textarea-default",rows:"5","onUpdate:modelValue":l[10]||(l[10]=e=>F.reqText=e)},null,512),[[s.nr,F.reqText]])])]),(0,t._)("tr",null,[S,(0,t._)("td",P,[(0,t.wy)((0,t._)("textarea",{class:"textarea-default",rows:"5","onUpdate:modelValue":l[11]||(l[11]=e=>F.negoText=e)},null,512),[[s.nr,F.negoText]])])]),K,Y]),(0,t.Wm)(n.J,{class:"mt-1 mb-1"}),(0,t._)("table",B,[(0,t._)("tr",null,[j,A,(0,t._)("td",null,[(0,t.wy)((0,t._)("input",{type:"text",style:{width:"50px","text-align":"right"},class:"input-default","onUpdate:modelValue":l[12]||(l[12]=e=>F.devTime=e)},null,512),[[s.nr,F.devTime]])]),J])]),(0,t._)("div",Z,[F.cshow?((0,t.wg)(),(0,t.j4)(i.T,{key:0,class:"ml-1 btn-default",size:"small",rounded:5,onClick:G.closeDialog},{default:(0,t.w5)((()=>[(0,t.Uk)("닫기")])),_:1},8,["onClick"])):(0,t.kq)("",!0),(0,t.Wm)(i.T,{class:"ml-1 btn-default",size:"small",rounded:5,onClick:G.closeDialog},{default:(0,t.w5)((()=>[(0,t.Uk)("작성 완료 및 요청")])),_:1},8,["onClick"])])])}var F={components:{},props:{show:Boolean},data(){return{cshow:this.show,title:"프로모션 종료에 따른 구분자 값에 대한 조정",selectedWork:"CSO",workList:[{i:1,value:"CSO",name:"CSO"},{i:2,value:"Finance",name:"Finance"},{i:3,value:"Common",name:"Common"}],selectedSys:"MetCRIMS",sysList:[{i:1,value:"MetCRIMS",name:"MetCRIMS"},{i:2,value:"MART",name:"MART"},{i:3,value:"CalOrg",name:"계리"}],selectedWorkOwn:"홍길동/20200701/보험1팀",workOwnList:[{i:1,value:"홍길동/20200701/보험1팀",name:"홍길동/20200701/보험1팀"},{i:2,value:"김철수/20101201/운영팀",name:"김철수/20101201/운영팀"},{i:3,value:"최미소/19101201/운영팀",name:"최미소/19101201/운영팀"}],selectedRepDev:"고길동/20180604/계리2팀",repDevList:[{i:1,value:"고길동/20180604/계리2팀",name:"고길동/20180604/계리2팀"},{i:2,value:"이영희/21201021/보험2팀",name:"이영희/21201021/보험2팀"},{i:3,value:"정확해/20180604/계리1팀",name:"정확해/20180604/계리1팀"}],reason:"프로모션 종료에 따른 구분자 값에 대한 조정",selectedChgRs:"수작업대행",chgRsList:[{i:1,value:"수작업대행",name:"수작업대행"}],selectedDataCat:"그 외",dataCatList:[{i:1,value:"그 외",name:"그 외"}],selectedOccurCat:"BAU 운영 관련",occurCatList:[{i:1,value:"BAU 운영 관련",name:"BAU 운영 관련"}],selectedReapply:"일회성 요청",reapplyList:[{i:1,value:"일회성 요청",name:"일회성 요청"}],reqText:"2022 프로모션 종료 후 상태 변경",negoText:"2022 프로모션 종료 후 상태 변경",etcText:"",devTime:3}},setup(){},created(){},mounted(){},unmounted(){},methods:{closeDialog(){this.$emit("callParent")}}},G=a(89);const Q=(0,G.Z)(F,[["render",I]]);var E=Q},4422:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var t=a(3396),s=a(870),d=a(1201),i=a(4074),n=a(4075),u=a(3144),c=a(9870),o=a(6161),r=a(4722);const p={class:"ma-2"},m=(0,t._)("div",{class:"div-title text-subtitle-1"},"결재대기 요청서",-1),w={class:"div-input d-flex justify-space-between"},b=(0,t.uE)('<div><label class="label-default">요청일자</label><div class="datepicker-df tui-datepicker-input tui-has-focus"><input id="startpicker-input" type="text" aria-label="Date"><span class="tui-ico-date"></span><div id="startpicker-container" style="margin-left:-1px;"></div></div><label class="label-default">~</label><div class="datepicker-df tui-datepicker-input tui-has-focus"><input id="endpicker-input" type="text" aria-label="Date"><span class="tui-ico-date"></span><div id="endpicker-container" style="margin-left:-1px;"></div></div><label class="label-default">요청자 ID/이름</label><input type="text" class="input-default"><label class="label-default">SR번호</label><input type="text" class="input-default"></div>',1),_={class:"d-flex justify-space-between mr-1 mt-1"},v={class:"ma-1"},g=(0,t._)("div",{style:{height:"370px"}},[(0,t._)("div",{class:"grid-default",id:"grid1"})],-1),f=(0,t._)("label",{class:"label-default"},"요청처리 상세",-1),h=(0,t._)("div",{style:{height:"260px"}},[(0,t._)("div",{class:"grid-default",id:"grid2"})],-1);function y(e,l,a,y,D,k){const x=(0,t.up)("CdcReqComp"),C=(0,t.up)("CdcQueryComp");return(0,t.wg)(),(0,t.iD)("div",p,[m,(0,t.Wm)(n.J),(0,t._)("div",w,[b,(0,t._)("div",_,[(0,t.Wm)(s.T,{class:"ml-1 btn-default",size:"small",rounded:5,onClick:l[0]||(l[0]=e=>D.showDialog=!0)},{default:(0,t.w5)((()=>[(0,t.Uk)("조회")])),_:1}),(0,t.Wm)(i.B,{"max-width":"1200px",modelValue:D.showDialog,"onUpdate:modelValue":l[3]||(l[3]=e=>D.showDialog=e),persistent:""},{default:(0,t.w5)((()=>[(0,t.Wm)(d._,null,{default:(0,t.w5)((()=>[(0,t._)("div",v,[(0,t.Wm)(u.d,{density:"compact",height:"var(--tabHeight)",modelValue:D.tab,"onUpdate:modelValue":l[1]||(l[1]=e=>D.tab=e),"center-active":"","bg-color":"var(--inputbar-bg)"},{default:(0,t.w5)((()=>[(0,t.Wm)(c.L,{value:"req","selected-class":"selected-tab"},{default:(0,t.w5)((()=>[(0,t.Uk)(" 요청서 ")])),_:1}),(0,t.Wm)(c.L,{value:"create","selected-class":"selected-tab"},{default:(0,t.w5)((()=>[(0,t.Uk)(" 쿼리작성 ")])),_:1})])),_:1},8,["modelValue"])]),(0,t.Wm)(o.Oo,{modelValue:D.tab,"onUpdate:modelValue":l[2]||(l[2]=e=>D.tab=e)},{default:(0,t.w5)((()=>[(0,t.Wm)(r.H,{value:"req"},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{show:D.showDialog,onCallParent:k.closeDialog},null,8,["show","onCallParent"])])),_:1}),(0,t.Wm)(r.H,{value:"create"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{show:D.showDialog,onCallParent:k.closeDialog},null,8,["show","onCallParent"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])]),g,(0,t.Wm)(n.J,{class:"mt-3 mb-1"}),f,h])}var D=a(468),k=a(9309),x=a(996),C=a(113),U={props:{childDrawer:{type:Boolean,required:!1}},components:{CdcReqComp:x["default"],CdcQueryComp:C["default"]},watch:{},data(){return{showDialog:!1,beforeDrawer:null,datePicker:null,grid1:null,grid2:null,tab:null}},setup(){},created(){},mounted(){this.datePicker=k.Z.createRangeDatePicker(),this.grid1=k.Z.createGrid("grid1",!0,D.vB),this.grid1.appendRows(D.ce),this.grid2=k.Z.createGrid("grid2",!0,D.WD),this.grid2.appendRows(D.Xd)},unmounted(){},methods:{selectedDate(){},gridRepaint(){this.beforeDrawer!=this.childDrawer&&(console.log("data change"),this.beforeDrawer=this.childDrawer)},closeDialog(){this.showDialog=!1}},updated(){}},W=a(89);const R=(0,W.Z)(U,[["render",y]]);var V=R}}]);
//# sourceMappingURL=422.312e6ada.js.map