webpackJsonp([5],{

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Set_vue__ = __webpack_require__(778);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_023b0342_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Set_vue__ = __webpack_require__(838);
function injectStyle (ssrContext) {
  __webpack_require__(829)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Set_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_023b0342_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Set_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);

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
    name: 'set',
    props: ['name', 'sets'],
    methods: {
        iconClass: function iconClass(icon) {
            return this.set.prefix + ' ' + this.set.prefix + '-' + icon;
        }
    },
    computed: {
        set: function set() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.sets), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var set = _step.value;

                    if (set.href === this.name) return set;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        },
        validatedLists: function validatedLists() {
            var _this = this;

            if (this.selector === '') {
                return this.set.lists;
            }
            var result = [{ name: 'Icons Founded', icons: [] }];
            this.set.lists.forEach(function (list) {
                list.icons.forEach(function (icon) {
                    if (icon.match(_this.selector)) {
                        result[0].icons.push(icon);
                    }
                });
            });
            return result;
        }
    },
    data: function data() {
        return {
            selector: '',
            iconSize: 30,
            slider: {
                formatter: function formatter(v) {
                    return v + 'px';
                },
                height: 2,
                direction: 'horizontal',
                min: 20,
                max: 40,
                interval: 1,
                speed: 0.5
            }
        };
    }
});

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(830);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a85a9c12", content, true, {});

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".Set .header{background-color:#fff;padding:2rem 0;margin-bottom:2rem}.Set .header .header-text{text-align:left;padding-left:2.5rem}.Set .header .header-text h2{margin-bottom:0}.Set .back-to-fonts{font-size:25px;padding-right:20px}.Set .icons .icon-grid-container{padding:.5rem 0 5rem;margin:0 0 2rem;text-align:center;height:6rem;position:relative;min-height:1px;float:left;width:200px;height:80px}.Set .icons .icon-grid-container:hover{background-color:#20a8d8;color:#fff;cursor:pointer}", ""]);

// exports


/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(832), __esModule: true };

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(833);
__webpack_require__(54);
module.exports = __webpack_require__(837);


/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(834);
var global = __webpack_require__(4);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(13);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(835);
var step = __webpack_require__(836);
var Iterators = __webpack_require__(13);
var toIObject = __webpack_require__(23);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var get = __webpack_require__(56);
module.exports = __webpack_require__(14).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Set"},[_c('card',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"header-text col-lg-4"},[_c('h2',[_vm._v(_vm._s(_vm.set.name))])]),_vm._v(" "),_c('div',{staticClass:"search col-lg-4"},[_c('div',{staticClass:"form-group with-icon-left"},[_c('div',{staticClass:"input-group"},[_c('span',{staticClass:"back-to-fonts"},[_c('router-link',{attrs:{"to":{path: '/components/icons'}}},[_c('i',{staticClass:"fa fa-hand-o-left"})])],1),_vm._v(" "),_c('form',{staticClass:"form-inline"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.selector),expression:"selector"}],staticClass:"form-control mr-sm-2",attrs:{"type":"text","placeholder":"Search Icon","required":"","aria-label":"Search"},domProps:{"value":(_vm.selector)},on:{"input":function($event){if($event.target.composing){ return; }_vm.selector=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{"type":"submit"}},[_c('i',{staticClass:"fa fa fa-search"})])])])])])])]),_vm._v(" "),_vm._l((_vm.validatedLists),function(list){return [_c('card',{attrs:{"headerText":list.name}},[(list.icons.length === 0)?_c('span',[_vm._v("No icons found")]):_vm._e(),_vm._v(" "),_vm._l((Math.floor(list.icons.length/8+1)),function(i){return [_c('div',{staticClass:"icons"},_vm._l((8),function(j){return (list.icons[(i-1)*8 + j-1])?_c('div',{staticClass:"icon-grid-container"},[_c('span',{class:_vm.iconClass(list.icons[(i-1)*8 + j-1]),style:('font-size: '+_vm.iconSize+'px'),attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('div',{staticClass:"iconText"},[_vm._v(_vm._s(list.icons[(i-1)*8 + j-1]))])]):_vm._e()}))]})],2)]})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=5.build.js.map