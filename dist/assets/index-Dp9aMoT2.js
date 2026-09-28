function td(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pa={exports:{}},xl={},za={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),rd=Symbol.for("react.portal"),ld=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),od=Symbol.for("react.profiler"),sd=Symbol.for("react.provider"),ad=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),dd=Symbol.for("react.memo"),fd=Symbol.for("react.lazy"),os=Symbol.iterator;function pd(e){return e===null||typeof e!="object"?null:(e=os&&e[os]||e["@@iterator"],typeof e=="function"?e:null)}var Ra={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},La=Object.assign,_a={};function hn(e,t,n){this.props=e,this.context=t,this.refs=_a,this.updater=n||Ra}hn.prototype.isReactComponent={};hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ta(){}Ta.prototype=hn.prototype;function ao(e,t,n){this.props=e,this.context=t,this.refs=_a,this.updater=n||Ra}var uo=ao.prototype=new Ta;uo.constructor=ao;La(uo,hn.prototype);uo.isPureReactComponent=!0;var ss=Array.isArray,Ia=Object.prototype.hasOwnProperty,co={current:null},ba={key:!0,ref:!0,__self:!0,__source:!0};function Oa(e,t,n){var r,l={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Ia.call(t,r)&&!ba.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:ar,type:e,key:i,ref:s,props:l,_owner:co.current}}function hd(e,t){return{$$typeof:ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fo(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function md(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var as=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?md(""+e.key):t.toString(36)}function Ir(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ar:case rd:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+Fl(s,0):r,ss(l)?(n="",e!=null&&(n=e.replace(as,"$&/")+"/"),Ir(l,t,n,"",function(c){return c})):l!=null&&(fo(l)&&(l=hd(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(as,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",ss(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Fl(i,a);s+=Ir(i,t,n,u,l)}else if(u=pd(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Fl(i,a++),s+=Ir(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function gr(e,t,n){if(e==null)return e;var r=[],l=0;return Ir(e,r,"","",function(i){return t.call(n,i,l++)}),r}function gd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},br={transition:null},xd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:br,ReactCurrentOwner:co};function Da(){throw Error("act(...) is not supported in production builds of React.")}I.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!fo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=hn;I.Fragment=ld;I.Profiler=od;I.PureComponent=ao;I.StrictMode=id;I.Suspense=cd;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xd;I.act=Da;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=La({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=co.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Ia.call(t,u)&&!ba.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ar,type:e.type,key:l,ref:i,props:r,_owner:s}};I.createContext=function(e){return e={$$typeof:ad,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sd,_context:e},e.Consumer=e};I.createElement=Oa;I.createFactory=function(e){var t=Oa.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:ud,render:e}};I.isValidElement=fo;I.lazy=function(e){return{$$typeof:fd,_payload:{_status:-1,_result:e},_init:gd}};I.memo=function(e,t){return{$$typeof:dd,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=br.transition;br.transition={};try{e()}finally{br.transition=t}};I.unstable_act=Da;I.useCallback=function(e,t){return fe.current.useCallback(e,t)};I.useContext=function(e){return fe.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};I.useEffect=function(e,t){return fe.current.useEffect(e,t)};I.useId=function(){return fe.current.useId()};I.useImperativeHandle=function(e,t,n){return fe.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return fe.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return fe.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return fe.current.useMemo(e,t)};I.useReducer=function(e,t,n){return fe.current.useReducer(e,t,n)};I.useRef=function(e){return fe.current.useRef(e)};I.useState=function(e){return fe.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return fe.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return fe.current.useTransition()};I.version="18.3.1";za.exports=I;var w=za.exports;const Ma=nd(w),yd=td({__proto__:null,default:Ma},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=w,wd=Symbol.for("react.element"),jd=Symbol.for("react.fragment"),kd=Object.prototype.hasOwnProperty,Sd=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cd={key:!0,ref:!0,__self:!0,__source:!0};function Aa(e,t,n){var r,l={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)kd.call(t,r)&&!Cd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:wd,type:e,key:i,ref:s,props:l,_owner:Sd.current}}xl.Fragment=jd;xl.jsx=Aa;xl.jsxs=Aa;Pa.exports=xl;var o=Pa.exports,fi={},Fa={exports:{}},Se={},Ba={exports:{}},Ua={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,_){var T=P.length;P.push(_);e:for(;0<T;){var K=T-1>>>1,Z=P[K];if(0<l(Z,_))P[K]=_,P[T]=Z,T=K;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var _=P[0],T=P.pop();if(T!==_){P[0]=T;e:for(var K=0,Z=P.length,hr=Z>>>1;K<hr;){var Ct=2*(K+1)-1,Al=P[Ct],Nt=Ct+1,mr=P[Nt];if(0>l(Al,T))Nt<Z&&0>l(mr,Al)?(P[K]=mr,P[Nt]=T,K=Nt):(P[K]=Al,P[Ct]=T,K=Ct);else if(Nt<Z&&0>l(mr,T))P[K]=mr,P[Nt]=T,K=Nt;else break e}}return _}function l(P,_){var T=P.sortIndex-_.sortIndex;return T!==0?T:P.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],g=1,f=null,m=3,x=!1,y=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=P)r(c),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(c)}}function v(P){if(j=!1,p(P),!y)if(n(u)!==null)y=!0,Dl(N);else{var _=n(c);_!==null&&Ml(v,_.startTime-P)}}function N(P,_){y=!1,j&&(j=!1,h(L),L=-1),x=!0;var T=m;try{for(p(_),f=n(u);f!==null&&(!(f.expirationTime>_)||P&&!Te());){var K=f.callback;if(typeof K=="function"){f.callback=null,m=f.priorityLevel;var Z=K(f.expirationTime<=_);_=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(u)&&r(u),p(_)}else r(u);f=n(u)}if(f!==null)var hr=!0;else{var Ct=n(c);Ct!==null&&Ml(v,Ct.startTime-_),hr=!1}return hr}finally{f=null,m=T,x=!1}}var z=!1,R=null,L=-1,Q=5,b=-1;function Te(){return!(e.unstable_now()-b<Q)}function vn(){if(R!==null){var P=e.unstable_now();b=P;var _=!0;try{_=R(!0,P)}finally{_?wn():(z=!1,R=null)}}else z=!1}var wn;if(typeof d=="function")wn=function(){d(vn)};else if(typeof MessageChannel<"u"){var is=new MessageChannel,ed=is.port2;is.port1.onmessage=vn,wn=function(){ed.postMessage(null)}}else wn=function(){C(vn,0)};function Dl(P){R=P,z||(z=!0,wn())}function Ml(P,_){L=C(function(){P(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Dl(N))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var T=m;m=_;try{return P()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,_){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var T=m;m=P;try{return _()}finally{m=T}},e.unstable_scheduleCallback=function(P,_,T){var K=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?K+T:K):T=K,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=T+Z,P={id:g++,callback:_,priorityLevel:P,startTime:T,expirationTime:Z,sortIndex:-1},T>K?(P.sortIndex=T,t(c,P),n(u)===null&&P===n(c)&&(j?(h(L),L=-1):j=!0,Ml(v,T-K))):(P.sortIndex=Z,t(u,P),y||x||(y=!0,Dl(N))),P},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(P){var _=m;return function(){var T=m;m=_;try{return P.apply(this,arguments)}finally{m=T}}}})(Ua);Ba.exports=Ua;var Nd=Ba.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed=w,ke=Nd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wa=new Set,Wn={};function At(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Wn[e]=t,e=0;e<t.length;e++)Wa.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pi=Object.prototype.hasOwnProperty,Pd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,us={},cs={};function zd(e){return pi.call(cs,e)?!0:pi.call(us,e)?!1:Pd.test(e)?cs[e]=!0:(us[e]=!0,!1)}function Rd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ld(e,t,n,r){if(t===null||typeof t>"u"||Rd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pe(e,t,n,r,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new pe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var po=/[\-:]([a-z])/g;function ho(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(po,ho);le[t]=new pe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(po,ho);le[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(po,ho);le[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function mo(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ld(t,n,l,r)&&(n=null),r||l===null?zd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=Ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),go=Symbol.for("react.strict_mode"),hi=Symbol.for("react.profiler"),$a=Symbol.for("react.provider"),Va=Symbol.for("react.context"),xo=Symbol.for("react.forward_ref"),mi=Symbol.for("react.suspense"),gi=Symbol.for("react.suspense_list"),yo=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),Ha=Symbol.for("react.offscreen"),ds=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=ds&&e[ds]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Bl;function Rn(e){if(Bl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bl=t&&t[1]||""}return`
`+Bl+e}var Ul=!1;function Wl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,a=i.length-1;1<=s&&0<=a&&l[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(l[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||l[s]!==i[a]){var u=`
`+l[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function _d(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $t:return"Fragment";case Wt:return"Portal";case hi:return"Profiler";case go:return"StrictMode";case mi:return"Suspense";case gi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Va:return(e.displayName||"Context")+".Consumer";case $a:return(e._context.displayName||"Context")+".Provider";case xo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yo:return t=e.displayName||null,t!==null?t:xi(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return xi(e(t))}catch{}}return null}function Td(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xi(t);case 8:return t===go?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Id(e){var t=Qa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Id(e))}function Ka(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yi(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ga(e,t){t=t.checked,t!=null&&mo(e,"checked",t,!1)}function vi(e,t){Ga(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wi(e,t.type,n):t.hasOwnProperty("defaultValue")&&wi(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ps(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wi(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Ln(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function Ya(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ms(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ki(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,Ja=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bd=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){bd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function qa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Za(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=qa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Od=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Si(e,t){if(t){if(Od[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function vo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ei=null,tn=null,nn=null;function gs(e){if(e=dr(e)){if(typeof Ei!="function")throw Error(k(280));var t=e.stateNode;t&&(t=kl(t),Ei(e.stateNode,e.type,t))}}function eu(e){tn?nn?nn.push(e):nn=[e]:tn=e}function tu(){if(tn){var e=tn,t=nn;if(nn=tn=null,gs(e),t)for(e=0;e<t.length;e++)gs(t[e])}}function nu(e,t){return e(t)}function ru(){}var $l=!1;function lu(e,t,n){if($l)return e(t,n);$l=!0;try{return nu(e,t,n)}finally{$l=!1,(tn!==null||nn!==null)&&(ru(),tu())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Pi=!1;if(Xe)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Pi=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Pi=!1}function Dd(e,t,n,r,l,i,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var bn=!1,Qr=null,Kr=!1,zi=null,Md={onError:function(e){bn=!0,Qr=e}};function Ad(e,t,n,r,l,i,s,a,u){bn=!1,Qr=null,Dd.apply(Md,arguments)}function Fd(e,t,n,r,l,i,s,a,u){if(Ad.apply(this,arguments),bn){if(bn){var c=Qr;bn=!1,Qr=null}else throw Error(k(198));Kr||(Kr=!0,zi=c)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function iu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xs(e){if(Ft(e)!==e)throw Error(k(188))}function Bd(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return xs(l),e;if(i===r)return xs(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var s=!1,a=l.child;a;){if(a===n){s=!0,n=l,r=i;break}if(a===r){s=!0,r=l,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=l;break}if(a===r){s=!0,r=i,n=l;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function ou(e){return e=Bd(e),e!==null?su(e):null}function su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=su(e);if(t!==null)return t;e=e.sibling}return null}var au=ke.unstable_scheduleCallback,ys=ke.unstable_cancelCallback,Ud=ke.unstable_shouldYield,Wd=ke.unstable_requestPaint,G=ke.unstable_now,$d=ke.unstable_getCurrentPriorityLevel,wo=ke.unstable_ImmediatePriority,uu=ke.unstable_UserBlockingPriority,Gr=ke.unstable_NormalPriority,Vd=ke.unstable_LowPriority,cu=ke.unstable_IdlePriority,yl=null,$e=null;function Hd(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(yl,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Gd,Qd=Math.log,Kd=Math.LN2;function Gd(e){return e>>>=0,e===0?32:31-(Qd(e)/Kd|0)|0}var wr=64,jr=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~l;a!==0?r=_n(a):(i&=s,i!==0&&(r=_n(i)))}else s=n&~l,s!==0?r=_n(s):i!==0&&(r=_n(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function Yd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-Me(i),a=1<<s,u=l[s];u===-1?(!(a&n)||a&r)&&(l[s]=Yd(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function du(){var e=wr;return wr<<=1,!(wr&4194240)&&(wr=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function Jd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function jo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var M=0;function fu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pu,ko,hu,mu,gu,Li=!1,kr=[],ut=null,ct=null,dt=null,Hn=new Map,Qn=new Map,lt=[],qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vs(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":Hn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Sn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=dr(t),t!==null&&ko(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Zd(e,t,n,r,l){switch(t){case"focusin":return ut=Sn(ut,e,t,n,r,l),!0;case"dragenter":return ct=Sn(ct,e,t,n,r,l),!0;case"mouseover":return dt=Sn(dt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Hn.set(i,Sn(Hn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Qn.set(i,Sn(Qn.get(i)||null,e,t,n,r,l)),!0}return!1}function xu(e){var t=zt(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=iu(n),t!==null){e.blockedOn=t,gu(e.priority,function(){hu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Or(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_i(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ni=r,n.target.dispatchEvent(r),Ni=null}else return t=dr(n),t!==null&&ko(t),e.blockedOn=n,!1;t.shift()}return!0}function ws(e,t,n){Or(e)&&n.delete(t)}function ef(){Li=!1,ut!==null&&Or(ut)&&(ut=null),ct!==null&&Or(ct)&&(ct=null),dt!==null&&Or(dt)&&(dt=null),Hn.forEach(ws),Qn.forEach(ws)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Li||(Li=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,ef)))}function Kn(e){function t(l){return Cn(l,e)}if(0<kr.length){Cn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Cn(ut,e),ct!==null&&Cn(ct,e),dt!==null&&Cn(dt,e),Hn.forEach(t),Qn.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)xu(n),n.blockedOn===null&&lt.shift()}var rn=et.ReactCurrentBatchConfig,Xr=!0;function tf(e,t,n,r){var l=M,i=rn.transition;rn.transition=null;try{M=1,So(e,t,n,r)}finally{M=l,rn.transition=i}}function nf(e,t,n,r){var l=M,i=rn.transition;rn.transition=null;try{M=4,So(e,t,n,r)}finally{M=l,rn.transition=i}}function So(e,t,n,r){if(Xr){var l=_i(e,t,n,r);if(l===null)ei(e,t,r,Jr,n),vs(e,r);else if(Zd(l,e,t,n,r))r.stopPropagation();else if(vs(e,r),t&4&&-1<qd.indexOf(e)){for(;l!==null;){var i=dr(l);if(i!==null&&pu(i),i=_i(e,t,n,r),i===null&&ei(e,t,r,Jr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ei(e,t,r,null,n)}}var Jr=null;function _i(e,t,n,r){if(Jr=null,e=vo(r),e=zt(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=iu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function yu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($d()){case wo:return 1;case uu:return 4;case Gr:case Vd:return 16;case cu:return 536870912;default:return 16}default:return 16}}var ot=null,Co=null,Dr=null;function vu(){if(Dr)return Dr;var e,t=Co,n=t.length,r,l="value"in ot?ot.value:ot.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[i-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function js(){return!1}function Ce(e){function t(n,r,l,i,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:js,this.isPropagationStopped=js,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=Ce(mn),cr=V({},mn,{view:0,detail:0}),rf=Ce(cr),Hl,Ql,Nn,vl=V({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Hl=e.screenX-Nn.screenX,Ql=e.screenY-Nn.screenY):Ql=Hl=0,Nn=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),ks=Ce(vl),lf=V({},vl,{dataTransfer:0}),of=Ce(lf),sf=V({},cr,{relatedTarget:0}),Kl=Ce(sf),af=V({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=Ce(af),cf=V({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),df=Ce(cf),ff=V({},mn,{data:0}),Ss=Ce(ff),pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mf[e])?!!t[e]:!1}function Eo(){return gf}var xf=V({},cr,{key:function(e){if(e.key){var t=pf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eo,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yf=Ce(xf),vf=V({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cs=Ce(vf),wf=V({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eo}),jf=Ce(wf),kf=V({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sf=Ce(kf),Cf=V({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nf=Ce(Cf),Ef=[9,13,27,32],Po=Xe&&"CompositionEvent"in window,On=null;Xe&&"documentMode"in document&&(On=document.documentMode);var Pf=Xe&&"TextEvent"in window&&!On,wu=Xe&&(!Po||On&&8<On&&11>=On),Ns=" ",Es=!1;function ju(e,t){switch(e){case"keyup":return Ef.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function zf(e,t){switch(e){case"compositionend":return ku(t);case"keypress":return t.which!==32?null:(Es=!0,Ns);case"textInput":return e=t.data,e===Ns&&Es?null:e;default:return null}}function Rf(e,t){if(Vt)return e==="compositionend"||!Po&&ju(e,t)?(e=vu(),Dr=Co=ot=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wu&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function Su(e,t,n,r){eu(r),t=qr(t,"onChange"),0<t.length&&(n=new No("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dn=null,Gn=null;function _f(e){bu(e,0)}function wl(e){var t=Kt(e);if(Ka(t))return e}function Tf(e,t){if(e==="change")return t}var Cu=!1;if(Xe){var Gl;if(Xe){var Yl="oninput"in document;if(!Yl){var zs=document.createElement("div");zs.setAttribute("oninput","return;"),Yl=typeof zs.oninput=="function"}Gl=Yl}else Gl=!1;Cu=Gl&&(!document.documentMode||9<document.documentMode)}function Rs(){Dn&&(Dn.detachEvent("onpropertychange",Nu),Gn=Dn=null)}function Nu(e){if(e.propertyName==="value"&&wl(Gn)){var t=[];Su(t,Gn,e,vo(e)),lu(_f,t)}}function If(e,t,n){e==="focusin"?(Rs(),Dn=t,Gn=n,Dn.attachEvent("onpropertychange",Nu)):e==="focusout"&&Rs()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wl(Gn)}function Of(e,t){if(e==="click")return wl(t)}function Df(e,t){if(e==="input"||e==="change")return wl(t)}function Mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:Mf;function Yn(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!pi.call(t,l)||!Fe(e[l],t[l]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,t){var n=Ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ls(n)}}function Eu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Eu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pu(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function zo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Af(e){var t=Pu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Eu(n.ownerDocument.documentElement,n)){if(r!==null&&zo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=_s(n,i);var s=_s(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ff=Xe&&"documentMode"in document&&11>=document.documentMode,Ht=null,Ti=null,Mn=null,Ii=!1;function Ts(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ii||Ht==null||Ht!==Hr(r)||(r=Ht,"selectionStart"in r&&zo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Yn(Mn,r)||(Mn=r,r=qr(Ti,"onSelect"),0<r.length&&(t=new No("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ht)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},Xl={},zu={};Xe&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function jl(e){if(Xl[e])return Xl[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zu)return Xl[e]=t[n];return e}var Ru=jl("animationend"),Lu=jl("animationiteration"),_u=jl("animationstart"),Tu=jl("transitionend"),Iu=new Map,Is="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){Iu.set(e,t),At(t,[e])}for(var Jl=0;Jl<Is.length;Jl++){var ql=Is[Jl],Bf=ql.toLowerCase(),Uf=ql[0].toUpperCase()+ql.slice(1);wt(Bf,"on"+Uf)}wt(Ru,"onAnimationEnd");wt(Lu,"onAnimationIteration");wt(_u,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(Tu,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function bs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fd(r,t,void 0,e),e.currentTarget=null}function bu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;bs(l,a,c),i=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;bs(l,a,c),i=u}}}if(Kr)throw e=zi,Kr=!1,zi=null,e}function F(e,t){var n=t[Ai];n===void 0&&(n=t[Ai]=new Set);var r=e+"__bubble";n.has(r)||(Ou(t,e,2,!1),n.add(r))}function Zl(e,t,n){var r=0;t&&(r|=4),Ou(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Nr]){e[Nr]=!0,Wa.forEach(function(n){n!=="selectionchange"&&(Wf.has(n)||Zl(n,!1,e),Zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,Zl("selectionchange",!1,t))}}function Ou(e,t,n,r){switch(yu(t)){case 1:var l=tf;break;case 4:l=nf;break;default:l=So}n=l.bind(null,t,n,e),l=void 0,!Pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ei(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;s=s.return}for(;a!==null;){if(s=zt(a),s===null)return;if(u=s.tag,u===5||u===6){r=i=s;continue e}a=a.parentNode}}r=r.return}lu(function(){var c=i,g=vo(n),f=[];e:{var m=Iu.get(e);if(m!==void 0){var x=No,y=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":x=yf;break;case"focusin":y="focus",x=Kl;break;case"focusout":y="blur",x=Kl;break;case"beforeblur":case"afterblur":x=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=jf;break;case Ru:case Lu:case _u:x=uf;break;case Tu:x=Sf;break;case"scroll":x=rf;break;case"wheel":x=Nf;break;case"copy":case"cut":case"paste":x=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Cs}var j=(t&4)!==0,C=!j&&e==="scroll",h=j?m!==null?m+"Capture":null:m;j=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,h!==null&&(v=Vn(d,h),v!=null&&j.push(Jn(d,v,p)))),C)break;d=d.return}0<j.length&&(m=new x(m,y,null,n,g),f.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Ni&&(y=n.relatedTarget||n.fromElement)&&(zt(y)||y[Je]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=c,y=y?zt(y):null,y!==null&&(C=Ft(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=c),x!==y)){if(j=ks,v="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(j=Cs,v="onPointerLeave",h="onPointerEnter",d="pointer"),C=x==null?m:Kt(x),p=y==null?m:Kt(y),m=new j(v,d+"leave",x,n,g),m.target=C,m.relatedTarget=p,v=null,zt(g)===c&&(j=new j(h,d+"enter",y,n,g),j.target=p,j.relatedTarget=C,v=j),C=v,x&&y)t:{for(j=x,h=y,d=0,p=j;p;p=Ut(p))d++;for(p=0,v=h;v;v=Ut(v))p++;for(;0<d-p;)j=Ut(j),d--;for(;0<p-d;)h=Ut(h),p--;for(;d--;){if(j===h||h!==null&&j===h.alternate)break t;j=Ut(j),h=Ut(h)}j=null}else j=null;x!==null&&Os(f,m,x,j,!1),y!==null&&C!==null&&Os(f,C,y,j,!0)}}e:{if(m=c?Kt(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var N=Tf;else if(Ps(m))if(Cu)N=Df;else{N=bf;var z=If}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Of);if(N&&(N=N(e,c))){Su(f,N,n,g);break e}z&&z(e,m,c),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&wi(m,"number",m.value)}switch(z=c?Kt(c):window,e){case"focusin":(Ps(z)||z.contentEditable==="true")&&(Ht=z,Ti=c,Mn=null);break;case"focusout":Mn=Ti=Ht=null;break;case"mousedown":Ii=!0;break;case"contextmenu":case"mouseup":case"dragend":Ii=!1,Ts(f,n,g);break;case"selectionchange":if(Ff)break;case"keydown":case"keyup":Ts(f,n,g)}var R;if(Po)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Vt?ju(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(wu&&n.locale!=="ko"&&(Vt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Vt&&(R=vu()):(ot=g,Co="value"in ot?ot.value:ot.textContent,Vt=!0)),z=qr(c,L),0<z.length&&(L=new Ss(L,e,null,n,g),f.push({event:L,listeners:z}),R?L.data=R:(R=ku(n),R!==null&&(L.data=R)))),(R=Pf?zf(e,n):Rf(e,n))&&(c=qr(c,"onBeforeInput"),0<c.length&&(g=new Ss("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:c}),g.data=R))}bu(f,t)})}function Jn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Vn(e,n),i!=null&&r.unshift(Jn(e,i,l)),i=Vn(e,t),i!=null&&r.push(Jn(e,i,l))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Os(e,t,n,r,l){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=Vn(n,i),u!=null&&s.unshift(Jn(n,u,a))):l||(u=Vn(n,i),u!=null&&s.push(Jn(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var $f=/\r\n?/g,Vf=/\u0000|\uFFFD/g;function Ds(e){return(typeof e=="string"?e:""+e).replace($f,`
`).replace(Vf,"")}function Er(e,t,n){if(t=Ds(t),Ds(e)!==t&&n)throw Error(k(425))}function Zr(){}var bi=null,Oi=null;function Di(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mi=typeof setTimeout=="function"?setTimeout:void 0,Hf=typeof clearTimeout=="function"?clearTimeout:void 0,Ms=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ms<"u"?function(e){return Ms.resolve(null).then(e).catch(Kf)}:Mi;function Kf(e){setTimeout(function(){throw e})}function ti(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Kn(t)}function ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function As(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),We="__reactFiber$"+gn,qn="__reactProps$"+gn,Je="__reactContainer$"+gn,Ai="__reactEvents$"+gn,Gf="__reactListeners$"+gn,Yf="__reactHandles$"+gn;function zt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=As(e);e!==null;){if(n=e[We])return n;e=As(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[We]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function kl(e){return e[qn]||null}var Fi=[],Gt=-1;function jt(e){return{current:e}}function B(e){0>Gt||(e.current=Fi[Gt],Fi[Gt]=null,Gt--)}function A(e,t){Gt++,Fi[Gt]=e.current,e.current=t}var vt={},ae=jt(vt),ge=jt(!1),It=vt;function an(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function el(){B(ge),B(ae)}function Fs(e,t,n){if(ae.current!==vt)throw Error(k(168));A(ae,t),A(ge,n)}function Du(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Td(e)||"Unknown",l));return V({},n,r)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,It=ae.current,A(ae,e),A(ge,ge.current),!0}function Bs(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Du(e,t,It),r.__reactInternalMemoizedMergedChildContext=e,B(ge),B(ae),A(ae,e)):B(ge),A(ge,n)}var Qe=null,Sl=!1,ni=!1;function Mu(e){Qe===null?Qe=[e]:Qe.push(e)}function Xf(e){Sl=!0,Mu(e)}function kt(){if(!ni&&Qe!==null){ni=!0;var e=0,t=M;try{var n=Qe;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,Sl=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),au(wo,kt),l}finally{M=t,ni=!1}}return null}var Yt=[],Xt=0,nl=null,rl=0,Ee=[],Pe=0,bt=null,Ke=1,Ge="";function Et(e,t){Yt[Xt++]=rl,Yt[Xt++]=nl,nl=e,rl=t}function Au(e,t,n){Ee[Pe++]=Ke,Ee[Pe++]=Ge,Ee[Pe++]=bt,bt=e;var r=Ke;e=Ge;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var i=32-Me(t)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,Ke=1<<32-Me(t)+l|n<<l|r,Ge=i+e}else Ke=1<<i|n<<l|r,Ge=e}function Ro(e){e.return!==null&&(Et(e,1),Au(e,1,0))}function Lo(e){for(;e===nl;)nl=Yt[--Xt],Yt[Xt]=null,rl=Yt[--Xt],Yt[Xt]=null;for(;e===bt;)bt=Ee[--Pe],Ee[Pe]=null,Ge=Ee[--Pe],Ee[Pe]=null,Ke=Ee[--Pe],Ee[Pe]=null}var je=null,we=null,U=!1,De=null;function Fu(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Us(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,we=ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:Ke,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,we=null,!0):!1;default:return!1}}function Bi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ui(e){if(U){var t=we;if(t){var n=t;if(!Us(e,t)){if(Bi(e))throw Error(k(418));t=ft(n.nextSibling);var r=je;t&&Us(e,t)?Fu(r,n):(e.flags=e.flags&-4097|2,U=!1,je=e)}}else{if(Bi(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,je=e}}}function Ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Pr(e){if(e!==je)return!1;if(!U)return Ws(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Di(e.type,e.memoizedProps)),t&&(t=we)){if(Bi(e))throw Bu(),Error(k(418));for(;t;)Fu(e,t),t=ft(t.nextSibling)}if(Ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=je?ft(e.stateNode.nextSibling):null;return!0}function Bu(){for(var e=we;e;)e=ft(e.nextSibling)}function un(){we=je=null,U=!1}function _o(e){De===null?De=[e]:De.push(e)}var Jf=et.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=l.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function zr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $s(e){var t=e._init;return t(e._payload)}function Uu(e){function t(h,d){if(e){var p=h.deletions;p===null?(h.deletions=[d],h.flags|=16):p.push(d)}}function n(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function l(h,d){return h=gt(h,d),h.index=0,h.sibling=null,h}function i(h,d,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<d?(h.flags|=2,d):p):(h.flags|=2,d)):(h.flags|=1048576,d)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,d,p,v){return d===null||d.tag!==6?(d=ui(p,h.mode,v),d.return=h,d):(d=l(d,p),d.return=h,d)}function u(h,d,p,v){var N=p.type;return N===$t?g(h,d,p.props.children,v,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===nt&&$s(N)===d.type)?(v=l(d,p.props),v.ref=En(h,d,p),v.return=h,v):(v=Vr(p.type,p.key,p.props,null,h.mode,v),v.ref=En(h,d,p),v.return=h,v)}function c(h,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=ci(p,h.mode,v),d.return=h,d):(d=l(d,p.children||[]),d.return=h,d)}function g(h,d,p,v,N){return d===null||d.tag!==7?(d=Tt(p,h.mode,v,N),d.return=h,d):(d=l(d,p),d.return=h,d)}function f(h,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ui(""+d,h.mode,p),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xr:return p=Vr(d.type,d.key,d.props,null,h.mode,p),p.ref=En(h,null,d),p.return=h,p;case Wt:return d=ci(d,h.mode,p),d.return=h,d;case nt:var v=d._init;return f(h,v(d._payload),p)}if(Ln(d)||jn(d))return d=Tt(d,h.mode,p,null),d.return=h,d;zr(h,d)}return null}function m(h,d,p,v){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:a(h,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:return p.key===N?u(h,d,p,v):null;case Wt:return p.key===N?c(h,d,p,v):null;case nt:return N=p._init,m(h,d,N(p._payload),v)}if(Ln(p)||jn(p))return N!==null?null:g(h,d,p,v,null);zr(h,p)}return null}function x(h,d,p,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(p)||null,a(d,h,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xr:return h=h.get(v.key===null?p:v.key)||null,u(d,h,v,N);case Wt:return h=h.get(v.key===null?p:v.key)||null,c(d,h,v,N);case nt:var z=v._init;return x(h,d,p,z(v._payload),N)}if(Ln(v)||jn(v))return h=h.get(p)||null,g(d,h,v,N,null);zr(d,v)}return null}function y(h,d,p,v){for(var N=null,z=null,R=d,L=d=0,Q=null;R!==null&&L<p.length;L++){R.index>L?(Q=R,R=null):Q=R.sibling;var b=m(h,R,p[L],v);if(b===null){R===null&&(R=Q);break}e&&R&&b.alternate===null&&t(h,R),d=i(b,d,L),z===null?N=b:z.sibling=b,z=b,R=Q}if(L===p.length)return n(h,R),U&&Et(h,L),N;if(R===null){for(;L<p.length;L++)R=f(h,p[L],v),R!==null&&(d=i(R,d,L),z===null?N=R:z.sibling=R,z=R);return U&&Et(h,L),N}for(R=r(h,R);L<p.length;L++)Q=x(R,h,L,p[L],v),Q!==null&&(e&&Q.alternate!==null&&R.delete(Q.key===null?L:Q.key),d=i(Q,d,L),z===null?N=Q:z.sibling=Q,z=Q);return e&&R.forEach(function(Te){return t(h,Te)}),U&&Et(h,L),N}function j(h,d,p,v){var N=jn(p);if(typeof N!="function")throw Error(k(150));if(p=N.call(p),p==null)throw Error(k(151));for(var z=N=null,R=d,L=d=0,Q=null,b=p.next();R!==null&&!b.done;L++,b=p.next()){R.index>L?(Q=R,R=null):Q=R.sibling;var Te=m(h,R,b.value,v);if(Te===null){R===null&&(R=Q);break}e&&R&&Te.alternate===null&&t(h,R),d=i(Te,d,L),z===null?N=Te:z.sibling=Te,z=Te,R=Q}if(b.done)return n(h,R),U&&Et(h,L),N;if(R===null){for(;!b.done;L++,b=p.next())b=f(h,b.value,v),b!==null&&(d=i(b,d,L),z===null?N=b:z.sibling=b,z=b);return U&&Et(h,L),N}for(R=r(h,R);!b.done;L++,b=p.next())b=x(R,h,L,b.value,v),b!==null&&(e&&b.alternate!==null&&R.delete(b.key===null?L:b.key),d=i(b,d,L),z===null?N=b:z.sibling=b,z=b);return e&&R.forEach(function(vn){return t(h,vn)}),U&&Et(h,L),N}function C(h,d,p,v){if(typeof p=="object"&&p!==null&&p.type===$t&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:e:{for(var N=p.key,z=d;z!==null;){if(z.key===N){if(N=p.type,N===$t){if(z.tag===7){n(h,z.sibling),d=l(z,p.props.children),d.return=h,h=d;break e}}else if(z.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===nt&&$s(N)===z.type){n(h,z.sibling),d=l(z,p.props),d.ref=En(h,z,p),d.return=h,h=d;break e}n(h,z);break}else t(h,z);z=z.sibling}p.type===$t?(d=Tt(p.props.children,h.mode,v,p.key),d.return=h,h=d):(v=Vr(p.type,p.key,p.props,null,h.mode,v),v.ref=En(h,d,p),v.return=h,h=v)}return s(h);case Wt:e:{for(z=p.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(h,d.sibling),d=l(d,p.children||[]),d.return=h,h=d;break e}else{n(h,d);break}else t(h,d);d=d.sibling}d=ci(p,h.mode,v),d.return=h,h=d}return s(h);case nt:return z=p._init,C(h,d,z(p._payload),v)}if(Ln(p))return y(h,d,p,v);if(jn(p))return j(h,d,p,v);zr(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(h,d.sibling),d=l(d,p),d.return=h,h=d):(n(h,d),d=ui(p,h.mode,v),d.return=h,h=d),s(h)):n(h,d)}return C}var cn=Uu(!0),Wu=Uu(!1),ll=jt(null),il=null,Jt=null,To=null;function Io(){To=Jt=il=null}function bo(e){var t=ll.current;B(ll),e._currentValue=t}function Wi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){il=e,To=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(To!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(il===null)throw Error(k(308));Jt=e,il.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Rt=null;function Oo(e){Rt===null?Rt=[e]:Rt.push(e)}function $u(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Oo(t)):(n.next=l.next,l.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ye(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,qe(e,n)}return l=r.interleaved,l===null?(t.next=t,Oo(r)):(t.next=l.next,l.next=t),r.interleaved=t,qe(e,n)}function Ar(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jo(e,n)}}function Vs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ol(e,t,n,r){var l=e.updateQueue;rt=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?i=c:s.next=c,s=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==s&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=u))}if(i!==null){var f=l.baseState;s=0,g=c=u=null,a=i;do{var m=a.lane,x=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,j=a;switch(m=t,x=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){f=y.call(x,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,m=typeof y=="function"?y.call(x,f,m):y,m==null)break e;f=V({},f,m);break e;case 2:rt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=x,u=f):g=g.next=x,s|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=f),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Dt|=s,e.lanes=s,e.memoizedState=f}}function Hs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var fr={},Ve=jt(fr),Zn=jt(fr),er=jt(fr);function Lt(e){if(e===fr)throw Error(k(174));return e}function Mo(e,t){switch(A(er,t),A(Zn,e),A(Ve,fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ki(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ki(t,e)}B(Ve),A(Ve,t)}function dn(){B(Ve),B(Zn),B(er)}function Hu(e){Lt(er.current);var t=Lt(Ve.current),n=ki(t,e.type);t!==n&&(A(Zn,e),A(Ve,n))}function Ao(e){Zn.current===e&&(B(Ve),B(Zn))}var W=jt(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ri=[];function Fo(){for(var e=0;e<ri.length;e++)ri[e]._workInProgressVersionPrimary=null;ri.length=0}var Fr=et.ReactCurrentDispatcher,li=et.ReactCurrentBatchConfig,Ot=0,$=null,J=null,ee=null,al=!1,An=!1,tr=0,qf=0;function ie(){throw Error(k(321))}function Bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Uo(e,t,n,r,l,i){if(Ot=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?np:rp,e=n(r,l),An){i=0;do{if(An=!1,tr=0,25<=i)throw Error(k(301));i+=1,ee=J=null,t.updateQueue=null,Fr.current=lp,e=n(r,l)}while(An)}if(Fr.current=ul,t=J!==null&&J.next!==null,Ot=0,ee=J=$=null,al=!1,t)throw Error(k(300));return e}function Wo(){var e=tr!==0;return tr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?$.memoizedState=ee=e:ee=ee.next=e,ee}function _e(){if(J===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=ee===null?$.memoizedState:ee.next;if(t!==null)ee=t,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},ee===null?$.memoizedState=ee=e:ee=ee.next=e}return ee}function nr(e,t){return typeof t=="function"?t(e):t}function ii(e){var t=_e(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=s=null,u=null,c=i;do{var g=c.lane;if((Ot&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,s=r):u=u.next=f,$.lanes|=g,Dt|=g}c=c.next}while(c!==null&&c!==i);u===null?s=r:u.next=a,Fe(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,Dt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oi(e){var t=_e(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);Fe(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Qu(){}function Ku(e,t){var n=$,r=_e(),l=t(),i=!Fe(r.memoizedState,l);if(i&&(r.memoizedState=l,me=!0),r=r.queue,$o(Xu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,rr(9,Yu.bind(null,n,r,l,t),void 0,null),te===null)throw Error(k(349));Ot&30||Gu(n,t,l)}return l}function Gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yu(e,t,n,r){t.value=n,t.getSnapshot=r,Ju(t)&&qu(e)}function Xu(e,t,n){return n(function(){Ju(t)&&qu(e)})}function Ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function qu(e){var t=qe(e,1);t!==null&&Ae(t,e,1,-1)}function Qs(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},t.queue=e,e=e.dispatch=tp.bind(null,$,e),[t.memoizedState,e]}function rr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zu(){return _e().memoizedState}function Br(e,t,n,r){var l=Ue();$.flags|=e,l.memoizedState=rr(1|t,n,void 0,r===void 0?null:r)}function Cl(e,t,n,r){var l=_e();r=r===void 0?null:r;var i=void 0;if(J!==null){var s=J.memoizedState;if(i=s.destroy,r!==null&&Bo(r,s.deps)){l.memoizedState=rr(t,n,i,r);return}}$.flags|=e,l.memoizedState=rr(1|t,n,i,r)}function Ks(e,t){return Br(8390656,8,e,t)}function $o(e,t){return Cl(2048,8,e,t)}function ec(e,t){return Cl(4,2,e,t)}function tc(e,t){return Cl(4,4,e,t)}function nc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rc(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,nc.bind(null,t,e),n)}function Vo(){}function lc(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ic(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function oc(e,t,n){return Ot&21?(Fe(n,t)||(n=du(),$.lanes|=n,Dt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Zf(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=li.transition;li.transition={};try{e(!1),t()}finally{M=n,li.transition=r}}function sc(){return _e().memoizedState}function ep(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ac(e))uc(t,n);else if(n=$u(e,t,n,r),n!==null){var l=de();Ae(n,e,r,l),cc(n,t,r)}}function tp(e,t,n){var r=mt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ac(e))uc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(l.hasEagerState=!0,l.eagerState=a,Fe(a,s)){var u=t.interleaved;u===null?(l.next=l,Oo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=$u(e,t,l,r),n!==null&&(l=de(),Ae(n,e,r,l),cc(n,t,r))}}function ac(e){var t=e.alternate;return e===$||t!==null&&t===$}function uc(e,t){An=al=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,jo(e,n)}}var ul={readContext:Le,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},np={readContext:Le,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:Ks,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,nc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ep.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Qs,useDebugValue:Vo,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Qs(!1),t=e[0];return e=Zf.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=Ue();if(U){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),te===null)throw Error(k(349));Ot&30||Gu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ks(Xu.bind(null,r,i,e),[e]),r.flags|=2048,rr(9,Yu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ue(),t=te.identifierPrefix;if(U){var n=Ge,r=Ke;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rp={readContext:Le,useCallback:lc,useContext:Le,useEffect:$o,useImperativeHandle:rc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:ic,useReducer:ii,useRef:Zu,useState:function(){return ii(nr)},useDebugValue:Vo,useDeferredValue:function(e){var t=_e();return oc(t,J.memoizedState,e)},useTransition:function(){var e=ii(nr)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Qu,useSyncExternalStore:Ku,useId:sc,unstable_isNewReconciler:!1},lp={readContext:Le,useCallback:lc,useContext:Le,useEffect:$o,useImperativeHandle:rc,useInsertionEffect:ec,useLayoutEffect:tc,useMemo:ic,useReducer:oi,useRef:Zu,useState:function(){return oi(nr)},useDebugValue:Vo,useDeferredValue:function(e){var t=_e();return J===null?t.memoizedState=e:oc(t,J.memoizedState,e)},useTransition:function(){var e=oi(nr)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Qu,useSyncExternalStore:Ku,useId:sc,unstable_isNewReconciler:!1};function be(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $i(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nl={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),l=mt(e),i=Ye(r,l);i.payload=t,n!=null&&(i.callback=n),t=pt(e,i,l),t!==null&&(Ae(t,e,l,r),Ar(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),l=mt(e),i=Ye(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=pt(e,i,l),t!==null&&(Ae(t,e,l,r),Ar(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=mt(e),l=Ye(n,r);l.tag=2,t!=null&&(l.callback=t),t=pt(e,l,r),t!==null&&(Ae(t,e,r,n),Ar(t,e,r))}};function Gs(e,t,n,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(l,i):!0}function dc(e,t,n){var r=!1,l=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Le(i):(l=xe(t)?It:ae.current,r=t.contextTypes,i=(r=r!=null)?an(e,l):vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Nl.enqueueReplaceState(t,t.state,null)}function Vi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Do(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Le(i):(i=xe(t)?It:ae.current,l.context=an(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($i(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Nl.enqueueReplaceState(l,l.state,null),ol(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=_d(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function si(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ip=typeof WeakMap=="function"?WeakMap:Map;function fc(e,t,n){n=Ye(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){dl||(dl=!0,to=r),Hi(e,t)},n}function pc(e,t,n){n=Ye(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Hi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hi(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Xs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ip;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=vp.bind(null,e,t,n),t.then(e,e))}function Js(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qs(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ye(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var op=et.ReactCurrentOwner,me=!1;function ce(e,t,n,r){t.child=e===null?Wu(t,null,n,r):cn(t,e.child,n,r)}function Zs(e,t,n,r,l){n=n.render;var i=t.ref;return ln(t,l),r=Uo(e,t,n,r,i,l),n=Wo(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(U&&n&&Ro(t),t.flags|=1,ce(e,t,r,l),t.child)}function ea(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!qo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hc(e,t,i,r,l)):(e=Vr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(s,r)&&e.ref===t.ref)return Ze(e,t,l)}return t.flags|=1,e=gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function hc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Yn(i,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ze(e,t,l)}return Qi(e,t,n,r,l)}function mc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Zt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(Zt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,A(Zt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,A(Zt,ve),ve|=r;return ce(e,t,l,n),t.child}function gc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qi(e,t,n,r,l){var i=xe(n)?It:ae.current;return i=an(t,i),ln(t,l),n=Uo(e,t,n,r,i,l),r=Wo(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(U&&r&&Ro(t),t.flags|=1,ce(e,t,n,l),t.child)}function ta(e,t,n,r,l){if(xe(n)){var i=!0;tl(t)}else i=!1;if(ln(t,l),t.stateNode===null)Ur(e,t),dc(t,n,r),Vi(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Le(c):(c=xe(n)?It:ae.current,c=an(t,c));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ys(t,s,r,c),rt=!1;var m=t.memoizedState;s.state=m,ol(t,r,s,l),u=t.memoizedState,a!==r||m!==u||ge.current||rt?(typeof g=="function"&&($i(t,n,g,r),u=t.memoizedState),(a=rt||Gs(t,n,a,r,m,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Vu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:be(t.type,a),s.props=c,f=t.pendingProps,m=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=xe(n)?It:ae.current,u=an(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Ys(t,s,r,u),rt=!1,m=t.memoizedState,s.state=m,ol(t,r,s,l);var y=t.memoizedState;a!==f||m!==y||ge.current||rt?(typeof x=="function"&&($i(t,n,x,r),y=t.memoizedState),(c=rt||Gs(t,n,c,r,m,y,u)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ki(e,t,n,r,i,l)}function Ki(e,t,n,r,l,i){gc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&Bs(t,n,!1),Ze(e,t,i);r=t.stateNode,op.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=cn(t,e.child,null,i),t.child=cn(t,null,a,i)):ce(e,t,a,i),t.memoizedState=r.state,l&&Bs(t,n,!0),t.child}function xc(e){var t=e.stateNode;t.pendingContext?Fs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fs(e,t.context,!1),Mo(e,t.containerInfo)}function na(e,t,n,r,l){return un(),_o(l),t.flags|=256,ce(e,t,n,r),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function yc(e,t,n){var r=t.pendingProps,l=W.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),A(W,l&1),e===null)return Ui(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=zl(s,r,0,null),e=Tt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yi(n),t.memoizedState=Gi,e):Ho(t,s));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return sp(e,t,s,r,a,l,n);if(i){i=r.fallback,s=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=gt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=gt(a,i):(i=Tt(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Yi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Gi,r}return i=e.child,e=i.sibling,r=gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ho(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&_o(r),cn(t,e.child,null,n),e=Ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sp(e,t,n,r,l,i,s){if(n)return t.flags&256?(t.flags&=-257,r=si(Error(k(422))),Rr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=zl({mode:"visible",children:r.children},l,0,null),i=Tt(i,l,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&cn(t,e.child,null,s),t.child.memoizedState=Yi(s),t.memoizedState=Gi,i);if(!(t.mode&1))return Rr(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=si(i,r,void 0),Rr(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=te,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,qe(e,l),Ae(r,e,l,-1))}return Jo(),r=si(Error(k(421))),Rr(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=wp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=ft(l.nextSibling),je=t,U=!0,De=null,e!==null&&(Ee[Pe++]=Ke,Ee[Pe++]=Ge,Ee[Pe++]=bt,Ke=e.id,Ge=e.overflow,bt=t),t=Ho(t,r.children),t.flags|=4096,t)}function ra(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Wi(e.return,t,n)}function ai(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function vc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ra(e,n,t);else if(e.tag===19)ra(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(W,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ai(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&sl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ai(t,!0,n,null,i);break;case"together":ai(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ap(e,t,n){switch(t.tag){case 3:xc(t),un();break;case 5:Hu(t);break;case 1:xe(t.type)&&tl(t);break;case 4:Mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;A(ll,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?yc(e,t,n):(A(W,W.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);A(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,mc(e,t,n)}return Ze(e,t,n)}var wc,Xi,jc,kc;wc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xi=function(){};jc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Lt(Ve.current);var i=null;switch(n){case"input":l=yi(e,l),r=yi(e,r),i=[];break;case"select":l=V({},l,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":l=ji(e,l),r=ji(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zr)}Si(n,r);var s;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&F("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};kc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function up(e,t,n){var r=t.pendingProps;switch(Lo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return xe(t.type)&&el(),oe(t),null;case 3:return r=t.stateNode,dn(),B(ge),B(ae),Fo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(lo(De),De=null))),Xi(e,t),oe(t),null;case 5:Ao(t);var l=Lt(er.current);if(n=t.type,e!==null&&t.stateNode!=null)jc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return oe(t),null}if(e=Lt(Ve.current),Pr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[We]=t,r[qn]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<Tn.length;l++)F(Tn[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":fs(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":hs(r,i),F("invalid",r)}Si(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,a,e),l=["children",""+a]):Wn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&F("scroll",r)}switch(n){case"input":yr(r),ps(r,i,!0);break;case"textarea":yr(r),ms(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[We]=t,e[qn]=r,wc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ci(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<Tn.length;l++)F(Tn[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":fs(e,r),l=yi(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=V({},r,{value:void 0}),F("invalid",e);break;case"textarea":hs(e,r),l=ji(e,r),F("invalid",e);break;default:l=r}Si(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Za(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ja(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$n(e,u):typeof u=="number"&&$n(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&F("scroll",e):u!=null&&mo(e,i,u,s))}switch(n){case"input":yr(e),ps(e,r,!1);break;case"textarea":yr(e),ms(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?en(e,!!r.multiple,i,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)kc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Lt(er.current),Lt(Ve.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(i=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Er(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return oe(t),null;case 13:if(B(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))Bu(),un(),t.flags|=98560,i=!1;else if(i=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[We]=t}else un(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else De!==null&&(lo(De),De=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?q===0&&(q=3):Jo())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return dn(),Xi(e,t),e===null&&Xn(t.stateNode.containerInfo),oe(t),null;case 10:return bo(t.type._context),oe(t),null;case 17:return xe(t.type)&&el(),oe(t),null;case 19:if(B(W),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Pn(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=sl(e),s!==null){for(t.flags|=128,Pn(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(W,W.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>pn&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304)}else{if(!r)if(e=sl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!U)return oe(t),null}else 2*G()-i.renderingStartTime>pn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=W.current,A(W,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Xo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function cp(e,t){switch(Lo(t),t.tag){case 1:return xe(t.type)&&el(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),B(ge),B(ae),Fo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ao(t),null;case 13:if(B(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(W),null;case 4:return dn(),null;case 10:return bo(t.type._context),null;case 22:case 23:return Xo(),null;case 24:return null;default:return null}}var Lr=!1,se=!1,dp=typeof WeakSet=="function"?WeakSet:Set,E=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Ji(e,t,n){try{n()}catch(r){H(e,t,r)}}var la=!1;function fp(e,t){if(bi=Xr,e=Pu(),zo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,g=0,f=e,m=null;t:for(;;){for(var x;f!==n||l!==0&&f.nodeType!==3||(a=s+l),f!==i||r!==0&&f.nodeType!==3||(u=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===e)break t;if(m===n&&++c===l&&(a=s),m===i&&++g===r&&(u=s),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Oi={focusedElem:e,selectionRange:n},Xr=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,C=y.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?j:be(t.type,j),C);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){H(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=la,la=!1,y}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ji(t,n,i)}l=l.next}while(l!==r)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sc(e){var t=e.alternate;t!==null&&(e.alternate=null,Sc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[qn],delete t[Ai],delete t[Gf],delete t[Yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cc(e){return e.tag===5||e.tag===3||e.tag===4}function ia(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(r!==4&&(e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}function eo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(eo(e,t,n),e=e.sibling;e!==null;)eo(e,t,n),e=e.sibling}var ne=null,Oe=!1;function tt(e,t,n){for(n=n.child;n!==null;)Nc(e,t,n),n=n.sibling}function Nc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:se||qt(n,t);case 6:var r=ne,l=Oe;ne=null,tt(e,t,n),ne=r,Oe=l,ne!==null&&(Oe?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Oe?(e=ne,n=n.stateNode,e.nodeType===8?ti(e.parentNode,n):e.nodeType===1&&ti(e,n),Kn(e)):ti(ne,n.stateNode));break;case 4:r=ne,l=Oe,ne=n.stateNode.containerInfo,Oe=!0,tt(e,t,n),ne=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Ji(n,t,s),l=l.next}while(l!==r)}tt(e,t,n);break;case 1:if(!se&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){H(n,t,a)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,tt(e,t,n),se=r):tt(e,t,n);break;default:tt(e,t,n)}}function oa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new dp),t.forEach(function(r){var l=jp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Oe=!1;break e;case 3:ne=a.stateNode.containerInfo,Oe=!0;break e;case 4:ne=a.stateNode.containerInfo,Oe=!0;break e}a=a.return}if(ne===null)throw Error(k(160));Nc(i,s,l),ne=null,Oe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){H(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ec(t,e),t=t.sibling}function Ec(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Be(e),r&4){try{Fn(3,e,e.return),El(3,e)}catch(j){H(e,e.return,j)}try{Fn(5,e,e.return)}catch(j){H(e,e.return,j)}}break;case 1:Ie(t,e),Be(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Ie(t,e),Be(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{$n(l,"")}catch(j){H(e,e.return,j)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Ga(l,i),Ci(a,s);var c=Ci(a,i);for(s=0;s<u.length;s+=2){var g=u[s],f=u[s+1];g==="style"?Za(l,f):g==="dangerouslySetInnerHTML"?Ja(l,f):g==="children"?$n(l,f):mo(l,g,f,c)}switch(a){case"input":vi(l,i);break;case"textarea":Ya(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?en(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?en(l,!!i.multiple,i.defaultValue,!0):en(l,!!i.multiple,i.multiple?[]:"",!1))}l[qn]=i}catch(j){H(e,e.return,j)}}break;case 6:if(Ie(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(j){H(e,e.return,j)}}break;case 3:if(Ie(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(j){H(e,e.return,j)}break;case 4:Ie(t,e),Be(e);break;case 13:Ie(t,e),Be(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Go=G())),r&4&&oa(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(se=(c=se)||g,Ie(t,e),se=c):Ie(t,e),Be(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(E=e,g=e.child;g!==null;){for(f=E=g;E!==null;){switch(m=E,x=m.child,m.tag){case 0:case 11:case 14:case 15:Fn(4,m,m.return);break;case 1:qt(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){H(r,n,j)}}break;case 5:qt(m,m.return);break;case 22:if(m.memoizedState!==null){aa(f);continue}}x!==null?(x.return=m,E=x):aa(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{l=f.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=qa("display",s))}catch(j){H(e,e.return,j)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(j){H(e,e.return,j)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ie(t,e),Be(e),r&4&&oa(e);break;case 21:break;default:Ie(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&($n(l,""),r.flags&=-33);var i=ia(e);eo(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ia(e);Zi(e,a,s);break;default:throw Error(k(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pp(e,t,n){E=e,Pc(e)}function Pc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||Lr;if(!s){var a=l.alternate,u=a!==null&&a.memoizedState!==null||se;a=Lr;var c=se;if(Lr=s,(se=u)&&!c)for(E=l;E!==null;)s=E,u=s.child,s.tag===22&&s.memoizedState!==null?ua(l):u!==null?(u.return=s,E=u):ua(l);for(;i!==null;)E=i,Pc(i),i=i.sibling;E=l,Lr=a,se=c}sa(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,E=i):sa(e)}}function sa(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||El(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Hs(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hs(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&Kn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}se||t.flags&512&&qi(t)}catch(m){H(t,t.return,m)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function aa(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function ua(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{El(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){H(t,l,u)}}var i=t.return;try{qi(t)}catch(u){H(t,i,u)}break;case 5:var s=t.return;try{qi(t)}catch(u){H(t,s,u)}}}catch(u){H(t,t.return,u)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var hp=Math.ceil,cl=et.ReactCurrentDispatcher,Qo=et.ReactCurrentOwner,Re=et.ReactCurrentBatchConfig,D=0,te=null,Y=null,re=0,ve=0,Zt=jt(0),q=0,lr=null,Dt=0,Pl=0,Ko=0,Bn=null,he=null,Go=0,pn=1/0,He=null,dl=!1,to=null,ht=null,_r=!1,st=null,fl=0,Un=0,no=null,Wr=-1,$r=0;function de(){return D&6?G():Wr!==-1?Wr:Wr=G()}function mt(e){return e.mode&1?D&2&&re!==0?re&-re:Jf.transition!==null?($r===0&&($r=du()),$r):(e=M,e!==0||(e=window.event,e=e===void 0?16:yu(e.type)),e):1}function Ae(e,t,n,r){if(50<Un)throw Un=0,no=null,Error(k(185));ur(e,n,r),(!(D&2)||e!==te)&&(e===te&&(!(D&2)&&(Pl|=n),q===4&&it(e,re)),ye(e,r),n===1&&D===0&&!(t.mode&1)&&(pn=G()+500,Sl&&kt()))}function ye(e,t){var n=e.callbackNode;Xd(e,t);var r=Yr(e,e===te?re:0);if(r===0)n!==null&&ys(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ys(n),t===1)e.tag===0?Xf(ca.bind(null,e)):Mu(ca.bind(null,e)),Qf(function(){!(D&6)&&kt()}),n=null;else{switch(fu(r)){case 1:n=wo;break;case 4:n=uu;break;case 16:n=Gr;break;case 536870912:n=cu;break;default:n=Gr}n=Oc(n,zc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zc(e,t){if(Wr=-1,$r=0,D&6)throw Error(k(327));var n=e.callbackNode;if(on()&&e.callbackNode!==n)return null;var r=Yr(e,e===te?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pl(e,r);else{t=r;var l=D;D|=2;var i=Lc();(te!==e||re!==t)&&(He=null,pn=G()+500,_t(e,t));do try{xp();break}catch(a){Rc(e,a)}while(!0);Io(),cl.current=i,D=l,Y!==null?t=0:(te=null,re=0,t=q)}if(t!==0){if(t===2&&(l=Ri(e),l!==0&&(r=l,t=ro(e,l))),t===1)throw n=lr,_t(e,0),it(e,r),ye(e,G()),n;if(t===6)it(e,r);else{if(l=e.current.alternate,!(r&30)&&!mp(l)&&(t=pl(e,r),t===2&&(i=Ri(e),i!==0&&(r=i,t=ro(e,i))),t===1))throw n=lr,_t(e,0),it(e,r),ye(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Pt(e,he,He);break;case 3:if(it(e,r),(r&130023424)===r&&(t=Go+500-G(),10<t)){if(Yr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Mi(Pt.bind(null,e,he,He),t);break}Pt(e,he,He);break;case 4:if(it(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-Me(r);i=1<<s,s=t[s],s>l&&(l=s),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hp(r/1960))-r,10<r){e.timeoutHandle=Mi(Pt.bind(null,e,he,He),r);break}Pt(e,he,He);break;case 5:Pt(e,he,He);break;default:throw Error(k(329))}}}return ye(e,G()),e.callbackNode===n?zc.bind(null,e):null}function ro(e,t){var n=Bn;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=pl(e,t),e!==2&&(t=he,he=n,t!==null&&lo(t)),e}function lo(e){he===null?he=e:he.push.apply(he,e)}function mp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Fe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function it(e,t){for(t&=~Ko,t&=~Pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function ca(e){if(D&6)throw Error(k(327));on();var t=Yr(e,0);if(!(t&1))return ye(e,G()),null;var n=pl(e,t);if(e.tag!==0&&n===2){var r=Ri(e);r!==0&&(t=r,n=ro(e,r))}if(n===1)throw n=lr,_t(e,0),it(e,t),ye(e,G()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,he,He),ye(e,G()),null}function Yo(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(pn=G()+500,Sl&&kt())}}function Mt(e){st!==null&&st.tag===0&&!(D&6)&&on();var t=D;D|=1;var n=Re.transition,r=M;try{if(Re.transition=null,M=1,e)return e()}finally{M=r,Re.transition=n,D=t,!(D&6)&&kt()}}function Xo(){ve=Zt.current,B(Zt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(Lo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:dn(),B(ge),B(ae),Fo();break;case 5:Ao(r);break;case 4:dn();break;case 13:B(W);break;case 19:B(W);break;case 10:bo(r.type._context);break;case 22:case 23:Xo()}n=n.return}if(te=e,Y=e=gt(e.current,null),re=ve=t,q=0,lr=null,Ko=Pl=Dt=0,he=Bn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}n.pending=r}Rt=null}return e}function Rc(e,t){do{var n=Y;try{if(Io(),Fr.current=ul,al){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}al=!1}if(Ot=0,ee=J=$=null,An=!1,tr=0,Qo.current=null,n===null||n.return===null){q=1,lr=t,Y=null;break}e:{var i=e,s=n.return,a=n,u=t;if(t=re,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=a,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Js(s);if(x!==null){x.flags&=-257,qs(x,s,a,i,t),x.mode&1&&Xs(i,c,t),t=x,u=c;var y=t.updateQueue;if(y===null){var j=new Set;j.add(u),t.updateQueue=j}else y.add(u);break e}else{if(!(t&1)){Xs(i,c,t),Jo();break e}u=Error(k(426))}}else if(U&&a.mode&1){var C=Js(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),qs(C,s,a,i,t),_o(fn(u,a));break e}}i=u=fn(u,a),q!==4&&(q=2),Bn===null?Bn=[i]:Bn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=fc(i,u,t);Vs(i,h);break e;case 1:a=u;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ht===null||!ht.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=pc(i,a,t);Vs(i,v);break e}}i=i.return}while(i!==null)}Tc(n)}catch(N){t=N,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Lc(){var e=cl.current;return cl.current=ul,e===null?ul:e}function Jo(){(q===0||q===3||q===2)&&(q=4),te===null||!(Dt&268435455)&&!(Pl&268435455)||it(te,re)}function pl(e,t){var n=D;D|=2;var r=Lc();(te!==e||re!==t)&&(He=null,_t(e,t));do try{gp();break}catch(l){Rc(e,l)}while(!0);if(Io(),D=n,cl.current=r,Y!==null)throw Error(k(261));return te=null,re=0,q}function gp(){for(;Y!==null;)_c(Y)}function xp(){for(;Y!==null&&!Ud();)_c(Y)}function _c(e){var t=bc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Tc(e):Y=t,Qo.current=null}function Tc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cp(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,Y=null;return}}else if(n=up(n,t,ve),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);q===0&&(q=5)}function Pt(e,t,n){var r=M,l=Re.transition;try{Re.transition=null,M=1,yp(e,t,n,r)}finally{Re.transition=l,M=r}return null}function yp(e,t,n,r){do on();while(st!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jd(e,i),e===te&&(Y=te=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_r||(_r=!0,Oc(Gr,function(){return on(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Re.transition,Re.transition=null;var s=M;M=1;var a=D;D|=4,Qo.current=null,fp(e,n),Ec(n,e),Af(Oi),Xr=!!bi,Oi=bi=null,e.current=n,pp(n),Wd(),D=a,M=s,Re.transition=i}else e.current=n;if(_r&&(_r=!1,st=e,fl=l),i=e.pendingLanes,i===0&&(ht=null),Hd(n.stateNode),ye(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(dl)throw dl=!1,e=to,to=null,e;return fl&1&&e.tag!==0&&on(),i=e.pendingLanes,i&1?e===no?Un++:(Un=0,no=e):Un=0,kt(),null}function on(){if(st!==null){var e=fu(fl),t=Re.transition,n=M;try{if(Re.transition=null,M=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,fl=0,D&6)throw Error(k(331));var l=D;for(D|=4,E=e.current;E!==null;){var i=E,s=i.child;if(E.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(E=c;E!==null;){var g=E;switch(g.tag){case 0:case 11:case 15:Fn(8,g,i)}var f=g.child;if(f!==null)f.return=g,E=f;else for(;E!==null;){g=E;var m=g.sibling,x=g.return;if(Sc(g),g===c){E=null;break}if(m!==null){m.return=x,E=m;break}E=x}}}var y=i.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}E=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,E=s;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,E=h;break e}E=i.return}}var d=e.current;for(E=d;E!==null;){s=E;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,E=p;else e:for(s=d;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:El(9,a)}}catch(N){H(a,a.return,N)}if(a===s){E=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,E=v;break e}E=a.return}}if(D=l,kt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(yl,e)}catch{}r=!0}return r}finally{M=n,Re.transition=t}}return!1}function da(e,t,n){t=fn(n,t),t=fc(e,t,1),e=pt(e,t,1),t=de(),e!==null&&(ur(e,1,t),ye(e,t))}function H(e,t,n){if(e.tag===3)da(e,e,n);else for(;t!==null;){if(t.tag===3){da(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=fn(n,e),e=pc(t,e,1),t=pt(t,e,1),e=de(),t!==null&&(ur(t,1,e),ye(t,e));break}}t=t.return}}function vp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(q===4||q===3&&(re&130023424)===re&&500>G()-Go?_t(e,0):Ko|=n),ye(e,t)}function Ic(e,t){t===0&&(e.mode&1?(t=jr,jr<<=1,!(jr&130023424)&&(jr=4194304)):t=1);var n=de();e=qe(e,t),e!==null&&(ur(e,t,n),ye(e,n))}function wp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ic(e,n)}function jp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Ic(e,n)}var bc;bc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ge.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,ap(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&Au(t,rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var l=an(t,ae.current);ln(t,n),l=Uo(null,t,r,e,l,n);var i=Wo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(i=!0,tl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Do(t),l.updater=Nl,t.stateNode=l,l._reactInternals=t,Vi(t,r,e,n),t=Ki(null,t,r,!0,i,n)):(t.tag=0,U&&i&&Ro(t),ce(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Sp(r),e=be(r,e),l){case 0:t=Qi(null,t,r,e,n);break e;case 1:t=ta(null,t,r,e,n);break e;case 11:t=Zs(null,t,r,e,n);break e;case 14:t=ea(null,t,r,be(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),Qi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),ta(e,t,r,l,n);case 3:e:{if(xc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Vu(e,t),ol(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=fn(Error(k(423)),t),t=na(e,t,r,n,l);break e}else if(r!==l){l=fn(Error(k(424)),t),t=na(e,t,r,n,l);break e}else for(we=ft(t.stateNode.containerInfo.firstChild),je=t,U=!0,De=null,n=Wu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(un(),r===l){t=Ze(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Hu(t),e===null&&Ui(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,Di(r,l)?s=null:i!==null&&Di(r,i)&&(t.flags|=32),gc(e,t),ce(e,t,s,n),t.child;case 6:return e===null&&Ui(t),null;case 13:return yc(e,t,n);case 4:return Mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cn(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),Zs(e,t,r,l,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,A(ll,r._currentValue),r._currentValue=s,i!==null)if(Fe(i.value,s)){if(i.children===l.children&&!ge.current){t=Ze(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ye(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Wi(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Wi(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ce(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,ln(t,n),l=Le(l),r=r(l),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,l=be(r,t.pendingProps),l=be(r.type,l),ea(e,t,r,l,n);case 15:return hc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),Ur(e,t),t.tag=1,xe(r)?(e=!0,tl(t)):e=!1,ln(t,n),dc(t,r,l),Vi(t,r,l,n),Ki(null,t,r,!0,e,n);case 19:return vc(e,t,n);case 22:return mc(e,t,n)}throw Error(k(156,t.tag))};function Oc(e,t){return au(e,t)}function kp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new kp(e,t,n,r)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sp(e){if(typeof e=="function")return qo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xo)return 11;if(e===yo)return 14}return 2}function gt(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,l,i){var s=2;if(r=e,typeof e=="function")qo(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case $t:return Tt(n.children,l,i,t);case go:s=8,l|=8;break;case hi:return e=ze(12,n,t,l|2),e.elementType=hi,e.lanes=i,e;case mi:return e=ze(13,n,t,l),e.elementType=mi,e.lanes=i,e;case gi:return e=ze(19,n,t,l),e.elementType=gi,e.lanes=i,e;case Ha:return zl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $a:s=10;break e;case Va:s=9;break e;case xo:s=11;break e;case yo:s=14;break e;case nt:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=ze(s,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Tt(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=ze(22,e,r,t),e.elementType=Ha,e.lanes=n,e.stateNode={isHidden:!1},e}function ui(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function ci(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Zo(e,t,n,r,l,i,s,a,u){return e=new Cp(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(i),e}function Np(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Dc(e){if(!e)return vt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(xe(n))return Du(e,n,t)}return t}function Mc(e,t,n,r,l,i,s,a,u){return e=Zo(n,r,!0,e,l,i,s,a,u),e.context=Dc(null),n=e.current,r=de(),l=mt(n),i=Ye(r,l),i.callback=t??null,pt(n,i,l),e.current.lanes=l,ur(e,l,r),ye(e,r),e}function Rl(e,t,n,r){var l=t.current,i=de(),s=mt(l);return n=Dc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ye(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(l,t,s),e!==null&&(Ae(e,l,s,i),Ar(e,l,s)),s}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fa(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function es(e,t){fa(e,t),(e=e.alternate)&&fa(e,t)}function Ep(){return null}var Ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function ts(e){this._internalRoot=e}Ll.prototype.render=ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Rl(e,t,null,null)};Ll.prototype.unmount=ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){Rl(null,e,null,null)}),t[Je]=null}};function Ll(e){this._internalRoot=e}Ll.prototype.unstable_scheduleHydration=function(e){if(e){var t=mu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&xu(e)}};function ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pa(){}function Pp(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=hl(s);i.call(c)}}var s=Mc(t,r,e,0,null,!1,!1,"",pa);return e._reactRootContainer=s,e[Je]=s.current,Xn(e.nodeType===8?e.parentNode:e),Mt(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=hl(u);a.call(c)}}var u=Zo(e,0,!1,null,null,!1,!1,"",pa);return e._reactRootContainer=u,e[Je]=u.current,Xn(e.nodeType===8?e.parentNode:e),Mt(function(){Rl(t,u,n,r)}),u}function Tl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var a=l;l=function(){var u=hl(s);a.call(u)}}Rl(t,s,e,l)}else s=Pp(n,t,e,l,r);return hl(s)}pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);n!==0&&(jo(t,n|1),ye(t,G()),!(D&6)&&(pn=G()+500,kt()))}break;case 13:Mt(function(){var r=qe(e,1);if(r!==null){var l=de();Ae(r,e,1,l)}}),es(e,1)}};ko=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=de();Ae(t,e,134217728,n)}es(e,134217728)}};hu=function(e){if(e.tag===13){var t=mt(e),n=qe(e,t);if(n!==null){var r=de();Ae(n,e,t,r)}es(e,t)}};mu=function(){return M};gu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Ei=function(e,t,n){switch(t){case"input":if(vi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=kl(r);if(!l)throw Error(k(90));Ka(r),vi(r,l)}}}break;case"textarea":Ya(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};nu=Yo;ru=Mt;var zp={usingClientEntryPoint:!1,Events:[dr,Kt,kl,eu,tu,Yo]},zn={findFiberByHostInstance:zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rp={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ou(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||Ep,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{yl=Tr.inject(Rp),$e=Tr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ns(t))throw Error(k(200));return Np(e,t,null,n)};Se.createRoot=function(e,t){if(!ns(e))throw Error(k(299));var n=!1,r="",l=Ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Zo(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,Xn(e.nodeType===8?e.parentNode:e),new ts(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=ou(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Mt(e)};Se.hydrate=function(e,t,n){if(!_l(t))throw Error(k(200));return Tl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!ns(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",s=Ac;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Mc(t,null,e,1,n??null,l,!1,i,s),e[Je]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ll(t)};Se.render=function(e,t,n){if(!_l(t))throw Error(k(200));return Tl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!_l(e))throw Error(k(40));return e._reactRootContainer?(Mt(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Se.unstable_batchedUpdates=Yo;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Tl(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc)}catch(e){console.error(e)}}Fc(),Fa.exports=Se;var Lp=Fa.exports,ha=Lp;fi.createRoot=ha.createRoot,fi.hydrateRoot=ha.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(null,arguments)}var at;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(at||(at={}));const ma="popstate";function _p(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:s,hash:a}=r.location;return io("",{pathname:i,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:ml(l)}return Ip(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Tp(){return Math.random().toString(36).substr(2,8)}function ga(e,t){return{usr:e.state,key:e.key,idx:t}}function io(e,t,n,r){return n===void 0&&(n=null),ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?xn(t):t,{state:n,key:t&&t.key||r||Tp()})}function ml(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function xn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ip(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,s=l.history,a=at.Pop,u=null,c=g();c==null&&(c=0,s.replaceState(ir({},s.state,{idx:c}),""));function g(){return(s.state||{idx:null}).idx}function f(){a=at.Pop;let C=g(),h=C==null?null:C-c;c=C,u&&u({action:a,location:j.location,delta:h})}function m(C,h){a=at.Push;let d=io(j.location,C,h);c=g()+1;let p=ga(d,c),v=j.createHref(d);try{s.pushState(p,"",v)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(v)}i&&u&&u({action:a,location:j.location,delta:1})}function x(C,h){a=at.Replace;let d=io(j.location,C,h);c=g();let p=ga(d,c),v=j.createHref(d);s.replaceState(p,"",v),i&&u&&u({action:a,location:j.location,delta:0})}function y(C){let h=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof C=="string"?C:ml(C);return d=d.replace(/ $/,"%20"),X(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let j={get action(){return a},get location(){return e(l,s)},listen(C){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(ma,f),u=C,()=>{l.removeEventListener(ma,f),u=null}},createHref(C){return t(l,C)},createURL:y,encodeLocation(C){let h=y(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:x,go(C){return s.go(C)}};return j}var xa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xa||(xa={}));function bp(e,t,n){return n===void 0&&(n="/"),Op(e,t,n)}function Op(e,t,n,r){let l=typeof t=="string"?xn(t):t,i=rs(l.pathname||"/",n);if(i==null)return null;let s=Uc(e);Dp(s);let a=null,u=Gp(i);for(let c=0;a==null&&c<s.length;++c)a=Hp(s[c],u);return a}function Uc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,s,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};u.relativePath.startsWith("/")&&(X(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=xt([r,u.relativePath]),g=n.concat(u);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Uc(i.children,t,g,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:$p(c,i.index),routesMeta:g})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,s);else for(let u of Wc(i.path))l(i,s,u)}),t}function Wc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let s=Wc(r.join("/")),a=[];return a.push(...s.map(u=>u===""?i:[i,u].join("/"))),l&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Dp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Vp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Mp=/^:[\w-]+$/,Ap=3,Fp=2,Bp=1,Up=10,Wp=-2,ya=e=>e==="*";function $p(e,t){let n=e.split("/"),r=n.length;return n.some(ya)&&(r+=Wp),t&&(r+=Fp),n.filter(l=>!ya(l)).reduce((l,i)=>l+(Mp.test(i)?Ap:i===""?Bp:Up),r)}function Vp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Hp(e,t,n){let{routesMeta:r}=e,l={},i="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,g=i==="/"?t:t.slice(i.length)||"/",f=Qp({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),m=u.route;if(!f)return null;Object.assign(l,f.params),s.push({params:l,pathname:xt([i,f.pathname]),pathnameBase:Jp(xt([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=xt([i,f.pathnameBase]))}return s}function Qp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],s=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,g,f)=>{let{paramName:m,isOptional:x}=g;if(m==="*"){let j=a[f]||"";s=i.slice(0,i.length-j.length).replace(/(.)\/+$/,"$1")}const y=a[f];return x&&!y?c[m]=void 0:c[m]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:s,pattern:e}}function Kp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Gp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function rs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Yp(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?xn(e):e,i;return n?(n=Hc(n),n.startsWith("/")?i=va(n.substring(1),"/"):i=va(n,t)):i=t,{pathname:i,search:qp(r),hash:Zp(l)}}function va(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function di(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $c(e,t){let n=Xp(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Vc(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=xn(e):(l=ir({},e),X(!l.pathname||!l.pathname.includes("?"),di("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),di("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),di("#","search","hash",l)));let i=e===""||l.pathname==="",s=i?"/":l.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;l.pathname=m.join("/")}a=f>=0?t[f]:"/"}let u=Yp(l,a),c=s&&s!=="/"&&s.endsWith("/"),g=(i||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const Hc=e=>e.replace(/\/\/+/g,"/"),xt=e=>Hc(e.join("/")),Jp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function eh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qc=["post","put","patch","delete"];new Set(Qc);const th=["get",...Qc];new Set(th);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function or(){return or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},or.apply(null,arguments)}const ls=w.createContext(null),nh=w.createContext(null),Bt=w.createContext(null),Il=w.createContext(null),St=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Kc=w.createContext(null);function rh(e,t){let{relative:n}=t===void 0?{}:t;pr()||X(!1);let{basename:r,navigator:l}=w.useContext(Bt),{hash:i,pathname:s,search:a}=Yc(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:xt([r,s])),l.createHref({pathname:u,search:a,hash:i})}function pr(){return w.useContext(Il)!=null}function bl(){return pr()||X(!1),w.useContext(Il).location}function Gc(e){w.useContext(Bt).static||w.useLayoutEffect(e)}function yn(){let{isDataRoute:e}=w.useContext(St);return e?xh():lh()}function lh(){pr()||X(!1);let e=w.useContext(ls),{basename:t,future:n,navigator:r}=w.useContext(Bt),{matches:l}=w.useContext(St),{pathname:i}=bl(),s=JSON.stringify($c(l,n.v7_relativeSplatPath)),a=w.useRef(!1);return Gc(()=>{a.current=!0}),w.useCallback(function(c,g){if(g===void 0&&(g={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Vc(c,JSON.parse(s),i,g.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:xt([t,f.pathname])),(g.replace?r.replace:r.push)(f,g.state,g)},[t,r,s,i,e])}function ih(){let{matches:e}=w.useContext(St),t=e[e.length-1];return t?t.params:{}}function Yc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Bt),{matches:l}=w.useContext(St),{pathname:i}=bl(),s=JSON.stringify($c(l,r.v7_relativeSplatPath));return w.useMemo(()=>Vc(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function oh(e,t){return sh(e,t)}function sh(e,t,n,r){pr()||X(!1);let{navigator:l}=w.useContext(Bt),{matches:i}=w.useContext(St),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=bl(),g;if(t){var f;let C=typeof t=="string"?xn(t):t;u==="/"||(f=C.pathname)!=null&&f.startsWith(u)||X(!1),g=C}else g=c;let m=g.pathname||"/",x=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=bp(e,{pathname:x}),j=fh(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:xt([u,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:xt([u,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,n,r);return t&&j?w.createElement(Il.Provider,{value:{location:or({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:at.Pop}},j):j}function ah(){let e=gh(),t=eh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:l},n):null,null)}const uh=w.createElement(ah,null);class ch extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(St.Provider,{value:this.props.routeContext},w.createElement(Kc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dh(e){let{routeContext:t,match:n,children:r}=e,l=w.useContext(ls);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(St.Provider,{value:t},r)}function fh(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let g=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);g>=0||X(!1),s=s.slice(0,Math.min(s.length,g+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<s.length;g++){let f=s[g];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=g),f.route.id){let{loaderData:m,errors:x}=n,y=f.route.loader&&m[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||y){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((g,f,m)=>{let x,y=!1,j=null,C=null;n&&(x=a&&f.route.id?a[f.route.id]:void 0,j=f.route.errorElement||uh,u&&(c<0&&m===0?(yh("route-fallback"),y=!0,C=null):c===m&&(y=!0,C=f.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,m+1)),d=()=>{let p;return x?p=j:y?p=C:f.route.Component?p=w.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=g,w.createElement(dh,{match:f,routeContext:{outlet:g,matches:h,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?w.createElement(ch,{location:n.location,revalidation:n.revalidation,component:j,error:x,children:d(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):d()},null)}var Xc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Xc||{}),Jc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Jc||{});function ph(e){let t=w.useContext(ls);return t||X(!1),t}function hh(e){let t=w.useContext(nh);return t||X(!1),t}function mh(e){let t=w.useContext(St);return t||X(!1),t}function qc(e){let t=mh(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function gh(){var e;let t=w.useContext(Kc),n=hh(),r=qc();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function xh(){let{router:e}=ph(Xc.UseNavigateStable),t=qc(Jc.UseNavigateStable),n=w.useRef(!1);return Gc(()=>{n.current=!0}),w.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,or({fromRouteId:t},i)))},[e,t])}const wa={};function yh(e,t,n){wa[e]||(wa[e]=!0)}function vh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ue(e){X(!1)}function wh(e){let{basename:t="/",children:n=null,location:r,navigationType:l=at.Pop,navigator:i,static:s=!1,future:a}=e;pr()&&X(!1);let u=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:i,static:s,future:or({v7_relativeSplatPath:!1},a)}),[u,a,i,s]);typeof r=="string"&&(r=xn(r));let{pathname:g="/",search:f="",hash:m="",state:x=null,key:y="default"}=r,j=w.useMemo(()=>{let C=rs(g,u);return C==null?null:{location:{pathname:C,search:f,hash:m,state:x,key:y},navigationType:l}},[u,g,f,m,x,y,l]);return j==null?null:w.createElement(Bt.Provider,{value:c},w.createElement(Il.Provider,{children:n,value:j}))}function ja(e){let{children:t,location:n}=e;return oh(oo(t),n)}new Promise(()=>{});function oo(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,l)=>{if(!w.isValidElement(r))return;let i=[...t,l];if(r.type===w.Fragment){n.push.apply(n,oo(r.props.children,i));return}r.type!==ue&&X(!1),!r.props.index||!r.props.children||X(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=oo(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(null,arguments)}function jh(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function kh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sh(e,t){return e.button===0&&(!t||t==="_self")&&!kh(e)}const Ch=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Nh="6";try{window.__reactRouterVersion=Nh}catch{}const Eh="startTransition",ka=yd[Eh];function Ph(e){let{basename:t,children:n,future:r,window:l}=e,i=w.useRef();i.current==null&&(i.current=_p({window:l,v5Compat:!0}));let s=i.current,[a,u]=w.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},g=w.useCallback(f=>{c&&ka?ka(()=>u(f)):u(f)},[u,c]);return w.useLayoutEffect(()=>s.listen(g),[s,g]),w.useEffect(()=>vh(r),[r]),w.createElement(wh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const zh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O=w.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:s,state:a,target:u,to:c,preventScrollReset:g,viewTransition:f}=t,m=jh(t,Ch),{basename:x}=w.useContext(Bt),y,j=!1;if(typeof c=="string"&&Rh.test(c)&&(y=c,zh))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),N=rs(v.pathname,x);v.origin===p.origin&&N!=null?c=N+v.search+v.hash:j=!0}catch{}let C=rh(c,{relative:l}),h=Lh(c,{replace:s,state:a,target:u,preventScrollReset:g,relative:l,viewTransition:f});function d(p){r&&r(p),p.defaultPrevented||h(p)}return w.createElement("a",so({},m,{href:y||C,onClick:j||i?r:d,ref:n,target:u}))});var Sa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sa||(Sa={}));var Ca;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ca||(Ca={}));function Lh(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,u=yn(),c=bl(),g=Yc(e,{relative:s});return w.useCallback(f=>{if(Sh(f,n)){f.preventDefault();let m=r!==void 0?r:ml(c)===ml(g);u(e,{replace:m,state:l,preventScrollReset:i,relative:s,viewTransition:a})}},[c,u,g,r,l,n,e,i,s,a])}const Zc=w.createContext(null);function _h({children:e}){const[t,n]=w.useState([]),[r,l]=w.useState([]),i=f=>n(m=>m.find(y=>y.id===f.id)?m.map(y=>y.id===f.id?{...y,quantity:y.quantity+1}:y):[...m,{...f,quantity:1}]),s=f=>n(m=>m.filter(x=>x.id!==f)),a=(f,m)=>n(x=>m<=0?x.filter(y=>y.id!==f):x.map(y=>y.id===f?{...y,quantity:m}:y)),u=()=>n([]),c=f=>l(m=>m.some(x=>x.id===f.id)?m.filter(x=>x.id!==f.id):[...m,f]),g=w.useMemo(()=>({cart:t,wishlist:r,addToCart:i,removeFromCart:s,updateQuantity:a,clearCart:u,toggleWishlist:c}),[t,r]);return o.jsx(Zc.Provider,{value:g,children:e})}const Ol=()=>w.useContext(Zc);function Th(){const[e,t]=w.useState(!1),[n,r]=w.useState(!1),[l,i]=w.useState(!1),[s,a]=w.useState(""),u=yn(),c=f=>{f.preventDefault(),s.trim()&&(u(`/shop?search=${encodeURIComponent(s)}`),r(!1))},g=f=>{a(f),u(`/shop?search=${encodeURIComponent(f)}`),r(!1)};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        :root {
          --pink: #e90d8b;
          --pink-dark: #c90876;
          --charcoal: #2b2b2b;
        }

        .top-bar {
          width: 100%;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2b2b2b;
          color: #fff;
        }

        .top-bar p {
          margin: 0;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        .navbar {
          width: 100%;
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-main {
          position: relative;
          width: 100%;
          height: 104px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 6%;
          box-sizing: border-box;
        }

        .navbar-left {
          width: 220px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
        }

        .menu-button {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #222;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .menu-button:hover {
          color: var(--pink);
          transform: translateY(-2px);
        }

        .navbar-logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          z-index: 5;
        }

        .navbar-logo img {
          width: 190px;
          height: auto;
          max-height: 82px;
          object-fit: contain;
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .navbar-logo:hover img {
          transform: scale(1.08);
          filter: drop-shadow(0 0 5px rgba(233, 13, 139, 0.55)) drop-shadow(0 0 14px rgba(233, 13, 139, 0.28));
        }

        .navbar-right {
          width: 220px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 20px;
        }

        .nav-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #222;
          text-decoration: none;
          border: none;
          background: transparent;
          padding: 0;
          cursor: pointer;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .nav-icon svg {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .nav-icon:hover {
          color: var(--pink);
          transform: translateY(-2px);
        }

        .search-button {
          width: 34px;
          height: 34px;
        }

        .search-button svg {
          width: 25px;
          height: 25px;
          stroke-width: 1.7;
        }

        .cart-link {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #222;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .cart-link svg {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.6;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .cart-link:hover {
          color: var(--pink);
          transform: translateY(-2px);
        }

        .cart-link b {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--pink);
          color: #fff;
          font-size: 9px;
          font-weight: 700;
        }

        .navbar-menu {
          width: 100%;
          height: 50px;
          background: var(--pink);
          display: flex;
          align-items: center;
        }

        .navbar-menu-inner {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-link {
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 22px;
          color: #fff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          border: none;
          background: transparent;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .nav-link:hover {
          background: var(--pink-dark);
          color: #fff;
        }

        .nav-dropdown {
          position: relative;
        }

        .nav-dropdown-button {
          font-family: inherit;
          cursor: pointer;
        }

        .dropdown-arrow {
          margin-left: 8px;
          font-size: 14px;
          line-height: 1;
        }

        .dropdown-menu {
          position: absolute;
          top: 50px;
          left: 0;
          min-width: 215px;
          padding: 8px 0;
          background: #fff;
          border: 1px solid #eee;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.14);
        }

        .dropdown-menu a {
          display: block;
          padding: 12px 20px;
          color: #2b2b2b;
          text-decoration: none;
          font-size: 13px;
          transition: background 0.2s ease, color 0.2s ease, padding-left 0.2s ease;
        }

        .dropdown-menu a:hover {
          background: #fff0f8;
          color: var(--pink);
          padding-left: 25px;
        }

        .nav-sale {
          font-weight: 800;
        }

        .menu-overlay-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          z-index: 2000;
          display: flex;
          justify-content: flex-start;
          animation: fadeIn 0.3s ease;
        }

        .menu-sidebar-drawer {
          width: 100%;
          max-width: 440px;
          height: 100%;
          background: #ffffff;
          padding: 30px 35px;
          box-sizing: border-box;
          overflow-y: auto;
          box-shadow: 5px 0 30px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          animation: slideInLeft 0.3s ease;
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        .menu-sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 22px;
        }

        .menu-sidebar-brand {
          font-family: inherit;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #111;
        }

        .menu-close-btn {
          background: transparent;
          border: none;
          font-size: 22px;
          cursor: pointer;
          color: #111;
          padding: 0;
          line-height: 1;
          transition: color 0.2s ease;
        }

        .menu-close-btn:hover {
          color: #e30613;
        }

        .menu-top-tabs {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 0 22px 0;
          border-bottom: 1px solid #dcdcdc;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #222;
        }

        .menu-top-tabs span {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .menu-top-tabs span.active-tab {
          color: #e30613;
        }

        .menu-top-tabs span:hover {
          color: #e30613;
        }

        .menu-links-list {
          display: flex;
          flex-direction: column;
          padding: 15px 0 20px 0;
        }

        .menu-links-list a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          color: #1a1a1a;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.8px;
          border-bottom: 1px solid #f2f2f2;
          transition: color 0.2s ease;
        }

        .menu-links-list a span {
          font-size: 16px;
          font-weight: 400;
          color: #888;
        }

        .menu-links-list a:hover {
          color: #e30613;
        }

        .menu-promo-section {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 30px;
        }

        .menu-promo-card {
          display: flex;
          align-items: center;
          gap: 15px;
          background: #fdf6f9;
          padding: 12px 14px;
          border-radius: 4px;
          text-decoration: none;
          border: 1px solid #fae4ee;
          transition: background 0.2s ease;
        }

        .menu-promo-card:hover {
          background: #fae4ee;
        }

        .promo-img-thumb {
          width: 52px;
          height: 52px;
          object-fit: cover;
          border-radius: 4px;
          border: 1px solid #ddd;
        }

        .promo-text h4 {
          margin: 0;
          font-size: 11px;
          font-weight: 800;
          color: #e30613;
          letter-spacing: 0.5px;
        }

        .promo-text p {
          margin: 3px 0;
          font-size: 12px;
          font-weight: 600;
          color: #222;
        }

        .promo-text span {
          font-size: 10px;
          color: #666;
          text-decoration: underline;
        }

        .search-overlay-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 2000;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.3s ease;
        }

        .search-overlay-content {
          width: 100%;
          max-width: 480px;
          height: 100%;
          background: #ffffff;
          padding: 35px 30px;
          box-sizing: border-box;
          overflow-y: auto;
          box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          animation: slideInRight 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .search-overlay-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .search-overlay-title {
          font-size: 16px;
          font-weight: 700;
          color: #111;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .search-close-btn {
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #111;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
        }

        .search-close-btn:hover {
          color: var(--pink);
        }

        .search-overlay-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          border: 1px solid #dcdcdc;
          border-radius: 4px;
          padding: 0 16px;
          background: #fff;
          height: 50px;
          margin-bottom: 30px;
          transition: border-color 0.2s ease;
        }

        .search-overlay-input-wrapper:focus-within {
          border-color: #111;
        }

        .search-overlay-input {
          width: 100%;
          border: none;
          outline: none;
          font-size: 14px;
          color: #333;
          background: transparent;
        }

        .search-overlay-input::placeholder {
          color: #888;
        }

        .search-overlay-icon-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
          padding: 0;
        }

        .search-suggestions-section {
          margin-top: 10px;
        }

        .suggestions-heading {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          color: #111;
          margin-bottom: 18px;
        }

        .suggestions-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .suggestions-list li {
          font-size: 13px;
          font-weight: 500;
          color: #444;
          padding: 14px 0;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: color 0.2s ease;
        }

        .suggestions-list li:hover {
          color: var(--pink);
        }

        @media (max-width: 900px) {
          .navbar-main { padding: 0 3%; }
          .navbar-left, .navbar-right { width: 180px; }
          .navbar-logo img { width: 165px; }
          .navbar-right { gap: 14px; }
          .nav-link { padding: 0 14px; font-size: 11px; }
        }

        @media (max-width: 650px) {
          .top-bar { height: 32px; }
          .top-bar p { font-size: 10px; }
          .navbar-main { height: 88px; padding: 0 18px; }
          .navbar-left, .navbar-right { width: auto; }
          .navbar-logo img { width: 135px; }
          .navbar-right { gap: 10px; }
          .cart-link span { display: none; }
          .navbar-menu { height: 46px; }
          .navbar-menu-inner { height: 46px; overflow-x: auto; justify-content: flex-start; scrollbar-width: none; }
          .navbar-menu-inner::-webkit-scrollbar { display: none; }
          .nav-link { height: 46px; flex-shrink: 0; padding: 0 13px; font-size: 10px; }
          .menu-sidebar-drawer { max-width: 90%; padding: 25px 20px; }
          .search-overlay-content { max-width: 100%; padding: 25px 20px; }
        }
      `}),o.jsx("div",{className:"top-bar",children:o.jsx("p",{children:"✈ Shipping across Pakistan & worldwide"})}),o.jsxs("header",{className:"navbar",children:[o.jsxs("div",{className:"navbar-main",children:[o.jsxs("div",{className:"navbar-left",children:[o.jsx("button",{className:"nav-icon menu-button",type:"button","aria-label":"Menu",onClick:()=>i(!0),children:o.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",children:[o.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}),o.jsx("button",{className:"nav-icon search-button",type:"button","aria-label":"Search",onClick:()=>r(!0),children:o.jsxs("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:[o.jsx("circle",{cx:"11",cy:"11",r:"7"}),o.jsx("path",{d:"M20 20l-4-4"})]})})]}),o.jsx(O,{to:"/",className:"navbar-logo",children:o.jsx("img",{src:"/logo.png",alt:"Ahsan Jewellery"})}),o.jsxs("div",{className:"navbar-right",children:[o.jsx(O,{to:"/account",className:"nav-icon","aria-label":"Account",children:o.jsxs("svg",{viewBox:"0 0 24 24",width:"23",height:"23",children:[o.jsx("circle",{cx:"12",cy:"8",r:"4"}),o.jsx("path",{d:"M4 21c.8-4 3.5-6 8-6s7.2 2 8 6"})]})}),o.jsx(O,{to:"/wishlist",className:"nav-icon","aria-label":"Wishlist",children:o.jsx("svg",{viewBox:"0 0 24 24",width:"24",height:"24",children:o.jsx("path",{d:"M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z"})})}),o.jsxs(O,{to:"/cart",className:"cart-link","aria-label":"Cart",children:[o.jsxs("svg",{viewBox:"0 0 24 24",width:"23",height:"23",children:[o.jsx("path",{d:"M6 8h12l1 13H5L6 8Z"}),o.jsx("path",{d:"M9 8a3 3 0 0 1 6 0"})]}),o.jsx("span",{children:"Cart"}),o.jsx("b",{children:"0"})]})]})]}),o.jsx("nav",{className:"navbar-menu",children:o.jsxs("div",{className:"navbar-menu-inner",children:[o.jsx(O,{to:"/",className:"nav-link",children:"Home"}),o.jsxs("div",{className:"nav-dropdown",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[o.jsxs("button",{type:"button",className:"nav-link nav-dropdown-button",children:["Jewellery",o.jsx("span",{className:"dropdown-arrow",children:"⌄"})]}),e&&o.jsxs("div",{className:"dropdown-menu",children:[o.jsx(O,{to:"/shop",children:"All Jewellery"}),o.jsx(O,{to:"/shop?category=rings",children:"Rings"}),o.jsx(O,{to:"/shop?category=necklaces",children:"Necklaces"}),o.jsx(O,{to:"/shop?category=earrings",children:"Earrings"}),o.jsx(O,{to:"/shop?category=bracelets",children:"Bracelets"}),o.jsx(O,{to:"/shop?category=sets",children:"Jewellery Sets"})]})]}),o.jsx(O,{to:"/shop",className:"nav-link",children:"New Arrivals"}),o.jsx(O,{to:"/shop",className:"nav-link",children:"Collections"}),o.jsx(O,{to:"/about",className:"nav-link",children:"About Us"}),o.jsx(O,{to:"/contact",className:"nav-link",children:"Contact"}),o.jsx(O,{to:"/sale",className:"nav-link nav-sale",children:"Sale"})]})})]}),l&&o.jsx("div",{className:"menu-overlay-backdrop",onClick:()=>i(!1),children:o.jsxs("div",{className:"menu-sidebar-drawer",onClick:f=>f.stopPropagation(),children:[o.jsxs("div",{className:"menu-sidebar-header",children:[o.jsx("span",{className:"menu-sidebar-brand",children:"AHSAN JEWELLERY"}),o.jsx("button",{className:"menu-close-btn",onClick:()=>i(!1),type:"button",children:"✕"})]}),o.jsxs("div",{className:"menu-top-tabs",children:[o.jsx("span",{className:"active-tab",children:"WOMEN"}),o.jsx("span",{children:"KIDS"}),o.jsx("span",{children:"BRIDES"}),o.jsx("span",{children:"MEN"}),o.jsx("span",{children:"SPECIAL OFFERS"})]}),o.jsxs("div",{className:"menu-links-list",children:[o.jsx(O,{to:"/shop?category=new-arrivals",onClick:()=>i(!1),children:"NEW ARRIVALS"}),o.jsxs(O,{to:"/shop?category=bridal-sets",onClick:()=>i(!1),children:["BRIDAL SETS ",o.jsx("span",{children:"+"})]}),o.jsxs(O,{to:"/shop?category=necklaces",onClick:()=>i(!1),children:["NECKLACES & PENDANTS ",o.jsx("span",{children:"+"})]}),o.jsxs(O,{to:"/shop?category=rings",onClick:()=>i(!1),children:["RINGS & BANDS ",o.jsx("span",{children:"+"})]}),o.jsxs(O,{to:"/shop?category=earrings",onClick:()=>i(!1),children:["EARRINGS & JHUMKAS ",o.jsx("span",{children:"+"})]}),o.jsxs(O,{to:"/shop?category=bangles-bracelets",onClick:()=>i(!1),children:["BANGLES & BRACELETS ",o.jsx("span",{children:"+"})]}),o.jsx(O,{to:"/shop?category=polki-kundan",onClick:()=>i(!1),children:"POLKI & KUNDAN"}),o.jsxs(O,{to:"/shop?category=diamond-collection",onClick:()=>i(!1),children:["DIAMOND COLLECTION ",o.jsx("span",{children:"+"})]}),o.jsxs(O,{to:"/shop?category=silver-jewellery",onClick:()=>i(!1),children:["SILVER JEWELLERY ",o.jsx("span",{children:"+"})]}),o.jsx(O,{to:"/shop?category=best-sellers",onClick:()=>i(!1),children:"BEST SELLERS"})]}),o.jsxs("div",{className:"menu-promo-section",children:[o.jsxs(O,{to:"/shop?collection=bridal",className:"menu-promo-card",onClick:()=>i(!1),children:[o.jsx("img",{src:"/images/bridal-set.jpg",alt:"Bridal Sets",className:"promo-img-thumb"}),o.jsxs("div",{className:"promo-text",children:[o.jsx("h4",{children:"UP TO 50% OFF"}),o.jsx("p",{children:"Bridal Sets"}),o.jsx("span",{children:"Avail Discount"})]})]}),o.jsxs(O,{to:"/shop?collection=luxury",className:"menu-promo-card",onClick:()=>i(!1),children:[o.jsx("img",{src:"/images/necklace.jpg",alt:"Luxury Necklaces",className:"promo-img-thumb"}),o.jsxs("div",{className:"promo-text",children:[o.jsx("h4",{children:"UP TO 50% OFF"}),o.jsx("p",{children:"Luxury Necklaces"}),o.jsx("span",{children:"Avail Discount"})]})]}),o.jsxs(O,{to:"/shop?collection=rings",className:"menu-promo-card",onClick:()=>i(!1),children:[o.jsx("img",{src:"/images/ring.jpg",alt:"Diamond Rings",className:"promo-img-thumb"}),o.jsxs("div",{className:"promo-text",children:[o.jsx("h4",{children:"UP TO 50% OFF"}),o.jsx("p",{children:"Diamond Rings"}),o.jsx("span",{children:"Avail Discount"})]})]})]})]})}),n&&o.jsx("div",{className:"search-overlay-modal",onClick:()=>r(!1),children:o.jsxs("div",{className:"search-overlay-content",onClick:f=>f.stopPropagation(),children:[o.jsxs("div",{className:"search-overlay-header",children:[o.jsx("h2",{className:"search-overlay-title",children:"SEARCH YOUR FAVOURITE"}),o.jsx("button",{className:"search-close-btn",onClick:()=>r(!1),type:"button",children:"✕"})]}),o.jsxs("form",{onSubmit:c,className:"search-overlay-input-wrapper",children:[o.jsx("input",{type:"text",placeholder:"Search jewellery...",value:s,onChange:f=>a(f.target.value),autoFocus:!0,className:"search-overlay-input"}),o.jsx("button",{type:"submit",className:"search-overlay-icon-btn",children:o.jsxs("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[o.jsx("circle",{cx:"11",cy:"11",r:"7"}),o.jsx("path",{d:"M20 20l-4-4"})]})})]}),o.jsxs("div",{className:"search-suggestions-section",children:[o.jsx("h3",{className:"suggestions-heading",children:"SUGGESTIONS FOR YOU"}),o.jsxs("ul",{className:"suggestions-list",children:[o.jsx("li",{onClick:()=>g("BRIDAL SETS"),children:"BRIDAL SETS"}),o.jsx("li",{onClick:()=>g("NECKLACES"),children:"NECKLACES"}),o.jsx("li",{onClick:()=>g("RINGS"),children:"RINGS"}),o.jsx("li",{onClick:()=>g("EARRINGS"),children:"EARRINGS"}),o.jsx("li",{onClick:()=>g("BANGLES"),children:"BANGLES"})]})]})]})})]})}function Ih(){return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        /* =========================
           FOOTER
        ========================= */

        .footer {
          width: 100%;
          margin: 0;
          padding: 0;
          background: #E90D8B;
          color: #fff;
        }

        .footer-inner {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          padding: 65px 5% 55px;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
        }

        .footer-brand {
          display: flex;
          align-items: flex-start;
          max-width: none;
        }

        .footer-logo {
          display: block;
          width: 190px;
          height: auto;
          max-width: 100%;
          padding: 12px 18px;
          box-sizing: border-box;
          background: #fff;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-column h3 {
          margin: 0 0 22px;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .footer-column a {
          margin: 0 0 12px;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          line-height: 1.5;
          text-decoration: none;
          transition: opacity .2s ease, transform .2s ease;
        }

        .footer-column a:hover {
          color: #fff;
          opacity: .75;
          transform: translateX(3px);
        }

        .footer-bottom {
          width: 100%;
          padding: 20px 5%;
          box-sizing: border-box;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,.25);
        }

        .footer-bottom p {
          margin: 0;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12px;
          line-height: 1.5;
          letter-spacing: .3px;
        }

        @media (max-width: 900px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 45px 35px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 600px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            padding: 45px 25px 35px;
            gap: 35px 20px;
          }

          .footer-logo {
            width: 160px;
          }

          .footer-column h3 {
            font-size: 12px;
            margin-bottom: 17px;
          }

          .footer-column a {
            font-size: 13px;
            margin-bottom: 9px;
          }

          .footer-bottom {
            padding: 17px 20px;
          }
        }
      `}),o.jsxs("footer",{className:"footer",children:[o.jsxs("div",{className:"footer-inner",children:[o.jsx("div",{className:"footer-brand",children:o.jsx("img",{src:"/logo.png",alt:"Ahsan Jewellery",className:"footer-logo"})}),o.jsxs("div",{className:"footer-column",children:[o.jsx("h3",{children:"SHOP"}),o.jsx("a",{href:"/shop",children:"All Jewellery"}),o.jsx("a",{href:"/shop",children:"New Arrivals"}),o.jsx("a",{href:"/shop",children:"Collections"}),o.jsx("a",{href:"/shop",children:"Sale"})]}),o.jsxs("div",{className:"footer-column",children:[o.jsx("h3",{children:"HELP"}),o.jsx("a",{href:"/contact",children:"Contact Us"}),o.jsx("a",{href:"/shipping",children:"Shipping"}),o.jsx("a",{href:"/returns",children:"Returns"}),o.jsx("a",{href:"/faq",children:"FAQ"})]}),o.jsxs("div",{className:"footer-column",children:[o.jsx("h3",{children:"FOLLOW US"}),o.jsx("a",{href:"#",children:"Instagram"}),o.jsx("a",{href:"#",children:"Facebook"}),o.jsx("a",{href:"#",children:"WhatsApp"})]})]}),o.jsx("div",{className:"footer-bottom",children:o.jsx("p",{children:"© 2026 Ahsan Jewellery. All rights reserved."})})]})]})}function gl({product:e}){const[t,n]=w.useState(!1),[r,l]=w.useState(!1),[i,s]=w.useState(e.image),[a,u]=w.useState(1),[c,g]=w.useState("bronze"),[f,m]=w.useState(!1),[x,y]=w.useState(!1),j=yn(),C=e.price,h=Math.round(C*.75),d=e.images||[e.image,e.image,e.image];return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .maria-product-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          background: #ffffff;
          width: 100%;
          box-sizing: border-box;
        }

        .maria-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          background-color: #f7f7f7;
          border-radius: 12px;
          overflow: hidden;
        }

        .maria-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background-color: #d32f2f;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 4px;
          z-index: 2;
          letter-spacing: 0.05em;
        }

        .maria-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          display: block;
        }

        .maria-product-card:hover .maria-product-img {
          transform: scale(1.03);
        }

        /* Hover Action Bar */
        .maria-hover-bar {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background-color: rgba(255, 255, 255, 0.95);
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 3;
        }

        .maria-product-card:hover .maria-hover-bar {
          opacity: 1;
          transform: translateY(0);
        }

        .maria-view-text {
          font-size: 13px;
          font-weight: 500;
          color: #111;
          letter-spacing: 0.02em;
        }

        .maria-icons {
          display: flex;
          gap: 12px;
          color: #333;
          font-size: 15px;
        }

        /* Product Info */
        .maria-info-container {
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
        }

        .maria-product-title {
          font-size: 14px;
          font-weight: 400;
          color: #222222;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .maria-price-box {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .maria-original-price {
          color: #888888;
          text-decoration: line-through;
        }

        .maria-discounted-price {
          color: #111111;
          font-weight: 600;
        }
      `}),o.jsxs("div",{className:"maria-product-card",onClick:()=>j(`/product/${e.id}`),onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[o.jsxs("div",{className:"maria-image-container",children:[e.tag&&o.jsx("span",{className:"maria-badge",children:e.tag}),o.jsx("img",{src:e.image,alt:e.title,className:"maria-product-img",style:{transform:t?"scale(1.03)":"scale(1)"}}),o.jsxs("div",{className:"maria-hover-bar",style:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(10px)"},children:[o.jsxs("span",{className:"maria-view-text",style:{display:"flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap"},children:["View Details ",o.jsx("span",{style:{fontSize:"14px"},children:"→"})]}),o.jsxs("div",{className:"maria-icons",style:{display:"flex",alignItems:"center",gap:"10px"},children:[o.jsx("div",{onClick:p=>{p.stopPropagation(),l(!0)},style:{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:"4px"},title:"Quick View",children:o.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),o.jsx("circle",{cx:"12",cy:"12",r:"3"})]})}),o.jsx("div",{onClick:p=>{p.stopPropagation(),alert("Added to wishlist!")},style:{display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",padding:"4px"},title:"Wishlist",children:o.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})})})]})]})]}),o.jsxs("div",{className:"maria-info-container",children:[o.jsx("h3",{className:"maria-product-title",children:e.title}),o.jsxs("div",{className:"maria-price-box",children:[o.jsxs("span",{className:"maria-original-price",children:["Rs.",C.toLocaleString()]}),o.jsxs("span",{className:"maria-discounted-price",children:["Rs.",h.toLocaleString()]})]})]})]}),r&&o.jsx("div",{onClick:()=>l(!1),style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.6)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:"20px",boxSizing:"border-box"},children:o.jsxs("div",{onClick:p=>p.stopPropagation(),style:{backgroundColor:"#fff",width:"100%",maxWidth:"950px",borderRadius:"12px",display:"flex",flexDirection:"row",position:"relative",overflow:"hidden",boxShadow:"0 20px 40px rgba(0,0,0,0.2)",maxHeight:"90vh"},children:[o.jsx("button",{onClick:()=>l(!1),style:{position:"absolute",top:"16px",right:"16px",background:"transparent",border:"none",fontSize:"18px",cursor:"pointer",zIndex:10,color:"#333"},children:"✕"}),o.jsx("div",{style:{flex:"1",backgroundColor:"#f9f9f9",display:"flex",alignItems:"center",justifyContent:"center",padding:"30px"},children:o.jsx("img",{src:i,alt:e.title,style:{width:"100%",maxHeight:"450px",objectFit:"contain"}})}),o.jsxs("div",{style:{flex:"1",padding:"30px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"16px",textAlign:"left"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsx("h2",{style:{fontSize:"20px",fontWeight:"500",color:"#111",margin:0},children:e.title}),o.jsx("span",{style:{fontSize:"11px",backgroundColor:"#f0f0f0",padding:"4px 8px",borderRadius:"4px",color:"#333",fontWeight:"500"},children:"In Stock"})]}),o.jsxs("span",{style:{fontSize:"12px",color:"#777",marginTop:"-10px"},children:["OPERA-PK-",e.id]}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #eee",paddingBottom:"12px"},children:[o.jsxs("span",{style:{fontSize:"18px",fontWeight:"600",color:"#111"},children:["Rs.",h.toLocaleString()]}),o.jsx("span",{style:{fontSize:"12px",color:"#555"},children:"3-5 BUSINESS DAYS"})]}),o.jsx("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:d.map((p,v)=>o.jsx("img",{src:p,onClick:()=>s(p),style:{width:"50px",height:"60px",objectFit:"cover",borderRadius:"4px",cursor:"pointer",border:i===p?"2px solid #111":"1px solid #ddd"}},v))}),o.jsxs("div",{children:[o.jsxs("span",{style:{fontSize:"12px",fontWeight:"600",color:"#333",display:"block",marginBottom:"6px"},children:["COLOR: ",o.jsx("span",{style:{textTransform:"uppercase",fontWeight:"400"},children:c})]}),o.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.jsx("div",{onClick:()=>g("black"),style:{width:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#111",cursor:"pointer",border:c==="black"?"2px solid #000":"2px solid transparent",outline:"1px solid #ccc"}}),o.jsx("div",{onClick:()=>g("bronze"),style:{width:"24px",height:"24px",borderRadius:"50%",backgroundColor:"#c68b59",cursor:"pointer",border:c==="bronze"?"2px solid #000":"2px solid transparent",outline:"1px solid #ccc"}})]})]}),o.jsxs("div",{children:[o.jsx("span",{style:{fontSize:"12px",fontWeight:"600",color:"#333",display:"block",marginBottom:"6px"},children:"QUANTITY"}),o.jsxs("div",{style:{display:"inline-flex",border:"1px solid #ddd",borderRadius:"4px",overflow:"hidden",alignItems:"center"},children:[o.jsx("button",{onClick:()=>u(Math.max(1,a-1)),style:{background:"#f9f9f9",border:"none",padding:"8px 14px",cursor:"pointer"},children:"-"}),o.jsx("span",{style:{padding:"0 16px",fontSize:"14px",fontWeight:"500"},children:a}),o.jsx("button",{onClick:()=>u(a+1),style:{background:"#f9f9f9",border:"none",padding:"8px 14px",cursor:"pointer"},children:"+"})]})]}),o.jsx("button",{onClick:()=>{alert(`Added ${a} item(s) to cart!`),l(!1)},style:{backgroundColor:"#111",color:"#fff",border:"none",borderRadius:"6px",padding:"14px",fontSize:"14px",fontWeight:"600",cursor:"pointer",letterSpacing:"0.05em",marginTop:"10px"},children:"🛒 ADD TO CART"}),o.jsxs("div",{style:{borderTop:"1px solid #eee",paddingTop:"12px"},children:[o.jsxs("div",{onClick:()=>m(!f),style:{display:"flex",justifyContent:"space-between",cursor:"pointer",fontSize:"13px",fontWeight:"500",color:"#333"},children:[o.jsx("span",{children:"Description"}),o.jsx("span",{children:f?"−":"+"})]}),f&&o.jsx("p",{style:{fontSize:"12px",color:"#666",marginTop:"8px",lineHeight:"1.5"},children:"Exquisitely crafted luxury jewellery piece featuring premium sparkling stones and high-grade finish designed for special occasions."})]}),o.jsxs("div",{style:{borderTop:"1px solid #eee",paddingTop:"12px",paddingBottom:"10px"},children:[o.jsxs("div",{onClick:()=>y(!x),style:{display:"flex",justifyContent:"space-between",cursor:"pointer",fontSize:"13px",fontWeight:"500",color:"#333"},children:[o.jsx("span",{children:"Product Care"}),o.jsx("span",{children:x?"−":"+"})]}),x&&o.jsx("p",{style:{fontSize:"12px",color:"#666",marginTop:"8px",lineHeight:"1.5"},children:"Keep away from moisture, perfumes, and harsh chemicals. Store in a dry fabric pouch after use."})]})]})]})})]})}const sr=[{id:1,title:"Ludae Necklace",price:12600,category:"Necklaces",tag:"New",image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",description:"A refined pendant necklace with a clean modern silhouette."},{id:2,title:"Aldura Necklace",price:25500,category:"Necklaces",tag:"Bestseller",image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",description:"Elegant teardrop detailing designed to layer beautifully."},{id:3,title:"Troy Ring",price:5800,category:"Rings",image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",description:"A sculptural everyday ring with a confident profile."},{id:4,title:"Aurelia Hoops",price:8900,category:"Earrings",tag:"New",image:"https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=85",description:"Polished hoops that add a warm golden finish to every look."},{id:5,title:"Solace Bracelet",price:14500,category:"Bracelets",image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",description:"A delicate bracelet built for effortless daily wear."},{id:6,title:"Mira Pendant",price:19900,category:"Necklaces",tag:"Bestseller",image:"https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=900&q=85",description:"A graceful pendant with understated evening elegance."}],Na=["Hero","Hero1","Hero2"];function bh(){const[e,t]=w.useState(0);return w.useEffect(()=>{const n=setInterval(()=>{t(r=>(r+1)%Na.length)},4e3);return()=>clearInterval(n)},[]),o.jsx("div",{className:"hero-section",children:Na.map((n,r)=>o.jsx("div",{className:"hero-slide",style:{display:r===e?"block":"none",width:"100%"},children:o.jsx(Oh,{imageName:n})},r))})}function Oh({imageName:e}){const t=[".jpg",".avif",".png",".webp",""],[n,r]=w.useState(0),l=`/images/Hero/${e}${t[n]}`,i=()=>{n<t.length-1&&r(n+1)};return o.jsx("div",{className:"hero-banner",children:o.jsx("img",{src:l,alt:e,onError:i})})}function Ea(){const[e,t]=w.useState(3),[n,r]=w.useState(!1),[l,i]=w.useState("default"),[s,a]=w.useState("NEW ARRIVALS"),u=["NEW ARRIVALS","BRIDAL SETS","NECKLACES","RINGS","EARRINGS","BRACELETS","LUXURY JEWELLERY"],c=[...sr].sort((f,m)=>l==="low-high"?f.price-m.price:l==="high-low"?m.price-f.price:0),g=f=>{const m=document.getElementById("trending-slider"),x=350;m&&m.scrollBy({left:f==="left"?-x:x,behavior:"smooth"})};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .hero-section {
          width: 100%;
          margin: 0;
          padding: 0;
          background: #f4eee8;
          overflow: hidden;
          position: relative;
        }

        .hero-banner {
          width: 100%;
          margin: 0;
          padding: 0;
          line-height: 0;
          overflow: hidden;
        }

        .hero-banner img {
          display: block;
          width: 100%;
          height: auto;
          max-width: 100%;
          object-fit: contain;
          object-position: center;
        }

        .our-collection {
          width: 100%;
          background: #ffffff;
          padding: 60px 20px 30px;
          text-align: center;
          box-sizing: border-box;
        }

        .our-collection h2 {
          margin: 0 0 40px;
          color: #1a1a1a;
          font-family: 'Playfair Display', serif, Arial;
          font-size: 38px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .collection-round-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .collection-round-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .collection-round-item:hover {
          transform: translateY(-6px);
        }

        .round-image-wrapper {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #b8860b;
          margin-bottom: 14px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
          background: #f9f6f0;
        }

        .round-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .round-category-name {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #222222;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .most-loved {
          width: 100%;
          background: #ffffff;
          box-sizing: border-box;
          padding: 35px 20px 45px;
          text-align: center;
        }

        .most-loved h2 {
          margin: 0 0 30px;
          color: #1a1a1a;
          font-family: 'Playfair Display', serif, Arial;
          font-size: 38px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .btn:hover,
        .btn-dark:hover,
        .most-loved a.btn:hover {
          background-color: #d63384 !important;
          border-color: #d63384 !important;
          color: #ffffff !important;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        @media (max-width: 900px) {
          .round-image-wrapper {
            width: 100px;
            height: 100px;
          }
          .collection-round-grid {
            gap: 20px;
          }
          .our-collection h2, .most-loved h2 {
            font-size: 28px;
          }
        }

        @media (max-width: 500px) {
          .round-image-wrapper {
            width: 80px;
            height: 80px;
          }
          .round-category-name {
            font-size: 11px;
          }
          .collection-round-grid {
            gap: 15px;
          }
        }
      `}),o.jsx(bh,{}),o.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"30px 20px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},children:[o.jsxs("div",{className:"our-collection",children:[o.jsx("h2",{children:"Our Collection"}),o.jsxs("div",{className:"collection-round-grid",children:[o.jsxs("a",{href:"#bridal",className:"collection-round-item",children:[o.jsx("div",{className:"round-image-wrapper",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&auto=format&fit=crop&q=80",alt:"Bridal"})}),o.jsx("span",{className:"round-category-name",children:"Bridal"})]}),o.jsxs("a",{href:"#necklaces",className:"collection-round-item",children:[o.jsx("div",{className:"round-image-wrapper",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=80",alt:"Necklaces"})}),o.jsx("span",{className:"round-category-name",children:"Necklaces"})]}),o.jsxs("a",{href:"#rings",className:"collection-round-item",children:[o.jsx("div",{className:"round-image-wrapper",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&auto=format&fit=crop&q=80",alt:"Rings"})}),o.jsx("span",{className:"round-category-name",children:"Rings"})]}),o.jsxs("a",{href:"#earrings",className:"collection-round-item",children:[o.jsx("div",{className:"round-image-wrapper",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&auto=format&fit=crop&q=80",alt:"Earrings"})}),o.jsx("span",{className:"round-category-name",children:"Earrings"})]}),o.jsxs("a",{href:"#bracelets",className:"collection-round-item",children:[o.jsx("div",{className:"round-image-wrapper",children:o.jsx("img",{src:"https://images.unsplash.com/photo-1611591472152-d128a8d15446?w=400&auto=format&fit=crop&q=80",alt:"Bracelets"})}),o.jsx("span",{className:"round-category-name",children:"Bracelets"})]})]})]}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"30px 0 24px",borderBottom:"1px solid #eaeaea",paddingBottom:"16px",flexWrap:"wrap",gap:"15px"},children:[o.jsxs("button",{onClick:()=>r(!n),style:{display:"flex",alignItems:"center",gap:"8px",background:"transparent",border:"none",cursor:"pointer",fontSize:"14px",fontWeight:"500",color:"#111",padding:"6px 0"},children:[o.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("line",{x1:"4",y1:"21",x2:"4",y2:"14"}),o.jsx("line",{x1:"4",y1:"10",x2:"4",y2:"3"}),o.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"12"}),o.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"3"}),o.jsx("line",{x1:"20",y1:"21",x2:"20",y2:"16"}),o.jsx("line",{x1:"20",y1:"12",x2:"20",y2:"3"}),o.jsx("line",{x1:"1",y1:"14",x2:"7",y2:"14"}),o.jsx("line",{x1:"9",y1:"8",x2:"15",y2:"8"}),o.jsx("line",{x1:"17",y1:"16",x2:"23",y2:"16"})]}),"Show Filter's"]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[o.jsxs("div",{style:{display:"flex",gap:"6px",alignItems:"center"},children:[o.jsx("button",{onClick:()=>t(2),style:{padding:"6px 8px",backgroundColor:e===2?"#f0f0f0":"#ffffff",border:"1px solid #e0e0e0",borderRadius:"6px",cursor:"pointer"},children:o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("rect",{x:"3",y:"3",width:"7",height:"18",rx:"1"}),o.jsx("rect",{x:"14",y:"3",width:"7",height:"18",rx:"1"})]})}),o.jsx("button",{onClick:()=>t(3),style:{padding:"6px 8px",backgroundColor:e===3?"#f0f0f0":"#ffffff",border:"1px solid #e0e0e0",borderRadius:"6px",cursor:"pointer"},children:o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("rect",{x:"2",y:"3",width:"5",height:"18",rx:"1"}),o.jsx("rect",{x:"9.5",y:"3",width:"5",height:"18",rx:"1"}),o.jsx("rect",{x:"17",y:"3",width:"5",height:"18",rx:"1"})]})}),o.jsx("button",{onClick:()=>t(4),style:{padding:"6px 8px",backgroundColor:e===4?"#f0f0f0":"#ffffff",border:"1px solid #e0e0e0",borderRadius:"6px",cursor:"pointer"},children:o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[o.jsx("rect",{x:"2",y:"3",width:"4",height:"18",rx:"0.5"}),o.jsx("rect",{x:"8",y:"3",width:"4",height:"18",rx:"0.5"}),o.jsx("rect",{x:"14",y:"3",width:"4",height:"18",rx:"0.5"}),o.jsx("rect",{x:"20",y:"3",width:"4",height:"18",rx:"0.5"})]})})]}),o.jsxs("select",{value:l,onChange:f=>i(f.target.value),style:{padding:"8px 14px",backgroundColor:"#f7f7f7",border:"1px solid #e0e0e0",borderRadius:"6px",cursor:"pointer",fontSize:"13px",fontWeight:"500",color:"#111",outline:"none"},children:[o.jsx("option",{value:"default",children:"⇅ Sort"}),o.jsx("option",{value:"low-high",children:"Price: Low to High"}),o.jsx("option",{value:"high-low",children:"Price: High to Low"})]})]})]}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${e}, minmax(0, 1fr))`,gap:"30px",transition:"grid-template-columns 0.3s ease",marginBottom:"60px"},children:c.map(f=>o.jsx(gl,{product:f},f.id))}),o.jsxs("div",{className:"most-loved",style:{marginTop:"50px",borderTop:"1px solid #eaeaea",paddingTop:"40px"},children:[o.jsx("h2",{children:"MOST TRENDING"}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #eaeaea",paddingBottom:"12px",marginBottom:"24px",flexWrap:"wrap",gap:"15px"},children:[o.jsx("div",{style:{display:"flex",gap:"24px",overflowX:"auto",whiteSpace:"nowrap",scrollbarWidth:"none"},children:u.map(f=>o.jsx("button",{onClick:()=>a(f),style:{background:"transparent",border:"none",cursor:"pointer",fontSize:"12px",fontWeight:s===f?"600":"400",color:s===f?"#111111":"#777777",letterSpacing:"0.05em",paddingBottom:"4px",borderBottom:s===f?"2px solid #111111":"2px solid transparent",transition:"all 0.2s ease"},children:f},f))}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[o.jsx("span",{style:{fontSize:"12px",fontWeight:"500",color:"#111",cursor:"pointer",textDecoration:"underline"},children:"View all"}),o.jsxs("div",{style:{display:"flex",gap:"8px"},children:[o.jsx("button",{onClick:()=>g("left"),style:{background:"#fff",border:"1px solid #ddd",borderRadius:"50%",width:"30px",height:"30px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"←"}),o.jsx("button",{onClick:()=>g("right"),style:{background:"#fff",border:"1px solid #ddd",borderRadius:"50%",width:"30px",height:"30px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"→"})]})]})]}),o.jsx("div",{id:"trending-slider",style:{display:"flex",gap:"24px",overflowX:"auto",scrollSnapType:"x mandatory",scrollbarWidth:"none",paddingBottom:"10px"},children:sr.map(f=>o.jsx("div",{style:{minWidth:"270px",maxWidth:"270px",flexShrink:0,scrollSnapAlign:"start"},children:o.jsx(gl,{product:f})},`trending-${f.id}`))})]})]})]})}const Dh=["All","Rings","Necklaces","Earrings","Bracelets"];function Mh(){const[e,t]=w.useState("All"),[n,r]=w.useState("featured"),l=w.useMemo(()=>{const i=e==="All"?[...sr]:sr.filter(s=>s.category===e);return n==="low"&&i.sort((s,a)=>s.price-a.price),n==="high"&&i.sort((s,a)=>a.price-s.price),i},[e,n]);return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .shop-page {
          padding: 50px 20px 90px;
          max-width: 1300px;
          margin: 0 auto;
        }

        .shop-hero {
          text-align: center;
          margin-bottom: 50px;
        }

        .shop-hero .eyebrow {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #777;
          display: block;
          margin-bottom: 10px;
        }

        .shop-hero h1 {
          font-size: 42px;
          font-weight: 400;
          margin: 0 0 12px;
          color: #111;
        }

        .shop-hero p {
          color: #666;
          font-size: 15px;
          margin: 0;
        }

        .shop-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 25px;
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 20px;
        }

        .filter-tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-tabs button {
          background: #f7f7f7;
          border: 1px solid #e0e0e0;
          padding: 8px 16px;
          font-size: 13px;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.2s ease;
          color: #333;
        }

        .filter-tabs button:hover {
          border-color: #111;
        }

        .filter-tabs button.active {
          background: #111;
          color: #fff;
          border-color: #111;
        }

        .shop-toolbar label {
          font-size: 13px;
          color: #555;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .shop-toolbar select {
          padding: 8px 12px;
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 4px;
          font-size: 13px;
          outline: none;
          cursor: pointer;
        }

        .shop-count {
          font-size: 13px;
          color: #777;
          margin-bottom: 25px;
        }

        .shop-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 40px 25px;
          margin-bottom: 70px;
        }

        .shop-note {
          background: #f9f6f0;
          text-align: center;
          padding: 50px 20px;
          border-radius: 8px;
          margin-top: 40px;
        }

        .shop-note .eyebrow {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #777;
          display: block;
          margin-bottom: 8px;
        }

        .shop-note h2 {
          font-size: 28px;
          font-weight: 400;
          margin: 0 0 12px;
          color: #111;
        }

        .shop-note p {
          color: #666;
          font-size: 14px;
          max-width: 500px;
          margin: 0 auto 20px;
        }

        .btn-dark {
          background: #111;
          color: #fff;
          padding: 12px 24px;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 4px;
          display: inline-block;
          transition: background 0.2s;
        }

        .btn-dark:hover {
          background: #333;
        }

        @media (max-width: 768px) {
          .shop-toolbar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}),o.jsxs("div",{className:"shop-page",children:[o.jsx("div",{className:"shop-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"eyebrow",children:"The collection"}),o.jsx("h1",{className:"serif",children:"Jewellery, considered."}),o.jsx("p",{children:"Discover modern pieces designed to live with you, season after season."})]})}),o.jsxs("div",{className:"container shop-content",children:[o.jsxs("div",{className:"shop-toolbar",children:[o.jsx("div",{className:"filter-tabs",children:Dh.map(i=>o.jsx("button",{className:e===i?"active":"",onClick:()=>t(i),children:i},i))}),o.jsxs("label",{children:["Sort"," ",o.jsxs("select",{value:n,onChange:i=>r(i.target.value),children:[o.jsx("option",{value:"featured",children:"Featured"}),o.jsx("option",{value:"low",children:"Price: low to high"}),o.jsx("option",{value:"high",children:"Price: high to low"})]})]})]}),o.jsxs("div",{className:"shop-count",children:[l.length," pieces"]}),o.jsx("div",{className:"shop-grid",children:l.map(i=>o.jsx(gl,{product:i},i.id))}),o.jsxs("div",{className:"shop-note",children:[o.jsx("span",{className:"eyebrow",children:"Need help choosing?"}),o.jsx("h2",{className:"serif",children:"Talk to our jewellery concierge."}),o.jsx("p",{children:"Tell us what you're looking for and we'll help you find a piece that feels right."}),o.jsx(O,{to:"/contact",className:"btn-dark",children:"Contact us"})]})]})]})]})}function Ah(){const{cart:e,removeFromCart:t,updateQuantity:n,clearCart:r}=Ol(),l=e.reduce((i,s)=>i+s.price*s.quantity,0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .cart-page { padding: 70px 0 110px; }
        .page-title { margin-bottom: 45px; }
        .page-title h1 { font-size: 52px; font-weight: 500; margin: 10px 0 0; }
        .cart-grid { display: grid; grid-template-columns: 1.45fr .75fr; gap: 70px; }
        .cart-item { display: grid; grid-template-columns: 125px 1fr auto; gap: 24px; padding: 20px 0; border-top: 1px solid var(--line); position: relative; }
        .cart-item img { width: 125px; height: 150px; object-fit: cover; background: #f2eee7; }
        .cart-item-info h3 { margin: 5px 0 8px; font-size: 23px; font-weight: 500; }
        .cart-item-info p { margin: 0 0 18px; font-size: 13px; }
        .quantity { display: inline-flex; align-items: center; border: 1px solid var(--line); }
        .quantity button { border: 0; background: #fff; width: 32px; height: 32px; }
        .quantity span { min-width: 30px; text-align: center; font-size: 12px; }
        .remove, .clear { border: 0; background: transparent; text-decoration: underline; font-size: 11px; color: #777; align-self: start; }
        .clear { margin-top: 20px; }
        .summary { background: #f4f0e9; padding: 34px; height: fit-content; position: sticky; top: 130px; }
        .summary-row, .summary-total { display: flex; justify-content: space-between; gap: 20px; padding: 17px 0; font-size: 13px; }
        .summary-total { border-top: 1px solid #dcd4c8; margin-top: 8px; padding-top: 22px; font-size: 16px; }
        .summary-btn { width: 100%; margin-top: 20px; }
        .summary-note { color: #817a71; font-size: 10px; text-align: center; margin-bottom: 0; }
        .empty-state { min-height: 650px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 40px; }
        .empty-state h1 { font-size: 52px; margin: 12px 0; font-weight: 500; }
        .empty-state p { color: var(--muted); margin: 0 0 28px; }
        @media (max-width: 800px) { .cart-grid { grid-template-columns: 1fr; gap: 40px; } .summary { position: static; } }
        @media (max-width: 520px) { .cart-item { grid-template-columns: 85px 1fr; gap: 15px; } .cart-item img { width: 85px; height: 110px; } .remove { grid-column: 2; } }
      `}),e.length?o.jsx("div",{className:"cart-page",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"page-title",children:[o.jsx("span",{className:"eyebrow",children:"Your bag"}),o.jsx("h1",{className:"serif",children:"Shopping bag"})]}),o.jsxs("div",{className:"cart-grid",children:[o.jsxs("div",{children:[e.map(i=>o.jsxs("div",{className:"cart-item",children:[o.jsx("img",{src:i.image,alt:i.title}),o.jsxs("div",{className:"cart-item-info",children:[o.jsx("span",{className:"card-category",children:i.category}),o.jsx("h3",{className:"serif",children:i.title}),o.jsxs("p",{children:["Rs. ",i.price.toLocaleString("en-PK")]}),o.jsxs("div",{className:"quantity",children:[o.jsx("button",{onClick:()=>n(i.id,i.quantity-1),children:"−"}),o.jsx("span",{children:i.quantity}),o.jsx("button",{onClick:()=>n(i.id,i.quantity+1),children:"+"})]})]}),o.jsx("button",{className:"remove",onClick:()=>t(i.id),children:"Remove"})]},i.id)),o.jsx("button",{className:"clear",onClick:r,children:"Clear bag"})]}),o.jsxs("aside",{className:"summary",children:[o.jsx("span",{className:"eyebrow",children:"Order summary"}),o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{children:"Subtotal"}),o.jsxs("strong",{children:["Rs. ",l.toLocaleString("en-PK")]})]}),o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{children:"Delivery"}),o.jsx("span",{children:"Calculated at checkout"})]}),o.jsxs("div",{className:"summary-total",children:[o.jsx("span",{children:"Total"}),o.jsxs("strong",{children:["Rs. ",l.toLocaleString("en-PK")]})]}),o.jsx(O,{to:"/checkout",className:"btn btn-dark summary-btn",children:"Proceed to checkout"}),o.jsx("p",{className:"summary-note",children:"Secure checkout · Easy WhatsApp assistance"})]})]})]})}):o.jsxs("div",{className:"empty-state",children:[o.jsx("span",{className:"eyebrow",children:"Your bag"}),o.jsx("h1",{className:"serif",children:"Nothing here yet."}),o.jsx("p",{children:"Discover a piece you'll love and add it to your bag."}),o.jsx(O,{to:"/shop",className:"btn btn-dark",children:"Continue shopping"})]})]})}function Fh(){const{wishlist:e}=Ol();return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .wishlist-page { padding: 70px 0 110px; min-height: 650px; }
        .wishlist-page .page-title { margin-bottom: 45px; }
        .wishlist-page .page-title h1 { font-size: 52px; font-weight: 500; margin: 10px 0 0; }
        .wishlist-empty { text-align: center; padding: 70px 20px; background: #f6f1e9; }
        .big-heart { font-size: 60px; font-weight: 200; }
        .wishlist-empty h2 { font-size: 38px; margin: 10px 0; font-weight: 500; }
        .wishlist-empty p { color: var(--muted); margin-bottom: 25px; }
        .shop-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 46px 26px; }
        @media (max-width: 800px) { .shop-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .shop-grid { grid-template-columns: 1fr 1fr; gap: 28px 12px; } }
      `}),o.jsx("div",{className:"wishlist-page",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"page-title",children:[o.jsx("span",{className:"eyebrow",children:"Saved pieces"}),o.jsx("h1",{className:"serif",children:"Your wishlist"})]}),e.length?o.jsx("div",{className:"shop-grid",children:e.map(t=>o.jsx(gl,{product:t},t.id))}):o.jsxs("div",{className:"wishlist-empty",children:[o.jsx("div",{className:"big-heart",children:"♡"}),o.jsx("h2",{className:"serif",children:"Keep your favourites close."}),o.jsx("p",{children:"Tap the heart on any piece to save it here."}),o.jsx(O,{className:"btn btn-dark",to:"/shop",children:"Explore jewellery"})]})]})})]})}function Bh(){const{id:e}=ih(),t=yn(),{addToCart:n}=Ol(),r=sr.find(c=>c.id===parseInt(e)),[l,i]=w.useState(1),[s,a]=w.useState(!1);if(!r)return o.jsxs("div",{className:"product-not-found",children:[o.jsx("h2",{children:"Product not found"}),o.jsx("button",{onClick:()=>t("/shop"),children:"Back to Shop"})]});const u=()=>{n({...r,quantity:l}),a(!0),setTimeout(()=>a(!1),2e3)};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .product-detail-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .product-detail-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        @media (min-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: start;
          }
        }

        .product-image-section {
          position: relative;
          background-color: #f7f7f7;
          overflow: hidden;
          aspect-ratio: 4 / 5;
        }

        .main-product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .detail-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: #111;
          color: #fff;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 12px;
          z-index: 2;
        }

        .product-info-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .detail-category {
          font-size: 0.85rem;
          color: #777;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .detail-title {
          font-size: 2rem;
          font-weight: 400;
          color: #111;
          letter-spacing: 0.02em;
        }

        .detail-price {
          font-size: 1.25rem;
          color: #333;
          font-weight: 500;
        }

        .detail-description {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
          margin-top: 10px;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          padding: 20px 0;
        }

        .quantity-cart-wrapper {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          background: #fff;
        }

        .quantity-selector button {
          background: none;
          border: none;
          padding: 12px 16px;
          cursor: pointer;
          font-size: 1rem;
        }

        .quantity-selector span {
          padding: 0 12px;
          font-weight: 500;
        }

        /* Clean Add to Bag Button (Glitch Fixed) */
        .add-to-bag-btn {
          flex: 1;
          background-color: #111;
          color: #fff;
          border: none;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 16px 24px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-shadow: none !important;
          -webkit-font-smoothing: antialiased;
        }

        .add-to-bag-btn:hover {
          background-color: #333;
        }

        .add-to-bag-btn.added {
          background-color: #2e7d32;
        }

        .extra-info {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.85rem;
          color: #666;
        }
      `}),o.jsx("div",{className:"product-detail-container",children:o.jsxs("div",{className:"product-detail-grid",children:[o.jsxs("div",{className:"product-image-section",children:[r.tag&&o.jsx("span",{className:"detail-badge",children:r.tag}),o.jsx("img",{src:r.image,alt:r.title,className:"main-product-img"})]}),o.jsxs("div",{className:"product-info-section",children:[o.jsx("span",{className:"detail-category",children:r.category}),o.jsx("h1",{className:"detail-title",children:r.title}),o.jsxs("div",{className:"detail-price",children:["Rs. ",r.price.toLocaleString()]}),o.jsx("p",{className:"detail-description",children:r.description}),o.jsxs("div",{className:"quantity-cart-wrapper",children:[o.jsxs("div",{className:"quantity-selector",children:[o.jsx("button",{onClick:()=>i(Math.max(1,l-1)),children:"-"}),o.jsx("span",{children:l}),o.jsx("button",{onClick:()=>i(l+1),children:"+"})]}),o.jsx("button",{className:`add-to-bag-btn ${s?"added":""}`,onClick:u,children:s?"ADDED TO BAG":"ADD TO BAG"})]}),o.jsxs("div",{className:"extra-info",children:[o.jsx("p",{children:"✓ Premium Quality & Certified Material"}),o.jsx("p",{children:"✓ Free Shipping Across Pakistan"}),o.jsx("p",{children:"✓ Secure Checkout & WhatsApp Support"})]})]})]})})]})}function Uh(){const{cart:e}=Ol(),t=e.reduce((n,r)=>n+r.price*r.quantity,0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .checkout-page { padding: 70px 0 110px; }
        .checkout-page .page-title h1 { font-size: 52px; font-weight: 500; margin: 10px 0 45px; }
        .checkout-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 70px; }
        .checkout-form { border-top: 1px solid var(--line); padding-top: 25px; }
        .checkout-form h2 { font-size: 30px; font-weight: 500; margin: 0 0 28px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 28px; }
        .form-grid label { font-size: 10px; text-transform: uppercase; letter-spacing: 1.3px; font-weight: 700; }
        .form-grid label.full { grid-column: 1 / -1; }
        .form-grid input { display: block; width: 100%; height: 48px; margin-top: 8px; border: 1px solid var(--line); background: #fff; outline: none; padding: 0 14px; }
        .form-grid input:focus { border-color: #9b9185; }
        .checkout-note { font-size: 11px; color: var(--muted); line-height: 1.6; max-width: 500px; }
        .checkout-grid .summary { position: static; }
        .checkout-item { display: flex; justify-content: space-between; gap: 20px; padding: 16px 0; border-bottom: 1px solid #ddd5c9; font-size: 12px; }
        .checkout-empty { text-align: center; padding: 70px; background: #f5f0e8; }
        @media (max-width: 800px) { .checkout-grid { grid-template-columns: 1fr; gap: 40px; } }
        @media (max-width: 520px) { .form-grid { grid-template-columns: 1fr; } .form-grid label.full { grid-column: auto; } }
      `}),o.jsx("div",{className:"checkout-page",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"page-title",children:[o.jsx("span",{className:"eyebrow",children:"Secure checkout"}),o.jsx("h1",{className:"serif",children:"Complete your order"})]}),e.length?o.jsxs("div",{className:"checkout-grid",children:[o.jsxs("form",{className:"checkout-form",onSubmit:n=>n.preventDefault(),children:[o.jsx("h2",{className:"serif",children:"Delivery details"}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("label",{children:["First name",o.jsx("input",{required:!0})]}),o.jsxs("label",{children:["Last name",o.jsx("input",{required:!0})]}),o.jsxs("label",{className:"full",children:["Email",o.jsx("input",{type:"email",required:!0})]}),o.jsxs("label",{className:"full",children:["Phone",o.jsx("input",{required:!0,placeholder:"03XX XXXXXXX"})]}),o.jsxs("label",{className:"full",children:["Address",o.jsx("input",{required:!0})]}),o.jsxs("label",{children:["City",o.jsx("input",{required:!0})]}),o.jsxs("label",{children:["Postal code",o.jsx("input",{})]})]}),o.jsx("button",{className:"btn btn-dark",type:"submit",children:"Place order"}),o.jsx("p",{className:"checkout-note",children:"For payment confirmation and delivery coordination, our team will contact you after your order."})]}),o.jsxs("aside",{className:"summary",children:[o.jsx("span",{className:"eyebrow",children:"Your order"}),e.map(n=>o.jsxs("div",{className:"checkout-item",children:[o.jsxs("span",{children:[n.title," × ",n.quantity]}),o.jsxs("strong",{children:["Rs. ",(n.price*n.quantity).toLocaleString("en-PK")]})]},n.id)),o.jsxs("div",{className:"summary-total",children:[o.jsx("span",{children:"Total"}),o.jsxs("strong",{children:["Rs. ",t.toLocaleString("en-PK")]})]})]})]}):o.jsxs("div",{className:"checkout-empty",children:[o.jsx("p",{children:"Your bag is empty."}),o.jsx(O,{to:"/shop",className:"btn btn-dark",children:"Shop jewellery"})]})]})})]})}function Wh(){return o.jsxs("div",{className:"content-page",children:[o.jsxs("section",{className:"content-hero",children:[o.jsx("span",{className:"eyebrow",children:"Our story"}),o.jsxs("h1",{className:"serif",children:["Jewellery with",o.jsx("br",{}),o.jsx("em",{children:"meaning."})]})]}),o.jsxs("section",{className:"content-split container",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1100&q=85",alt:"Jewellery craftsmanship"}),o.jsxs("div",{children:[o.jsx("span",{className:"eyebrow",children:"The Ahsan philosophy"}),o.jsxs("h2",{className:"serif",children:["Designed quietly.",o.jsx("br",{}),"Worn forever."]}),o.jsx("p",{children:"Ahsan Jewellery is built around a simple idea: exceptional jewellery does not need to shout. Our collections pair refined silhouettes with thoughtful details so each piece can become part of your everyday story."}),o.jsx("p",{children:"From first sketch to final polish, we care about proportion, comfort, finish and the small details you notice when you wear something often."})]})]})]})}function $h(){return o.jsxs("div",{className:"content-page",children:[o.jsxs("section",{className:"content-hero",children:[o.jsx("span",{className:"eyebrow",children:"Client care"}),o.jsxs("h1",{className:"serif",children:["Let's find your",o.jsx("br",{}),o.jsx("em",{children:"next piece."})]})]}),o.jsxs("section",{className:"contact-grid container",children:[o.jsxs("div",{children:[o.jsx("span",{className:"eyebrow",children:"Get in touch"}),o.jsx("h2",{className:"serif",children:"Our jewellery concierge is here to help."}),o.jsx("p",{children:"Need sizing guidance, a gift recommendation, or help choosing between two pieces? Send us a message."}),o.jsxs("div",{className:"contact-details",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"WhatsApp"}),o.jsx("span",{children:"+92 300 0000000"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Email"}),o.jsx("span",{children:"hello@ahsanjewellery.com"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Hours"}),o.jsx("span",{children:"Mon–Sat · 11:00–20:00"})]})]})]}),o.jsxs("form",{className:"contact-form",onSubmit:e=>e.preventDefault(),children:[o.jsxs("label",{children:["Name",o.jsx("input",{required:!0})]}),o.jsxs("label",{children:["Email",o.jsx("input",{type:"email",required:!0})]}),o.jsxs("label",{children:["Message",o.jsx("textarea",{rows:"6",required:!0})]}),o.jsx("button",{className:"btn btn-dark",children:"Send message"})]})]})]})}function Vh(){return o.jsxs("div",{className:"legal-page container",style:{padding:"40px 20px"},children:[o.jsx("h1",{children:"Terms of Service"}),o.jsx("p",{children:"Welcome to Ahsan Jewellery. By using our website and services, you agree to comply with and be bound by the following terms and conditions."}),o.jsx("h2",{children:"1. General Conditions"}),o.jsx("p",{children:"We reserve the right to refuse service to anyone for any reason at any time."}),o.jsx("h2",{children:"2. Products & Pricing"}),o.jsx("p",{children:"Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue any product."}),o.jsx("h2",{children:"3. Governing Law"}),o.jsx("p",{children:"These Terms of Service and any separate agreements shall be governed by and construed in accordance with the local laws."})]})}function Hh(){return o.jsxs("div",{className:"legal-page container",style:{padding:"40px 20px"},children:[o.jsx("h1",{children:"Privacy Policy"}),o.jsx("p",{children:"Your privacy is important to us. This Privacy Policy explains how Ahsan Jewellery collects, uses, and protects your personal information."}),o.jsx("h2",{children:"1. Information We Collect"}),o.jsx("p",{children:"We collect information you provide directly to us, such as when you create an account, make a purchase, or contact customer support."}),o.jsx("h2",{children:"2. How We Use Your Information"}),o.jsx("p",{children:"We use the information we collect to process your orders, provide customer support, and improve our services and products."}),o.jsx("h2",{children:"3. Data Protection"}),o.jsx("p",{children:"We implement a variety of security measures to maintain the safety of your personal information when you place an order."})]})}const Qh=()=>{const[e,t]=w.useState("admin@store.com"),[n,r]=w.useState("123456"),[l,i]=w.useState(""),s=yn(),a=u=>{u.preventDefault(),e&&n?(localStorage.setItem("isAdminLoggedIn","true"),s("/admin/dashboard")):i("Please fill in all fields.")};return o.jsx("div",{style:Ne.container,children:o.jsxs("div",{style:Ne.card,children:[o.jsx("h2",{style:Ne.title,children:"Admin Login (Local Mode)"}),l&&o.jsx("p",{style:Ne.error,children:l}),o.jsxs("form",{onSubmit:a,style:Ne.form,children:[o.jsxs("div",{style:Ne.inputGroup,children:[o.jsx("label",{style:Ne.label,children:"Email Address"}),o.jsx("input",{type:"email",value:e,onChange:u=>t(u.target.value),required:!0,style:Ne.input})]}),o.jsxs("div",{style:Ne.inputGroup,children:[o.jsx("label",{style:Ne.label,children:"Password"}),o.jsx("input",{type:"password",value:n,onChange:u=>r(u.target.value),required:!0,style:Ne.input})]}),o.jsx("button",{type:"submit",style:Ne.button,children:"Login"})]})]})})},Ne={container:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f9f9f9"},card:{width:"100%",maxWidth:"400px",padding:"40px",background:"#fff",borderRadius:"8px",boxShadow:"0 15px 35px rgba(0,0,0,0.1)"},title:{marginBottom:"24px",fontSize:"24px",fontWeight:"700",color:"#2b2b2b",textAlign:"center"},form:{display:"flex",flexDirection:"column",gap:"20px"},inputGroup:{display:"flex",flexDirection:"column",gap:"8px"},label:{fontSize:"13px",fontWeight:"600",color:"#2b2b2b"},input:{padding:"12px 14px",fontSize:"14px",border:"1px solid #ddd",borderRadius:"4px",outline:"none"},button:{padding:"12px",fontSize:"14px",fontWeight:"700",color:"#fff",backgroundColor:"#e90d8b",border:"none",borderRadius:"4px",cursor:"pointer"},error:{marginBottom:"15px",padding:"10px",backgroundColor:"#ffe6f0",color:"#c90876",fontSize:"13px",borderRadius:"4px",textAlign:"center"}},Kh=()=>{const[e,t]=w.useState("dashboard"),[n,r]=w.useState([{id:1,name:"Gold Plated Necklace Set",price:4500,category:"Necklaces",image:"necklace.jpg"}]),[l,i]=w.useState(""),[s,a]=w.useState(""),[u,c]=w.useState("Necklaces"),[g,f]=w.useState(""),[m,x]=w.useState(""),y=yn(),j=d=>{if(d.preventDefault(),!l||!s)return;const p={id:Date.now(),name:l,price:Number(s),category:u,image:g||"default-jewellery.jpg"};r([p,...n]),i(""),a(""),f(""),x("Product added successfully!"),setTimeout(()=>x(""),3e3)},C=d=>{window.confirm("Are you sure you want to delete this product?")&&r(n.filter(p=>p.id!==d))},h=()=>{localStorage.removeItem("isAdminLoggedIn"),y("/admin/login")};return o.jsxs("div",{style:S.layout,children:[o.jsxs("aside",{style:S.sidebar,children:[o.jsxs("div",{children:[o.jsxs("div",{style:S.brandContainer,children:[o.jsx("div",{style:S.brandBadge,children:"AJ"}),o.jsxs("div",{children:[o.jsx("h3",{style:S.brandTitle,children:"AHSAN JEWELLERY"}),o.jsx("p",{style:S.brandSubtitle,children:"ADMIN PANEL"})]})]}),o.jsxs("div",{style:S.menuSection,children:[o.jsx("p",{style:S.menuLabel,children:"MAIN MENU"}),o.jsx("button",{style:{...S.menuItem,...e==="dashboard"?S.activeMenuItem:{}},onClick:()=>t("dashboard"),children:"📊 Dashboard"}),o.jsxs("button",{style:{...S.menuItem,...e==="products"?S.activeMenuItem:{}},onClick:()=>t("products"),children:["📦 Products (",n.length,")"]}),o.jsx("button",{style:S.menuItem,onClick:()=>alert("Posts section coming soon!"),children:"📝 Posts"}),o.jsx("button",{style:S.menuItem,onClick:()=>alert("Media library coming soon!"),children:"🖼️ Media"}),o.jsx("button",{style:S.menuItem,onClick:()=>alert("Pages management coming soon!"),children:"📄 Pages"})]}),o.jsxs("div",{style:S.menuSection,children:[o.jsx("p",{style:S.menuLabel,children:"MANAGEMENT"}),o.jsx("button",{style:S.menuItem,onClick:()=>alert("Manage Orders view"),children:"🛒 Manage Orders"}),o.jsx("button",{style:S.menuItem,onClick:()=>alert("Manage Reviews view"),children:"⭐ Manage Reviews"}),o.jsx("button",{style:S.menuItem,onClick:()=>alert("Customer Messages view"),children:"💬 Messages"}),o.jsx("button",{style:S.menuItem,onClick:()=>alert("Payment Settings view"),children:"💳 Payments"}),o.jsx("button",{style:S.menuItem,onClick:()=>alert("Analytics view"),children:"📈 Analytics"}),o.jsx("button",{style:S.menuItem,onClick:()=>alert("Store Settings view"),children:"⚙️ Settings"})]})]}),o.jsxs("div",{style:S.adminProfileSection,children:[o.jsx("div",{style:S.adminAvatar,children:"AJ"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("p",{style:S.adminName,children:"Ahsan Jewellery"}),o.jsx("span",{onClick:h,style:S.logoutText,children:"Logout"})]})]})]}),o.jsxs("main",{style:S.mainContent,children:[o.jsxs("header",{style:S.topHeader,children:[o.jsxs("div",{style:S.headerTitleArea,children:[o.jsxs("span",{style:S.breadcrumb,children:["ADMIN PANEL / ",e.toUpperCase()]}),o.jsx("h2",{style:S.pageTitle,children:e==="dashboard"?"Dashboard Overview":"Product Management"})]}),o.jsxs("div",{style:S.topHeaderRight,children:[o.jsxs("div",{style:S.storeStatus,children:[o.jsx("span",{style:S.statusDot})," Store Online"]}),o.jsx("button",{onClick:h,style:S.headerLogoutBtn,children:"Logout"})]})]}),o.jsxs("div",{style:S.dashboardBody,children:[m&&o.jsx("div",{style:S.successBanner,children:m}),o.jsxs("div",{style:S.welcomeCard,children:[o.jsx("h3",{style:S.welcomeTitle,children:"Welcome back, Ahsan 👋"}),o.jsx("p",{style:S.welcomeText,children:"Here is a quick overview of your jewellery store activity."}),o.jsxs("div",{style:S.statsGrid,children:[o.jsxs("div",{style:S.statCard,children:[o.jsx("p",{style:S.statLabel,children:"TOTAL PRODUCTS"}),o.jsx("h3",{style:S.statValue,children:n.length}),o.jsx("p",{style:S.statDesc,children:"Active catalogue items"})]}),o.jsxs("div",{style:S.statCard,children:[o.jsx("p",{style:S.statLabel,children:"TOTAL ORDERS"}),o.jsx("h3",{style:S.statValue,children:"1"}),o.jsx("p",{style:S.statDesc,children:"Pending fulfillment"})]}),o.jsxs("div",{style:S.statCard,children:[o.jsx("p",{style:S.statLabel,children:"CUSTOMER REVIEWS"}),o.jsx("h3",{style:S.statValue,children:"0"}),o.jsx("p",{style:S.statDesc,children:"Awaiting moderation"})]}),o.jsxs("div",{style:S.statCard,children:[o.jsx("p",{style:S.statLabel,children:"TOTAL REVENUE"}),o.jsx("h3",{style:S.statValue,children:"Rs. 4,500"}),o.jsx("p",{style:S.statDesc,children:"Lifetime store sales"})]})]})]}),o.jsxs("div",{style:S.contentGrid,children:[o.jsxs("div",{style:S.card,children:[o.jsx("h3",{style:S.cardTitle,children:"➕ Add New Jewellery Product"}),o.jsxs("form",{onSubmit:j,style:S.form,children:[o.jsxs("div",{style:S.inputGroup,children:[o.jsx("label",{style:S.label,children:"Product Name"}),o.jsx("input",{type:"text",placeholder:"e.g. Bridal Kundan Set / Diamond Ring",value:l,onChange:d=>i(d.target.value),required:!0,style:S.input})]}),o.jsxs("div",{style:S.inputGroup,children:[o.jsx("label",{style:S.label,children:"Price (PKR)"}),o.jsx("input",{type:"number",placeholder:"4500",value:s,onChange:d=>a(d.target.value),required:!0,style:S.input})]}),o.jsxs("div",{style:S.inputGroup,children:[o.jsx("label",{style:S.label,children:"Category"}),o.jsxs("select",{value:u,onChange:d=>c(d.target.value),style:S.input,children:[o.jsx("option",{value:"Necklaces",children:"Necklaces"}),o.jsx("option",{value:"Rings",children:"Rings"}),o.jsx("option",{value:"Earrings",children:"Earrings"}),o.jsx("option",{value:"Bracelets",children:"Bracelets"}),o.jsx("option",{value:"Bridal Sets",children:"Bridal Sets"})]})]}),o.jsxs("div",{style:S.inputGroup,children:[o.jsx("label",{style:S.label,children:"Image Filename / URL"}),o.jsx("input",{type:"text",placeholder:"jewellery-item.jpg",value:g,onChange:d=>f(d.target.value),style:S.input})]}),o.jsx("button",{type:"submit",style:S.submitBtn,children:"Add Product to Store"})]})]}),o.jsxs("div",{style:S.card,children:[o.jsxs("h3",{style:S.cardTitle,children:["📋 Store Products Catalogue (",n.length,")"]}),o.jsx("div",{style:S.tableContainer,children:o.jsxs("table",{style:S.table,children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:S.th,children:"Product Name"}),o.jsx("th",{style:S.th,children:"Price"}),o.jsx("th",{style:S.th,children:"Category"}),o.jsx("th",{style:S.th,children:"Action"})]})}),o.jsx("tbody",{children:n.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"4",style:S.noData,children:"No products found in store."})}):n.map(d=>o.jsxs("tr",{children:[o.jsx("td",{style:S.td,children:o.jsx("strong",{children:d.name})}),o.jsxs("td",{style:S.td,children:["Rs. ",d.price.toLocaleString()]}),o.jsx("td",{style:S.td,children:o.jsx("span",{style:S.badge,children:d.category})}),o.jsx("td",{style:S.td,children:o.jsx("button",{onClick:()=>C(d.id),style:S.deleteBtn,children:"Delete"})})]},d.id))})]})})]})]})]})]})]})},S={layout:{display:"flex",minHeight:"100vh",backgroundColor:"#fdf2f8",fontFamily:"Inter, system-ui, -apple-system, sans-serif"},sidebar:{width:"280px",backgroundColor:"#0b0f19",color:"#94a3b8",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"24px",position:"sticky",top:0,height:"100vh",boxSizing:"border-box",boxShadow:"4px 0 15px rgba(0,0,0,0.05)"},brandContainer:{display:"flex",alignItems:"center",gap:"14px",marginBottom:"35px"},brandBadge:{backgroundColor:"#e90d8b",color:"#fff",width:"42px",height:"42px",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"800",fontSize:"18px"},brandTitle:{margin:0,fontSize:"15px",color:"#ffffff",fontWeight:"800",letterSpacing:"0.8px"},brandSubtitle:{margin:0,fontSize:"11px",color:"#64748b",fontWeight:"600"},menuSection:{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"25px"},menuLabel:{fontSize:"11px",fontWeight:"800",color:"#64748b",marginBottom:"8px",letterSpacing:"1px"},menuItem:{background:"transparent",border:"none",color:"#cbd5e1",padding:"12px 14px",textAlign:"left",borderRadius:"8px",cursor:"pointer",fontSize:"15px",fontWeight:"600",transition:"all 0.2s ease"},activeMenuItem:{backgroundColor:"#e90d8b",color:"#ffffff"},adminProfileSection:{display:"flex",alignItems:"center",gap:"12px",paddingTop:"20px",borderTop:"1px solid #1e293b"},adminAvatar:{width:"38px",height:"38px",borderRadius:"50%",backgroundColor:"#1e293b",color:"#cbd5e1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"bold"},adminName:{margin:0,fontSize:"14px",color:"#ffffff",fontWeight:"700"},logoutText:{color:"#ef4444",cursor:"pointer",fontSize:"12px",fontWeight:"650"},mainContent:{flex:1,display:"flex",flexDirection:"column",overflowY:"auto"},topHeader:{backgroundColor:"#ffffff",padding:"20px 35px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #fbcfe8"},headerTitleArea:{display:"flex",flexDirection:"column",gap:"3px"},breadcrumb:{fontSize:"12px",color:"#db2777",fontWeight:"700",letterSpacing:"0.5px"},pageTitle:{margin:0,fontSize:"22px",color:"#0f172a",fontWeight:"800"},topHeaderRight:{display:"flex",alignItems:"center",gap:"20px"},storeStatus:{display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",color:"#0f172a",backgroundColor:"#fdf2f8",padding:"8px 16px",borderRadius:"30px",border:"1px solid #fbcfe8",fontWeight:"600"},statusDot:{width:"10px",height:"10px",backgroundColor:"#22c55e",borderRadius:"50%"},headerLogoutBtn:{padding:"8px 18px",backgroundColor:"#0f172a",color:"#ffffff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:"700"},dashboardBody:{padding:"35px",display:"flex",flexDirection:"column",gap:"25px"},successBanner:{padding:"14px 18px",backgroundColor:"#dcfce7",color:"#15803d",borderRadius:"8px",fontSize:"14px",fontWeight:"700",border:"1px solid #bbf7d0"},welcomeCard:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"12px",boxShadow:"0 1px 3px rgba(233, 13, 139, 0.05)",border:"1px solid #fbcfe8"},welcomeTitle:{margin:"0 0 6px 0",fontSize:"24px",color:"#0f172a",fontWeight:"800"},welcomeText:{margin:"0 0 25px 0",fontSize:"15px",color:"#475569"},statsGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"20px"},statCard:{backgroundColor:"#fdf2f8",padding:"20px",borderRadius:"10px",border:"1px solid #fbcfe8"},statLabel:{margin:"0 0 8px 0",fontSize:"12px",fontWeight:"800",color:"#db2777",letterSpacing:"0.5px"},statValue:{margin:"0 0 4px 0",fontSize:"26px",fontWeight:"800",color:"#0f172a"},statDesc:{margin:0,fontSize:"13px",color:"#64748b",fontWeight:"500"},contentGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"25px"},card:{backgroundColor:"#ffffff",padding:"30px",borderRadius:"12px",boxShadow:"0 1px 3px rgba(233, 13, 139, 0.05)",border:"1px solid #fbcfe8"},cardTitle:{margin:"0 0 20px 0",fontSize:"18px",color:"#0f172a",fontWeight:"800"},form:{display:"flex",flexDirection:"column",gap:"18px"},inputGroup:{display:"flex",flexDirection:"column",gap:"8px"},label:{fontSize:"13px",fontWeight:"700",color:"#334155"},input:{padding:"12px 14px",fontSize:"14px",border:"1px solid #fbcfe8",borderRadius:"8px",outline:"none",backgroundColor:"#fff",color:"#0f172a"},submitBtn:{padding:"14px",backgroundColor:"#e90d8b",color:"#ffffff",border:"none",borderRadius:"8px",fontWeight:"800",fontSize:"15px",cursor:"pointer",marginTop:"5px",boxShadow:"0 4px 12px rgba(233, 13, 139, 0.25)"},tableContainer:{overflowX:"auto"},table:{width:"100%",borderCollapse:"collapse",textAlign:"left"},th:{padding:"12px 10px",borderBottom:"2px solid #fbcfe8",fontSize:"13px",color:"#db2777",fontWeight:"800"},td:{padding:"16px 10px",borderBottom:"1px solid #fde8f5",fontSize:"14px",color:"#0f172a"},badge:{backgroundColor:"#fdf2f8",color:"#db2777",padding:"5px 10px",borderRadius:"6px",fontSize:"12px",fontWeight:"700",border:"1px solid #fbcfe8"},deleteBtn:{padding:"6px 12px",backgroundColor:"#fee2e2",color:"#dc2626",border:"none",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"750"},noData:{textAlign:"center",padding:"30px",color:"#64748b",fontSize:"14px",fontWeight:"600"}};function Gh(){return o.jsx(Ph,{children:o.jsx(_h,{children:o.jsxs(ja,{children:[o.jsx(ue,{path:"/admin/login",element:o.jsx(Qh,{})}),o.jsx(ue,{path:"/admin/dashboard",element:o.jsx(Kh,{})}),o.jsx(ue,{path:"/*",element:o.jsxs("div",{className:"app-shell",children:[o.jsx(Th,{}),o.jsx("main",{className:"site-main",children:o.jsxs(ja,{children:[o.jsx(ue,{path:"/",element:o.jsx(Ea,{})}),o.jsx(ue,{path:"/shop",element:o.jsx(Mh,{})}),o.jsx(ue,{path:"/product/:id",element:o.jsx(Bh,{})}),o.jsx(ue,{path:"/cart",element:o.jsx(Ah,{})}),o.jsx(ue,{path:"/wishlist",element:o.jsx(Fh,{})}),o.jsx(ue,{path:"/checkout",element:o.jsx(Uh,{})}),o.jsx(ue,{path:"/about",element:o.jsx(Wh,{})}),o.jsx(ue,{path:"/contact",element:o.jsx($h,{})}),o.jsx(ue,{path:"/terms",element:o.jsx(Vh,{})}),o.jsx(ue,{path:"/privacy",element:o.jsx(Hh,{})}),o.jsx(ue,{path:"*",element:o.jsx(Ea,{})})]})}),o.jsx(Ih,{})]})})]})})})}fi.createRoot(document.getElementById("root")).render(o.jsx(Ma.StrictMode,{children:o.jsx(Gh,{})}));
