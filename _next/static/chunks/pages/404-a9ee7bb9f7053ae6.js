(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{8445:function(e,t,n){"use strict";n(7294);var r=n(9008),o=n(5504),a=n(5893);t.Z=function(e){if(""===o.Z.baseUrl&&(o.Z.baseUrl=window.location.origin),""===o.Z.baseUrl)return console.error("Please set a baseUrl in your site metadata!"),null;var t=e.title||o.Z.title,n=e.description||o.Z.description,i=new URL(e.path||"",o.Z.baseUrl).href,c=e.image||o.Z.image;return(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("link",{rel:"canonical",href:i}),e.preconnectGitApi&&(0,a.jsx)("link",{rel:"preconnect",href:"https://api.github.com"}),(0,a.jsx)("meta",{name:"description",content:n}),c&&(0,a.jsx)("meta",{name:"image",content:c}),(0,a.jsx)("meta",{property:"og:url",content:i}),(0,a.jsx)("meta",{property:"og:type",content:"article"}),(0,a.jsx)("meta",{property:"og:title",content:t}),(0,a.jsx)("meta",{property:"og:description",content:n}),c&&(0,a.jsx)("meta",{property:"og:image",content:c}),e.imageOwnerProfile&&(0,a.jsx)("meta",{property:"og:image:owner",content:e.imageOwnerProfile}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:creator",content:o.Z.userName}),(0,a.jsx)("meta",{name:"twitter:title",content:t}),(0,a.jsx)("meta",{name:"twitter:description",content:n}),c&&(0,a.jsx)("meta",{name:"twitter:image",content:c}),e.imageOwnerProfile&&(0,a.jsx)("meta",{property:"twitter:image:owner",content:e.imageOwnerProfile})]})}},7285:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(7285);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},6505:function(e,t,n){"use strict";var r=n(930);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),c=(a=n(148))&&a.__esModule?a:{default:a},s=n(7285),u=n(523),p=n(9546);n(7206);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var p=f[s];if(o.props.hasOwnProperty(p))if("charSet"===p)n.has(p)?a=!1:n.add(p);else{var l=o.props[p],d=r[p]||new Set;"name"===p&&i||!d.has(l)?(d.add(l),r[p]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,n=i.useContext(s.AmpStateContext),r=i.useContext(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:p.isInAmpMode(n)},t)};t.default=m},148:function(e,t,n){"use strict";var r=n(7980),o=n(3227),a=n(8361),i=(n(2191),n(5971)),c=n(2715),s=n(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var l=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=l},5987:function(e,t,n){"use strict";n.r(t);var r=n(1664),o=n.n(r),a=n(8445),i=n(7294),c=n(2125),s=n(5893),u=c.ZP.div.withConfig({displayName:"sc-404__Wrapper",componentId:"sc-1gyjweh-0"})(["padding-top:4rem;h1{font-size:5rem;font-weight:700;@media all and (min-width:625px){font-size:10rem;}}@media all and (max-width:625px){p{display:none;}}width:75%;margin:0 auto;text-align:center;h3{font-size:2rem;font-weight:400;}a:link{&:hover &:active{text-decoration:underline;}}"]);t.default=function(){return(0,s.jsx)(i.Fragment,{children:(0,s.jsxs)(u,{children:[(0,s.jsx)(a.Z,{title:"404: Not found"}),(0,s.jsx)("h1",{children:"Oops!"}),(0,s.jsx)("h3",{children:"This is clearly not the page you're looking for."}),(0,s.jsx)("p",{children:"Looks like the page you're looking for does not exist, or the link that got you here is outdated or broken. You may find what you're looking for in one of the sections available in the menu at the top right of this page."}),(0,s.jsx)(o(),{href:"/",children:(0,s.jsx)("a",{children:"Back Home"})})]})})}},9014:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(5987)}])},9008:function(e,t,n){e.exports=n(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=9014,e(e.s=t);var t}));var t=e.O();_N_E=t}]);