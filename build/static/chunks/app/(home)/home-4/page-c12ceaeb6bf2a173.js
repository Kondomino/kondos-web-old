(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6613],{14563:function(e,s,t){Promise.resolve().then(t.t.bind(t,90413,23)),Promise.resolve().then(t.t.bind(t,68326,23)),Promise.resolve().then(t.bind(t,28351)),Promise.resolve().then(t.bind(t,96384)),Promise.resolve().then(t.bind(t,52230)),Promise.resolve().then(t.bind(t,72828)),Promise.resolve().then(t.bind(t,27020)),Promise.resolve().then(t.bind(t,49542)),Promise.resolve().then(t.bind(t,17660)),Promise.resolve().then(t.bind(t,37650)),Promise.resolve().then(t.bind(t,15269)),Promise.resolve().then(t.bind(t,76847)),Promise.resolve().then(t.bind(t,75069)),Promise.resolve().then(t.bind(t,36353)),Promise.resolve().then(t.bind(t,66722)),Promise.resolve().then(t.bind(t,72353)),Promise.resolve().then(t.bind(t,67608)),Promise.resolve().then(t.bind(t,294)),Promise.resolve().then(t.bind(t,87657)),Promise.resolve().then(t.bind(t,87849)),Promise.resolve().then(t.bind(t,70073)),Promise.resolve().then(t.bind(t,29045)),Promise.resolve().then(t.bind(t,63849)),Promise.resolve().then(t.bind(t,80197)),Promise.resolve().then(t.bind(t,80832)),Promise.resolve().then(t.bind(t,11985)),Promise.resolve().then(t.bind(t,93887)),Promise.resolve().then(t.bind(t,1164)),Promise.resolve().then(t.bind(t,99118))},84877:function(e,s,t){"use strict";var r=t(26705);t(20955);var a=t(14027),l=t(31787);s.Z=e=>{let{className:s="",onClick:t=()=>{},iconSize:n="w-5 h-5"}=e;return(0,r.jsxs)("button",{className:"w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 ".concat(s," ")+(0,l.Z)(),onClick:t,children:[(0,r.jsx)("span",{className:"sr-only",children:"Close"}),(0,r.jsx)(a.Z,{className:n})]})}},52230:function(e,s,t){"use strict";t.r(s);var r=t(26705),a=t(20955),l=t(53813),n=t(69173),i=t(15269),o=t(47741),c=t(61396),d=t.n(c);s.default=e=>{let{className:s="h-full",post:t}=e,{href:c,categories:m}=t,[x,h]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:"nc-Card10 relative flex flex-col ".concat(s),onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[(0,r.jsx)(d(),{href:c,className:"absolute inset-0"}),(0,r.jsxs)("div",{className:"block group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-9 overflow-hidden z-0",children:[(0,r.jsx)("div",{children:(0,r.jsx)(i.default,{post:t,isHover:x})}),(0,r.jsx)(d(),{href:c,className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"})]}),(0,r.jsxs)("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4 rtl:space-x-reverse z-10",children:[(0,r.jsx)(n.Z,{categories:m}),(0,r.jsx)(l.Z,{hidenReadingTime:!0})]}),(0,r.jsx)("div",{className:"space-y-2.5 rtl:space-x-reverse mt-4",children:(0,r.jsx)(o.Z,{meta:t})})]})}},72828:function(e,s,t){"use strict";t.r(s);var r=t(26705),a=t(20955),l=t(53813),n=t(69173),i=t(15269),o=t(47741),c=t(61396),d=t.n(c);s.default=e=>{let{className:s="h-full",post:t}=e,{href:c,categories:m}=t,[x,h]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:"nc-Card10V2 relative flex flex-col ".concat(s),onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[(0,r.jsxs)("div",{className:"block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden z-0",children:[(0,r.jsx)("div",{children:(0,r.jsx)(i.default,{post:t,isHover:x})}),(0,r.jsx)(d(),{href:c,className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity"})]}),(0,r.jsxs)("div",{className:"absolute top-3 inset-x-3 flex justify-between items-start space-x-4 rtl:space-x-reverse",children:[(0,r.jsx)(n.Z,{categories:m}),(0,r.jsx)(l.Z,{})]}),(0,r.jsx)("div",{className:"space-y-2.5 mt-4 px-4",children:(0,r.jsx)(o.Z,{meta:t})})]})}},96273:function(e,s,t){"use strict";var r=t(26705),a=t(20955),l=t(75786),n=t(67251),i=t(32257),o=t(84877);s.Z=e=>{let{renderTrigger:s,renderContent:t,contentExtraClass:c="max-w-screen-xl",contentPaddingClass:d="py-4 px-6 md:py-5",triggerText:m="Open Modal",modalTitle:x="Modal title",isOpenProp:h,onCloseModal:u}=e,[v,p]=(0,a.useState)(!!h);function closeModal(){"boolean"!=typeof h&&p(!1),u&&u()}function openModal(){"boolean"!=typeof h&&p(!0)}return(0,a.useEffect)(()=>{p(!!h)},[h]),(0,r.jsxs)("div",{className:"nc-NcModal",children:[s?s(openModal):(0,r.jsxs)(i.Z,{onClick:openModal,children:[" ",m," "]}),(0,r.jsx)(l.u,{appear:!0,show:v,as:a.Fragment,children:(0,r.jsx)(n.Vq,{as:"div",className:"fixed inset-0 z-50 overflow-y-auto",onClose:closeModal,children:(0,r.jsxs)("div",{className:"min-h-screen px-1 text-center md:px-4",children:[(0,r.jsx)(l.x,{as:a.Fragment,enter:"ease-out duration-75",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-75",leaveFrom:"opacity-100",leaveTo:"opacity-0"}),(0,r.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"​"}),(0,r.jsx)(l.x,{as:a.Fragment,enter:"ease-out duration-75",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)("div",{className:"inline-block w-full my-5 overflow-hidden text-left align-middle transition-all transform bg-white border border-black border-opacity-5 shadow-xl rounded-2xl sm:my-8 dark:bg-neutral-800 dark:border-neutral-700 text-neutral-900 dark:text-neutral-300 ".concat(c),children:[(0,r.jsxs)("div",{className:"py-4 px-6 text-center relative border-b border-neutral-100 dark:border-neutral-700 md:py-5",children:[(0,r.jsx)(o.Z,{onClick:closeModal,className:"absolute left-2 top-1/2 transform -translate-y-1/2 sm:left-4"}),x&&(0,r.jsx)(n.$N,{as:"h3",className:"text-base font-semibold text-neutral-900 lg:text-xl dark:text-neutral-200 mx-10",children:x})]}),(0,r.jsx)("div",{className:d,children:t()})]})})]})})})]})}},47741:function(e,s,t){"use strict";var r=t(26705);t(20955);var a=t(28351),l=t(61396),n=t.n(l);s.Z=e=>{let{meta:s,hiddenAvatar:t=!1,className:l="leading-none text-xs",titleClassName:i="text-base",avatarSize:o="h-9 w-9 text-base"}=e,{date:c,author:d,title:m}=s;return(0,r.jsx)("div",{className:"nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ".concat(l),children:(0,r.jsxs)("div",{className:"relative flex items-center space-x-2 rtl:space-x-reverse",children:[!t&&(0,r.jsx)(a.default,{radius:"rounded-full",sizeClass:o,imgUrl:d.avatar,userName:d.displayName}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"block font-semibold ".concat(i),children:(0,r.jsx)(n(),{href:s.href,className:"line-clamp-1",children:m})}),(0,r.jsxs)(n(),{href:d.href,className:"flex mt-1.5",children:[(0,r.jsx)("span",{className:"block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium",children:d.displayName}),(0,r.jsx)("span",{className:"text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium",children:"\xb7"}),(0,r.jsx)("span",{className:"text-neutral-500 dark:text-neutral-400 font-normal",children:c})]})]})]})})}},75069:function(e,s,t){"use strict";t.r(s);var r=t(26705),a=t(20955),l=t(96384),n=t(96273),i=t(16414),o=t(16691),c=t.n(o),d=t(32257);s.default=e=>{let{}=e,[s,t]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:"SectionHero2 relative pb-20 md:py-32 lg:py-60 bg-black",children:[(0,r.jsxs)("div",{className:"flex w-full mb-10 md:w-1/2 xl:w-3/5 md:absolute md:end-0 md:top-0 md:bottom-0 md:mb-0",children:[(0,r.jsx)("div",{className:"hidden md:block absolute z-[1] top-0 start-0 bottom-0 w-44 from-black bg-gradient-to-r rtl:bg-gradient-to-l"}),(0,r.jsx)(c(),{fill:!0,className:"object-cover",src:"https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",sizes:"1260px",alt:"hero"})]}),(0,r.jsx)("div",{className:"container relative z-10 text-neutral-100",children:(0,r.jsxs)("div",{className:"max-w-3xl",children:[(0,r.jsx)("h1",{className:"font-bold text-4xl md:text-5xl xl:text-6xl mt-3 md:!leading-[110%] ",children:"The hidden world of whale culture"}),(0,r.jsx)("p",{className:"mt-7 text-base lg:text-xl text-neutral-300 ",children:"From singing competitions to food preferences, scientists are learning whales have cultural differences once thought to be unique to humans."}),(0,r.jsxs)("div",{className:"flex space-x-4 rtl:space-x-reverse mt-11",children:[(0,r.jsx)(l.default,{href:"/",children:"Read more"}),(0,r.jsx)(n.Z,{isOpenProp:s,onCloseModal:()=>t(!1),contentExtraClass:"max-w-screen-lg 2xl:max-w-screen-xl",contentPaddingClass:"",renderContent:()=>(0,r.jsx)("div",{className:"aspect-w-16 aspect-h-9 ",children:(0,r.jsx)("iframe",{src:"https://www.youtube.com/embed/qTsXfGVjm1w?autoplay=1",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"ncblog hero video"})}),renderTrigger:()=>(0,r.jsxs)(d.Z,{pattern:"white",onClick:()=>t(!s),children:["Play video",(0,r.jsx)(i.Z,{className:"w-5 h-5 ms-2 rtl:rotate-180"})]}),modalTitle:""})]})]})})]})}},1164:function(e,s,t){"use strict";t.r(s),s.default={src:"/_next/static/media/BecomeAnAuthorImg.fe618d37.png",height:694,width:890,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/Ab+Yojkm/cvVvfDnUPsJTxs6R0p5+vn1CAECDAX19vqYAbqpxYzu49n3OwHdFfkmOwoMND5RBf72DPn8BwDs7vujARVriAjARTXAC9m7NwIMG+YUV1kI+PwB9MnW8d39+/+vAdI4ABHyY5LN4+7RIfjx6gA0MDXHCRcH49ED9SXAGCyYAZoAAAkkiIJez+XqdL7V8wy1vueDqDS6v+FugJXjJCaDAbFtVxQK9qk68R5lVcnqDvcqHxXEDM+RyLTa+K+hze9RtRZkkborMmgAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[4466,413,1740,2302,429,4789,385,9534,812,2799,4121,5290,1744],function(){return e(e.s=14563)}),_N_E=e.O()}]);