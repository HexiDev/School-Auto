import{F as P,G as D,H as I,I as j,J as q,q as H,K as E,o as B,L as W,M as $,N as T,O as g,y as L,z,x as p,P as F,Q as G,R as J,S as K,U as Q,V as U,m as X,B as Z,p as x,w as S,j as ee,c as re,C as N,b as te,W as ae,X as se,g as ne,Y as ie}from"./runtime.C0ZGHY8g.js";import{c as ue}from"./disclose-version.C1SVicI_.js";const M=new Set,R=new Set;function be(e){for(var r=0;r<e.length;r++)M.add(e[r]);for(var a of R)a(e)}function y(e){var A;var r=this,a=r.ownerDocument,s=e.type,u=((A=e.composedPath)==null?void 0:A.call(e))||[],t=u[0]||e.target,f=0,b=e.__root;if(b){var d=u.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var l=u.indexOf(r);if(l===-1)return;d<=l&&(f=d)}if(t=u[f]||e.target,t!==r){P(e,"currentTarget",{configurable:!0,get(){return t||a}});var m=q,o=H;D(null),I(null);try{for(var n,i=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+s];if(_!==void 0&&!t.disabled)if(j(_)){var[k,...C]=_;k.apply(t,[e,...C])}else _.call(t,e)}catch(v){n?i.push(v):n=v}if(e.cancelBubble||c===r||c===null)break;t=c}if(n){for(let v of i)queueMicrotask(()=>{throw v});throw n}}finally{e.__root=r,delete e.currentTarget,D(m),I(o)}}}const oe=["touchstart","touchmove"];function fe(e){return oe.includes(e)}let V=!0;function he(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ce(e,r){return Y(e,r)}function pe(e,r){E(),r.intro=r.intro??!1;const a=r.target,s=S,u=p;try{for(var t=B(a);t&&(t.nodeType!==8||t.data!==W);)t=$(t);if(!t)throw T;g(!0),L(t),z();const f=Y(e,{...r,anchor:t});if(p===null||p.nodeType!==8||p.data!==F)throw G(),T;return g(!1),f}catch(f){if(f===T)return r.recover===!1&&J(),E(),K(a),g(!1),ce(e,r);throw f}finally{g(s),L(u)}}const h=new Map;function Y(e,{target:r,anchor:a,props:s={},events:u,context:t,intro:f=!0}){E();var b=new Set,d=o=>{for(var n=0;n<o.length;n++){var i=o[n];if(!b.has(i)){b.add(i);var c=fe(i);r.addEventListener(i,y,{passive:c});var _=h.get(i);_===void 0?(document.addEventListener(i,y,{passive:c}),h.set(i,1)):h.set(i,_+1)}}};d(Q(M)),R.add(d);var l=void 0,m=U(()=>{var o=a??r.appendChild(X());return Z(()=>{if(t){x({});var n=re;n.c=t}u&&(s.$$events=u),S&&ue(o,null),V=f,l=e(o,s)||{},V=!0,S&&(H.nodes_end=p),t&&ee()}),()=>{var c;for(var n of b){r.removeEventListener(n,y);var i=h.get(n);--i===0?(document.removeEventListener(n,y),h.delete(n)):h.set(n,i)}R.delete(d),O.delete(l),o!==a&&((c=o.parentNode)==null||c.removeChild(o))}});return O.set(l,m),l}let O=new WeakMap;function ve(e){const r=O.get(e);r&&r()}function de(e,r,a){if(e==null)return r(void 0),N;const s=te(()=>e.subscribe(r,a));return s.unsubscribe?()=>s.unsubscribe():s}let w=!1;function ge(e,r,a){const s=a[r]??(a[r]={store:null,source:se(void 0),unsubscribe:N});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=N;else{var u=!0;s.unsubscribe=de(e,t=>{u?s.source.v=t:ie(s.source,t)}),u=!1}return ne(s.source)}function ye(){const e={};return ae(()=>{for(var r in e)e[r].unsubscribe()}),e}function we(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{he as a,ge as b,we as c,V as d,be as e,pe as h,ce as m,ye as s,ve as u};