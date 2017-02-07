(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("element-ui"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["element-ui", "vue"], factory);
	else if(typeof exports === 'object')
		exports["AdvTable"] = factory(require("element-ui"), require("vue"));
	else
		root["AdvTable"] = factory(root["element-ui"], root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AdvTable = __webpack_require__(4);

	var _AdvTable2 = _interopRequireDefault(_AdvTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_AdvTable2.default.install = function (Vue) {
	  Vue.component(_AdvTable2.default.name, _AdvTable2.default);
	};

	exports.default = _AdvTable2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(8);

	var _vue2 = _interopRequireDefault(_vue);

	var _elementUi = __webpack_require__(7);

	var _elementUi2 = _interopRequireDefault(_elementUi);

	__webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_elementUi2.default);

	exports.default = {
	  name: 'AdvTable',
	  data: function data() {
	    return {
	      currentPage: 1
	    };
	  },

	  props: {
	    data: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    rowActionsDef: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    actionColWidth: String
	  },
	  computed: {
	    tableData: function tableData() {
	      var newData = this.data;
	      return newData;
	    },
	    curTableData: function curTableData() {
	      return this.tableData;
	    }
	  },
	  methods: {
	    handleSizeChange: function handleSizeChange(val) {
	      console.log("每页 ${" + val + "} 条");
	    },
	    handleCurrentChange: function handleCurrentChange(currentPage) {
	      console.log("当前页 ${" + currentPage + "} 条");
	    }
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(3)

	var Component = __webpack_require__(5)(
	  /* script */
	  __webpack_require__(1),
	  /* template */
	  __webpack_require__(6),
	  /* scopeId */
	  "data-v-620bb3a9",
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('el-table', {
	    staticClass: "adv-table",
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "data": _vm.curTableData,
	      "border": "",
	      "fit": "",
	      "stripe": ""
	    }
	  }, [_vm._t("default"), _vm._v(" "), _c('el-table-column', {
	    attrs: {
	      "label": "操作",
	      "prop": "innerRowActions",
	      "min-width": _vm.actionColWidth
	    },
	    inlineTemplate: {
	      render: function() {
	        var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	          return _c('div', {
	            staticClass: "action-list"
	          }, _vm._l((_vm.rowActionsDef), function(action) {
	            return _c('span', [_c('el-button', {
	              staticClass: "actionBtn",
	              attrs: {
	                "type": action.type,
	                "size": "small"
	              },
	              on: {
	                "click": function($event) {
	                  action.handler(_vm.row)
	                }
	              }
	            }, [_vm._v("\n           " + _vm._s(action.tip) + "\n         ")])], 1)
	          }))
	        
	      },
	      staticRenderFns: []
	    }
	  })], 2)
	},staticRenderFns: []}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }
/******/ ])
});
;