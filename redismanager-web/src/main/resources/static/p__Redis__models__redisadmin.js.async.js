(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{yXRw:function(e,a,t){"use strict";t.r(a);var n=t("p0pE"),r=t.n(n),c=t("d6i3"),s=t.n(c),u=t("dCQc"),p=(t("7DNP"),t("Qyje"),t("34ay")),l=t("HZnN");a["default"]={namespace:"redisadmin",state:{configList:[],keyList:[],keyValue:{}},effects:{fetchConfigList:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["x"],n);case 4:return l=e.sent,e.next=7,p({type:"saveConfigList",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),appendFetchConfigList:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["x"],n);case 4:return l=e.sent,e.next=7,p({type:"appendConfigList",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),addConfig:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["d"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),removeConfig:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["G"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),updateConfig:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["Q"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),uploadFile:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["V"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),initContext:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["q"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),clearCache:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["g"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),testConnection:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["L"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),fetchKeyList:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["y"],n);case 4:return l=e.sent,e.next=7,p({type:"saveKeyList",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),fetchKeyValue:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["z"],n);case 4:return l=e.sent,e.next=7,p({type:"saveKeyValue",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),delKeys:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["h"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),setKeyTTL:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["K"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),reNameKey:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["D"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),updateKeyValue:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["O"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)}),addKeyValue:s.a.mark(function e(a,t){var n,r,c,p,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,p=t.put,e.next=4,c(u["c"],n);case 4:return l=e.sent,e.next=7,p({type:"save",payload:l});case 7:r&&r(l);case 8:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){var t=a.payload;return r()({},e,t)},handleAuth:function(e,a){var t=a.payload,n=[];return n.push("admin","user"),Object(p["b"])(n),Object(l["b"])(),r()({},e,t)},saveConfigList:function(e,a){return r()({},e,{configList:a.payload.datas.configList||[]})},appendConfigList:function(e,a){return r()({},e,{configList:e.configList.concat(a.payload.datas.configList||[])})},saveKeyList:function(e,a){return r()({},e,{keyList:a.payload.datas.keyList||[]})},saveKeyValue:function(e,a){return r()({},e,{keyValue:a.payload.datas.keyValue||{}})}}}}}]);