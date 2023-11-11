import{s as ut,n as nt,r as ft,c as vt,d as gt,u as _t,g as wt,e as St,o as yt}from"../chunks/scheduler.0624846c.js";import{S as pt,i as mt,g as L,m as Tt,h as M,j as C,n as bt,f as m,a as D,x as g,y as B,o as Et,s as k,r as rt,c as q,z as Lt,A as K,u as lt,k as E,v as at,d as J,t as V,w as ht}from"../chunks/index.acb90e0e.js";import{b as Y}from"../chunks/paths.55ea4574.js";const Mt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,zt=!0,qt=Object.freeze(Object.defineProperty({__proto__:null,prerender:zt},Symbol.toStringTag,{value:"Module"}));function xt(c){let t,e,s,o;return{c(){t=L("span"),e=Tt(c[0])},l(i){t=M(i,"SPAN",{});var n=C(t);e=bt(n,c[0]),n.forEach(m)},m(i,n){D(i,t,n),g(t,e),s||(o=[B(t,"mouseover",c[1]),B(t,"mouseout",c[2])],s=!0)},p(i,[n]){n&1&&Et(e,i[0])},i:nt,o:nt,d(i){i&&m(t),s=!1,ft(o)}}}function At(c,t,e){let s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+[]{}|\\;:'\",.<>?/`~".split(""),{content:o=""}=t,{duration:i=2e3}=t,n=o,r=0,h=!1,l=null;const d=()=>s[Math.floor(Math.random()*s.length)],O=()=>{h=!1,l=null,r=0,e(0,n=o.split("").map(u=>d()).join("")),requestAnimationFrame(f)},f=u=>{l===null&&(l=u);let z=u-l;r/i>=1&&p(),!h&&(r+=z,e(0,n=o.split("").map((_,W)=>Math.random()<r/i||n[W]===_?_:Math.random()<.1?d():n[W]).join("")),l=u,requestAnimationFrame(f))},p=()=>{h=!0,l=null,r=0,e(0,n=o)};return c.$$set=u=>{"content"in u&&e(3,o=u.content),"duration"in u&&e(4,i=u.duration)},[n,O,p,o,i]}class ct extends pt{constructor(t){super(),mt(this,t,At,xt,ut,{content:3,duration:4})}}function Q(){return Q=Object.assign?Object.assign.bind():function(c){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(c[s]=e[s])}return c},Q.apply(this,arguments)}function G(c,t,e){return Math.max(c,Math.min(t,e))}class Rt{advance(t){var e;if(!this.isRunning)return;let s=!1;if(this.lerp)this.value=(o=this.value,i=this.to,(1-(n=1-Math.exp(-60*this.lerp*t)))*o+n*i),Math.round(this.value)===this.to&&(this.value=this.to,s=!0);else{this.currentTime+=t;const r=G(0,this.currentTime/this.duration,1);s=r>=1;const h=s?1:this.easing(r);this.value=this.from+(this.to-this.from)*h}var o,i,n;(e=this.onUpdate)==null||e.call(this,this.value,{completed:s}),s&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:s=.1,duration:o=1,easing:i=r=>r,onUpdate:n}){this.from=this.value=t,this.to=e,this.lerp=s,this.duration=o,this.easing=i,this.currentTime=0,this.isRunning=!0,this.onUpdate=n}}class Ot{constructor({wrapper:t,content:e,autoResize:s=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=t,this.content=e,s){const o=function(i,n){let r;return function(){let h=arguments,l=this;clearTimeout(r),r=setTimeout(function(){i.apply(l,h)},250)}}(this.resize);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(o),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(o),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class dt{constructor(){this.events={}}emit(t,...e){let s=this.events[t]||[];for(let o=0,i=s.length;o<i;o++)s[o](...e)}on(t,e){var s;return(s=this.events[t])!=null&&s.push(e)||(this.events[t]=[e]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(i=>e!==i)}}destroy(){this.events={}}}class Wt{constructor(t,{wheelMultiplier:e=1,touchMultiplier:s=2,normalizeWheel:o=!1}){this.onTouchStart=i=>{const{clientX:n,clientY:r}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=n,this.touchStart.y=r,this.lastDelta={x:0,y:0}},this.onTouchMove=i=>{const{clientX:n,clientY:r}=i.targetTouches?i.targetTouches[0]:i,h=-(n-this.touchStart.x)*this.touchMultiplier,l=-(r-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=n,this.touchStart.y=r,this.lastDelta={x:h,y:l},this.emitter.emit("scroll",{type:"touch",deltaX:h,deltaY:l,event:i})},this.onTouchEnd=i=>{this.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})},this.onWheel=i=>{let{deltaX:n,deltaY:r}=i;this.normalizeWheel&&(n=G(-100,n,100),r=G(-100,r,100)),n*=this.wheelMultiplier,r*=this.wheelMultiplier,this.emitter.emit("scroll",{type:"wheel",deltaX:n,deltaY:r,event:i})},this.element=t,this.wheelMultiplier=e,this.touchMultiplier=s,this.normalizeWheel=o,this.touchStart={x:null,y:null},this.emitter=new dt,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class Ht{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:s=t,smoothWheel:o=!0,smoothTouch:i=!1,syncTouch:n=!1,syncTouchLerp:r=.1,__iosNoInertiaSyncTouchLerp:h=.4,touchInertiaMultiplier:l=35,duration:d,easing:O=v=>Math.min(1,1.001-Math.pow(2,-10*v)),lerp:f=d&&.1,infinite:p=!1,orientation:u="vertical",gestureOrientation:z="vertical",touchMultiplier:_=1,wheelMultiplier:W=1,normalizeWheel:j=!1,autoResize:x=!0}={}){this.onVirtualScroll=({type:v,inertia:N,deltaX:w,deltaY:I,event:H})=>{if(H.ctrlKey)return;const A=v==="touch",R=v==="wheel";if(this.options.gestureOrientation==="vertical"&&I===0||this.options.gestureOrientation==="horizontal"&&w===0||A&&this.options.gestureOrientation==="vertical"&&this.scroll===0&&!this.options.infinite&&I<=0||H.composedPath().find(y=>(y==null||y.hasAttribute==null?void 0:y.hasAttribute("data-lenis-prevent"))||A&&(y==null||y.hasAttribute==null?void 0:y.hasAttribute("data-lenis-prevent-touch"))||R&&(y==null||y.hasAttribute==null?void 0:y.hasAttribute("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked)return void H.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&A||this.options.smoothWheel&&R,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();H.preventDefault();let S=I;this.options.gestureOrientation==="both"?S=Math.abs(I)>Math.abs(w)?I:w:this.options.gestureOrientation==="horizontal"&&(S=w);const P=A&&this.options.syncTouch,X=A&&N&&Math.abs(S)>1;X&&(S=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+S,Q({programmatic:!1},P&&{lerp:X?this.syncTouchLerp:this.options.__iosNoInertiaSyncTouchLerp}))},this.onScroll=()=>{if(!this.isScrolling){const v=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-v),this.emit()}},window.lenisVersion="1.0.19",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:s,smoothWheel:o,smoothTouch:i,syncTouch:n,syncTouchLerp:r,__iosNoInertiaSyncTouchLerp:h,touchInertiaMultiplier:l,duration:d,easing:O,lerp:f,infinite:p,gestureOrientation:z,orientation:u,touchMultiplier:_,wheelMultiplier:W,normalizeWheel:j,autoResize:x},this.dimensions=new Ot({wrapper:t,content:e,autoResize:x}),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=o||i,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new Rt,this.emitter=new dt,this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new Wt(s,{touchMultiplier:_,wheelMultiplier:W,normalizeWheel:j}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.rootElement.classList.remove("lenis"),this.rootElement.classList.remove("lenis-smooth"),this.rootElement.classList.remove("lenis-scrolling"),this.rootElement.classList.remove("lenis-stopped")}on(t,e){return this.emitter.on(t,e)}off(t,e){var s;this.emitter.events[t]=(s=this.emitter.events[t])==null?void 0:s.filter(o=>e!==o)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:s=!1,lock:o=!1,duration:i=this.options.duration,easing:n=this.options.easing,lerp:r=!i&&this.options.lerp,onComplete:h=null,force:l=!1,programmatic:d=!0}={}){if(!this.isStopped||l){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var O;let f;if(typeof t=="string"?f=document.querySelector(t):(O=t)!=null&&O.nodeType&&(f=t),f){if(this.options.wrapper!==window){const u=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?u.left:u.top}const p=f.getBoundingClientRect();t=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?d&&(this.targetScroll=this.animatedScroll=this.scroll):t=G(0,t,this.limit),s)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(h==null||h());if(!d){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:i,easing:n,lerp:r,onUpdate:(f,{completed:p})=>{o&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),d&&(this.targetScroll=f),p&&(o&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,h==null||h()),this.emit()}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}const{document:U}=Mt;function Ct(c){let t,e,s="",o,i,n=`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-KG2ETJKJEL');`,r,h,l,d,O=`<img src="${Y}/logo.svg" class="w-12 h-12 hover:opacity-75" alt="Triple Fault Logo"/>`,f,p,u,z,_,W,j,x,v,N,w,I='<span class="font-bold">NEWS</span><span class="hidden md:inline">: Welcome One Inc!</span>',H,A,R,S,P,X;_=new ct({props:{content:"TEAM"}}),v=new ct({props:{content:"CONTACT"}});const y=c[2].default,T=vt(y,c,c[1],null);return{c(){t=k(),e=L("script"),e.innerHTML=s,i=L("script"),i.textContent=n,r=k(),h=L("header"),l=L("nav"),d=L("a"),d.innerHTML=O,f=k(),p=L("ul"),u=L("li"),z=L("a"),rt(_.$$.fragment),W=k(),j=L("li"),x=L("a"),rt(v.$$.fragment),N=k(),w=L("a"),w.innerHTML=I,A=k(),R=L("main"),T&&T.c(),this.h()},l(a){t=q(a);const b=Lt("svelte-nmywfl",U.head);e=M(b,"SCRIPT",{src:!0,"data-svelte-h":!0}),K(e)!=="svelte-1jumv9w"&&(e.innerHTML=s),i=M(b,"SCRIPT",{"data-svelte-h":!0}),K(i)!=="svelte-89o0ny"&&(i.textContent=n),b.forEach(m),r=q(a),h=M(a,"HEADER",{});var Z=C(h);l=M(Z,"NAV",{id:!0,class:!0});var $=C(l);d=M($,"A",{href:!0,"data-svelte-h":!0}),K(d)!=="svelte-a94qkx"&&(d.innerHTML=O),f=q($),p=M($,"UL",{class:!0});var F=C(p);u=M(F,"LI",{});var tt=C(u);z=M(tt,"A",{href:!0,class:!0});var et=C(z);lt(_.$$.fragment,et),et.forEach(m),tt.forEach(m),W=q(F),j=M(F,"LI",{});var it=C(j);x=M(it,"A",{href:!0,class:!0});var st=C(x);lt(v.$$.fragment,st),st.forEach(m),it.forEach(m),F.forEach(m),N=q($),w=M($,"A",{class:!0,href:!0,"data-svelte-h":!0}),K(w)!=="svelte-1jumavv"&&(w.innerHTML=I),$.forEach(m),Z.forEach(m),A=q(a),R=M(a,"MAIN",{class:!0});var ot=C(R);T&&T.l(ot),ot.forEach(m),this.h()},h(){e.async=!0,gt(e.src,o="https://www.googletagmanager.com/gtag/js?id=G-KG2ETJKJEL")||E(e,"src",o),E(d,"href",Y+"/"),E(z,"href",Y+"/team"),E(z,"class","hover:underline hover:opacity-75"),E(x,"href",Y+"/contact"),E(x,"class","hover:underline hover:opacity-75"),E(p,"class","font-mono"),E(w,"class","ml-auto font-mono text-orange-300 hover:underline hover:opacity-75"),E(w,"href",Y+"/timeline"),E(l,"id","navbar"),E(l,"class",H="transition-all border flex flex-row py-2 px-4 my-3 mx-4 rounded-lg gap-2 fixed h-16 w-[calc(100%-2rem)] items-center z-50 "+(c[0]?"border-stone-800/0":"border-stone-600/75 bg-stone-700/75 backdrop-blur-md")),E(R,"class","pt-24 mx-4")},m(a,b){D(a,t,b),g(U.head,e),g(U.head,i),D(a,r,b),D(a,h,b),g(h,l),g(l,d),g(l,f),g(l,p),g(p,u),g(u,z),at(_,z,null),g(p,W),g(p,j),g(j,x),at(v,x,null),g(l,N),g(l,w),D(a,A,b),D(a,R,b),T&&T.m(R,null),S=!0,P||(X=B(U,"scroll",c[3]),P=!0)},p(a,[b]){(!S||b&1&&H!==(H="transition-all border flex flex-row py-2 px-4 my-3 mx-4 rounded-lg gap-2 fixed h-16 w-[calc(100%-2rem)] items-center z-50 "+(a[0]?"border-stone-800/0":"border-stone-600/75 bg-stone-700/75 backdrop-blur-md")))&&E(l,"class",H),T&&T.p&&(!S||b&2)&&_t(T,y,a,a[1],S?St(y,a[1],b,null):wt(a[1]),null)},i(a){S||(J(_.$$.fragment,a),J(v.$$.fragment,a),J(T,a),S=!0)},o(a){V(_.$$.fragment,a),V(v.$$.fragment,a),V(T,a),S=!1},d(a){a&&(m(t),m(r),m(h),m(A),m(R)),m(e),m(i),ht(_),ht(v),T&&T.d(a),P=!1,X()}}}function jt(c,t,e){let{$$slots:s={},$$scope:o}=t,i=!0;yt(()=>{const r=new Ht;function h(l){r.raf(l),requestAnimationFrame(h)}requestAnimationFrame(h)});const n=()=>e(0,i=document.documentElement.scrollTop===0);return c.$$set=r=>{"$$scope"in r&&e(1,o=r.$$scope)},[i,o,s,n]}class Dt extends pt{constructor(t){super(),mt(this,t,jt,Ct,ut,{})}}export{Dt as component,qt as universal};