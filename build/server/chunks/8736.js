"use strict";exports.id=8736,exports.ids=[8736],exports.modules={34600:(e,n)=>{Object.defineProperty(n,"U",{enumerable:!0,get:function(){return createActionProxy}});let t=Symbol.for("react.server.reference");function createActionProxy(e,n,o,r){Object.defineProperties(o,{$$typeof:{value:t},$$id:{value:e},$$bound:{value:n},bind:{value:function bindImpl(e,...n){let t=this,newAction=async function(...e){return r?r(newAction.$$bound.concat(e)):t(...newAction.$$bound,...e)};for(let e of["$$typeof","$$id","$$FORM_ACTION"])newAction[e]=t[e];return newAction.$$bound=(t.$$bound||[]).concat(n),newAction.bind=bindImpl.bind(newAction),newAction}}})}},82990:(e,n)=>{function ensureServerEntryExports(e){for(let n=0;n<e.length;n++){let t=e[n];if("function"!=typeof t)throw Error(`A "use server" file can only export async functions, found ${typeof t}.`)}}Object.defineProperty(n,"h",{enumerable:!0,get:function(){return ensureServerEntryExports}})}};