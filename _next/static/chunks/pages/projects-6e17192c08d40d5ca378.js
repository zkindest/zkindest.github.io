_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eYB":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var s=d[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?a=!1:(f.add(l),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},"C+bE":function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},KckH:function(e,t,n){var r=n("7eYB");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},SpL8:function(e,t,n){"use strict";n.r(t);var r=n("T6oN"),o=n("q1tI"),a=n.n(o).a.createElement,i=function(e){var t=e.label,n=e.demo,r=e.code;return a("li",null,n?a("a",{href:n,referrerPolicy:"no-referrer",target:"_blank"},t):t,"\u2014"," ",r?a("a",{href:r,referrerPolicy:"no-referrer",target:"_blank"},"code"):null)};t.default=function(){return a("div",null,a(r.a,{title:"Afroz's Projects",description:"I do side projects whenever I get free time, It helps me to improve/showcase my skills.",image:"https://i.imgur.com/L8muD8v.jpg",imageOwnerProfile:"https://unsplash.com/@octadan"}),a("h2",null,"Projects"),a("ul",null,a("li",null,a("details",null,a("summary",null,"Frontend Mentor Challanges"),a("ol",null,a(i,{code:"https://github.com/zkindest/fe-c7-bookmark-landing-page",demo:"https://zkindest.github.io/fe-c7-bookmark-landing-page/",label:"Bookmark Landing Page"}),a(i,{code:"https://github.com/zkindest/fe-c6-search-country",demo:"https://zkindest.github.io/fe-c6-search-country/",label:"Search Country Details"}),a(i,{code:"https://github.com/zkindest/fe-c1-product-page",demo:"https://zkindest.github.io/fe-c1-product-page/",label:"Commerce Product Page"}),a(i,{code:"https://github.com/zkindest/fe-c2-launchdown-timer-react",demo:"https://zkindest.github.io/fe-c2-launchdown-timer-react/",label:"Launchdown Timer"}),a(i,{code:"https://github.com/zkindest/fe-c5-search-ip-domain",demo:"https://zkindest.github.io/fe-c5-search-ip-domain/",label:"IP address tracker UI"}),a(i,{code:"https://github.com/zkindest/fe-c4-job-listings-react",demo:"https://zkindest.github.io/fe-c4-job-listings-react",label:"Job Listing"}),a(i,{code:"https://github.com/zkindest/fe-c3-easybank-site",demo:"https://zkindest.github.io/fe-c3-easybank-site/",label:"Easybank landing page"})))),a(i,{code:"https://github.com/zkindest/react-game-of-life",demo:"https://zkindest.github.io/react-game-of-life/",label:"Game of Life"}),a("li",null,"Stack underflow \u2014"," ",a("a",{href:"https://github.com/zkindest/stack-underflow-mern-gql",target:"_blank"},"code")),a("li",null,a("a",{href:"https://zkindest.github.io/calculator/",target:"_blank"},"Javascript Calculator")," ","\u2014"," ",a("a",{href:"https://github.com/zkindest/calculator",target:"_blank"},"code")),a("li",null,a("a",{href:"https://zkindest.github.io/pomodoro/",target:"_blank"},"25+5 Clock")," ","\u2014"," ",a("a",{href:"https://github.com/zkindest/pomodoro",target:"_blank"},"code")),a("li",null,a("a",{href:"http://zkindest.github.io/drum-machine",target:"_blank"},"Ally Drum Machine")," ","\u2014 ",a("a",{href:"https://github.com/zkindest/drum-machine"},"code"))))}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},T6oN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),c=n("obyI"),u=o.a.createElement;t.a=function(e){if(""===c.a.baseUrl&&(c.a.baseUrl=window.location.origin),""===c.a.baseUrl)return console.error("Please set a baseUrl in your site metadata!"),null;var t=e.title||c.a.title,n=e.description||c.a.description,r=new URL(e.path||"",c.a.baseUrl).href,o=e.image||c.a.image;return u(i.a,null,u("title",null,t),u("link",{rel:"canonical",href:r}),e.preconnectGitApi&&u("link",{rel:"preconnect",href:"https://api.github.com"}),u("meta",{name:"description",content:n}),o&&u("meta",{name:"image",content:o}),u("meta",{property:"og:url",content:r}),u("meta",{property:"og:type",content:"article"}),u("meta",{property:"og:title",content:t}),u("meta",{property:"og:description",content:n}),o&&u("meta",{property:"og:image",content:o}),e.imageOwnerProfile&&u("meta",{property:"og:image:owner",content:e.imageOwnerProfile}),u("meta",{name:"twitter:card",content:"summary_large_image"}),u("meta",{name:"twitter:creator",content:c.a.userName}),u("meta",{name:"twitter:title",content:t}),u("meta",{name:"twitter:description",content:n}),o&&u("meta",{name:"twitter:image",content:o}),e.imageOwnerProfile&&u("meta",{property:"twitter:image:owner",content:e.imageOwnerProfile}))}},Tk32:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("SpL8")}])},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),a=n("i2R6"),i=(n("qXWd"),n("48fX")),c=n("tCBg"),u=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),a=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},obyI:function(e,t,n){"use strict";t.a={title:"Afz",shortName:"Afroz",subtitle:"Web Developer",description:"I'm Afroz, Fullstack Developer based in Hyderabad,India. I have two years of experience in software development, and a passion for Front-End. My work involves a lot of HTML, CSS, and JavaScript/TypeScript (with React), but I also have plenty experience with back-end development and databases.\n",author:"Afroz Mohammad",userName:"afroz_0000",gitUserName:"zkindest",gitRepoName:"zkindest.github.io",mail:"zkindest5@gmail.com",redditUserName:"",twitterUserName:"afroz_0000",twitterId:"",baseUrl:"http://zkindest.github.io",image:"https://i.imgur.com/8PPjpAD.png",codeUrl:"https://github.com/zkindest/zkindest.github.io"}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}}},[["Tk32",0,1]]]);