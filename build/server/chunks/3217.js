"use strict";exports.id=3217,exports.ids=[3217],exports.modules={11915:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(53854),a=r(75548),l=r.n(a);r(34218);let n=({className:e="relative",name:t,color:r="blue",href:a})=>{let n=(e=!0)=>{switch(r){case"pink":default:return`text-pink-800 bg-pink-100 ${e?"hover:bg-pink-800":""}`;case"red":return`text-red-800 bg-red-100 ${e?"hover:bg-red-800":""}`;case"gray":return`text-gray-800 bg-gray-100 ${e?"hover:bg-gray-800":""}`;case"green":return`text-green-800 bg-green-100 ${e?"hover:bg-green-800":""}`;case"purple":return`text-purple-800 bg-purple-100 ${e?"hover:bg-purple-800":""}`;case"indigo":return`text-indigo-800 bg-indigo-100 ${e?"hover:bg-indigo-800":""}`;case"yellow":return`text-yellow-800 bg-yellow-100 ${e?"hover:bg-yellow-800":""}`;case"blue":return`text-blue-800 bg-blue-100 ${e?"hover:bg-blue-800":""}`}},o="nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs "+e;return a?s.jsx(l(),{href:a||"/",className:`transition-colors hover:text-white duration-300 ${o} ${n()}`,children:t}):s.jsx("span",{className:`${o} ${n(!1)} `,children:t})}},48164:(e,t,r)=>{r.d(t,{Z:()=>u});var s=r(53854);r(34218);var a=r(83295),l=r(66368),n=r(47065);let{useGlobalState:o}=(0,n.r)({playing:!1,volume:.8,muted:!1,played:0,playedSeconds:0,loaded:0,duration:0,loadedSeconds:0,playbackRate:1,postData:void 0}),i=()=>{let[e,t]=o("playbackRate"),[r,s]=o("duration"),[a,l]=o("loaded"),[n,i]=o("played"),[d,c]=o("muted"),[u,x]=o("volume"),[h,p]=o("playing"),[m,g]=o("postData"),[j,b]=o("loadedSeconds"),[v,f]=o("playedSeconds");return{duration:r,playedSeconds:v,setPlayedSeconds:f,loadedSeconds:j,setLoadedSeconds:b,setDuration:s,loaded:a,setLoaded:l,played:n,setPlayed:i,muted:d,setMuted:c,volume:u,setVolume:x,playing:h,setPlaying:p,playbackRate:e,setplaybackRate:t,postData:m,setPostData:g}};var d=r(41956),c=r.n(d);let u=({className:e="",post:t,renderChildren:r,renderDefaultBtn:n,renderPlayingBtn:o})=>{let{postData:d,setPostData:u,setPlaying:x,playing:h}=i(),p=()=>{u(t),x(!0)},m=()=>n?n():s.jsx(l.Z,{className:"z-20 hover:scale-105 transform cursor-pointer transition-transform",postType:"audio"});return s.jsx("div",{className:`nc-ButtonPlayMusicPlayer select-none ${e}`,onClick:()=>{if(!d||d.id!==t.id||d.audioUrl!==t.audioUrl)return p();x(!h)},children:r?r(h):s.jsx(s.Fragment,{children:h?d?.id!==t.id?m():o?o():s.jsx("span",{className:"z-10 bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11 cursor-pointer",children:s.jsx(c(),{className:"w-5",src:a.Z,alt:"paused"})}):m()})})}},8198:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(53854);r(34218);var a=r(11915);let l=({className:e="flex flex-wrap space-x-2",itemClass:t,categories:r})=>s.jsx("div",{className:`nc-CategoryBadgeList ${e}`,"data-nc-id":"CategoryBadgeList",children:r.map((e,r)=>s.jsx(a.Z,{className:t,name:e.name,href:e.href,color:e.color},r))})},48291:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var s=r(53854),a=r(34218);let l=({containerClassName:e="h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700",bookmarked:t=!1})=>{let[r,l]=(0,a.useState)(t);return s.jsx("button",{className:`nc-NcBookmark relative rounded-full flex items-center justify-center ${e}`,title:"Save to reading list",onClick:()=>l(!r),children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:1.5,fill:r?"currentColor":"none",stroke:"currentColor",className:"w-[18px] h-[18px]",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"})})})}},72560:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(53854);r(34218);var a=r(48291);let l=({className:e="",bookmarkClass:t,hidenReadingTime:r=!0,readingTime:l=3})=>(0,s.jsxs)("div",{className:`nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ${e}`,children:[!r&&!!l&&(0,s.jsxs)("span",{children:[l," min read"]}),s.jsx(a.default,{containerClassName:t})]})},86687:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var s=r(53854),a=r(34218),l=r(10789),n=r(67689),o=r(49149),i=r(86874),d=r(91776),c=r(41956),u=r.n(c),x=r(29015),h=r(32333),p=r(75548),m=r.n(p);function g({className:e="relative z-10",galleryImgs:t,ratioClass:r="relative aspect-w-4 aspect-h-3",imageClass:c="",galleryClass:p="rounded-xl",href:g,navigation:j=!0}){let[b,v]=(0,a.useState)(!1),[f,k]=(0,a.useState)(0),[y,w]=(0,a.useState)(0);function N(e){e>f?w(1):w(-1),k(e)}let C=(0,x.QS)({onSwipedLeft:()=>{f<t?.length-1&&N(f+1)},onSwipedRight:()=>{f>0&&N(f-1)},trackMouse:!0}),L=t[f];return s.jsx(o.A,{transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},children:(0,s.jsxs)("div",{className:` group group/cardGallerySlider ${e}`,...C,children:[s.jsx("div",{className:`w-full overflow-hidden ${p}`,children:s.jsx(m(),{href:g||"/",className:`flex items-center justify-center ${r}`,children:s.jsx(i.M,{initial:!1,custom:y,children:s.jsx(d.E.div,{custom:y,variants:(0,h.o)(300,1),initial:"enter",animate:"center",exit:"exit",className:"absolute inset-0",children:s.jsx(u(),{src:L||"",fill:!0,alt:"listing card gallery",className:`object-cover ${c}`,onLoad:()=>v(!0),sizes:"(max-width: 1025px) 100vw, 300px"})},f)})})}),(0,s.jsxs)(s.Fragment,{children:[b&&j&&(0,s.jsxs)("div",{className:"opacity-0 group-hover/cardGallerySlider:opacity-100 transition-opacity ",children:[f>0&&s.jsx("button",{className:"absolute w-8 h-8 start-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none z-10",style:{transform:"translate3d(0, 0, 0)"},onClick:()=>N(f-1),children:s.jsx(l.Z,{className:"h-4 w-4 rtl:rotate-180"})}),f+1<t.length&&s.jsx("button",{className:"absolute w-8 h-8 end-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none z-10",style:{transform:"translate3d(0, 0, 0)"},onClick:()=>N(f+1),children:s.jsx(n.Z,{className:"h-4 w-4 rtl:rotate-180"})})]}),s.jsx("div",{className:"absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-neutral-900 opacity-50 rounded-b-lg"}),s.jsx("div",{className:"flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-1.5 rtl:space-x-reverse",children:t.map((e,t)=>s.jsx("button",{className:`w-1.5 h-1.5 rounded-full ${t===f?"bg-white":"bg-white/60 "}`,onClick:()=>N(t)},t))})]})]})})}let j=({className:e="",chilClassName:t="bg-white"})=>(0,s.jsxs)("div",{className:`nc-LoadingVideo lds-ellipsis ${e}`,children:[s.jsx("div",{className:t}),s.jsx("div",{className:t}),s.jsx("div",{className:t}),s.jsx("div",{className:t})]});var b=r(57206),v=r(33196),f=r(369);let k=({videoUrl:e,isHover:t})=>{let[r,l]=(0,a.useState)(!0),[n,o]=(0,a.useState)(!0),[i,d]=(0,a.useState)(!1),c=null;return(0,a.useEffect)(()=>()=>{c&&clearTimeout(c)},[c]),(0,s.jsxs)("div",{className:"nc-MediaVideo",children:[s.jsx(f.Z,{url:e,muted:r,playing:t,style:{opacity:i?1:0},className:"absolute bg-neutral-900 inset-0 transition-opacity",width:"100%",height:"100%",onStart:()=>{d(!0),c&&clearTimeout(c),c=setTimeout(()=>{o(!1)},2500)}}),s.jsx("div",{className:`${i?"opacity-0":"opacity-100"} absolute bg-neutral-900/30 flex items-center justify-center inset-0 transition-opacity`,children:s.jsx(j,{})}),i&&s.jsx("div",{className:`absolute z-20 bottom-2 start-2 h-6 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-sm transform transition-transform ${n?"ps-[6px] pe-2":"w-6 hover:scale-125"}`,onClick:()=>l(!r),children:r?(0,s.jsxs)(s.Fragment,{children:[s.jsx(b.Z,{className:"w-3.5 h-3.5"}),n&&s.jsx("span",{className:"ms-1 inline-block text-[9px]",children:"Click here to unmute"})]}):s.jsx(v.Z,{className:"w-3.5 h-3.5"})})]})};var y=r(66368),w=r(48164);let N=({post:e})=>s.jsx(s.Fragment,{children:s.jsx(w.Z,{className:"absolute inset-0 bg-neutral-900/30 flex items-center justify-center",post:e})}),C=({className:e="w-full h-full",post:t,isHover:r=!1})=>{let{featuredImage:a,postType:l,videoUrl:n,galleryImgs:o,audioUrl:i,id:d,href:c}=t;return(0,s.jsxs)("div",{className:`nc-PostFeaturedMedia relative ${e}`,children:["gallery"!==l&&s.jsx(u(),{alt:"featured",fill:!0,className:"object-cover",src:a,sizes:"(max-width: 600px) 480px, 800px"}),"gallery"===l?o?s.jsx(g,{href:c,galleryImgs:o,className:"absolute inset-0 z-10",galleryClass:"absolute inset-0",ratioClass:"absolute inset-0"}):null:"video"===l&&n&&r?s.jsx(k,{isHover:!0,videoUrl:n}):"audio"===l&&i?s.jsx(N,{post:t}):"video"===l||"audio"===l?s.jsx("span",{className:"absolute inset-0 flex items-center justify-center ",children:s.jsx(y.Z,{className:"hover:scale-105 transform cursor-pointer transition-transform",postType:l})}):null,"gallery"!==l&&s.jsx(m(),{href:c,className:`block absolute inset-0 ${l&&"standard"!==l?"":"bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"}`})]})}},66368:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(53854);r(34218);let a=({className:e="",postType:t="standard",onClick:r,wrapSize:a="w-11 h-11",iconSize:l="w-6 h-6"})=>s.jsx("div",{className:`nc-PostTypeFeaturedIcon ${e}`,"data-nc-id":"PostTypeFeaturedIcon",onClick:r,children:!!t&&"standard"!==t&&s.jsx("span",{className:`bg-neutral-900/-60 rounded-full flex items-center justify-center text-xl text-white border border-white ${a} `,children:"video"===t?s.jsx("svg",{className:l,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})}):"audio"===t?(0,s.jsxs)("svg",{className:l,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M20.8398 16.8V12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M9.40039 9.5199L20.8404 6.3999",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):"gallery"===t?(0,s.jsxs)("svg",{className:l,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{d:"M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}):null})})},32333:(e,t,r)=>{r.d(t,{o:()=>s});let s=(e=1e3,t=0)=>({enter:r=>({x:r>0?e:-e,opacity:t}),center:{x:0,opacity:1},exit:r=>({x:r<0?e:-e,opacity:t})})},83295:(e,t,r)=>{r.d(t,{Z:()=>s});let s={src:"/_next/static/media/icon-playing.a99d566c.gif",height:36,width:36,blurWidth:0,blurHeight:0}}};