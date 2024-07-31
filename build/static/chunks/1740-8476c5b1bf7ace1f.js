(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1740],{80679:function(v,g,E){"use strict";Object.defineProperty(g,"__esModule",{value:!0}),function(v,g){for(var E in g)Object.defineProperty(v,E,{enumerable:!0,get:g[E]})}(g,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return R}});let w=E(21024),O=E(7929),S=E(92637),L=E(90413),k=w._(E(69950)),unstable_getImgProps=v=>{(0,S.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:g}=(0,O.getImgProps)(v,{defaultLoader:k.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[v,E]of Object.entries(g))void 0===E&&delete g[v];return{props:g}},R=L.Image},16691:function(v,g,E){v.exports=E(80679)},44523:function(v,g,E){"use strict";E.d(g,{dk:function(){return z},fw:function(){return U},zH:function(){return G}});var w=E(20955),O=E(12950),S=E(32600),L=E(46618),k=E(48279),R=E(11931);let Y=(0,w.createContext)(null);function G(){var v,g;return null!=(g=null==(v=(0,w.useContext)(Y))?void 0:v.value)?g:void 0}function U(){let[v,g]=(0,w.useState)([]);return[v.length>0?v.join(" "):void 0,(0,w.useMemo)(()=>function(v){let E=(0,O.z)(v=>(g(g=>[...g,v]),()=>g(g=>{let E=g.slice(),w=E.indexOf(v);return -1!==w&&E.splice(w,1),E}))),S=(0,w.useMemo)(()=>({register:E,slot:v.slot,name:v.name,props:v.props,value:v.value}),[E,v.slot,v.name,v.props,v.value]);return w.createElement(Y.Provider,{value:S},v.children)},[g])]}Y.displayName="DescriptionContext";let z=Object.assign((0,R.yV)(function(v,g){let E=(0,w.useId)(),O=(0,k.B)(),{id:z=`headlessui-description-${E}`,...$}=v,B=function f(){let v=(0,w.useContext)(Y);if(null===v){let v=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(v,f),v}return v}(),q=(0,L.T)(g);(0,S.e)(()=>B.register(z),[z,B.register]);let X=O||!1,Z=(0,w.useMemo)(()=>({...B.slot,disabled:X}),[B.slot,X]),K={ref:q,...B.props,id:z};return(0,R.sY)({ourProps:K,theirProps:$,slot:Z,defaultTag:"p",name:B.name||"Description"})}),{})},93850:function(v,g,E){"use strict";E.d(g,{R:function(){return O}});var w,O=((w=O||{}).Space=" ",w.Enter="Enter",w.Escape="Escape",w.Backspace="Backspace",w.Delete="Delete",w.ArrowLeft="ArrowLeft",w.ArrowUp="ArrowUp",w.ArrowRight="ArrowRight",w.ArrowDown="ArrowDown",w.Home="Home",w.End="End",w.PageUp="PageUp",w.PageDown="PageDown",w.Tab="Tab",w)},87250:function(v,g,E){"use strict";E.d(g,{h_:function(){return er},kF:function(){return ee},wA:function(){return en}});var w=E(20955),O=E(3190),S=E(12950),L=E(32600),k=E(33051),R=E(57728),Y=E(48957),z=E(46618),$=E(64705),B=E(52057),q=E(11931);let X=w.Fragment,Z=(0,q.yV)(function(v,g){let E=(0,w.useRef)(null),S=(0,z.T)((0,z.h)(v=>{E.current=v}),g),Z=(0,R.i)(E),K=function(v){let g=(0,$.n)(),E=(0,w.useContext)(J),O=(0,R.i)(v),[S,L]=(0,w.useState)(()=>{var v;if(!g&&null!==E)return null!=(v=E.current)?v:null;if(B.O.isServer)return null;let w=null==O?void 0:O.getElementById("headlessui-portal-root");if(w)return w;if(null===O)return null;let S=O.createElement("div");return S.setAttribute("id","headlessui-portal-root"),O.body.appendChild(S)});return(0,w.useEffect)(()=>{null!==S&&(null!=O&&O.body.contains(S)||null==O||O.body.appendChild(S))},[S,O]),(0,w.useEffect)(()=>{g||null!==E&&L(E.current)},[E,L,g]),S}(E),[et]=(0,w.useState)(()=>{var v;return B.O.isServer?null:null!=(v=null==Z?void 0:Z.createElement("div"))?v:null}),en=(0,w.useContext)(Q),er=(0,Y.H)();return(0,L.e)(()=>{!K||!et||K.contains(et)||(et.setAttribute("data-headlessui-portal",""),K.appendChild(et))},[K,et]),(0,L.e)(()=>{if(et&&en)return en.register(et)},[en,et]),(0,k.L)(()=>{var v;K&&et&&(et instanceof Node&&K.contains(et)&&K.removeChild(et),K.childNodes.length<=0&&(null==(v=K.parentElement)||v.removeChild(K)))}),er&&K&&et?(0,O.createPortal)((0,q.sY)({ourProps:{ref:S},theirProps:v,slot:{},defaultTag:X,name:"Portal"}),et):null}),K=w.Fragment,J=(0,w.createContext)(null),Q=(0,w.createContext)(null);function ee(){let v=(0,w.useContext)(Q),g=(0,w.useRef)([]),E=(0,S.z)(E=>(g.current.push(E),v&&v.register(E),()=>O(E))),O=(0,S.z)(E=>{let w=g.current.indexOf(E);-1!==w&&g.current.splice(w,1),v&&v.unregister(E)}),L=(0,w.useMemo)(()=>({register:E,unregister:O,portals:g}),[E,O,g]);return[g,(0,w.useMemo)(()=>function({children:v}){return w.createElement(Q.Provider,{value:L},v)},[L])]}let et=(0,q.yV)(function(v,g){let E=(0,z.T)(g),{enabled:O=!0,...S}=v;return O?w.createElement(Z,{...S,ref:E}):(0,q.sY)({ourProps:{ref:E},theirProps:S,slot:{},defaultTag:X,name:"Portal"})}),en=(0,q.yV)(function(v,g){let{target:E,...O}=v,S={ref:(0,z.T)(g)};return w.createElement(J.Provider,{value:E},(0,q.sY)({ourProps:S,theirProps:O,defaultTag:K,name:"Popover.Group"}))}),er=Object.assign(et,{Group:en})},75786:function(v,g,E){"use strict";E.d(g,{u:function(){return ea},x:function(){return el}});var w,O=E(20955),S=E(82769),L=E(12950),k=E(80634),R=E(32600),Y=E(61858),z=E(43559),$=E(48957),B=E(46618),q=E(48617),X=E(25306),Z=E(63960),K=E(60597),J=E(11931);function le(v){var g;return!!(v.enter||v.enterFrom||v.enterTo||v.leave||v.leaveFrom||v.leaveTo)||(null!=(g=v.as)?g:er)!==O.Fragment||1===O.Children.count(v.children)}let Q=(0,O.createContext)(null);Q.displayName="TransitionContext";var et=((w=et||{}).Visible="visible",w.Hidden="hidden",w);let en=(0,O.createContext)(null);function M(v){return"children"in v?M(v.children):v.current.filter(({el:v})=>null!==v.current).filter(({state:v})=>"visible"===v).length>0}function ae(v,g){let E=(0,Y.E)(v),w=(0,O.useRef)([]),R=(0,k.t)(),z=(0,S.G)(),$=(0,L.z)((v,g=J.l4.Hidden)=>{let O=w.current.findIndex(({el:g})=>g===v);-1!==O&&((0,K.E)(g,{[J.l4.Unmount](){w.current.splice(O,1)},[J.l4.Hidden](){w.current[O].state="hidden"}}),z.microTask(()=>{var v;!M(w)&&R.current&&(null==(v=E.current)||v.call(E))}))}),B=(0,L.z)(v=>{let g=w.current.find(({el:g})=>g===v);return g?"visible"!==g.state&&(g.state="visible"):w.current.push({el:v,state:"visible"}),()=>$(v,J.l4.Unmount)}),q=(0,O.useRef)([]),X=(0,O.useRef)(Promise.resolve()),Z=(0,O.useRef)({enter:[],leave:[]}),Q=(0,L.z)((v,E,w)=>{q.current.splice(0),g&&(g.chains.current[E]=g.chains.current[E].filter(([g])=>g!==v)),null==g||g.chains.current[E].push([v,new Promise(v=>{q.current.push(v)})]),null==g||g.chains.current[E].push([v,new Promise(v=>{Promise.all(Z.current[E].map(([v,g])=>g)).then(()=>v())})]),"enter"===E?X.current=X.current.then(()=>null==g?void 0:g.wait.current).then(()=>w(E)):w(E)}),et=(0,L.z)((v,g,E)=>{Promise.all(Z.current[g].splice(0).map(([v,g])=>g)).then(()=>{var v;null==(v=q.current.shift())||v()}).then(()=>E(g))});return(0,O.useMemo)(()=>({children:w,register:B,unregister:$,onStart:Q,onStop:et,wait:X,chains:Z}),[B,$,w,Q,et,Z,X])}en.displayName="NestingContext";let er=O.Fragment,ei=J.VN.RenderStrategy,eu=(0,J.yV)(function(v,g){let{show:E,appear:w=!1,unmount:S=!0,...k}=v,Y=(0,O.useRef)(null),q=le(v),Z=(0,B.T)(...q?[Y,g]:null===g?[]:[g]);(0,$.H)();let K=(0,X.oJ)();if(void 0===E&&null!==K&&(E=(K&X.ZM.Open)===X.ZM.Open),void 0===E)throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[et,er]=(0,O.useState)(E?"visible":"hidden"),eu=ae(()=>{E||er("hidden")}),[el,ea]=(0,O.useState)(!0),es=(0,O.useRef)([E]);(0,R.e)(()=>{!1!==el&&es.current[es.current.length-1]!==E&&(es.current.push(E),ea(!1))},[es,E]);let ec=(0,O.useMemo)(()=>({show:E,appear:w,initial:el}),[E,w,el]);(0,z.m)(E,Y,()=>er("hidden")),(0,R.e)(()=>{E?er("visible"):M(eu)||null===Y.current||er("hidden")},[E,eu]);let ed={unmount:S},ef=(0,L.z)(()=>{var g;el&&ea(!1),null==(g=v.beforeEnter)||g.call(v)}),em=(0,L.z)(()=>{var g;el&&ea(!1),null==(g=v.beforeLeave)||g.call(v)});return O.createElement(en.Provider,{value:eu},O.createElement(Q.Provider,{value:ec},(0,J.sY)({ourProps:{...ed,as:O.Fragment,children:O.createElement(eo,{ref:Z,...ed,...k,beforeEnter:ef,beforeLeave:em})},theirProps:{},defaultTag:O.Fragment,features:ei,visible:"visible"===et,name:"Transition"})))}),eo=(0,J.yV)(function(v,g){var E,w;let{transition:S=!0,beforeEnter:k,afterEnter:Y,beforeLeave:z,afterLeave:et,enter:eu,enterFrom:eo,enterTo:el,entered:ea,leave:es,leaveFrom:ec,leaveTo:ed,...ef}=v,em=(0,O.useRef)(null),ep=le(v),eh=(0,B.T)(...ep?[em,g]:null===g?[]:[g]),ev=null==(E=ef.unmount)||E?J.l4.Unmount:J.l4.Hidden,{show:eg,appear:eE,initial:eb}=function(){let v=(0,O.useContext)(Q);if(null===v)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return v}(),[ey,ew]=(0,O.useState)(eg?"visible":"hidden"),eO=function(){let v=(0,O.useContext)(en);if(null===v)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return v}(),{register:eP,unregister:eT}=eO;(0,R.e)(()=>eP(em),[eP,em]),(0,R.e)(()=>{if(ev===J.l4.Hidden&&em.current){if(eg&&"visible"!==ey){ew("visible");return}return(0,K.E)(ey,{hidden:()=>eT(em),visible:()=>eP(em)})}},[ey,em,eP,eT,eg,ev]);let eS=(0,$.H)();(0,R.e)(()=>{if(ep&&eS&&"visible"===ey&&null===em.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[em,ey,eS,ep]);let ex=eb&&!eE,eA=eE&&eg&&eb,eC=(0,O.useRef)(!1),eN=ae(()=>{eC.current||(ew("hidden"),eT(em))},eO),eF=(0,L.z)(v=>{eC.current=!0,eN.onStart(em,v?"enter":"leave",v=>{"enter"===v?null==k||k():"leave"===v&&(null==z||z())})}),eM=(0,L.z)(v=>{let g=v?"enter":"leave";eC.current=!1,eN.onStop(em,g,v=>{"enter"===v?null==Y||Y():"leave"===v&&(null==et||et())}),"leave"!==g||M(eN)||(ew("hidden"),eT(em))});(0,O.useEffect)(()=>{ep&&S||(eF(eg),eM(eg))},[eg,ep,S]);let eL=!(!S||!ep||!eS||ex),[,ek]=(0,q.Y)(eL,em,eg,{start:eF,end:eM}),eR=(0,J.oA)({ref:eh,className:(null==(w=(0,Z.A)(ef.className,eA&&eu,eA&&eo,ek.enter&&eu,ek.enter&&ek.closed&&eo,ek.enter&&!ek.closed&&el,ek.leave&&es,ek.leave&&!ek.closed&&ec,ek.leave&&ek.closed&&ed,!ek.transition&&eg&&ea))?void 0:w.trim())||void 0,...(0,q.X)(ek)}),eI=0;return"visible"===ey&&(eI|=X.ZM.Open),"hidden"===ey&&(eI|=X.ZM.Closed),ek.enter&&(eI|=X.ZM.Opening),ek.leave&&(eI|=X.ZM.Closing),O.createElement(en.Provider,{value:eN},O.createElement(X.up,{value:eI},(0,J.sY)({ourProps:eR,theirProps:ef,defaultTag:er,features:ei,visible:"visible"===ey,name:"Transition.Child"})))}),el=(0,J.yV)(function(v,g){let E=null!==(0,O.useContext)(Q),w=null!==(0,X.oJ)();return O.createElement(O.Fragment,null,!E&&w?O.createElement(eu,{ref:g,...v}):O.createElement(eo,{ref:g,...v}))}),ea=Object.assign(eu,{Child:el,Root:eu})},82769:function(v,g,E){"use strict";E.d(g,{G:function(){return p}});var w=E(20955),O=E(85390);function p(){let[v]=(0,w.useState)(O.k);return(0,w.useEffect)(()=>()=>v.dispose(),[v]),v}},12950:function(v,g,E){"use strict";E.d(g,{z:function(){return o}});var w=E(20955),O=E(61858);let o=function(v){let g=(0,O.E)(v);return w.useCallback((...v)=>g.current(...v),[g])}},21304:function(v,g,E){"use strict";E.d(g,{s:function(){return y}});var w=E(85390),O=E(54851),S=E(92590),L=E(32600);let k=new Map,R=new Map;function h(v){var g;let E=null!=(g=R.get(v))?g:0;return R.set(v,E+1),0!==E||(k.set(v,{"aria-hidden":v.getAttribute("aria-hidden"),inert:v.inert}),v.setAttribute("aria-hidden","true"),v.inert=!0),()=>(function(v){var g;let E=null!=(g=R.get(v))?g:1;if(1===E?R.delete(v):R.set(v,E-1),1!==E)return;let w=k.get(v);w&&(null===w["aria-hidden"]?v.removeAttribute("aria-hidden"):v.setAttribute("aria-hidden",w["aria-hidden"]),v.inert=w.inert,k.delete(v))})(v)}function y(v,{allowed:g,disallowed:E}={}){let k=(0,S.g)(v,"inert-others");(0,L.e)(()=>{var v,S;if(!k)return;let L=(0,w.k)();for(let g of null!=(v=null==E?void 0:E())?v:[])g&&L.add(h(g));let R=null!=(S=null==g?void 0:g())?S:[];for(let v of R){if(!v)continue;let g=(0,O.r)(v);if(!g)continue;let E=v.parentElement;for(;E&&E!==g.body;){for(let v of E.children)R.some(g=>v.contains(g))||L.add(h(v));E=E.parentElement}}return L.dispose},[k,g,E])}},80634:function(v,g,E){"use strict";E.d(g,{t:function(){return f}});var w=E(20955),O=E(32600);function f(){let v=(0,w.useRef)(!1);return(0,O.e)(()=>(v.current=!0,()=>{v.current=!1}),[]),v}},92590:function(v,g,E){"use strict";E.d(g,{g:function(){return x}});var w=E(20955);let a=class a extends Map{constructor(v){super(),this.factory=v}get(v){let g=super.get(v);return void 0===g&&(g=this.factory(v),this.set(v,g)),g}};var O=E(57954),S=E(32600),L=E(31946);let k=new a(()=>(0,O.M)(()=>[],{ADD(v){return this.includes(v)?this:[...this,v]},REMOVE(v){let g=this.indexOf(v);if(-1===g)return this;let E=this.slice();return E.splice(g,1),E}}));function x(v,g){let E=k.get(g),O=(0,w.useId)(),R=(0,L.o)(E);if((0,S.e)(()=>{if(v)return E.dispatch("ADD",O),()=>E.dispatch("REMOVE",O)},[E,v]),!v)return!1;let Y=R.indexOf(O),z=R.length;return -1===Y&&(Y=z,z+=1),Y===z-1}},32600:function(v,g,E){"use strict";E.d(g,{e:function(){return n}});var w=E(20955),O=E(52057);let n=(v,g)=>{O.O.isServer?(0,w.useEffect)(v,g):(0,w.useLayoutEffect)(v,g)}},61858:function(v,g,E){"use strict";E.d(g,{E:function(){return s}});var w=E(20955),O=E(32600);function s(v){let g=(0,w.useRef)(v);return(0,O.e)(()=>{g.current=v},[v]),g}},43559:function(v,g,E){"use strict";E.d(g,{m:function(){return m}});var w=E(20955),O=E(85390),S=E(61858);function m(v,g,E){let L=(0,S.E)(v=>{let g=v.getBoundingClientRect();0===g.x&&0===g.y&&0===g.width&&0===g.height&&E()});(0,w.useEffect)(()=>{if(!v)return;let E=null===g?null:g instanceof HTMLElement?g:g.current;if(!E)return;let w=(0,O.k)();if("undefined"!=typeof ResizeObserver){let v=new ResizeObserver(()=>L.current(E));v.observe(E),w.add(()=>v.disconnect())}if("undefined"!=typeof IntersectionObserver){let v=new IntersectionObserver(()=>L.current(E));v.observe(E),w.add(()=>v.disconnect())}return()=>w.dispose()},[g,L,v])}},33051:function(v,g,E){"use strict";E.d(g,{L:function(){return c}});var w=E(20955),O=E(55195),S=E(12950);function c(v){let g=(0,S.z)(v),E=(0,w.useRef)(!1);(0,w.useEffect)(()=>(E.current=!1,()=>{E.current=!0,(0,O.Y)(()=>{E.current&&g()})}),[g])}},90583:function(v,g,E){"use strict";E.d(g,{O:function(){return F}});var w=E(20955),O=E(65410),S=E(34644),L=E(61858);function i(v,g,E,O){let S=(0,L.E)(E);(0,w.useEffect)(()=>{if(v)return document.addEventListener(g,r,O),()=>document.removeEventListener(g,r,O);function r(v){S.current(v)}},[v,g,O])}var k=E(92590),R=E(27976);function F(v,g,E){let Y=(0,k.g)(v,"outside-click"),z=(0,L.E)(E),$=(0,w.useCallback)(function(v,E){if(v.defaultPrevented)return;let w=E(v);if(null!==w&&w.getRootNode().contains(w)&&w.isConnected){for(let E of function i(v){return"function"==typeof v?i(v()):Array.isArray(v)||v instanceof Set?v:[v]}(g)){if(null===E)continue;let g=E instanceof HTMLElement?E:E.current;if(null!=g&&g.contains(w)||v.composed&&v.composedPath().includes(g))return}return(0,O.sP)(w,O.tJ.Loose)||-1===w.tabIndex||v.preventDefault(),z.current(v,w)}},[z]),B=(0,w.useRef)(null);i(Y,"pointerdown",v=>{var g,E;B.current=(null==(E=null==(g=v.composedPath)?void 0:g.call(v))?void 0:E[0])||v.target},!0),i(Y,"mousedown",v=>{var g,E;B.current=(null==(E=null==(g=v.composedPath)?void 0:g.call(v))?void 0:E[0])||v.target},!0),i(Y,"click",v=>{(0,S.tq)()||B.current&&($(v,()=>B.current),B.current=null)},!0);let q=(0,w.useRef)({x:0,y:0});i(Y,"touchstart",v=>{q.current.x=v.touches[0].clientX,q.current.y=v.touches[0].clientY},!0),i(Y,"touchend",v=>{let g={x:v.changedTouches[0].clientX,y:v.changedTouches[0].clientY};if(!(Math.abs(g.x-q.current.x)>=30||Math.abs(g.y-q.current.y)>=30))return $(v,()=>v.target instanceof HTMLElement?v.target:null)},!0),(0,R.s)(Y,"blur",v=>$(v,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}},57728:function(v,g,E){"use strict";E.d(g,{i:function(){return n}});var w=E(20955),O=E(54851);function n(...v){return(0,w.useMemo)(()=>(0,O.r)(...v),[...v])}},31218:function(v,g,E){"use strict";E.d(g,{P:function(){return f}});var w=E(31946),O=E(32600),S=E(85390),L=E(57954),k=E(34644);let R=(0,L.M)(()=>new Map,{PUSH(v,g){var E;let w=null!=(E=this.get(v))?E:{doc:v,count:0,d:(0,S.k)(),meta:new Set};return w.count++,w.meta.add(g),this.set(v,w),this},POP(v,g){let E=this.get(v);return E&&(E.count--,E.meta.delete(g)),this},SCROLL_PREVENT({doc:v,d:g,meta:E}){let w;let O={doc:v,d:g,meta:function(v){let g={};for(let E of v)Object.assign(g,E(g));return g}(E)},L=[(0,k.gn)()?{before({doc:v,d:g,meta:E}){function o(v){return E.containers.flatMap(v=>v()).some(g=>g.contains(v))}g.microTask(()=>{var E;if("auto"!==window.getComputedStyle(v.documentElement).scrollBehavior){let E=(0,S.k)();E.style(v.documentElement,"scrollBehavior","auto"),g.add(()=>g.microTask(()=>E.dispose()))}let w=null!=(E=window.scrollY)?E:window.pageYOffset,O=null;g.addEventListener(v,"click",g=>{if(g.target instanceof HTMLElement)try{let E=g.target.closest("a");if(!E)return;let{hash:w}=new URL(E.href),S=v.querySelector(w);S&&!o(S)&&(O=S)}catch{}},!0),g.addEventListener(v,"touchstart",v=>{if(v.target instanceof HTMLElement){if(o(v.target)){let E=v.target;for(;E.parentElement&&o(E.parentElement);)E=E.parentElement;g.style(E,"overscrollBehavior","contain")}else g.style(v.target,"touchAction","none")}}),g.addEventListener(v,"touchmove",v=>{if(v.target instanceof HTMLElement&&"INPUT"!==v.target.tagName){if(o(v.target)){let g=v.target;for(;g.parentElement&&""!==g.dataset.headlessuiPortal&&!(g.scrollHeight>g.clientHeight||g.scrollWidth>g.clientWidth);)g=g.parentElement;""===g.dataset.headlessuiPortal&&v.preventDefault()}else v.preventDefault()}},{passive:!1}),g.add(()=>{var v;w!==(null!=(v=window.scrollY)?v:window.pageYOffset)&&window.scrollTo(0,w),O&&O.isConnected&&(O.scrollIntoView({block:"nearest"}),O=null)})})}}:{},{before({doc:v}){var g;let E=v.documentElement;w=Math.max(0,(null!=(g=v.defaultView)?g:window).innerWidth-E.clientWidth)},after({doc:v,d:g}){let E=v.documentElement,O=Math.max(0,E.clientWidth-E.offsetWidth),S=Math.max(0,w-O);g.style(E,"paddingRight",`${S}px`)}},{before({doc:v,d:g}){g.style(v.documentElement,"overflow","hidden")}}];L.forEach(({before:v})=>null==v?void 0:v(O)),L.forEach(({after:v})=>null==v?void 0:v(O))},SCROLL_ALLOW({d:v}){v.dispose()},TEARDOWN({doc:v}){this.delete(v)}});R.subscribe(()=>{let v=R.getSnapshot(),g=new Map;for(let[E]of v)g.set(E,E.documentElement.style.overflow);for(let E of v.values()){let v="hidden"===g.get(E.doc),w=0!==E.count;(w&&!v||!w&&v)&&R.dispatch(E.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",E),0===E.count&&R.dispatch("TEARDOWN",E)}});var Y=E(92590);function f(v,g,E=()=>[document.body]){!function(v,g,E=()=>({containers:[]})){let S=(0,w.o)(R),L=g?S.get(g):void 0;L&&L.count,(0,O.e)(()=>{if(!(!g||!v))return R.dispatch("PUSH",g,E),()=>R.dispatch("POP",g,E)},[v,g])}((0,Y.g)(v,"scroll-lock"),g,v=>{var g;return{containers:[...null!=(g=v.containers)?g:[],E]}})}},48957:function(v,g,E){"use strict";E.d(g,{H:function(){return l}});var w,O=E(20955),S=E(52057);function l(){let v;let g=(v="undefined"==typeof document,(0,(w||(w=E.t(O,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!v)),[L,k]=O.useState(S.O.isHandoffComplete);return L&&!1===S.O.isHandoffComplete&&k(!1),O.useEffect(()=>{!0!==L&&k(!0)},[L]),O.useEffect(()=>S.O.handoff(),[]),!g&&L}},31946:function(v,g,E){"use strict";E.d(g,{o:function(){return o}});var w=E(20955);function o(v){return(0,w.useSyncExternalStore)(v.subscribe,v.getSnapshot,v.getSnapshot)}},46618:function(v,g,E){"use strict";E.d(g,{T:function(){return y},h:function(){return T}});var w=E(20955),O=E(12950);let S=Symbol();function T(v,g=!0){return Object.assign(v,{[S]:g})}function y(...v){let g=(0,w.useRef)(v);(0,w.useEffect)(()=>{g.current=v},[v]);let E=(0,O.z)(v=>{for(let E of g.current)null!=E&&("function"==typeof E?E(v):E.current=v)});return v.every(v=>null==v||(null==v?void 0:v[S]))?void 0:E}},48617:function(v,g,E){"use strict";E.d(g,{X:function(){return A},Y:function(){return V}});var w,O=E(20955),S=E(85390),L=E(82769),k=E(32600),R=((w=R||{})[w.None=0]="None",w[w.Closed=1]="Closed",w[w.Enter=2]="Enter",w[w.Leave=4]="Leave",w);function A(v){let g={};for(let E in v)!0===v[E]&&(g[`data-${E}`]="");return g}function V(v,g,E,w){let[R,Y]=(0,O.useState)(E),{hasFlag:z,addFlag:$,removeFlag:B}=function(v=0){let[g,E]=(0,O.useState)(v),w=(0,O.useCallback)(v=>E(v),[g]),S=(0,O.useCallback)(v=>E(g=>g|v),[g]),L=(0,O.useCallback)(v=>(g&v)===v,[g]);return{flags:g,setFlag:w,addFlag:S,hasFlag:L,removeFlag:(0,O.useCallback)(v=>E(g=>g&~v),[E]),toggleFlag:(0,O.useCallback)(v=>E(g=>g^v),[E])}}(v&&R?3:0),q=(0,O.useRef)(!1),X=(0,O.useRef)(!1),Z=(0,L.G)();return(0,k.e)(function p(){var O;if(!v)return;E&&Y(!0);let L=g.current;return L?(null==(O=null==w?void 0:w.start)||O.call(w,E),function(v,{prepare:g,run:E,done:w,inFlight:O}){let L=(0,S.k)();return function(v,{inFlight:g,prepare:E}){if(null!=g&&g.current){E();return}let w=v.style.transition;v.style.transition="none",E(),v.offsetHeight,v.style.transition=w}(v,{prepare:g,inFlight:O}),L.nextFrame(()=>{L.add(function(v,g){let E;let w=(E={called:!1},(...v)=>{if(!E.called)return E.called=!0,g(...v)}),O=(0,S.k)();if(!v)return O.dispose;let{transitionDuration:L,transitionDelay:k}=getComputedStyle(v),[R,Y]=[L,k].map(v=>{let[g=0]=v.split(",").filter(Boolean).map(v=>v.includes("ms")?parseFloat(v):1e3*parseFloat(v)).sort((v,g)=>g-v);return g}),z=R+Y;if(0!==z){let g=O.group(E=>{let O=E.setTimeout(()=>{w(),E.dispose()},z);E.addEventListener(v,"transitionrun",S=>{S.target===S.currentTarget&&(O(),E.addEventListener(v,"transitioncancel",v=>{v.target===v.currentTarget&&(w(),g())}))})});O.addEventListener(v,"transitionend",v=>{v.target===v.currentTarget&&(w(),O.dispose())})}else w();return O.dispose}(v,w)),E()}),L.dispose}(L,{inFlight:q,prepare(){X.current?X.current=!1:X.current=q.current,q.current=!0,X.current||(E?($(3),B(4)):($(4),B(2)))},run(){X.current?E?(B(3),$(4)):(B(4),$(3)):E?B(1):$(1)},done(){var v;X.current&&"function"==typeof L.getAnimations&&L.getAnimations().length>0||(q.current=!1,B(7),E||Y(!1),null==(v=null==w?void 0:w.end)||v.call(w,E))}})):E?($(3),Z.nextFrame(()=>p())):void 0},[v,E,g,Z]),v?[R,{closed:z(1),enter:z(2),leave:z(4),transition:z(2)||z(4)}]:[E,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}},27976:function(v,g,E){"use strict";E.d(g,{s:function(){return s}});var w=E(20955),O=E(61858);function s(v,g,E,S){let L=(0,O.E)(E);(0,w.useEffect)(()=>{if(v)return window.addEventListener(g,r,S),()=>window.removeEventListener(g,r,S);function r(v){L.current(v)}},[v,g,S])}},48279:function(v,g,E){"use strict";E.d(g,{B:function(){return a}});var w=E(20955);let O=(0,w.createContext)(void 0);function a(){return(0,w.useContext)(O)}},81359:function(v,g,E){"use strict";E.d(g,{Mt:function(){return j},yd:function(){return c}});var w=E(20955),O=E(3190),S=E(82769),L=E(28871),k=E(11931),R=E(58227);let Y=(0,w.createContext)(null);function c({children:v}){let g=(0,w.useContext)(Y);if(!g)return w.createElement(w.Fragment,null,v);let{target:E}=g;return E?(0,O.createPortal)(w.createElement(w.Fragment,null,v),E):null}function j({data:v,form:g,disabled:E,onReset:O,overrides:Y}){let[z,$]=(0,w.useState)(null),B=(0,S.G)();return(0,w.useEffect)(()=>{if(O&&z)return B.addEventListener(z,"reset",O)},[z,g,O]),w.createElement(c,null,w.createElement(C,{setForm:$,formId:g}),(0,L.t)(v).map(([v,O])=>w.createElement(R._,{features:R.x.Hidden,...(0,k.oA)({key:v,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:g,disabled:E,name:v,value:O,...Y})})))}function C({setForm:v,formId:g}){return(0,w.useEffect)(()=>{if(g){let E=document.getElementById(g);E&&v(E)}},[v,g]),g?null:w.createElement(R._,{features:R.x.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:g=>{if(!g)return;let E=g.closest("form");E&&v(E)}})}},58227:function(v,g,E){"use strict";E.d(g,{_:function(){return L},x:function(){return S}});var w,O=E(11931),S=((w=S||{})[w.None=1]="None",w[w.Focusable=2]="Focusable",w[w.Hidden=4]="Hidden",w);let L=(0,O.yV)(function(v,g){var E;let{features:w=1,...S}=v,L={ref:g,"aria-hidden":(2&w)==2||(null!=(E=S["aria-hidden"])?E:void 0),hidden:(4&w)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&w)==4&&(2&w)!=2&&{display:"none"}}};return(0,O.sY)({ourProps:L,theirProps:S,slot:{},defaultTag:"div",name:"Hidden"})})},25306:function(v,g,E){"use strict";E.d(g,{ZM:function(){return L},oJ:function(){return u},up:function(){return c},uu:function(){return s}});var w,O=E(20955);let S=(0,O.createContext)(null);S.displayName="OpenClosedContext";var L=((w=L||{})[w.Open=1]="Open",w[w.Closed=2]="Closed",w[w.Closing=4]="Closing",w[w.Opening=8]="Opening",w);function u(){return(0,O.useContext)(S)}function c({value:v,children:g}){return O.createElement(S.Provider,{value:v},g)}function s({children:v}){return O.createElement(S.Provider,{value:null},v)}},64705:function(v,g,E){"use strict";E.d(g,{O:function(){return l},n:function(){return a}});var w=E(20955);let O=(0,w.createContext)(!1);function a(){return(0,w.useContext)(O)}function l(v){return w.createElement(O.Provider,{value:v.force},v.children)}},63960:function(v,g,E){"use strict";function t(...v){return Array.from(new Set(v.flatMap(v=>"string"==typeof v?v.split(" "):[]))).filter(Boolean).join(" ")}E.d(g,{A:function(){return t}})},85390:function(v,g,E){"use strict";E.d(g,{k:function(){return function o(){let v=[],g={addEventListener:(v,E,w,O)=>(v.addEventListener(E,w,O),g.add(()=>v.removeEventListener(E,w,O))),requestAnimationFrame(...v){let E=requestAnimationFrame(...v);return g.add(()=>cancelAnimationFrame(E))},nextFrame:(...v)=>g.requestAnimationFrame(()=>g.requestAnimationFrame(...v)),setTimeout(...v){let E=setTimeout(...v);return g.add(()=>clearTimeout(E))},microTask(...v){let E={current:!0};return(0,w.Y)(()=>{E.current&&v[0]()}),g.add(()=>{E.current=!1})},style(v,g,E){let w=v.style.getPropertyValue(g);return Object.assign(v.style,{[g]:E}),this.add(()=>{Object.assign(v.style,{[g]:w})})},group(v){let g=o();return v(g),this.add(()=>g.dispose())},add:g=>(v.includes(g)||v.push(g),()=>{let E=v.indexOf(g);if(E>=0)for(let g of v.splice(E,1))g()}),dispose(){for(let g of v.splice(0))g()}};return g}}});var w=E(55195)},52057:function(v,g,E){"use strict";E.d(g,{O:function(){return O}});var w=Object.defineProperty,d=(v,g,E)=>g in v?w(v,g,{enumerable:!0,configurable:!0,writable:!0,value:E}):v[g]=E,r=(v,g,E)=>(d(v,"symbol"!=typeof g?g+"":g,E),E);let O=new class{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(v){this.current!==v&&(this.handoffState="pending",this.currentId=0,this.current=v)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},65410:function(v,g,E){"use strict";E.d(g,{C5:function(){return I},EO:function(){return j},GO:function(){return b},TO:function(){return q},fE:function(){return X},jA:function(){return P},sP:function(){return A},tJ:function(){return K},wI:function(){return G},z2:function(){return _}});var w,O,S,L,k,R=E(85390),Y=E(60597),z=E(54851);let $=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(v=>`${v}:not([tabindex='-1'])`).join(","),B=["[data-autofocus]"].map(v=>`${v}:not([tabindex='-1'])`).join(",");var q=((w=q||{})[w.First=1]="First",w[w.Previous=2]="Previous",w[w.Next=4]="Next",w[w.Last=8]="Last",w[w.WrapAround=16]="WrapAround",w[w.NoScroll=32]="NoScroll",w[w.AutoFocus=64]="AutoFocus",w),X=((O=X||{})[O.Error=0]="Error",O[O.Overflow=1]="Overflow",O[O.Success=2]="Success",O[O.Underflow=3]="Underflow",O),Z=((S=Z||{})[S.Previous=-1]="Previous",S[S.Next=1]="Next",S);function b(v=document.body){return null==v?[]:Array.from(v.querySelectorAll($)).sort((v,g)=>Math.sign((v.tabIndex||Number.MAX_SAFE_INTEGER)-(g.tabIndex||Number.MAX_SAFE_INTEGER)))}var K=((L=K||{})[L.Strict=0]="Strict",L[L.Loose=1]="Loose",L);function A(v,g=0){var E;return v!==(null==(E=(0,z.r)(v))?void 0:E.body)&&(0,Y.E)(g,{0:()=>v.matches($),1(){let g=v;for(;null!==g;){if(g.matches($))return!0;g=g.parentElement}return!1}})}function G(v){let g=(0,z.r)(v);(0,R.k)().nextFrame(()=>{g&&!A(g.activeElement,0)&&I(v)})}var J=((k=J||{})[k.Keyboard=0]="Keyboard",k[k.Mouse=1]="Mouse",k);function I(v){null==v||v.focus({preventScroll:!0})}function _(v,g=v=>v){return v.slice().sort((v,E)=>{let w=g(v),O=g(E);if(null===w||null===O)return 0;let S=w.compareDocumentPosition(O);return S&Node.DOCUMENT_POSITION_FOLLOWING?-1:S&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function j(v,g){return P(b(),g,{relativeTo:v})}function P(v,g,{sorted:E=!0,relativeTo:w=null,skipElements:O=[]}={}){var S,L,k;let R=Array.isArray(v)?v.length>0?v[0].ownerDocument:document:v.ownerDocument,Y=Array.isArray(v)?E?_(v):v:64&g?function(v=document.body){return null==v?[]:Array.from(v.querySelectorAll(B)).sort((v,g)=>Math.sign((v.tabIndex||Number.MAX_SAFE_INTEGER)-(g.tabIndex||Number.MAX_SAFE_INTEGER)))}(v):b(v);O.length>0&&Y.length>1&&(Y=Y.filter(v=>!O.some(g=>null!=g&&"current"in g?(null==g?void 0:g.current)===v:g===v))),w=null!=w?w:R.activeElement;let z=(()=>{if(5&g)return 1;if(10&g)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),$=(()=>{if(1&g)return 0;if(2&g)return Math.max(0,Y.indexOf(w))-1;if(4&g)return Math.max(0,Y.indexOf(w))+1;if(8&g)return Y.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),q=32&g?{preventScroll:!0}:{},X=0,Z=Y.length,K;do{if(X>=Z||X+Z<=0)return 0;let v=$+X;if(16&g)v=(v+Z)%Z;else{if(v<0)return 3;if(v>=Z)return 1}null==(K=Y[v])||K.focus(q),X+=z}while(K!==R.activeElement);return 6&g&&null!=(k=null==(L=null==(S=K)?void 0:S.matches)?void 0:L.call(S,"textarea,input"))&&k&&K.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",v=>{v.metaKey||v.altKey||v.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",v=>{1===v.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===v.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},28871:function(v,g,E){"use strict";function f(v,g){return v?v+"["+g+"]":g}function p(v){var g,E;let w=null!=(g=null==v?void 0:v.form)?g:v.closest("form");if(w){for(let g of w.elements)if(g!==v&&("INPUT"===g.tagName&&"submit"===g.type||"BUTTON"===g.tagName&&"submit"===g.type||"INPUT"===g.nodeName&&"image"===g.type)){g.click();return}null==(E=w.requestSubmit)||E.call(w)}}E.d(g,{g:function(){return p},t:function(){return function e(v={},g=null,E=[]){for(let[w,O]of Object.entries(v))!function o(v,g,E){if(Array.isArray(E))for(let[w,O]of E.entries())o(v,f(g,w.toString()),O);else E instanceof Date?v.push([g,E.toISOString()]):"boolean"==typeof E?v.push([g,E?"1":"0"]):"string"==typeof E?v.push([g,E]):"number"==typeof E?v.push([g,`${E}`]):null==E?v.push([g,""]):e(E,g,v)}(E,f(g,w),O);return E}}})},60597:function(v,g,E){"use strict";function u(v,g,...E){if(v in g){let w=g[v];return"function"==typeof w?w(...E):w}let w=Error(`Tried to handle "${v}" but there is no handler defined. Only defined handlers are: ${Object.keys(g).map(v=>`"${v}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(w,u),w}E.d(g,{E:function(){return u}})},55195:function(v,g,E){"use strict";function t(v){"function"==typeof queueMicrotask?queueMicrotask(v):Promise.resolve().then(v).catch(v=>setTimeout(()=>{throw v}))}E.d(g,{Y:function(){return t}})},54851:function(v,g,E){"use strict";E.d(g,{r:function(){return u}});var w=E(52057);function u(v){return w.O.isServer?null:v instanceof Node?v.ownerDocument:null!=v&&v.hasOwnProperty("current")&&v.current instanceof Node?v.current.ownerDocument:document}},34644:function(v,g,E){"use strict";function t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function n(){return t()||/Android/gi.test(window.navigator.userAgent)}E.d(g,{gn:function(){return t},tq:function(){return n}})},11931:function(v,g,E){"use strict";E.d(g,{VN:function(){return R},Y2:function(){return I},dG:function(){return D},l4:function(){return Y},oA:function(){return m},sY:function(){return H},yV:function(){return W}});var w,O,S=E(20955),L=E(63960),k=E(60597),R=((w=R||{})[w.None=0]="None",w[w.RenderStrategy=1]="RenderStrategy",w[w.Static=2]="Static",w),Y=((O=Y||{})[O.Unmount=0]="Unmount",O[O.Hidden=1]="Hidden",O);function H({ourProps:v,theirProps:g,slot:E,defaultTag:w,features:O,visible:S=!0,name:L,mergeRefs:R}){R=null!=R?R:A;let Y=N(g,v);if(S)return b(Y,E,w,L,R);let z=null!=O?O:0;if(2&z){let{static:v=!1,...g}=Y;if(v)return b(g,E,w,L,R)}if(1&z){let{unmount:v=!0,...g}=Y;return(0,k.E)(v?0:1,{0:()=>null,1:()=>b({...g,hidden:!0,style:{display:"none"}},E,w,L,R)})}return b(Y,E,w,L,R)}function b(v,g={},E,w,O){let{as:k=E,children:R,refName:Y="ref",...z}=h(v,["unmount","static"]),$=void 0!==v.ref?{[Y]:v.ref}:{},B="function"==typeof R?R(g):R;"className"in z&&z.className&&"function"==typeof z.className&&(z.className=z.className(g)),z["aria-labelledby"]&&z["aria-labelledby"]===z.id&&(z["aria-labelledby"]=void 0);let q={};if(g){let v=!1,E=[];for(let[w,O]of Object.entries(g))"boolean"==typeof O&&(v=!0),!0===O&&E.push(w.replace(/([A-Z])/g,v=>`-${v.toLowerCase()}`));if(v)for(let v of(q["data-headlessui-state"]=E.join(" "),E))q[`data-${v}`]=""}if(k===S.Fragment&&(Object.keys(m(z)).length>0||Object.keys(m(q)).length>0)){if(!(0,S.isValidElement)(B)||Array.isArray(B)&&B.length>1){if(Object.keys(m(z)).length>0)throw Error(['Passing props on "Fragment"!',"",`The current component <${w} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(m(z)).concat(Object.keys(m(q))).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`))}else{let v=B.props,g=null==v?void 0:v.className,E="function"==typeof g?(...v)=>(0,L.A)(g(...v),z.className):(0,L.A)(g,z.className),w=E?{className:E}:{},k=N(B.props,m(h(z,["ref"])));for(let v in q)v in k&&delete q[v];return(0,S.cloneElement)(B,Object.assign({},k,q,$,{ref:O(B.ref,$.ref)},w))}}return(0,S.createElement)(k,Object.assign({},h(z,["ref"]),k!==S.Fragment&&$,k!==S.Fragment&&q),B)}function I(){let v=(0,S.useRef)([]),g=(0,S.useCallback)(g=>{for(let E of v.current)null!=E&&("function"==typeof E?E(g):E.current=g)},[]);return(...E)=>{if(!E.every(v=>null==v))return v.current=E,g}}function A(...v){return v.every(v=>null==v)?void 0:g=>{for(let E of v)null!=E&&("function"==typeof E?E(g):E.current=g)}}function N(...v){if(0===v.length)return{};if(1===v.length)return v[0];let g={},E={};for(let w of v)for(let v in w)v.startsWith("on")&&"function"==typeof w[v]?(null!=E[v]||(E[v]=[]),E[v].push(w[v])):g[v]=w[v];if(g.disabled||g["aria-disabled"])for(let v in E)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(v)&&(E[v]=[v=>{var g;return null==(g=null==v?void 0:v.preventDefault)?void 0:g.call(v)}]);for(let v in E)Object.assign(g,{[v](g,...w){for(let O of E[v]){if((g instanceof Event||(null==g?void 0:g.nativeEvent)instanceof Event)&&g.defaultPrevented)return;O(g,...w)}}});return g}function D(...v){if(0===v.length)return{};if(1===v.length)return v[0];let g={},E={};for(let w of v)for(let v in w)v.startsWith("on")&&"function"==typeof w[v]?(null!=E[v]||(E[v]=[]),E[v].push(w[v])):g[v]=w[v];for(let v in E)Object.assign(g,{[v](...g){for(let w of E[v])null==w||w(...g)}});return g}function W(v){var g;return Object.assign((0,S.forwardRef)(v),{displayName:null!=(g=v.displayName)?g:v.name})}function m(v){let g=Object.assign({},v);for(let v in g)void 0===g[v]&&delete g[v];return g}function h(v,g=[]){let E=Object.assign({},v);for(let v of g)v in E&&delete E[v];return E}},57954:function(v,g,E){"use strict";function a(v,g){let E=v(),w=new Set;return{getSnapshot:()=>E,subscribe:v=>(w.add(v),()=>w.delete(v)),dispatch(v,...O){let S=g[v].call(E,...O);S&&(E=S,w.forEach(v=>v()))}}}E.d(g,{M:function(){return a}})}}]);