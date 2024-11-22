(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7],{9016:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/fix-the-window-is-not-defined-error",function(){return i(125)}])},4911:function(e,n,i){"use strict";i.d(n,{Z:function(){return g}});var t=i(1799),s=i(9396),r=i(5893),a=i(7294),c=i(1664),o=i.n(c),d=i(1163),l=i(4725),h=i.n(l),u=(i(9578),i(8674),i(7013),i(2427),i(7771)),f=i(3422),m=i.n(f),j=i(2362),x=i(6945),p=function(e){return""===e?"No date":"".concat(new Date(e).getDate(),".").concat(new Date(e).getMonth()+1,".").concat(new Date(e).getFullYear())};function g(e){var n=e.children,i=(0,d.useRouter)();(0,a.useEffect)((function(){h().highlightAll()}),[i]);var c=m().find((function(e){return e.slug===i.asPath.replace("/blog/","")})),l=c.title,f=c.intro,g=c.img,w=c.published,b=c.modified,v=c.categories,N=null===v||void 0===v?void 0:v.split(", ").filter((function(e){return e})),_=m()[m().findIndex((function(e){return e.title===l}))+1]||m()[0],y=[m()[m().findIndex((function(e){return e.title===l}))-1]||m()[m().length-1],_];return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(x.Z,(0,s.Z)((0,t.Z)({title:"".concat(l," | Blog | Omkar Gavali"),description:f,itemtype:"Article"},c),{children:(0,r.jsx)("div",{className:"container narrow post-shape",children:(0,r.jsx)("div",{"data-aos":"fade-left",children:(0,r.jsxs)("article",{children:[(0,r.jsx)("h1",{itemProp:"headline name",children:l}),(0,r.jsx)("img",{src:g,alt:l,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,r.jsxs)("div",{className:"space-between-x mb-10",children:[(0,r.jsx)("div",{className:"post__categories",children:null===N||void 0===N?void 0:N.map((function(e){return(0,r.jsx)(o(),{href:"/blog?".concat(e),children:(0,r.jsx)("a",{children:(0,r.jsx)("span",{itemProp:"articleSection",children:e.charAt(0).toUpperCase()+e.slice(1)})})},e)}))}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:p(w),dateTime:p(w),children:["Published on: ",p(w)]}),(0,r.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:p(b),dateTime:p(b),children:["Modified on: ",p(b)]})]})]}),(0,r.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:n}),(0,r.jsx)("div",{className:"mb-15",children:(0,r.jsx)(o(),{href:"/blog",children:(0,r.jsxs)("a",{className:"btn",children:[(0,r.jsx)(u.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"mb-5",children:"Suggested articles"}),(0,r.jsx)(j.Z,{data:y,className:"mb-20"})]})]})})})}))})}},125:function(e,n,i){"use strict";i.r(n);var t=i(5893),s=i(1151),r=i(4911),a=function(e){var n=e.children;return(0,t.jsx)(r.Z,{children:n})};function c(e){var n=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Next.js is very useful in many aspects, but nothing is perfect. One difficult point is the use of the ",(0,t.jsx)(n.code,{children:"window"})," object. It is used in many libraries and tools such as analytics and, because Next.js uses pre-rendering, the window may be undefined and may therefore break our site."]}),"\n",(0,t.jsx)(n.h2,{children:"Wait for window to be ready"}),"\n",(0,t.jsx)(n.p,{children:"This is the usual fix we find for this issue. Somehow it was never the fitting solution in my projects, but I still try it every time."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"if (typeof window !== 'undefined') {\n  // Client-side-only code\n}\n"})}),"\n",(0,t.jsx)(n.h2,{children:"With useEffect"}),"\n",(0,t.jsxs)(n.p,{children:["The other solution requires a better knowledge of React, using the ",(0,t.jsx)(n.code,{children:"useEffect"})," hook. It is working because this hook will wait for the mounting of the page. Pay attention to the empty array, which is needed to work."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"useEffect(() => {\n  // Client-side-only code\n}, []);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For a working example, check ",(0,t.jsx)(n.a,{href:"/blog/nextjs-dark-mode",children:"this article on dark mode"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Enjoy coding with Next.js!"})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(c,e)}))}}},function(e){e.O(0,[838,151,365,594,913,734,311,774,888,179],(function(){return n=9016,e(e.s=n);var n}));var n=e.O();_N_E=n}]);