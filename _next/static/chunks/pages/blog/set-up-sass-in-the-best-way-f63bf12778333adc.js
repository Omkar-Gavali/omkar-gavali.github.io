(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[690],{5441:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/set-up-sass-in-the-best-way",function(){return n(1674)}])},4911:function(s,e,n){"use strict";n.d(e,{Z:function(){return g}});var t=n(1799),i=n(9396),a=n(5893),c=n(7294),l=n(1664),o=n.n(l),r=n(1163),d=n(4725),h=n.n(d),p=(n(9578),n(8674),n(7013),n(2427),n(7771)),u=n(3422),m=n.n(u),x=n(2362),j=n(6945),f=function(s){return""===s?"No date":"".concat(new Date(s).getDate(),".").concat(new Date(s).getMonth()+1,".").concat(new Date(s).getFullYear())};function g(s){var e=s.children,n=(0,r.useRouter)();(0,c.useEffect)((function(){h().highlightAll()}),[n]);var l=m().find((function(s){return s.slug===n.asPath.replace("/blog/","")})),d=l.title,u=l.intro,g=l.img,w=l.published,b=l.modified,y=l.categories,S=null===y||void 0===y?void 0:y.split(", ").filter((function(s){return s})),v=m()[m().findIndex((function(s){return s.title===d}))+1]||m()[0],N=[m()[m().findIndex((function(s){return s.title===d}))-1]||m()[m().length-1],v];return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(j.Z,(0,i.Z)((0,t.Z)({title:"".concat(d," | Blog | Omkar Gavali"),description:u,itemtype:"Article"},l),{children:(0,a.jsx)("div",{className:"container narrow post-shape",children:(0,a.jsx)("div",{"data-aos":"fade-left",children:(0,a.jsxs)("article",{children:[(0,a.jsx)("h1",{itemProp:"headline name",children:d}),(0,a.jsx)("img",{src:g,alt:d,width:"300",height:"150",className:"post__img mb-5",itemProp:"image"}),(0,a.jsxs)("div",{className:"space-between-x mb-10",children:[(0,a.jsx)("div",{className:"post__categories",children:null===S||void 0===S?void 0:S.map((function(s){return(0,a.jsx)(o(),{href:"/blog?".concat(s),children:(0,a.jsx)("a",{children:(0,a.jsx)("span",{itemProp:"articleSection",children:s.charAt(0).toUpperCase()+s.slice(1)})})},s)}))}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("time",{className:"post__date",itemProp:"datePublished",content:f(w),dateTime:f(w),children:["Published on: ",f(w)]}),(0,a.jsxs)("time",{className:"post__date",itemProp:"dateModified",content:f(b),dateTime:f(b),children:["Modified on: ",f(b)]})]})]}),(0,a.jsx)("div",{className:"post__content mb-10",itemProp:"articleBody",children:e}),(0,a.jsx)("div",{className:"mb-15",children:(0,a.jsx)(o(),{href:"/blog",children:(0,a.jsxs)("a",{className:"btn",children:[(0,a.jsx)(p.FtK,{className:"mr-1"}),"Back to blog listing"]})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"mb-5",children:"Suggested articles"}),(0,a.jsx)(x.Z,{data:N,className:"mb-20"})]})]})})})}))})}},4152:function(s,e,n){"use strict";n.d(e,{Z:function(){return i}});var t=n(5893);function i(s){var e=s.className,n=s.sandbox,i=s.title;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"code-iframe-wrapper "+(e||""),children:(0,t.jsx)("iframe",{height:"300",title:i,loading:"lazy",src:"https://codesandbox.io/embed/"+n+"?fontsize=14&theme=dark",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts",children:(0,t.jsx)("a",{href:"https://codesandbox.io/s/"+n,target:"_blank",rel:"noopener noreferrer",children:"See the Sandbox by Omkar Gavali"})})})})}},1674:function(s,e,n){"use strict";n.r(e);var t=n(5893),i=n(1151),a=n(4911),c=(n(4152),function(s){var e=s.children;return(0,t.jsx)(a.Z,{children:e})});function l(s){var e=Object.assign({p:"p",ul:"ul",li:"li",h2:"h2",em:"em",code:"code",pre:"pre",strong:"strong"},(0,i.ah)(),s.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"So far in this blog, I have mostly written about Next.js and CSS. Today, I will focus on a topic that I consider to be in between those two. I love CSS very much and there comes a point in a project where I want to abstract, sharpen or simply be able to nest selectors. That's where Sass comes into play. I know there are alternative CSS preprocessors in the likes of Less or Stylus, but I have always used Sass the most."}),"\n",(0,t.jsx)("blockquote",{children:(0,t.jsxs)(e.p,{children:["Sass (Syntactically Awesome Style Sheets) is a stylesheet language that\u2019s compiled to CSS. It allows you to use\nvariables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large\nstylesheets well-organized and makes it easy to share design within and across projects.\n",(0,t.jsx)("cite",{children:"sass-lang.com"})]})}),"\n",(0,t.jsx)(e.p,{children:"Before diving into Sass, it's important to differentiate its two syntaxes:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"The original syntax (.sass), known as SASS, using indentation to define blocks of code"}),"\n",(0,t.jsx)(e.li,{children:"The newer syntax (.scss), known as SCSS, similar to CSS syntaxes"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"In this piece, I will use the SCSS syntax over the Sass one because I find it more readable."}),"\n",(0,t.jsx)(e.p,{children:"Some front-end frameworks give you a working environment with Sass compiling capabilities out of the box. Create React App does for example. But how do you set up the Sass compiler on your own?"}),"\n",(0,t.jsx)(e.h2,{children:"Installing Sass"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsxs)(e.em,{children:["I assume you already have Node and NPM installed on your machine and you have started your project with ",(0,t.jsx)(e.code,{children:"npm init"}),"."]})}),"\n",(0,t.jsx)(e.p,{children:"First things first, let's install Sass. Forget about node-sass and others, the advised way is to use Dart Sass today."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"npm install sass\nyarn add sass\n"})}),"\n",(0,t.jsx)(e.p,{children:"The next step is to compile the Sass we have into formal CSS."}),"\n",(0,t.jsx)(e.h2,{children:"Compile Sass"}),"\n",(0,t.jsx)(e.p,{children:"Let's create a .scss file with a few lines."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-scss",children:"// src/scss/style.scss\n.example {\n  color: blue;\n  &:hover {\n    color: red;\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"In our package.json, we want to add a script that will compile that Sass file."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'"scripts":\xa0{\n  "sass": "sass src/scss/style.scss public/css/style.css"\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["We should then find the following CSS in ",(0,t.jsx)(e.code,{children:"public/css/style.css"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-css",children:"/* public/css/style.css */\n.example {\n  color: blue;\n}\n.example:hover {\n  color: red;\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"Do we need to run that command every time we change our CSS? Of course not. Let's see how to avoid that in the next section."}),"\n",(0,t.jsx)(e.h2,{children:"Settings"}),"\n",(0,t.jsx)(e.p,{children:"There are various settings that will help us tailor our compiling behavior and output."}),"\n",(0,t.jsxs)(e.p,{children:["The first one is the most useful; The ",(0,t.jsx)(e.code,{children:"--watch"})," option, or ",(0,t.jsx)(e.code,{children:"-w"}),", will watch your specified Sass files and compile at any change."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'"scripts":\xa0{\n  "sass": "sass src/scss/style.scss public/css/style.css --watch"\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["The second one I use is the ",(0,t.jsx)(e.code,{children:"--no-source-map"})," option, which prevents the generation of a source map in the outputted .css file."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'"scripts":\xa0{\n  "sass": "sass src/scss/style.scss public/css/style.css --no-source-map"\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Another setting is the ",(0,t.jsx)(e.code,{children:"--style"}),". By defining it to ",(0,t.jsx)(e.code,{children:"compressed"}),", we will receive a minimized CSS file."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'"scripts":\xa0{\n  "sass": "sass src/scss/style.scss public/css/style.css --style=compressed"\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["The last point we will see in this section is about compiling multiple files. The first script will compile two (or more) different Sass stylesheets, while the second one will compile all the Sass files in ",(0,t.jsx)(e.code,{children:"src/scss"})," and output them in ",(0,t.jsx)(e.code,{children:"public/css"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'"scripts":\xa0{\n  "sass-two": "sass src/scss/first.scss:public/css/first.css src/scss/second.scss:public/css/second.css",\n  "sass-folder": "sass src/scss:public/css"\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Please find ",(0,t.jsx)("a",{href:"https://sass-lang.com/documentation/cli/dart-sass",target:"_blank",children:"more about settings in the official documentation."})]}),"\n",(0,t.jsx)(e.h2,{children:"Add autoprefixer"}),"\n",(0,t.jsx)(e.p,{children:"I would love that Sass CLI would handle autoprefixer, but as far as I know it's not the case. Autoprefixer will go through your CSS and, based on the level of browser compatibility you need, will output a new version with necessary specific browser prefixes."}),"\n",(0,t.jsx)(e.p,{children:"We will need other packages to be able to use autoprefixer."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"npm install postcss postcss-cli autoprefixer\nyarn add postcss postcss-cli autoprefixer\n"})}),"\n",(0,t.jsx)(e.p,{children:"And another script in our package.json."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'"scripts":\xa0{\n  "prefix": "postcss public/css/style.css --replace --use autoprefixer -b \'defaults\' --no-map"\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"Now that we have discussed all those settings, let's take a look at the scripts that I prefer to use for compiling Sass."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'"scripts":\xa0{\n  "watch": "sass src/scss/style.scss public/css/style.css --no-source-map --watch",\n  "sass": "sass src/scss/style.scss public/css/style.css --no-source-map --style=compressed",\n  "prefix": "postcss public/css/style.css --replace --use autoprefixer -b \'defaults\' --no-map",\n  "compile": "npm run sass && npm run prefix"\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["We have ",(0,t.jsx)(e.code,{children:"watch"})," that we would use during development to compile on every change in our Sass and we have ",(0,t.jsx)(e.code,{children:"compile"})," which will be useful for production by compiling and compressing our .scss files while improving cross-browser compatibility."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"TLDR"}),": ",(0,t.jsx)("a",{href:"https://codesandbox.io/p/sandbox/setup-sass-jbjjlx",target:"_blank",children:"Codesandbox: Setup Sass in the best way"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"I find Sass really useful and enjoyable, but I often forget how to set it up. I hope this guide will help you leverage the best of CSS by making it more efficient and maintainable."}),"\n",(0,t.jsx)(e.p,{children:"Enjoy coding with Sass!"})]})}e.default=function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(c,Object.assign({},s,{children:(0,t.jsx)(l,s)}))}}},function(s){s.O(0,[838,151,365,594,913,734,311,774,888,179],(function(){return e=5441,s(s.s=e);var e}));var e=s.O();_N_E=e}]);