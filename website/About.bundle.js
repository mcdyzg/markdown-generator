(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{207:function(n,e,t){"use strict";t.r(e);var o=t(213);t.d(e,"default",function(){return o.a})},213:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_About_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(219),_About_scss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_About_scss__WEBPACK_IMPORTED_MODULE_1__),_themes_blog_styles_cayman_markdown_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(217),_themes_blog_styles_cayman_markdown_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_themes_blog_styles_cayman_markdown_scss__WEBPACK_IMPORTED_MODULE_2__),_createClass=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),enterModule;function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}enterModule=__webpack_require__(3).enterModule,enterModule&&enterModule(module);var About=function(_Component){function About(n){_classCallCheck(this,About);var e=_possibleConstructorReturn(this,(About.__proto__||Object.getPrototypeOf(About)).call(this,n));return e.state={},e}return _inherits(About,_Component),_createClass(About,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"about-wrap"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"main-content",dangerouslySetInnerHTML:{__html:'<h2>title</h2>\n<hr>\n<h2>title: Using Vue Component</h2>\n<p>You can use Vue components in your doc contents, like this:</p>\n<table>\n<thead>\n<tr>\n<th>adsf</th>\n<th>fasdf</th>\n<th>sdaf</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>adf</td>\n<td>adsfasd</td>\n<td>asdf</td>\n</tr>\n</tbody>\n</table>\n<pre><code class="language-markdown">---\n<span class="hljs-section">title: Hello\n---</span>\n\nCheck out <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/world"</span>&gt;</span></span>World!<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span></span>?\n\nOr scroll to <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">router-link</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"{hash: \'something-else\'}"</span>&gt;</span></span>something else<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">router-link</span>&gt;</span></span>.\n</code></pre>\n<p>If you\'re familiar with <a href="https://router.vuejs.org/en/">vue-router</a>, you known that <a href="https://router.vuejs.org/en/api/router-link.html"><code>router-link</code></a> is a built-in vue-router component which is used to do navigations.</p>\n<p>You can use any Vue template markup here since it\'s valid HTML 🤯</p>\n<h2>Compilation Diagram</h2>\n<img src="https://i.loli.net/2018/03/30/5abdda8dc5632.png" width="300">\n<h2>Custom Components</h2>\n<p>You can register your components and use them in doc contents.</p>\n<p>If you\'re loading Docute from CDN, then <code>window.Vue</code> will also be available so that you can use it to register global components:</p>\n<pre><code class="language-js">Vue.component(<span class="hljs-string">\'your-component\'</span>, {\n\t<span class="hljs-attr">template</span>: <span class="hljs-string">\'&lt;h1&gt;Hello {{ world }}&lt;/h1&gt;\'</span>,\n\tdata() {\n\t\t<span class="hljs-keyword">return</span> {\n\t\t\t<span class="hljs-attr">world</span>: <span class="hljs-string">\'world\'</span>,\n\t\t}\n\t},\n})\n</code></pre>\n<p>If you\'re using Docute with a bundler, just do it in the bundler way:</p>\n<pre><code class="language-js{1}">import Vue from \'vue\'\n\nVue.component(\'your-component\', {\n  template: \'&lt;h1 v-text=&quot;hi&quot;&gt;Hello {{ world }}&lt;/h1&gt;\',\n  data()  {\n    return {\n      world: \'world\'\n    }\n  }\n})\n</code></pre>\n<blockquote>\n<p><strong>WARN</strong>: please note that we disabled Vue delimiters <code>{{</code> and <code>}}</code> in doc contents to prevent from any unexpected template interpolation, you may explictly use <code>v-text</code> instead. But delimiters do work in your own component. If you really want to use this in doc contents, you can prefix <code>{{</code> with <code>PLEASE_ALLOW_</code>.</p>\n</blockquote>\n'}}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),About}(react__WEBPACK_IMPORTED_MODULE_0__.Component),_default=About,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(3).default,leaveModule=__webpack_require__(3).leaveModule,reactHotLoader&&(reactHotLoader.register(About,"About","/Users/loua/haha/x/reactchaijian/markdown-generator/src/themes/blog/About/About.js"),reactHotLoader.register(_default,"default","/Users/loua/haha/x/reactchaijian/markdown-generator/src/themes/blog/About/About.js"),leaveModule(module))}).call(this,__webpack_require__(7)(module))},216:function(n,e,t){(n.exports=t(14)(!1)).push([n.i,".main-content {\n  word-wrap: break-word; }\n  .main-content :first-child {\n    margin-top: 0; }\n  @media screen and (min-width: 64em) {\n    .main-content {\n      max-width: 64rem;\n      padding: 2rem 6rem;\n      margin: 0 auto;\n      font-size: 1.1rem; } }\n  @media screen and (min-width: 42em) and (max-width: 64em) {\n    .main-content {\n      padding: 2rem 4rem;\n      font-size: 1.1rem; } }\n  @media screen and (max-width: 42em) {\n    .main-content {\n      padding: 2rem 1rem;\n      font-size: 1rem; } }\n  .main-content img {\n    max-width: 100%; }\n  .main-content h1,\n  .main-content h2,\n  .main-content h3,\n  .main-content h4,\n  .main-content h5,\n  .main-content h6 {\n    margin-top: 2rem;\n    margin-bottom: 1rem;\n    font-weight: normal;\n    color: #159957; }\n  .main-content p {\n    margin-bottom: 1em; }\n  .main-content code {\n    padding: 2px 4px;\n    font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n    font-size: 0.9rem;\n    color: #567482;\n    background-color: #f3f6fa;\n    border-radius: 0.3rem; }\n  .main-content pre {\n    padding: 0.8rem;\n    margin-top: 0;\n    margin-bottom: 1rem;\n    font: 1rem Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n    color: #567482;\n    word-wrap: normal;\n    background-color: #f3f6fa;\n    border: solid 1px #dce6f0;\n    border-radius: 0.3rem; }\n    .main-content pre > code {\n      padding: 0;\n      margin: 0;\n      font-size: 0.9rem;\n      color: #567482;\n      word-break: normal;\n      white-space: pre;\n      background: transparent;\n      border: 0; }\n  .main-content .highlight {\n    margin-bottom: 1rem; }\n    .main-content .highlight pre {\n      margin-bottom: 0;\n      word-break: normal; }\n  .main-content .highlight pre,\n  .main-content pre {\n    padding: 0.8rem;\n    overflow: auto;\n    font-size: 0.9rem;\n    line-height: 1.45;\n    border-radius: 0.3rem;\n    -webkit-overflow-scrolling: touch; }\n  .main-content pre code,\n  .main-content pre tt {\n    display: inline;\n    max-width: initial;\n    padding: 0;\n    margin: 0;\n    overflow: initial;\n    line-height: inherit;\n    word-wrap: normal;\n    background-color: transparent;\n    border: 0; }\n    .main-content pre code:before, .main-content pre code:after,\n    .main-content pre tt:before,\n    .main-content pre tt:after {\n      content: normal; }\n  .main-content ul,\n  .main-content ol {\n    margin-top: 0; }\n  .main-content blockquote {\n    padding: 0 1rem;\n    margin-left: 0;\n    color: #819198;\n    border-left: 0.3rem solid #dce6f0; }\n    .main-content blockquote > :first-child {\n      margin-top: 0; }\n    .main-content blockquote > :last-child {\n      margin-bottom: 0; }\n  .main-content table {\n    display: block;\n    width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n    -webkit-overflow-scrolling: touch; }\n    .main-content table th {\n      font-weight: bold; }\n    .main-content table th,\n    .main-content table td {\n      padding: 0.5rem 1rem;\n      border: 1px solid #e9ebec; }\n  .main-content dl {\n    padding: 0; }\n    .main-content dl dt {\n      padding: 0;\n      margin-top: 1rem;\n      font-size: 1rem;\n      font-weight: bold; }\n    .main-content dl dd {\n      padding: 0;\n      margin-bottom: 1rem; }\n  .main-content hr {\n    height: 2px;\n    padding: 0;\n    margin: 1rem 0;\n    background-color: #eff0f1;\n    border: 0; }\n",""])},217:function(n,e,t){var o=t(216);"string"==typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(13)(o,a);o.locals&&(n.exports=o.locals)},218:function(n,e,t){(n.exports=t(14)(!1)).push([n.i,"",""])},219:function(n,e,t){var o=t(218);"string"==typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(13)(o,a);o.locals&&(n.exports=o.locals)}}]);