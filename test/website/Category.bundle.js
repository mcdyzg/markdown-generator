(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{202:function(e,t,a){"use strict";a.r(t);var r=a(208);a.d(t,"default",function(){return r.a})},208:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Category_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(211),_Category_scss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_Category_scss__WEBPACK_IMPORTED_MODULE_1__),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),react_redux__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),_actions_currentState__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(29),moment__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),moment__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__),_createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var Category=function(_PureComponent){function Category(e){return _classCallCheck(this,Category),_possibleConstructorReturn(this,(Category.__proto__||Object.getPrototypeOf(Category)).call(this,e))}return _inherits(Category,_PureComponent),_createClass(Category,[{key:"componentDidMount",value:function(){this.props.match.params.name?this.props.changeState({type:"category",value:this.props.match.params.name}):this.props.changeState({type:"home",value:""})}},{key:"componentWillReceiveProps",value:function(e){e.match.params.name?this.props.changeState({type:"category",value:e.match.params.name}):this.props.changeState({type:"home",value:""})}},{key:"render",value:function(){var e=this.props.match.params.name,t=void 0===e?"":e,a=this.props.article,r=void 0===a?[]:a;return r.sort(function(e,t){return new Date(e.time||"").valueOf()<new Date(t.time||"").valueOf()}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"category-wrap"},r.map(function(e,a){if(!t||e.category===t)return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.b,{key:a,to:"/"+e.category+"/"+e.mdName.slice(0,-3)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"category-item"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"ci-left"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"image",src:e.cover||"https://wp-themes.com/wp-content/themes/hestia/demo-preview-images/img/3.jpg"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"ci-right"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"category"},e.category),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"title"},e.title),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"desc"},e.desc),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"author"},"By"," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:"author-name"},e.author),","," ",moment__WEBPACK_IMPORTED_MODULE_5___default()(e.time||"").fromNow()))))}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Category}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent),mapStateToProps=function(e){return{article:e.article}},mapDispatchToProps={changeState:function(e){return Object(_actions_currentState__WEBPACK_IMPORTED_MODULE_4__.b)(e)}},_default=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.d)(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__.b)(mapStateToProps,mapDispatchToProps)(Category)),reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(Category,"Category","/Users/loua/haha/x/reactchaijian/fe-note/src/pages/Category/Category.js"),reactHotLoader.register(mapStateToProps,"mapStateToProps","/Users/loua/haha/x/reactchaijian/fe-note/src/pages/Category/Category.js"),reactHotLoader.register(mapDispatchToProps,"mapDispatchToProps","/Users/loua/haha/x/reactchaijian/fe-note/src/pages/Category/Category.js"),reactHotLoader.register(_default,"default","/Users/loua/haha/x/reactchaijian/fe-note/src/pages/Category/Category.js"),leaveModule(module))}).call(this,__webpack_require__(6)(module))},210:function(e,t,a){(e.exports=a(14)(!1)).push([e.i,".category-wrap > a {\n  text-decoration: none; }\n  .category-wrap > a .category-item {\n    color: #3C4858;\n    text-decoration: none;\n    padding: 30px 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n    .category-wrap > a .category-item .ci-left {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 240px;\n              flex: 0 0 240px; }\n      @media (max-width: 520px) {\n        .category-wrap > a .category-item .ci-left {\n          -webkit-box-flex: 1;\n              -ms-flex: 1 1 auto;\n                  flex: 1 1 auto; } }\n      .category-wrap > a .category-item .ci-left .image {\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        width: 100%;\n        border-radius: 3px;\n        -webkit-box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n                box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); }\n    .category-wrap > a .category-item .ci-right {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 230px;\n              flex: 1 0 230px;\n      padding-left: 30px; }\n      @media (max-width: 500px) {\n        .category-wrap > a .category-item .ci-right {\n          padding-left: 0; } }\n      .category-wrap > a .category-item .ci-right .category {\n        margin-top: 10px;\n        font-size: 12px;\n        color: #e91e63; }\n      .category-wrap > a .category-item .ci-right .title {\n        margin: 12px 0;\n        font-size: 25px;\n        line-height: 30px;\n        font-weight: bold;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        line-clamp: 2;\n        -webkit-box-orient: vertical; }\n      .category-wrap > a .category-item .ci-right .desc {\n        color: #bbb9b9;\n        font-size: 14px;\n        line-height: 16px;\n        font-weight: bold;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-line-clamp: 4;\n        line-clamp: 4;\n        -webkit-box-orient: vertical;\n        margin-bottom: 20px;\n        word-wrap: break-word;\n        word-break: break-all; }\n      .category-wrap > a .category-item .ci-right .author {\n        color: #999; }\n        .category-wrap > a .category-item .ci-right .author .author-name {\n          color: #3C4858;\n          font-weight: bolder; }\n",""])},211:function(e,t,a){var r=a(210);"string"==typeof r&&(r=[[e.i,r,""]]);var _={hmr:!0,transform:void 0,insertInto:void 0};a(13)(r,_);r.locals&&(e.exports=r.locals)}}]);