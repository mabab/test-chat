"use strict"
define("p2p/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/app",["exports","ember-resolver","ember-load-initializers","p2p/config/environment"],(function(e,t,n,r){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?c(e):t}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var p=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)})(p,Ember.Application)
var n,o=(n=p,function(){var e,t=s(n)
if(l()){var r=s(this).constructor
e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments)
return u(this,e)})
function p(){var e
i(this,p)
for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u]
return f(c(e=o.call.apply(o,[this].concat(a))),"modulePrefix",r.default.modulePrefix),f(c(e),"podModulePrefix",r.default.podModulePrefix),f(c(e),"Resolver",t.default),e}return p}()
e.default=p,(0,n.default)(p,r.default.modulePrefix)})),define("p2p/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/components/video-chat/index",["exports","p2p/utils/signaling/ably","p2p/utils/webrtc-peer","simple-peer"],(function(e,t,n,r){var o,i,a,u,c
function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var t=this,n=arguments
return new Promise((function(r,o){var i=e.apply(t,n)
function a(e){s(i,r,o,a,u,"next",e)}function u(e){s(i,r,o,a,u,"throw",e)}a(void 0)}))}}function p(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var j=Ember.HTMLBars.template({id:"KC9Y9Q3Q",block:'{"symbols":[],"statements":[[9,"div",false],[3,0,0,[27,[26,0,"ModifierHead"],[]],[[27,[24,0],["didInsert"]]],null],[10],[1,1,0,0,"\\n    "],[7,"video-chat/publisher",[],[["@stream"],[[27,[24,0],["publisherStream"]]]],null],[1,1,0,0,"\\n    "],[9,"br",true],[10],[11],[1,1,0,0,"\\n    "],[7,"video-chat/subscriber",[],[["@stream"],[[27,[24,0],["subscribeStream"]]]],null],[1,1,0,0,"\\n    "],[7,"video-chat/subscriber",[],[["@stream"],[[27,[24,0],["subscribeStream2"]]]],null],[1,1,0,0,"\\n"],[11],[1,1,0,0,"\\n\\n"]],"hasEval":false,"upvars":["did-insert"]}',meta:{moduleName:"p2p/components/video-chat/index.hbs"}}),_=(i=w((o=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)})(P,Ember.Component)
var r,o,l,s,w,j,_=(r=P,function(){var e,t=g(r)
if(h()){var n=g(this).constructor
e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments)
return m(this,e)})
function P(){var e
d(this,P)
for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return p(v(e=_.call.apply(_,[this].concat(n))),"publisherStream",i,v(e)),p(v(e),"subscribeStream",a,v(e)),p(v(e),"subscribeStream2",u,v(e)),p(v(e),"answer",c,v(e)),O(v(e),"connectionId",""),O(v(e),"iceServers",[{url:"stun:global.stun.twilio.com:3478?transport=udp",urls:"stun:global.stun.twilio.com:3478?transport=udp"},{url:"turn:global.turn.twilio.com:3478?transport=udp",username:"7c2abd406c4517910475f586b35da630580d62a5a30be538732db227bd81e9a0",urls:"turn:global.turn.twilio.com:3478?transport=udp",credential:"abyDo4TdSCyVlC7UMBo4gnEiskeO+NFkvBQXR4sEDGM="},{url:"turn:global.turn.twilio.com:3478?transport=tcp",username:"7c2abd406c4517910475f586b35da630580d62a5a30be538732db227bd81e9a0",urls:"turn:global.turn.twilio.com:3478?transport=tcp",credential:"abyDo4TdSCyVlC7UMBo4gnEiskeO+NFkvBQXR4sEDGM="},{url:"turn:global.turn.twilio.com:443?transport=tcp",username:"7c2abd406c4517910475f586b35da630580d62a5a30be538732db227bd81e9a0",urls:"turn:global.turn.twilio.com:443?transport=tcp",credential:"abyDo4TdSCyVlC7UMBo4gnEiskeO+NFkvBQXR4sEDGM="}]),e}return o=P,(l=[{key:"didInsert",value:(j=f(regeneratorRuntime.mark((function e(r){var o,i,a,u=this
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.connectionId=Number(new Date)+"-tmp",e.next=3,emberAutoImportDynamic("webrtc-adapter")
case 3:return e.sent,o=new t.default({options:{channelName:"test",connectionId:this.connectionId},key:"XzYLAw.TYRvcQ:VbpJWMJ3pnDtsqr7"}),e.next=7,o.isInit()
case 7:return e.next=9,this.getStream()
case 9:this.publisherStream=e.sent,this.connectionId,i=new n.default({initiator:!0,stream:this.publisherStream}),a=new n.default({initiator:!1,stream:this.publisherStream}),i.onSignal=function(e){a.signal(e)},a.onSignal=function(e){i.signal(e)},i._onStream=function(e){console.log("===",e),u.subscribeStream=e},a._onStream=function(e){u.subscribeStream2=e}
case 17:case"end":return e.stop()}}),e,this)}))),function(e){return j.apply(this,arguments)})},{key:"getStream",value:(w=f(regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={audio:!0,video:!0},e.abrupt("return",navigator&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia(t))
case 2:case"end":return e.stop()}}),e)}))),function(){return w.apply(this,arguments)})}])&&b(o.prototype,l),s&&b(o,s),P}()).prototype,"publisherStream",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),a=w(o.prototype,"subscribeStream",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=w(o.prototype,"subscribeStream2",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),c=w(o.prototype,"answer",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),w(o.prototype,"didInsert",[Ember._action],Object.getOwnPropertyDescriptor(o.prototype,"didInsert"),o.prototype),o)
e.default=_,Ember._setComponentTemplate(j,_)})),define("p2p/components/video-chat/publisher/index",["exports"],(function(e){var t,n
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d,b,y,m,v,h,g=Ember.HTMLBars.template({id:"khmx8hSC",block:'{"symbols":[],"statements":[[1,1,0,0,"\\n"],[9,"div",true],[12,"class","publisher",null],[10],[1,1,0,0,"\\n    "],[1,1,0,0,[27,[24,0],["videoElement"]]],[1,1,0,0,"\\n"],[11],[1,1,0,0,"\\n"]],"hasEval":false,"upvars":[]}',meta:{moduleName:"p2p/components/video-chat/publisher/index.hbs"}}),O=(d=(t=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(m,Ember.Component)
var t,r,d,b,y=(t=m,function(){var e,n=f(t)
if(s()){var r=f(this).constructor
e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments)
return c(this,e)})
function m(){var e
i(this,m)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return p(l(e=y.call.apply(y,[this].concat(r))),"tagName",""),o(l(e),"stream",n,l(e)),e}return r=m,(d=[{key:"attachMediaStream",value:function(e,t){"srcObject"in e?e.srcObject=t:e.src=window.URL.createObjectURL(t)}},{key:"getVideoEl",value:function(e){var t=document.createElement("video")
return t.setAttribute("autoplay",""),t.setAttribute("playsinline",""),t.setAttribute("muted",""),this.attachMediaStream(t,e),t.muted="muted",t}},{key:"videoElement",get:function(){return this.getVideoEl(this.stream)}}])&&a(r.prototype,d),b&&a(r,b),m}()).prototype,b="stream",y=[Ember._tracked],m={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}},h={},Object.keys(m).forEach((function(e){h[e]=m[e]})),h.enumerable=!!h.enumerable,h.configurable=!!h.configurable,("value"in h||h.initializer)&&(h.writable=!0),h=y.slice().reverse().reduce((function(e,t){return t(d,b,e)||e}),h),v&&void 0!==h.initializer&&(h.value=h.initializer?h.initializer.call(v):void 0,h.initializer=void 0),void 0===h.initializer&&(Object.defineProperty(d,b,h),h=null),n=h,t)
e.default=O,Ember._setComponentTemplate(g,O)})),define("p2p/components/video-chat/subscriber/index",["exports"],(function(e){var t,n
function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var d,b,y,m,v,h,g=Ember.HTMLBars.template({id:"anI/eTMH",block:'{"symbols":[],"statements":[[5,[27,[26,0,"BlockHead"],[]],[[27,[24,0],["stream"]]],null,[["default"],[{"statements":[[1,1,0,0,"    "],[9,"div",true],[12,"class","subscriber",null],[10],[1,1,0,0,"\\n        "],[1,1,0,0,[27,[24,0],["videoElement"]]],[1,1,0,0,"\\n    "],[11],[1,1,0,0,"\\n"]],"parameters":[]}]]]],"hasEval":false,"upvars":["if"]}',meta:{moduleName:"p2p/components/video-chat/subscriber/index.hbs"}}),O=(d=(t=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(m,Ember.Component)
var t,r,d,b,y=(t=m,function(){var e,n=f(t)
if(s()){var r=f(this).constructor
e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments)
return c(this,e)})
function m(){var e
i(this,m)
for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
return p(l(e=y.call.apply(y,[this].concat(r))),"tagName",""),o(l(e),"stream",n,l(e)),e}return r=m,(d=[{key:"attachMediaStream",value:function(e,t){"srcObject"in e?e.srcObject=t:e.src=window.URL.createObjectURL(t)}},{key:"getVideoEl",value:function(e){var t=document.createElement("video")
return t.setAttribute("autoplay",""),t.setAttribute("playsinline",""),t.setAttribute("muted",""),this.attachMediaStream(t,e),t.muted="muted",t}},{key:"videoElement",get:function(){return this.getVideoEl(this.stream)}}])&&a(r.prototype,d),b&&a(r,b),m}()).prototype,b="stream",y=[Ember._tracked],m={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}},h={},Object.keys(m).forEach((function(e){h[e]=m[e]})),h.enumerable=!!h.enumerable,h.configurable=!!h.configurable,("value"in h||h.initializer)&&(h.writable=!0),h=y.slice().reverse().reduce((function(e,t){return t(d,b,e)||e}),h),v&&void 0!==h.initializer&&(h.value=h.initializer?h.initializer.call(v):void 0,h.initializer=void 0),void 0===h.initializer&&(Object.defineProperty(d,b,h),h=null),n=h,t)
e.default=O,Ember._setComponentTemplate(g,O)})),define("p2p/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/helpers/app-version",["exports","p2p/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=r.versionOnly||r.hideSha,a=r.shaOnly||r.hideVersion,u=null
return i&&(r.showExtended&&(u=o.match(n.versionExtendedRegExp)),u||(u=o.match(n.versionRegExp))),a&&(u=o.match(n.shaRegExp)),u?u[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var o=Ember.Helper.helper(r)
e.default=o})),define("p2p/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("p2p/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("p2p/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","p2p/config/environment"],(function(e,t,n){var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,o)}
e.default=i})),define("p2p/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("p2p/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:n.default}
e.default=r})),define("p2p/initializers/export-application-global",["exports","p2p/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r})),define("p2p/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n})),define("p2p/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/router",["exports","p2p/config/environment"],(function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)})(f,Ember.Router)
var n,s=(n=f,function(){var e,t=c(n)
if(u()){var r=c(this).constructor
e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments)
return i(this,e)})
function f(){var e
r(this,f)
for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i]
return l(a(e=s.call.apply(s,[this].concat(o))),"location",t.default.locationType),l(a(e),"rootURL",t.default.rootURL),e}return f}()
e.default=s,s.map((function(){this.route("answer")}))})),define("p2p/routes/answer",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(c,Ember.Route)
var t,u=(t=c,function(){var e,n=a(t)
if(i()){var r=a(this).constructor
e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments)
return o(this,e)})
function c(){return n(this,c),u.apply(this,arguments)}return c}()
e.default=u})),define("p2p/routes/index",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):n}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var u=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(c,Ember.Route)
var t,u=(t=c,function(){var e,n=a(t)
if(i()){var r=a(this).constructor
e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments)
return o(this,e)})
function c(){return n(this,c),u.apply(this,arguments)}return c}()
e.default=u})),define("p2p/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("p2p/templates/answer",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"nM1S5SCQ",block:'{"symbols":[],"statements":[[7,"video-chat",[],[["@answer"],[true]],null]],"hasEval":false,"upvars":[]}',meta:{moduleName:"p2p/templates/answer.hbs"}})
e.default=t})),define("p2p/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"OoSbkX/2",block:'{"symbols":[],"statements":[[1,1,0,0,"\\n"],[1,0,0,0,[31,0,0,[27,[26,1,"CallHead"],[]],[[31,0,0,[27,[26,0,"CallHead"],[]],null,null]],null]]],"hasEval":false,"upvars":["-outlet","component"]}',meta:{moduleName:"p2p/templates/application.hbs"}})
e.default=t})),define("p2p/templates/index",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"H3LWjXOr",block:'{"symbols":[],"statements":[[7,"video-chat",[],[[],[]],null]],"hasEval":false,"upvars":[]}',meta:{moduleName:"p2p/templates/index.hbs"}})
e.default=t})),define("p2p/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})}))
define("p2p/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("p2p/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("p2p/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("p2p/utils/signaling/ably",["exports","p2p/utils/signaling/aggregate-functions"],(function(e,t){var n
function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return
var n=[],r=!0,o=!1,i=void 0
try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return
if("string"==typeof e)return o(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(n)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function u(e){return function(){var t=this,n=arguments
return new Promise((function(r,o){var i=e.apply(t,n)
function u(e){a(i,r,o,u,c,"next",e)}function c(e){a(i,r,o,u,c,"throw",e)}u(void 0)}))}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s,f,p,d,b,y,m=(s=(n=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),l(this,"ablyRealtime",null),l(this,"loaded",!1),l(this,"loadingPromise",!0),l(this,"channel",null),this.connectionId=t.options.connectionId,this.channelName=t.options.channelName,this.key=t.key,this._isInit=this.init().catch((function(e){console.log(e)}))}var n,o,a,s,f,p,d
return n=e,(o=[{key:"init",value:(d=u(regeneratorRuntime.mark((function e(){var t
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,emberAutoImportDynamic("ably")
case 2:return t=e.sent,this.ablyRealtime=t.Realtime.Promise({key:this.key,clientId:this.connectionId}),this.addConnectionListeners(this.ablyRealtime),e.next=7,this.isConnected()
case 7:this.channel=this.ablyRealtime.channels.get(this.channelName),this.addListeners(this.channelName),this.channel.presence.enter()
case 10:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"addConnectionListeners",value:function(e){var t=this,n=e.connection
n.on("connected",(function(){t.loaded=!0,Ember.sendEvent(t,"signal.init")})),n.on("failed",(function(e){Ember.sendEvent(t,"exception",[e])}))}},{key:"addListeners",value:function(e){var t=this
this.channel.presence.subscribe((function(e){if(e.clientId===t.connectionId)return!0;["enter","present"].includes(e.action)&&Ember.sendEvent(t,"joined.removed.user",[{uuid:e.clientId}]),"leave"===e.action&&Ember.sendEvent(t,"left.removed.user",[{uuid:e.clientId}])})),this.channel.subscribe((function(e){if("message"===e.name){var n=JSON.parse(e.data)
Ember.sendEvent(t,"signal:".concat(n.type),[e.data])}}))}},{key:"isConnected",value:(p=u(regeneratorRuntime.mark((function e(){var t=this
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.loaded){e.next=2
break}return e.abrupt("return",!0)
case 2:if(!this.loadingPromise){e.next=4
break}return e.abrupt("return",this.loadingPromise)
case 4:return this.loadingPromise=new Promise((function(e){var n=t
Ember.addListener(n,"signal.init",n,(function(){Ember.removeListener(n,"signal.init",n,this),e(!0)}))})),e.abrupt("return",this.loadingPromise)
case 6:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"sendData",value:function(e,n){var r=this,o="object"===i(n)?JSON.stringify(n):n,a=(0,t.getPackages)(o)
console.log(this.channelName)
var u=a.map((function(n){return r.channel.publish("message",(0,t.bodyGenerate)(r.connectionId,e,n)).catch((function(e){Ember.sendEvent(r,"exception",[e])}))}))
return Promise.all(u)}},{key:"on",value:function(){return t.on.call.apply(t.on,[this].concat(Array.prototype.slice.call(arguments)))}},{key:"signalListener",value:function(e,n,r){return t.signalHandler.call(this,e,n,r)}},{key:"destroy",value:(f=u(regeneratorRuntime.mark((function e(){var t=this
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.channel.unsubscribe(),e.next=3,this.ablyRealtime.connection.close()
case 3:this.channel=null,this.ablyRealtime=null,this.events&&this.events.length&&this.events.map((function(e){var t=e.currentTarget,n=e.eventName,r=e.target,o=e.callback
Ember.removeListener(t,n,r,o)})),this.eventsOnce&&Object.entries(this.eventsOnce).forEach((function(e){var n=r(e,2),o=n[0],i=n[1]
Ember.removeListener(t,o,t,i)}))
case 7:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"isInit",value:(s=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._isInit)
case 1:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})}])&&c(n.prototype,o),a&&c(n,a),e}()).prototype,f="isInit",p=[Ember._action],d=Object.getOwnPropertyDescriptor(n.prototype,"isInit"),b=n.prototype,y={},Object.keys(d).forEach((function(e){y[e]=d[e]})),y.enumerable=!!y.enumerable,y.configurable=!!y.configurable,("value"in y||y.initializer)&&(y.writable=!0),y=p.slice().reverse().reduce((function(e,t){return t(s,f,e)||e}),y),b&&void 0!==y.initializer&&(y.value=y.initializer?y.initializer.call(b):void 0,y.initializer=void 0),void 0===y.initializer&&(Object.defineProperty(s,f,y),y=null),n)
e.default=m})),define("p2p/utils/signaling/aggregate-functions",["exports"],(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.getPackages=function(e){var t="string"==typeof e?e:JSON.stringify(e)
if(encodeURIComponent(t).length>7192)return function(e){var t=Number(new Date),n=0,r=0,o=(e=encodeURIComponent(e)).length,i=Math.ceil(o/7192),a=[]
for(;r<o;){var u=r+7192,c={type:"cortege",id:t,index:n,packages:i,next:e.length-r>7192?n+1:null,content:e.slice(r,u)}
n+=1,a.push(c),r=u}return a}(e)
return[e]},e.dataParser=r,e.on=function(){if(!this)throw"Must be `call(this, ...arguments)`"
var e,n=Array.from(arguments),r=n.pop(),o=this,i=this
"object"===t(n.slice(-1)[0])&&(i=n.pop())
"string"==typeof n.slice(-1)[0]&&(e=n.pop())
n.slice(-1)[0]&&(o=n.slice(-1)[0])
this.events||(this.events=[])
this.events.push({currentTarget:o,eventName:e,target:i,callback:r}),Ember.addListener(o,e,i,r)},e.once=o,e.signalHandler=function(e,t,n){var i=this
o.call(this,"signal:"+e,(function(e){try{var o=r(e)
if(!o)return!1
if(o.data="string"==typeof o.data?o.data:JSON.stringify(o.data),n)return void t(o)
o.from&&o.from.connectionId===i.connectionId||t(o.data)}catch(a){console.error(a,event)}}))},e.bodyGenerate=function(e,t,n){return JSON.stringify({type:t,data:encodeURIComponent("string"==typeof n?n:JSON.stringify(n)),from:{connectionId:e}})}
var n={}
function r(e){var t=JSON.parse(e),r=JSON.parse(decodeURIComponent(t.data))
if(t.data=r,r.type&&"cortege"===r.type){if(n.hasOwnProperty("".concat(r.id))||(n["".concat(r.id)]=[]),n["".concat(r.id)].push(r),n["".concat(r.id)].length!==r.packages)return!1
var o=""
n[r.id].sort((function(e,t){return e.index-t.index})).forEach((function(e){o="".concat(o).concat(e.content)})),t.data=decodeURIComponent(o),delete n[r.id]}return t}function o(e,t){if(!this)throw"Must be `call(this, ...arguments)`"
if(this.eventsOnce||(this.eventsOnce={}),this.eventsOnce[e])try{Ember.removeListener(this,e,this,this.eventsOnce[e])}catch(n){console.error(n)}Ember.addListener(this,e,this,t),this.eventsOnce[e]=t}})),define("p2p/utils/webrtc-peer",["exports","simple-peer"],(function(e,t){var n,r,o,i
function a(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function l(e,t){if(null==e)return{}
var n,r,o=function(e,t){if(null==e)return{}
var n,r,o={},i=Object.keys(e)
for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n])
return o}(e,t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e)
for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var b=1,y=(r=d((n=function(){function e(t){var n=t.remote,a=t.local,u=l(t,["remote","local"]);(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),c(this,"active",r,this),c(this,"stream",o,this),c(this,"error",i,this),this.remote=n,this.local=a,this.initiator=u.initiator,this.id="webrtc-peer-"+b++,console.log("peer",this.id),this.setupPeer(u)}return f(e,null,[{key:"isSupported",value:function(){return t.default.WEBRTC_SUPPORT}}]),f(e,[{key:"setupPeer",value:function(e){var n=this
this.error=null,this.active=!1,this.stream=null
var r=u({},e,{offerConstraints:{offerToReceiveAudio:!0,offerToReceiveVideo:!0}})
console.log("SimplePeer opts:",r),this.peer=new t.default(r),this.peer.on("close",this.close),this.peer.on("error",(function(t){n.onError(e,t)})),this.peer.on("signal",this._onSignal),this.peer.on("data",this.onData),this.peer.on("connect",this.onConnect),this.peer.on("stream",this.onStream)}},{key:"setStream",value:function(e){var t=this
if(!this.peer.streams.includes(e)){try{this.peer.streams.forEach((function(e){return t.peer.removeStream(e)}))}catch(n){console.error("Exception setStream remove:",n)}e&&(console.log(e,"Expected a stream"),this.peer.addStream(e))}}},{key:"onError",value:function(e,t){var n=this
console.log("".concat(this.id," | error"),t),this.error=t,this.emit("error",t),this.close(),setTimeout((function(){n.setupPeer(e)}),1e3)}},{key:"_onSignal",value:function(e){this.onSignal&&this.onSignal(this.encode(e))}},{key:"onData",value:function(e){console.log("".concat(this.id," | data"),e),this.emit("data",e),this.emit("message",{data:e})}},{key:"onConnect",value:function(e){this._onConnect&&this._onConnect(),console.log("%c ".concat(this.id," | connect "),"color: #bada55; padding: 2px 10px;"),this.active=!0,this.emit("connect",e)}},{key:"onStream",value:function(e){this._onStream&&this._onStream(e),console.log("new stream",e),this.stream=e}},{key:"emit",value:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o]
Ember.run.next(this,(function(){Ember.sendEvent(t,e,r)}))}},{key:"signal",value:function(e){this.peer&&!this.peer.destroyed?this.peer.signal(this.decode(e)):console.log("Tried to set signal on destroyed peer",this.peer,e)}},{key:"sendMessage",value:function(e){this.peer.send(e)}},{key:"close",value:function(){var e
this.emit("close"),this.active=!1,null===(e=this.peer)||void 0===e||e.destroy()}},{key:"encode",value:function(e){return(null==e?void 0:e.sdp)?u({},e,{sdp:encodeURIComponent(e.sdp)}):e}},{key:"decode",value:function(e){return(null==e?void 0:e.sdp)?u({},e,{sdp:decodeURIComponent(e.sdp)}):e}}]),e}()).prototype,"active",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),o=d(n.prototype,"stream",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),i=d(n.prototype,"error",[Ember._tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d(n.prototype,"onError",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"onError"),n.prototype),d(n.prototype,"_onSignal",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"_onSignal"),n.prototype),d(n.prototype,"onData",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"onData"),n.prototype),d(n.prototype,"onConnect",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"onConnect"),n.prototype),d(n.prototype,"onStream",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"onStream"),n.prototype),d(n.prototype,"emit",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"emit"),n.prototype),d(n.prototype,"signal",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"signal"),n.prototype),d(n.prototype,"sendMessage",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"sendMessage"),n.prototype),d(n.prototype,"close",[Ember._action],Object.getOwnPropertyDescriptor(n.prototype,"close"),n.prototype),n)
e.default=y})),define("p2p/config/environment",[],(function(){try{var e="p2p/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("p2p/app").default.create({name:"p2p",version:"0.0.0+93193215"})
