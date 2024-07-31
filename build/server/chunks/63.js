"use strict";exports.id=63,exports.ids=[63],exports.modules={10063:(e,t,r)=>{r.d(t,{Z:()=>MySlider});var l=r(30784),n=r(9885),a=r(69968),i=r(77714),s=r(60614),d=r(19967),o=r(81688),c=r(30569),x=r(84023),u=r(73588);let NextPrev_PrevBtn=({className:e="w-10 h-10 text-lg",...t})=>l.jsx("button",{className:`PrevBtn ${e} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full inline-flex items-center justify-center hover:border-neutral-300 ${(0,x.Z)()}`,...t,children:l.jsx(u.Z,{className:"w-5 h-5 rtl:rotate-180"})});var h=r(13542);let NextPrev_NextBtn=({className:e="w-10 h-10 text-lg",...t})=>l.jsx("button",{className:`NextBtn ${e} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full inline-flex items-center justify-center hover:border-neutral-300 ${(0,x.Z)()}`,...t,children:l.jsx(h.Z,{className:"w-5 h-5 rtl:rotate-180"})});function MySlider({className:e="",itemPerRow:t=5,data:r,renderItem:x=()=>l.jsx("div",{}),arrowBtnClass:u="top-1/2 -translate-y-1/2"}){let[h,m]=(0,n.useState)(0),[v,b]=(0,n.useState)(0),[w,g]=(0,n.useState)(0),N=(0,a.Z)().width;function changeItemId(e){e>h?b(1):b(-1),m(e)}(0,n.useEffect)(()=>N<=320?g(1):N<500?g(t-3||2):N<1024?g(t-2||3):N<1280?g(t-1):void g(t),[t,N]);let f=(0,i.QS)({onSwipedLeft:()=>{h<r?.length-1&&changeItemId(h+1)},onSwipedRight:()=>{h>0&&changeItemId(h-1)},trackMouse:!0});if(!w)return l.jsx("div",{});let j=document.querySelector("html")?.getAttribute("dir")==="rtl";return l.jsx("div",{className:`nc-MySlider ${e}`,children:l.jsx(d.A,{transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},children:(0,l.jsxs)("div",{className:"relative flow-root",...f,children:[l.jsx("div",{className:"flow-root overflow-hidden rounded-xl",children:l.jsx(o.E.ul,{initial:!1,className:"relative whitespace-nowrap -mx-2 xl:-mx-4 ",children:l.jsx(c.M,{initial:!1,custom:v,children:r.map((e,t)=>l.jsx(o.E.li,{className:"relative inline-block px-2 xl:px-4 whitespace-normal",custom:v,initial:{x:j?`${(h-1)*100}%`:`${-((h-1)*100)}%`},animate:{x:j?`${100*h}%`:`${-100*h}%`},variants:(0,s.o)(200,1),style:{width:`calc(1/${w} * 100%)`},children:x(e,t)},t))})})}),h?l.jsx(NextPrev_PrevBtn,{onClick:()=>changeItemId(h-1),className:`w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -start-3 xl:-start-6 z-[1] ${u}`}):null,r.length>h+w?l.jsx(NextPrev_NextBtn,{onClick:()=>changeItemId(h+1),className:`w-9 h-9 xl:w-12 xl:h-12 text-lg absolute -end-3 xl:-end-6 z-[1] ${u}`}):null]})})})}}};