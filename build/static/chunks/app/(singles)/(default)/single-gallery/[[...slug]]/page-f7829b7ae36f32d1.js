(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{91216:function(e,t,a){Promise.resolve().then(a.bind(a,59970))},59970:function(e,t,a){"use strict";a.r(t);var r=a(26705),n=a(20955),s=a(84399),l=a(57026),o=a(24033),i=a(94168),c=a(77616);let d=c.Pg,PageSg=e=>{let{}=e,t=(0,o.useRouter)(),a=(0,o.usePathname)(),n=(0,o.useSearchParams)(),c=null==n?void 0:n.get("modal"),handleOpenModalImageGallery=()=>{t.push("".concat(a,"/?modal=PHOTO_TOUR_SCROLLABLE"))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"pt-8 lg:pt-16",children:[(0,r.jsxs)("header",{className:"container rounded-xl",children:[(0,r.jsx)(i.default,{hiddenDesc:!0}),(0,r.jsxs)("div",{className:"relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10",children:[(0,r.jsxs)("div",{className:"col-span-2 row-span-2 relative rounded-xl overflow-hidden cursor-pointer z-0",onClick:handleOpenModalImageGallery,children:[(0,r.jsx)(s.Z,{alt:"single",containerClassName:"absolute inset-0",className:"object-cover w-full h-full rounded-xl",fill:!0,src:d[0]}),(0,r.jsx)("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"})]}),d.filter((e,t)=>t>=1&&t<5).map((e,t)=>(0,r.jsxs)("div",{className:"relative rounded-xl overflow-hidden z-0 ".concat(t>=2?"hidden sm:block":""),children:[(0,r.jsx)(s.Z,{alt:"single",fill:!0,containerClassName:"aspect-w-6 aspect-h-5",className:"object-cover w-full h-full rounded-xl",src:e||""}),(0,r.jsx)("div",{className:"absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer",onClick:handleOpenModalImageGallery})]},t)),(0,r.jsxs)("div",{className:"absolute hidden md:flex md:items-center md:justify-center right-3 bottom-3 px-4 py-2 rounded-full bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10",onClick:handleOpenModalImageGallery,children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"})}),(0,r.jsx)("span",{className:"ms-2 text-neutral-800 text-sm font-medium",children:"Show all photos"})]})]})]}),(0,r.jsx)(l.Z,{isShowModal:"PHOTO_TOUR_SCROLLABLE"===c,onClose:()=>{let e=new URLSearchParams(document.location.search);e.delete("modal"),t.push("".concat(a,"/?").concat(e.toString()))},images:d.map((e,t)=>({id:t,url:e}))})]})})};t.default=()=>(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)("div",{}),children:(0,r.jsx)(PageSg,{})})},94168:function(e,t,a){"use strict";a.r(t);var r=a(26705);a(20955);var n=a(69173),s=a(88406),l=a(97904),o=a(13886),i=a(96366);t.default=e=>{let{titleMainClass:t,hiddenDesc:a=!1,className:c=""}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"nc-SingleHeader ".concat(c),children:(0,r.jsxs)("div",{className:"space-y-5",children:[(0,r.jsx)(n.Z,{itemClass:"!px-3",categories:[o.O[1]]}),(0,r.jsx)(s.Z,{mainClass:t,title:"Title magnific"}),!a&&(0,r.jsx)("span",{className:"block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis tempora obcaecati error ipsum voluptatibus sed adipisci ut maiores nesciunt quam."}),(0,r.jsx)("div",{className:"w-full border-b border-neutral-200 dark:border-neutral-700"}),(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse",children:[(0,r.jsx)(l.Z,{size:"large",className:"leading-none flex-shrink-0",hiddenCategories:!0,avatarRounded:"rounded-full shadow-inner"}),(0,r.jsx)(i.Z,{})]})]})})})}},80016:function(e,t,a){"use strict";var r=a(26705),n=a(61396),s=a.n(n);a(20955),t.Z=e=>{let{className:t="relative",name:a,color:n="blue",href:l}=e,getColorClass=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];switch(n){case"pink":default:return"text-pink-800 bg-pink-100 ".concat(e?"hover:bg-pink-800":"");case"red":return"text-red-800 bg-red-100 ".concat(e?"hover:bg-red-800":"");case"gray":return"text-gray-800 bg-gray-100 ".concat(e?"hover:bg-gray-800":"");case"green":return"text-green-800 bg-green-100 ".concat(e?"hover:bg-green-800":"");case"purple":return"text-purple-800 bg-purple-100 ".concat(e?"hover:bg-purple-800":"");case"indigo":return"text-indigo-800 bg-indigo-100 ".concat(e?"hover:bg-indigo-800":"");case"yellow":return"text-yellow-800 bg-yellow-100 ".concat(e?"hover:bg-yellow-800":"");case"blue":return"text-blue-800 bg-blue-100 ".concat(e?"hover:bg-blue-800":"")}},o="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs "+t;return l?(0,r.jsx)(s(),{href:l||"/",className:"transition-colors hover:text-white duration-300 ".concat(o," ").concat(getColorClass()),children:a}):(0,r.jsx)("span",{className:"".concat(o," ").concat(getColorClass(!1)," "),children:a})}},69173:function(e,t,a){"use strict";var r=a(26705);a(20955);var n=a(80016);t.Z=e=>{let{className:t="flex flex-wrap space-x-2",itemClass:a,categories:s}=e;return(0,r.jsx)("div",{className:"nc-CategoryBadgeList ".concat(t),"data-nc-id":"CategoryBadgeList",children:s.map((e,t)=>(0,r.jsx)(n.Z,{className:a,name:e.name,href:e.href,color:e.color},t))})}},84399:function(e,t,a){"use strict";var r=a(26705);a(20955);var n=a(16691),s=a.n(n);t.Z=e=>{let{containerClassName:t="",alt:a="nc-imgs",className:n="object-cover w-full h-full",sizes:l="(max-width: 600px) 480px, 800px",...o}=e;return(0,r.jsx)("div",{className:t,children:(0,r.jsx)(s(),{className:n,alt:a,sizes:l,...o})})}},89467:function(e,t,a){"use strict";a.d(t,{o:function(){return variants}});let variants=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{enter:a=>({x:a>0?e:-e,opacity:t}),center:{x:0,opacity:1},exit:a=>({x:a<0?e:-e,opacity:t})}}},40013:function(e,t,a){"use strict";var r=a(20955);let n=r.forwardRef(function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))});t.Z=n},3217:function(e,t,a){"use strict";var r=a(20955);let n=r.forwardRef(function({title:e,titleId:t,...a},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},a),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))});t.Z=n}},function(e){e.O(0,[5501,4466,413,1740,626,2302,8874,385,454,8447,790,7026,4121,5290,1744],function(){return e(e.s=91216)}),_N_E=e.O()}]);