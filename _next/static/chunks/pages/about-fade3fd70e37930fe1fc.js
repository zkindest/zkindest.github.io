_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery,i=void 0!==o&&o;return n||a&&i}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"48fX":function(t,e,n){var r=n("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"5fIB":function(t,e,n){var r=n("7eYB");t.exports=function(t){if(Array.isArray(t))return r(t)}},"7eYB":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"8Kt/":function(t,e,n){"use strict";n("oI91");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var r,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function d(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=a.props[s],p=r[s]||new Set;p.has(l)?o=!1:(p.add(l),r[s]=p)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}function m(t){var e=t.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},e)}m.rewind=function(){};var h=m;e.default=h},"C+bE":function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=a},KckH:function(t,e,n){var r=n("7eYB");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},T0f4:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},T6oN:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),c=n("obyI"),u=a.a.createElement;e.a=function(t){if(""===c.a.baseUrl&&(c.a.baseUrl=window.location.origin),""===c.a.baseUrl)return console.error("Please set a baseUrl in your site metadata!"),null;var e=t.title||c.a.title,n=t.description||c.a.description,r=new URL(t.path||"",c.a.baseUrl).href,a=t.image||c.a.image;return u(i.a,null,u("title",null,e),u("link",{rel:"canonical",href:r}),t.preconnectGitApi&&u("link",{rel:"preconnect",href:"https://api.github.com"}),u("meta",{name:"description",content:n}),a&&u("meta",{name:"image",content:a}),u("meta",{property:"og:url",content:r}),u("meta",{property:"og:type",content:"article"}),u("meta",{property:"og:title",content:e}),u("meta",{property:"og:description",content:n}),a&&u("meta",{property:"og:image",content:a}),u("meta",{name:"twitter:card",content:"summary_large_image"}),u("meta",{name:"twitter:creator",content:c.a.userName}),u("meta",{name:"twitter:title",content:e}),u("meta",{name:"twitter:description",content:n}),a&&u("meta",{name:"twitter:image",content:a}))}},TaPz:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("Tgqd"),i=n("Lnxd");function c(t){return Object(i.a)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(t)}var u=n("+jxT"),s=n("vOnD"),l=n("T6oN"),p=n("obyI"),f=a.a.createElement;e.default=Object(s.a)((function(t){var e=t.className,n=p.a.twitterId,r=p.a.userName,i=p.a.redditUserName,s=p.a.twitterUserName,d=p.a.description,m=p.a.mail;return f(a.a.Fragment,null,f(l.a,{title:"About me",description:d,image:"http://zkindest.github.io/static/images/me.jpeg"}),f("section",{className:"".concat(e," about")},f("article",null,f("img",{src:"http://zkindest.github.io/static/images/me.jpeg",alt:"Photo of Afroz",className:"about__img"}),f("div",{className:"about__info"},f("p",null,"Hi,",f("span",{role:"img","aria-label":"waving hand emoji"},"\ud83d\udc4b"),"I'm Afroz, Fullstack Developer based in Hyderabad,India."),f("p",null,"I have two years of experience in software development, and a passion for Front-End. My work involves a lot of HTML, CSS, and JavaScript/TypeScript (with React), but I also have plenty experience with back-end development and databases."),f("p",{className:"about__info--links"},f("a",{href:"https://gitstalk.netlify.app/zkindest",target:"_blank"},f("i",null,"stalk me")," "),"|\xa0",f("i",null,"reach me:"),"\xa0",f("a",{href:"mailto:".concat(m)},f(c,{style:{marginBottom:"-3px"}}),"\xa0Email"),n||s?f("a",{href:n?"https://twitter.com/messages/compose?recipient_id=".concat(n):"https://twitter.com/".concat(s)},f(o.b,{style:{marginBottom:"-3px"}}),"\xa0Twitter"):null,f("a",{href:"https://www.reddit.com/user/".concat(i||r)},f(u.a,null),"\xa0Reddit"))))))})).withConfig({displayName:"about",componentId:"s9xh5v-0"})(["width:100%;position:relative;transition:var(--main-transition);.about{&__img{clip-path:circle(50% at 50% 50%);shape-outside:circle(50% at 50% 50%);float:left;width:10rem;height:10rem;margin:0rem 1.2rem;@media all and (max-width:530px){float:unset;display:grid;margin:0 auto;}}&__info{text-align:left;padding-top:.2rem;@media all and (max-width:530px){display:block;}&--links{a + a{margin-left:0.5em;}}}}"])},Xuae:function(t,e,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),p=function(t){i(n,t);var e=s(n);function n(t){var o;return a(this,n),(o=e.call(this,t))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);e.default=p},hIud:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("TaPz")}])},i2R6:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=a},mPvQ:function(t,e,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");t.exports=function(t){return r(t)||a(t)||o(t)||i()}},oI91:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,n){var r=n("C+bE"),a=n("qXWd");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?a(t):e}}},[["hIud",0,1,8,3,5]]]);