"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,i=new RegExp("^"+l.source),s=new RegExp(l.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):l(e);return e!==l(e)&&(e=((e,a,r)=>{let l=!1,i=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];l&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),l=!1,s=i,i=!0,o++):i&&s&&n.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=i,i=!1,l=!0):(l=a(c)===c&&r(c)!==c,s=i,i=r(c)===c&&a(c)!==c)}return e})(e,l,c)),e=e.replace(i,""),e=r.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,l):l(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,n)=>t(n))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,n){n.d(t,{L:function(){return g},M:function(){return x},P:function(){return v},S:function(){return q},_:function(){return s},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return o}});var a=n(7294),r=(n(3204),n(5697)),l=n.n(r);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t.indexOf(n=l[a])>=0||(r[n]=e[n]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n){const a={};let r="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}function d(e,t,n,a,r){return void 0===r&&(r={}),i({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:i({},r,{opacity:t?1:0})})}function u(e,t,n,a,r,l,s,o){const c={};l&&(c.backgroundColor=l,"fixed"===n?(c.width=a,c.height=r,c.backgroundColor=l,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const m=["children"],p=function(e){let{layout:t,width:n,height:r}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=s(e,m);return a.createElement(a.Fragment,null,a.createElement(p,i({},n)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:n,loading:r,alt:l="",shouldLoad:o}=e,c=s(e,f);return a.createElement("img",i({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?n:void 0,"data-srcset":o?void 0:n,alt:l}))},E=function(e){let{fallback:t,sources:n=[],shouldLoad:r=!0}=e,l=s(e,h);const o=l.sizes||(null==t?void 0:t.sizes),c=a.createElement(y,i({},l,t,{sizes:o,shouldLoad:r}));return n.length?a.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:l}=e;return a.createElement("source",{key:t+"-"+l+"-"+n,type:l,media:t,srcSet:r?n:void 0,"data-srcset":r?void 0:n,sizes:o})})),c):c};var b;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,n=s(e,w);return t?a.createElement(E,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",i({},n))};v.displayName="Placeholder",v.propTypes={fallback:r.string,sources:null==(b=E.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const x=function(e){return a.createElement(a.Fragment,null,a.createElement(E,i({},e)),a.createElement("noscript",null,a.createElement(E,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=E.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],S=e=>e.replace(/\n/g,""),I=function(e,t,n){for(var a=arguments.length,r=new Array(a>3?a-3:0),i=3;i<a;i++)r[i-3]=arguments[i];return e.alt||""===e.alt?l().string.apply(l(),[e,t,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:l().object.isRequired,alt:I},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],A=new Set;let F,N;const _=function(e){let{as:t="div",image:r,style:l,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=s(e,T);const{width:y,height:E,layout:b}=r,w=c(y,E,b),{style:v,className:x}=w,C=s(w,j),k=(0,a.useRef)(),S=(0,a.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(u=m);const I=function(e,t,n){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,y,E);return(0,a.useEffect)((()=>{F||(F=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return N=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(S);if(N&&A.has(S))return;let t,a;return F.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;k.current&&(k.current.innerHTML=n(i({isLoading:!0,isLoaded:A.has(S),image:r},h)),A.has(S)||(t=requestAnimationFrame((()=>{k.current&&(a=s(k.current,S,A,l,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[r]),(0,a.useLayoutEffect)((()=>{A.has(S)&&N&&(k.current.innerHTML=N(i({isLoading:A.has(S),isLoaded:A.has(S),image:r},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,a.createElement)(t,i({},C,{style:i({},v,l,{backgroundColor:d}),className:x+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},O=(0,a.memo)((function(e){return e.image?(0,a.createElement)(_,e):null}));O.propTypes=L,O.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function W(e){return function(t){let{src:n,__imageData:r,__error:l}=t,o=s(t,R);return l&&console.warn(l),r?a.createElement(e,i({image:r},o)):(console.warn("Image not loaded",n),null)}}const z=W((function(e){let{as:t="div",className:n,class:r,style:l,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:E}=e,b=s(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(n=r),f=i({objectFit:y,objectPosition:E,backgroundColor:h},f);const{width:w,height:I,layout:L,images:T,placeholder:j,backgroundColor:A}=o,F=c(w,I,L),{style:N,className:_}=F,O=s(F,k),R={fallback:void 0,sources:[]};return T.fallback&&(R.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?S(T.fallback.srcSet):void 0})),T.sources&&(R.sources=T.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),a.createElement(t,i({},O,{style:i({},N,l,{backgroundColor:h}),className:_+(n?" "+n:"")}),a.createElement(g,{layout:L,width:w,height:I},a.createElement(v,i({},u(j,!1,L,w,I,A,y,E))),a.createElement(x,i({"data-gatsby-image-ssr":"",className:p},b,d("eager"===m,!1,R,m,f)))))})),P=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},J=new Set(["fixed","fullWidth","constrained"]),M={src:l().string.isRequired,alt:I,width:P,height:P,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!J.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=M;const q=W(O);q.displayName="StaticImage",q.propTypes=M},1619:function(e,t,n){var a=n(7294);const r={background:"#333",color:"white",padding:"20px",textAlign:"left"};t.Z=()=>a.createElement("footer",{style:r},a.createElement("p",null,"© 2024 冯君"),a.createElement("p",null,a.createElement("a",{href:"https://www.gatsbyjs.com",target:"_blank",rel:"noopener noreferrer"})))},7306:function(e,t,n){var a=n(7294),r=n(1883);const l={background:"#333",color:"white",padding:"5px 20px",height:"50px",display:"flex",alignItems:"center"},i={color:"white",textDecoration:"none",fontSize:"14px",fontWeight:"bold",padding:"0 10px"};t.Z=()=>a.createElement("header",{style:l},a.createElement("title",null,"Jun Feng's Homepage"),a.createElement("h1",{style:{textAlign:"left"}}),a.createElement("nav",null,a.createElement(r.Link,{to:"/",style:i},"主页")," |",a.createElement(r.Link,{to:"/resume",style:i},"个人简介")," |",a.createElement(r.Link,{to:"/publication",style:i},"近期工作")," |",a.createElement(r.Link,{to:"/Call_for_Paper",style:i},"Call for Paper")," |"))},9357:function(e,t,n){var a=n(7294),r=n(1883);t.Z=function(e){var t,n;let{description:l,title:i,children:s}=e;const{site:o}=(0,r.useStaticQuery)("143701507"),c=o.siteMetadata.keywords,d=l||o.siteMetadata.description,u=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?i+" | "+u:i),a.createElement("meta",{name:"google-site-verification",content:"0duOuR8u3-1yTOLj1EV2w6cWdrRuN64oW_M9C1lHiZA"}),a.createElement("meta",{name:"description",content:d}),a.createElement("meta",{name:"keywords",content:c}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:description",content:d}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=o.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:i}),a.createElement("meta",{name:"twitter:description",content:d}),s)}},6558:function(e,t,n){n.r(t);var a=n(7294),r=n(8032),l=n(7306),i=n(1619);n(9357);const s={fontFamily:"Arial, sans-serif",margin:"0",padding:"0"},o={display:"flex",justifyContent:"space-between",padding:"0 20px",maxWidth:"1600px",margin:"0 auto"},c={flex:"3",paddingRight:"20px"},d={flex:"1",paddingLeft:"20px"},u={padding:"10px 0",margin:"0",borderBottom:"1px solid #ccc"},m={background:"#f4f4f4",padding:"10px",borderRadius:"8px"},p={display:"flex",flexDirection:"column",alignItems:"flex-start"},g={marginBottom:"20px",objectFit:"cover",width:"140px",height:"180px"};t.default=()=>a.createElement("main",{style:s},a.createElement(l.Z,null),a.createElement("div",{style:o},a.createElement("div",{style:c},a.createElement("section",{style:u},a.createElement("div",{style:p},a.createElement(r.S,{src:"../images/JunFeng.jpg",alt:"导师照片",layout:"constrained",width:120,height:180,style:g,__imageData:n(6329)}),a.createElement("h1",null,"冯君 华中科技大学"),a.createElement("h3",null,"博士 副教授 博士生导师 硕士生导师"),a.createElement("p",null,"Jun Feng is an Associate Professor in the School of Cyber Science and Engineering at Huazhong University of Science and Technology. He received the PhD in the School of Computer Science and Technology at Huazhong University of Science and Technology. He has published more than 40 papers in top journals and conferences (e.g., IEEE Transactions on Dependable and Secure Computing, IEEE Transactions on Computers, IEEE Transactions on Information Forensics and Security, AAAI, IEEE Transactions on Industrial Informatics, IEEE Transactions on Big Data, IEEE Transactions on Sustainable Computing, IEEE Wireless Communications, IEEE Internet of Things Journal, Information Sciences, ACM Transactions on Internet Technology). He is particularly interested in privacy-preserving machine learning, differential privacy, artificial intelligence security and privacy, deep learning, and big data."),a.createElement("p",null,"We are hiring! We are looking for motivated students. If you are interested in doing research with me, please feel free to contact me. I'm also looking for all kinds of collaborations, please drop me an email if you are interested."),a.createElement("p",null,"冯君老师现招募对大模型安全与隐私保护、隐私保护机器学习、人工智能、深度学习、同态加密、安全多方计算等感兴趣的研究生以及本科科研训练学生，欢迎积极进取、热爱科研的学生与我联系，做可以落地实用的科研。"),a.createElement("p",null,"邮箱：junfeng@hust.edu.cn, junfeng989@gmail.com；电话/微信：18827365073"),a.createElement("p",null,"官方主页：",a.createElement("a",{href:"http://faculty.hust.edu.cn/fengjun6/zh_CN/index.htm"},"http://faculty.hust.edu.cn/fengjun6/zh_CN/index.htm")))),a.createElement("section",{style:u},a.createElement("h2",null,"研究方向"),a.createElement("ul",null,a.createElement("li",null,"大模型安全与隐私保护"),a.createElement("li",null,"人工智能安全"),a.createElement("li",null,"深度学习"),a.createElement("li",null,"张量人工智能"))),a.createElement("section",{style:u},a.createElement("h2",null,"联系方式"),a.createElement("p",null,"办公地址：国家网络安全与人才创新基地明德楼A343"),a.createElement("p",null,"Email: ",a.createElement("a",{href:""},"junfeng@hust.edu.cn"),", ",a.createElement("a",{href:""},"junfeng989@gmail.com")),a.createElement("p",null,"Tel/Wechat：18827365073"))),a.createElement("div",{style:d},a.createElement("section",{style:m},a.createElement("h2",null,"近期科研动态"),a.createElement("ul",null,a.createElement("li",null,"2024年12月，新立项两项大模型安全方向课题"),a.createElement("li",null,"2024年12月，安全神经网络推理论文被CCF A类期刊IEEE TIFS录用"),a.createElement("li",null,"2024年12月，研二上学期硕士针对联邦学习的后门攻击论文被CCF A类会议AAAI 2025录用"),a.createElement("li",null,"2024年9月，CCF A类期刊IEEE TC关于差分隐私深度学习论文入选了ESI高被引论文"),a.createElement("li",null))))),a.createElement(i.Z,null))},6329:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#0878b8","images":{"fallback":{"src":"/static/baf3354a5cae2dcab7cd5dfbe70ccfb0/be042/JunFeng.jpg","srcSet":"/static/baf3354a5cae2dcab7cd5dfbe70ccfb0/27e31/JunFeng.jpg 30w,\\n/static/baf3354a5cae2dcab7cd5dfbe70ccfb0/c140a/JunFeng.jpg 60w,\\n/static/baf3354a5cae2dcab7cd5dfbe70ccfb0/be042/JunFeng.jpg 120w,\\n/static/baf3354a5cae2dcab7cd5dfbe70ccfb0/22512/JunFeng.jpg 240w","sizes":"(min-width: 120px) 120px, 100vw"},"sources":[{"srcSet":"/static/baf3354a5cae2dcab7cd5dfbe70ccfb0/1e971/JunFeng.webp 30w,\\n/static/baf3354a5cae2dcab7cd5dfbe70ccfb0/86be5/JunFeng.webp 60w,\\n/static/baf3354a5cae2dcab7cd5dfbe70ccfb0/2fbfb/JunFeng.webp 120w,\\n/static/baf3354a5cae2dcab7cd5dfbe70ccfb0/43076/JunFeng.webp 240w","type":"image/webp","sizes":"(min-width: 120px) 120px, 100vw"}]},"width":120,"height":180}')}}]);
//# sourceMappingURL=component---src-pages-index-js-7e5c9dd4ae66291a2a62.js.map