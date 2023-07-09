/*! For license information please see 747.main.js.LICENSE.txt */
(self.webpackChunkvoyage_vault=self.webpackChunkvoyage_vault||[]).push([[747],{170:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(294),o=n(655);const i=function(t){return t.href?r.createElement("a",{className:"text-white p-3 rounded border-1 bg-purple hover:bg-hoverPurple ".concat(t.inverse&&"bg-purple"," ").concat(t.danger&&"border-rose-500"," ").concat(t.disabled&&"disabled:opacity-75 cursor-not-allowed"),href:t.href},t.children):t.to?r.createElement(o.rU,{to:t.to,className:"\n        ".concat(t.className," text-white p-3 rounded border-1 bg-purple hover:bg-hoverPurple ").concat(t.inverse&&"bg-purple"," ").concat(t.danger&&"border-rose-500"," ").concat(t.disabled&&"disabled:opacity-75 cursor-not-allowed")},t.children):r.createElement("button",{className:"".concat(t.className," text-white p-3 rounded border-1 bg-purple hover:bg-hoverPurple ").concat(t.inverse&&"bg-purple"," ").concat(t.danger&&"border-rose-500"," ").concat(t.disabled&&"disabled:opacity-75 cursor-not-allowed"),type:t.type,onClick:t.onClick,disabled:t.disabled},t.children)}},747:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>G});var r=n(294),o=n(152),i=n(366),c=n(184),a=n.n(c);const s=function(t){var e=t.itemsLength,n=t.selectedIndex,o=new Array(e).fill(0);return r.createElement("div",{className:"carousel__dots flex gap-2 my-2 justify-center -translate-y-5 mx-auto inset-x-0 bottom-6 absolute"},o.map((function(t,e){var o=e===n;return r.createElement("div",{className:a()({"h-4 w-4 rounded-full transition-all duration-300 bg-white":!0,"opacity-25":!o}),key:e})})))},u=function(t){return r.createElement("div",{className:"carousel__controls absolute top-1/2 flex w-full justify-between"},r.createElement("button",{onClick:function(){t.canScrollPrev&&t.onPrev()},disabled:!t.canScrollPrev,className:a()({"px-4 py-2 text-white rounded-md":!0,"bg-transparent":!0,"opacity-25":!t.canScrollPrev,"opacity-100":t.canScrollPrev,"mx-4":!0})},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"w-12 h-12 text-white",viewBox:"0 0 16 16"},r.createElement("path",{d:"m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"}))),r.createElement("button",{onClick:function(){t.canScrollNext&&t.onNext()},disabled:!t.canScrollNext,className:a()({"px-4 py-2 text-white rounded-md":!0,"bg-transparent":!0,"opacity-25":!t.canScrollNext,"opacity-100":t.canScrollNext,"mx-4":!0})},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"w-12 h-12 text-white",viewBox:"0 0 16 16"},r.createElement("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"}))))};function l(t){return function(t){return"[object Object]"===Object.prototype.toString.call(t)}(t)||Array.isArray(t)}function d(t,e){const n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&(JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(e.breakpoints||{}))&&n.every((n=>{const r=t[n],o=e[n];return"function"==typeof r?`${r}`==`${o}`:l(r)&&l(o)?d(r,o):r===o})))}function f(t){return t.concat().sort(((t,e)=>t.name>e.name?1:-1)).map((t=>t.options))}function p(t){return"number"==typeof t}function m(t){return"string"==typeof t}function g(t){return"boolean"==typeof t}function h(t){return"[object Object]"===Object.prototype.toString.call(t)}function v(t){return Math.abs(t)}function x(t){return Math.sign(t)}function y(t,e){return v(t-e)}function b(t){return E(t).map(Number)}function w(t){return t[S(t)]}function S(t){return Math.max(0,t.length-1)}function E(t){return Object.keys(t)}function N(t,e){return[t,e].reduce(((t,e)=>(E(e).forEach((n=>{const r=t[n],o=e[n],i=h(r)&&h(o);t[n]=i?N(r,o):o})),t)),{})}function O(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function k(t,e){const n=v(t-e);function r(e){return e<t}function o(t){return t>e}function i(t){return r(t)||o(t)}return{length:n,max:e,min:t,constrain:function(n){return i(n)?r(n)?t:e:n},reachedAny:i,reachedMax:o,reachedMin:r,removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function P(t,e,n){const{constrain:r}=k(0,t),o=t+1;let i=c(e);function c(t){return n?v((o+t)%o):r(t)}function a(){return i}function s(){return P(t,a(),n)}const u={get:a,set:function(t){return i=c(t),u},add:function(t){return s().set(a()+t)},clone:s};return u}function D(){let t=[];const e={add:function(n,r,o,i={passive:!0}){return n.addEventListener(r,o,i),t.push((()=>n.removeEventListener(r,o,i))),e},clear:function(){t=t.filter((t=>t()))}};return e}function j(t,e,n,r,o,i,c,a,s,u,l,d,f,p,m,h,b,w,S){const{cross:E}=t,N=["INPUT","SELECT","TEXTAREA"],P={passive:!1},j=D(),A=D(),I=k(50,225).constrain(m.measure(20)),L={mouse:300,touch:400},M={mouse:500,touch:600},T=h?43:25;let z=!1,C=0,B=0,F=!1,H=!1,R=!1,V=!1;function _(t){const n=c.readPoint(t),r=c.readPoint(t,E),o=y(n,C),a=y(r,B);if(!H&&!V){if(!t.cancelable)return q(t);if(H=o>a,!H)return q(t)}const u=c.pointerMove(t),d=e.apply(u);o>b&&(R=!0),l.useFriction(.3).useDuration(1),d&&l.useDirection(d),s.start(),i.add(d),t.preventDefault()}function q(t){const n=d.byDistance(0,!1).index!==f.get(),r=c.pointerUp(t)*(h?M:L)[V?"mouse":"touch"],o=function(t,e){const n=f.add(-1*x(t)),r=d.byDistance(t,!h).distance;return h||v(t)<I?r:w&&e?.5*r:d.byIndex(n.get(),0).distance}(e.apply(r),n),i=function(t,e){if(0===t||0===e)return 0;if(v(t)<=v(e))return 0;const n=y(v(t),v(e));return v(n/t)}(r,o),a=T-10*i,s=S+i/50;H=!1,F=!1,A.clear(),l.useDuration(a).useFriction(s),u.distance(o,!h),V=!1,p.emit("pointerUp")}function U(t){R&&(t.stopPropagation(),t.preventDefault())}return{init:function(t,e){if(!e)return;function s(s){(g(e)||e(t,s))&&function(t){const e=O(t,o);V=e,e&&0!==t.button||function(t){const e=t.nodeName||"";return N.includes(e)}(t.target)||(R=h&&e&&!t.buttons&&z,z=y(i.get(),a.get())>=2,F=!0,c.pointerDown(t),l.useFriction(0).useDuration(0),i.set(a),function(){const t=V?r:n;A.add(t,"touchmove",_,P).add(t,"touchend",q).add(t,"mousemove",_,P).add(t,"mouseup",q)}(),C=c.readPoint(t),B=c.readPoint(t,E),p.emit("pointerDown"))}(s)}const u=n;j.add(u,"dragstart",(t=>t.preventDefault()),P).add(u,"touchmove",(()=>{}),P).add(u,"touchend",(()=>{})).add(u,"touchstart",s).add(u,"mousedown",s).add(u,"touchcancel",q).add(u,"contextmenu",q).add(u,"click",U,!0)},pointerDown:function(){return F},destroy:function(){j.clear(),A.clear()}}}function A(t,e){let n,r;function o(t){return t.timeStamp}function i(n,r){const o="client"+("x"===(r||t.scroll)?"X":"Y");return(O(n,e)?n:n.touches[0])[o]}return{pointerDown:function(t){return n=t,r=t,i(t)},pointerMove:function(t){const e=i(t)-i(r),c=o(t)-o(n)>170;return r=t,c&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;const e=i(r)-i(n),c=o(t)-o(n),a=o(t)-o(r)>170,s=e/c;return c&&!a&&v(s)>.1?s:0},readPoint:i}}function I(t,e,n,r,o){let i,c,a=[],s=!1;function u(t){return o.measureSize(t.getBoundingClientRect())}return{init:function(o,l){l&&(c=u(t),a=r.map(u),i=new ResizeObserver((i=>{s||(g(l)||l(o,i))&&function(i){for(const s of i){const i=s.target===t,l=r.indexOf(s.target);if((i?c:a[l])!==u(i?t:r[l])){n.requestAnimationFrame((()=>{o.reInit(),e.emit("resize")}));break}}}(i)})),[t].concat(r).forEach((t=>i.observe(t))))},destroy:function(){i&&i.disconnect(),s=!0}}}function L(t,e,n,r,o){const i=o.measure(10),c=o.measure(50),a=k(.1,.99);let s=!1;return{constrain:function(o){if(s||!t.reachedAny(n.get())||!t.reachedAny(e.get()))return;const u=t.reachedMin(e.get())?"min":"max",l=v(t[u]-e.get()),d=n.get()-e.get(),f=a.constrain(l/c);n.subtract(d*f),!o&&v(d)<i&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){s=!t}}}function M(t,e,n,r){const o=e.min+.1,i=e.max+.1,{reachedMin:c,reachedMax:a}=k(o,i);return{loop:function(e){if(!function(t){return 1===t?a(n.get()):-1===t&&c(n.get())}(e))return;const o=t*(-1*e);r.forEach((t=>t.add(o)))}}}function T(t){const{max:e,length:n}=t;return{get:function(t){return(t-e)/-n}}}function z(t){let e=t;function n(t){return p(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function C(t,e,n){const r="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},o=n.style;let i=!1;return{clear:function(){i||(o.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(t){i||(o.transform=r(e.apply(t)))},toggleActive:function(t){i=!t}}}function B(t,e,n,r,o,i,c,a,s){const u=b(o),l=b(o).reverse(),d=function(){const t=i[0]-1;return m(p(l,t),"end")}().concat(function(){const t=n-i[0]-1;return m(p(u,t),"start")}());function f(t,e){return t.reduce(((t,e)=>t-o[e]),e)}function p(t,e){return t.reduce(((t,n)=>f(t,e)>0?t.concat([n]):t),[])}function m(n,o){const i="start"===o,u=i?-r:r,l=c.findSlideBounds([u]);return n.map((n=>{const o=i?0:-r,c=i?r:0,u=l.filter((t=>t.index===n))[0][i?"end":"start"];return{index:n,slideLocation:z(-1),translate:C(t,e,s[n]),target:()=>a.get()>u?o:c}}))}return{canLoop:function(){return d.every((({index:t})=>f(u.filter((e=>e!==t)),n)<=.1))},clear:function(){d.forEach((t=>t.translate.clear()))},loop:function(){d.forEach((t=>{const{target:e,translate:n,slideLocation:r}=t,o=e();o!==r.get()&&(n.to(o),r.set(o))}))},loopPoints:d}}function F(t,e){let n,r=!1;return{init:function(o,i){i&&(n=new MutationObserver((t=>{r||(g(i)||i(o,t))&&function(t){for(const n of t)if("childList"===n.type){o.reInit(),e.emit("slidesChanged");break}}(t)})),n.observe(t,{childList:!0}))},destroy:function(){n&&n.disconnect(),r=!0}}}function H(t,e,n,r,o,i,c,a){const{align:s,axis:u,direction:l,startIndex:d,inViewThreshold:f,loop:m,duration:g,dragFree:h,dragThreshold:y,slidesToScroll:E,skipSnaps:N,containScroll:O}=i,H=e.getBoundingClientRect(),R=n.map((t=>t.getBoundingClientRect())),V=function(t){const e="rtl"===t?-1:1;return{apply:function(t){return t*e}}}(l),_=function(t,e){const n="y"===t?"y":"x";return{scroll:n,cross:"y"===t?"x":"y",startEdge:"y"===n?"top":"rtl"===e?"right":"left",endEdge:"y"===n?"bottom":"rtl"===e?"left":"right",measureSize:function(t){const{width:e,height:r}=t;return"x"===n?e:r}}}(u,l),q=_.measureSize(H),U=function(t){return{measure:function(e){return t*(e/100)}}}(q),Z=function(t,e){const n={start:function(){return 0},center:function(t){return r(t)/2},end:r};function r(t){return e-t}return{measure:function(r){return p(t)?e*Number(t):n[t](r)}}}(s,q),$=!m&&!!O,G=m||!!O,{slideSizes:W,slideSizesWithGaps:J}=function(t,e,n,r,o,i){const{measureSize:c,startEdge:a,endEdge:s}=t,u=n[0]&&o,l=function(){if(!u)return 0;const t=n[0];return v(e[a]-t[a])}(),d=function(){if(!u)return 0;const t=i.getComputedStyle(w(r));return parseFloat(t.getPropertyValue(`margin-${s}`))}(),f=n.map(c),p=n.map(((t,e,n)=>{const r=!e,o=e===S(n);return r?f[e]+l:o?f[e]+d:n[e+1][a]-t[a]})).map(v);return{slideSizes:f,slideSizesWithGaps:p}}(_,H,R,n,G,o),Q=function(t,e,n){const r=p(n);return{groupSlides:function(o){return r?function(t,e){return b(t).filter((t=>t%e==0)).map((n=>t.slice(n,n+e)))}(o,n):function(n){return b(n).reduce(((n,r)=>{const o=e.slice(w(n),r+1).reduce(((t,e)=>t+e),0);return!r||o>t?n.concat(r):n}),[]).map(((t,e,r)=>n.slice(t,r[e+1])))}(o)}}}(q,J,E),{snaps:X,snapsAligned:K}=function(t,e,n,r,o,i,c){const{startEdge:a,endEdge:s}=t,{groupSlides:u}=i,l=u(r).map((t=>w(t)[s]-t[0][a])).map(v).map(e.measure),d=r.map((t=>n[a]-t[a])).map((t=>-v(t))),f=function(){const t=w(d)-w(o);return u(d).map((t=>t[0])).map(((e,n,r)=>{const o=!n,i=n===S(r);return c&&o?0:c&&i?t:e+l[n]}))}();return{snaps:d,snapsAligned:f}}(_,Z,H,R,J,Q,$),Y=-w(X)+w(J),{snapsContained:tt}=function(t,e,n,r){const o=k(-e+t,n[0]),i=n.map(o.constrain).map((t=>parseFloat(t.toFixed(3))));return{snapsContained:function(){if(e<=t)return[o.max];if("keepSnaps"===r)return i;const{min:n,max:c}=function(){const t=i[0],e=w(i);return k(i.lastIndexOf(t),i.indexOf(e)+1)}();return i.slice(n,c)}()}}(q,Y,K,O),et=$?tt:K,{limit:nt}=function(t,e,n){const r=e[0];return{limit:k(n?r-t:w(e),r)}}(Y,et,m),rt=P(S(et),d,m),ot=rt.clone(),it=b(n),ct={start:()=>a.start(mt),stop:()=>a.stop(mt),update:()=>(({dragHandler:t,scrollBody:e,scrollBounds:n,scrollLooper:r,eventHandler:o,animation:i,slideLooper:c,translate:a,options:{loop:s}})=>{const u=t.pointerDown();s||n.constrain(u);const l=e.seek().settled();l&&!u&&(i.stop(),o.emit("settle")),l||o.emit("scroll"),s&&(r.loop(e.direction()),c.loop()),a.to(st.get())})(mt)},at=et[rt.get()],st=z(at),ut=z(at),lt=function(t,e,n,r){let o=!0,i=0,c=0,a=n,s=.68;function u(t){return a=t,d}function l(t){return s=t,d}const d={direction:function(){return c},duration:function(){return a},seek:function(){const n=e.get()-t.get();return a?(i+=n/a,i*=s,t.add(i)):(i=0,t.set(e)),o=v(n)<.001,d},settled:function(){return o},useBaseFriction:function(){return l(.68)},useBaseDuration:function(){return u(n)},useDirection:function(t){return c=x(t),d},useFriction:l,useDuration:u};return d}(st,ut,g),dt=function(t,e,n,r,o){const{reachedAny:i,removeOffset:c,constrain:a}=r;function s(t){return t.concat().sort(((t,e)=>v(t)-v(e)))[0]}function u(e,r){const o=[e,e+n,e-n];return t?s(r?o.filter((t=>x(t)===r)):o):o[0]}return{byDistance:function(n,r){const s=o.get()+n,{index:l,distance:d}=function(n){const r=t?c(n):a(n),o=e.map((t=>t-r)).map((t=>u(t,0))).map(((t,e)=>({diff:t,index:e}))).sort(((t,e)=>v(t.diff)-v(e.diff))),{index:i}=o[0];return{index:i,distance:r}}(s),f=!t&&i(s);return!r||f?{index:l,distance:n}:{index:l,distance:n+u(e[l]-d,0)}},byIndex:function(t,n){return{index:t,distance:u(e[t]-o.get(),n)}},shortcut:u}}(m,et,Y,nt,ut),ft=function(t,e,n,r,o,i,c){function a(r){const a=r.distance,s=r.index!==e.get();o.useDirection(a),i.add(a),a&&t.start(),s&&(n.set(e.get()),e.set(r.index),c.emit("select"))}return{distance:function(t,e){a(r.byDistance(t,e))},index:function(t,n){const o=e.clone().set(t);a(r.byIndex(o.get(),n))}}}(ct,rt,ot,dt,lt,ut,c),pt=function(t,e,n,r,o,i,c){const{removeOffset:a,constrain:s}=o,u=i?[0,e,-e]:[0],l=d(u,c);function d(e,o){const i=e||u,c=function(t){const e=t||0;return n.map((t=>k(.5,t-.5).constrain(t*e)))}(o);return i.reduce(((e,o)=>{const i=r.map(((e,r)=>({start:e-n[r]+c[r]+o,end:e+t-c[r]+o,index:r})));return e.concat(i)}),[])}return{check:function(t,e){const n=i?a(t):s(t);return(e||l).reduce(((t,e)=>{const{index:r,start:o,end:i}=e;return!t.includes(r)&&o<n&&i>n?t.concat([r]):t}),[])},findSlideBounds:d}}(q,Y,W,X,nt,m,f),mt={ownerDocument:r,ownerWindow:o,eventHandler:c,containerRect:H,slideRects:R,animation:ct,axis:_,direction:V,dragHandler:j(_,V,t,r,o,ut,A(_,o),st,ct,ft,lt,dt,rt,c,U,h,y,N,.68),eventStore:D(),percentOfView:U,index:rt,indexPrevious:ot,limit:nt,location:st,options:i,resizeHandler:I(e,c,o,n,_),scrollBody:lt,scrollBounds:L(nt,st,ut,lt,U),scrollLooper:M(Y,nt,st,[st,ut]),scrollProgress:T(nt),scrollSnaps:et,scrollTarget:dt,scrollTo:ft,slideLooper:B(_,V,q,Y,J,et,pt,st,n),slidesHandler:F(e,c),slidesInView:pt,slideIndexes:it,slidesToScroll:Q,target:ut,translate:C(_,V,e)};return mt}const R={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,dragThreshold:10,inViewThreshold:0,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function V(t){function e(t,e){return N(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){const r=n.breakpoints||{},o=E(r).filter((e=>t.matchMedia(e).matches)).map((t=>r[t])).reduce(((t,n)=>e(t,n)),{});return e(n,o)},optionsMediaQueries:function(e){return e.map((t=>E(t.breakpoints||{}))).reduce(((t,e)=>t.concat(e)),[]).map(t.matchMedia)}}}function _(t,e,n){const r=t.ownerDocument,o=r.defaultView,i=V(o),c=function(t){let e=[];return{init:function(n,r){return e=n.filter((({options:e})=>!1!==t.optionsAtMedia(e).active)),e.forEach((e=>e.init(r,t))),n.reduce(((t,e)=>Object.assign(t,{[e.name]:e})),{})},destroy:function(){e=e.filter((t=>t.destroy()))}}}(i),a=D(),s=D(),u=function(){const t={};let e;function n(e){return t[e]||[]}const r={init:function(t){e=t},emit:function(t){return n(t).forEach((n=>n(e,t))),r},off:function(e,o){return t[e]=n(e).filter((t=>t!==o)),r},on:function(e,o){return t[e]=n(e).concat([o]),r}};return r}(),{animationRealms:l}=_,{mergeOptions:d,optionsAtMedia:f,optionsMediaQueries:p}=i,{on:g,off:h,emit:v}=u,x=A;let y,b,w,S,E=!1,N=d(R,_.globalOptions),O=d(N),k=[];function P(e,n){const i=H(t,w,S,r,o,e,u,n);return e.loop&&!i.slideLooper.canLoop()?P(Object.assign({},e,{loop:!1}),n):i}function j(e,n){if(E)return;const i=l.find((t=>t.window===o)),u=i||function(t){const e=1e3/60;let n=[],r=null,o=0,i=0;function c(a){r||(r=a);const s=a-r;for(r=a,o+=s;o>=e;)n.forEach((({animation:t})=>t.update())),o-=e;i&&t.requestAnimationFrame(c)}return{start:function(e){n.includes(e)||n.push(e),i||(i=t.requestAnimationFrame(c))},stop:function(e){n=n.filter((t=>t!==e)),n.length||(t.cancelAnimationFrame(i),r=null,o=0,i=0)},reset:function(){r=null,o=0},window:t}}(o);i||l.push(u),N=d(N,e),O=f(N),k=n||k,function(){const{container:e,slides:n}=O,r=m(e)?t.querySelector(e):e;w=r||t.children[0];const o=m(n)?w.querySelectorAll(n):n;S=[].slice.call(o||w.children)}(),y=P(O,u),p([N,...k.map((({options:t})=>t))]).forEach((t=>a.add(t,"change",A))),O.active&&(y.translate.to(y.location.get()),y.eventHandler.init(z),y.resizeHandler.init(z,O.watchResize),y.slidesHandler.init(z,O.watchSlides),s.add(r,"visibilitychange",(()=>{r.hidden&&u.reset()})),y.options.loop&&y.slideLooper.loop(),w.offsetParent&&S.length&&y.dragHandler.init(z,O.watchDrag),b=c.init(k,z))}function A(t,e){const n=T();I(),j(d({startIndex:n},t),e),u.emit("reInit")}function I(){y.dragHandler.destroy(),y.animation.stop(),y.eventStore.clear(),y.translate.clear(),y.slideLooper.clear(),y.resizeHandler.destroy(),y.slidesHandler.destroy(),c.destroy(),a.clear(),s.clear()}function L(t){const e=y[t?"target":"location"].get(),n=O.loop?"removeOffset":"constrain";return y.slidesInView.check(y.limit[n](e))}function M(t,e,n){O.active&&!E&&(y.scrollBody.useBaseFriction().useDuration(e?0:O.duration),y.scrollTo.index(t,n||0))}function T(){return y.index.get()}const z={canScrollNext:function(){return y.index.add(1).get()!==T()},canScrollPrev:function(){return y.index.add(-1).get()!==T()},containerNode:function(){return w},internalEngine:function(){return y},destroy:function(){E||(E=!0,a.clear(),I(),u.emit("destroy"))},off:h,on:g,emit:v,plugins:function(){return b},previousScrollSnap:function(){return y.indexPrevious.get()},reInit:x,rootNode:function(){return t},scrollNext:function(t){M(y.index.add(1).get(),!0===t,-1)},scrollPrev:function(t){M(y.index.add(-1).get(),!0===t,1)},scrollProgress:function(){return y.scrollProgress.get(y.location.get())},scrollSnapList:function(){return y.scrollSnaps.map(y.scrollProgress.get)},scrollTo:M,selectedScrollSnap:T,slideNodes:function(){return S},slidesInView:L,slidesNotInView:function(t){const e=L(t);return y.slideIndexes.filter((t=>!e.includes(t)))}};return j(e,n),setTimeout((()=>u.emit("init")),0),z}function q(t={},e=[]){const n=(0,r.useRef)(t),o=(0,r.useRef)(e),[i,c]=(0,r.useState)(),[a,s]=(0,r.useState)(),u=(0,r.useCallback)((()=>{i&&i.reInit(n.current,o.current)}),[i]);return(0,r.useEffect)((()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&a){_.globalOptions=q.globalOptions;const t=_(a,n.current,o.current);return c(t),()=>t.destroy()}c(void 0)}),[a,c]),(0,r.useEffect)((()=>{d(n.current,t)||(n.current=t,u())}),[t,u]),(0,r.useEffect)((()=>{(function(t,e){if(t.length!==e.length)return!1;const n=f(t),r=f(e);return n.every(((t,e)=>d(t,r[e])))})(o.current,e)||(o.current=e,u())}),[e,u]),[s,i]}_.animationRealms=[],_.globalOptions=void 0,q.globalOptions=void 0;var U=["children"];const Z=function(t){var e=t.children,n=q(function(t,e){if(null==t)return{};var n,r,o=(0,i.Z)(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,U)),c=(0,o.Z)(n,2),a=c[0],l=c[1],d=(0,r.useState)(0),f=(0,o.Z)(d,2),p=f[0],m=f[1];(0,r.useEffect)((function(){function t(){var t=null==l?void 0:l.selectedScrollSnap();m(t||0)}return null==l||l.on("select",t),function(){null==l||l.off("select",t)}}),[l]);var g=r.Children.count(e),h=!(null==l||!l.canScrollNext()),v=!(null==l||!l.canScrollPrev());return r.createElement("div",{className:"overflow-hidden"},r.createElement("div",{className:"overflow-hidden",ref:a},r.createElement("div",{className:"flex"},e)),r.createElement(s,{itemsLength:g,selectedIndex:p}),r.createElement(u,{canScrollNext:h,canScrollPrev:v,onNext:function(){return null==l?void 0:l.scrollNext()},onPrev:function(){return null==l?void 0:l.scrollPrev()}}))};var $=n(170);const G=function(){return r.createElement("div",{className:"w-full relative"},r.createElement(Z,{loop:!0},[{imageSrc:"/carousel/home.jpg",title:"Keep Track of all places you'll visit in that trip",ctaText:"Get Started",ctaLink:"/auth"},{imageSrc:"/carousel/home-2.jpg",title:"View all places in a map add the info you'll need",ctaText:"Get Started",ctaLink:"/auth"}].map((function(t,e){return r.createElement("div",{className:"relative h-full flex-[0_0_100%] overflow-hidden",key:e},r.createElement("div",{className:"carousel__container",style:{maxHeight:"calc(100vh - 128px)"}},r.createElement("div",{style:{animation:"zoom-in-out 30s infinite"}},r.createElement("img",{src:t.imageSrc,className:"object-cover",alt:"alt"})),r.createElement("div",{className:"carousel__info h-fit max-w-screen-lg absolute inset-x-0 inset-y-0 mx-auto my-auto flex flex-wrap items-center justify-center uppercase"},r.createElement("h2",{className:"w-full text-center text-white text-8xl font-display leading-none drop-shadow-lg"},t.title),r.createElement($.Z,{to:t.ctaLink,className:"text-lg mt-4"},t.ctaText))))}))))}},184:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&t.push(c)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&t.push(a)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()}}]);