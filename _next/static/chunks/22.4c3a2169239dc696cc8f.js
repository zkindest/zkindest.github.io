(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"6S5p":function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),c=n.n(o),i=n("7ljp"),p=(c.a.createElement,{title:"First Post",date:"2021-08-24",time_to_read:"3min",author:"Mohammad Afroz",categories:["Web"],description:"about setting up this blog..."}),b={frontMatter:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This website has been developed using below Technolgies:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"strong"},{href:"https://nextjs.org/docs"}),"Next.js"))," (which is based on React,provides dynamic page routes, SSG, SSR, Font/Image/Script Optimizations and much more)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"React")," as UI rendering Library")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Typescript"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Styled Components")," (CSS-in-JS library)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"gray-matter")," to extract frontMatter and content from mdx files and turn it into a big long string which then parsed by mdx loader."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"mdx-data-loader.js")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const matter = require("gray-matter");\nconst stringifyObject = require("stringify-object");\n\nmodule.exports = async function (src) {\n  const callback = this.async();\n  const { content, data } = matter(src);\n\n  const code = `export const frontMatter = ${stringifyObject(data)}\n  \n${content}`;\n\n  return callback(null, code);\n};\n'))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"@mdx-js/loader")," is Webpack loader for MDX."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"next.config.js")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'module.exports = {\n  // other config\n\n  webpack: (config, { webpack, defaultLoaders }) => {\n    config.resolve.alias["@"] = path.resolve(__dirname, ".");\n    config.module.rules.push({\n      test: /\\.mdx?$/,\n      use: [\n        defaultLoaders.babel,\n        "@mdx-js/loader",\n        path.join(__dirname, "./lib/mdx-data-loader"),\n      ],\n    });\n    return config;\n  },\n  // other config\n};\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Now I can render MDX ",Object(i.b)("inlineCode",{parentName:"p"},"article/[...id].js")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"//  @mdx-js/loader,gray-matter let's me do this\nexport default App =({resourceId}) => {\n\n  const MDX = dynamic(() => import(`../../posts/${resourceId}.mdx`)\n\n  return (<MDX />)\n}\n\n"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"babel-plugin-import-glob-array")," babel plugin to enable importing modules using a glob pattern.It helped me to generate list of articles and their frontMatter details which then used in ",Object(i.b)("inlineCode",{parentName:"p"},"getStaticProps")," function for ",Object(i.b)("inlineCode",{parentName:"p"},"ArticleList")," component."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"mdx-util.js")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'// above package combined with @mdx-js/loader,gray-matter let\'s me do this\nimport {\n  frontMatter as postFms,\n  _importMeta as postMetadatas,\n} from "../posts/*.mdx";\n'))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"next-offline")," for offline caching capabilities.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"prism-react-renderer")," for code blocks.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Followed this article on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.joshwcomeau.com/react/dark-mode/"}),"How to setup DarkMode for Gatsby")," for dark mode setup."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"gatsby-ssr.js")," -> ",Object(i.b)("em",{parentName:"p"},"_","document.js"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"_document.tsx")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'export default class MyDocument extends Document {\n  static async getInitialProps(ctx: DocumentContext) {\n    const initialProps = await Document.getInitialProps(ctx);\n    return { ...initialProps };\n  }\n\n  render() {\n    return (\n      <Html lang="en">\n        <Head>/* ...metadata */</Head>\n        <body>\n          <MagicScriptTag />\n          <Main />\n          <NextScript />\n        </body>\n      </Html>\n    );\n  }\n}\n')))))))}l.isMDXComponent=!0},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n("q1tI"),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(n),u=r,d=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return n?a.a.createElement(d,i(i({ref:t},b),{},{components:n})):a.a.createElement(d,i({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"===typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},Ff2n:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}}]);