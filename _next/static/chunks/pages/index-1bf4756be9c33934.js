(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4369)}])},2702:function(e){"use strict";e.exports={reactStrictMode:!0,images:{loader:"akamai",path:""},basePath:"/code_blog",assetPrefix:"/code_blog"}},9749:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,c=void 0!==n&&n,l=e.priority,s=void 0!==l&&l,h=e.loading,p=e.lazyRoot,j=void 0===p?null:p,k=e.lazyBoundary,I=void 0===k?"200px":k,E=e.className,N=e.quality,P=e.width,R=e.height,L=e.style,q=e.objectFit,C=e.objectPosition,M=e.onLoadingComplete,D=e.loader,H=void 0===D?z:D,W=e.placeholder,T=void 0===W?"empty":W,U=e.blurDataURL,B=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),F=u.useContext(g.ImageConfigContext),G=u.useMemo((function(){var e=v||F||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:r})}),[F]),V=B,Q=r?"responsive":"intrinsic";"layout"in V&&(V.layout&&(Q=V.layout),delete V.layout);var J="";if(function(e){return"object"===typeof e&&(_(e)||function(e){return void 0!==e.src}(e))}(t)){var X=_(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(U=U||X.blurDataURL,J=X.src,(!Q||"fill"!==Q)&&(R=R||X.height,P=P||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}t="string"===typeof t?t:J;var $=A(P),K=A(R),Y=A(N),Z=!s&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=a(m.useIntersection({rootRef:j,rootMargin:I,disabled:!Z}),2),re=te[0],ne=te[1],ie=!Z||ne,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},oe={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,le={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:q,objectPosition:C};0;0;var se=Object.assign({},L,"raw"===Q?{aspectRatio:"".concat($," / ").concat(K)}:le),ue="blur"===T?{filter:"blur(20px)",backgroundSize:q||"cover",backgroundImage:'url("'.concat(U,'")'),backgroundPosition:C||"0% 0%"}:{};if("fill"===Q)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof $&&"undefined"!==typeof K){var de=K/$,fe=isNaN(de)?"100%":"".concat(100*de,"%");"responsive"===Q?(ae.display="block",ae.position="relative",ce=!0,oe.paddingTop=fe):"intrinsic"===Q?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ce=!0,oe.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat($,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===Q&&(ae.display="inline-block",ae.position="relative",ae.width=$,ae.height=K)}else 0;var me={src:x,srcSet:void 0,sizes:void 0};ie&&(me=S({config:G,src:t,unoptimized:c,layout:Q,width:$,quality:Y,sizes:r,loader:H}));var ge=t;0;var he,pe="imagesrcset",ye="imagesizes";pe="imageSrcSet",ye="imageSizes";var be=(i(he={},pe,me.srcSet),i(he,ye,me.sizes),he),ve=u.default.useLayoutEffect,we=u.useRef(M),xe=u.useRef(null);u.useEffect((function(){we.current=M}),[M]),ve((function(){re(xe.current)}),[re]),u.useEffect((function(){!function(e,t,r,n,i){var a=function(){var r=e.current;r&&(r.src!==x&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(w.add(t),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),i.current)){var a=r.naturalWidth,o=r.naturalHeight;i.current({naturalWidth:a,naturalHeight:o})}})))};e.current&&(e.current.complete?a():e.current.onload=a)}(xe,ge,0,T,we)}),[ge,Q,T,ie]);var je=y({isLazy:Z,imgAttributes:me,heightInt:K,widthInt:$,qualityInt:Y,layout:Q,className:E,imgStyle:se,blurStyle:ue,imgRef:xe,loading:h,config:G,unoptimized:c,placeholder:T,loader:H,srcString:ge},V);return u.default.createElement(u.default.Fragment,null,"raw"===Q?u.default.createElement(O,Object.assign({},je)):u.default.createElement("span",{style:ae},ce?u.default.createElement("span",{style:oe},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(O,Object.assign({},je))),s?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+me.src+me.srcSet+me.sizes,rel:"preload",as:"image",href:me.srcSet?void 0:me.src},be))):null)};var l,s,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),d=(l=r(3121))&&l.__esModule?l:{default:l},f=r(139),m=r(9246),g=r(8730),h=(r(670),r(2700));function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){p(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}function b(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,x=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,a=new URL("".concat(t.path).concat(k(r))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(k(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(k(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function _(e){return void 0!==e.default}function S(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.layout,a=e.width,c=e.quality,l=e.sizes,s=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var u=function(e,t,r,n){var i=e.deviceSizes,a=e.allSizes;if(n&&("fill"===r||"responsive"===r||"raw"===r)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(n);c)s.push(parseInt(c[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,o(s));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,l),d=u.widths,f=u.kind,m=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,n){return"".concat(s({config:t,src:r,quality:c,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:r,quality:c,width:d[m]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=j.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(r))}var O=function(e){var t=e.imgAttributes,r=e.heightInt,n=e.widthInt,i=e.qualityInt,a=e.layout,o=e.className,c=e.imgStyle,l=e.blurStyle,s=e.isLazy,d=e.imgRef,f=e.placeholder,m=e.loading,g=e.sizes,h=e.srcString,p=e.config,v=e.unoptimized,w=e.loader,x=b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","imgRef","placeholder","loading","sizes","srcString","config","unoptimized","loader"]);return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},x,t,"raw"!==a||g?{}:{height:r,width:n},{decoding:"async","data-nimg":a,className:o,ref:d,style:y({},c,l)})),(s||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},x,S({config:p,src:h,unoptimized:v,layout:a,width:n,quality:i,sizes:g,loader:w}),"raw"!==a||g?{}:{height:r,width:n},{decoding:"async","data-nimg":a,style:c,className:o,loading:m||"lazy"}))))};function k(e){return"/"===e[0]?e.slice(1):e}},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,u=a.useRef(),d=i(a.useState(!1),2),f=d[0],m=d[1],g=i(a.useState(t?t.current:null),2),h=g[0],p=g[1],y=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),s.push(r));if(t)return t;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:a,elements:i}),t}(r),i=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),l.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:h,rootMargin:r}))}),[n,h,r,f]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return m(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){t&&p(t.current)}),[t]),[y,f]};var a=r(7294),o=r(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[]},4369:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893),i=r(9008),a=r(5675),o=r(7160),c=r.n(o),l=(r(2702),r(1163));function s(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:(0,l.useRouter)().basePath+"/favicon.ico"})]}),(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,n.jsx)("code",{className:c().code,children:"pages/index.js"})]}),(0,n.jsxs)("div",{className:c().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,n.jsx)("h2",{children:"Documentation \u2192"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,n.jsx)("h2",{children:"Learn \u2192"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:c().card,children:[(0,n.jsx)("h2",{children:"Examples \u2192"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:c().card,children:[(0,n.jsx)("h2",{children:"Deploy \u2192"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsx)("footer",{className:c().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:c().logo,children:(0,n.jsx)(a.default,{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);