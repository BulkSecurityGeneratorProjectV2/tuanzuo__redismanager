(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"2AEw":function(e,a,t){"use strict";t.r(a);t("ci4j");var r,l,m,o,n=t("xBlo"),s=(t("15GC"),t("yCoh")),i=(t("4chx"),t("2/Jt")),c=(t("sOiP"),t("nHcq")),d=(t("hCod"),t("bSQV")),p=(t("hCuC"),t("m7+Q")),u=t("U1Sa"),f=t.n(u),g=t("Pjwa"),b=t.n(g),E=t("2cji"),h=t.n(E),M=t("sp3j"),F=t.n(M),v=t("vZkh"),y=t.n(v),j=t("+KCP"),w=t.n(j),O=(t("GG5b"),t("NHmB")),C=(t("Ummn"),t("MSrZ")),q=(t("br6D"),t("YG7p")),x=(t("O0kD"),t("Fxlm")),k=t("uqIC"),S=t.n(k),U=t("LneV"),A=t("6/Ag"),G=t("zHco"),H=t("Zpge"),N=t.n(H),P=x["a"].Item,R=q["a"].Option,B=C["a"].RangePicker,D=O["a"].TextArea,T=(r=Object(U["connect"])(function(e){var a=e.loading;return{submitting:a.effects["form/submitRegularForm"]}}),l=x["a"].create(),r(m=l((o=function(e){function a(){var e,t;b()(this,a);for(var r=arguments.length,l=new Array(r),m=0;m<r;m++)l[m]=arguments[m];return t=F()(this,(e=y()(a)).call.apply(e,[this].concat(l))),t.handleSubmit=function(e){var a=t.props,r=a.dispatch,l=a.form;e.preventDefault(),l.validateFieldsAndScroll(function(e,a){e||r({type:"form/submitRegularForm",payload:a})})},t}return w()(a,e),h()(a,[{key:"render",value:function(){var e=this.props.submitting,a=this.props.form,t=a.getFieldDecorator,r=a.getFieldValue,l={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},m={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return S.a.createElement(G["a"],{title:S.a.createElement(A["FormattedMessage"],{id:"app.forms.basic.title"}),content:S.a.createElement(A["FormattedMessage"],{id:"app.forms.basic.description"})},S.a.createElement(n["a"],{bordered:!1},S.a.createElement(x["a"],{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},S.a.createElement(P,f()({},l,{label:S.a.createElement(A["FormattedMessage"],{id:"form.title.label"})}),t("title",{rules:[{required:!0,message:Object(A["formatMessage"])({id:"validation.title.required"})}]})(S.a.createElement(O["a"],{placeholder:Object(A["formatMessage"])({id:"form.title.placeholder"})}))),S.a.createElement(P,f()({},l,{label:S.a.createElement(A["FormattedMessage"],{id:"form.date.label"})}),t("date",{rules:[{required:!0,message:Object(A["formatMessage"])({id:"validation.date.required"})}]})(S.a.createElement(B,{style:{width:"100%"},placeholder:[Object(A["formatMessage"])({id:"form.date.placeholder.start"}),Object(A["formatMessage"])({id:"form.date.placeholder.end"})]}))),S.a.createElement(P,f()({},l,{label:S.a.createElement(A["FormattedMessage"],{id:"form.goal.label"})}),t("goal",{rules:[{required:!0,message:Object(A["formatMessage"])({id:"validation.goal.required"})}]})(S.a.createElement(D,{style:{minHeight:32},placeholder:Object(A["formatMessage"])({id:"form.goal.placeholder"}),rows:4}))),S.a.createElement(P,f()({},l,{label:S.a.createElement(A["FormattedMessage"],{id:"form.standard.label"})}),t("standard",{rules:[{required:!0,message:Object(A["formatMessage"])({id:"validation.standard.required"})}]})(S.a.createElement(D,{style:{minHeight:32},placeholder:Object(A["formatMessage"])({id:"form.standard.placeholder"}),rows:4}))),S.a.createElement(P,f()({},l,{label:S.a.createElement("span",null,S.a.createElement(A["FormattedMessage"],{id:"form.client.label"}),S.a.createElement("em",{className:N.a.optional},S.a.createElement(A["FormattedMessage"],{id:"form.optional"}),S.a.createElement(d["a"],{title:S.a.createElement(A["FormattedMessage"],{id:"form.client.label.tooltip"})},S.a.createElement(p["a"],{type:"info-circle-o",style:{marginRight:4}}))))}),t("client")(S.a.createElement(O["a"],{placeholder:Object(A["formatMessage"])({id:"form.client.placeholder"})}))),S.a.createElement(P,f()({},l,{label:S.a.createElement("span",null,S.a.createElement(A["FormattedMessage"],{id:"form.invites.label"}),S.a.createElement("em",{className:N.a.optional},S.a.createElement(A["FormattedMessage"],{id:"form.optional"})))}),t("invites")(S.a.createElement(O["a"],{placeholder:Object(A["formatMessage"])({id:"form.invites.placeholder"})}))),S.a.createElement(P,f()({},l,{label:S.a.createElement("span",null,S.a.createElement(A["FormattedMessage"],{id:"form.weight.label"}),S.a.createElement("em",{className:N.a.optional},S.a.createElement(A["FormattedMessage"],{id:"form.optional"})))}),t("weight")(S.a.createElement(c["a"],{placeholder:Object(A["formatMessage"])({id:"form.weight.placeholder"}),min:0,max:100})),S.a.createElement("span",{className:"ant-form-text"},"%")),S.a.createElement(P,f()({},l,{label:S.a.createElement(A["FormattedMessage"],{id:"form.public.label"}),help:S.a.createElement(A["FormattedMessage"],{id:"form.public.label.help"})}),S.a.createElement("div",null,t("public",{initialValue:"1"})(S.a.createElement(i["a"].Group,null,S.a.createElement(i["a"],{value:"1"},S.a.createElement(A["FormattedMessage"],{id:"form.public.radio.public"})),S.a.createElement(i["a"],{value:"2"},S.a.createElement(A["FormattedMessage"],{id:"form.public.radio.partially-public"})),S.a.createElement(i["a"],{value:"3"},S.a.createElement(A["FormattedMessage"],{id:"form.public.radio.private"})))),S.a.createElement(P,{style:{marginBottom:0}},t("publicUsers")(S.a.createElement(q["a"],{mode:"multiple",placeholder:Object(A["formatMessage"])({id:"form.publicUsers.placeholder"}),style:{margin:"8px 0",display:"2"===r("public")?"block":"none"}},S.a.createElement(R,{value:"1"},S.a.createElement(A["FormattedMessage"],{id:"form.publicUsers.option.A"})),S.a.createElement(R,{value:"2"},S.a.createElement(A["FormattedMessage"],{id:"form.publicUsers.option.B"})),S.a.createElement(R,{value:"3"},S.a.createElement(A["FormattedMessage"],{id:"form.publicUsers.option.C"}))))))),S.a.createElement(P,f()({},m,{style:{marginTop:32}}),S.a.createElement(s["a"],{type:"primary",htmlType:"submit",loading:e},S.a.createElement(A["FormattedMessage"],{id:"form.submit"})),S.a.createElement(s["a"],{style:{marginLeft:8}},S.a.createElement(A["FormattedMessage"],{id:"form.save"}))))))}}]),a}(k["PureComponent"]),m=o))||m)||m);a["default"]=T}}]);