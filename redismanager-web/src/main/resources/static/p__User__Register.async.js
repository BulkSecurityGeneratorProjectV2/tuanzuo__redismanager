(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"5WY0":function(e,t,a){e.exports={main:"antd-pro-pages-user-register-main",getCaptcha:"antd-pro-pages-user-register-getCaptcha",submit:"antd-pro-pages-user-register-submit",login:"antd-pro-pages-user-register-login",error:"antd-pro-pages-user-register-error",success:"antd-pro-pages-user-register-success",warning:"antd-pro-pages-user-register-warning","progress-pass":"antd-pro-pages-user-register-progress-pass",progress:"antd-pro-pages-user-register-progress"}},cq3J:function(e,t,a){"use strict";a.r(t);a("+L6B");var r,s,n,i,o=a("2/Rp"),c=(a("14J3"),a("BMrR")),l=(a("jCWc"),a("kPKH")),p=(a("Q9mQ"),a("diRs")),d=(a("MXD1"),a("CFYs")),u=(a("/xke"),a("TeRw")),m=a("p0pE"),g=a.n(m),f=a("2Taf"),h=a.n(f),v=a("vZ4D"),w=a.n(v),E=a("MhPg"),y=a.n(E),b=a("l4Ni"),M=a.n(b),k=a("ujKo"),C=a.n(k),F=(a("5NDa"),a("5rEg")),S=(a("OaEy"),a("2fM7")),x=(a("y8nQ"),a("Vl3Y")),I=a("q1tI"),P=a.n(I),D=a("MuoO"),N=a("LLXN"),O=a("wY1l"),j=a.n(O),R=a("3a4m"),q=a.n(R),G=a("5WY0"),z=a.n(G);function V(e){var t=W();return function(){var a,r=C()(e);if(t){var s=C()(this).constructor;a=Reflect.construct(r,arguments,s)}else a=r.apply(this,arguments);return M()(this,a)}}function W(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var Y=x["a"].Item,J=(S["a"].Option,F["a"].Group,{ok:P.a.createElement("div",{className:z.a.success},P.a.createElement(N["FormattedMessage"],{id:"validation.password.strength.strong"})),pass:P.a.createElement("div",{className:z.a.warning},P.a.createElement(N["FormattedMessage"],{id:"validation.password.strength.medium"})),poor:P.a.createElement("div",{className:z.a.error},P.a.createElement(N["FormattedMessage"],{id:"validation.password.strength.short"}))}),L={ok:"success",pass:"normal",poor:"exception"},T=(r=Object(D["connect"])(function(e){var t=e.register,a=e.loading;return{register:t,submitting:a.effects["register/submit"]}}),s=x["a"].create(),r(n=s((i=function(e){y()(a,e);var t=V(a);function a(){var e;h()(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return e=t.call.apply(t,[this].concat(s)),e.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86",captchaInfo:{}},e.onGetImageCaptcha=function(){var t=e.props.dispatch;t({type:"captcha/fakeCaptcha",callback:function(t){var a=e.tipMsg(t);if(a){var r=t.datas;e.setState({captchaInfo:r})}}})},e.onGetCaptcha=function(){var t=59;e.setState({count:t}),e.interval=setInterval(function(){t-=1,e.setState({count:t}),0===t&&clearInterval(e.interval)},1e3)},e.getPasswordStatus=function(){var t=e.props.form,a=t.getFieldValue("pwd");return a&&a.length>9?"ok":a&&a.length>5?"pass":"poor"},e.handleSubmit=function(t){t.preventDefault();var a=e.props,r=a.form,s=a.dispatch,n=e.state.captchaInfo;r.validateFields({force:!0},function(t,a){if(!t){var i=e.state.prefix;s({type:"register/submit",payload:g()({},a,{prefix:i,captchaKey:n.key||""}),callback:function(t){if(t&&"200"===t.code)r.resetFields();else{var a=e.tipMsg(t);a||t&&"600010"==t.code&&e.onGetImageCaptcha()}}})}})},e.tipMsg=function(e){var t=!1,a="warning",r="\u6ce8\u518c\u5931\u8d25! ",s=4.5;return e&&"200"==e.code?(t=!0,t):(e&&e.msg&&""!=e.msg&&(r+=e.msg,s=10,u["a"][a]({message:"\u63d0\u793a\u4fe1\u606f",description:r,duration:s})),t)},e.handleConfirmBlur=function(t){var a=t.target.value,r=e.state.confirmDirty;e.setState({confirmDirty:r||!!a})},e.checkConfirm=function(t,a,r){var s=e.props.form;a&&a!==s.getFieldValue("pwd")?r(Object(N["formatMessage"])({id:"validation.password.twice"})):r()},e.checkPassword=function(t,a,r){var s=e.state,n=s.visible,i=s.confirmDirty;if(a)if(e.setState({help:""}),n||e.setState({visible:!!a}),a.length<6)r("error");else{var o=e.props.form;a&&i&&o.validateFields(["confirm"],{force:!0}),r()}else e.setState({help:Object(N["formatMessage"])({id:"validation.password.required"}),visible:!!a}),r("error")},e.changePrefix=function(t){e.setState({prefix:t})},e.renderPasswordProgress=function(){var t=e.props.form,a=t.getFieldValue("pwd"),r=e.getPasswordStatus();return a&&a.length?P.a.createElement("div",{className:z.a["progress-".concat(r)]},P.a.createElement(d["a"],{status:L[r],className:z.a.progress,strokeWidth:6,percent:10*a.length>100?100:10*a.length,showInfo:!1})):null},e}return w()(a,[{key:"componentDidMount",value:function(){this.onGetImageCaptcha()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.form,a=e.register,r=t.getFieldValue("name");"200"===a.registerCode&&(q.a.push({pathname:"/user/register-result",state:{account:r}}),a.registerCode=void 0)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,a=e.submitting,r=t.getFieldDecorator,s=this.state,n=(s.count,s.prefix,s.help),i=s.visible,d=s.captchaInfo;return P.a.createElement("div",{className:z.a.main},P.a.createElement("h3",null,P.a.createElement(N["FormattedMessage"],{id:"app.register.register"})),P.a.createElement(x["a"],{onSubmit:this.handleSubmit},P.a.createElement(Y,null,r("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\uff0c\u6700\u591a32\u4e2a\u5b57\u7b26",max:32}]})(P.a.createElement(F["a"],{size:"large",placeholder:"\u7528\u6237\u540d"}))),P.a.createElement(Y,{help:n},P.a.createElement(p["a"],{getPopupContainer:function(e){return e.parentNode},content:P.a.createElement("div",{style:{padding:"4px 0"}},J[this.getPasswordStatus()],this.renderPasswordProgress(),P.a.createElement("div",{style:{marginTop:10}},P.a.createElement(N["FormattedMessage"],{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:i},r("pwd",{rules:[{validator:this.checkPassword}]})(P.a.createElement(F["a"],{size:"large",type:"password",placeholder:Object(N["formatMessage"])({id:"form.password.placeholder"})})))),P.a.createElement(Y,null,r("confirm",{rules:[{required:!0,message:Object(N["formatMessage"])({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(P.a.createElement(F["a"],{size:"large",type:"password",placeholder:Object(N["formatMessage"])({id:"form.confirm-password.placeholder"})}))),P.a.createElement(Y,null,P.a.createElement(c["a"],{gutter:8},P.a.createElement(l["a"],{span:16},r("captcha",{rules:[{required:!0,message:Object(N["formatMessage"])({id:"validation.verification-code.required"})}]})(P.a.createElement(F["a"],{size:"large",placeholder:Object(N["formatMessage"])({id:"form.verification-code.placeholder"}),autocomplete:"off"}))),P.a.createElement(l["a"],{span:8},P.a.createElement("img",{id:"verImg",style:{cursor:"pointer","border-radius":"5px"},width:"120px",height:"35px",src:d&&d.image?d.image:"",onClick:this.onGetImageCaptcha})))),P.a.createElement(Y,null,P.a.createElement(o["a"],{size:"large",loading:a,className:z.a.submit,type:"primary",htmlType:"submit"},P.a.createElement(N["FormattedMessage"],{id:"app.register.register"})),P.a.createElement(j.a,{className:z.a.login,to:"/User/Login"},P.a.createElement(N["FormattedMessage"],{id:"app.register.sign-in"})))))}}]),a}(I["Component"]),n=i))||n)||n);t["default"]=T}}]);