(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[790],{96366:function(e,t,n){"use strict";n.d(t,{Z:function(){return _singles_SingleMetaActionStandard}});var s=n(26705),l=n(20955),r=n(96289),a=n(45198),i=n(37650),o=n(31787),c=n(80464),d=n(13340),C=n(24033),PostActionDropdown_StandardActionDropdown=e=>{let{containerClassName:t="h-8 w-8 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700",iconClass:n="h-[18px] w-[18px]",dropdownPositon:r="down"}=e,i=[{id:"copylink",name:"Copy link",icon:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n      <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />\n    </svg>\n    '}];(0,C.useRouter)();let[x,h]=(0,l.useState)(!1),[u,m]=(0,l.useState)(!1),[p,g]=(0,l.useState)(!1),openModalReportPost=()=>h(!0),openModalHideAuthor=()=>m(!0);return(0,s.jsxs)("div",{children:[(p&&(i=i.map(e=>"copylink"!==e.id?e:{...e,name:"Link Copied"})),(0,s.jsx)(a.Z,{className:"text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full  ".concat(t," ").concat((0,o.Z)()),triggerIconClass:n,data:i,panelMenusClass:"up"===r?"origin-bottom-right bottom-0":void 0,onClick:e=>{if("copylink"===e.id){navigator.clipboard.writeText(window.location.origin+"/single/this-is-slug"),g(!0),setTimeout(()=>{g(!1)},1e3);return}return"reportThisArticle"===e.id?openModalReportPost():"hideThisAuthor"===e.id?openModalHideAuthor():void e.id}})),(0,s.jsx)(c.Z,{show:x,onCloseModalReportItem:()=>h(!1)}),(0,s.jsx)(d.Z,{show:u,onCloseModalHideAuthor:()=>m(!1)})]})},_singles_SingleMetaActionStandard=e=>{let{className:t=""}=e;return(0,s.jsx)("div",{className:"nc-SingleMetaAction2 ".concat(t),children:(0,s.jsxs)("div",{className:"flex flex-row space-x-2.5 rtl:space-x-reverse items-center",children:[(0,s.jsx)(i.default,{className:"px-3 h-8 text-xs"}),(0,s.jsx)("div",{className:"px-1",children:(0,s.jsx)("div",{className:"border-s border-neutral-200 dark:border-neutral-700 h-6"})}),(0,s.jsx)(a.Z,{className:"flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full",renderTrigger:()=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})}),onClick:()=>{},data:r.x}),(0,s.jsx)(PostActionDropdown_StandardActionDropdown,{containerClassName:"h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700",iconClass:"h-5 w-5"})]})})}},88406:function(e,t,n){"use strict";var s=n(26705);n(20955),t.Z=e=>{let{mainClass:t="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100",className:n="",title:l}=e;return(0,s.jsx)("h1",{className:n+" "+t+" max-w-4xl ",title:l,children:l})}},13340:function(e,t,n){"use strict";var s=n(26705),l=n(20955),r=n(96273),a=n(96384),i=n(9698),o=n(88632);let c=i.Z[0];t.Z=e=>{let{auhthor:t=c,show:n,onCloseModalHideAuthor:i}=e,d=(0,l.useRef)(null),handleClickSubmitForm=()=>{console.log({auhthor:t.id})};return(0,l.useEffect)(()=>{n&&setTimeout(()=>{let e=d.current;e&&e.focus()},400)},[n]),(0,s.jsx)(r.Z,{isOpenProp:n,onCloseModal:i,contentExtraClass:"max-w-screen-sm",renderContent:()=>(0,s.jsxs)("form",{action:"#",children:[(0,s.jsxs)("h3",{className:"text-lg font-semibold",children:["Hide stories from ",t.displayName]}),(0,s.jsxs)("span",{className:"text-sm",children:["We will hide all articles from ",(0,s.jsx)("strong",{children:t.displayName}),". You will no longer see their articles?"]}),(0,s.jsxs)("div",{className:"mt-4 space-x-3",children:[(0,s.jsx)(a.default,{className:"!bg-red-500",onClick:handleClickSubmitForm,type:"submit",children:"Hide this author"}),(0,s.jsx)(o.Z,{type:"button",onClick:i,children:"Cancel"})]})]}),renderTrigger:()=>null,modalTitle:""})}},97904:function(e,t,n){"use strict";var s=n(26705);n(20955);var l=n(28351),r=n(20454),a=n(61396),i=n.n(a);let o=r.oC[0];t.Z=e=>{let{className:t="leading-none",meta:n=o,hiddenCategories:r=!1,size:a="normal",avatarRounded:c}=e,{date:d,author:C,categories:x,readingTime:h}=n;return(0,s.jsxs)("div",{className:"nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 ".concat("normal"===a?"text-xs":"text-sm"," ").concat(t),children:[(0,s.jsx)(i(),{href:C.href,className:"flex items-center space-x-2 rtl:space-x-reverse",children:(0,s.jsx)(l.default,{radius:c,sizeClass:"normal"===a?"h-6 w-6 text-sm":"h-10 w-10 sm:h-11 sm:w-11 text-xl",imgUrl:C.avatar,userName:C.displayName})}),(0,s.jsxs)("div",{className:"ms-3",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(i(),{href:C.href,className:"block font-semibold",children:C.displayName}),!r&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"mx-2 font-semibold",children:"\xb7"}),(0,s.jsxs)("div",{className:"ms-0",children:[(0,s.jsx)("span",{className:"text-xs",children:"\uD83C\uDFF7 "}),x.map((e,t)=>(0,s.jsxs)(i(),{href:e.href,className:"font-semibold",children:[e.name,t<x.length-1&&(0,s.jsx)("span",{children:", "})]},e.id))]})]})]}),(0,s.jsxs)("div",{className:"text-xs mt-[6px]",children:[(0,s.jsx)("span",{className:"text-neutral-700 dark:text-neutral-300",children:d}),(0,s.jsx)("span",{className:"mx-2 font-semibold",children:"\xb7"}),(0,s.jsxs)("span",{className:"text-neutral-700 dark:text-neutral-300",children:[h," min read"]})]})]})]})}},96289:function(e,t,n){"use strict";n.d(t,{x:function(){return s}}),n(26705),n(20955);let s=[{id:"Facebook",name:"Facebook",icon:'<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <g clip-path="url(#clip0_17_61)">\n  <path d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z" fill="currentColor"/>\n  </g>\n  </svg>\n  ',href:"#"},{id:"Twitter",name:"Twitter",icon:'<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <g clip-path="url(#clip0_17_80)">\n  <path d="M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z" fill="currentColor"/>\n  </g>\n  </svg>\n  ',href:"#"},{id:"Linkedin",name:"Linkedin",icon:'<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <g clip-path="url(#clip0_17_68)">\n  <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="currentColor"/>\n  </g>\n  </svg>\n  ',href:"#"},{id:"Instagram",name:"Instagram",icon:'<svg class="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <g clip-path="url(#clip0_17_63)">\n  <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="currentColor"/>\n  <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="currentColor"/>\n  <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="currentColor"/>\n  </g>\n  </svg>\n  ',href:"#"}]},24033:function(e,t,n){e.exports=n(50094)}}]);