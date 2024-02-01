import{s as q,n as H,d as S}from"../chunks/scheduler.f7cad496.js";import{S as F,i as G,s as $,g as m,r as E,x as U,f as a,c as v,h,y as C,j as A,u as M,k as u,a as i,z as L,v as P,d as T,t as z,w as B}from"../chunks/index.9f4e2312.js";import{C as D}from"../chunks/Card.240516b8.js";import{b as I}from"../chunks/paths.06a43173.js";const Y=""+new URL("../assets/pixeldrop.1c8b7f74.png",import.meta.url).href,O=""+new URL("../assets/luck-report.532c29fe.png",import.meta.url).href;function V(b){let t,r="Pixel Drop",l,s,p="By: Ryan Yuan",d,o,f="A simple and elegant purple pixel drop design.";return{c(){t=m("h3"),t.textContent=r,l=$(),s=m("h4"),s.textContent=p,d=$(),o=m("p"),o.textContent=f,this.h()},l(e){t=h(e,"H3",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-dh6s8z"&&(t.textContent=r),l=v(e),s=h(e,"H4",{class:!0,"data-svelte-h":!0}),C(s)!=="svelte-1n6wv9g"&&(s.textContent=p),d=v(e),o=h(e,"P",{"data-svelte-h":!0}),C(o)!=="svelte-1rh0i1l"&&(o.textContent=f),this.h()},h(){u(t,"class","text-2xl font-bold"),u(s,"class","mb-2 font-medium text-stone-400")},m(e,c){i(e,t,c),i(e,l,c),i(e,s,c),i(e,d,c),i(e,o,c)},p:H,d(e){e&&(a(t),a(l),a(s),a(d),a(o))}}}function J(b){let t,r;return{c(){t=m("img"),this.h()},l(l){t=h(l,"IMG",{src:!0,class:!0,slot:!0,alt:!0}),this.h()},h(){S(t.src,r=Y)||u(t,"src",r),u(t,"class","h-32 w-full object-contain bg-[#231124] rounded-md"),u(t,"slot","banner"),u(t,"alt","triple fault pixel drop banner")},m(l,s){i(l,t,s)},p:H,d(l){l&&a(t)}}}function K(b){let t,r="Luck Report",l,s,p="By: Triple Fault",d,o,f="A look into the statistics of matches and team luck.";return{c(){t=m("h3"),t.textContent=r,l=$(),s=m("h4"),s.textContent=p,d=$(),o=m("p"),o.textContent=f,this.h()},l(e){t=h(e,"H3",{class:!0,"data-svelte-h":!0}),C(t)!=="svelte-jhrdgf"&&(t.textContent=r),l=v(e),s=h(e,"H4",{class:!0,"data-svelte-h":!0}),C(s)!=="svelte-kikns9"&&(s.textContent=p),d=v(e),o=h(e,"P",{"data-svelte-h":!0}),C(o)!=="svelte-yhe6a7"&&(o.textContent=f),this.h()},h(){u(t,"class","text-2xl font-bold"),u(s,"class","mb-2 font-medium text-stone-400")},m(e,c){i(e,t,c),i(e,l,c),i(e,s,c),i(e,d,c),i(e,o,c)},p:H,d(e){e&&(a(t),a(l),a(s),a(d),a(o))}}}function N(b){let t,r;return{c(){t=m("img"),this.h()},l(l){t=h(l,"IMG",{src:!0,class:!0,slot:!0,alt:!0}),this.h()},h(){S(t.src,r=O)||u(t,"src",r),u(t,"class","h-32 w-full object-contain bg-[#165738] rounded-md"),u(t,"slot","banner"),u(t,"alt","triple fault luck report banner")},m(l,s){i(l,t,s)},p:H,d(l){l&&a(t)}}}function Q(b){let t,r,l="Resources",s,p,d=`Open source components and guides for you to use.<br/> All work is licenced under
  CC BY-SA 4.0.`,o,f,e,c,R,k,_,y;return c=new D({props:{class:"w-full",$$slots:{banner:[J],default:[V]},$$scope:{ctx:b}}}),_=new D({props:{class:"w-full",$$slots:{banner:[N],default:[K]},$$scope:{ctx:b}}}),{c(){t=$(),r=m("h1"),r.textContent=l,s=$(),p=m("h2"),p.innerHTML=d,o=$(),f=m("div"),e=m("a"),E(c.$$.fragment),R=$(),k=m("a"),E(_.$$.fragment),this.h()},l(n){U("svelte-12nanyi",document.head).forEach(a),t=v(n),r=h(n,"H1",{class:!0,"data-svelte-h":!0}),C(r)!=="svelte-zk97i0"&&(r.textContent=l),s=v(n),p=h(n,"H2",{class:!0,"data-svelte-h":!0}),C(p)!=="svelte-wk1eyl"&&(p.innerHTML=d),o=v(n),f=h(n,"DIV",{class:!0});var g=A(f);e=h(g,"A",{href:!0});var w=A(e);M(c.$$.fragment,w),w.forEach(a),R=v(g),k=h(g,"A",{href:!0});var j=A(k);M(_.$$.fragment,j),j.forEach(a),g.forEach(a),this.h()},h(){document.title="Triple Fault | Resources",u(r,"class","mb-2 text-6xl font-extrabold text-center"),u(p,"class","mb-8 text-center md:text-lg"),u(e,"href",I+"/resources/pixel-drop"),u(k,"href",I+"/resources/luck-report"),u(f,"class","grid grid-cols-1 grid-rows-1 gap-4 m-auto md:grid-cols-2 xl:grid-cols-3")},m(n,x){i(n,t,x),i(n,r,x),i(n,s,x),i(n,p,x),i(n,o,x),i(n,f,x),L(f,e),P(c,e,null),L(f,R),L(f,k),P(_,k,null),y=!0},p(n,[x]){const g={};x&1&&(g.$$scope={dirty:x,ctx:n}),c.$set(g);const w={};x&1&&(w.$$scope={dirty:x,ctx:n}),_.$set(w)},i(n){y||(T(c.$$.fragment,n),T(_.$$.fragment,n),y=!0)},o(n){z(c.$$.fragment,n),z(_.$$.fragment,n),y=!1},d(n){n&&(a(t),a(r),a(s),a(p),a(o),a(f)),B(c),B(_)}}}class et extends F{constructor(t){super(),G(this,t,null,Q,q,{})}}export{et as component};
