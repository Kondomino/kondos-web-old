"use strict";exports.id=7727,exports.ids=[7727],exports.modules={21182:(e,t,a)=>{a.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var s=a(30784);a(9885);var r=a(50848);let __WEBPACK_DEFAULT_EXPORT__=({className:e="",bookmarkClass:t,hidenReadingTime:a=!0,readingTime:l=3})=>(0,s.jsxs)("div",{className:`nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ${e}`,children:[!a&&!!l&&(0,s.jsxs)("span",{children:[l," min read"]}),s.jsx(r.default,{containerClassName:t})]})},7783:(e,t,a)=>{a.r(t),a.d(t,{default:()=>PostFeaturedMedia_PostFeaturedMedia});var s=a(30784),r=a(9885),l=a(9317),i=a(7537),o=a(19967),n=a(30569),d=a(81688),c=a(52451),u=a.n(c),x=a(77714),m=a(60614),h=a(11440),p=a.n(h);function GallerySlider({className:e="relative z-10",galleryImgs:t,ratioClass:a="relative aspect-w-4 aspect-h-3",imageClass:c="",galleryClass:h="rounded-xl",href:j,navigation:b=!0}){let[f,g]=(0,r.useState)(!1),[v,y]=(0,r.useState)(0),[N,w]=(0,r.useState)(0);function changePhotoId(e){e>v?w(1):w(-1),y(e)}let P=(0,x.QS)({onSwipedLeft:()=>{v<t?.length-1&&changePhotoId(v+1)},onSwipedRight:()=>{v>0&&changePhotoId(v-1)},trackMouse:!0}),_=t[v];return s.jsx(o.A,{transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},children:(0,s.jsxs)("div",{className:` group group/cardGallerySlider ${e}`,...P,children:[s.jsx("div",{className:`w-full overflow-hidden ${h}`,children:s.jsx(p(),{href:j||"/",className:`flex items-center justify-center ${a}`,children:s.jsx(n.M,{initial:!1,custom:N,children:s.jsx(d.E.div,{custom:N,variants:(0,m.o)(300,1),initial:"enter",animate:"center",exit:"exit",className:"absolute inset-0",children:s.jsx(u(),{src:_||"",fill:!0,alt:"listing card gallery",className:`object-cover ${c}`,onLoad:()=>g(!0),sizes:"(max-width: 1025px) 100vw, 300px"})},v)})})}),(0,s.jsxs)(s.Fragment,{children:[f&&b&&(0,s.jsxs)("div",{className:"opacity-0 group-hover/cardGallerySlider:opacity-100 transition-opacity ",children:[v>0&&s.jsx("button",{className:"absolute w-8 h-8 start-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none z-10",style:{transform:"translate3d(0, 0, 0)"},onClick:()=>changePhotoId(v-1),children:s.jsx(l.Z,{className:"h-4 w-4 rtl:rotate-180"})}),v+1<t.length&&s.jsx("button",{className:"absolute w-8 h-8 end-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none z-10",style:{transform:"translate3d(0, 0, 0)"},onClick:()=>changePhotoId(v+1),children:s.jsx(i.Z,{className:"h-4 w-4 rtl:rotate-180"})})]}),s.jsx("div",{className:"absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-neutral-900 opacity-50 rounded-b-lg"}),s.jsx("div",{className:"flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-1.5 rtl:space-x-reverse",children:t.map((e,t)=>s.jsx("button",{className:`w-1.5 h-1.5 rounded-full ${t===v?"bg-white":"bg-white/60 "}`,onClick:()=>changePhotoId(t)},t))})]})]})})}let LoadingVideo_LoadingVideo=({className:e="",chilClassName:t="bg-white"})=>(0,s.jsxs)("div",{className:`nc-LoadingVideo lds-ellipsis ${e}`,children:[s.jsx("div",{className:t}),s.jsx("div",{className:t}),s.jsx("div",{className:t}),s.jsx("div",{className:t})]});var j=a(98601),b=a(46267),f=a(55400);let PostFeaturedMedia_MediaVideo=({videoUrl:e,isHover:t})=>{let[a,l]=(0,r.useState)(!0),[i,o]=(0,r.useState)(!0),[n,d]=(0,r.useState)(!1),c=null;return(0,r.useEffect)(()=>()=>{c&&clearTimeout(c)},[c]),(0,s.jsxs)("div",{className:"nc-MediaVideo",children:[s.jsx(f.Z,{url:e,muted:a,playing:t,style:{opacity:n?1:0},className:"absolute bg-neutral-900 inset-0 transition-opacity",width:"100%",height:"100%",onStart:()=>{d(!0),c&&clearTimeout(c),c=setTimeout(()=>{o(!1)},2500)}}),s.jsx("div",{className:`${n?"opacity-0":"opacity-100"} absolute bg-neutral-900/30 flex items-center justify-center inset-0 transition-opacity`,children:s.jsx(LoadingVideo_LoadingVideo,{})}),n&&s.jsx("div",{className:`absolute z-20 bottom-2 start-2 h-6 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-sm transform transition-transform ${i?"ps-[6px] pe-2":"w-6 hover:scale-125"}`,onClick:()=>l(!a),children:a?(0,s.jsxs)(s.Fragment,{children:[s.jsx(j.Z,{className:"w-3.5 h-3.5"}),i&&s.jsx("span",{className:"ms-1 inline-block text-[9px]",children:"Click here to unmute"})]}):s.jsx(b.Z,{className:"w-3.5 h-3.5"})})]})};var g=a(71528),v=a(83950);let PostFeaturedMedia_MediaAudio=({post:e})=>s.jsx(s.Fragment,{children:s.jsx(v.Z,{className:"absolute inset-0 bg-neutral-900/30 flex items-center justify-center",post:e})}),PostFeaturedMedia_PostFeaturedMedia=({className:e="w-full h-full",post:t,isHover:a=!1})=>{let{featuredImage:r,postType:l,videoUrl:i,galleryImgs:o,audioUrl:n,id:d,href:c}=t;return(0,s.jsxs)("div",{className:`nc-PostFeaturedMedia relative ${e}`,children:["gallery"!==l&&s.jsx(u(),{alt:"featured",fill:!0,className:"object-cover",src:r,sizes:"(max-width: 600px) 480px, 800px"}),"gallery"===l?o?s.jsx(GallerySlider,{href:c,galleryImgs:o,className:"absolute inset-0 z-10",galleryClass:"absolute inset-0",ratioClass:"absolute inset-0"}):null:"video"===l&&i&&a?s.jsx(PostFeaturedMedia_MediaVideo,{isHover:!0,videoUrl:i}):"audio"===l&&n?s.jsx(PostFeaturedMedia_MediaAudio,{post:t}):"video"===l||"audio"===l?s.jsx("span",{className:"absolute inset-0 flex items-center justify-center ",children:s.jsx(g.Z,{className:"hover:scale-105 transform cursor-pointer transition-transform",postType:l})}):null,"gallery"!==l&&s.jsx(p(),{href:c,className:`block absolute inset-0 ${l&&"standard"!==l?"":"bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"}`})]})}}};