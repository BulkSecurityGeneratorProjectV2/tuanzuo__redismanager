(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{gMQw:function(t,e,n){"use strict";n.r(e);var r,a,c=n("43Yg"),o=n.n(c),i=n("/tCh"),u=n.n(i),s=n("8aBX"),l=n.n(s),f=n("scpF"),p=n.n(f),h=n("O/V9"),d=n.n(h),v=n("ZZRV"),y=n.n(v),m=n("HTZB"),w=n("RFWI"),g=n("iPxP"),R=n.n(g);function F(t){var e=x();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p()(this,n)}}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}var C=(r=Object(w["a"])(),r(a=function(t){l()(n,t);var e=F(n);function n(){return o()(this,n),e.apply(this,arguments)}return u()(n,[{key:"render",value:function(){var t=this.props,e=t.height,n=t.forceFit,r=void 0===n||n,a=t.color,c=void 0===a?"#1890FF":a,o=t.data,i=void 0===o?[]:o,u={x:{type:"cat"},y:{min:0}},s=[36,5,30,5],l=["x*y",function(t,e){return{name:t,value:e}}],f=e+54;return y.a.createElement("div",{className:R.a.miniChart,style:{height:e}},y.a.createElement("div",{className:R.a.chartContent},y.a.createElement(m["Chart"],{scale:u,height:f,forceFit:r,data:i,padding:s},y.a.createElement(m["Tooltip"],{showTitle:!1,crosshairs:!1}),y.a.createElement(m["Geom"],{type:"interval",position:"x*y",color:c,tooltip:l}))))}}]),n}(y.a.Component))||a);e["default"]=C}}]);