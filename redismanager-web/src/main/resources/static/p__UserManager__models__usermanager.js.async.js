(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{HKq5:function(a,e,t){"use strict";t.r(e);var n=t("mK77"),r=t.n(n),c=t("Ico4"),s=t.n(c),u=t("dCQc");e["default"]={namespace:"usermanager",state:{data:{list:[],pagination:{},roles:[]}},effects:{fetch:s.a.mark(function a(e,t){var n,r,c,l,p;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,l=t.put,a.next=4,c(u["y"],n);case 4:return p=a.sent,a.next=7,l({type:"saveList",payload:p});case 7:r&&r(p);case 8:case"end":return a.stop()}},a)}),add:s.a.mark(function a(e,t){var n,r,c,l,p;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,l=t.put,a.next=4,c(u["e"],n);case 4:return p=a.sent,a.next=7,l({type:"onlySave",payload:p});case 7:r&&r(p);case 8:case"end":return a.stop()}},a)}),remove:s.a.mark(function a(e,t){var n,r,c,l,p;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,l=t.put,a.next=4,c(u["D"],n);case 4:return p=a.sent,a.next=7,l({type:"onlySave",payload:p});case 7:r&&r(p);case 8:case"end":return a.stop()}},a)}),updateStatus:s.a.mark(function a(e,t){var n,r,c,l,p;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,l=t.put,a.next=4,c(u["N"],n);case 4:return p=a.sent,a.next=7,l({type:"onlySave",payload:p});case 7:r&&r(p);case 8:case"end":return a.stop()}},a)}),resetPwd:s.a.mark(function a(e,t){var n,r,c,l,p;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,l=t.put,a.next=4,c(u["E"],n);case 4:return p=a.sent,a.next=7,l({type:"onlySave",payload:p});case 7:r&&r(p);case 8:case"end":return a.stop()}},a)}),grantRole:s.a.mark(function a(e,t){var n,r,c,l,p;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=e.callback,c=t.call,l=t.put,a.next=4,c(u["m"],n);case 4:return p=a.sent,a.next=7,l({type:"onlySave",payload:p});case 7:r&&r(p);case 8:case"end":return a.stop()}},a)})},reducers:{saveList:function(a,e){return r()({},a,{data:e.payload.datas||{}})},onlySave:function(a,e){return r()({},a)},save:function(a,e){return r()({},a,{data:e.payload})}}}}}]);