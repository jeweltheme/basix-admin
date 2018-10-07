webpackJsonp([9],{

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1051);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7003d1f6", content, true, {});

/***/ }),

/***/ 1051:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".sets-list .small-set{margin:0 0 1.5rem}.sets-list .small-set .btn{width:13.75rem;padding-left:0;padding-right:0;text-align:center}.sets-list .small-set .set-content{background-color:#eee}.sets-list .small-set .set-content>div{padding:1rem}.sets-list .small-set .set-content>div div[class^=col]{padding:0;margin:1rem 0}.sets-list .small-set .set-content>div div[class^=col] .icon{font-size:.85rem;text-align:center}.sets-list .small-set .set-content .overlay{padding:10% 0;margin:0;width:90%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}", ""]);

// exports


/***/ }),

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sets-list "},[_c('card',{attrs:{"header-text":"Icons"}},[_c('div',{staticClass:"row"},_vm._l((_vm.sets),function(set){return _c('div',{staticClass:"small-set col-lg-6"},[_c('div',{staticClass:"set-content"},[_c('div',{staticClass:"overlay align-middle"},[_c('router-link',{attrs:{"to":{path: set.href},"append":""}},[_c('div',{staticClass:"btn btn-primary"},[_vm._v(_vm._s(set.name))])])],1),_vm._v(" "),_c('div',[_vm._l((set.filteredLists),function(filteredList){return [_c('div',{staticClass:"row"},_vm._l((filteredList),function(icon){return _c('div',{staticClass:"col-sm-2"},[_c('div',{staticClass:"icon"},[_c('i',{class:_vm.iconClass(set, icon),attrs:{"area-hidden":"true"}})])])}))]})],2)])])}))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SetsList_vue__ = __webpack_require__(855);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fda346e4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SetsList_vue__ = __webpack_require__(1052);
function injectStyle (ssrContext) {
  __webpack_require__(1050)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SetsList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fda346e4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SetsList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'iconsList',
    props: ['sets'],
    methods: {
        iconClass: function iconClass(set, icon) {
            return set.prefix + ' ' + set.prefix + '-' + icon;
        }
    }
});

/***/ })

});
//# sourceMappingURL=9.build.js.map