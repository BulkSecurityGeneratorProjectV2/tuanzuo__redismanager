(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"0dPK":function(e,a,t){"use strict";t.r(a);var n=t("mK77"),r=t.n(n),c=t("Ico4"),s=t.n(c),p=t("dCQc");a["default"]={namespace:"rule",state:{data:{list:[],pagination:{}}},effects:{fetch:s.a.mark(function e(a,t){var n,r,c,u;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=t.call,c=t.put,e.next=4,r(p["t"],n);case 4:return u=e.sent,e.next=7,c({type:"save",payload:u});case 7:case"end":return e.stop()}},e)}),add:s.a.mark(function e(a,t){var n,r,c,u,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,u=t.put,e.next=4,c(p["c"],n);case 4:return l=e.sent,e.next=7,u({type:"save",payload:l});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),remove:s.a.mark(function e(a,t){var n,r,c,u,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,u=t.put,e.next=4,c(p["y"],n);case 4:return l=e.sent,e.next=7,u({type:"save",payload:l});case 7:r&&r();case 8:case"end":return e.stop()}},e)}),update:s.a.mark(function e(a,t){var n,r,c,u,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.payload,r=a.callback,c=t.call,u=t.put,e.next=4,c(p["C"],n);case 4:return l=e.sent,e.next=7,u({type:"save",payload:l});case 7:r&&r();case 8:case"end":return e.stop()}},e)})},reducers:{save:function(e,a){return r()({},e,{data:a.payload})}}}}}]);