(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{JAxp:function(e,t,a){e.exports={login:"antd-pro-components-login-index-login",getCaptcha:"antd-pro-components-login-index-getCaptcha",icon:"antd-pro-components-login-index-icon",other:"antd-pro-components-login-index-other",register:"antd-pro-components-login-index-register",prefixIcon:"antd-pro-components-login-index-prefixIcon",submit:"antd-pro-components-login-index-submit"}},Y5yc:function(e,t,a){"use strict";a.r(t);a("hCuC");var n=a("m7+Q"),r=(a("FK7k"),a("9sa/")),o=(a("xtml"),a("1wtd")),i=a("smUt"),s=a.n(i),c=a("Pjwa"),l=a.n(c),p=a("2cji"),u=a.n(p),m=a("sp3j"),d=a.n(m),g=a("vZkh"),h=a.n(g),f=a("+KCP"),b=a.n(f),v=a("uqIC"),y=a.n(v),C=a("LneV"),E=a("6/Ag"),w=a("uUPy"),x=(a("O0kD"),a("Fxlm")),M=(a("uiRg"),a("xJIg")),N=a("Z5GD"),S=a.n(N),O=(a("EH+i"),a("iczh")),j=a.n(O),T=(a("zdKM"),a("Xdy4")),k=(a("15GC"),a("yCoh")),I=(a("UwKw"),a("O+9C")),q=(a("GG5b"),a("NHmB")),F=a("U1Sa"),P=a.n(F),A=a("lndb"),G=a.n(A),D=a("B1rl"),U=a("JAxp"),z=a.n(U),K={UserName:{props:{size:"large",id:"userName",prefix:y.a.createElement(n["a"],{type:"user",className:z.a.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{props:{size:"large",prefix:y.a.createElement(n["a"],{type:"lock",className:z.a.prefixIcon}),type:"password",id:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{props:{size:"large",prefix:y.a.createElement(n["a"],{type:"mobile",className:z.a.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{props:{size:"large",prefix:y.a.createElement(n["a"],{type:"mail",className:z.a.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}},L=Object(v["createContext"])(),B=L,J=x["a"].Item,V=function(e){function t(e){var a;return l()(this,t),a=d()(this,h()(t).call(this,e)),a.onGetCaptcha=function(){var e=a.props.onGetCaptcha,t=e?e():null;!1!==t&&(t instanceof Promise?t.then(a.runGetCaptchaCountDown):a.runGetCaptchaCountDown())},a.getFormItemOptions=function(e){var t=e.onChange,a=e.defaultValue,n=e.customprops,r=e.rules,o={rules:r||n.rules};return t&&(o.onChange=t),a&&(o.initialValue=a),o},a.runGetCaptchaCountDown=function(){var e=a.props.countDown,t=e||59;a.setState({count:t}),a.interval=setInterval(function(){t-=1,a.setState({count:t}),0===t&&clearInterval(a.interval)},1e3)},a.state={count:0},a}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateActive,a=e.name;t&&t(a)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state.count,t=this.props.form.getFieldDecorator,a=this.props,n=(a.onChange,a.customprops),r=(a.defaultValue,a.rules,a.name),o=a.getCaptchaButtonText,i=a.getCaptchaSecondText,s=(a.updateActive,a.type),c=G()(a,["onChange","customprops","defaultValue","rules","name","getCaptchaButtonText","getCaptchaSecondText","updateActive","type"]),l=this.getFormItemOptions(this.props),p=c||{};if("Captcha"===s){var u=Object(D["a"])(p,["onGetCaptcha","countDown"]);return y.a.createElement(J,null,y.a.createElement(T["a"],{gutter:8},y.a.createElement(I["a"],{span:16},t(r,l)(y.a.createElement(q["a"],P()({},n,u)))),y.a.createElement(I["a"],{span:8},y.a.createElement(k["a"],{disabled:e,className:z.a.getCaptcha,size:"large",onClick:this.onGetCaptcha},e?"".concat(e," ").concat(i):o))))}return y.a.createElement(J,null,t(r,l)(y.a.createElement(q["a"],P()({},n,p))))}}]),t}(v["Component"]);V.defaultProps={getCaptchaButtonText:"captcha",getCaptchaSecondText:"second"};var H={};Object.keys(K).forEach(function(e){var t=K[e];H[e]=function(a){return y.a.createElement(B.Consumer,null,function(n){return y.a.createElement(V,P()({customprops:t.props,rules:t.rules},a,{type:e,updateActive:n.updateActive,form:n.form}))})}});var W=H,Z=M["a"].TabPane,$=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),Q=function(e){function t(e){var a;return l()(this,t),a=d()(this,h()(t).call(this,e)),a.uniqueId=$("login-tab-"),a}return b()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this.props.tabUtil;e.addTab(this.uniqueId)}},{key:"render",value:function(){var e=this.props.children;return y.a.createElement(Z,this.props,e)}}]),t}(v["Component"]),R=function(e){return y.a.createElement(B.Consumer,null,function(t){return y.a.createElement(Q,P()({tabUtil:t.tabUtil},e))})};R.typeName="LoginTab";var X=R,Y=x["a"].Item,_=function(e){var t=e.className,a=G()(e,["className"]),n=j()(z.a.submit,t);return y.a.createElement(Y,null,y.a.createElement(k["a"],P()({size:"large",className:n,type:"primary",htmlType:"submit"},a)))},ee=_,te=function(e){function t(e){var a;return l()(this,t),a=d()(this,h()(t).call(this,e)),a.onSwitch=function(e){a.setState({type:e});var t=a.props.onTabChange;t(e)},a.getContext=function(){var e=a.state.tabs,t=a.props.form;return{tabUtil:{addTab:function(t){a.setState({tabs:[].concat(S()(e),[t])})},removeTab:function(t){a.setState({tabs:e.filter(function(e){return e!==t})})}},form:t,updateActive:function(e){var t=a.state,n=t.type,r=t.active;r[n]?r[n].push(e):r[n]=[e],a.setState({active:r})}}},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.active,r=t.type,o=a.props,i=o.form,s=o.onSubmit,c=n[r];i.validateFields(c,{force:!0},function(e,t){s(e,t)})},a.state={type:e.defaultActiveKey,tabs:[],active:{}},a}return b()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,n=this.state,r=n.type,o=n.tabs,i=[],s=[];return y.a.Children.forEach(a,function(e){e&&("LoginTab"===e.type.typeName?i.push(e):s.push(e))}),y.a.createElement(B.Provider,{value:this.getContext()},y.a.createElement("div",{className:j()(t,z.a.login)},y.a.createElement(x["a"],{onSubmit:this.handleSubmit},o.length?y.a.createElement(y.a.Fragment,null,y.a.createElement(M["a"],{animated:!1,className:z.a.tabs,activeKey:r,onChange:this.onSwitch},i),s):a)))}}]),t}(v["Component"]);te.defaultProps={className:"",defaultActiveKey:"",onTabChange:function(){},onSubmit:function(){}},te.Tab=X,te.Submit=ee,Object.keys(W).forEach(function(e){te[e]=W[e]});var ae,ne,re,oe=x["a"].create()(te),ie=a("w2qy"),se=a.n(ie),ce=oe.Tab,le=oe.UserName,pe=oe.Password,ue=oe.Mobile,me=oe.Captcha,de=oe.Submit,ge=(ae=Object(C["connect"])(function(e){var t=e.login,a=e.loading;return{login:t,submitting:a.effects["login/login"]}}),ae((re=function(e){function t(){var e,a;l()(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=d()(this,(e=h()(t)).call.apply(e,[this].concat(r))),a.state={type:"account",autoLogin:!0},a.onTabChange=function(e){a.setState({type:e})},a.onGetCaptcha=function(){return new Promise(function(e,t){a.loginForm.validateFields(["mobile"],{},function(n,r){if(n)t(n);else{var o=a.props.dispatch;o({type:"login/getCaptcha",payload:r.mobile}).then(e).catch(t)}})})},a.handleSubmit=function(e,t){var n=a.state.type;if(!e){var r=a.props.dispatch;r({type:"login/login",payload:s()({},t,{type:n})})}},a.changeAutoLogin=function(e){a.setState({autoLogin:e.target.checked})},a.renderMessage=function(e){return y.a.createElement(o["a"],{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},a}return b()(t,e),u()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.login,o=t.submitting,i=this.state,s=i.type,c=i.autoLogin;return y.a.createElement("div",{className:se.a.main},y.a.createElement(oe,{defaultActiveKey:s,onTabChange:this.onTabChange,onSubmit:this.handleSubmit,ref:function(t){e.loginForm=t}},y.a.createElement(ce,{key:"account",tab:Object(E["formatMessage"])({id:"app.login.tab-login-credentials"})},"error"===a.status&&"account"===a.type&&!o&&this.renderMessage(Object(E["formatMessage"])({id:"app.login.message-invalid-credentials"})),y.a.createElement(le,{name:"userName",placeholder:"".concat(Object(E["formatMessage"])({id:"app.login.userName"}),": admin or user"),rules:[{required:!0,message:Object(E["formatMessage"])({id:"validation.userName.required"})}]}),y.a.createElement(pe,{name:"password",placeholder:"".concat(Object(E["formatMessage"])({id:"app.login.password"}),": ant.design"),rules:[{required:!0,message:Object(E["formatMessage"])({id:"validation.password.required"})}],onPressEnter:function(t){t.preventDefault(),e.loginForm.validateFields(e.handleSubmit)}})),y.a.createElement(ce,{key:"mobile",tab:Object(E["formatMessage"])({id:"app.login.tab-login-mobile"})},"error"===a.status&&"mobile"===a.type&&!o&&this.renderMessage(Object(E["formatMessage"])({id:"app.login.message-invalid-verification-code"})),y.a.createElement(ue,{name:"mobile",placeholder:Object(E["formatMessage"])({id:"form.phone-number.placeholder"}),rules:[{required:!0,message:Object(E["formatMessage"])({id:"validation.phone-number.required"})},{pattern:/^1\d{10}$/,message:Object(E["formatMessage"])({id:"validation.phone-number.wrong-format"})}]}),y.a.createElement(me,{name:"captcha",placeholder:Object(E["formatMessage"])({id:"form.verification-code.placeholder"}),countDown:120,onGetCaptcha:this.onGetCaptcha,getCaptchaButtonText:Object(E["formatMessage"])({id:"form.get-captcha"}),getCaptchaSecondText:Object(E["formatMessage"])({id:"form.captcha.second"}),rules:[{required:!0,message:Object(E["formatMessage"])({id:"validation.verification-code.required"})}]})),y.a.createElement("div",null,y.a.createElement(r["a"],{checked:c,onChange:this.changeAutoLogin},y.a.createElement(E["FormattedMessage"],{id:"app.login.remember-me"})),y.a.createElement("a",{style:{float:"right"},href:""},y.a.createElement(E["FormattedMessage"],{id:"app.login.forgot-password"}))),y.a.createElement(de,{loading:o},y.a.createElement(E["FormattedMessage"],{id:"app.login.login"})),y.a.createElement("div",{className:se.a.other},y.a.createElement(E["FormattedMessage"],{id:"app.login.sign-in-with"}),y.a.createElement(n["a"],{type:"alipay-circle",className:se.a.icon,theme:"outlined"}),y.a.createElement(n["a"],{type:"taobao-circle",className:se.a.icon,theme:"outlined"}),y.a.createElement(n["a"],{type:"weibo-circle",className:se.a.icon,theme:"outlined"}),y.a.createElement(w["a"],{className:se.a.register,to:"/user/register"},y.a.createElement(E["FormattedMessage"],{id:"app.login.signup"})))))}}]),t}(v["Component"]),ne=re))||ne);t["default"]=ge},w2qy:function(e,t,a){e.exports={main:"antd-pro-pages-user-login-main",icon:"antd-pro-pages-user-login-icon",other:"antd-pro-pages-user-login-other",register:"antd-pro-pages-user-login-register"}}}]);