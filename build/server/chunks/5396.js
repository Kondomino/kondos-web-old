exports.id=5396,exports.ids=[5396],exports.modules={87990:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var s=r(53854),n=r(34218),l=r(38872),a=r(12470),i=r(86338),o=r(83573),c=r(45281),d=r(16023),u=r(51018);let h=({containerClassName:e="h-8 w-8 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700",iconClass:t="h-[18px] w-[18px]",dropdownPositon:r="down"})=>{let l=[{id:"copylink",name:"Copy link",icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
    </svg>
    `}];(0,u.useRouter)();let[i,h]=(0,n.useState)(!1),[x,m]=(0,n.useState)(!1),[f,p]=(0,n.useState)(!1),w=()=>h(!0),g=()=>m(!0);return(0,s.jsxs)("div",{children:[(f&&(l=l.map(e=>"copylink"!==e.id?e:{...e,name:"Link Copied"})),s.jsx(a.Z,{className:`text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full  ${e} ${(0,o.Z)()}`,triggerIconClass:t,data:l,panelMenusClass:"up"===r?"origin-bottom-right bottom-0":void 0,onClick:e=>{if("copylink"===e.id){navigator.clipboard.writeText(window.location.origin+"/single/this-is-slug"),p(!0),setTimeout(()=>{p(!1)},1e3);return}return"reportThisArticle"===e.id?w():"hideThisAuthor"===e.id?g():void e.id}})),s.jsx(c.Z,{show:i,onCloseModalReportItem:()=>h(!1)}),s.jsx(d.Z,{show:x,onCloseModalHideAuthor:()=>m(!1)})]})},x=({className:e=""})=>s.jsx("div",{className:`nc-SingleMetaAction2 ${e}`,children:(0,s.jsxs)("div",{className:"flex flex-row space-x-2.5 rtl:space-x-reverse items-center",children:[s.jsx(i.default,{className:"px-3 h-8 text-xs"}),s.jsx("div",{className:"px-1",children:s.jsx("div",{className:"border-s border-neutral-200 dark:border-neutral-700 h-6"})}),s.jsx(a.Z,{className:"flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full",renderTrigger:()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})}),onClick:()=>{},data:l.x}),s.jsx(h,{containerClassName:"h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700",iconClass:"h-5 w-5"})]})})},72734:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(53854);r(34218);let n=({mainClass:e="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100",className:t="",title:r})=>s.jsx("h1",{className:t+" "+e+" max-w-4xl ",title:r,children:r})},8820:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(53854);r(34218);var n=r(11557),l=r(26893),a=r(75548),i=r.n(a);let o=l.oC[0],c=({className:e="leading-none",meta:t=o,hiddenCategories:r=!1,size:l="normal",avatarRounded:a})=>{let{date:c,author:d,categories:u,readingTime:h}=t;return(0,s.jsxs)("div",{className:`nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ${"normal"===l?"text-xs":"text-sm"} ${e}`,children:[s.jsx(i(),{href:d.href,className:"flex items-center space-x-2 rtl:space-x-reverse",children:s.jsx(n.default,{radius:a,sizeClass:"normal"===l?"h-6 w-6 text-sm":"h-10 w-10 sm:h-11 sm:w-11 text-xl",imgUrl:d.avatar,userName:d.displayName})}),(0,s.jsxs)("div",{className:"ms-3",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx(i(),{href:d.href,className:"block font-semibold",children:d.displayName}),!r&&(0,s.jsxs)(s.Fragment,{children:[s.jsx("span",{className:"mx-2 font-semibold",children:"\xb7"}),(0,s.jsxs)("div",{className:"ms-0",children:[s.jsx("span",{className:"text-xs",children:"\uD83C\uDFF7 "}),u.map((e,t)=>(0,s.jsxs)(i(),{href:e.href,className:"font-semibold",children:[e.name,t<u.length-1&&s.jsx("span",{children:", "})]},e.id))]})]})]}),(0,s.jsxs)("div",{className:"text-xs mt-[6px]",children:[s.jsx("span",{className:"text-neutral-700 dark:text-neutral-300",children:c}),s.jsx("span",{className:"mx-2 font-semibold",children:"\xb7"}),(0,s.jsxs)("span",{className:"text-neutral-700 dark:text-neutral-300",children:[h," min read"]})]})]})]})}},50648:(e,t,r)=>{"use strict";r.d(t,{Z:()=>F,L:()=>R});var s=r(53854);r(73736);var n=r(41956),l=r.n(n),a=r(51018),i=r(34218),o=r(99435);function c(e,t){if(!e)throw Error("Invariant failed")}var d=new Map([["Win","Meta"],["Scroll","ScrollLock"],["Spacebar"," "],["Down","ArrowDown"],["Left","ArrowLeft"],["Right","ArrowRight"],["Up","ArrowUp"],["Del","Delete"],["Crsel","CrSel"],["Exsel","ExSel"],["Apps","ContextMenu"],["Esc","Escape"],["Decimal","."],["Multiply","*"],["Add","+"],["Subtract","-"],["Divide","/"]]),u=function(e){if(d.has(e.key)){var t=d.get(e.key);Object.defineProperty(e,"key",{configurable:!0,enumerable:!0,get:function(){return t}})}},h=function(e,t){Array.isArray(e)||"string"==typeof e||c(!1),Array.isArray(e)&&e.forEach(function(e,t){"string"!=typeof e&&c(!1)}),"function"==typeof t||null==t||c(!1);var r=(0,i.useRef)();(0,i.useEffect)(function(){r.current=function(r){u(r),(Array.isArray(e)?e.includes(r.key):e===r.key)&&(null==t||t(r))}},[e,t]),(0,i.useEffect)(function(){var e=function(e){r.current(e)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}},[])},x=r(10789),m=r(67689);let f=i.forwardRef(function({title:e,titleId:t,...r},s){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"}))}),p=i.forwardRef(function({title:e,titleId:t,...r},s){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}),w=i.forwardRef(function({title:e,titleId:t,...r},s){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"}))});var g=r(49149),v=r(86874),b=r(91776),j=r(29015),k=r(32333);let N=(e,t)=>{let r=[];void 0===t&&(t=e,e=0);for(let s=e;s<t;s+=1)r.push(s);return r};function y(e){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-twitter",...e,children:s.jsx("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})}function C({index:e,images:t,changePhotoId:r,closeModal:n,navigation:a,currentPhoto:o,direction:c}){let[d,u]=(0,i.useState)(!1),h=t?.filter(t=>N(e-15,e+15).includes(t.id)),C=(0,j.QS)({onSwipedLeft:()=>{e<t?.length-1&&r(e+1)},onSwipedRight:()=>{e>0&&r(e-1)},trackMouse:!0}),L=t?t[e]:o,A=document.querySelector("html")?.getAttribute("dir")==="rtl";return s.jsx(g.A,{transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},children:(0,s.jsxs)("div",{className:"relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto",...C,children:[s.jsx("div",{className:"w-full overflow-hidden",children:s.jsx("div",{className:"relative flex aspect-[3/2] items-center justify-center",children:s.jsx(v.M,{initial:!1,custom:c,children:s.jsx(b.E.div,{custom:c,variants:(0,k.o)(),initial:"enter",animate:"center",exit:"exit",className:"absolute",children:s.jsx(l(),{src:L?.url||"",width:a?1280:1920,height:a?853:1280,priority:!0,alt:"Chisfis listing gallery",onLoad:()=>u(!0),sizes:"(max-width: 1025px) 100vw, 1280px",className:"object-contain"})},e)})})}),(0,s.jsxs)("div",{className:"absolute inset-0 mx-auto flex max-w-7xl items-center justify-center",children:[d&&(0,s.jsxs)("div",{className:"relative aspect-[3/2] max-h-full w-full",children:[a&&(0,s.jsxs)(s.Fragment,{children:[e>0&&s.jsx("button",{className:"absolute start-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none",style:{transform:"translate3d(0, 0, 0)"},onClick:()=>r(e-1),children:s.jsx(x.Z,{className:"h-6 w-6 rtl:rotate-180"})}),e+1<t.length&&s.jsx("button",{className:"absolute end-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none",style:{transform:"translate3d(0, 0, 0)"},onClick:()=>r(e+1),children:s.jsx(m.Z,{className:"h-6 w-6 rtl:rotate-180"})})]}),s.jsx("div",{className:"absolute top-0 end-0 flex items-center gap-2 p-3 text-white",children:a?s.jsx("a",{href:"#",className:"rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white",target:"_blank",title:"Open fullsize version",rel:"noreferrer",children:s.jsx(f,{className:"h-5 w-5"})}):s.jsx("a",{href:`https://twitter.com/intent/tweet?text=Check%20out%20this%20pic%20from%20Chisfis%20!%0A%0A${location.href}`,className:"rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white",target:"_blank",title:"Open fullsize version",rel:"noreferrer",children:s.jsx(y,{className:"h-5 w-5"})})}),s.jsx("div",{className:"absolute top-0 start-0 flex items-center gap-2 p-3 text-white",children:s.jsx("button",{onClick:()=>n(),className:"rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white",children:a?s.jsx(p,{className:"h-5 w-5"}):s.jsx(w,{className:"h-5 w-5"})})})]}),a&&s.jsx("div",{className:"fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60",children:s.jsx(b.E.div,{initial:!1,className:"mx-auto mt-6 mb-6 flex aspect-[3/2] h-14",children:s.jsx(v.M,{initial:!1,children:h.map(({id:n,url:a})=>s.jsx(b.E.button,{initial:{width:"0%",x:`${(e-1)*(A?100:-100)}%`},animate:{scale:n===e?1.25:1,width:"100%",x:`${e*(A?100:-100)}%`},exit:{width:"0%"},onClick:()=>r(n),className:`${n===e?"z-20 rounded-md shadow shadow-black/50":"z-10"} ${0===n?"rounded-s-md":""} ${n===t.length-1?"rounded-e-md":""} relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`,children:s.jsx(l(),{alt:"small photos on the bottom",width:180,height:120,className:`${n===e?"brightness-110 hover:brightness-110":"brightness-50 contrast-125 hover:brightness-75"} h-full transform object-cover transition`,src:a||""})},n))})})})]})]})})}function L({images:e,onClose:t}){let r=(0,i.useRef)(null),n=(0,a.useSearchParams)(),l=(0,a.useRouter)(),c=(0,a.usePathname)(),d=n?.get("photoId"),u=Number(d),[x,m]=(0,i.useState)(0),[f,p]=(0,i.useState)(u);function w(){t&&t()}function g(e){e>u?m(1):m(-1),p(e),l.push(`${c}/?${R({value:e})}`)}return h("ArrowRight",()=>{u+1<e.length&&g(u+1)}),h("ArrowLeft",()=>{u>0&&g(u-1)}),s.jsx(s.Fragment,{children:s.jsx(o.Vq,{static:!0,open:!0,onClose:w,initialFocus:r,className:"fixed inset-0 z-50 flex items-center justify-center ",children:s.jsx(C,{index:f,direction:x,images:e,changePhotoId:g,closeModal:w,navigation:!0})})})}var A=r(47065);let{useGlobalState:S}=(0,A.r)({photoToScrollTo:null}),E=()=>S("photoToScrollTo"),M=i.forwardRef(function({title:e,titleId:t,...r},s){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":t},r),e?i.createElement("title",{id:t},e):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"}))});var $=r(67059);let z=()=>{let[e,t]=(0,i.useState)(!1);return s.jsx("div",{className:"flow-root",children:(0,s.jsxs)("div",{className:"flex text-neutral-700 dark:text-neutral-300 text-sm -mx-3 -my-1.5",children:[(0,s.jsxs)("span",{className:"py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})}),s.jsx("span",{className:"hidden sm:block ms-2",children:"Share"})]}),(0,s.jsxs)("span",{className:"py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer ",onClick:()=>t(!e),children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:`h-5 w-5 ${e?"text-red-500":""}`,fill:e?"currentColor":"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),s.jsx("span",{className:"hidden sm:block ms-2",children:"Save"})]})]})})},R=({paramName:e="photoId",value:t})=>{let r=new URLSearchParams(document.location.search);return r.set(e,String(t)),r.toString()},F=({images:e,onClose:t,isShowModal:r})=>{let n=(0,a.useSearchParams)(),c=n?.get("photoId"),d=(0,a.useRouter)(),[u,h]=E(),x=(0,i.useRef)(null),m=(0,a.usePathname)();(0,i.useEffect)(()=>{u&&!c&&(x.current?.scrollIntoView({block:"center"}),h(null))},[c,u,h]);let f=()=>{t&&t()};return s.jsx(s.Fragment,{children:s.jsx($.u,{appear:!0,show:r,as:i.Fragment,children:(0,s.jsxs)(o.Vq,{as:"div",className:"relative z-40",onClose:f,children:[s.jsx($.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:s.jsx("div",{className:"fixed inset-0 bg-white"})}),(0,s.jsxs)("div",{className:"fixed inset-0 overflow-y-auto",children:[(0,s.jsxs)("div",{className:"sticky z-10 top-0 p-4 xl:px-10 flex items-center justify-between bg-white",children:[s.jsx("button",{className:"focus:outline-none focus:ring-0 w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-100",onClick:f,children:s.jsx(M,{className:"w-6 h-6"})}),s.jsx(z,{})]}),s.jsx("div",{className:"flex min-h-full items-center justify-center sm:p-4 pt-0 text-center",children:s.jsx($.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-5",enterTo:"opacity-100 translate-y-0",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-5",children:s.jsx(o.Vq.Panel,{className:"w-full max-w-screen-lg mx-auto transform p-4 pt-0 text-left transition-all ",children:(0,s.jsxs)("div",{className:" ",children:[c&&s.jsx(L,{images:e,onClose:()=>{h(c);let e=new URLSearchParams(document.location.search);e.delete("photoId"),d.push(`${m}/?${e.toString()}`)}}),s.jsx("div",{className:"columns-1 gap-4 sm:columns-2 xl:columns-3",children:e.map(({id:e,url:t})=>s.jsx("div",{onClick:()=>{let t=R({value:e});d.push(`${m}/?${t}`)},ref:e===Number(u)?x:null,className:"after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight focus:outline-none",children:s.jsx(l(),{alt:"chisfis listing gallery ",className:"transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 focus:outline-none",style:{transform:"translate3d(0, 0, 0)"},src:t,width:720,height:480,sizes:"(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 350px"})},e))})]})})})})]})]})})})}},73736:()=>{}};