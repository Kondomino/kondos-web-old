(()=>{var e={};e.id=4153,e.ids=[4153],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},47736:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var s=r(67096),a=r(16132),l=r(37284),n=r.n(l),i=r(32564),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);r.d(t,o);let c=["",{children:["(search)",{children:["search-2",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,15615)),"C:\\Projetos\\kondos-web\\src\\app\\(search)\\search-2\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,79113)),"C:\\Projetos\\kondos-web\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,25666)),"C:\\Projetos\\kondos-web\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Projetos\\kondos-web\\src\\app\\(search)\\search-2\\page.tsx"],u="/(search)/search-2/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(search)/search-2/page",pathname:"/search-2",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},62098:(e,t,r)=>{Promise.resolve().then(r.bind(r,45497))},45497:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>D});var s=r(53854),a=r(34218),l=r(26893),n=r(56734),i=r(13506),o=r(20999),c=r(2243),d=r(2139),u=r(38192),m=r(59045),x=r(85692),p=r(56628),h=r(18460),g=r(89775),f=r(49282),j=r(78444),b=r(39547),v=r(52805),y=r(39142),w=r(28125);let N=l.oC.filter((e,t)=>t<12),k=i.O.filter((e,t)=>t<15),C=i.O.filter((e,t)=>t<32),P=n.Z.filter((e,t)=>t<12),_=[{name:"Most Recent"},{name:"Curated by Admin"},{name:"Most Appreciated"},{name:"Most Discussed"},{name:"Most Viewed"}],A=["Articles","Categories","Tags","Authors"],D=({})=>{let e="Ui Design",[t,r]=(0,a.useState)(A[0]),l=e=>{e!==t&&r(e)};return(0,s.jsxs)("div",{className:"nc-PageSearchV2",children:[s.jsx("div",{className:"h-24 2xl:h-28 top-0 start-0 right-0 w-full bg-primary-100/50 dark:bg-neutral-900"}),s.jsx("div",{className:"container",children:(0,s.jsxs)("header",{className:"max-w-2xl mx-auto -mt-10 flex flex-col lg:-mt-7",children:[s.jsx("form",{className:"relative",action:"",method:"post",children:(0,s.jsxs)("label",{htmlFor:"search-input",className:"text-neutral-500 dark:text-neutral-300",children:[s.jsx("span",{className:"sr-only",children:"Search all icons"}),s.jsx(x.Z,{id:"search-input",type:"search",placeholder:"Type and press enter",className:"shadow-lg rounded-xl border-opacity-0",sizeClass:"pl-14 py-5 pe-5 md:ps-16",defaultValue:e}),s.jsx("span",{className:"absolute start-5 top-1/2 transform -translate-y-1/2 text-2xl md:start-6",children:s.jsx("svg",{width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"})})})]})}),(0,s.jsxs)("span",{className:"block text-sm mt-4 text-neutral-500 dark:text-neutral-300",children:["We found"," ",s.jsx("strong",{className:"font-semibold text-neutral-800 dark:text-neutral-100",children:"1135"})," ","results articles for"," ",s.jsx("strong",{className:"font-semibold text-neutral-800 dark:text-neutral-100",children:`"${e}"`})]})]})}),(0,s.jsxs)("div",{className:"container py-16 lg:py-28 space-y-16 lg:space-y-28",children:[(0,s.jsxs)("main",{children:[(0,s.jsxs)("div",{className:"flex flex-col sm:items-center sm:justify-between sm:flex-row ",children:[s.jsx(d.Z,{containerClassName:"w-full overflow-x-auto hiddenScrollbar",className:" sm:space-x-2 rtl:space-x-reverse",children:A.map((e,r)=>s.jsx(u.Z,{isActive:t===e,onClick:()=>l(e),children:e},r))}),s.jsx("div",{className:"block my-4 border-b w-full border-neutral-300 dark:border-neutral-500 sm:hidden"}),s.jsx("div",{className:"flex justify-end",children:s.jsx(m.default,{lists:_})})]}),"Articles"===t&&s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 mt-8 lg:mt-10",children:N.map(e=>s.jsx(b.default,{post:e},e.id))}),"Categories"===t&&s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8 mt-8 lg:mt-10",children:k.map(e=>s.jsx(v.Z,{taxonomy:e},e.id))}),"Tags"===t&&s.jsx("div",{className:"flex flex-wrap mt-12 ",children:C.map(e=>s.jsx(y.Z,{className:"mb-3 mr-3",tag:e},e.id))}),"Authors"===t&&s.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8 mt-8 lg:mt-10",children:P.map(e=>s.jsx(w.Z,{author:e},e.id))}),(0,s.jsxs)("div",{className:"flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 rtl:space-x-reverse sm:flex-row sm:justify-between sm:items-center",children:[s.jsx(o.Z,{}),s.jsx(c.default,{children:"Show me more"})]})]}),(0,s.jsxs)("div",{className:"relative py-16",children:[s.jsx(j.Z,{}),s.jsx(f.Z,{categories:i.O.filter((e,t)=>t<10)}),s.jsx("div",{className:"text-center mx-auto mt-10 md:mt-16",children:s.jsx(g.default,{children:"Show me more"})})]}),s.jsx(h.default,{heading:"Top elite authors",subHeading:"Discover our elite writers",authors:n.Z.filter((e,t)=>t<10)}),s.jsx(p.Z,{})]})]})}},39142:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(53854),a=r(75548),l=r.n(a);r(34218);let n=({className:e="",tag:t,hideCount:r=!1})=>(0,s.jsxs)(l(),{className:`nc-Tag inline-block bg-white hover:bg-neutral-50 text-sm text-neutral-600 dark:text-neutral-300 py-2 px-3 rounded-lg md:py-2.5 md:px-4 dark:bg-neutral-900 ${e}`,href:t.href,children:[`${t.name}`,!r&&(0,s.jsxs)("span",{className:"text-xs font-normal",children:[" (",t.count,")"]})]})},15615:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>l,default:()=>o});var s=r(95153);let a=(0,s.createProxy)(String.raw`C:\Projetos\kondos-web\src\app\(search)\search-2\page.tsx`),{__esModule:l,$$typeof:n}=a,i=a.default,o=i},78478:(e,t,r)=>{"use strict";r.d(t,{x:()=>i});var s=r(34218);let a=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function l(e){var t,r;let s=null!=(t=e.innerText)?t:"",l=e.cloneNode(!0);if(!(l instanceof HTMLElement))return s;let n=!1;for(let e of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),n=!0;let i=n?null!=(r=l.innerText)?r:"":s;return a.test(i)&&(i=i.replace(a,"")),i}var n=r(63266);function i(e){let t=(0,s.useRef)(""),r=(0,s.useRef)("");return(0,n.z)(()=>{let s=e.current;if(!s)return"";let a=s.innerText;if(t.current===a)return r.current;let n=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let e=r.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():l(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return l(e).trim()})(s).trim().toLowerCase();return t.current=a,r.current=n,n})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[3271,8021,641,369,7138,7471,5033,3759],()=>r(47736));module.exports=s})();