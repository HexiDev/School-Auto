const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/web.C8LvoEPP.js","../chunks/index.C9AwUYvo.js"])))=>i.map(i=>d[i]);
import{c as Le,a as M,n as le,t as j}from"../chunks/disclose-version.BgMw_sOL.js";import{x as S,h as ce,g as Re,v as Pe,j as qe,a4 as He,R as Ge,q as Ne,a8 as Ve,a9 as he,e as fe,k as U,l as We,av as re,a5 as Te,w as De,a6 as Ye,y as ne,aw as Ke,ax as Je,o as Qe,ay as Ue,ar as Xe,S as Me,V as Ze,_ as ge,az as je,aA as $e,aB as et,b as tt,a3 as ye,aC as at,aD as rt,a7 as st,aE as it,aF as nt,aa as ot,G as lt,aG as ct,ac as ft,T as X,aH as vt,P as be,Q as xe,p as me,aI as ve,aJ as ut,f as oe,a as pe,B as h,C as ue,c as C,r as w,t as Y,s as O,L as G,W as Z,au as dt}from"../chunks/runtime.21i3awN_.js";import{d as Se}from"../chunks/store.CqMPxDe7.js";import{p as x,i as K,b as _t,a as te}from"../chunks/props.B2Lv45ul.js";import{o as mt}from"../chunks/index-client._aWZkuMk.js";import{a as pt,s as se}from"../chunks/render.LPY6_CAd.js";import{g as ht}from"../chunks/entry.Btu8zw6R.js";import{B as de}from"../chunks/bleClient.DXSZBbG9.js";import{_ as gt}from"../chunks/preload-helper.C1FmrZbK.js";import{r as yt}from"../chunks/index.C9AwUYvo.js";import{i as bt}from"../chunks/legacy.BUIysLVa.js";function xt(t,e){return e}function wt(t,e,a,r){for(var n=[],l=e.length,i=0;i<l;i++)Je(e[i].e,n,!0);var u=l>0&&n.length===0&&a!==null;if(u){var o=a.parentNode;Qe(o),o.append(a),r.clear(),B(t,e[0].prev,e[l-1].next)}Ue(n,()=>{for(var c=0;c<l;c++){var s=e[c];u||(r.delete(s.k),B(t,s.prev,s.next)),Xe(s.e,!u)}})}function Ct(t,e,a,r,n,l=null){var i=t,u={flags:e,items:new Map,first:null};{var o=t;i=S?ce(Re(o)):o.appendChild(Pe())}S&&qe();var c=null,s=!1;He(()=>{var _=a(),f=Ge(_)?_:_==null?[]:Ne(_),v=f.length;if(s&&v===0)return;s=v===0;let d=!1;if(S){var p=i.data===Ve;p!==(v===0)&&(i=he(),ce(i),fe(!1),d=!0)}if(S){for(var y=null,m,g=0;g<v;g++){if(U.nodeType===8&&U.data===We){i=U,d=!0,fe(!1);break}var E=f[g],A=r(E,g);m=Oe(U,u,y,null,E,A,g,n,e),u.items.set(A,m),y=m}v>0&&ce(he())}if(!S){var b=Me;At(f,u,i,n,e,(b.f&re)!==0,r)}l!==null&&(v===0?c?Te(c):c=De(()=>l(i)):c!==null&&Ye(c,()=>{c=null})),d&&fe(!0),a()}),S&&(i=U)}function At(t,e,a,r,n,l,i){var u=t.length,o=e.items,c=e.first,s=c,_,f=null,v=[],d=[],p,y,m,g;for(g=0;g<u;g+=1){if(p=t[g],y=i(p,g),m=o.get(y),m===void 0){var E=s?s.e.nodes_start:a;f=Oe(E,e,f,f===null?e.first:f.next,p,y,g,r,n),o.set(y,f),v=[],d=[],s=f.next;continue}if(Et(m,p,g),m.e.f&re&&Te(m.e),m!==s){if(_!==void 0&&_.has(m)){if(v.length<d.length){var A=d[0],b;f=A.prev;var L=v[0],N=v[v.length-1];for(b=0;b<v.length;b+=1)we(v[b],A,a);for(b=0;b<d.length;b+=1)_.delete(d[b]);B(e,L.prev,N.next),B(e,f,L),B(e,N,A),s=A,f=N,g-=1,v=[],d=[]}else _.delete(m),we(m,s,a),B(e,m.prev,m.next),B(e,m,f===null?e.first:f.next),B(e,f,m),f=m;continue}for(v=[],d=[];s!==null&&s.k!==y;)(l||!(s.e.f&re))&&(_??(_=new Set)).add(s),d.push(s),s=s.next;if(s===null)continue;m=s}v.push(m),f=m,s=m.next}if(s!==null||_!==void 0){for(var I=_===void 0?[]:Ne(_);s!==null;)(l||!(s.e.f&re))&&I.push(s),s=s.next;var T=I.length;if(T>0){var V=u===0?a:null;wt(e,I,V,o)}}ne.first=e.first&&e.first.e,ne.last=f&&f.e}function Et(t,e,a,r){Ke(t.v,e),t.i=a}function Oe(t,e,a,r,n,l,i,u,o){var c=(o&$e)!==0,s=(o&et)===0,_=c?s?Ze(n):ge(n):n,f=o&je?ge(i):i,v={i:f,v:_,k:l,a:null,e:null,prev:a,next:r};try{return v.e=De(()=>u(t,_,f),S),v.e.prev=a&&a.e,v.e.next=r&&r.e,a===null?e.first=v:(a.next=v,a.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function we(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,l=t.e.nodes_start;l!==r;){var i=tt(l);n.before(l),l=i}}function B(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function z(t,e,a,r){var n=t.__attributes??(t.__attributes={});S&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[at]=a),a==null?t.removeAttribute(e):typeof a!="string"&&kt(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var Ce=new Map;function kt(t){var e=Ce.get(t.nodeName);if(e)return e;Ce.set(t.nodeName,e=[]);for(var a,r=ye(t),n=Element.prototype;n!==r;){a=rt(r);for(var l in a)a[l].set&&e.push(l);r=ye(r)}return e}function zt(t,e){var a=t.__className,r=It(e);S&&t.getAttribute("class")===r?t.__className=r:(a!==r||S&&t.getAttribute("class")!==r)&&(r===""?t.removeAttribute("class"):t.setAttribute("class",r),t.__className=r)}function It(t){return t??""}function F(t,e,a){if(a){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}const Lt=()=>performance.now(),R={tick:t=>requestAnimationFrame(t),now:()=>Lt(),tasks:new Set};function Fe(t){R.tasks.forEach(e=>{e.c(t)||(R.tasks.delete(e),e.f())}),R.tasks.size!==0&&R.tick(Fe)}function Nt(t){let e;return R.tasks.size===0&&R.tick(Fe),{promise:new Promise(a=>{R.tasks.add(e={c:t,f:a})}),abort(){R.tasks.delete(e)}}}function ae(t,e){t.dispatchEvent(new CustomEvent(e))}function Tt(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Ae(t){const e={},a=t.split(";");for(const r of a){const[n,l]=r.split(":");if(!n||l===void 0)break;const i=Tt(n.trim());e[i]=l.trim()}return e}const Dt=t=>t;function Ee(t,e,a,r){var n=(t&vt)!==0,l="both",i,u=e.inert,o,c;function s(){var p=Me,y=ne;be(null),xe(null);try{return i??(i=a()(e,(r==null?void 0:r())??{},{direction:l}))}finally{be(p),xe(y)}}var _={is_global:n,in(){e.inert=u,ae(e,"introstart"),o=_e(e,s(),c,1,()=>{ae(e,"introend"),o==null||o.abort(),o=i=void 0})},out(p){e.inert=!0,ae(e,"outrostart"),c=_e(e,s(),o,0,()=>{ae(e,"outroend"),p==null||p()})},stop:()=>{o==null||o.abort(),c==null||c.abort()}},f=ne;if((f.transitions??(f.transitions=[])).push(_),pt){var v=n;if(!v){for(var d=f.parent;d&&d.f&st;)for(;(d=d.parent)&&!(d.f&it););v=!d||(d.f&nt)!==0}v&&ot(()=>{lt(()=>_.in())})}}function _e(t,e,a,r,n){var l=r===1;if(ct(e)){var i,u=!1;return ft(()=>{if(!u){var y=e({direction:l?"in":"out"});i=_e(t,y,a,r,n)}}),{abort:()=>{u=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(a==null||a.deactivate(),!(e!=null&&e.duration))return n(),{abort:X,deactivate:X,reset:X,t:()=>r};const{delay:o=0,css:c,tick:s,easing:_=Dt}=e;var f=[];if(l&&a===void 0&&(s&&s(0,1),c)){var v=Ae(c(0,1));f.push(v,v)}var d=()=>1-r,p=t.animate(f,{duration:o});return p.onfinish=()=>{var y=(a==null?void 0:a.t())??1-r;a==null||a.abort();var m=r-y,g=e.duration*Math.abs(m),E=[];if(g>0){if(c)for(var A=Math.ceil(g/16.666666666666668),b=0;b<=A;b+=1){var L=y+m*_(b/A),N=c(L,1-L);E.push(Ae(N))}d=()=>{var I=p.currentTime;return y+m*_(I/g)},s&&Nt(()=>{if(p.playState!=="running")return!1;var I=d();return s(I,1-I),!0})}p=t.animate(E,{duration:g,fill:"forwards"}),p.onfinish=()=>{d=()=>r,s==null||s(r,1-r),n()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=X)},deactivate:()=>{n=X},reset:()=>{r===0&&(s==null||s(1,0))},t:()=>d()}}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Mt={prefix:"fas",iconName:"square-plus",icon:[448,512,[61846,"plus-square"],"f0fe","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},St={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Ot={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]},Ft=yt("ScreenOrientation",{web:()=>gt(()=>import("../chunks/web.C8LvoEPP.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>new t.ScreenOrientationWeb)});/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Bt={prefix:"fab",iconName:"bluetooth-b",icon:[320,512,[],"f294","M196.48 260.023l92.626-103.333L143.125 0v206.33l-86.111-86.111-31.406 31.405 108.061 108.399L25.608 368.422l31.406 31.405 86.111-86.111L145.84 512l148.552-148.644-97.912-103.333zm40.86-102.996l-49.977 49.978-.338-100.295 50.315 50.317zM187.363 313.04l49.977 49.978-50.315 50.316.338-100.294z"]};function ke(t,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?t.style.fontSize=e.replace("x","em"):t.style.fontSize=""}function Rt(t,e,a,r,n,l=1,i="",u=""){let o=1,c=1;n&&(n=="horizontal"?o=-1:n=="vertical"?c=-1:o=c=-1),typeof t=="string"&&(t=parseFloat(t)),typeof e=="string"&&(e=parseFloat(e)),typeof a=="string"&&(a=parseFloat(a));const s=`${e*l}${i}`,_=`${a*l}${i}`;let f=`translate(${s},${_}) scale(${o*t},${c*t})`;return r&&(f+=` rotate(${r}${u})`),f}var Pt=le('<title class="svelte-bvo74f"> </title>'),qt=le('<path class="svelte-bvo74f"></path>'),Ht=le('<path class="svelte-bvo74f"></path><path class="svelte-bvo74f"></path>',1),Gt=le('<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><!><g class="svelte-bvo74f"><g class="svelte-bvo74f"><!></g></g></svg>');function ie(t,e){me(e,!1);const a=ue(),r=ue();let n=x(e,"class",24,()=>{}),l=x(e,"id",24,()=>{}),i=x(e,"style",24,()=>{}),u=x(e,"icon",8),o=x(e,"title",24,()=>{}),c=x(e,"size",24,()=>{}),s=x(e,"color",24,()=>{}),_=x(e,"fw",8,!1),f=x(e,"pull",24,()=>{}),v=x(e,"scale",8,1),d=x(e,"translateX",8,0),p=x(e,"translateY",8,0),y=x(e,"rotate",24,()=>{}),m=x(e,"flip",24,()=>{}),g=x(e,"spin",8,!1),E=x(e,"pulse",8,!1),A=x(e,"primaryColor",8,""),b=x(e,"secondaryColor",8,""),L=x(e,"primaryOpacity",8,1),N=x(e,"secondaryOpacity",8,.4),I=x(e,"swapOpacity",8,!1),T=ue();ve(()=>(h(T),G(c()),ke),()=>{h(T)&&c()&&ke(h(T),c())}),ve(()=>G(u()),()=>{Z(a,u()&&u().icon||[0,0,"",[],""])}),ve(()=>(G(v()),G(d()),G(p()),G(y()),G(m())),()=>{Z(r,Rt(v(),d(),p(),y(),m(),512))}),ut(),bt();var V=Le(),$=oe(V);K($,()=>h(a)[4],J=>{var k=Gt(),Q=C(k);K(Q,o,q=>{var D=Pt(),H=C(D,!0);w(D),Y(()=>se(H,o())),M(q,D)});var W=O(Q),P=C(W),Be=C(P);K(Be,()=>typeof h(a)[4]=="string",q=>{var D=qt();Y(()=>{z(D,"d",h(a)[4]),z(D,"fill",s()||A()||"currentColor"),z(D,"transform",`translate(${h(a)[0]/-2} ${h(a)[1]/-2})`)}),M(q,D)},q=>{var D=Ht(),H=oe(D),ee=O(H);Y(()=>{z(H,"d",h(a)[4][0]),z(H,"fill",b()||s()||"currentColor"),z(H,"fill-opacity",I()!=!1?L():N()),z(H,"transform",`translate(${h(a)[0]/-2} ${h(a)[1]/-2})`),z(ee,"d",h(a)[4][1]),z(ee,"fill",A()||s()||"currentColor"),z(ee,"fill-opacity",I()!=!1?N():L()),z(ee,"transform",`translate(${h(a)[0]/-2} ${h(a)[1]/-2})`)}),M(q,D)}),w(P),w(W),w(k),_t(k,q=>Z(T,q),()=>h(T)),Y(()=>{z(k,"id",l()),zt(k,`svelte-fa svelte-fa-base ${n()??""} svelte-bvo74f`),z(k,"style",i()),z(k,"viewBox",`0 0 ${h(a)[0]??""} ${h(a)[1]??""}`),F(k,"pulse",E()),F(k,"svelte-fa-size-lg",c()==="lg"),F(k,"svelte-fa-size-sm",c()==="sm"),F(k,"svelte-fa-size-xs",c()==="xs"),F(k,"svelte-fa-fw",_()),F(k,"svelte-fa-pull-left",f()==="left"),F(k,"svelte-fa-pull-right",f()==="right"),F(k,"spin",g()),z(W,"transform",`translate(${h(a)[0]/2} ${h(a)[1]/2})`),z(W,"transform-origin",`${h(a)[0]/4} 0`),z(P,"transform",h(r))}),M(J,k)}),M(t,V),pe()}function ze(t){const e=t-1;return e*e*e+1}const Vt=t=>t;function Wt(t){const e=t-1;return e*e*e+1}function Ie(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function Yt(t,{delay:e=0,duration:a=400,easing:r=Vt}={}){const n=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:r,css:l=>`opacity: ${l*n}`}}function Kt(t,{delay:e=0,duration:a=400,easing:r=Wt,x:n=0,y:l=0,opacity:i=0}={}){const u=getComputedStyle(t),o=+u.opacity,c=u.transform==="none"?"":u.transform,s=o*(1-i),[_,f]=Ie(n),[v,d]=Ie(l);return{delay:e,duration:a,easing:r,css:(p,y)=>`
			transform: ${c} translate(${(1-p)*_}${f}, ${(1-p)*v}${d});
			opacity: ${o-s*y}`}}var Jt=(t,e)=>{e.onClose()},Qt=()=>{},Ut=j('<div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"><span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span></div>'),Xt=async(t,e)=>{h(e).loading=!0,await de.connect(h(e).device.deviceId),ht("/controller/"+h(e).device.deviceId)},Zt=j('<button class="unstyledButton"><div class="bluetoothDeviceContainer svelte-8m60mu"><div class="bluetoothDevice svelte-8m60mu"><div class="bluetoothIcon svelte-8m60mu"><!></div> <div class="bluetoothDeviceDetails svelte-8m60mu"><h3> </h3> <p class="svelte-8m60mu"> </p></div></div></div></button>'),jt=j('<div class="bluetoothDevicesContainer svelte-8m60mu"></div>'),$t=j('<main><div class="overlay svelte-8m60mu"></div> <div class="modal svelte-8m60mu"><div class="modalContainer svelte-8m60mu"><div class="top"><div class="topInfo svelte-8m60mu"><h1 class="svelte-8m60mu"> </h1> <button class="unstyled-button closeButton svelte-8m60mu"><!></button></div></div> <div class="devicesList flex items-center justify-center m-3"><!></div></div></div></main>');function ea(t,e){me(e,!0);let a=x(e,"bluetoothDevices",7);a(a().filter((l,i,u)=>i===u.findIndex(o=>o.device.deviceId===l.device.deviceId)));var r=Le(),n=oe(r);K(n,()=>e.opened,l=>{var i=$t(),u=C(i);u.__click=[Jt,e],u.__keydown=[Qt],z(u,"aria-hidden",!0);var o=O(u,2),c=C(o),s=C(c),_=C(s),f=C(_),v=C(f,!0);w(f);var d=O(f,2);d.__click=function(...g){var E;(E=e.onClose)==null||E.apply(this,g)};var p=C(d);ie(p,{icon:St,rotate:"45",size:"1.8x"}),w(d),w(_),w(s);var y=O(s,2),m=C(y);K(m,()=>a().length<=0,g=>{var E=Ut();M(g,E)},g=>{var E=jt();Ct(E,21,()=>a().filter(A=>!!A.device.name).sort((A,b)=>(b.rssi||0)-(A.rssi||0)),xt,(A,b)=>{var L=Zt();L.__click=[Xt,b];var N=C(L),I=C(N),T=C(I),V=C(T);K(V,()=>h(b).loading,P=>{ie(P,{icon:Ot,pulse:!0})},P=>{ie(P,{icon:Bt,size:"1.25x"})}),w(T);var $=O(T,2),J=C($),k=C(J,!0);w(J);var Q=O(J,2),W=C(Q,!0);w(Q),w($),w(I),w(N),w(L),Y(()=>{se(k,h(b).device.name),se(W,h(b).device.deviceId)}),M(A,L)}),w(E),M(g,E)}),w(y),w(c),w(o),w(i),Y(()=>se(v,e.title)),Ee(3,u,()=>Yt,()=>({duration:200,easing:ze})),Ee(3,o,()=>Kt,()=>({duration:250,y:200,easing:ze})),M(l,i)}),M(t,r),pe()}Se(["click","keydown"]);var ta=(t,e,a)=>{e.opened=!0,a()},aa=j('<!> <main class="svelte-j8au8c"><button class="unstyled-button add-device-button svelte-j8au8c"><h1 class="svelte-j8au8c">Add Device</h1> <!></button></main>',1);function _a(t,e){me(e,!0);let a=te({opened:!1,title:"Add Device",onClose:()=>{a.opened=!1}}),r=dt(te([]));const n=async()=>{Z(r,te([])),await de.requestLEScan({},s=>{console.log(s.device.deviceId),h(r).some(_=>_.device.deviceId===s.device.deviceId)||Z(r,te([...h(r),{...s,loading:!1}]))})};mt(async()=>{Ft.lock({orientation:"portrait"}),de.initialize()});var l=aa(),i=oe(l);ea(i,{get opened(){return a.opened},get onClose(){return a.onClose},title:"Add Device",get bluetoothDevices(){return h(r)}});var u=O(i,2),o=C(u);o.__click=[ta,a,n];var c=O(C(o),2);ie(c,{icon:Mt,size:"1.3x"}),w(o),w(u),M(t,l),pe()}Se(["click"]);export{_a as component};
