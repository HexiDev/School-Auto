const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.6WyiKzBk.js","../chunks/disclose-version.BI_BLsxB.js","../chunks/runtime.zDXwUdKf.js","../chunks/preload-helper.C1FmrZbK.js","../chunks/index.C9AwUYvo.js","../assets/0.BjFlaoFj.css","../nodes/1.B-9KXl0a.js","../chunks/legacy.DD9LzAr7.js","../chunks/store.BLcRvefV.js","../chunks/lifecycle.DXu0ucaD.js","../chunks/entry.UA93HLbR.js","../nodes/2.CRFM4h9P.js","../chunks/2.BUKocONO.js","../chunks/index-client.DNmrXPuZ.js","../assets/2.pzq8Z7vw.css","../nodes/3.Zi54Tsb9.js"])))=>i.map(i=>d[i]);
var M=r=>{throw TypeError(r)};var N=(r,t,e)=>t.has(r)||M("Cannot "+e);var i=(r,t,e)=>(N(r,t,"read from private field"),e?e.call(r):t.get(r)),k=(r,t,e)=>t.has(r)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),w=(r,t,e,n)=>(N(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e);import{_ as x}from"../chunks/preload-helper.C1FmrZbK.js";import{w as Y,z as q,A as H,E as J,B as K,x as Q,Z as U,g as f,_ as W,Y as R,$ as p,F as $,X as tt,p as et,u as rt,a as at,a0 as st,i as P,j as nt,a1 as O,s as ot,k as it,t as ct,l as ut,f as T}from"../chunks/runtime.zDXwUdKf.js";import{h as lt,m as dt,u as ft,a as _t}from"../chunks/store.BLcRvefV.js";import{d as C,a as g,b as z,t as mt}from"../chunks/disclose-version.BI_BLsxB.js";import{p as L,o as ht,a as vt,i as D,b as I}from"../chunks/index-client.DNmrXPuZ.js";function V(r,t,e){Y&&q();var n=r,o,u;H(()=>{o!==(o=t())&&(u&&(U(u),u=null),o&&(u=K(()=>e(n,o))))},J),Y&&(n=Q)}function gt(r){return class extends yt{constructor(t){super({component:r,...t})}}}var _,c;class yt{constructor(t){k(this,_);k(this,c);var u;var e=new Map,n=(a,s)=>{var m=tt(s);return e.set(a,m),m};const o=new Proxy({...t.props||{},$$events:{}},{get(a,s){return f(e.get(s)??n(s,Reflect.get(a,s)))},has(a,s){return s===W?!0:(f(e.get(s)??n(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,m){return R(e.get(s)??n(s,m),m),Reflect.set(a,s,m)}});w(this,c,(t.hydrate?lt:dt)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((u=t==null?void 0:t.props)!=null&&u.$$host)||t.sync===!1)&&p(),w(this,_,o.$$events);for(const a of Object.keys(i(this,c)))a==="$set"||a==="$destroy"||a==="$on"||$(this,a,{get(){return i(this,c)[a]},set(s){i(this,c)[a]=s},enumerable:!0});i(this,c).$set=a=>{Object.assign(o,a)},i(this,c).$destroy=()=>{ft(i(this,c))}}$set(t){i(this,c).$set(t)}$on(t,e){i(this,_)[t]=i(this,_)[t]||[];const n=(...o)=>e.call(this,...o);return i(this,_)[t].push(n),()=>{i(this,_)[t]=i(this,_)[t].filter(o=>o!==n)}}$destroy(){i(this,c).$destroy()}}_=new WeakMap,c=new WeakMap;const Ct={};var bt=z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Et=z("<!> <!>",1);function xt(r,t){et(t,!0);let e=L(t,"components",23,()=>[]),n=L(t,"data_0",3,null),o=L(t,"data_1",3,null);rt(()=>t.stores.page.set(t.page)),at(()=>{t.stores,t.page,t.constructors,e(),t.form,n(),o(),t.stores.page.notify()});let u=O(!1),a=O(!1),s=O(null);ht(()=>{const h=t.stores.page.subscribe(()=>{f(u)&&(R(a,!0),st().then(()=>{R(s,vt(document.title||"untitled page"))}))});return R(u,!0),h});const m=T(()=>t.constructors[1]);var j=Et(),F=P(j);D(F,()=>t.constructors[1],h=>{var d=C();const y=T(()=>t.constructors[0]);var b=P(d);V(b,()=>f(y),(v,A)=>{I(A(v,{get data(){return n()},get form(){return t.form},children:(l,Pt)=>{var S=C(),G=P(S);V(G,()=>f(m),(X,Z)=>{I(Z(X,{get data(){return o()},get form(){return t.form}}),E=>e()[1]=E,()=>{var E;return(E=e())==null?void 0:E[1]})}),g(l,S)},$$slots:{default:!0}}),l=>e()[0]=l,()=>{var l;return(l=e())==null?void 0:l[0]})}),g(h,d)},h=>{var d=C();const y=T(()=>t.constructors[0]);var b=P(d);V(b,()=>f(y),(v,A)=>{I(A(v,{get data(){return n()},get form(){return t.form}}),l=>e()[0]=l,()=>{var l;return(l=e())==null?void 0:l[0]})}),g(h,d)});var B=ot(F,2);D(B,()=>f(u),h=>{var d=bt(),y=it(d);D(y,()=>f(a),b=>{var v=mt();ct(()=>_t(v,f(s))),g(b,v)}),ut(d),g(h,d)}),g(r,j),nt()}const Lt=gt(xt),Dt=[()=>x(()=>import("../nodes/0.6WyiKzBk.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>x(()=>import("../nodes/1.B-9KXl0a.js"),__vite__mapDeps([6,1,2,7,8,9,10]),import.meta.url),()=>x(()=>import("../nodes/2.CRFM4h9P.js"),__vite__mapDeps([11,12,1,2,8,13,10,3,4,7,9,14]),import.meta.url),()=>x(()=>import("../nodes/3.Zi54Tsb9.js"),__vite__mapDeps([15,1,2,7]),import.meta.url)],It=[],Vt={"/":[2],"/controller/[id]":[3]},jt={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{Vt as dictionary,jt as hooks,Ct as matchers,Dt as nodes,Lt as root,It as server_loads};