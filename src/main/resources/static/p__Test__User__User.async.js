(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{rZ2x:function(e,t,a){"use strict";a.r(t);a("zdKM");var l,n,r,s,o=a("Xdy4"),i=(a("O2VZ"),a("BgZC")),c=a("U1Sa"),m=a.n(c),d=(a("15GC"),a("yCoh")),u=(a("UwKw"),a("O+9C")),p=(a("ci4j"),a("xBlo")),h=a("Pjwa"),y=a.n(h),f=a("2cji"),b=a.n(f),E=a("sp3j"),g=a.n(E),k=a("vZkh"),v=a.n(k),C=a("+KCP"),w=a.n(C),S=(a("br6D"),a("YG7p")),x=(a("GG5b"),a("NHmB")),F=(a("LWJa"),a("qx7Q")),B=(a("O0kD"),a("Fxlm")),V=a("uqIC"),z=a.n(V),O=a("LneV"),q=a("WN3O"),D=a.n(q),K=(a("w9uU"),a("ALo4")),j=B["a"].Item,L=F["a"].TreeNode,M=x["a"].TextArea,N=(S["a"].Option,{xs:24,sm:12,md:12,lg:12,xl:5,style:{marginBottom:24,margin:17}}),T=0,A={},G=(l=Object(O["connect"])(function(e){var t=e.loading;return{submitting:t.effects["form/submitRegularForm"]}}),n=B["a"].create({name:"testuser"}),l(r=n((s=function(e){function t(){var e,a;y()(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=g()(this,(e=v()(t)).call.apply(e,[this].concat(n))),a.state={visible:!1,done:!1},a.formLayout={labelCol:{span:7},wrapperCol:{span:13}},a.showModal=function(){a.setState({visible:!0,current:void 0})},a.onSelect=function(e,t){console.log("selected",e,t)},a.onCheck=function(e,t){console.log("onCheck",e,t)},a.add=function(e){A[T]=e,console.log(A),console.log("add");var t=a.props.form,l=t.getFieldValue("keys"),n=l.concat(T++);console.log(n),t.setFieldsValue({keys:n})},a.handleSubmit=function(e){var t=a.props,l=t.dispatch,n=t.form;e.preventDefault();var r=!0;if(n.validateFieldsAndScroll(function(e,t){e?r=!1:l({type:"form/submitRegularForm",payload:t})}),r){console.log(n.getFieldsValue()),a.add(n.getFieldsValue());var s=n.getFieldValue("keys");n.resetFields(),n.setFieldsValue({keys:s})}},a.handleDone=function(){a.setState({done:!1,visible:!1})},a.handleCancel=function(){a.setState({visible:!1})},a}return w()(t,e),b()(t,[{key:"render",value:function(){var e=this,t={labelCol:{xs:{span:240},sm:{span:37}},wrapperCol:{xs:{span:24},sm:{span:80},md:{span:50}}},a=this.state,l=a.visible,n=a.done,r=a.current,s=void 0===r?{}:r,c=this.props.submitting,h=this.props.form,y=h.getFieldDecorator,f=h.getFieldValue;y("keys",{initialValue:[]});var b=f("keys"),E=b.map(function(t,a){return z.a.createElement(u["a"],N,z.a.createElement(p["a"],{bordered:!1,size:"small",title:A[t].name+"redis\u8fde\u63a5\u4fe1\u606f",extra:z.a.createElement("a",{href:"#"},"More"),style:{width:240},hoverable:"true",actions:[z.a.createElement("a",{onClick:e.showModal},"\u8fde\u63a5\u4fe1\u606f"),z.a.createElement("a",null,"\u6570\u636e\u4fe1\u606f")]},z.a.createElement("p",null,"name\uff1a",A[t].name),z.a.createElement("p",null,"address\uff1a",A[t].address),z.a.createElement("p",null,"password\uff1a",A[t].password)))}),g=n?{footer:null,onCancel:this.handleDone}:{okText:"\u4fdd\u5b58",onOk:this.handleSubmit,onCancel:this.handleCancel},k=function(){return n?z.a.createElement(K["a"],{type:"success",title:"\u64cd\u4f5c\u6210\u529f",description:"\u4e00\u7cfb\u5217\u7684\u4fe1\u606f\u63cf\u8ff0\uff0c\u5f88\u77ed\u540c\u6837\u4e5f\u53ef\u4ee5\u5e26\u6807\u70b9\u3002",actions:z.a.createElement(d["a"],{type:"primary",onClick:e.handleDone},"\u77e5\u9053\u4e86"),className:D.a.formResult}):z.a.createElement("div",null,"content")};return z.a.createElement("div",null,z.a.createElement(o["a"],{gutter:24},E,z.a.createElement(u["a"],N,z.a.createElement(p["a"],{bordered:!1,size:"small",title:"\u65b0\u5efaredis\u8fde\u63a5\u4fe1\u606f",style:{width:240},hoverable:"true"},z.a.createElement(B["a"],{onSubmit:this.handleSubmit,style:{marginTop:2}},z.a.createElement(j,m()({},t,{style:{marginBottom:0},label:"\u540d\u79f0"}),y("name",{rules:[{required:!0,message:"\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(z.a.createElement(x["a"],{autoComplete:"off",placeholder:"\u7ed9redis\u8fde\u63a5\u53d6\u4e2a\u540d\u79f0\u5427"}))),z.a.createElement(j,m()({},t,{style:{marginBottom:0},label:"\u5730\u5740"}),y("address",{rules:[{required:!0,message:"\u5730\u5740\u4e0d\u80fd\u4e3a\u7a7a"}]})(z.a.createElement(x["a"],{autoComplete:"off",placeholder:"redis\u8fde\u63a5\u5730\u5740"}))),z.a.createElement(j,m()({},t,{style:{marginBottom:0},label:"\u5bc6\u7801"}),y("password",{rules:[{required:!1,message:"\u5bc6\u7801\u4fe1\u606f"}]})(z.a.createElement(x["a"],{autoComplete:"off",type:"password",placeholder:"redis\u7684\u5bc6\u7801"}))),z.a.createElement(j,m()({},t,{style:{marginBottom:0},label:"key Serializable"}),y("keySer",{rules:[{required:!1,message:"key Serializable"}]})(z.a.createElement(M,{style:{minHeight:32},placeholder:"key\u5e8f\u5217\u5316",rows:4}))),z.a.createElement(j,m()({},t,{style:{marginBottom:0},label:"value Serializable"}),y("valueSer",{rules:[{required:!1,message:"value Serializable"}]})(z.a.createElement(M,{style:{minHeight:32},placeholder:"value\u5e8f\u5217\u5316",rows:4}))),z.a.createElement(j,m()({},t,{style:{marginBottom:0}}),z.a.createElement(d["a"],{id:"redisSubmitFrom",type:"primary",htmlType:"submit",loading:c},"\u63d0\u4ea4"))))),z.a.createElement(u["a"],N,z.a.createElement(p["a"],{bordered:!1,size:"small",title:"tree",extra:z.a.createElement("a",{href:"#"},"More"),style:{width:240},hoverable:"true"},z.a.createElement(F["a"],{checkable:!0,defaultExpandedKeys:["0-0-0","0-0-1"],defaultSelectedKeys:["0-0-0","0-0-1"],defaultCheckedKeys:["0-0-0","0-0-1"],onSelect:this.onSelect,onCheck:this.onCheck},z.a.createElement(L,{title:"parent 1",key:"0-0"},z.a.createElement(L,{title:"parent 1-0",key:"0-0-0",disabled:!0},z.a.createElement(L,{title:"leaf",key:"0-0-0-0",disableCheckbox:!0}),z.a.createElement(L,{title:"leaf",key:"0-0-0-1"})),z.a.createElement(L,{title:"parent 1-1",key:"0-0-1"},z.a.createElement(L,{title:z.a.createElement("span",{style:{color:"#1890ff"}},"sss"),key:"0-0-1-0"})))))),z.a.createElement(u["a"],null,z.a.createElement(i["a"],m()({title:n?null:"\u4efb\u52a1".concat(s.id?"\u7f16\u8f91":"\u6dfb\u52a0"),className:D.a.standardListForm,width:640,bodyStyle:n?{padding:"72px 0"}:{padding:"28px 0 0"},destroyOnClose:!0,visible:l},g),k()))))}}]),t}(V["PureComponent"]),r=s))||r)||r);t["default"]=G}}]);