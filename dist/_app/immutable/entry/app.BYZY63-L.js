const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DvhsVX_m.js","../chunks/disclose-version.C1SVicI_.js","../chunks/runtime.C0ZGHY8g.js","../chunks/preload-helper.C1FmrZbK.js","../chunks/index.C9AwUYvo.js","../assets/0.BEBIazqQ.css","../nodes/1.CfQYdpfa.js","../chunks/legacy.DA3nD9hs.js","../chunks/store.ScBgatD4.js","../chunks/lifecycle.ChomH2bI.js","../chunks/entry.A-WZj17j.js","../nodes/2.B8C0aw8g.js","../chunks/2.0jnMlgYC.js","../chunks/index-client.BABZaqDl.js","../assets/2.EFwr2Miy.css","../nodes/3.C2qQFB-9.js"])))=>i.map(i=>d[i]);
var M=r=>{throw TypeError(r)};var N=(r,t,e)=>t.has(r)||M("Cannot "+e);var c=(r,t,e)=>(N(r,t,"read from private field"),e?e.call(r):t.get(r)),k=(r,t,e)=>t.has(r)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e),w=(r,t,e,n)=>(N(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e);import{_ as x}from"../chunks/preload-helper.C1FmrZbK.js";import{w as Y,z as q,A as H,E as J,B as K,x as Q,Z as U,g as f,_ as W,Y as R,$ as p,F as $,X as tt,p as et,u as rt,a as at,a0 as st,i as P,j as nt,a1 as O,s as ot,k as ct,t as it,l as ut,f as T}from"../chunks/runtime.C0ZGHY8g.js";import{h as lt,m as dt,u as ft,a as _t}from"../chunks/store.ScBgatD4.js";import{d as C,a as g,b as z,t as mt}from"../chunks/disclose-version.C1SVicI_.js";import{p as L,o as ht,a as vt,i as D,b as I}from"../chunks/index-client.BABZaqDl.js";function V(r,t,e){Y&&q();var n=r,o,u;H(()=>{o!==(o=t())&&(u&&(U(u),u=null),o&&(u=K(()=>e(n,o))))},J),Y&&(n=Q)}function gt(r){return class extends yt{constructor(t){super({component:r,...t})}}}var _,i;class yt{constructor(t){k(this,_);k(this,i);var u;var e=new Map,n=(a,s)=>{var m=tt(s);return e.set(a,m),m};const o=new Proxy({...t.props||{},$$events:{}},{get(a,s){return f(e.get(s)??n(s,Reflect.get(a,s)))},has(a,s){return s===W?!0:(f(e.get(s)??n(s,Reflect.get(a,s))),Reflect.has(a,s))},set(a,s,m){return R(e.get(s)??n(s,m),m),Reflect.set(a,s,m)}});w(this,i,(t.hydrate?lt:dt)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((u=t==null?void 0:t.props)!=null&&u.$$host)||t.sync===!1)&&p(),w(this,_,o.$$events);for(const a of Object.keys(c(this,i)))a==="$set"||a==="$destroy"||a==="$on"||$(this,a,{get(){return c(this,i)[a]},set(s){c(this,i)[a]=s},enumerable:!0});c(this,i).$set=a=>{Object.assign(o,a)},c(this,i).$destroy=()=>{ft(c(this,i))}}$set(t){c(this,i).$set(t)}$on(t,e){c(this,_)[t]=c(this,_)[t]||[];const n=(...o)=>e.call(this,...o);return c(this,_)[t].push(n),()=>{c(this,_)[t]=c(this,_)[t].filter(o=>o!==n)}}$destroy(){c(this,i).$destroy()}}_=new WeakMap,i=new WeakMap;const Ct={};var bt=z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),Et=z("<!> <!>",1);function xt(r,t){et(t,!0);let e=L(t,"components",23,()=>[]),n=L(t,"data_0",3,null),o=L(t,"data_1",3,null);rt(()=>t.stores.page.set(t.page)),at(()=>{t.stores,t.page,t.constructors,e(),t.form,n(),o(),t.stores.page.notify()});let u=O(!1),a=O(!1),s=O(null);ht(()=>{const h=t.stores.page.subscribe(()=>{f(u)&&(R(a,!0),st().then(()=>{R(s,vt(document.title||"untitled page"))}))});return R(u,!0),h});const m=T(()=>t.constructors[1]);var j=Et(),F=P(j);D(F,()=>t.constructors[1],h=>{var d=C();const y=T(()=>t.constructors[0]);var b=P(d);V(b,()=>f(y),(v,A)=>{I(A(v,{get data(){return n()},get form(){return t.form},children:(l,Pt)=>{var S=C(),G=P(S);V(G,()=>f(m),(X,Z)=>{I(Z(X,{get data(){return o()},get form(){return t.form}}),E=>e()[1]=E,()=>{var E;return(E=e())==null?void 0:E[1]})}),g(l,S)},$$slots:{default:!0}}),l=>e()[0]=l,()=>{var l;return(l=e())==null?void 0:l[0]})}),g(h,d)},h=>{var d=C();const y=T(()=>t.constructors[0]);var b=P(d);V(b,()=>f(y),(v,A)=>{I(A(v,{get data(){return n()},get form(){return t.form}}),l=>e()[0]=l,()=>{var l;return(l=e())==null?void 0:l[0]})}),g(h,d)});var B=ot(F,2);D(B,()=>f(u),h=>{var d=bt(),y=ct(d);D(y,()=>f(a),b=>{var v=mt();it(()=>_t(v,f(s))),g(b,v)}),ut(d),g(h,d)}),g(r,j),nt()}const Lt=gt(xt),Dt=[()=>x(()=>import("../nodes/0.DvhsVX_m.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>x(()=>import("../nodes/1.CfQYdpfa.js"),__vite__mapDeps([6,1,2,7,8,9,10]),import.meta.url),()=>x(()=>import("../nodes/2.B8C0aw8g.js"),__vite__mapDeps([11,12,1,2,7,8,9,13,10,3,4,14]),import.meta.url),()=>x(()=>import("../nodes/3.C2qQFB-9.js"),__vite__mapDeps([15,1,2,7]),import.meta.url)],It=[],Vt={"/":[2],"/controller":[3]},jt={handleError:({error:r})=>{console.error(r)},reroute:()=>{}};export{Vt as dictionary,jt as hooks,Ct as matchers,Dt as nodes,Lt as root,It as server_loads};