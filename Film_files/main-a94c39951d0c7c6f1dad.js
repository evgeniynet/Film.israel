_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"0sNQ":function(e,t){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var e=/\((.*)\)/.exec(this.toString());return e?e[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))})},"1ccW":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},"85TV":function(e,t,r){"use strict";var n=r("zoAU"),a=r("AroE");t.__esModule=!0,t.initScriptLoader=function(e){e.forEach(v)},t.default=void 0;var o=a(r("1ccW")),i=a(r("98FW")),u=r("q1tI"),c=r("FYa8"),s=r("DqTX"),l=r("0G5g"),f=new Map,d=new Set,p=["onLoad","dangerouslySetInnerHTML","children","onError","strategy"],m=function(e){var t=e.src,r=e.id,a=e.onLoad,o=void 0===a?function(){}:a,i=e.dangerouslySetInnerHTML,u=e.children,c=void 0===u?"":u,l=e.onError,m=r||t;if(f.has(t))d.has(m)||(d.add(m),f.get(t).then(o,l));else{var v=document.createElement("script"),h=new Promise((function(e,t){v.addEventListener("load",(function(){e(),o&&o.call(this)})),v.addEventListener("error",(function(){t(),l&&l()}))}));t&&(f.set(t,h),d.add(m)),i?v.innerHTML=i.__html||"":c?v.textContent="string"===typeof c?c:Array.isArray(c)?c.join(""):"":t&&(v.src=t);for(var y=0,g=Object.entries(e);y<g.length;y++){var S=n(g[y],2),E=S[0],b=S[1];if(void 0!==b&&!p.includes(E)){var w=s.DOMAttributeNames[E]||E.toLowerCase();v.setAttribute(w,b)}}document.body.appendChild(v)}};function v(e){var t=e.strategy,r=void 0===t?"afterInteractive":t;"afterInteractive"===r?m(e):"lazyOnload"===r&&window.addEventListener("load",(function(){(0,l.requestIdleCallback)((function(){return m(e)}))}))}var h=function(e){var t=e.src,r=void 0===t?"":t,n=e.onLoad,a=void 0===n?function(){}:n,s=e.strategy,f=void 0===s?"afterInteractive":s,d=e.onError,p=(0,i.default)(e,["src","onLoad","dangerouslySetInnerHTML","strategy","onError"]),v=(0,u.useContext)(c.HeadManagerContext),h=v.updateScripts,y=v.scripts;return(0,u.useEffect)((function(){"afterInteractive"===f?m(e):"lazyOnload"===f&&function(e){"complete"===document.readyState?(0,l.requestIdleCallback)((function(){return m(e)})):window.addEventListener("load",(function(){(0,l.requestIdleCallback)((function(){return m(e)}))}))}(e)}),[e,f]),"beforeInteractive"===f&&h&&(y.beforeInteractive=(y.beforeInteractive||[]).concat([(0,o.default)({src:r,onLoad:a,onError:d},p)]),h(y)),null};t.default=h},"98FW":function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}},BMP1:function(e,t,r){"use strict";var n=r("7KCV")(r("IKlv"));window.next=n,(0,n.default)().catch(console.error)},CQWR:function(e,t,r){"use strict";var n=r("zoAU"),a=r("7KCV");t.__esModule=!0,t.Portal=void 0;var o=a(r("q1tI")),i=r("i8i4");t.Portal=function(e){var t=e.children,r=e.type,a=o.useRef(null),u=o.useState(),c=n(u,2)[1];return o.useEffect((function(){return a.current=document.createElement(r),document.body.appendChild(a.current),c({}),function(){a.current&&document.body.removeChild(a.current)}}),[r]),a.current?(0,i.createPortal)(t,a.current):null}},DqTX:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(){var e=null;return{mountedInstances:new Set,updateHead:function(t){var r=e=Promise.resolve().then((function(){if(r===e){e=null;var n={};t.forEach((function(e){"link"===e.type&&e.props["data-optimized-fonts"]&&!document.querySelector('style[data-href="'.concat(e.props["data-href"],'"]'))&&(e.props.href=e.props["data-href"],e.props["data-href"]=void 0);var t=n[e.type]||[];t.push(e),n[e.type]=t}));var o=n.title?n.title[0]:null,i="";if(o){var u=o.props.children;i="string"===typeof u?u:Array.isArray(u)?u.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((function(e){!function(e,t){var r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]");0;for(var o=Number(n.content),i=[],u=0,c=n.previousElementSibling;u<o;u++,c=c.previousElementSibling)c.tagName.toLowerCase()===e&&i.push(c);var s=t.map(a).filter((function(e){for(var t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((function(e){return e.parentNode.removeChild(e)})),s.forEach((function(e){return r.insertBefore(e,n)})),n.content=(o-i.length+s.length).toString()}(e,n[e]||[])}))}}))}}},t.DOMAttributeNames=void 0;var n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){var t=e.type,r=e.props,a=document.createElement(t);for(var o in r)if(r.hasOwnProperty(o)&&"children"!==o&&"dangerouslySetInnerHTML"!==o&&void 0!==r[o]){var i=n[o]||o.toLowerCase();"script"!==t||"async"!==i&&"defer"!==i&&"noModule"!==i?a.setAttribute(i,r[o]):a[i]=!!r[o]}var u=r.children,c=r.dangerouslySetInnerHTML;return c?a.innerHTML=c.__html||"":u&&(a.textContent="string"===typeof u?u:Array.isArray(u)?u.join(""):""),a}t.DOMAttributeNames=n},IKlv:function(e,t,r){"use strict";var n=r("vJKn"),a=r("qVT1"),o=r("/GRZ"),i=r("i2R6"),u=r("48fX"),c=r("tCBg"),s=r("T0f4"),l=r("zoAU");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return c(this,r)}}var d=r("7KCV"),p=r("AroE");t.__esModule=!0,t.render=ue,t.renderError=se,t.default=t.emitter=t.router=t.version=void 0;var m=p(r("1ccW"));r("0sNQ");var v=p(r("q1tI")),h=p(r("i8i4")),y=r("FYa8"),g=p(r("dZ6Y")),S=r("qOIg"),E=r("elyg"),b=r("/jkW"),w=d(r("3WeD")),_=d(r("yLiY")),x=r("g/15"),T=r("CQWR"),A=p(r("DqTX")),C=p(r("zmvN")),P=p(r("bGXG")),L=r("oAez"),k=r("nOHt"),N=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=N;t.version="11.0.1";var M=function(e){return[].slice.call(e)},R=N.props,I=N.err,F=N.page,D=N.query,q=N.buildId,O=N.assetPrefix,B=N.runtimeConfig,j=N.dynamicIds,H=N.isFallback,X=N.locale,W=N.locales,G=N.domainLocales,z=N.isPreview,U=N.defaultLocale,V=O||"";r.p="".concat(V,"/_next/"),_.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:B||{}});var K=(0,x.getURL)();((0,E.hasBasePath)(K)&&(K=(0,E.delBasePath)(K)),N.scriptLoader)&&(0,r("85TV").initScriptLoader)(N.scriptLoader);var Y=new C.default(q,V),J=function(e){var t=l(e,2),r=t[0],n=t[1];return Y.routeLoader.onEntrypoint(r,n)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return J(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=J;var Q,Z,$,ee,te=(0,A.default)(),re=document.getElementById("__next");t.router=Z;var ne,ae=function(e){u(r,e);var t=f(r);function r(){return o(this,r),t.apply(this,arguments)}return i(r,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),!Z.isSsr||"/404"===F||"/_error"===F&&R&&R.pageProps&&404===R.pageProps.statusCode||!(H||N.nextExport&&((0,b.isDynamicRoute)(Z.pathname)||location.search)||R&&R.__N_SSG&&location.search)||Z.replace(Z.pathname+"?"+String(w.assign(w.urlQueryToSearchParams(Z.query),new URLSearchParams(location.search))),K,{_h:1,shallow:!H})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),r}(v.default.Component),oe=(0,g.default)();t.emitter=oe;var ie=function(){var e=a(n.mark((function e(){var r,a,o,i,u,c,s=arguments;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>0&&void 0!==s[0]?s[0]:{},r=I,e.prev=3,e.next=6,Y.routeLoader.whenEntrypoint("/_app");case 6:if(!("error"in(a=e.sent))){e.next=9;break}throw a.error;case 9:o=a.component,i=a.exports,$=o,i&&i.reportWebVitals&&(ee=function(e){var t,r=e.id,n=e.name,a=e.startTime,o=e.value,u=e.duration,c=e.entryType,s=e.entries,l="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),i.reportWebVitals({id:r||l,name:n,startTime:a||t,value:null==o?u:o,label:"mark"===c||"measure"===c?"custom":"web-vital"})}),e.next=16;break;case 16:return e.next=18,Y.routeLoader.whenEntrypoint(F);case 18:e.t0=e.sent;case 19:if(!("error"in(u=e.t0))){e.next=22;break}throw u.error;case 22:ne=u.component,e.next=27;break;case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(3),r=e.t1;case 32:if(!window.__NEXT_PRELOADREADY){e.next=36;break}return e.next=36,window.__NEXT_PRELOADREADY(j);case 36:return t.router=Z=(0,k.createRouter)(F,D,K,{initialProps:R,pageLoader:Y,App:$,Component:ne,wrapApp:he,err:r,isFallback:Boolean(H),subscription:function(e,t,r){return ue(Object.assign({},e,{App:t,scroll:r}))},locale:X,locales:W,defaultLocale:U,domainLocales:G,isPreview:z}),ue(c={App:$,initial:!0,Component:ne,props:R,err:r}),e.abrupt("return",oe);case 43:return e.abrupt("return",{emitter:oe,render:ue,renderCtx:c});case 44:case"end":return e.stop()}}),e,null,[[3,29]])})));return function(){return e.apply(this,arguments)}}();function ue(e){return ce.apply(this,arguments)}function ce(){return(ce=a(n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,se(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,ye(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,se((0,m.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function se(e){var t=e.App,r=e.err;return console.error(r),Y.loadPage("/_error").then((function(n){var a=n.page,o=n.styleSheets,i=he(t),u={Component:a,AppTree:i,router:Z,ctx:{err:r,pathname:F,query:D,asPath:K,AppTree:i}};return Promise.resolve(e.props?e.props:(0,x.loadGetInitialProps)(t,u)).then((function(t){return ye((0,m.default)({},e,{err:r,Component:a,styleSheets:o,props:t}))}))}))}t.default=ie;var le="function"===typeof h.default.hydrate;function fe(){x.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),ee&&performance.getEntriesByName("Next.js-hydration").forEach(ee),pe())}function de(){if(x.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),ee&&(performance.getEntriesByName("Next.js-render").forEach(ee),performance.getEntriesByName("Next.js-route-change-to-render").forEach(ee)),pe(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function pe(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function me(e){var t=e.children;return v.default.createElement(ae,{fn:function(e){return se({App:$,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},v.default.createElement(S.RouterContext.Provider,{value:(0,k.makePublicRouterInstance)(Z)},v.default.createElement(y.HeadManagerContext.Provider,{value:te},t)))}var ve,he=function(e){return function(t){var r=(0,m.default)({},t,{Component:ne,err:I,router:Z});return v.default.createElement(me,null,v.default.createElement(e,r))}};function ye(e){var t=e.App,r=e.Component,n=e.props,a=e.err,o="initial"in e?void 0:e.styleSheets;r=r||ve.Component,n=n||ve.props;var i=(0,m.default)({},n,{Component:r,err:a,router:Z});ve=i;var u,c=!1,s=new Promise((function(e,t){Q&&Q(),u=function(){Q=null,e()},Q=function(){c=!0,Q=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));function l(){u()}!function(){if(!o)return!1;var e=M(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")}))),r=document.querySelector("noscript[data-n-css]"),n=null==r?void 0:r.getAttribute("data-n-css");o.forEach((function(e){var r=e.href,a=e.text;if(!t.has(r)){var o=document.createElement("style");o.setAttribute("data-n-href",r),o.setAttribute("media","x"),n&&o.setAttribute("nonce",n),document.head.appendChild(o),o.appendChild(document.createTextNode(a))}}))}();var f=v.default.createElement(v.default.Fragment,null,v.default.createElement(Se,{callback:function(){if(o&&!c){for(var t=new Set(o.map((function(e){return e.href}))),r=M(document.querySelectorAll("style[data-n-href]")),n=r.map((function(e){return e.getAttribute("data-n-href")})),a=0;a<n.length;++a)t.has(n[a])?r[a].removeAttribute("media"):r[a].setAttribute("media","x");var i=document.querySelector("noscript[data-n-css]");i&&o.forEach((function(e){var t=e.href,r=document.querySelector('style[data-n-href="'.concat(t,'"]'));r&&(i.parentNode.insertBefore(r,i.nextSibling),i=r)})),M(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}e.scroll&&window.scrollTo(e.scroll.x,e.scroll.y)}}),v.default.createElement(me,null,v.default.createElement(t,i),v.default.createElement(T.Portal,{type:"next-route-announcer"},v.default.createElement(L.RouteAnnouncer,null))));return function(e,t){x.ST&&performance.mark("beforeRender");var r=t(le?fe:de);le?(h.default.hydrate(r,e),le=!1):h.default.render(r,e)}(re,(function(e){return v.default.createElement(ge,{callbacks:[e,l]},f)})),s}function ge(e){var t=e.callbacks,r=e.children;return v.default.useLayoutEffect((function(){return t.forEach((function(e){return e()}))}),[t]),v.default.useEffect((function(){(0,P.default)(ee)}),[]),r}function Se(e){var t=e.callback;return v.default.useLayoutEffect((function(){return t()}),[t]),null}},bGXG:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,a=r("p0hA"),o=(location.href,!1);function i(e){n&&n(e)}t.default=function(e){n=e,o||(o=!0,(0,a.getCLS)(i),(0,a.getFID)(i),(0,a.getFCP)(i),(0,a.getLCP)(i),(0,a.getTTFB)(i))}},oAez:function(e,t,r){"use strict";var n=r("zoAU"),a=r("7KCV");t.__esModule=!0,t.RouteAnnouncer=u,t.default=void 0;var o=a(r("q1tI")),i=r("nOHt");function u(){var e=(0,i.useRouter)().asPath,t=(0,o.useState)(""),r=n(t,2),a=r[0],u=r[1],c=(0,o.useRef)(!1);return(0,o.useEffect)((function(){if(c.current){var t,r=document.querySelector("h1");r&&(t=r.innerText||r.textContent),t||(t=document.title?document.title:e),u(t)}else c.current=!0}),[e]),o.default.createElement("p",{"aria-live":"assertive",id:"__next-route-announcer__",role:"alert",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},a)}var c=u;t.default=c},p0hA:function(e,t,r){(function(t){e.exports=function(){var e={599:function(e,t){!function(e){"use strict";var t,r,n=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},a=function(e){return{name:e,value:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,delta:0,entries:[],id:n(),isFinal:!1}},o=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},i=!1,u=!1,c=function(e){i=!e.persisted},s=function(){addEventListener("pagehide",c),addEventListener("beforeunload",(function(){}))},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u||(s(),u=!0),addEventListener("visibilitychange",(function(t){var r=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:r,isUnloading:i})}),{capture:!0,once:t})},f=function(e,t,r,n){var a;return function(){r&&t.isFinal&&r.disconnect(),t.value>=0&&(n||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(a||0),(t.delta||t.isFinal||void 0===a)&&(e(t),a=t.value))}},d=function(){return void 0===t&&(t="hidden"===document.visibilityState?0:1/0,l((function(e){var r=e.timeStamp;return t=r}),!0)),{get timeStamp(){return t}}},p=function(){return r||(r=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),r};e.getCLS=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a("CLS",0),i=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),t())},u=o("layout-shift",i);u&&(t=f(e,n,u,r),l((function(e){var r=e.isUnloading;u.takeRecords().map(i),r&&(n.isFinal=!0),t()})))},e.getFCP=function(e){var t,r=a("FCP"),n=d(),i=o("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(r.value=e.startTime,r.isFinal=!0,r.entries.push(e),t())}));i&&(t=f(e,r,i))},e.getFID=function(e){var t=a("FID"),r=d(),n=function(e){e.startTime<r.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,u())},i=o("first-input",n),u=f(e,t,i);i?l((function(){i.takeRecords().map(n),i.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,n){n.timeStamp<r.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e}],u())}))},e.getLCP=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=a("LCP"),i=d(),u=function(e){var r=e.startTime;r<i.timeStamp?(n.value=r,n.entries.push(e)):n.isFinal=!0,t()},c=o("largest-contentful-paint",u);if(c){t=f(e,n,c,r);var s=function(){n.isFinal||(c.takeRecords().map(u),n.isFinal=!0,t())};p().then(s),l(s,!0)}},e.getTTFB=function(e){var t,r=a("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();r.value=r.delta=t.responseStart,r.entries=[t],r.isFinal=!0,e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})}(t)}},r={};function n(t){if(r[t])return r[t].exports;var a=r[t]={exports:{}},o=!0;try{e[t].call(a.exports,a,a.exports,n),o=!1}finally{o&&delete r[t]}return a.exports}return n.ab=t+"/",n(599)}()}).call(this,"/")},zmvN:function(e,t,r){"use strict";var n=r("/GRZ"),a=r("i2R6"),o=r("7KCV"),i=r("AroE");t.__esModule=!0,t.default=void 0;var u=r("elyg"),c=i(r("Lab5")),s=r("/jkW"),l=r("hS4m"),f=r("X24+"),d=o(r("Nh2W"));var p=function(){function e(t,r){n(this,e),this.buildId=void 0,this.assetPrefix=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.routeLoader=void 0,this.routeLoader=(0,d.default)(r),this.buildId=t,this.assetPrefix=r,this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return a(e,[{key:"getPageList",value:function(){return(0,d.getClientBuildManifest)().then((function(e){return e.sortedPages}))}},{key:"getDataHref",value:function(e,t,r,n){var a=this,o=(0,l.parseRelativeUrl)(e),i=o.pathname,d=o.query,p=o.search,m=(0,l.parseRelativeUrl)(t).pathname,v=function(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}(i),h=function(e){var t=(0,c.default)((0,f.removePathTrailingSlash)((0,u.addLocale)(e,n)),".json");return(0,u.addBasePath)("/_next/data/".concat(a.buildId).concat(t).concat(r?"":p))},y=(0,s.isDynamicRoute)(v),g=y?(0,u.interpolateAs)(i,m,d).result:"";return y?g&&h(g):h(v)}},{key:"_isSsg",value:function(e){return this.promisedSsgManifest.then((function(t){return t.has(e)}))}},{key:"loadPage",value:function(e){return this.routeLoader.loadRoute(e).then((function(e){if("component"in e)return{page:e.component,mod:e.exports,styleSheets:e.styles.map((function(e){return{href:e.href,text:e.content}}))};throw e.error}))}},{key:"prefetch",value:function(e){return this.routeLoader.prefetch(e)}}]),e}();t.default=p}},[["BMP1",1,2,0,6]]]);