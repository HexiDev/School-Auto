import{ab as B,ac as A,_ as k,H as C,ad as P,D as L,ae as E,a8 as $,af as q,ag as K,ah as T,O as g,N as H,K as W,w as v,ai as z,aj as F,ak as G,al as J,am as Q,an as U,a7 as X,n as Z,p as x,v as N,a as ee,d as re,o as S,e as ae,ao as te,a6 as ne,i as se,B as ie}from"./runtime.BcFwiz_C.js";import{b as ue}from"./disclose-version.CqgYiBTK.js";const V=new Set,O=new Set;function be(e){for(var r=0;r<e.length;r++)V.add(e[r]);for(var t of O)t(e)}function y(e){var D;var r=this,t=r.ownerDocument,n=e.type,u=((D=e.composedPath)==null?void 0:D.call(e))||[],a=u[0]||e.target,f=0,b=e.__root;if(b){var d=u.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var l=u.indexOf(r);if(l===-1)return;d<=l&&(f=d)}if(a=u[f]||e.target,a!==r){B(e,"currentTarget",{configurable:!0,get(){return a||t}});var m=P,o=L;A(null),k(null);try{for(var s,i=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+n];if(_!==void 0&&!a.disabled)if(C(_)){var[Y,...j]=_;Y.apply(a,[e,...j])}else _.call(a,e)}catch(p){s?i.push(p):s=p}if(e.cancelBubble||c===r||c===null)break;a=c}if(s){for(let p of i)queueMicrotask(()=>{throw p});throw s}}finally{e.__root=r,delete e.currentTarget,A(m),k(o)}}}const oe=["touchstart","touchmove"];function fe(e){return oe.includes(e)}let I=!0;function he(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function ce(e,r){return M(e,r)}function ve(e,r){E(),r.intro=r.intro??!1;const t=r.target,n=N,u=v;try{for(var a=$(t);a&&(a.nodeType!==8||a.data!==q);)a=K(a);if(!a)throw T;g(!0),H(a),W();const f=M(e,{...r,anchor:a});if(v===null||v.nodeType!==8||v.data!==z)throw F(),T;return g(!1),f}catch(f){if(f===T)return r.recover===!1&&G(),E(),J(t),g(!1),ce(e,r);throw f}finally{g(n),H(u)}}const h=new Map;function M(e,{target:r,anchor:t,props:n={},events:u,context:a,intro:f=!0}){E();var b=new Set,d=o=>{for(var s=0;s<o.length;s++){var i=o[s];if(!b.has(i)){b.add(i);var c=fe(i);r.addEventListener(i,y,{passive:c});var _=h.get(i);_===void 0?(document.addEventListener(i,y,{passive:c}),h.set(i,1)):h.set(i,_+1)}}};d(Q(V)),O.add(d);var l=void 0,m=U(()=>{var o=t??r.appendChild(X());return Z(()=>{if(a){x({});var s=re;s.c=a}u&&(n.$$events=u),N&&ue(o,null),I=f,l=e(o,n)||{},I=!0,N&&(L.nodes_end=v),a&&ee()}),()=>{var c;for(var s of b){r.removeEventListener(s,y);var i=h.get(s);--i===0?(document.removeEventListener(s,y),h.delete(s)):h.set(s,i)}O.delete(d),R.delete(l),o!==t&&((c=o.parentNode)==null||c.removeChild(o))}});return R.set(l,m),l}let R=new WeakMap;function pe(e){const r=R.get(e);r&&r()}function de(e,r,t){if(e==null)return r(void 0),S;const n=ae(()=>e.subscribe(r,t));return n.unsubscribe?()=>n.unsubscribe():n}let w=!1;function ge(e,r,t){const n=t[r]??(t[r]={store:null,source:ne(void 0),unsubscribe:S});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=S;else{var u=!0;n.unsubscribe=de(e,a=>{u?n.source.v=a:ie(n.source,a)}),u=!1}return se(n.source)}function ye(){const e={};return te(()=>{for(var r in e)e[r].unsubscribe()}),e}function we(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{he as a,ge as b,we as c,I as d,be as e,ve as h,ce as m,ye as s,pe as u};