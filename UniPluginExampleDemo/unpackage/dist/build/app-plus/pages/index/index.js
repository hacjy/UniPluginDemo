/*! For license information please see index.js.LICENSE.txt */
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=13)}([function(t,e,r){"use strict";var n=r(6),o=r(3),i=r(12);var a=Object(i.a)(o.default,n.b,n.c,!1,null,null,"045e2df4",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(11).default,this.options.style):Object.assign(this.options.style,r(11).default)}).call(a),e.default=a.exports},function(t,e){function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports={"@VERSION":2}},function(t,e,r){"use strict";var n=r(4),o=r.n(n);e.default=o.a},function(t,e,r){"use strict";(function(t){var n=r(17);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r(8)),i=n(r(9)),a=n(r(19)),u={data:function(){return{title:"Hello",engine:null}},onLoad:function(){this.init()},methods:{init:function(){var e=this;return(0,i.default)(o.default.mark((function r(){return o.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.default.create({title:e.title});case 2:e.engine=r.sent,t("log","init",null==e.engine?"engine is null":e.engine," at pages/index/index.nvue:27"),e.addListener();case 5:case"end":return r.stop()}}),r)})))()},clickTitle:function(){this.engine.setMessage({Message:"test"})},addListener:function(){var e=this;this.engine.addListener("onSetMessage",(function(r){t("log","onSetMessage",JSON.stringify(r)," at pages/index/index.nvue:38"),e.title="setMessage event called "+Math.random(10).toFixed(1)}))}}};e.default=u}).call(this,r(7).default)},function(t,e){t.exports={".content":{"":{display:["flex",0,0,0],flexDirection:["column",0,0,0],alignItems:["center",0,0,0],justifyContent:["center",0,0,0]}},".logo":{"":{height:["200rpx",0,0,1],width:["200rpx",0,0,1],marginTop:["200rpx",0,0,1],marginBottom:["50rpx",0,0,1]}},".text-area":{"":{display:["flex",0,0,2],justifyContent:["center",0,0,2]}},".title":{"":{borderWidth:["20rpx",0,0,3],borderStyle:["solid",0,0,3],borderColor:["#0000FF",0,0,3],fontSize:["36rpx",0,0,3],color:["#000000",0,0,3]}},"@VERSION":2}},function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["content"]},[e("u-image",{staticClass:["logo"],attrs:{src:"/static/logo.png"}}),e("view",{staticClass:["text-area"],on:{click:this.clickTitle}},[e("u-text",{staticClass:["title"],appendAsTree:!0,attrs:{append:"tree"}},[this._v(this._s(this.title))])])],1)])},o=[]},function(t,e,r){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"==typeof __channelId__&&__channelId__}function i(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var a=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(r){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var r=n(t).toUpperCase();t="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+t+"---END:"+r+"---":String(t)}return t})),c="";if(u.length>1){var s=u.pop();c=u.join("---COMMA---"),0===s.indexOf(" at ")?c+=s:c+="---COMMA---"+s}else c=u[0];console[a](c)},e.log=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];console[t].apply(console,r)}},function(t,e,r){var n=r(1),o=r(18)();t.exports=o;try{regeneratorRuntime=o}catch(t){"object"===("undefined"==typeof globalThis?"undefined":n(globalThis))?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},function(t,e){function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(1).default,o=r(22);t.exports=function(t){var e=o(t,"string");return"symbol"===n(e)?e:String(e)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){"use strict";r.r(e);var n=r(5),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},function(t,e,r){"use strict";function n(t,e,r,n,o,i,a,u,c,s){var l,f="function"==typeof t?t.options:t;if(c){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in c)p.call(c,d)&&!p.call(f.components,d)&&(f.components[d]=c[d])}if(s&&("function"==typeof s.beforeCreate&&(s.beforeCreate=[s.beforeCreate]),(s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(f.mixins||(f.mixins=[])).push(s)),e&&(f.render=e,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):o&&(l=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var y=f.render;f.render=function(t,e){return l.call(e),y(t,e)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:f}}r.d(e,"a",(function(){return n}))},function(t,e,r){"use strict";r.r(e);r(14),r(16);var n=r(0);n.default.mpType="page",n.default.route="pages/index/index",n.default.el="#root",new Vue(n.default)},function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(15).default,Vue.prototype.__$appStyle__)},function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}},function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(1).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),u=new L(n||[]);return a(i,"_invoke",{value:j(t,r,u)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var y={};function h(){}function v(){}function g(){}var b={};f(b,c,(function(){return this}));var _=Object.getPrototypeOf,m=_&&_(_(P([])));m&&m!==r&&i.call(m,c)&&(b=m);var x=g.prototype=h.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){var r;a(this,"_invoke",{value:function(o,a){function u(){return new e((function(r,u){!function r(o,a,u,c){var s=d(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}(o,a,r,u)}))}return r=r?r.then(u,u):u()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=S(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:A}}function A(){return{value:void 0,done:!0}}return v.prototype=g,a(x,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:v,configurable:!0}),v.displayName=f(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,f(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},w(O.prototype),f(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),f(x,l,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),y}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){"use strict";(function(t,n){var o=r(8),i=r(21),a=r(9),u=r(23),c=r(24);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var f,p=t("Uni-Base-BaseModule"),d=(t("globalEvent"),function(){function t(){var e,r,n;u(this,t),e=this,r="_listeners",n=new Map,r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}var e;return c(t,[{key:"addListener",value:function(t,e){plus.globalEvent.addEventListener("com.hacjy.uniplugin_base."+t,e)}},{key:"setMessage",value:function(e){return n("log","setMessage run"," at uni-base/base.js:75"),t._callMethod("setMessage",{params:e})}}],[{key:"create",value:(e=a(o.mark((function e(r){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=2;break}return e.abrupt("return",f);case 2:return e.prev=2,e.next=5,t._callMethod("create",{config:l({},r),appType:14});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),n("log",e.t0," at uni-base/base.js:46");case 10:return f=new t,e.abrupt("return",f);case 12:case"end":return e.stop()}}),e,null,[[2,7]])}))),function(t){return e.apply(this,arguments)})},{key:"_callMethod",value:function(t,e){return n("log","_callMethod run",t,e," at uni-base/base.js:54"),new Promise((function(r,o){p.callMethod({method:t,args:e},(function(t){n("log","_callMethod callback",t," at uni-base/base.js:60"),t&&t.code?o(t):r(t)}))}))}}]),t}());e.default=d}).call(this,r(20).default,r(7).default)},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return weex.requireModule(t)}},function(t,e,r){var n=r(10);t.exports=function(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(1).default;t.exports=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},function(t,e,r){var n=r(10);function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}t.exports=function(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports}]);