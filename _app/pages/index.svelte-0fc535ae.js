var ee=Object.defineProperty;var P=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var G=(a,e,t)=>e in a?ee(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,W=(a,e)=>{for(var t in e||(e={}))te.call(e,t)&&G(a,t,e[t]);if(P)for(var t of P(e))se.call(e,t)&&G(a,t,e[t]);return a};import{S as z,i as S,s as J,e as p,t as A,k,c as d,a as g,h as N,d as _,m as I,b as f,g as j,H as u,j as Z,L as O,w as x,x as D,y as C,q as b,o as y,B as F,n as le,p as ne,M as ae,N as re,O as oe,P as ie,F as ce,I as ue,J as fe,K as me,r as he,v as _e,D as pe,Q as de}from"../chunks/vendor-568058bc.js";function ge(a){let e,t,s,l,o,n,i;return{c(){e=p("li"),t=p("div"),s=p("a"),l=A(a[0]),o=k(),n=p("a"),i=A(a[1]),this.h()},l(r){e=d(r,"LI",{class:!0});var c=g(e);t=d(c,"DIV",{class:!0});var m=g(t);s=d(m,"A",{class:!0,href:!0});var h=g(s);l=N(h,a[0]),h.forEach(_),o=I(m),n=d(m,"A",{class:!0,href:!0});var v=g(n);i=N(v,a[1]),v.forEach(_),m.forEach(_),c.forEach(_),this.h()},h(){f(s,"class","text svelte-1cssops"),f(s,"href",a[1]),f(n,"class","url svelte-1cssops"),f(n,"href",a[1]),f(t,"class","content svelte-1cssops"),f(e,"class","list-item")},m(r,c){j(r,e,c),u(e,t),u(t,s),u(s,l),u(t,o),u(t,n),u(n,i)},p(r,[c]){c&1&&Z(l,r[0]),c&2&&f(s,"href",r[1]),c&2&&Z(i,r[1]),c&2&&f(n,"href",r[1])},i:O,o:O,d(r){r&&_(e)}}}function ve(a,e,t){let{text:s}=e,{url:l}=e;return a.$$set=o=>{"text"in o&&t(0,s=o.text),"url"in o&&t(1,l=o.url)},[s,l]}class $e extends z{constructor(e){super();S(this,e,ve,ge,J,{text:0,url:1})}}function K(a,e,t){const s=a.slice();return s[1]=e[t],s}function Q(a){let e,t;return e=new $e({props:{text:a[1].title,url:a[1].url}}),{c(){x(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,l){C(e,s,l),t=!0},p(s,l){const o={};l&1&&(o.text=s[1].title),l&1&&(o.url=s[1].url),e.$set(o)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){F(e,s)}}}function ke(a){let e,t,s=a[0],l=[];for(let n=0;n<s.length;n+=1)l[n]=Q(K(a,s,n));const o=n=>y(l[n],1,1,()=>{l[n]=null});return{c(){e=p("ol");for(let n=0;n<l.length;n+=1)l[n].c();this.h()},l(n){e=d(n,"OL",{class:!0});var i=g(e);for(let r=0;r<l.length;r+=1)l[r].l(i);i.forEach(_),this.h()},h(){f(e,"class","list svelte-4g57nx")},m(n,i){j(n,e,i);for(let r=0;r<l.length;r+=1)l[r].m(e,null);t=!0},p(n,[i]){if(i&1){s=n[0];let r;for(r=0;r<s.length;r+=1){const c=K(n,s,r);l[r]?(l[r].p(c,i),b(l[r],1)):(l[r]=Q(c),l[r].c(),b(l[r],1),l[r].m(e,null))}for(le(),r=s.length;r<l.length;r+=1)o(r);ne()}},i(n){if(!t){for(let i=0;i<s.length;i+=1)b(l[i]);t=!0}},o(n){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)y(l[i]);t=!1},d(n){n&&_(e),ae(l,n)}}}function Ie(a,e,t){let{links:s}=e;return a.$$set=l=>{"links"in l&&t(0,s=l.links)},[s]}class be extends z{constructor(e){super();S(this,e,Ie,ke,J,{links:0})}}function Ee(a){let e,t,s,l,o,n,i,r,c,m,h,v,w,E,q,L,B,U;return{c(){e=p("form"),t=p("fieldset"),s=p("legend"),l=A("Add a Link"),o=k(),n=p("label"),i=A("Description"),r=k(),c=p("input"),m=k(),h=p("label"),v=A("URL"),w=k(),E=p("input"),q=k(),L=p("input"),this.h()},l(T){e=d(T,"FORM",{class:!0});var M=g(e);t=d(M,"FIELDSET",{class:!0});var $=g(t);s=d($,"LEGEND",{});var R=g(s);l=N(R,"Add a Link"),R.forEach(_),o=I($),n=d($,"LABEL",{for:!0});var V=g(n);i=N(V,"Description"),V.forEach(_),r=I($),c=d($,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),m=I($),h=d($,"LABEL",{for:!0});var H=g(h);v=N(H,"URL"),H.forEach(_),w=I($),E=d($,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),q=I($),L=d($,"INPUT",{class:!0,type:!0}),$.forEach(_),M.forEach(_),this.h()},h(){f(n,"for","title"),f(c,"type","text"),f(c,"name","title"),f(c,"placeholder","Sweet Webpage"),f(c,"class","svelte-1a9qzi"),f(h,"for","url"),f(E,"type","text"),f(E,"name","url"),f(E,"placeholder","www.web.site/so_sweet"),f(E,"class","svelte-1a9qzi"),f(L,"class","submit svelte-1a9qzi"),f(L,"type","submit"),L.value="Add Link",f(t,"class","svelte-1a9qzi"),f(e,"class","svelte-1a9qzi")},m(T,M){j(T,e,M),u(e,t),u(t,s),u(s,l),u(t,o),u(t,n),u(n,i),u(t,r),u(t,c),u(t,m),u(t,h),u(h,v),u(t,w),u(t,E),u(t,q),u(t,L),B||(U=re(e,"submit",oe(a[0])),B=!0)},p:O,i:O,o:O,d(T){T&&_(e),B=!1,U()}}}function ye(a){function e(t){ie.call(this,a,t)}return[e]}class we extends z{constructor(e){super();S(this,e,ye,Ee,J,{})}}const Le={primary:"'Volkorn', serif",control:"sans-serif"},X={light:{name:"light",fonts:W({},Le)}};function Ae(a){let e;const t=a[1].default,s=ce(t,a,a[0],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,o){s&&s.m(l,o),e=!0},p(l,[o]){s&&s.p&&(!e||o&1)&&ue(s,t,l,l[0],e?me(t,l[0],o,null):fe(l[0]),null)},i(l){e||(b(s,l),e=!0)},o(l){y(s,l),e=!1},d(l){s&&s.d(l)}}}function Ne(a,e,t){let{$$slots:s={},$$scope:l}=e;const o=i=>{for(const[r,c]of Object.entries(i.fonts)){const m=`--font-${r}`;document.documentElement.style.setProperty(m,c)}document.documentElement.style.setProperty("--theme-name",i.name)},n=pe(X.light);return he("theme",{theme:n}),_e(()=>o(X.light)),a.$$set=i=>{"$$scope"in i&&t(0,l=i.$$scope)},[l,s]}class Te extends z{constructor(e){super();S(this,e,Ne,Ae,J,{})}}const Oe="https://zcjuyfzymkcuduzhkzrf.supabase.co",ze="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjanV5Znp5bWtjdWR1emhrenJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcwOTI5NTQsImV4cCI6MTk2MjY2ODk1NH0.7pJUI_ybvgSjHMVSLeTKArHcBeTdcE9OJHEGOw9xMqk",Y=de(Oe,ze),Se=async a=>{const{data:e,error:t}=await a.from("links").select("*");if(t)throw t;return e},Je=async(a,e)=>{const{error:t}=await a.from("links").insert(e);if(t)throw t};function Me(a){let e,t,s,l,o,n,i,r,c;return n=new be({props:{links:a[0]}}),r=new we({}),r.$on("submit",a[1]),{c(){e=p("main"),t=p("h1"),s=A("TEGAN AMIANI WEBSITE"),l=k(),o=p("div"),x(n.$$.fragment),i=k(),x(r.$$.fragment),this.h()},l(m){e=d(m,"MAIN",{class:!0});var h=g(e);t=d(h,"H1",{});var v=g(t);s=N(v,"TEGAN AMIANI WEBSITE"),v.forEach(_),l=I(h),o=d(h,"DIV",{class:!0});var w=g(o);D(n.$$.fragment,w),w.forEach(_),i=I(h),D(r.$$.fragment,h),h.forEach(_),this.h()},h(){f(o,"class","links svelte-ft8p0p"),f(e,"class","svelte-ft8p0p")},m(m,h){j(m,e,h),u(e,t),u(t,s),u(e,l),u(e,o),C(n,o,null),u(e,i),C(r,e,null),c=!0},p(m,h){const v={};h&1&&(v.links=m[0]),n.$set(v)},i(m){c||(b(n.$$.fragment,m),b(r.$$.fragment,m),c=!0)},o(m){y(n.$$.fragment,m),y(r.$$.fragment,m),c=!1},d(m){m&&_(e),F(n),F(r)}}}function xe(a){let e,t;return e=new Te({props:{$$slots:{default:[Me]},$$scope:{ctx:a}}}),{c(){x(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,l){C(e,s,l),t=!0},p(s,[l]){const o={};l&5&&(o.$$scope={dirty:l,ctx:s}),e.$set(o)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){y(e.$$.fragment,s),t=!1},d(s){F(e,s)}}}function De(a,e,t){let{links:s}=e;const l=async o=>{const n=new FormData(o.target),i={title:n.get("title").valueOf(),url:n.get("url").valueOf()};await Je(Y,i),t(0,s=await Se(Y))};return a.$$set=o=>{"links"in o&&t(0,s=o.links)},[s,l]}class je extends z{constructor(e){super();S(this,e,De,xe,J,{links:0})}}export{je as default};
