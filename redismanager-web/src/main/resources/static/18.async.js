(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"4Ofr":function(e,t,a){e.exports={themeColor:"antd-pro-components-setting-drawer-theme-color-themeColor",title:"antd-pro-components-setting-drawer-theme-color-title",colorBlock:"antd-pro-components-setting-drawer-theme-color-colorBlock"}},BFsb:function(e,t,a){e.exports={content:"antd-pro-components-setting-drawer-index-content",blockChecbox:"antd-pro-components-setting-drawer-index-blockChecbox",item:"antd-pro-components-setting-drawer-index-item",selectIcon:"antd-pro-components-setting-drawer-index-selectIcon",color_block:"antd-pro-components-setting-drawer-index-color_block",title:"antd-pro-components-setting-drawer-index-title",handle:"antd-pro-components-setting-drawer-index-handle",productionHint:"antd-pro-components-setting-drawer-index-productionHint"}},PceP:function(e,t,a){"use strict";a.r(t);a("bbsP");var n,o,r,c=a("/wGt"),i=(a("fOrg"),a("+KLJ")),l=(a("+L6B"),a("2/Rp")),s=(a("miYZ"),a("tsqr")),d=(a("/zsF"),a("PArb")),p=(a("Pwec"),a("CtXQ")),m=(a("5Dmo"),a("3S7+")),g=(a("Mwp2"),a("VXEj")),u=(a("BoS7"),a("Sdc0")),f=a("2Taf"),h=a.n(f),y=a("vZ4D"),b=a.n(y),k=a("MhPg"),E=a.n(k),v=a("l4Ni"),C=a.n(v),w=a("ujKo"),j=a.n(w),O=a("p0pE"),x=a.n(O),S=(a("OaEy"),a("2fM7")),M=a("q1tI"),N=a.n(M),z=a("LLXN"),F=a("P5Jw"),B=a("MuoO"),H=a("BGR+"),R=a("BFsb"),D=a.n(R),I=a("jehZ"),L=a.n(I),P=a("Y/ft"),A=a.n(P),J=a("4Ofr"),q=a.n(J),W=function(e){var t=e.color,a=e.check,n=A()(e,["color","check"]);return N.a.createElement("div",L()({},n,{style:{backgroundColor:t}}),a?N.a.createElement(p["a"],{type:"check"}):"")},T=function(e){var t=e.colors,a=e.title,n=e.value,o=e.onChange,r=t;return t||(r=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),N.a.createElement("div",{className:q.a.themeColor},N.a.createElement("h3",{className:q.a.title},a),N.a.createElement("div",{className:q.a.content},r.map(function(e){var t=e.key,a=e.color;return N.a.createElement(m["a"],{key:a,title:Object(z["formatMessage"])({id:"app.setting.themecolor.".concat(t)})},N.a.createElement(W,{className:q.a.colorBlock,color:a,check:n===a,onClick:function(){return o&&o(a)}}))})))},X=T,Y=function(e){var t=e.value,a=e.onChange,n=e.list;return N.a.createElement("div",{className:D.a.blockChecbox,key:t},n.map(function(e){return N.a.createElement(m["a"],{title:e.title,key:e.key},N.a.createElement("div",{className:D.a.item,onClick:function(){return a(e.key)}},N.a.createElement("img",{src:e.url,alt:e.key}),N.a.createElement("div",{className:D.a.selectIcon,style:{display:t===e.key?"block":"none"}},N.a.createElement(p["a"],{type:"check"}))))}))},Z=Y;function K(e){var t=_();return function(){var a,n=j()(e);if(t){var o=j()(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return C()(this,a)}}function _(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var G=S["a"].Option,Q=function(e){var t=e.children,a=e.title,n=e.style;return N.a.createElement("div",{style:x()({},n,{marginBottom:24})},N.a.createElement("h3",{className:D.a.title},a),t)},V=(n=Object(B["connect"])(function(e){var t=e.setting;return{setting:t}}),n((r=function(e){E()(a,e);var t=K(a);function a(){var e;h()(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o)),e.state={collapse:!1},e.getLayoutSetting=function(){var t=e.props.setting,a=t.contentWidth,n=t.fixedHeader,o=t.layout,r=t.autoHideHeader,c=t.fixSiderbar;return[{title:Object(z["formatMessage"])({id:"app.setting.content-width"}),action:N.a.createElement(S["a"],{value:a,size:"small",onSelect:function(t){return e.changeSetting("contentWidth",t)},style:{width:80}},"sidemenu"===o?null:N.a.createElement(G,{value:"Fixed"},Object(z["formatMessage"])({id:"app.setting.content-width.fixed"})),N.a.createElement(G,{value:"Fluid"},Object(z["formatMessage"])({id:"app.setting.content-width.fluid"})))},{title:Object(z["formatMessage"])({id:"app.setting.fixedheader"}),action:N.a.createElement(u["a"],{size:"small",checked:!!n,onChange:function(t){return e.changeSetting("fixedHeader",t)}})},{title:Object(z["formatMessage"])({id:"app.setting.hideheader"}),disabled:!n,disabledReason:Object(z["formatMessage"])({id:"app.setting.hideheader.hint"}),action:N.a.createElement(u["a"],{size:"small",checked:!!r,onChange:function(t){return e.changeSetting("autoHideHeader",t)}})},{title:Object(z["formatMessage"])({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===o,disabledReason:Object(z["formatMessage"])({id:"app.setting.fixedsidebar.hint"}),action:N.a.createElement(u["a"],{size:"small",checked:!!c,onChange:function(t){return e.changeSetting("fixSiderbar",t)}})}]},e.changeSetting=function(t,a){var n=e.props.setting,o=x()({},n);o[t]=a,"layout"===t?o.contentWidth="topmenu"===a?"Fixed":"Fluid":"fixedHeader"!==t||a||(o.autoHideHeader=!1),e.setState(o,function(){var t=e.props.dispatch;t({type:"setting/changeSetting",payload:e.state})})},e.togglerContent=function(){var t=e.state.collapse;e.setState({collapse:!t})},e.renderLayoutSettingItem=function(e){var t=N.a.cloneElement(e.action,{disabled:e.disabled});return N.a.createElement(m["a"],{title:e.disabled?e.disabledReason:"",placement:"left"},N.a.createElement(g["a"].Item,{actions:[t]},N.a.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},e}return b()(a,[{key:"render",value:function(){var e=this,t=this.props.setting,a=t.navTheme,n=t.primaryColor,o=t.layout,r=t.colorWeak,m=this.state.collapse;return N.a.createElement(c["a"],{visible:m,width:300,onClose:this.togglerContent,placement:"right",handler:N.a.createElement("div",{className:D.a.handle,onClick:this.togglerContent},N.a.createElement(p["a"],{type:m?"close":"setting",style:{color:"#fff",fontSize:20}})),style:{zIndex:999}},N.a.createElement("div",{className:D.a.content},N.a.createElement(Q,{title:Object(z["formatMessage"])({id:"app.setting.pagestyle"})},N.a.createElement(Z,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:Object(z["formatMessage"])({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:Object(z["formatMessage"])({id:"app.setting.pagestyle.light"})}],value:a,onChange:function(t){return e.changeSetting("navTheme",t)}})),N.a.createElement(X,{title:Object(z["formatMessage"])({id:"app.setting.themecolor"}),value:n,onChange:function(t){return e.changeSetting("primaryColor",t)}}),N.a.createElement(d["a"],null),N.a.createElement(Q,{title:Object(z["formatMessage"])({id:"app.setting.navigationmode"})},N.a.createElement(Z,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:Object(z["formatMessage"])({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:Object(z["formatMessage"])({id:"app.setting.topmenu"})}],value:o,onChange:function(t){return e.changeSetting("layout",t)}})),N.a.createElement(g["a"],{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),N.a.createElement(d["a"],null),N.a.createElement(Q,{title:Object(z["formatMessage"])({id:"app.setting.othersettings"})},N.a.createElement(g["a"].Item,{actions:[N.a.createElement(u["a"],{size:"small",checked:!!r,onChange:function(t){return e.changeSetting("colorWeak",t)}})]},Object(z["formatMessage"])({id:"app.setting.weakmode"}))),N.a.createElement(d["a"],null),N.a.createElement(F["CopyToClipboard"],{text:JSON.stringify(Object(H["a"])(t,["colorWeak"]),null,2),onCopy:function(){return s["a"].success(Object(z["formatMessage"])({id:"app.setting.copyinfo"}))}},N.a.createElement(l["a"],{block:!0,icon:"copy"},Object(z["formatMessage"])({id:"app.setting.copy"}))),N.a.createElement(i["a"],{type:"warning",className:D.a.productionHint,message:N.a.createElement("div",null,Object(z["formatMessage"])({id:"app.setting.production.hint"})," ",N.a.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),a}(M["PureComponent"]),o=r))||o);t["default"]=V}}]);