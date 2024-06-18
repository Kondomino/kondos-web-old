exports.id=5834,exports.ids=[5834],exports.modules={34600:(e,t)=>{"use strict";Object.defineProperty(t,"U",{enumerable:!0,get:function(){return n}});let r=Symbol.for("react.server.reference");function n(e,t,n,o){Object.defineProperties(n,{$$typeof:{value:r},$$id:{value:e},$$bound:{value:t},bind:{value:function e(t,...r){let n=this,a=async function(...e){return o?o(a.$$bound.concat(e)):n(...a.$$bound,...e)};for(let e of["$$typeof","$$id","$$FORM_ACTION"])a[e]=n[e];return a.$$bound=(n.$$bound||[]).concat(r),a.bind=e.bind(a),a}}})}},82990:(e,t)=>{"use strict";function r(e){for(let t=0;t<e.length;t++){let r=e[t];if("function"!=typeof r)throw Error(`A "use server" file can only export async functions, found ${typeof r}.`)}}Object.defineProperty(t,"h",{enumerable:!0,get:function(){return r}})},87349:(e,t,r)=>{"use strict";var n=r(58337),o=r(3542),a={stream:!0},i=new Map;function u(e){var t=globalThis.__next_require__(e);return"function"!=typeof t.then||"fulfilled"===t.status?null:(t.then(function(e){t.status="fulfilled",t.value=e},function(e){t.status="rejected",t.reason=e}),t)}function s(){}var l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher,c=Symbol.for("react.element"),f=Symbol.for("react.provider"),d=Symbol.for("react.server_context"),p=Symbol.for("react.lazy"),h=Symbol.for("react.default_value"),y=Symbol.iterator,m=Array.isArray,v=Object.getPrototypeOf,g=Object.prototype,b=new WeakMap;function w(e,t,r,n){var o=1,a=0,i=null;e=JSON.stringify(e,function e(u,s){if(null===s)return null;if("object"==typeof s){if("function"==typeof s.then){null===i&&(i=new FormData),a++;var l,c,f=o++;return s.then(function(n){n=JSON.stringify(n,e);var o=i;o.append(t+f,n),0==--a&&r(o)},function(e){n(e)}),"$@"+f.toString(16)}if(m(s))return s;if(s instanceof FormData){null===i&&(i=new FormData);var d=i,p=t+(u=o++)+"_";return s.forEach(function(e,t){d.append(p+t,e)}),"$K"+u.toString(16)}if(s instanceof Map)return s=JSON.stringify(Array.from(s),e),null===i&&(i=new FormData),u=o++,i.append(t+u,s),"$Q"+u.toString(16);if(s instanceof Set)return s=JSON.stringify(Array.from(s),e),null===i&&(i=new FormData),u=o++,i.append(t+u,s),"$W"+u.toString(16);if(null===(c=s)||"object"!=typeof c?null:"function"==typeof(c=y&&c[y]||c["@@iterator"])?c:null)return Array.from(s);if((u=v(s))!==g&&(null===u||null!==v(u)))throw Error("Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported.");return s}if("string"==typeof s)return"Z"===s[s.length-1]&&this[u]instanceof Date?"$D"+s:s="$"===s[0]?"$"+s:s;if("boolean"==typeof s)return s;if("number"==typeof s)return Number.isFinite(l=s)?0===l&&-1/0==1/l?"$-0":l:1/0===l?"$Infinity":-1/0===l?"$-Infinity":"$NaN";if(void 0===s)return"$undefined";if("function"==typeof s){if(void 0!==(s=b.get(s)))return s=JSON.stringify(s,e),null===i&&(i=new FormData),u=o++,i.set(t+u,s),"$F"+u.toString(16);throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.")}if("symbol"==typeof s){if(Symbol.for(u=s.description)!==s)throw Error("Only global symbols received from Symbol.for(...) can be passed to Server Functions. The symbol Symbol.for("+s.description+") cannot be found among global symbols.");return"$S"+u}if("bigint"==typeof s)return"$n"+s.toString(10);throw Error("Type "+typeof s+" is not supported as an argument to a Server Function.")}),null===i?r(e):(i.set(t+"0",e),0===a&&r(i))}var S=new WeakMap;function _(e){var t=b.get(this);if(!t)throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");var r=null;if(null!==t.bound){if((r=S.get(t))||(n=t,i=new Promise(function(e,t){o=e,a=t}),w(n,"",function(e){if("string"==typeof e){var t=new FormData;t.append("0",e),e=t}i.status="fulfilled",i.value=e,o(e)},function(e){i.status="rejected",i.reason=e,a(e)}),r=i,S.set(t,r)),"rejected"===r.status)throw r.reason;if("fulfilled"!==r.status)throw r;t=r.value;var n,o,a,i,u=new FormData;t.forEach(function(t,r){u.append("$ACTION_"+e+":"+r,t)}),r=u,t="$ACTION_REF_"+e}else t="$ACTION_ID_"+t.id;return{name:t,method:"POST",encType:"multipart/form-data",data:r}}function T(e,t){var r=b.get(this);if(!r)throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");if(r.id!==e)return!1;var n=r.bound;if(null===n)return 0===t;switch(n.status){case"fulfilled":return n.value.length===t;case"pending":throw n;case"rejected":throw n.reason;default:throw"string"!=typeof n.status&&(n.status="pending",n.then(function(e){n.status="fulfilled",n.value=e},function(e){n.status="rejected",n.reason=e})),n}}function E(e,t){Object.defineProperties(e,{$$FORM_ACTION:{value:_},$$IS_SIGNATURE_EQUAL:{value:T},bind:{value:k}}),b.set(e,t)}var O=Function.prototype.bind,A=Array.prototype.slice;function k(){var e=O.apply(this,arguments),t=b.get(this);if(t){var r=A.call(arguments,1),n=null;n=null!==t.bound?Promise.resolve(t.bound).then(function(e){return e.concat(r)}):Promise.resolve(r),E(e,{id:t.id,bound:n})}return e}var $=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;function M(e,t,r,n){this.status=e,this.value=t,this.reason=r,this._response=n}function R(e){switch(e.status){case"resolved_model":D(e);break;case"resolved_module":F(e)}switch(e.status){case"fulfilled":return e.value;case"pending":case"blocked":case"cyclic":throw e;default:throw e.reason}}function N(e,t){for(var r=0;r<e.length;r++)(0,e[r])(t)}function j(e,t,r){switch(e.status){case"fulfilled":N(t,e.value);break;case"pending":case"blocked":case"cyclic":e.value=t,e.reason=r;break;case"rejected":r&&N(r,e.reason)}}function x(e,t){if("pending"===e.status||"blocked"===e.status){var r=e.reason;e.status="rejected",e.reason=t,null!==r&&N(r,t)}}function P(e,t){if("pending"===e.status||"blocked"===e.status){var r=e.value,n=e.reason;e.status="resolved_module",e.value=t,null!==r&&(F(e),j(e,r,n))}}M.prototype=Object.create(Promise.prototype),M.prototype.then=function(e,t){switch(this.status){case"resolved_model":D(this);break;case"resolved_module":F(this)}switch(this.status){case"fulfilled":e(this.value);break;case"pending":case"blocked":case"cyclic":e&&(null===this.value&&(this.value=[]),this.value.push(e)),t&&(null===this.reason&&(this.reason=[]),this.reason.push(t));break;default:t(this.reason)}};var C=null,I=null;function D(e){var t=C,r=I;C=e,I=null;var n=e.value;e.status="cyclic",e.value=null,e.reason=null;try{var o=JSON.parse(n,e._response._fromJSON);if(null!==I&&0<I.deps)I.value=o,e.status="blocked",e.value=null,e.reason=null;else{var a=e.value;e.status="fulfilled",e.value=o,null!==a&&N(a,o)}}catch(t){e.status="rejected",e.reason=t}finally{C=t,I=r}}function F(e){try{var t=e.value,r=globalThis.__next_require__(t[0]);if(4===t.length&&"function"==typeof r.then){if("fulfilled"===r.status)r=r.value;else throw r.reason}var n="*"===t[2]?r:""===t[2]?r.__esModule?r.default:r:r[t[2]];e.status="fulfilled",e.value=n}catch(t){e.status="rejected",e.reason=t}}function q(e,t){e._chunks.forEach(function(e){"pending"===e.status&&x(e,t)})}function L(e,t){var r=e._chunks,n=r.get(t);return n||(n=new M("pending",null,null,e),r.set(t,n)),n}function U(e,t){if("resolved_model"===(e=L(e,t)).status&&D(e),"fulfilled"===e.status)return e.value;throw e.reason}function J(){throw Error('Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.')}function B(){throw Error("Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.")}function K(e){var t,r=e.ssrManifest.moduleMap;return(r={_bundlerConfig:r,_moduleLoading:e.ssrManifest.moduleLoading,_callServer:void 0!==B?B:J,_nonce:e="string"==typeof e.nonce?e.nonce:void 0,_chunks:new Map,_stringDecoder:new TextDecoder,_fromJSON:null,_rowState:0,_rowID:0,_rowTag:0,_rowLength:0,_buffer:[]})._fromJSON=(t=r,function(e,r){return"string"==typeof r?function(e,t,r,n){if("$"===n[0]){if("$"===n)return c;switch(n[1]){case"$":return n.slice(1);case"L":return{$$typeof:p,_payload:e=L(e,t=parseInt(n.slice(2),16)),_init:R};case"@":return L(e,t=parseInt(n.slice(2),16));case"S":return Symbol.for(n.slice(2));case"P":return $[e=n.slice(2)]||((t={$$typeof:d,_currentValue:h,_currentValue2:h,_defaultValue:h,_threadCount:0,Provider:null,Consumer:null,_globalName:e}).Provider={$$typeof:f,_context:t},$[e]=t),$[e].Provider;case"F":return t=U(e,t=parseInt(n.slice(2),16)),function(e,t){function r(){var e=Array.prototype.slice.call(arguments),r=t.bound;return r?"fulfilled"===r.status?n(t.id,r.value.concat(e)):Promise.resolve(r).then(function(r){return n(t.id,r.concat(e))}):n(t.id,e)}var n=e._callServer;return E(r,t),r}(e,t);case"Q":return e=U(e,t=parseInt(n.slice(2),16)),new Map(e);case"W":return e=U(e,t=parseInt(n.slice(2),16)),new Set(e);case"I":return 1/0;case"-":return"$-0"===n?-0:-1/0;case"N":return NaN;case"u":return;case"D":return new Date(Date.parse(n.slice(2)));case"n":return BigInt(n.slice(2));default:switch((e=L(e,n=parseInt(n.slice(1),16))).status){case"resolved_model":D(e);break;case"resolved_module":F(e)}switch(e.status){case"fulfilled":return e.value;case"pending":case"blocked":case"cyclic":var o;return n=C,e.then(function(e,t,r,n){if(I){var o=I;n||o.deps++}else o=I={deps:n?0:1,value:null};return function(n){t[r]=n,o.deps--,0===o.deps&&"blocked"===e.status&&(n=e.value,e.status="fulfilled",e.value=o.value,null!==n&&N(n,o.value))}}(n,t,r,"cyclic"===e.status),(o=n,function(e){return x(o,e)})),null;default:throw e.reason}}}return n}(t,this,e,r):"object"==typeof r&&null!==r?e=r[0]===c?{$$typeof:c,type:r[1],key:r[2],ref:null,props:r[3],_owner:null}:r:r}),r}function W(e,t){function n(t){q(e,t)}var o=t.getReader();o.read().then(function t(c){var f=c.value;if(c.done)q(e,Error("Connection closed."));else{var d=0,p=e._rowState,h=e._rowID,y=e._rowTag,m=e._rowLength;c=e._buffer;for(var v=f.length;d<v;){var g=-1;switch(p){case 0:58===(g=f[d++])?p=1:h=h<<4|(96<g?g-87:g-48);continue;case 1:84===(p=f[d])?(y=p,p=2,d++):64<p&&91>p?(y=p,p=3,d++):(y=0,p=3);continue;case 2:44===(g=f[d++])?p=4:m=m<<4|(96<g?g-87:g-48);continue;case 3:g=f.indexOf(10,d);break;case 4:(g=d+m)>f.length&&(g=-1)}var b=f.byteOffset+d;if(-1<g){d=new Uint8Array(f.buffer,b,g-d),m=e,b=y;var w=m._stringDecoder;y="";for(var S=0;S<c.length;S++)y+=w.decode(c[S],a);switch(y+=w.decode(d),b){case 73:!function(e,t,n){var o=e._chunks,a=o.get(t);n=JSON.parse(n,e._fromJSON);var c=function(e,t){if(e){var r=e[t[0]];if(e=r[t[2]])r=e.name;else{if(!(e=r["*"]))throw Error('Could not find the module "'+t[0]+'" in the React SSR Manifest. This is probably a bug in the React Server Components bundler.');r=t[2]}return 4===t.length?[e.id,e.chunks,r,1]:[e.id,e.chunks,r]}return t}(e._bundlerConfig,n);if(function(e,t,r){if(null!==e)for(var n=1;n<t.length;n+=2){var o=l.current;if(o){var a=o.preinitScript,i=e.prefix+t[n],u=e.crossOrigin;u="string"==typeof u?"use-credentials"===u?u:"":void 0,a.call(o,i,{crossOrigin:u,nonce:r})}}}(e._moduleLoading,n[1],e._nonce),n=function(e){for(var t=e[1],n=[],o=0;o<t.length;){var a=t[o++];t[o++];var l=i.get(a);if(void 0===l){l=r.e(a),n.push(l);var c=i.set.bind(i,a,null);l.then(c,s),i.set(a,l)}else null!==l&&n.push(l)}return 4===e.length?0===n.length?u(e[0]):Promise.all(n).then(function(){return u(e[0])}):0<n.length?Promise.all(n):null}(c)){if(a){var f=a;f.status="blocked"}else f=new M("blocked",null,null,e),o.set(t,f);n.then(function(){return P(f,c)},function(e){return x(f,e)})}else a?P(a,c):o.set(t,new M("resolved_module",c,null,e))}(m,h,y);break;case 72:if(h=y[0],m=JSON.parse(y=y.slice(1),m._fromJSON),y=l.current)switch(h){case"D":y.prefetchDNS(m);break;case"C":"string"==typeof m?y.preconnect(m):y.preconnect(m[0],m[1]);break;case"L":h=m[0],d=m[1],3===m.length?y.preload(h,d,m[2]):y.preload(h,d);break;case"m":"string"==typeof m?y.preloadModule(m):y.preloadModule(m[0],m[1]);break;case"S":"string"==typeof m?y.preinitStyle(m):y.preinitStyle(m[0],0===m[1]?void 0:m[1],3===m.length?m[2]:void 0);break;case"X":"string"==typeof m?y.preinitScript(m):y.preinitScript(m[0],m[1]);break;case"M":"string"==typeof m?y.preinitModuleScript(m):y.preinitModuleScript(m[0],m[1])}break;case 69:d=(y=JSON.parse(y)).digest,(y=Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.")).stack="Error: "+y.message,y.digest=d,(b=(d=m._chunks).get(h))?x(b,y):d.set(h,new M("rejected",null,y,m));break;case 84:m._chunks.set(h,new M("fulfilled",y,null,m));break;default:(b=(d=m._chunks).get(h))?(m=b,h=y,"pending"===m.status&&(y=m.value,d=m.reason,m.status="resolved_model",m.value=h,null!==y&&(D(m),j(m,y,d)))):d.set(h,new M("resolved_model",y,null,m))}d=g,3===p&&d++,m=h=y=p=0,c.length=0}else{f=new Uint8Array(f.buffer,b,f.byteLength-d),c.push(f),m-=f.byteLength;break}}return e._rowState=p,e._rowID=h,e._rowTag=y,e._rowLength=m,o.read().then(t).catch(n)}}).catch(n)}t.createFromFetch=function(e,t){var r=K(t);return e.then(function(e){W(r,e.body)},function(e){q(r,e)}),L(r,0)},t.createFromReadableStream=function(e,t){return W(t=K(t),e),L(t,0)},t.createServerReference=function(e){return function(e,t){function r(){var r=Array.prototype.slice.call(arguments);return t(e,r)}return E(r,{id:e,bound:null}),r}(e,B)},t.encodeReply=function(e){return new Promise(function(t,r){w(e,"",t,r)})}},73696:(e,t,r)=>{"use strict";e.exports=r(87349)},41214:()=>{},53912:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DetachedPromise",{enumerable:!0,get:function(){return r}});class r{constructor(){let e,t;this.promise=new Promise((r,n)=>{e=r,t=n}),this.resolve=e,this.reject=t}}},89564:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{scheduleOnNextTick:function(){return r},scheduleImmediate:function(){return n}});let r=e=>{Promise.resolve().then(()=>{process.nextTick(e)})},n=e=>{setImmediate(e)}},22271:(e,t)=>{"use strict";let r,n;function o(e){let t=new Uint8Array(e),r=t.byteLength;if(r<65535)return String.fromCharCode.apply(null,t);let n="";for(let e=0;e<r;e++)n+=String.fromCharCode(t[e]);return n}function a(e){let t=e.length,r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e.charCodeAt(n);return r}function i(e,t,r){return crypto.subtle.encrypt({name:"AES-GCM",iv:t},e,r)}function u(e,t,r){return crypto.subtle.decrypt({name:"AES-GCM",iv:t},e,r)}async function s(e){if(e&&void 0!==n)return n;let t=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),a=await crypto.subtle.exportKey("raw",t),i=btoa(o(a));return r=t,e&&(n=i),i}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{arrayBufferToString:function(){return o},stringToUint8Array:function(){return a},encrypt:function(){return i},decrypt:function(){return u},generateRandomActionKeyRaw:function(){return s},setReferenceManifestsSingleton:function(){return c},getServerModuleMap:function(){return f},getClientReferenceManifestSingleton:function(){return d},getActionEncryptionKey:function(){return p}});let l=Symbol.for("next.server.action-manifests");function c({clientReferenceManifest:e,serverActionsManifest:t,serverModuleMap:r}){globalThis[l]={clientReferenceManifest:e,serverActionsManifest:t,serverModuleMap:r}}function f(){let e=globalThis[l];if(!e)throw Error("Missing manifest for Server Actions. This is a bug in Next.js");return e.serverModuleMap}function d(){let e=globalThis[l];if(!e)throw Error("Missing manifest for Server Actions. This is a bug in Next.js");return e.clientReferenceManifest}async function p(){if(r)return r;let e=globalThis[l];if(!e)throw Error("Missing manifest for Server Actions. This is a bug in Next.js");let t=process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY||e.serverActionsManifest.encryptionKey;if(void 0===t)throw Error("Missing encryption key for Server Actions");return r=await crypto.subtle.importKey("raw",a(atob(t)),"AES-GCM",!0,["encrypt","decrypt"])}},99195:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{encryptActionBoundArgs:function(){return l},decryptActionBoundArgs:function(){return c}}),r(41214);let n=r(55951),o=r(73696),a=r(8323),i=r(22271);async function u(e,t){let r=await (0,i.getActionEncryptionKey)();if(void 0===r)throw Error("Missing encryption key for Server Action. This is a bug in Next.js");let n=atob(t),o=n.slice(0,16),a=n.slice(16);if(void 0===a)throw Error("Invalid Server Action payload.");let u=(0,i.arrayBufferToString)(await (0,i.decrypt)(r,(0,i.stringToUint8Array)(o),(0,i.stringToUint8Array)(a)));if(!u.startsWith(e))throw Error("Invalid Server Action payload: failed to decrypt.");return u.slice(e.length)}async function s(e,t){let r=await (0,i.getActionEncryptionKey)();if(void 0===r)throw Error("Missing encryption key for Server Action. This is a bug in Next.js");let n=new Uint8Array(16);crypto.getRandomValues(n);let o=(0,i.arrayBufferToString)(n.buffer),a=await (0,i.encrypt)(r,n,(0,i.stringToUint8Array)(e+t));return btoa(o+(0,i.arrayBufferToString)(a))}async function l(e,t){let r=(0,i.getClientReferenceManifestSingleton)(),o=await (0,a.streamToString)((0,n.renderToReadableStream)(t,r.clientModules)),u=await s(e,o);return u}async function c(e,t){let r=await u(e,await t),a=await (0,o.createFromReadableStream)(new ReadableStream({start(e){e.enqueue(new TextEncoder().encode(r)),e.close()}}),{ssrManifest:{moduleLoading:{},moduleMap:{}}}),s=(0,i.getServerModuleMap)(),l=await (0,n.decodeReply)(await (0,o.encodeReply)(a),s);return l}},32015:(e,t)=>{"use strict";function r(e=new TextDecoder){return new TransformStream({transform:(t,r)=>r.enqueue(e.decode(t,{stream:!0})),flush:t=>t.enqueue(e.decode())})}function n(e=new TextEncoder){return new TransformStream({transform:(t,r)=>r.enqueue(e.encode(t))})}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{createDecodeTransformStream:function(){return r},createEncodeTransformStream:function(){return n}})},8323:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cloneTransformStream:function(){return s},chainStreams:function(){return l},streamFromString:function(){return c},streamToString:function(){return f},createBufferedTransformStream:function(){return d},renderToInitialFizzStream:function(){return h},createRootLayoutValidatorStream:function(){return v},continueFizzStream:function(){return b},continuePostponedFizzStream:function(){return w}});let n=r(14640),o=r(44875),a=r(32015),i=r(53912),u=r(89564);function s(e){let t=e.readable.getReader(),r=new TransformStream({async start(e){for(;;){let{done:r,value:n}=await t.read();if(r)break;e.enqueue(n)}},transform(){}});return r}function l(...e){let{readable:t,writable:r}=new TransformStream,n=Promise.resolve();for(let t=0;t<e.length;++t)n=n.then(()=>e[t].pipeTo(r,{preventClose:t+1<e.length}));return n.catch(()=>{}),t}function c(e){let t=new TextEncoder;return new ReadableStream({start(r){r.enqueue(t.encode(e)),r.close()}})}async function f(e){let t="";return await e.pipeThrough((0,a.createDecodeTransformStream)()).pipeTo(new WritableStream({write(e){t+=e}})),t}function d(){let e,t=new Uint8Array,r=r=>{if(e)return;let n=new i.DetachedPromise;e=n,(0,u.scheduleImmediate)(()=>{try{r.enqueue(t),t=new Uint8Array}catch{}finally{e=void 0,n.resolve()}})};return new TransformStream({transform(e,n){let o=new Uint8Array(t.length+e.byteLength);o.set(t),o.set(e,t.length),t=o,r(n)},flush(){if(e)return e.promise}})}function p(e){let t=new TextEncoder;return new TransformStream({transform:async(r,n)=>{let o=await e();o&&n.enqueue(t.encode(o)),n.enqueue(r)}})}function h({ReactDOMServer:e,element:t,streamOptions:r}){return(0,n.getTracer)().trace(o.AppRenderSpan.renderToReadableStream,async()=>e.renderToReadableStream(t,r))}function y(e){let t=!1,r=null,n=t=>{let n=e.getReader(),o=new i.DetachedPromise;r=o,(0,u.scheduleImmediate)(async()=>{try{for(;;){let{done:e,value:r}=await n.read();if(e)return;t.enqueue(r)}}catch(e){t.error(e)}finally{o.resolve()}})};return new TransformStream({transform(e,r){r.enqueue(e),t||(t=!0,n(r))},flush(){if(r&&t)return r.promise}})}function m(e){let t=!1,r=new TextEncoder,n=new TextDecoder;return new TransformStream({transform(o,a){if(t)return a.enqueue(o);let i=n.decode(o),u=i.indexOf(e);if(u>-1){if(t=!0,i.length===e.length)return;let n=i.slice(0,u);if(o=r.encode(n),a.enqueue(o),i.length>e.length+u){let t=i.slice(u+e.length);o=r.encode(t),a.enqueue(o)}}else a.enqueue(o)},flush(t){t.enqueue(r.encode(e))}})}function v(e="",t){let r=!1,n=!1,o=new TextEncoder,a=new TextDecoder,i="";return new TransformStream({async transform(e,t){(!r||!n)&&(i+=a.decode(e,{stream:!0}),!r&&i.includes("<html")&&(r=!0),!n&&i.includes("<body")&&(n=!0)),t.enqueue(e)},flush(u){(!r||!n)&&(i+=a.decode(),!r&&i.includes("<html")&&(r=!0),!n&&i.includes("<body")&&(n=!0));let s=[];r||s.push("html"),n||s.push("body"),s.length>0&&u.enqueue(o.encode(`<script>self.__next_root_layout_missing_tags_error=${JSON.stringify({missingTags:s,assetPrefix:e??"",tree:t()})}</script>`))}})}function g(e,t){let r=e;for(let e of t)e&&(r=r.pipeThrough(e));return r}async function b(e,{suffix:t,inlinedDataStream:r,generateStaticHTML:n,getServerInsertedHTML:o,serverInsertedHTMLToHead:a,validateRootLayout:s}){let l="</body></html>",c=t?t.split(l,1)[0]:null;return n&&"allReady"in e&&await e.allReady,g(e,[d(),o&&!a?p(o):null,null!=c&&c.length>0?function(e){let t,r=!1,n=new TextEncoder,o=r=>{let o=new i.DetachedPromise;t=o,(0,u.scheduleImmediate)(()=>{try{r.enqueue(n.encode(e))}catch{}finally{t=void 0,o.resolve()}})};return new TransformStream({transform(e,t){t.enqueue(e),r||(r=!0,o(t))},flush(o){if(t)return t.promise;r||o.enqueue(n.encode(e))}})}(c):null,r?y(r):null,m(l),o&&a?function(e){let t=!1,r=!1,n=new TextEncoder,o=new TextDecoder;return new TransformStream({async transform(a,i){if(r){i.enqueue(a);return}let s=await e();if(t)i.enqueue(n.encode(s)),i.enqueue(a),r=!0;else{let e=o.decode(a),u=e.indexOf("</head>");if(-1!==u){let o=e.slice(0,u)+s+e.slice(u);i.enqueue(n.encode(o)),r=!0,t=!0}}t?(0,u.scheduleImmediate)(()=>{r=!1}):i.enqueue(a)},async flush(t){let r=await e();r&&t.enqueue(n.encode(r))}})}(o):null,s?v(s.assetPrefix,s.getTree):null])}async function w(e,{inlinedDataStream:t,generateStaticHTML:r,getServerInsertedHTML:n,serverInsertedHTMLToHead:o}){return r&&"allReady"in e&&await e.allReady,g(e,[d(),n&&!o?p(n):null,t?y(t):null,m("</body></html>")])}},10789:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(34218);let o=n.forwardRef(function({title:e,titleId:t,...r},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}))}),a=o},67689:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(34218);let o=n.forwardRef(function({title:e,titleId:t,...r},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))}),a=o}};