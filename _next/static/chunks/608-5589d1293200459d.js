(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[608],{1608:function(e,t,r){"use strict";var n=r(2777),o=r(2262),a=r(748),i=r(5959),c=r(3553),s=r(7247),u=r(9499),l=r(7294),p=r(5987),f=r(5893);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.Z)(this,r)}}var h=function(e){(0,i.Z)(r,e);var t=d(r);function r(){var e;(0,n.Z)(this,r);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),(0,u.Z)((0,a.Z)(e),"state",{hasError:!1}),e}return(0,o.Z)(r,[{key:"render",value:function(){return this.state.hasError?(0,f.jsx)(p.default,{}):(0,f.jsx)(f.Fragment,{children:this.props.children})}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,message:e.message}}}]),r}(l.Component);t.Z=h},8445:function(e,t,r){"use strict";r(7294);var n=r(9008),o=r(5504),a=r(5893);t.Z=function(e){if(""===o.Z.baseUrl&&(o.Z.baseUrl=window.location.origin),""===o.Z.baseUrl)return console.error("Please set a baseUrl in your site metadata!"),null;var t=e.title||o.Z.title,r=e.description||o.Z.description,i=new URL(e.path||"",o.Z.baseUrl).href,c=e.image||o.Z.image;return(0,a.jsxs)(n.default,{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("link",{rel:"canonical",href:i}),e.preconnectGitApi&&(0,a.jsx)("link",{rel:"preconnect",href:"https://api.github.com"}),(0,a.jsx)("meta",{name:"description",content:r}),c&&(0,a.jsx)("meta",{name:"image",content:c}),(0,a.jsx)("meta",{property:"og:url",content:i}),(0,a.jsx)("meta",{property:"og:type",content:"article"}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{property:"og:description",content:r}),c&&(0,a.jsx)("meta",{property:"og:image",content:c}),e.imageOwnerProfile&&(0,a.jsx)("meta",{property:"og:image:owner",content:e.imageOwnerProfile}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:creator",content:o.Z.userName}),(0,a.jsx)("meta",{name:"twitter:title",content:t}),(0,a.jsx)("meta",{name:"twitter:description",content:r}),c&&(0,a.jsx)("meta",{name:"twitter:image",content:c}),e.imageOwnerProfile&&(0,a.jsx)("meta",{property:"twitter:image:owner",content:e.imageOwnerProfile})]})}},7285:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},9546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(7285);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},6505:function(e,t,r){"use strict";var n=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=p,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),c=(a=r(148))&&a.__esModule?a:{default:a},s=r(7285),u=r(523),l=r(9546);r(7206);function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var p=o.props[l],f=n[l]||new Set;"name"===l&&i||!f.has(p)?(f.add(p),n[l]=f):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,r=i.useContext(s.AmpStateContext),n=i.useContext(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:h,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=m},148:function(e,t,r){"use strict";var n=r(7980),o=r(3227),a=r(8361),i=(r(2191),r(5971)),c=r(2715),s=r(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var p=function(e){i(r,e);var t=u(r);function r(e){var a;return o(this,r),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=p},5987:function(e,t,r){"use strict";r.r(t);var n=r(1664),o=r.n(n),a=r(8445),i=r(7294),c=r(2125),s=r(5893),u=c.ZP.div.withConfig({displayName:"sc-404__Wrapper",componentId:"sc-1gyjweh-0"})(["padding-top:4rem;h1{font-size:5rem;font-weight:700;@media all and (min-width:625px){font-size:10rem;}}@media all and (max-width:625px){p{display:none;}}width:75%;margin:0 auto;text-align:center;h3{font-size:2rem;font-weight:400;}a:link{&:hover &:active{text-decoration:underline;}}"]);t.default=function(){return(0,s.jsx)(i.Fragment,{children:(0,s.jsxs)(u,{children:[(0,s.jsx)(a.Z,{title:"404: Not found"}),(0,s.jsx)("h1",{children:"Oops!"}),(0,s.jsx)("h3",{children:"This is clearly not the page you're looking for."}),(0,s.jsx)("p",{children:"Looks like the page you're looking for does not exist, or the link that got you here is outdated or broken. You may find what you're looking for in one of the sections available in the menu at the top right of this page."}),(0,s.jsx)(o(),{href:"/",children:(0,s.jsx)("a",{children:"Back Home"})})]})})}},9008:function(e,t,r){e.exports=r(6505)}}]);