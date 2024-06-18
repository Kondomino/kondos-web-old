"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2481,7738,1574],{53163:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2265),o=function(e){(0,r.useEffect)(e,[])},i=function(e){var t=(0,r.useRef)(e);t.current=e,o(function(){return function(){return t.current()}})},l=function(e){var t=(0,r.useRef)(0),n=(0,r.useState)(e),o=n[0],l=n[1],a=(0,r.useCallback)(function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame(function(){l(e)})},[]);return i(function(){cancelAnimationFrame(t.current)}),[o,a]},a="undefined"!=typeof window,u=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=l({width:a?window.innerWidth:e,height:a?window.innerHeight:t}),o=n[0],i=n[1];return(0,r.useEffect)(function(){if(a){var e=function(){i({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"resize",e),function(){!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"resize",e)}}},[]),o}},84974:function(e,t,n){n.d(t,{R:function(){return Q}});var r,o,i,l,a=n(2265),u=n(82769),s=n(75606),c=n(32600),d=n(31860),f=n(46618),p=n(11931),v=n(60597),b=n(85390),g=n(93850),x=n(53891),m=n(35863),h=n(65410),R=n(25306),w=n(8076),y=n(90583),O=n(58227),L=n(28871),E=n(54851),S=n(12950),T=n(10841),I=n(61858),k=n(13995),C=n(19426),M=((r=M||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),D=((o=D||{})[o.Single=0]="Single",o[o.Multi=1]="Multi",o),z=((i=z||{})[i.Pointer=0]="Pointer",i[i.Other=1]="Other",i),P=((l=P||{})[l.OpenListbox=0]="OpenListbox",l[l.CloseListbox=1]="CloseListbox",l[l.GoToOption=2]="GoToOption",l[l.Search=3]="Search",l[l.ClearSearch=4]="ClearSearch",l[l.RegisterOption=5]="RegisterOption",l[l.UnregisterOption=6]="UnregisterOption",l[l.RegisterLabel=7]="RegisterLabel",l);function F(e,t=e=>e){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,r=(0,h.z2)(t(e.options.slice()),e=>e.dataRef.current.domRef.current),o=n?r.indexOf(n):null;return -1===o&&(o=null),{options:r,activeOptionIndex:o}}let A={1:e=>e.dataRef.current.disabled||1===e.listboxState?e:{...e,activeOptionIndex:null,listboxState:1},0(e){if(e.dataRef.current.disabled||0===e.listboxState)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(e=>n(e.dataRef.current.value));return -1!==r&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||1===e.listboxState)return e;let r=F(e),o=(0,x.d)(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||1===e.listboxState)return e;let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeOptionIndex?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(e=>{var t;return!e.dataRef.current.disabled&&(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))}),i=o?e.options.indexOf(o):-1;return -1===i||i===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:i,activationTrigger:1}},4:e=>e.dataRef.current.disabled||1===e.listboxState||""===e.searchQuery?e:{...e,searchQuery:""},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},r=F(e,e=>[...e,n]);return null===e.activeOptionIndex&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},6:(e,t)=>{let n=F(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},N=(0,a.createContext)(null);function j(e){let t=(0,a.useContext)(N);if(null===t){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return t}N.displayName="ListboxActionsContext";let B=(0,a.createContext)(null);function Z(e){let t=(0,a.useContext)(B);if(null===t){let t=Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Z),t}return t}function H(e,t){return(0,v.E)(t.type,A,e,t)}B.displayName="ListboxDataContext";let U=a.Fragment,V=p.AN.RenderStrategy|p.AN.Static,Q=Object.assign((0,p.yV)(function(e,t){let{value:n,defaultValue:r,form:o,name:i,onChange:l,by:s=(e,t)=>e===t,disabled:d=!1,horizontal:b=!1,multiple:g=!1,...m}=e,w=b?"horizontal":"vertical",E=(0,f.T)(t),[I=g?[]:void 0,k]=(0,T.q)(n,l,r),[C,M]=(0,a.useReducer)(H,{dataRef:(0,a.createRef)(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),D=(0,a.useRef)({static:!1,hold:!1}),z=(0,a.useRef)(null),P=(0,a.useRef)(null),F=(0,a.useRef)(null),A=(0,S.z)("string"==typeof s?(e,t)=>(null==e?void 0:e[s])===(null==t?void 0:t[s]):s),j=(0,a.useCallback)(e=>(0,v.E)(Z.mode,{1:()=>I.some(t=>A(t,e)),0:()=>A(I,e)}),[I]),Z=(0,a.useMemo)(()=>({...C,value:I,disabled:d,mode:g?1:0,orientation:w,compare:A,isSelected:j,optionsPropsRef:D,labelRef:z,buttonRef:P,optionsRef:F}),[I,d,g,C]);(0,c.e)(()=>{C.dataRef.current=Z},[Z]),(0,y.O)([Z.buttonRef,Z.optionsRef],(e,t)=>{var n;M({type:1}),(0,h.sP)(t,h.tJ.Loose)||(e.preventDefault(),null==(n=Z.buttonRef.current)||n.focus())},0===Z.listboxState);let V=(0,a.useMemo)(()=>({open:0===Z.listboxState,disabled:d,value:I}),[Z,d,I]),Q=(0,S.z)(e=>{let t=Z.options.find(t=>t.id===e);t&&K(t.dataRef.current.value)}),W=(0,S.z)(()=>{if(null!==Z.activeOptionIndex){let{dataRef:e,id:t}=Z.options[Z.activeOptionIndex];K(e.current.value),M({type:2,focus:x.T.Specific,id:t})}}),$=(0,S.z)(()=>M({type:0})),q=(0,S.z)(()=>M({type:1})),G=(0,S.z)((e,t,n)=>e===x.T.Specific?M({type:2,focus:x.T.Specific,id:t,trigger:n}):M({type:2,focus:e,trigger:n})),Y=(0,S.z)((e,t)=>(M({type:5,id:e,dataRef:t}),()=>M({type:6,id:e}))),_=(0,S.z)(e=>(M({type:7,id:e}),()=>M({type:7,id:null}))),K=(0,S.z)(e=>(0,v.E)(Z.mode,{0:()=>null==k?void 0:k(e),1(){let t=Z.value.slice(),n=t.findIndex(t=>A(t,e));return -1===n?t.push(e):t.splice(n,1),null==k?void 0:k(t)}})),J=(0,S.z)(e=>M({type:3,value:e})),X=(0,S.z)(()=>M({type:4})),ee=(0,a.useMemo)(()=>({onChange:K,registerOption:Y,registerLabel:_,goToOption:G,closeListbox:q,openListbox:$,selectActiveOption:W,selectOption:Q,search:J,clearSearch:X}),[]),et=(0,a.useRef)(null),en=(0,u.G)();return(0,a.useEffect)(()=>{et.current&&void 0!==r&&en.addEventListener(et.current,"reset",()=>{null==k||k(r)})},[et,k]),a.createElement(N.Provider,{value:ee},a.createElement(B.Provider,{value:Z},a.createElement(R.up,{value:(0,v.E)(Z.listboxState,{0:R.ZM.Open,1:R.ZM.Closed})},null!=i&&null!=I&&(0,L.t)({[i]:I}).map(([e,t],n)=>a.createElement(O._,{features:O.A.Hidden,ref:0===n?e=>{var t;et.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,p.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:o,name:e,value:t})})),(0,p.sY)({ourProps:{ref:E},theirProps:m,slot:V,defaultTag:U,name:"Listbox"}))))}),{Button:(0,p.yV)(function(e,t){var n;let r=(0,s.M)(),{id:o=`headlessui-listbox-button-${r}`,...i}=e,l=Z("Listbox.Button"),c=j("Listbox.Button"),v=(0,f.T)(l.buttonRef,t),b=(0,u.G)(),h=(0,S.z)(e=>{switch(e.key){case g.R.Space:case g.R.Enter:case g.R.ArrowDown:e.preventDefault(),c.openListbox(),b.nextFrame(()=>{l.value||c.goToOption(x.T.First)});break;case g.R.ArrowUp:e.preventDefault(),c.openListbox(),b.nextFrame(()=>{l.value||c.goToOption(x.T.Last)})}}),R=(0,S.z)(e=>{e.key===g.R.Space&&e.preventDefault()}),y=(0,S.z)(e=>{if((0,m.P)(e.currentTarget))return e.preventDefault();0===l.listboxState?(c.closeListbox(),b.nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(e.preventDefault(),c.openListbox())}),O=(0,d.v)(()=>{if(l.labelId)return[l.labelId,o].join(" ")},[l.labelId,o]),L=(0,a.useMemo)(()=>({open:0===l.listboxState,disabled:l.disabled,value:l.value}),[l]),E={ref:v,id:o,type:(0,w.f)(e,l.buttonRef),"aria-haspopup":"listbox","aria-controls":null==(n=l.optionsRef.current)?void 0:n.id,"aria-expanded":0===l.listboxState,"aria-labelledby":O,disabled:l.disabled,onKeyDown:h,onKeyUp:R,onClick:y};return(0,p.sY)({ourProps:E,theirProps:i,slot:L,defaultTag:"button",name:"Listbox.Button"})}),Label:(0,p.yV)(function(e,t){let n=(0,s.M)(),{id:r=`headlessui-listbox-label-${n}`,...o}=e,i=Z("Listbox.Label"),l=j("Listbox.Label"),u=(0,f.T)(i.labelRef,t);(0,c.e)(()=>l.registerLabel(r),[r]);let d=(0,S.z)(()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}),v=(0,a.useMemo)(()=>({open:0===i.listboxState,disabled:i.disabled}),[i]);return(0,p.sY)({ourProps:{ref:u,id:r,onClick:d},theirProps:o,slot:v,defaultTag:"label",name:"Listbox.Label"})}),Options:(0,p.yV)(function(e,t){var n;let r=(0,s.M)(),{id:o=`headlessui-listbox-options-${r}`,...i}=e,l=Z("Listbox.Options"),c=j("Listbox.Options"),m=(0,f.T)(l.optionsRef,t),h=(0,u.G)(),w=(0,u.G)(),y=(0,R.oJ)(),O=null!==y?(y&R.ZM.Open)===R.ZM.Open:0===l.listboxState;(0,a.useEffect)(()=>{var e;let t=l.optionsRef.current;t&&0===l.listboxState&&t!==(null==(e=(0,E.r)(t))?void 0:e.activeElement)&&t.focus({preventScroll:!0})},[l.listboxState,l.optionsRef]);let L=(0,S.z)(e=>{switch(w.dispose(),e.key){case g.R.Space:if(""!==l.searchQuery)return e.preventDefault(),e.stopPropagation(),c.search(e.key);case g.R.Enter:if(e.preventDefault(),e.stopPropagation(),null!==l.activeOptionIndex){let{dataRef:e}=l.options[l.activeOptionIndex];c.onChange(e.current.value)}0===l.mode&&(c.closeListbox(),(0,b.k)().nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case(0,v.E)(l.orientation,{vertical:g.R.ArrowDown,horizontal:g.R.ArrowRight}):return e.preventDefault(),e.stopPropagation(),c.goToOption(x.T.Next);case(0,v.E)(l.orientation,{vertical:g.R.ArrowUp,horizontal:g.R.ArrowLeft}):return e.preventDefault(),e.stopPropagation(),c.goToOption(x.T.Previous);case g.R.Home:case g.R.PageUp:return e.preventDefault(),e.stopPropagation(),c.goToOption(x.T.First);case g.R.End:case g.R.PageDown:return e.preventDefault(),e.stopPropagation(),c.goToOption(x.T.Last);case g.R.Escape:return e.preventDefault(),e.stopPropagation(),c.closeListbox(),h.nextFrame(()=>{var e;return null==(e=l.buttonRef.current)?void 0:e.focus({preventScroll:!0})});case g.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(c.search(e.key),w.setTimeout(()=>c.clearSearch(),350))}}),T=(0,d.v)(()=>{var e,t,n;return null!=(n=null==(e=l.labelRef.current)?void 0:e.id)?n:null==(t=l.buttonRef.current)?void 0:t.id},[l.labelRef.current,l.buttonRef.current]),I=(0,a.useMemo)(()=>({open:0===l.listboxState}),[l]),k={"aria-activedescendant":null===l.activeOptionIndex||null==(n=l.options[l.activeOptionIndex])?void 0:n.id,"aria-multiselectable":1===l.mode||void 0,"aria-labelledby":T,"aria-orientation":l.orientation,id:o,onKeyDown:L,role:"listbox",tabIndex:0,ref:m};return(0,p.sY)({ourProps:k,theirProps:i,slot:I,defaultTag:"ul",features:V,visible:O,name:"Listbox.Options"})}),Option:(0,p.yV)(function(e,t){let n=(0,s.M)(),{id:r=`headlessui-listbox-option-${n}`,disabled:o=!1,value:i,...l}=e,u=Z("Listbox.Option"),d=j("Listbox.Option"),v=null!==u.activeOptionIndex&&u.options[u.activeOptionIndex].id===r,g=u.isSelected(i),m=(0,a.useRef)(null),h=(0,C.x)(m),R=(0,I.E)({disabled:o,value:i,domRef:m,get textValue(){return h()}}),w=(0,f.T)(t,m);(0,c.e)(()=>{if(0!==u.listboxState||!v||0===u.activationTrigger)return;let e=(0,b.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=m.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[m,v,u.listboxState,u.activationTrigger,u.activeOptionIndex]),(0,c.e)(()=>d.registerOption(r,R),[R,r]);let y=(0,S.z)(e=>{if(o)return e.preventDefault();d.onChange(i),0===u.mode&&(d.closeListbox(),(0,b.k)().nextFrame(()=>{var e;return null==(e=u.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))}),O=(0,S.z)(()=>{if(o)return d.goToOption(x.T.Nothing);d.goToOption(x.T.Specific,r)}),L=(0,k.g)(),E=(0,S.z)(e=>L.update(e)),T=(0,S.z)(e=>{L.wasMoved(e)&&(o||v||d.goToOption(x.T.Specific,r,0))}),M=(0,S.z)(e=>{L.wasMoved(e)&&(o||v&&d.goToOption(x.T.Nothing))}),D=(0,a.useMemo)(()=>({active:v,selected:g,disabled:o}),[v,g,o]);return(0,p.sY)({ourProps:{id:r,ref:w,role:"option",tabIndex:!0===o?void 0:-1,"aria-disabled":!0===o||void 0,"aria-selected":g,disabled:void 0,onClick:y,onFocus:O,onPointerEnter:E,onMouseEnter:E,onPointerMove:T,onMouseMove:T,onPointerLeave:M,onMouseLeave:M},theirProps:l,slot:D,defaultTag:"li",name:"Listbox.Option"})})})},31860:function(e,t,n){n.d(t,{v:function(){return l}});var r=n(2265),o=n(32600),i=n(61858);function l(e,t){let[n,l]=(0,r.useState)(e),a=(0,i.E)(e);return(0,o.e)(()=>l(a.current),[a,l,...t]),n}},10841:function(e,t,n){n.d(t,{q:function(){return i}});var r=n(2265),o=n(12950);function i(e,t,n){let[i,l]=(0,r.useState)(n),a=void 0!==e,u=(0,r.useRef)(a),s=(0,r.useRef)(!1),c=(0,r.useRef)(!1);return!a||u.current||s.current?a||!u.current||c.current||(c.current=!0,u.current=a,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,u.current=a,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[a?e:i,(0,o.z)(e=>(a||l(e),null==t?void 0:t(e)))]}},8076:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(2265),o=n(32600);function i(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function l(e,t){let[n,l]=(0,r.useState)(()=>i(e));return(0,o.e)(()=>{l(i(e))},[e.type,e.as]),(0,o.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")},[n,t]),n}},19426:function(e,t,n){n.d(t,{x:function(){return a}});var r=n(2265);let o=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function i(e){var t,n;let r=null!=(t=e.innerText)?t:"",i=e.cloneNode(!0);if(!(i instanceof HTMLElement))return r;let l=!1;for(let e of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),l=!0;let a=l?null!=(n=i.innerText)?n:"":r;return o.test(a)&&(a=a.replace(o,"")),a}var l=n(12950);function a(e){let t=(0,r.useRef)(""),n=(0,r.useRef)("");return(0,l.z)(()=>{let r=e.current;if(!r)return"";let o=r.innerText;if(t.current===o)return n.current;let l=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let e=n.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():i(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return i(e).trim()})(r).trim().toLowerCase();return t.current=o,n.current=l,l})}},13995:function(e,t,n){n.d(t,{g:function(){return i}});var r=n(2265);function o(e){return[e.screenX,e.screenY]}function i(){let e=(0,r.useRef)([-1,-1]);return{wasMoved(t){let n=o(t);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(t){e.current=o(t)}}}},53891:function(e,t,n){n.d(t,{T:function(){return o},d:function(){return i}});var r,o=((r=o||{})[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r);function i(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>(-1===o||!(r.length-n-1>=o))&&!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=o)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===i?r:i}},28871:function(e,t,n){function r(e,t){return e?e+"["+t+"]":t}function o(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(n=r.requestSubmit)||n.call(r)}}n.d(t,{g:function(){return o},t:function(){return function e(t={},n=null,o=[]){for(let[i,l]of Object.entries(t))!function t(n,o,i){if(Array.isArray(i))for(let[e,l]of i.entries())t(n,r(o,e.toString()),l);else i instanceof Date?n.push([o,i.toISOString()]):"boolean"==typeof i?n.push([o,i?"1":"0"]):"string"==typeof i?n.push([o,i]):"number"==typeof i?n.push([o,`${i}`]):null==i?n.push([o,""]):e(i,o,n)}(o,r(n,i),l);return o}}})},91122:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}))});t.Z=o},40013:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))});t.Z=o},3217:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))});t.Z=o},6321:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"}))});t.Z=o},7139:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"}))});t.Z=o},4720:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",clipRule:"evenodd"}))});t.Z=o},99175:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z",clipRule:"evenodd"}))});t.Z=o},70833:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",clipRule:"evenodd"}))});t.Z=o},79468:function(e,t,n){var r=n(2265);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",clipRule:"evenodd"}))});t.Z=o}}]);