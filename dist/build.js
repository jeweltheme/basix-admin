/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		17: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".build.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
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
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(610)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(38)('wks');
var uid = __webpack_require__(39);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "production" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (false) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (false) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if (false) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (false) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "production" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    false
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (false) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (false) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (false) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "production" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (false
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (false) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (false) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (false) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (false
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "production" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (false) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (false) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (false) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (false) {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (false) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (false) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (false) {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (false) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (false) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (false) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (false) {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (false) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      false
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (false) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "production" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (false
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (false) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (false) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (false) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (false) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (false) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "production" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (false) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (false) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (false) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (false) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(11), __webpack_require__(76).setImmediate))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(635);
var toPrimitive = __webpack_require__(636);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(34)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys');
var uid = __webpack_require__(39);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_361ad64c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Buttons_vue__ = __webpack_require__(673);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_361ad64c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Buttons_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad00a900_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Badges_vue__ = __webpack_require__(676);
function injectStyle (ssrContext) {
  __webpack_require__(674)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ad00a900"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad00a900_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Badges_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressBars_vue__ = __webpack_require__(46);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54ccd065_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgressBars_vue__ = __webpack_require__(682);
function injectStyle (ssrContext) {
  __webpack_require__(677)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ProgressBars_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54ccd065_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ProgressBars_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(643);
var defined = __webpack_require__(16);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(14);
var ctx = __webpack_require__(33);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nav__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header_vue__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Sidebar_vue__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_AuthLayout_vue__ = __webpack_require__(663);
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
  data: function data() {
    return {
      nav: __WEBPACK_IMPORTED_MODULE_0__nav__["a" /* default */].items
    };
  },

  components: {
    AuthLayout: __WEBPACK_IMPORTED_MODULE_3__layouts_AuthLayout_vue__["a" /* default */],
    Header: __WEBPACK_IMPORTED_MODULE_1__components_Header_vue__["a" /* default */],
    Sidebar: __WEBPACK_IMPORTED_MODULE_2__components_Sidebar_vue__["a" /* default */]
  },
  computed: {
    name: function name() {
      return this.$route.name;
    },
    list: function list() {
      return this.$route.matched;
    },
    isAuth: function isAuth() {
      return this.$route.path.match('auth');
    }
  }
});

/***/ }),
/* 26 */
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
  name: 'basix-header',
  data: function data() {
    return {
      isActive: false,
      isFlag: false,
      isMessage: false,
      isNotification: false,
      isSearch: false,
      isOpen: false
    };
  },

  methods: {
    toggle: function toggle(e) {
      //this.isOpen = !this.isOpen
      e.target.parentElement.classList.toggle('close');
    },
    handleClick: function handleClick(e) {
      this.isActive = !this.isActive;
      // if(e.target.className == "noclass"){
      //     e.target.className = "link active";
      // } else{
      //     e.target.className = "noclass";
      // }
    },
    searchClick: function searchClick(e) {
      this.isSearch = !this.isSearch;
    },
    handleMessage: function handleMessage(e) {
      this.isMessage = !this.isMessage;
    },
    handleNotification: function handleNotification(e) {
      this.isNotification = !this.isNotification;
    },
    handleFlag: function handleFlag(e) {
      this.isFlag = !this.isFlag;
    }
  }
});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_SidebarHeader_vue__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_SidebarNavDropdown_vue__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_SidebarNavTitle_vue__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_SidebarNavLink_vue__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebar_SidebarNavItem_vue__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_SidebarFooter_vue__ = __webpack_require__(660);
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
    name: 'sidebar',
    props: {
        navItems: {
            type: Array,
            required: true,
            default: function _default() {
                return [];
            }
        }
    },
    components: {
        SidebarHeader: __WEBPACK_IMPORTED_MODULE_0__sidebar_SidebarHeader_vue__["a" /* default */],
        SidebarNavDropdown: __WEBPACK_IMPORTED_MODULE_1__sidebar_SidebarNavDropdown_vue__["a" /* default */],
        SidebarNavLink: __WEBPACK_IMPORTED_MODULE_3__sidebar_SidebarNavLink_vue__["a" /* default */],
        SidebarNavTitle: __WEBPACK_IMPORTED_MODULE_2__sidebar_SidebarNavTitle_vue__["a" /* default */],
        SidebarNavItem: __WEBPACK_IMPORTED_MODULE_4__sidebar_SidebarNavItem_vue__["a" /* default */],
        SidebarFooter: __WEBPACK_IMPORTED_MODULE_5__sidebar_SidebarFooter_vue__["a" /* default */]
    },
    methods: {
        handleClick: function handleClick(e) {
            e.preventDefault();
            e.target.parentElement.classList.toggle('show');
        }
    }
});

/***/ }),
/* 28 */
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


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'sidebar-header',
    data: function data() {
        return {
            clickable: true
        };
    },

    methods: {
        handleSidebarToggle: function handleSidebarToggle(e) {
            // if( this.clickable ){
            //     this.clickable = false;
            //     document.body.classList.toggle('open');
            //     this.clickable = true;
            // }

            e.target.parentElement.classList.toggle('collapsed');
        },
        mainmenuToggle: function mainmenuToggle() {
            if (this.clickable) {
                this.clickable = false;
                document.body.classList.toggle('mobile-menu');
                //e.target.childElement.classList.toggle('collapsed')
                this.clickable = true;
            }
        }
    }
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.png?e8fec2ef0b52be5402c3dd3b436709da";

/***/ }),
/* 30 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      isShow: false
    };
  },

  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    menuShowClick: function menuShowClick(e) {
      this.isShow = !this.isShow;
      //  e.target.parentElement.classList.toggle('show')
    },
    handleClick: function handleClick(e) {
      e.preventDefault();
      //e.target.parentElement.classList.toggle('show')
      this.isShow = !this.isShow;
    }
  }
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

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
  props: {
    name: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    wrapper: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    classList: function classList() {
      return ['menu-title'].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.itemClasses));
    },
    itemClasses: function itemClasses() {
      return this.classes ? this.classes.split(' ') : '';
    }
  }
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(630);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(634);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(16);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_url_external__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_url_external___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_is_url_external__);
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
    name: 'sidebar-nav-link',
    props: {
        name: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        badge: {
            type: Object,
            default: function _default() {}
        },
        variant: {
            type: String,
            default: ''
        }
    },
    computed: {
        classList: function classList() {
            return ['', this.linkVariant];
        },
        linkVariant: function linkVariant() {
            return this.variant ? 'nav-link-' + this.variant : '';
        },
        ExternalLink: function ExternalLink() {
            return __WEBPACK_IMPORTED_MODULE_0_is_url_external___default()(this.url);
        }
    }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);

//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'sidebar-nav-item',
    props: {
        classes: {
            type: String,
            default: ''
        }
    },
    computed: {
        classList: function classList() {
            return ['nav-item'].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(this.itemClasses));
        },
        itemClasses: function itemClasses() {
            return this.classes ? this.classes.split(' ') : '';
        }
    }

});

/***/ }),
/* 45 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'AuthLayout'
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progressbar_BootstrapProgressBar_vue__ = __webpack_require__(47);
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
  components: {
    BootstrapProgressBar: __WEBPACK_IMPORTED_MODULE_0__progressbar_BootstrapProgressBar_vue__["a" /* default */]
  }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BootstrapProgressBar_vue__ = __webpack_require__(48);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4dd0e00e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BootstrapProgressBar_vue__ = __webpack_require__(681);
function injectStyle (ssrContext) {
  __webpack_require__(679)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4dd0e00e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BootstrapProgressBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4dd0e00e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BootstrapProgressBar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 48 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'bootstrap-progress-bar',
  computed: {
    progressClass: function progressClass() {
      return {
        'progress-bar': this.width,
        'bg-success': this.type === 'success',
        'bg-primary': this.type === 'primary',
        'bg-secondary': this.type === 'secondary',
        'bg-danger': this.type === 'danger',
        'bg-warning': this.type === 'warning',
        'bg-info': this.type === 'info',

        // Stripped
        'bg-success progress-bar-striped': this.type === 'success striped',
        'bg-primary progress-bar-striped': this.type === 'primary striped',
        'bg-secondary progress-bar-striped': this.type === 'secondary striped',
        'bg-danger progress-bar-striped': this.type === 'danger striped',
        'bg-warning progress-bar-striped': this.type === 'warning striped',
        'bg-info progress-bar-striped': this.type === 'info striped'

      };
    }
  },
  props: {
    type: {
      type: String,
      default: 'success'
    },
    // label: {
    //   type: String,
    //   default: ''
    // },
    width: {
      type: Number,
      default: '20'
    }
  }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_animate_number__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_animate_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_animate_number__);
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



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_animate_number___default.a);

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'basix-counter',
  props: {
    from: {
      type: Number,
      default: 0
    },
    to: {
      type: Number,
      default: 100
    },
    duration: {
      type: Number,
      default: 5000
    }
  },
  methods: {
    formatter: function formatter(num) {
      return num.toFixed(2);
    },

    startAnimate: function startAnimate() {
      this.$refs.myNum.start();
    }
  }
});

/***/ }),
/* 50 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'basix-alert',
  computed: {
    alertClass: function alertClass() {
      return {
        'with-close': this.withCloseBtn,
        'alert-success': this.type === 'success',
        'alert-primary': this.type === 'primary',
        'alert-secondary': this.type === 'secondary',
        'alert-danger': this.type === 'danger',
        'alert-warning': this.type === 'warning',
        'alert-info': this.type === 'info'
      };
    }
  },
  props: {
    type: {
      type: String,
      default: 'success'
    },
    withCloseBtn: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      hidden: false
    };
  },

  methods: {
    hide: function hide() {
      this.hidden = true;
    }
  }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            clickable: true
        };
    },

    methods: {
        handleSidebarToggle: function handleSidebarToggle() {
            if (this.clickable) {
                this.clickable = false;
                document.body.classList.toggle('open');
                this.clickable = true;
            }
        }
    }
});

/***/ }),
/* 52 */
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

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'card-template',

    props: ['headerIcon', 'headerText', 'footerText', 'smallText']
});

/***/ }),
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(632)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(633);
var $export = __webpack_require__(24);
var redefine = __webpack_require__(637);
var hide = __webpack_require__(7);
var has = __webpack_require__(12);
var Iterators = __webpack_require__(13);
var $iterCreate = __webpack_require__(638);
var setToStringTag = __webpack_require__(41);
var getPrototypeOf = __webpack_require__(647);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(652);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(13);
module.exports = __webpack_require__(14).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapGetters; });
/* unused harmony export mapActions */
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (false) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (false) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (false) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (false) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (false) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (false) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    false
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (false) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (false) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (false) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (false) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (false) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (false) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (false) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (false) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (false) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AnimateNumber_vue__ = __webpack_require__(49);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e38f4aa_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AnimateNumber_vue__ = __webpack_require__(686);
function injectStyle (ssrContext) {
  __webpack_require__(683)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e38f4aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AnimateNumber_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e38f4aa_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AnimateNumber_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_router__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_routes__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index__ = __webpack_require__(687);








// Router
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */]);
const router = new __WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */]({
    routes: __WEBPACK_IMPORTED_MODULE_4__router_routes__["a" /* routes */],
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'hash'
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router,
  store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */],
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App_vue__["a" /* default */]),
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App_vue__["a" /* default */] }
})


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(77);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11), __webpack_require__(78)))

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(25);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_510b8a63_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(667);
function injectStyle (ssrContext) {
  __webpack_require__(80)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_510b8a63_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("3327068b", content, true, {});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports
exports.i(__webpack_require__(82), "");
exports.i(__webpack_require__(89), "");
exports.i(__webpack_require__(95), "");
exports.i(__webpack_require__(101), "");
exports.i(__webpack_require__(600), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800);", ""]);

// module
exports.push([module.i, "\n/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */h1{font-size:2em;margin:.67em 0}pre{font-family:monospace,monospace;font-size:1em}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}code,kbd,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{font-size:100%;line-height:1.15}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;display:table}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=search]{-webkit-appearance:textfield}[type=search]::-webkit-search-decoration{-webkit-appearance:none}details{display:block}[hidden]{display:none}/*!\n * Bootstrap v4.0.0-beta.3 (https://getbootstrap.com)\n * Copyright 2011-2017 The Bootstrap Authors\n * Copyright 2011-2017 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#868e96;--gray-dark:#343a40;--primary:#007bff;--secondary:#868e96;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0)}@-ms-viewport{width:device-width}article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0}address{font-style:normal;line-height:inherit}address,dl,ol,ul{margin-bottom:1rem}dl,ol,ul{margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg:not(:root){overflow:hidden}[role=button],a,area,button,input:not([type=range]),label,select,summary,textarea{touch-action:manipulation}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#868e96;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem}.display-1,.display-2{font-weight:300;line-height:1.2}.display-2{font-size:5.5rem}.display-3{font-size:4.5rem}.display-3,.display-4{font-weight:300;line-height:1.2}.display-4{font-size:3.5rem}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#868e96}.blockquote-footer:before{content:\"\\2014   \\A0\"}.img-fluid,.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#868e96}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col-auto,.col-lg,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-auto,.col-md,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md-auto,.col-sm,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:none}.col-1{flex:0 0 8.33333%;max-width:8.33333%}.col-2{flex:0 0 16.66667%;max-width:16.66667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.33333%;max-width:33.33333%}.col-5{flex:0 0 41.66667%;max-width:41.66667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.33333%;max-width:58.33333%}.col-8{flex:0 0 66.66667%;max-width:66.66667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.33333%;max-width:83.33333%}.col-11{flex:0 0 91.66667%;max-width:91.66667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:none}.col-sm-1{flex:0 0 8.33333%;max-width:8.33333%}.col-sm-2{flex:0 0 16.66667%;max-width:16.66667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.33333%;max-width:33.33333%}.col-sm-5{flex:0 0 41.66667%;max-width:41.66667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.33333%;max-width:58.33333%}.col-sm-8{flex:0 0 66.66667%;max-width:66.66667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.33333%;max-width:83.33333%}.col-sm-11{flex:0 0 91.66667%;max-width:91.66667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:none}.col-md-1{flex:0 0 8.33333%;max-width:8.33333%}.col-md-2{flex:0 0 16.66667%;max-width:16.66667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.33333%;max-width:33.33333%}.col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.33333%;max-width:58.33333%}.col-md-8{flex:0 0 66.66667%;max-width:66.66667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.33333%;max-width:83.33333%}.col-md-11{flex:0 0 91.66667%;max-width:91.66667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:none}.col-lg-1{flex:0 0 8.33333%;max-width:8.33333%}.col-lg-2{flex:0 0 16.66667%;max-width:16.66667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.33333%;max-width:33.33333%}.col-lg-5{flex:0 0 41.66667%;max-width:41.66667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.33333%;max-width:58.33333%}.col-lg-8{flex:0 0 66.66667%;max-width:66.66667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.33333%;max-width:83.33333%}.col-lg-11{flex:0 0 91.66667%;max-width:91.66667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:none}.col-xl-1{flex:0 0 8.33333%;max-width:8.33333%}.col-xl-2{flex:0 0 16.66667%;max-width:16.66667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.33333%;max-width:33.33333%}.col-xl-5{flex:0 0 41.66667%;max-width:41.66667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.33333%;max-width:58.33333%}.col-xl-8{flex:0 0 66.66667%;max-width:66.66667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.33333%;max-width:83.33333%}.col-xl-11{flex:0 0 91.66667%;max-width:91.66667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}}.table{width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered,.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#dddfe2}.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#cfd2d6}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th,.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr:hover{background-color:hsla(0,0%,100%,.075)}@media (max-width:575.99px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.99px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.99px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.99px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::placeholder{color:#868e96;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm,.input-group-lg>.form-control-plaintext.form-control,.input-group-lg>.input-group-append>.form-control-plaintext.btn,.input-group-lg>.input-group-append>.form-control-plaintext.input-group-text,.input-group-lg>.input-group-prepend>.form-control-plaintext.btn,.input-group-lg>.input-group-prepend>.form-control-plaintext.input-group-text,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.input-group-append>.form-control-plaintext.btn,.input-group-sm>.input-group-append>.form-control-plaintext.input-group-text,.input-group-sm>.input-group-prepend>.form-control-plaintext.btn,.input-group-sm>.input-group-prepend>.form-control-plaintext.input-group-text{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.875rem + 2px)}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label{color:#868e96}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;width:250px;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(40,167,69,.8);border-radius:.2rem}.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#28a745}.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.form-check-input.is-valid~.form-check-label,.was-validated .custom-control-input:valid~.custom-control-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before{background-color:#71dd8a}.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before{background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(40,167,69,.25)}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid~.custom-file-label:before,.was-validated .custom-file-input:valid~.custom-file-label:before{border-color:inherit}.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip{display:block}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;width:250px;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(220,53,69,.8);border-radius:.2rem}.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#dc3545}.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.form-check-input.is-invalid~.form-check-label,.was-validated .custom-control-input:invalid~.custom-control-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before{background-color:#efa2a9}.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before{background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(220,53,69,.25)}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-label:before,.was-validated .custom-file-input:invalid~.custom-file-label:before{border-color:inherit}.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip{display:block}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{justify-content:center}.form-inline .form-group,.form-inline label{display:flex;align-items:center;margin-bottom:0}.form-inline .form-group{flex:0 0 auto;flex-flow:row wrap}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.btn:focus,.btn:hover{text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not([disabled]):not(.disabled){cursor:pointer}.btn:not([disabled]):not(.disabled).active,.btn:not([disabled]):not(.disabled):active{background-image:none}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-primary.disabled,.btn-primary:disabled{background-color:#007bff;border-color:#007bff}.btn-primary:not([disabled]):not(.disabled).active,.btn-primary:not([disabled]):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not([disabled]):not(.disabled).active:focus,.btn-primary:not([disabled]):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-secondary{color:#fff;background-color:#868e96;border-color:#868e96}.btn-secondary:hover{color:#fff;background-color:#727b84;border-color:#6c757d}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem hsla(210,7%,56%,.5)}.btn-secondary.disabled,.btn-secondary:disabled{background-color:#868e96;border-color:#868e96}.btn-secondary:not([disabled]):not(.disabled).active,.btn-secondary:not([disabled]):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#666e76}.btn-secondary:not([disabled]):not(.disabled).active:focus,.btn-secondary:not([disabled]):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem hsla(210,7%,56%,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-success.disabled,.btn-success:disabled{background-color:#28a745;border-color:#28a745}.btn-success:not([disabled]):not(.disabled).active,.btn-success:not([disabled]):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not([disabled]):not(.disabled).active:focus,.btn-success:not([disabled]):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-info.disabled,.btn-info:disabled{background-color:#17a2b8;border-color:#17a2b8}.btn-info:not([disabled]):not(.disabled).active,.btn-info:not([disabled]):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not([disabled]):not(.disabled).active:focus,.btn-info:not([disabled]):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-warning.disabled,.btn-warning:disabled{background-color:#ffc107;border-color:#ffc107}.btn-warning:not([disabled]):not(.disabled).active,.btn-warning:not([disabled]):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not([disabled]):not(.disabled).active:focus,.btn-warning:not([disabled]):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-danger.disabled,.btn-danger:disabled{background-color:#dc3545;border-color:#dc3545}.btn-danger:not([disabled]):not(.disabled).active,.btn-danger:not([disabled]):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not([disabled]):not(.disabled).active:focus,.btn-danger:not([disabled]):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-light.disabled,.btn-light:disabled{background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not([disabled]):not(.disabled).active,.btn-light:not([disabled]):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not([disabled]):not(.disabled).active:focus,.btn-light:not([disabled]):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-dark.disabled,.btn-dark:disabled{background-color:#343a40;border-color:#343a40}.btn-dark:not([disabled]):not(.disabled).active,.btn-dark:not([disabled]):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not([disabled]):not(.disabled).active:focus,.btn-dark:not([disabled]):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-primary{color:#007bff;background-color:transparent;background-image:none;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not([disabled]):not(.disabled).active,.btn-outline-primary:not([disabled]):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#212529;background-color:#007bff;border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#868e96;background-color:transparent;background-image:none;border-color:#868e96}.btn-outline-secondary:hover{color:#fff;background-color:#868e96;border-color:#868e96}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem hsla(210,7%,56%,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#868e96;background-color:transparent}.btn-outline-secondary:not([disabled]):not(.disabled).active,.btn-outline-secondary:not([disabled]):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#212529;background-color:#868e96;border-color:#868e96;box-shadow:0 0 0 .2rem hsla(210,7%,56%,.5)}.btn-outline-success{color:#28a745;background-color:transparent;background-image:none;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not([disabled]):not(.disabled).active,.btn-outline-success:not([disabled]):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#212529;background-color:#28a745;border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not([disabled]):not(.disabled).active,.btn-outline-info:not([disabled]):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#212529;background-color:#17a2b8;border-color:#17a2b8;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not([disabled]):not(.disabled).active,.btn-outline-warning:not([disabled]):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not([disabled]):not(.disabled).active,.btn-outline-danger:not([disabled]):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#212529;background-color:#dc3545;border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;background-color:transparent;background-image:none;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not([disabled]):not(.disabled).active,.btn-outline-light:not([disabled]):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#fff;background-color:#f8f9fa;border-color:#f8f9fa;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;background-color:transparent;background-image:none;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not([disabled]):not(.disabled).active,.btn-outline-dark:not([disabled]):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#212529;background-color:#343a40;border-color:#343a40;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;background-color:transparent}.btn-link:hover{color:#0056b3;background-color:transparent}.btn-link.focus,.btn-link:focus,.btn-link:hover{text-decoration:underline;border-color:transparent}.btn-link.focus,.btn-link:focus{box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#868e96}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;transition:opacity .15s linear}.fade.show{opacity:1}.collapse{display:none}.collapse.show{display:block}tr.collapse.show{display:table-row}tbody.collapse.show{display:table-row-group}.collapsing{height:0;overflow:hidden;transition:height .35s ease}.collapsing,.dropdown,.dropup{position:relative}.dropdown-toggle:after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropup .dropdown-menu{margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle:after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-menu{margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle:after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty:after{margin-left:0}.dropright .dropdown-toggle:after{vertical-align:0}.dropleft .dropdown-menu{margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle:after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";display:none}.dropleft .dropdown-toggle:before{display:inline-block;width:0;height:0;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty:after{margin-left:0}.dropleft .dropdown-toggle:before{vertical-align:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#868e96;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#868e96;white-space:nowrap}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:0 1 auto}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group,.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split:after{margin-left:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio],.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group .custom-file,.input-group .custom-select,.input-group .form-control{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group .custom-file:focus,.input-group .custom-select:focus,.input-group .form-control:focus{z-index:3}.input-group .custom-file+.form-control,.input-group .custom-select+.form-control,.input-group .form-control+.form-control{margin-left:-1px}.input-group .custom-select:not(:last-child),.input-group .form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group .custom-select:not(:first-child),.input-group .form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group .custom-file{display:flex;align-items:center}.input-group .custom-file:not(:last-child) .custom-file-control,.input-group .custom-file:not(:last-child) .custom-file-control:before{border-top-right-radius:0;border-bottom-right-radius:0}.input-group .custom-file:not(:first-child) .custom-file-control,.input-group .custom-file:not(:first-child) .custom-file-control:before{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:flex;align-items:center}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-label:before{color:#fff;background-color:#007bff}.custom-control-input:focus~.custom-control-label:before{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:active~.custom-control-label:before{color:#fff;background-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label{color:#868e96}.custom-control-input:disabled~.custom-control-label:before{background-color:#e9ecef}.custom-control-label{margin-bottom:0}.custom-control-label:before{pointer-events:none;user-select:none;background-color:#dee2e6}.custom-control-label:after,.custom-control-label:before{position:absolute;top:.25rem;left:0;display:block;width:1rem;height:1rem;content:\"\"}.custom-control-label:after{background-repeat:no-repeat;background-position:50%;background-size:50% 50%}.custom-checkbox .custom-control-label:before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label:before{background-color:#007bff}.custom-checkbox .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before{background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-radio .custom-control-label:before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label:before{background-color:#007bff}.custom-radio .custom-control-input:checked~.custom-control-label:after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-select{display:inline-block;width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;background-size:8px 10px;border:1px solid #ced4da;border-radius:.25rem;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#868e96;background-color:#e9ecef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{height:calc(1.8125rem + 2px);font-size:75%}.custom-select-lg,.custom-select-sm{padding-top:.375rem;padding-bottom:.375rem}.custom-select-lg{height:calc(2.875rem + 2px);font-size:125%}.custom-file{display:inline-block;margin-bottom:0}.custom-file,.custom-file-input{position:relative;width:100%;height:calc(2.25rem + 2px)}.custom-file-input{z-index:2;margin:0;opacity:0}.custom-file-input:focus~.custom-file-control{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:focus~.custom-file-control:before{border-color:#80bdff}.custom-file-input:lang(en)~.custom-file-label:after{content:\"Browse\"}.custom-file-label{left:0;z-index:1;height:calc(2.25rem + 2px);background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label,.custom-file-label:after{position:absolute;top:0;right:0;padding:.375rem .75rem;line-height:1.5;color:#495057}.custom-file-label:after{bottom:0;z-index:3;display:block;height:calc((2.25rem + 2px) - 1px * 2);content:\"Browse\";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#868e96}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#868e96;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:.5rem 1rem}.navbar,.navbar>.container,.navbar>.container-fluid{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler:not([disabled]):not(.disabled){cursor:pointer}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat 50%;background-size:100% 100%}@media (max-width:575.99px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:767.99px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:991.99px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:1199.99px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .dropup .dropdown-menu{top:auto;bottom:100%}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .dropup .dropdown-menu{top:auto;bottom:100%}.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0,0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:hsla(0,0%,100%,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:hsla(0,0%,100%,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:hsla(0,0%,100%,.5);border-color:hsla(0,0%,100%,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:hsla(0,0%,100%,.5)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-bottom:-.75rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:flex;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:flex;flex:1 0 0%;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:flex;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child),.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{column-count:3;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%}}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item:before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#868e96;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover:before{text-decoration:underline;text-decoration:none}.breadcrumb-item.active{color:#868e96}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:focus,.page-link:hover{color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:not([disabled]):not(.disabled){cursor:pointer}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#868e96;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}.badge-primary[href]:focus,.badge-primary[href]:hover{color:#fff;text-decoration:none;background-color:#0062cc}.badge-secondary{color:#fff;background-color:#868e96}.badge-secondary[href]:focus,.badge-secondary[href]:hover{color:#fff;text-decoration:none;background-color:#6c757d}.badge-success{color:#fff;background-color:#28a745}.badge-success[href]:focus,.badge-success[href]:hover{color:#fff;text-decoration:none;background-color:#1e7e34}.badge-info{color:#fff;background-color:#17a2b8}.badge-info[href]:focus,.badge-info[href]:hover{color:#fff;text-decoration:none;background-color:#117a8b}.badge-warning{color:#212529;background-color:#ffc107}.badge-warning[href]:focus,.badge-warning[href]:hover{color:#212529;text-decoration:none;background-color:#d39e00}.badge-danger{color:#fff;background-color:#dc3545}.badge-danger[href]:focus,.badge-danger[href]:hover{color:#fff;text-decoration:none;background-color:#bd2130}.badge-light{color:#212529;background-color:#f8f9fa}.badge-light[href]:focus,.badge-light[href]:hover{color:#212529;text-decoration:none;background-color:#dae0e5}.badge-dark{color:#fff;background-color:#343a40}.badge-dark[href]:focus,.badge-dark[href]:hover{color:#fff;text-decoration:none;background-color:#1d2124}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#464a4e;background-color:#e7e8ea;border-color:#dddfe2}.alert-secondary hr{border-top-color:#cfd2d6}.alert-secondary .alert-link{color:#2e3133}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@keyframes progress-bar-stripes{0%{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;color:#fff;text-align:center;background-color:#007bff;transition:width .6s ease}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:1rem 1rem}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{z-index:1;text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#868e96;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}a.list-group-item-primary,button.list-group-item-primary{color:#004085}a.list-group-item-primary:focus,a.list-group-item-primary:hover,button.list-group-item-primary:focus,button.list-group-item-primary:hover{color:#004085;background-color:#9fcdff}a.list-group-item-primary.active,button.list-group-item-primary.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#464a4e;background-color:#dddfe2}a.list-group-item-secondary,button.list-group-item-secondary{color:#464a4e}a.list-group-item-secondary:focus,a.list-group-item-secondary:hover,button.list-group-item-secondary:focus,button.list-group-item-secondary:hover{color:#464a4e;background-color:#cfd2d6}a.list-group-item-secondary.active,button.list-group-item-secondary.active{color:#fff;background-color:#464a4e;border-color:#464a4e}.list-group-item-success{color:#155724;background-color:#c3e6cb}a.list-group-item-success,button.list-group-item-success{color:#155724}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#155724;background-color:#b1dfbb}a.list-group-item-success.active,button.list-group-item-success.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}a.list-group-item-info,button.list-group-item-info{color:#0c5460}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#0c5460;background-color:#abdde5}a.list-group-item-info.active,button.list-group-item-info.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}a.list-group-item-warning,button.list-group-item-warning{color:#856404}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#856404;background-color:#ffe8a1}a.list-group-item-warning.active,button.list-group-item-warning.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}a.list-group-item-danger,button.list-group-item-danger{color:#721c24}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#721c24;background-color:#f1b0b7}a.list-group-item-danger.active,button.list-group-item-danger.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}a.list-group-item-light,button.list-group-item-light{color:#818182}a.list-group-item-light:focus,a.list-group-item-light:hover,button.list-group-item-light:focus,button.list-group-item-light:hover{color:#818182;background-color:#ececf6}a.list-group-item-light.active,button.list-group-item-light.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}a.list-group-item-dark,button.list-group-item-dark{color:#1b1e21}a.list-group-item-dark:focus,a.list-group-item-dark:hover,button.list-group-item-dark:focus,button.list-group-item-dark:hover{color:#1b1e21;background-color:#b9bbbe}a.list-group-item-dark.active,button.list-group-item-dark.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:focus,.close:hover{color:#000;text-decoration:none;opacity:.75}.close:not([disabled]):not(.disabled){cursor:pointer}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none}.modal,.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;outline:0}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translateY(-25%)}.modal.show .modal-dialog{transform:translate(0)}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;align-items:center;justify-content:flex-end;padding:1rem;border-top:1px solid #e9ecef}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:800px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow:before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{top:0;left:0;z-index:1060;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover,.popover .arrow{position:absolute;display:block}.popover .arrow{width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow:after,.popover .arrow:before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow{bottom:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:after,.bs-popover-top .arrow:before{border-width:.5rem .5rem 0}.bs-popover-auto[x-placement^=top] .arrow:before,.bs-popover-top .arrow:before{bottom:0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top] .arrow:after,.bs-popover-top .arrow:after{bottom:1px;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:after,.bs-popover-right .arrow:before{border-width:.5rem .5rem .5rem 0}.bs-popover-auto[x-placement^=right] .arrow:before,.bs-popover-right .arrow:before{left:0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right] .arrow:after,.bs-popover-right .arrow:after{left:1px;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow{top:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:after,.bs-popover-bottom .arrow:before{border-width:0 .5rem .5rem}.bs-popover-auto[x-placement^=bottom] .arrow:before,.bs-popover-bottom .arrow:before{top:0;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom] .arrow:after,.bs-popover-bottom .arrow:after{top:1px;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:after,.bs-popover-left .arrow:before{border-width:.5rem 0 .5rem .5rem}.bs-popover-auto[x-placement^=left] .arrow:before,.bs-popover-left .arrow:before{right:0;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left] .arrow:after,.bs-popover-left .arrow:after{right:1px;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-item{position:relative;display:none;align-items:center;width:100%;transition:transform .6s ease;backface-visibility:hidden;perspective:1000px}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.carousel-item-next,.carousel-item-prev{position:absolute;top:0}.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{transform:translateX(0)}@supports (transform-style:preserve-3d){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{transform:translateZ(0)}}.active.carousel-item-right,.carousel-item-next{transform:translateX(100%)}@supports (transform-style:preserve-3d){.active.carousel-item-right,.carousel-item-next{transform:translate3d(100%,0,0)}}.active.carousel-item-left,.carousel-item-prev{transform:translateX(-100%)}@supports (transform-style:preserve-3d){.active.carousel-item-left,.carousel-item-prev{transform:translate3d(-100%,0,0)}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat 50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{position:relative;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;background-color:hsla(0,0%,100%,.5)}.carousel-indicators li:before{top:-10px}.carousel-indicators li:after,.carousel-indicators li:before{position:absolute;left:0;display:inline-block;width:100%;height:10px;content:\"\"}.carousel-indicators li:after{bottom:-10px}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#868e96!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#6c757d!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #e9ecef!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#868e96!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important}.rounded-right,.rounded-top{border-top-right-radius:.25rem!important}.rounded-bottom,.rounded-right{border-bottom-right-radius:.25rem!important}.rounded-bottom,.rounded-left{border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important}.rounded-circle{border-radius:50%!important}.rounded-0{border-radius:0!important}.clearfix:after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}.d-print-block{display:none!important}@media print{.d-print-block{display:block!important}}.d-print-inline{display:none!important}@media print{.d-print-inline{display:inline!important}}.d-print-inline-block{display:none!important}@media print{.d-print-inline-block{display:inline-block!important}}@media print{.d-print-none{display:none!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9:before{padding-top:42.85714%}.embed-responsive-16by9:before{padding-top:56.25%}.embed-responsive-4by3:before{padding-top:75%}.embed-responsive-1by1:before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.fixed-top{top:0}.fixed-bottom,.fixed-top{position:fixed;right:0;left:0;z-index:1030}.fixed-bottom{bottom:0}@supports (position:sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;clip-path:inset(50%);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal;clip-path:none}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0062cc!important}.text-secondary{color:#868e96!important}a.text-secondary:focus,a.text-secondary:hover{color:#6c757d!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#1e7e34!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#117a8b!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#d39e00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#bd2130!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#dae0e5!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#1d2124!important}.text-muted{color:#868e96!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,:after,:before{text-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}abbr[title]:after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}.gaugejs-wrap{position:relative;margin:0 auto}.gaugejs-wrap canvas.gaugejs{width:100%!important;height:auto!important}.gaugejs-wrap.sparkline .value,.gaugejs-wrap i{top:50%;display:block;width:100%;text-align:center}.gaugejs-wrap i{position:absolute;left:0;z-index:1000;margin-top:-15px;font-size:30px}.gaugejs-wrap.type-2 .value{display:block;margin-top:-85px}.gaugejs-wrap.type-2 label{display:block;margin-top:-10px;font-size:10px;font-weight:600;color:#9da0a8;text-transform:uppercase}.gaugejs-wrap.sparkline{position:relative}.gaugejs-wrap.sparkline .value{position:absolute;margin-top:-5px;font-size:10px;line-height:10px}.switch.switch-default{position:relative;display:inline-block;vertical-align:top;width:40px;height:24px;background-color:transparent;cursor:pointer}.switch.switch-default .switch-input{position:absolute;top:0;left:0;opacity:0}.switch.switch-default .switch-label{position:relative;display:block;height:inherit;font-size:10px;font-weight:600;text-transform:uppercase;background-color:#fff;border:1px solid #e9ecef;border-radius:2px;transition:opacity background .15s ease-out}.switch.switch-default .switch-input:checked~.switch-label:before{opacity:0}.switch.switch-default .switch-input:checked~.switch-label:after{opacity:1}.switch.switch-default .switch-handle{position:absolute;top:2px;left:2px;width:20px;height:20px;background:#fff;border:1px solid #e9ecef;border-radius:1px;transition:left .15s ease-out}.switch.switch-default .switch-input:checked~.switch-handle{left:18px}.switch.switch-default.switch-lg{width:48px;height:28px}.switch.switch-default.switch-lg .switch-label{font-size:12px}.switch.switch-default.switch-lg .switch-handle{width:24px;height:24px}.switch.switch-default.switch-lg .switch-input:checked~.switch-handle{left:22px}.switch.switch-default.switch-sm{width:32px;height:20px}.switch.switch-default.switch-sm .switch-label{font-size:8px}.switch.switch-default.switch-sm .switch-handle{width:16px;height:16px}.switch.switch-default.switch-sm .switch-input:checked~.switch-handle{left:14px}.switch.switch-default.switch-xs{width:24px;height:16px}.switch.switch-default.switch-xs .switch-label{font-size:7px}.switch.switch-default.switch-xs .switch-handle{width:12px;height:12px}.switch.switch-default.switch-xs .switch-input:checked~.switch-handle{left:10px}.switch.switch-text{position:relative;display:inline-block;vertical-align:top;width:48px;height:24px;background-color:transparent;cursor:pointer}.switch.switch-text .switch-input{position:absolute;top:0;left:0;opacity:0}.switch.switch-text .switch-label{position:relative;display:block;height:inherit;font-size:10px;font-weight:600;text-transform:uppercase;background-color:#fff;border:1px solid #e9ecef;border-radius:2px;transition:opacity background .15s ease-out}.switch.switch-text .switch-label:after,.switch.switch-text .switch-label:before{position:absolute;top:50%;width:50%;margin-top:-.5em;line-height:1;text-align:center;transition:inherit}.switch.switch-text .switch-label:before{right:1px;color:#e9ecef;content:attr(data-off)}.switch.switch-text .switch-label:after{left:1px;color:#fff;content:attr(data-on);opacity:0}.switch.switch-text .switch-input:checked~.switch-label:before{opacity:0}.switch.switch-text .switch-input:checked~.switch-label:after{opacity:1}.switch.switch-text .switch-handle{position:absolute;top:2px;left:2px;width:20px;height:20px;background:#fff;border:1px solid #e9ecef;border-radius:1px;transition:left .15s ease-out}.switch.switch-text .switch-input:checked~.switch-handle{left:26px}.switch.switch-text.switch-lg{width:56px;height:28px}.switch.switch-text.switch-lg .switch-label{font-size:12px}.switch.switch-text.switch-lg .switch-handle{width:24px;height:24px}.switch.switch-text.switch-lg .switch-input:checked~.switch-handle{left:30px}.switch.switch-text.switch-sm{width:40px;height:20px}.switch.switch-text.switch-sm .switch-label{font-size:8px}.switch.switch-text.switch-sm .switch-handle{width:16px;height:16px}.switch.switch-text.switch-sm .switch-input:checked~.switch-handle{left:22px}.switch.switch-text.switch-xs{width:32px;height:16px}.switch.switch-text.switch-xs .switch-label{font-size:7px}.switch.switch-text.switch-xs .switch-handle{width:12px;height:12px}.switch.switch-text.switch-xs .switch-input:checked~.switch-handle{left:18px}.switch.switch-icon{position:relative;display:inline-block;vertical-align:top;width:48px;height:24px;background-color:transparent;cursor:pointer}.switch.switch-icon .switch-input{position:absolute;top:0;left:0;opacity:0}.switch.switch-icon .switch-label{position:relative;display:block;height:inherit;font-family:FontAwesome;font-size:10px;font-weight:600;text-transform:uppercase;background-color:#fff;border:1px solid #e9ecef;border-radius:2px;transition:opacity background .15s ease-out}.switch.switch-icon .switch-label:after,.switch.switch-icon .switch-label:before{position:absolute;top:50%;width:50%;margin-top:-.5em;line-height:1;text-align:center;transition:inherit}.switch.switch-icon .switch-label:before{right:1px;color:#e9ecef;content:attr(data-off)}.switch.switch-icon .switch-label:after{left:1px;color:#fff;content:attr(data-on);opacity:0}.switch.switch-icon .switch-input:checked~.switch-label:before{opacity:0}.switch.switch-icon .switch-input:checked~.switch-label:after{opacity:1}.switch.switch-icon .switch-handle{position:absolute;top:2px;left:2px;width:20px;height:20px;background:#fff;border:1px solid #e9ecef;border-radius:1px;transition:left .15s ease-out}.switch.switch-icon .switch-input:checked~.switch-handle{left:26px}.switch.switch-icon.switch-lg{width:56px;height:28px}.switch.switch-icon.switch-lg .switch-label{font-size:12px}.switch.switch-icon.switch-lg .switch-handle{width:24px;height:24px}.switch.switch-icon.switch-lg .switch-input:checked~.switch-handle{left:30px}.switch.switch-icon.switch-sm{width:40px;height:20px}.switch.switch-icon.switch-sm .switch-label{font-size:8px}.switch.switch-icon.switch-sm .switch-handle{width:16px;height:16px}.switch.switch-icon.switch-sm .switch-input:checked~.switch-handle{left:22px}.switch.switch-icon.switch-xs{width:32px;height:16px}.switch.switch-icon.switch-xs .switch-label{font-size:7px}.switch.switch-icon.switch-xs .switch-handle{width:12px;height:12px}.switch.switch-icon.switch-xs .switch-input:checked~.switch-handle{left:18px}.switch.switch-3d{position:relative;display:inline-block;vertical-align:top;width:40px;height:24px;background-color:transparent;cursor:pointer}.switch.switch-3d .switch-input{position:absolute;top:0;left:0;opacity:0}.switch.switch-3d .switch-label{position:relative;display:block;height:inherit;font-size:10px;font-weight:600;text-transform:uppercase;background-color:#f8f9fa;border:1px solid #e9ecef;border-radius:2px;transition:opacity background .15s ease-out}.switch.switch-3d .switch-input:checked~.switch-label:before{opacity:0}.switch.switch-3d .switch-input:checked~.switch-label:after{opacity:1}.switch.switch-3d .switch-handle{position:absolute;top:0;left:0;width:24px;height:24px;background:#fff;border:1px solid #e9ecef;border-radius:1px;transition:left .15s ease-out;border:0;box-shadow:0 2px 5px rgba(0,0,0,.3)}.switch.switch-3d .switch-input:checked~.switch-handle{left:16px}.switch.switch-3d.switch-lg{width:48px;height:28px}.switch.switch-3d.switch-lg .switch-label{font-size:12px}.switch.switch-3d.switch-lg .switch-handle{width:28px;height:28px}.switch.switch-3d.switch-lg .switch-input:checked~.switch-handle{left:20px}.switch.switch-3d.switch-sm{width:32px;height:20px}.switch.switch-3d.switch-sm .switch-label{font-size:8px}.switch.switch-3d.switch-sm .switch-handle{width:20px;height:20px}.switch.switch-3d.switch-sm .switch-input:checked~.switch-handle{left:12px}.switch.switch-3d.switch-xs{width:24px;height:16px}.switch.switch-3d.switch-xs .switch-label{font-size:7px}.switch.switch-3d.switch-xs .switch-handle{width:16px;height:16px}.switch.switch-3d.switch-xs .switch-input:checked~.switch-handle{left:8px}.switch-pill .switch-handle,.switch-pill .switch-label,.switch.switch-3d .switch-handle,.switch.switch-3d .switch-label{border-radius:50em!important}.switch-pill .switch-label:before,.switch.switch-3d .switch-label:before{right:2px!important}.switch-pill .switch-label:after,.switch.switch-3d .switch-label:after{left:2px!important}.switch-primary>.switch-input:checked~.switch-label{background:#007bff!important;border-color:#0062cc}.switch-primary>.switch-input:checked~.switch-handle{border-color:#0062cc}.switch-primary-outline>.switch-input:checked~.switch-label{background:#fff!important;border-color:#007bff}.switch-primary-outline>.switch-input:checked~.switch-label:after{color:#007bff}.switch-primary-outline>.switch-input:checked~.switch-handle{border-color:#007bff}.switch-primary-outline-alt>.switch-input:checked~.switch-label{background:#fff!important;border-color:#007bff}.switch-primary-outline-alt>.switch-input:checked~.switch-label:after{color:#007bff}.switch-primary-outline-alt>.switch-input:checked~.switch-handle{background:#007bff!important;border-color:#007bff}.switch-secondary>.switch-input:checked~.switch-label{background:#868e96!important;border-color:#6c757d}.switch-secondary>.switch-input:checked~.switch-handle{border-color:#6c757d}.switch-secondary-outline>.switch-input:checked~.switch-label{background:#fff!important;border-color:#868e96}.switch-secondary-outline>.switch-input:checked~.switch-label:after{color:#868e96}.switch-secondary-outline>.switch-input:checked~.switch-handle{border-color:#868e96}.switch-secondary-outline-alt>.switch-input:checked~.switch-label{background:#fff!important;border-color:#868e96}.switch-secondary-outline-alt>.switch-input:checked~.switch-label:after{color:#868e96}.switch-secondary-outline-alt>.switch-input:checked~.switch-handle{background:#868e96!important;border-color:#868e96}.switch-success>.switch-input:checked~.switch-label{background:#28a745!important;border-color:#1e7e34}.switch-success>.switch-input:checked~.switch-handle{border-color:#1e7e34}.switch-success-outline>.switch-input:checked~.switch-label{background:#fff!important;border-color:#28a745}.switch-success-outline>.switch-input:checked~.switch-label:after{color:#28a745}.switch-success-outline>.switch-input:checked~.switch-handle{border-color:#28a745}.switch-success-outline-alt>.switch-input:checked~.switch-label{background:#fff!important;border-color:#28a745}.switch-success-outline-alt>.switch-input:checked~.switch-label:after{color:#28a745}.switch-success-outline-alt>.switch-input:checked~.switch-handle{background:#28a745!important;border-color:#28a745}.switch-info>.switch-input:checked~.switch-label{background:#17a2b8!important;border-color:#117a8b}.switch-info>.switch-input:checked~.switch-handle{border-color:#117a8b}.switch-info-outline>.switch-input:checked~.switch-label{background:#fff!important;border-color:#17a2b8}.switch-info-outline>.switch-input:checked~.switch-label:after{color:#17a2b8}.switch-info-outline>.switch-input:checked~.switch-handle{border-color:#17a2b8}.switch-info-outline-alt>.switch-input:checked~.switch-label{background:#fff!important;border-color:#17a2b8}.switch-info-outline-alt>.switch-input:checked~.switch-label:after{color:#17a2b8}.switch-info-outline-alt>.switch-input:checked~.switch-handle{background:#17a2b8!important;border-color:#17a2b8}.switch-warning>.switch-input:checked~.switch-label{background:#ffc107!important;border-color:#d39e00}.switch-warning>.switch-input:checked~.switch-handle{border-color:#d39e00}.switch-warning-outline>.switch-input:checked~.switch-label{background:#fff!important;border-color:#ffc107}.switch-warning-outline>.switch-input:checked~.switch-label:after{color:#ffc107}.switch-warning-outline>.switch-input:checked~.switch-handle{border-color:#ffc107}.switch-warning-outline-alt>.switch-input:checked~.switch-label{background:#fff!important;border-color:#ffc107}.switch-warning-outline-alt>.switch-input:checked~.switch-label:after{color:#ffc107}.switch-warning-outline-alt>.switch-input:checked~.switch-handle{background:#ffc107!important;border-color:#ffc107}.switch-danger>.switch-input:checked~.switch-label{background:#dc3545!important;border-color:#bd2130}.switch-danger>.switch-input:checked~.switch-handle{border-color:#bd2130}.switch-danger-outline>.switch-input:checked~.switch-label{background:#fff!important;border-color:#dc3545}.switch-danger-outline>.switch-input:checked~.switch-label:after{color:#dc3545}.switch-danger-outline>.switch-input:checked~.switch-handle{border-color:#dc3545}.switch-danger-outline-alt>.switch-input:checked~.switch-label{background:#fff!important;border-color:#dc3545}.switch-danger-outline-alt>.switch-input:checked~.switch-label:after{color:#dc3545}.switch-danger-outline-alt>.switch-input:checked~.switch-handle{background:#dc3545!important;border-color:#dc3545}.switch-light>.switch-input:checked~.switch-label{background:#f8f9fa!important;border-color:#dae0e5}.switch-light>.switch-input:checked~.switch-handle{border-color:#dae0e5}.switch-light-outline>.switch-input:checked~.switch-label{background:#fff!important;border-color:#f8f9fa}.switch-light-outline>.switch-input:checked~.switch-label:after{color:#f8f9fa}.switch-light-outline>.switch-input:checked~.switch-handle{border-color:#f8f9fa}.switch-light-outline-alt>.switch-input:checked~.switch-label{background:#fff!important;border-color:#f8f9fa}.switch-light-outline-alt>.switch-input:checked~.switch-label:after{color:#f8f9fa}.switch-light-outline-alt>.switch-input:checked~.switch-handle{background:#f8f9fa!important;border-color:#f8f9fa}.switch-dark>.switch-input:checked~.switch-label{background:#343a40!important;border-color:#1d2124}.switch-dark>.switch-input:checked~.switch-handle{border-color:#1d2124}.switch-dark-outline>.switch-input:checked~.switch-label{background:#fff!important;border-color:#343a40}.switch-dark-outline>.switch-input:checked~.switch-label:after{color:#343a40}.switch-dark-outline>.switch-input:checked~.switch-handle{border-color:#343a40}.switch-dark-outline-alt>.switch-input:checked~.switch-label{background:#fff!important;border-color:#343a40}.switch-dark-outline-alt>.switch-input:checked~.switch-label:after{color:#343a40}.switch-dark-outline-alt>.switch-input:checked~.switch-handle{background:#343a40!important;border-color:#343a40}.social-box{min-height:160px;margin-bottom:1.5rem;text-align:center;background:#fff}.social-box i{display:block;margin:-1px -1px 0;font-size:40px;line-height:90px;background:#e9ecef}.social-box .chart-wrapper{height:90px;margin:-90px 0 0}.social-box .chart-wrapper canvas{width:100%!important;height:90px!important}.social-box ul{padding:10px 0;list-style:none}.social-box ul li{display:block;float:left;width:50%;padding-top:10px;font-size:18px}.social-box ul li:first-child{border-right:1px solid #c2cfd6}.social-box ul li strong{display:block;font-size:20px}.social-box ul li span{font-size:18px;font-weight:500;color:#949ca0;text-transform:uppercase}.social-box.facebook i{color:#fff;background:#3b5998}.social-box.twitter i{color:#fff;background:#00aced}.social-box.linkedin i{color:#fff;background:#4875b4}.social-box.google-plus i{color:#fff;background:#d34836}.horizontal-bars{padding:0;margin:0;list-style:none}.horizontal-bars li{position:relative;height:40px;line-height:40px;vertical-align:middle}.horizontal-bars li .title{width:100px;font-size:12px;font-weight:600;color:#868e96;vertical-align:middle}.horizontal-bars li .bars{position:absolute;top:15px;width:100%;padding-left:100px}.horizontal-bars li .bars .progress:first-child{margin-bottom:2px}.horizontal-bars li.legend{text-align:center}.horizontal-bars li.legend .badge{display:inline-block;width:8px;height:8px;padding:0}.horizontal-bars li.divider{height:40px}.horizontal-bars li.divider i{margin:0!important}.horizontal-bars.type-2 li{overflow:hidden}.horizontal-bars.type-2 li i{display:inline-block;margin-right:1rem;margin-left:5px;font-size:18px;line-height:40px}.horizontal-bars.type-2 li .title{display:inline-block;width:auto;margin-top:-9px;font-size:1rem;font-weight:400;line-height:40px;color:#212529}.horizontal-bars.type-2 li .value{float:right;font-weight:600}.horizontal-bars.type-2 li .bars{position:absolute;top:auto;bottom:0;padding:0}.icons-list{padding:0;margin:0;list-style:none}.icons-list li{position:relative;height:40px;vertical-align:middle}.icons-list li i{display:block;float:left;width:35px!important;height:35px!important;margin:2px;line-height:35px!important;text-align:center}.icons-list li .desc{height:40px;margin-left:50px;border-bottom:1px solid #e9ecef}.icons-list li .desc .title{padding:2px 0 0;margin:0}.icons-list li .desc small{display:block;margin-top:-4px;color:#868e96}.icons-list li .value{position:absolute;top:2px;right:45px;text-align:right}.icons-list li .value strong{display:block;margin-top:-3px}.icons-list li .actions{position:absolute;top:-4px;right:10px;width:40px;height:40px;line-height:40px;text-align:center}.icons-list li .actions i{float:none;width:auto;height:auto;padding:0;margin:0;line-height:normal}.icons-list li.divider{height:40px}.icons-list li.divider i{width:auto;height:auto;margin:2px 0 0;font-size:18px}/*!\n * animate.css -http://daneden.me/animate\n * Version - 3.6.0\n * Licensed under the MIT license - http://opensource.org/licenses/MIT\n *\n * Copyright (c) 2018 Daniel Eden\n */.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.pulse{-webkit-animation-name:pulse;animation-name:pulse}@-webkit-keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.shake{-webkit-animation-name:shake;animation-name:shake}@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}.headShake{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake;animation-name:headShake}@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes jello{0%,11.1%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.39062deg) skewY(.39062deg);transform:skewX(.39062deg) skewY(.39062deg)}88.8%{-webkit-transform:skewX(-.19531deg) skewY(-.19531deg);transform:skewX(-.19531deg) skewY(-.19531deg)}}@keyframes jello{0%,11.1%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.39062deg) skewY(.39062deg);transform:skewX(.39062deg) skewY(.39062deg)}88.8%{-webkit-transform:skewX(-.19531deg) skewY(-.19531deg);transform:skewX(-.19531deg) skewY(-.19531deg)}}.jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}.bounceIn{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}.bounceOut{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes flip{0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip}@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX}@-webkit-keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY}@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}@keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}.flipOutX{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}@keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}.flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY}@-webkit-keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}@keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateIn{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn}@-webkit-keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft}@-webkit-keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight}@-webkit-keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft}@-webkit-keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}@keyframes rotateInUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight}@-webkit-keyframes rotateOut{0%{-webkit-transform-origin:center;transform-origin:center;opacity:1}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}@keyframes rotateOut{0%{-webkit-transform-origin:center;transform-origin:center;opacity:1}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut}@-webkit-keyframes rotateOutDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes rotateOutDownLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft}@-webkit-keyframes rotateOutDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutDownRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight}@-webkit-keyframes rotateOutUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutUpLeft{0%{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft}@-webkit-keyframes rotateOutUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}@keyframes rotateOutUpRight{0%{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight}@-webkit-keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}@keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}.hinge{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-name:hinge;animation-name:hinge}@-webkit-keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes jackInTheBox{0%{opacity:0;-webkit-transform:scale(.1) rotate(30deg);transform:scale(.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.jackInTheBox{-webkit-animation-name:jackInTheBox;animation-name:jackInTheBox}@-webkit-keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}@keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}@font-face{font-family:Glyphicons Halflings;src:url(twbs-font-path(\"../assets/fonts/glyphicons-halflings-regular.eot\"));src:url(twbs-font-path(\"../assets/fonts/glyphicons-halflings-regular.eot?#iefix\")) format(\"embedded-opentype\"),url(twbs-font-path(\"../assets/fonts/glyphicons-halflings-regular.woff2\")) format(\"woff2\"),url(twbs-font-path(\"../assets/fonts/glyphicons-halflings-regular.woff\")) format(\"woff\"),url(twbs-font-path(\"../assets/fonts/glyphicons-halflings-regular.ttf\")) format(\"truetype\"),url(twbs-font-path(\"../assets/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular\")) format(\"svg\")}.glyphicon{position:relative;top:1px;display:inline-block;font-family:Glyphicons Halflings;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"*\"}.glyphicon-plus:before{content:\"+\"}.glyphicon-eur:before,.glyphicon-euro:before{content:\"\\20AC\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270F\"}.glyphicon-glass:before{content:\"\\E001\"}.glyphicon-music:before{content:\"\\E002\"}.glyphicon-search:before{content:\"\\E003\"}.glyphicon-heart:before{content:\"\\E005\"}.glyphicon-star:before{content:\"\\E006\"}.glyphicon-star-empty:before{content:\"\\E007\"}.glyphicon-user:before{content:\"\\E008\"}.glyphicon-film:before{content:\"\\E009\"}.glyphicon-th-large:before{content:\"\\E010\"}.glyphicon-th:before{content:\"\\E011\"}.glyphicon-th-list:before{content:\"\\E012\"}.glyphicon-ok:before{content:\"\\E013\"}.glyphicon-remove:before{content:\"\\E014\"}.glyphicon-zoom-in:before{content:\"\\E015\"}.glyphicon-zoom-out:before{content:\"\\E016\"}.glyphicon-off:before{content:\"\\E017\"}.glyphicon-signal:before{content:\"\\E018\"}.glyphicon-cog:before{content:\"\\E019\"}.glyphicon-trash:before{content:\"\\E020\"}.glyphicon-home:before{content:\"\\E021\"}.glyphicon-file:before{content:\"\\E022\"}.glyphicon-time:before{content:\"\\E023\"}.glyphicon-road:before{content:\"\\E024\"}.glyphicon-download-alt:before{content:\"\\E025\"}.glyphicon-download:before{content:\"\\E026\"}.glyphicon-upload:before{content:\"\\E027\"}.glyphicon-inbox:before{content:\"\\E028\"}.glyphicon-play-circle:before{content:\"\\E029\"}.glyphicon-repeat:before{content:\"\\E030\"}.glyphicon-refresh:before{content:\"\\E031\"}.glyphicon-list-alt:before{content:\"\\E032\"}.glyphicon-lock:before{content:\"\\E033\"}.glyphicon-flag:before{content:\"\\E034\"}.glyphicon-headphones:before{content:\"\\E035\"}.glyphicon-volume-off:before{content:\"\\E036\"}.glyphicon-volume-down:before{content:\"\\E037\"}.glyphicon-volume-up:before{content:\"\\E038\"}.glyphicon-qrcode:before{content:\"\\E039\"}.glyphicon-barcode:before{content:\"\\E040\"}.glyphicon-tag:before{content:\"\\E041\"}.glyphicon-tags:before{content:\"\\E042\"}.glyphicon-book:before{content:\"\\E043\"}.glyphicon-bookmark:before{content:\"\\E044\"}.glyphicon-print:before{content:\"\\E045\"}.glyphicon-camera:before{content:\"\\E046\"}.glyphicon-font:before{content:\"\\E047\"}.glyphicon-bold:before{content:\"\\E048\"}.glyphicon-italic:before{content:\"\\E049\"}.glyphicon-text-height:before{content:\"\\E050\"}.glyphicon-text-width:before{content:\"\\E051\"}.glyphicon-align-left:before{content:\"\\E052\"}.glyphicon-align-center:before{content:\"\\E053\"}.glyphicon-align-right:before{content:\"\\E054\"}.glyphicon-align-justify:before{content:\"\\E055\"}.glyphicon-list:before{content:\"\\E056\"}.glyphicon-indent-left:before{content:\"\\E057\"}.glyphicon-indent-right:before{content:\"\\E058\"}.glyphicon-facetime-video:before{content:\"\\E059\"}.glyphicon-picture:before{content:\"\\E060\"}.glyphicon-map-marker:before{content:\"\\E062\"}.glyphicon-adjust:before{content:\"\\E063\"}.glyphicon-tint:before{content:\"\\E064\"}.glyphicon-edit:before{content:\"\\E065\"}.glyphicon-share:before{content:\"\\E066\"}.glyphicon-check:before{content:\"\\E067\"}.glyphicon-move:before{content:\"\\E068\"}.glyphicon-step-backward:before{content:\"\\E069\"}.glyphicon-fast-backward:before{content:\"\\E070\"}.glyphicon-backward:before{content:\"\\E071\"}.glyphicon-play:before{content:\"\\E072\"}.glyphicon-pause:before{content:\"\\E073\"}.glyphicon-stop:before{content:\"\\E074\"}.glyphicon-forward:before{content:\"\\E075\"}.glyphicon-fast-forward:before{content:\"\\E076\"}.glyphicon-step-forward:before{content:\"\\E077\"}.glyphicon-eject:before{content:\"\\E078\"}.glyphicon-chevron-left:before{content:\"\\E079\"}.glyphicon-chevron-right:before{content:\"\\E080\"}.glyphicon-plus-sign:before{content:\"\\E081\"}.glyphicon-minus-sign:before{content:\"\\E082\"}.glyphicon-remove-sign:before{content:\"\\E083\"}.glyphicon-ok-sign:before{content:\"\\E084\"}.glyphicon-question-sign:before{content:\"\\E085\"}.glyphicon-info-sign:before{content:\"\\E086\"}.glyphicon-screenshot:before{content:\"\\E087\"}.glyphicon-remove-circle:before{content:\"\\E088\"}.glyphicon-ok-circle:before{content:\"\\E089\"}.glyphicon-ban-circle:before{content:\"\\E090\"}.glyphicon-arrow-left:before{content:\"\\E091\"}.glyphicon-arrow-right:before{content:\"\\E092\"}.glyphicon-arrow-up:before{content:\"\\E093\"}.glyphicon-arrow-down:before{content:\"\\E094\"}.glyphicon-share-alt:before{content:\"\\E095\"}.glyphicon-resize-full:before{content:\"\\E096\"}.glyphicon-resize-small:before{content:\"\\E097\"}.glyphicon-exclamation-sign:before{content:\"\\E101\"}.glyphicon-gift:before{content:\"\\E102\"}.glyphicon-leaf:before{content:\"\\E103\"}.glyphicon-fire:before{content:\"\\E104\"}.glyphicon-eye-open:before{content:\"\\E105\"}.glyphicon-eye-close:before{content:\"\\E106\"}.glyphicon-warning-sign:before{content:\"\\E107\"}.glyphicon-plane:before{content:\"\\E108\"}.glyphicon-calendar:before{content:\"\\E109\"}.glyphicon-random:before{content:\"\\E110\"}.glyphicon-comment:before{content:\"\\E111\"}.glyphicon-magnet:before{content:\"\\E112\"}.glyphicon-chevron-up:before{content:\"\\E113\"}.glyphicon-chevron-down:before{content:\"\\E114\"}.glyphicon-retweet:before{content:\"\\E115\"}.glyphicon-shopping-cart:before{content:\"\\E116\"}.glyphicon-folder-close:before{content:\"\\E117\"}.glyphicon-folder-open:before{content:\"\\E118\"}.glyphicon-resize-vertical:before{content:\"\\E119\"}.glyphicon-resize-horizontal:before{content:\"\\E120\"}.glyphicon-hdd:before{content:\"\\E121\"}.glyphicon-bullhorn:before{content:\"\\E122\"}.glyphicon-bell:before{content:\"\\E123\"}.glyphicon-certificate:before{content:\"\\E124\"}.glyphicon-thumbs-up:before{content:\"\\E125\"}.glyphicon-thumbs-down:before{content:\"\\E126\"}.glyphicon-hand-right:before{content:\"\\E127\"}.glyphicon-hand-left:before{content:\"\\E128\"}.glyphicon-hand-up:before{content:\"\\E129\"}.glyphicon-hand-down:before{content:\"\\E130\"}.glyphicon-circle-arrow-right:before{content:\"\\E131\"}.glyphicon-circle-arrow-left:before{content:\"\\E132\"}.glyphicon-circle-arrow-up:before{content:\"\\E133\"}.glyphicon-circle-arrow-down:before{content:\"\\E134\"}.glyphicon-globe:before{content:\"\\E135\"}.glyphicon-wrench:before{content:\"\\E136\"}.glyphicon-tasks:before{content:\"\\E137\"}.glyphicon-filter:before{content:\"\\E138\"}.glyphicon-briefcase:before{content:\"\\E139\"}.glyphicon-fullscreen:before{content:\"\\E140\"}.glyphicon-dashboard:before{content:\"\\E141\"}.glyphicon-paperclip:before{content:\"\\E142\"}.glyphicon-heart-empty:before{content:\"\\E143\"}.glyphicon-link:before{content:\"\\E144\"}.glyphicon-phone:before{content:\"\\E145\"}.glyphicon-pushpin:before{content:\"\\E146\"}.glyphicon-usd:before{content:\"\\E148\"}.glyphicon-gbp:before{content:\"\\E149\"}.glyphicon-sort:before{content:\"\\E150\"}.glyphicon-sort-by-alphabet:before{content:\"\\E151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\E152\"}.glyphicon-sort-by-order:before{content:\"\\E153\"}.glyphicon-sort-by-order-alt:before{content:\"\\E154\"}.glyphicon-sort-by-attributes:before{content:\"\\E155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\E156\"}.glyphicon-unchecked:before{content:\"\\E157\"}.glyphicon-expand:before{content:\"\\E158\"}.glyphicon-collapse-down:before{content:\"\\E159\"}.glyphicon-collapse-up:before{content:\"\\E160\"}.glyphicon-log-in:before{content:\"\\E161\"}.glyphicon-flash:before{content:\"\\E162\"}.glyphicon-log-out:before{content:\"\\E163\"}.glyphicon-new-window:before{content:\"\\E164\"}.glyphicon-record:before{content:\"\\E165\"}.glyphicon-save:before{content:\"\\E166\"}.glyphicon-open:before{content:\"\\E167\"}.glyphicon-saved:before{content:\"\\E168\"}.glyphicon-import:before{content:\"\\E169\"}.glyphicon-export:before{content:\"\\E170\"}.glyphicon-send:before{content:\"\\E171\"}.glyphicon-floppy-disk:before{content:\"\\E172\"}.glyphicon-floppy-saved:before{content:\"\\E173\"}.glyphicon-floppy-remove:before{content:\"\\E174\"}.glyphicon-floppy-save:before{content:\"\\E175\"}.glyphicon-floppy-open:before{content:\"\\E176\"}.glyphicon-credit-card:before{content:\"\\E177\"}.glyphicon-transfer:before{content:\"\\E178\"}.glyphicon-cutlery:before{content:\"\\E179\"}.glyphicon-header:before{content:\"\\E180\"}.glyphicon-compressed:before{content:\"\\E181\"}.glyphicon-earphone:before{content:\"\\E182\"}.glyphicon-phone-alt:before{content:\"\\E183\"}.glyphicon-tower:before{content:\"\\E184\"}.glyphicon-stats:before{content:\"\\E185\"}.glyphicon-sd-video:before{content:\"\\E186\"}.glyphicon-hd-video:before{content:\"\\E187\"}.glyphicon-subtitles:before{content:\"\\E188\"}.glyphicon-sound-stereo:before{content:\"\\E189\"}.glyphicon-sound-dolby:before{content:\"\\E190\"}.glyphicon-sound-5-1:before{content:\"\\E191\"}.glyphicon-sound-6-1:before{content:\"\\E192\"}.glyphicon-sound-7-1:before{content:\"\\E193\"}.glyphicon-copyright-mark:before{content:\"\\E194\"}.glyphicon-registration-mark:before{content:\"\\E195\"}.glyphicon-cloud-download:before{content:\"\\E197\"}.glyphicon-cloud-upload:before{content:\"\\E198\"}.glyphicon-tree-conifer:before{content:\"\\E199\"}.glyphicon-tree-deciduous:before{content:\"\\E200\"}.glyphicon-cd:before{content:\"\\E201\"}.glyphicon-save-file:before{content:\"\\E202\"}.glyphicon-open-file:before{content:\"\\E203\"}.glyphicon-level-up:before{content:\"\\E204\"}.glyphicon-copy:before{content:\"\\E205\"}.glyphicon-paste:before{content:\"\\E206\"}.glyphicon-alert:before{content:\"\\E209\"}.glyphicon-equalizer:before{content:\"\\E210\"}.glyphicon-king:before{content:\"\\E211\"}.glyphicon-queen:before{content:\"\\E212\"}.glyphicon-pawn:before{content:\"\\E213\"}.glyphicon-bishop:before{content:\"\\E214\"}.glyphicon-knight:before{content:\"\\E215\"}.glyphicon-baby-formula:before{content:\"\\E216\"}.glyphicon-tent:before{content:\"\\26FA\"}.glyphicon-blackboard:before{content:\"\\E218\"}.glyphicon-bed:before{content:\"\\E219\"}.glyphicon-apple:before{content:\"\\F8FF\"}.glyphicon-erase:before{content:\"\\E221\"}.glyphicon-hourglass:before{content:\"\\231B\"}.glyphicon-lamp:before{content:\"\\E223\"}.glyphicon-duplicate:before{content:\"\\E224\"}.glyphicon-piggy-bank:before{content:\"\\E225\"}.glyphicon-scissors:before{content:\"\\E226\"}.glyphicon-bitcoin:before,.glyphicon-btc:before,.glyphicon-xbt:before{content:\"\\E227\"}.glyphicon-jpy:before,.glyphicon-yen:before{content:\"\\A5\"}.glyphicon-rub:before,.glyphicon-ruble:before{content:\"\\20BD\"}.glyphicon-scale:before{content:\"\\E230\"}.glyphicon-ice-lolly:before{content:\"\\E231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\E232\"}.glyphicon-education:before{content:\"\\E233\"}.glyphicon-option-horizontal:before{content:\"\\E234\"}.glyphicon-option-vertical:before{content:\"\\E235\"}.glyphicon-menu-hamburger:before{content:\"\\E236\"}.glyphicon-modal-window:before{content:\"\\E237\"}.glyphicon-oil:before{content:\"\\E238\"}.glyphicon-grain:before{content:\"\\E239\"}.glyphicon-sunglasses:before{content:\"\\E240\"}.glyphicon-text-size:before{content:\"\\E241\"}.glyphicon-text-color:before{content:\"\\E242\"}.glyphicon-text-background:before{content:\"\\E243\"}.glyphicon-object-align-top:before{content:\"\\E244\"}.glyphicon-object-align-bottom:before{content:\"\\E245\"}.glyphicon-object-align-horizontal:before{content:\"\\E246\"}.glyphicon-object-align-left:before{content:\"\\E247\"}.glyphicon-object-align-vertical:before{content:\"\\E248\"}.glyphicon-object-align-right:before{content:\"\\E249\"}.glyphicon-triangle-right:before{content:\"\\E250\"}.glyphicon-triangle-left:before{content:\"\\E251\"}.glyphicon-triangle-bottom:before{content:\"\\E252\"}.glyphicon-triangle-top:before{content:\"\\E253\"}.glyphicon-console:before{content:\"\\E254\"}.glyphicon-superscript:before{content:\"\\E255\"}.glyphicon-subscript:before{content:\"\\E256\"}.glyphicon-menu-left:before{content:\"\\E257\"}.glyphicon-menu-right:before{content:\"\\E258\"}.glyphicon-menu-down:before{content:\"\\E259\"}.glyphicon-menu-up:before{content:\"\\E260\"}.bg-flat-color-1{background:#5c6bc0}.bg-flat-color-2{background:#42a5f5}.bg-flat-color-3{background:#ffa726}.bg-flat-color-4{background:#ef5350}.bg-flat-color-5{background:#4dbd74}.bg-flat-color-6{background:#66bb6a}.bg-transparent{background-color:transparent}.bg-twitter{background:#1da1f2}.bg-facebook{background:#3b5998}.bg-instagram{background:#833ab4}.bg-{background:#ef5350;background:#4dbd74;background:#66bb6a}.flat-color-1{color:#5c6bc0}.flat-color-2{color:#42a5f5}.flat-color-3{color:#ffa726}.flat-color-4{color:#ef5350}.flat-color-5{color:#4dbd74}.flat-color-6{color:#66bb6a}.bg-white{background-color:#fff}.fade-5{opacity:.5}.icon-lg{font-size:4.68em}.fw-r{font-weight:400}.color-gray{color:#868e96}.text-up{text-transform:uppercase}.br-0{border:none!important}.black-rgba{background-color:rgba(0,0,0,.15)!important}.color-white{color:#fff!important}.color-red{color:#dc3545}.font-3xl{font-size:2.8125em}.font-4xl{font-size:3.75em}.width-90{width:90px}.height-15{height:15px}.height-93{height:93px}.height-100{height:100px}.inline-block{display:inline-block}.mb-15{margin-bottom:15px}.transition{-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-ms-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}body{background:#f1f2f7;font-family:Open Sans,sans-serif;font-size:16px;overflow-x:hidden}.admin-container{display:table;width:100%}p{font-size:16px;font-family:Open Sans,sans-serif;font-weight:400;line-height:24px;color:#878787}p:focus{border:none;outline:0}a,button{text-decoration:none;outline:none!important;color:#878787;-webkit-transition:all .25s ease;-moz-transition:all .25s ease;-ms-transition:all .25s ease;-o-transition:all .25s ease;transition:all .25s ease}a:focus,a:hover{text-decoration:none;color:#000}h1,h2,h3,h4,h5,h6{margin:0}h5{font-size:1em}ol,ul{padding-left:0}.btn:focus,button:focus{box-shadow:none!important;outline:0}img{max-width:100%}.btn,button,input,textarea{box-shadow:none;outline:0!important}.no-padding{padding:0!important}.progress-thin{border-radius:0;height:5px}canvas{max-width:100%}.text-muted{font-size:14px}.text-muted.muted-black{color:#333648!important;font-weight:600}.basix-container{display:table;min-height:100vh;position:relative;width:100%}aside.left-panel{display:table-cell;height:100vh;min-height:100%;width:280px;transition:width .3s ease}.navbar,aside.left-panel{background:#292b35;padding:0;vertical-align:top}.navbar{border-radius:0;border:none;display:inline-block;margin:0}.navbar .navbar-header{background-color:#262832;float:left;padding:0 1.25em 0 0;position:relative;text-align:center;width:100%}.navbar .navbar-brand{display:inline-block;float:left;line-height:3.5;margin:0;padding:0 0 7px 1.25em}.navbar .navbar-brand img{max-width:145px}.navbar .navbar-brand.hidden{display:none}.navbar .main-menu{float:left;padding:0 1.25em}.navbar .menu-title{color:#41434d;clear:both;display:block;font-family:Open Sans;font-size:14px;font-weight:700;line-height:50px;padding:0;text-transform:uppercase;width:100%}.navbar .navbar-nav{float:none;position:relative}.navbar .navbar-nav li{width:100%}.navbar .navbar-nav li.active .menu-icon,.navbar .navbar-nav li .toggle_nav_button.nav-open:before,.navbar .navbar-nav li:hover .toggle_nav_button:before{color:#fff!important}.navbar .navbar-nav li .dropdown-toggle:after{display:none}.navbar .navbar-nav li>a{background:none!important;color:#8b939b!important;display:inline-block;font-family:Open Sans;font-size:14px;line-height:30px;padding:10px 0;position:relative;width:100%}.navbar .navbar-nav li>a:hover,.navbar .navbar-nav li>a:hover .menu-icon{color:#fff!important}.navbar .navbar-nav li>a .menu-icon{color:#8b939b;float:left;margin-top:8px;width:55px;text-align:left;z-index:9}.navbar .navbar-nav li>a .menu-title-text{font-size:14px}.navbar .navbar-nav li>a .badge{border-radius:0;font-family:Open Sans;font-weight:600;float:right;margin:6px 0 0;padding:.4em .5em}.navbar .navbar-nav li.menu-item-has-children{position:relative}.navbar .navbar-nav li.menu-item-has-children a{line-height:30px}.navbar .navbar-nav li.menu-item-has-children a:before{content:\"\\F105\";color:#8b939b;font-family:Fontawesome;font-size:16px;position:absolute;top:10px;right:0;text-align:right;-webkit-transition:all .25s ease;-moz-transition:all .25s ease;-ms-transition:all .25s ease;-o-transition:all .25s ease;transition:all .25s ease}.navbar .navbar-nav li.menu-item-has-children a:hover:before{color:#fff}.navbar .navbar-nav li.menu-item-has-children .sub-menu{background:#292b35;border:none;box-shadow:none;overflow-y:hidden;padding:0 0 0 35px}.navbar .navbar-nav li.menu-item-has-children .sub-menu li{position:relative}.navbar .navbar-nav li.menu-item-has-children .sub-menu i{color:#c8c9ce;float:left;padding:0;position:absolute;left:0;font-size:14px;top:9px}.navbar .navbar-nav li.menu-item-has-children .sub-menu a{padding:2px 0 2px 30px}.navbar .navbar-nav li.menu-item-has-children .sub-menu a:before{content:\"\";display:none}.navbar .navbar-nav li.menu-item-has-children .sub-menu a .menu-icon{top:3px;text-align:left;width:25px}.navbar .navbar-nav li.menu-item-has-children.show a:before{content:\"\\F107\"}.navbar .navbar-nav li.menu-item-has-children.show .sub-menu{max-height:1000px;opacity:1;position:static!important}.navbar .navbar-nav>.active>a,.navbar .navbar-nav>.active>a:focus,.navbar .navbar-nav>.active>a:hover{color:#c8c9ce!important}.navbar-nav li span.count{background:#a9d86e;border-radius:50%;color:#fff;font-family:Open Sans;font-size:9px;font-weight:700;float:right;height:20px;width:20px;line-height:20px;margin-right:15px;text-align:center}body.open .navbar .navbar-brand.hidden{display:block}.open aside.left-panel{max-width:70px;width:70px}.open aside.left-panel .navbar .navbar-header{padding:0}.open aside.left-panel .navbar .navbar-brand{display:none}.open aside.left-panel .navbar .navbar-brand.hidden{display:block!important;padding:0 .9em 10px;text-align:center;width:100%}.open aside.left-panel .navbar .navbar-brand.hidden img{max-width:100%;margin:0 auto}.open aside.left-panel .navbar .navbar-brand.d-md-none{display:block!important;margin:13px 0 0;min-height:67px;padding:0;text-align:center}.open aside.left-panel .navbar .navbar-nav:before{display:none!important}.open aside.left-panel .navbar .navbar-nav li{position:relative}.open aside.left-panel .navbar .navbar-nav li a{font-size:0;z-index:0;transition:none}.open aside.left-panel .navbar .navbar-nav li a .menu-icon{font-size:20px;z-index:-1;text-align:center;width:inherit}.open aside.left-panel .navbar .navbar-nav li a .menu-title-text{font-size:0}.open aside.left-panel .navbar .navbar-nav li a .badge{display:none}.open aside.left-panel .navbar .navbar-nav li>a{max-width:60px;padding-left:0}.open aside.left-panel .navbar .navbar-nav li.menu-item-has-children{overflow:hidden}.open aside.left-panel .navbar .navbar-nav li.menu-item-has-children a:before{content:\"\";display:none}.open aside.left-panel .navbar .navbar-nav li.menu-item-has-children ul{padding-left:0}.open aside.left-panel .navbar .navbar-nav li.menu-item-has-children .sub-menu{display:block;left:inherit;right:-180px;top:0}.open aside.left-panel .navbar .navbar-nav li.menu-item-has-children .sub-menu li a{display:block;font-size:14px;max-width:inherit;padding:2px 15px 2px 25px;width:100%}.open aside.left-panel .navbar .navbar-nav li.menu-item-has-children .sub-menu li a .menu-icon{text-align:center}.open aside.left-panel .navbar .navbar-nav li.menu-item-has-children.show{overflow:visible}.open aside.left-panel .navbar .navbar-nav li.menu-item-has-children.show .sub-menu{position:absolute!important}.open aside.left-panel .navbar .navbar-nav li span.count{display:none;margin-right:5px;z-index:1}.open aside.left-panel .navbar .navbar-nav li.active a:after{content:\"\";display:none}.open aside.left-panel .navbar .navbar-nav .menu-title{font-size:0;line-height:0;opacity:0;padding:0}.open aside.left-panel .menutoggle{background-color:#dc3545;color:#fff!important;right:-20px;text-align:center}.right-panel{display:table-cell;padding-left:0!important;-webkit-transition:all .35s ease;-moz-transition:all .35s ease;-ms-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease}.right-panel .breadcrumbs{float:left;margin-top:30px;padding:0 1.875em;width:100%}.right-panel .breadcrumbs .breadcrumbs-inner{background-color:#fff}.right-panel .breadcrumbs .col-lg-8 .page-header{float:left}.right-panel .page-header{min-height:50px;margin:0;padding:0 15px;background:#fff;border-bottom:0}.right-panel .page-header h1{font-size:18px;padding:15px 0}.right-panel .page-header .breadcrumb{margin:0;padding:13.5px 0;background:#fff;text-transform:capitalize}.right-panel .page-header .breadcrumb>li+li:before{padding:0 5px;color:#ccc;content:\"/\\A0\"}.right-panel header.header{background:#fff;border-bottom:1px solid #e8e9ed;box-shadow:none;clear:both;display:inline-block;padding:0 1.875em;width:100%}.open .right-panel{margin-left:-210px}header.fixed-top{background:#fff;padding:20px}.header-menu .col-sm-7{position:inherit}.menutoggle{background-color:transparent;border-radius:50%;color:#8b939b!important;cursor:pointer;font-size:.95em;height:40px;line-height:40px;width:40px;margin:-20px 0 0;top:50%;right:1.25em;position:absolute;text-align:right}.open .menutoggle i:before{content:\"\\F0A4\"}.search-trigger{background:transparent;border:none;color:#292b35;cursor:pointer;font-size:16px;line-height:5;padding:0;width:43px}header .form-inline{background:#263238;display:none;height:80px;margin:0;width:100%;position:absolute;left:0;top:0;z-index:9999}header .form-inline .search-form{height:100%;max-width:1025px;margin:0 auto;position:relative}header .form-inline .search-form input[type=text]{background:#263238;border:none;border-radius:0;box-shadow:none;color:#d3d3d3;font-size:16px;height:inherit;margin-right:0!important;padding:10px 36px 10px 15px;width:100%}header .form-inline .search-form input[type=text].active,header .form-inline .search-form input[type=text]:focus{border-color:rgba(0,0,0,.125);outline:0}header .form-inline .search-form button{background:transparent;border:none;color:#fff;font-size:16px;position:absolute;right:15px;top:50%;margin-top:-14px!important}header .form-inline .search-form .btn-outline-success:hover,header .form-inline .search-form button:active,header .form-inline .search-form button:focus,header .form-inline .search-form button:visited{background:transparent;border:none!important;box-shadow:none;outline:0!important}header .form-inline .search-form.close{display:none}.header-left.open .form-inline{display:block}.header-left .dropdown{display:inline-block}.header-left .dropdown .dropdown-toggle{background:transparent;border:none;color:#292b35;font-size:16px;line-height:5;padding-top:0;padding-bottom:0}.header-left .dropdown .dropdown-toggle:after{display:none}.header-left .dropdown .dropdown-toggle .count{border-radius:50%;color:#fff;font-size:11px;height:15px;width:15px;line-height:15px;right:0;top:23px;position:absolute}.header-left .dropdown .dropdown-toggle:active,.header-left .dropdown .dropdown-toggle:focus,.header-left .dropdown .dropdown-toggle:visited{background:none!important;border-color:transparent!important;color:#292b35!important}.header-left .dropdown .dropdown-menu{background:#fff;border:none;border-radius:0;box-shadow:none;top:80px!important}.header-left .dropdown .dropdown-menu p{font-size:15px;margin:0;padding:5px 15px}.header-left .dropdown .dropdown-menu .dropdown-item{color:#292b35;font-size:13px;padding:10px 15px 3px;text-overflow:ellipsis}.header-left .dropdown .dropdown-menu .dropdown-item .photo{float:left;margin-right:15px;width:25px}.header-left .dropdown .dropdown-menu .dropdown-item .message .name{margin-top:-5px}.header-left .dropdown .dropdown-menu .dropdown-item .message .time{font-size:11px}.header-left .dropdown .dropdown-menu .dropdown-item .message p{clear:both;font-size:14px;margin:0;padding:0;text-overflow:ellipsis}.header-left .dropdown .dropdown-menu .dropdown-item:hover{background:transparent}.header-menu .col-sm-5 .dropdown{line-height:5;margin-top:0!important}.header-menu .col-sm-5 .dropdown .dropdown-toggle{line-height:5}.dropdown-menu{border-radius:0;transform:none!important}.for-notification .dropdown-menu .dropdown-item{padding:5px 15px!important;text-overflow:ellipsis}.for-notification .dropdown-menu .dropdown-item i{float:left;font-size:14px;margin:5px 5px 0 0;text-align:left;width:20px}.for-notification .dropdown-menu .dropdown-item p{padding:0!important;text-overflow:ellipsis}.user-area{float:right;padding-right:0;position:relative}.user-area .user-menu{background:#fff;border:none;font-family:Open Sans;left:inherit!important;right:0;top:83px!important;margin:0;max-width:150px;padding:5px 10px;position:absolute;width:100%;z-index:999;min-width:150px}.user-area .user-menu .nav-link{color:#292b35;display:block;font-size:14px;line-height:22px;padding:5px 0}.user-area .user-avatar{float:right;width:32px}.user-area .user-info .name{color:#8c8c8c;font-size:14px;position:relative;text-transform:uppercase}.user-area .count{background:#d9534f;border-radius:50%;color:#fff;font-family:Open Sans;font-size:9px;font-weight:700;float:right;height:20px;width:20px;line-height:20px;text-align:center}.user-area .dropdown-toggle{line-height:5;height:80px;display:flex;justify-content:center;align-items:center}.user-area .dropdown-toggle:after{display:none}#menuToggle2{padding-left:25px}#language-select{color:#f1f2f7;float:right;margin:7px 20px 0 0;max-width:80px}#language-select:focus,#language-select:visited{border:none;outline:0}#language-select .flag-icon{line-height:5}#language-select .dropdown-toggle:after{display:none}#language-select .dropdown-menu{background:#fff;border:none;border-radius:0;left:-8px!important;min-width:inherit;padding:0 5px;top:81px!important}#language-select .dropdown-menu .dropdown-item{line-height:1.5;margin-right:0;max-width:25px;padding:0}#language-select .dropdown-menu .dropdown-item:hover{background:#fff}#language-select .dropdown-menu .dropdown-item .flag-icon{line-height:1.5;margin-right:0;width:25px}.language-show+.dropdown-menu,.message-show+.dropdown-menu,.notification-show+.dropdown-menu{display:block}.content{float:left;padding:1.875em;width:100%}.card{margin-bottom:1.875em;border-radius:0;padding:0}.card .card-footer,.card .card-top{background:#fafafa;border-bottom:1px solid #e8e9ef;float:left;padding:.75em 1.125em;width:100%}.card .card-footer .card-title,.card .card-top .card-title{color:#343a40;font-size:.875em;font-weight:600;padding-top:5px;text-transform:capitalize}.card .card-footer button,.card .card-top button{background:none;border:none;box-shadow:none;color:#868e96;font-size:12px;padding:0 5px}.card .card-footer[class*=bg] .card-title,.card .card-footer[class*=bg] button,.card .card-top[class*=bg] .card-title,.card .card-top[class*=bg] button{color:#fff}.card .card-footer.p-0 .card-title,.card .card-top.p-0 .card-title{padding:1.125em}.card .card-footer.bg-flat-color-1,.card .card-top.bg-flat-color-1{background:#5c6bc0;border:none}.card .card-footer.bg-flat-color-2,.card .card-top.bg-flat-color-2{background:#42a5f5;border:none}.card .card-footer.bg-flat-color-3,.card .card-top.bg-flat-color-3{background:#ffa726;border:none}.card .card-footer.bg-flat-color-4,.card .card-top.bg-flat-color-4{background:#ef5350;border:none}.card .card-footer.bg-flat-color-5,.card .card-top.bg-flat-color-5{background:#4dbd74;border:none}.card .card-footer.bg-flat-color-6,.card .card-top.bg-flat-color-6{background:#66bb6a;border:none}.card .card-left{width:60%}.card .card-right{width:40%}.card .card-body{float:left;padding:1.25em;position:relative;width:100%}.card h4{font-size:1.1rem}.card .user-header .media img{border:5px solid hsla(0,0%,100%,.3);border-radius:50%;-webkit-border-radius:50%}.card .card-header .card-actions button{display:block;float:left;width:50px;padding:.75rem 0;margin:0!important;color:#fff;outline:0;text-align:center;background:transparent;border:0;border-left:1px solid hsla(210,8%,51%,.4)}.card .card-footer{padding:.65rem 1.25rem;background-color:#f0f3f5;border-top:1px solid #c2cfd6}.card .card-footer ul li{display:table-cell;padding:0 1rem;text-align:center}.card .nav-tabs{margin-bottom:-1px}.card .nav-tabs a{border-radius:0;color:#b5bcc2;font-size:12px;font-weight:700;padding:.25em .5em;text-transform:uppercase}.card .nav-tabs a:hover{border-color:transparent}.card .nav-tabs .active a{border-color:#e8e9ef;color:#868e96!important}.action-menu .dropdown-toggle i{font-size:12px}.action-menu .dropdown-toggle:after{display:none}.flotBar1,.flotLine1{height:75px}.traffic-chart .ct-area{fill-opacity:.7}.traffic-chart .ct-series-a .ct-area,.traffic-chart .ct-series-a .ct-slice-donut-solid,.traffic-chart .ct-series-a .ct-slice-pie{fill:#66bb6a}.traffic-chart .ct-series-b .ct-area,.traffic-chart .ct-series-b .ct-slice-donut-solid,.traffic-chart .ct-series-b .ct-slice-pie{fill:#ef5350}.traffic-chart .ct-series-c .ct-area,.traffic-chart .ct-series-c .ct-slice-donut-solid,.traffic-chart .ct-series-c .ct-slice-pie{fill:#5c6bc0}.flotRealtime2{height:445px}.traffic-chart{height:323px}#flotBar2{height:168px}.gauge.g1 svg{fill:#ffa726!important}#area_chart{max-height:280px}#flotLine5{height:50px}#flotPie1{height:90px}#flotPie1 .pieLabel{display:none}#flotPie1 .legend tr{padding-bottom:5px}#flotPie1 .legendColorBox{float:left;margin:2px 5px 0 0}#flotPie1 .legendColorBox>div{border:none!important}#flotPie1 .legendLabel{color:#868e96;font-family:Open Sans;font-size:12px}.table-stats table{font-family:Open Sans}.table-stats table td,.table-stats table th{border:none;border-bottom:1px solid #e8e9ef;color:#868e96;font-size:12px;font-weight:400;padding:.75em 1.25em;text-transform:uppercase}.table-stats table td img,.table-stats table th img{margin-right:10px;max-width:45px}.table-stats table td,.table-stats table td .name,.table-stats table th .name{color:#343a40;font-size:14px;text-transform:capitalize}.table-stats table td{font-weight:600;vertical-align:middle}.timeline li{font-family:Open Sans;list-style:none;padding:5px 0;position:relative}.timeline li i{border-radius:50%;color:#fff;font-size:12px;height:30px;width:30px;line-height:30px;text-align:center}.timeline li span{color:#868e96;display:block;font-size:14px}.timeline li span a{color:#343a40}.timeline li .time{font-size:12px;padding-bottom:15px}.timeline li img{margin:10px 5px 15px 0;max-height:40px}.timeline .media-body{border-bottom:1px solid #e8e9ef}.widget .card-footer{border-top-color:#e8e9ef}.widget .weather-footer li{float:left;position:relative;width:33.33%}.widget .weather-footer li:before{content:\"\";background:#e8e9ef;height:32px;width:1px;top:5px;right:7.5px;position:absolute}.widget .weather-footer li:last-child:before{display:none}.widget .weather-footer li span{display:block}.widget .pt-0{padding-top:0!important}.widget .social .rounded-circle{max-width:130px;margin-top:-65px}.widget .social .weather-footer i{color:#868e96;font-size:20px;line-height:1;margin-top:-3px}.nav-tabs a.active{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs .dropdown .dropdown-menu{top:100%!important}.custom-tab .nav-tabs>.active>a:focus,.custom-tab .nav-tabs>a.active,.custom-tab .nav-tabs>li.active>a:hover{border-color:transparent;color:#ff2e44;position:relative}.custom-tab .nav-tabs>a.active>a:after,.custom-tab .nav-tabs>li.active>a:focus:after,.custom-tab .nav-tabs>li.active>a:hover:after{background:#ff2e44;bottom:-1px;content:\"\";height:2px;left:0;position:absolute;right:0;width:100%;z-index:999}.card .card-header .card-actions{float:right}.card .card-header .card-actions [class*=btn]{border-left:1px solid hsla(210,8%,51%,.4);color:#878787;display:inline-block;font-size:16px;float:left;padding:0 7px;width:inherit;text-align:center}.social-buttons .card-body p button{padding-top:0;padding-left:0;padding-bottom:0}.social-buttons .only-icon .card-body p button{padding:0}.social-buttons .social i{padding:0 10px;width:inherit!important}.social-buttons .only-text p button{padding:0 .5rem}.buttons button{margin:2px 0}.corner-ribon{text-align:center;width:71px;height:71px;position:absolute;right:0;top:0;font-size:20px}.corner-ribon i{padding:10px 0 0 35px;color:#fff}.twt-feed .wtt-mark{color:hsla(0,0%,100%,.15);font-size:160px;position:absolute;top:10px;left:40%}.twt-feed{-webkit-border-radius:4px 4px 0 0;color:#fff;padding:40px 10px 10px;position:relative;min-height:170px}.weather-category{padding:15px 0;color:#74829c}.weather-category ul li{width:32%;text-align:center;border-right:1px solid #e6e6e6;display:inline-block}.twt-feed.blue-bg{background:#58c9f3}.twt-category{display:inline-block;margin-bottom:11px;margin-top:10px;width:100%}.twt-category ul li{color:#bdbdbd;font-size:13px}.twt-footer{padding:12px 15px}.twt-footer,.twt-footer a{color:#d2d2d2}.btn,.button{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;transition:all .15s ease-in-out;border-radius:0;cursor:pointer}.icon-section{margin:0 0 3em;clear:both;overflow:hidden}.icon-container{width:240px;padding:.7em 0;float:left;position:relative;text-align:left}.icon-container [class*=\" ti-\"],.icon-container [class^=ti-]{color:#000;position:absolute;margin-top:3px;transition:.3s}.icon-container:hover [class*=\" ti-\"],.icon-container:hover [class^=ti-]{font-size:2.2em;margin-top:-5px}.icon-container:hover .icon-name{color:#000}.icon-name{color:#aaa;margin-left:35px;font-size:14px;transition:.3s}.icon-container:hover .icon-name{margin-left:45px}.fontawesome-icon-list .page-header{border-bottom:1px solid #c9cdd7;padding-bottom:9px;margin:30px 0 27px}.fontawesome-icon-list h2{margin-top:0;font-size:20px;font-weight:300}.fontawesome-icon-list i{font-style:16px;padding-right:10px}.social-box i{line-height:110px}.social-box ul{display:inline-block;margin:7px 0 0;padding:10px;width:100%}.social-box ul li{color:#949ca0;font-size:14px;font-weight:700;padding:0 10px 0 0;text-align:right}.social-box ul li:last-child{padding-left:10px;padding-right:0;text-align:left}.social-box ul li span{font-size:14px}.login-logo{text-align:center;margin-bottom:15px}.login-logo span{color:#fff;font-size:24px}.login-content{max-width:540px;margin:8vh auto}.login-form{background:#fff;padding:30px 30px 20px;border-radius:2px}.login-form h4{color:#878787;text-align:center;margin-bottom:50px}.login-form .checkbox{color:#878787}.login-form .checkbox label{text-transform:none}.login-form .btn{width:100%;text-transform:uppercase;font-size:14px;padding:15px;border:0}.login-form label{color:#878787;text-transform:uppercase}.login-form label a{color:#ff2e44}.social-login-content{margin:0 -30px;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;padding:30px 0;background:#fcfcfc}.social-button{padding:0 30px}.social-button .facebook{background:#3b5998;color:#fff}.social-button .facebook:hover{background:#344e86}.social-button .twitter{background:#00aced;color:#fff}.social-button .twitter:hover{background:#0099d4}.social-button i{padding:19px}.register-link a{color:#ff2e44}.cpu-load{width:100%;height:272px;font-size:14px;line-height:1.2em}.cpu-load-data-content{font-size:18px;font-weight:400;line-height:40px}.cpu-load-data{margin-bottom:30px}.cpu-load-data li{display:inline-block;width:32.5%;text-align:center;border-right:1px solid #e7e7e7}.cpu-load-data li:last-child{border-right:0}.nestable-cart{overflow:hidden}.input-group-addon{background-color:transparent;border-left:0}.input-group-addon,.input-group-btn{white-space:nowrap;vertical-align:middle}.input-group-addon{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.25;color:#495057;text-align:center;background-color:#e9ecef;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.flotTip{background:#252525;border:1px solid #252525;padding:5px 15px;color:#fff}.flot-container{box-sizing:border-box;width:100%;height:275px;padding:20px 15px 15px;margin:15px auto 30px;background:transparent}.flot-pie-container,.flotBar-container{height:275px}.flot-line{width:100%;height:100%;font-size:14px;line-height:1.2em}.legend table{border-spacing:5px}#chart1,#flotBar,#flotCurve{width:100%;height:275px}.morris-hover{position:absolute;z-index:1}.morris-hover.morris-default-style .morris-hover-row-label{font-weight:700;margin:.25em 0}.morris-hover.morris-default-style .morris-hover-point{white-space:nowrap;margin:.1em 0}.morris-hover.morris-default-style{border-radius:2px;padding:10px 12px;color:#666;background:rgba(0,0,0,.7);border:none;color:#fff!important}.morris-hover-point{color:hsla(0,0%,100%,.8)!important}#morris-bar-chart{height:285px}.map,.vmap{width:100%;height:400px}.btn-toolbar{float:left!important}.btn-toolbar .btn-outline-secondary:not([disabled]):not(.disabled).active,.btn-toolbar .btn-outline-secondary:not([disabled]):not(.disabled):active,.btn-toolbar .show>.btn-outline-secondary.dropdown-toggle{background-color:#212529;border-color:#212529;-webkit-box-shadow:none;box-shadow:none;color:#fff}.btn-toolbar .btn-outline-secondary:hover{background-color:#212529;border-color:#212529;color:#fff}.dib{display:inline-block}.stat-widget-one .stat-icon{vertical-align:top}.stat-widget-one .stat-icon i{font-size:30px;border-width:3px;border-style:solid;border-radius:100px;padding:15px;font-weight:900;display:inline-block}.stat-widget-one .stat-content{margin-left:30px;margin-top:7px}.stat-widget-one .stat-text{font-size:14px;color:#868e96}.stat-widget-one .stat-digit{font-size:24px;color:#373757}.stat-widget-two{text-align:center}.stat-widget-two .stat-digit{font-size:1.75rem;font-weight:500;color:#373757}.stat-widget-two .stat-digit i{font-size:18px;margin-right:5px}.stat-widget-two .stat-text{font-size:16px;margin-bottom:5px;color:#868e96}.stat-widget-two .progress{height:8px;margin-bottom:0;margin-top:20px;box-shadow:none}.stat-widget-two .progress-bar{box-shadow:none}.stat-widget-three .stat-icon{display:inline-block;padding:33px;position:absolute;line-height:21px}.stat-widget-three .stat-icon i{font-size:30px;color:#fff}.stat-widget-three .stat-content{text-align:center;padding:15px;margin-left:90px}.stat-widget-three .stat-digit{font-size:30px}.stat-widget-three .stat-text{padding-top:4px}.home-widget-three .stat-icon{line-height:19px;padding:27px}.home-widget-three .stat-digit{font-size:24px;font-weight:300;color:#373757}.home-widget-three .stat-content{text-align:center;margin-left:60px;padding:13px}.stat-widget-four{position:relative}.stat-widget-four .stat-icon{display:inline-block;position:absolute;top:5px}.stat-widget-four i{display:block;font-size:36px}.stat-widget-four .stat-content{margin-left:40px;text-align:center}.stat-widget-four .stat-heading{font-size:20px}.stat-widget-five .stat-icon{border-radius:100px;display:inline-block;position:absolute}.stat-widget-five i{border-radius:100px;display:block;font-size:36px;padding:30px}.stat-widget-five .stat-content{margin-left:100px;padding:24px 0;position:relative;text-align:right;vertical-align:middle}.stat-widget-five .stat-heading{text-align:right;padding-left:80px;font-size:20px;font-weight:200}.stat-widget-six{position:relative}.stat-widget-six .stat-icon{display:inline-block;position:absolute;top:5px}.stat-widget-six i{display:block;font-size:36px}.stat-widget-six .stat-content{margin-left:40px;text-align:center}.stat-widget-six .stat-heading{font-size:16px;font-weight:300}.stat-widget-six .stat-text{font-size:12px;padding-top:4px}.stat-widget-seven .stat-heading{text-align:center}.stat-widget-seven .gradient-circle{text-align:center;position:relative;margin:30px auto;display:inline-block;width:100%}.stat-widget-seven .gradient-circle i{position:absolute;left:0;right:0;text-align:center;top:35px;font-size:30px}.stat-widget-seven .stat-footer{text-align:center;margin-top:30px}.stat-widget-seven .stat-footer .stat-count{padding-left:5px}.stat-widget-seven .count-header{color:#252525;font-size:12px;font-weight:400;line-height:30px}.stat-widget-seven .stat-count{font-size:18px;font-weight:400;color:#252525}.stat-widget-seven .analytic-arrow{position:relative}.stat-widget-seven .analytic-arrow i{font-size:12px}.stat-widget-eight{padding:15px}.stat-widget-eight .header-title{font-size:20px;font-weight:300}.stat-widget-eight .ti-more-alt{color:#878787;cursor:pointer;left:-5px;position:absolute;transform:rotate(90deg)}.stat-widget-eight .stat-content{margin-top:50px}.stat-widget-eight .stat-content .ti-arrow-up{font-size:30px;color:#28a745}.stat-widget-eight .stat-content .stat-digit{font-size:24px;font-weight:300;margin-left:15px}.stat-widget-eight .stat-content .progress-stats{color:#aaadb2;font-weight:400;position:relative;top:10px}.stat-widget-eight .progress{margin-bottom:0;margin-top:30px;height:7px;background:#eaeaea;box-shadow:none}.stat-widget-nine .all-like{float:right}.stat-widget-nine .stat-icon i{font-size:22px}.stat-widget-nine .stat-digit,.stat-widget-nine .stat-text{font-size:14px}.stat-widget-nine .like-count{font-size:30px}.horizontal{position:relative}.horizontal:before{background:#fff;bottom:0;content:\"\";height:38px;left:0;margin:0 auto;position:absolute;right:0;width:1px}.widget-ten span i{color:#fff;opacity:.5}.widget-ten h5{color:#fff}.widget-ten p{color:#fff!important;opacity:.75}.badges h1,.badges h2,.badges h3,.badges h4,.badges h5,.badges h6{margin:5px 0}.vue-lists ol,.vue-lists ul{padding-left:30px}.card .dropdown.float-right.show .dropdown-menu{left:inherit!important;right:0!important;top:93%!important;display:block!important}.dataTables_paginate .pagination{border-radius:0}.dataTables_paginate .pagination li{border-radius:0!important}.dataTables_paginate .pagination li a{border-radius:0!important;color:#292b35}.dataTables_paginate .pagination li.active a,.dataTables_paginate .pagination li:hover a{background:#292b35;border-color:#292b35;color:#fff}footer.site-footer{padding:0 1.875em}footer.site-footer .footer-inner{color:#78909c;font-family:Open Sans;font-size:14px;line-height:1.5;padding:2.45em 1.125em}footer.site-footer .footer-inner a{color:#6a7074}@media (max-width:1680px){.timeline li{padding:2px 0}}@media (max-width:1368px){.twt-category{margin-bottom:0}.twt-feed{max-height:155px}.twt-feed img{height:75px;width:75px}.stat-widget-one .stat-content{margin-left:15px}.card-body{padding:15px}.badges button{margin:2px 0}#g2{padding-top:33px}.timeline li .time{padding-bottom:10px}.height-93{height:75px}.height-100{height:90px}.widget .row.p-4.height-93{padding:1.125em 1.75em!important}.widget .card-footer.p-3.bg-white.text-center{padding:.9em!important}.weather h3.fw-r.text-white{font-size:1.125em}.weather span{font-size:12px}}@media (max-width:1024px){aside.left-panel{max-width:60px;width:60px}aside.left-panel .navbar .navbar-header{padding:0}aside.left-panel .navbar .navbar-brand{display:none}aside.left-panel .navbar .navbar-brand.hidden{display:block!important;padding:0 0 10px;text-align:center;width:100%}aside.left-panel .navbar .navbar-brand.hidden img{max-width:100%;margin:0 auto}aside.left-panel .navbar .navbar-brand.d-md-none{display:block!important;margin:13px 0 0;min-height:67px;padding:0;text-align:center}aside.left-panel .navbar .navbar-nav:before{display:none!important}aside.left-panel .navbar .navbar-nav li{position:relative}aside.left-panel .navbar .navbar-nav li a{font-size:0;z-index:0;transition:none}aside.left-panel .navbar .navbar-nav li a .menu-icon{font-size:20px;z-index:-1;text-align:center;width:inherit}aside.left-panel .navbar .navbar-nav li a .menu-title-text{font-size:0}aside.left-panel .navbar .navbar-nav li a .badge{display:none}aside.left-panel .navbar .navbar-nav li>a{max-width:60px;padding-left:0}aside.left-panel .navbar .navbar-nav li.menu-item-has-children{overflow:hidden}aside.left-panel .navbar .navbar-nav li.menu-item-has-children a:before{content:\"\";display:none}aside.left-panel .navbar .navbar-nav li.menu-item-has-children ul{padding-left:0}aside.left-panel .navbar .navbar-nav li.menu-item-has-children .sub-menu{display:block;left:inherit;right:-160px;top:0}aside.left-panel .navbar .navbar-nav li.menu-item-has-children .sub-menu li a{display:block;font-size:14px;max-width:inherit;padding:2px 15px 2px 35px;width:100%}aside.left-panel .navbar .navbar-nav li.menu-item-has-children .sub-menu li a .menu-icon{text-align:center}aside.left-panel .navbar .navbar-nav li.menu-item-has-children .sub-menu i{left:10px}aside.left-panel .navbar .navbar-nav li.menu-item-has-children.show{overflow:visible}aside.left-panel .navbar .navbar-nav li.menu-item-has-children.show .sub-menu{position:absolute!important}aside.left-panel .navbar .navbar-nav li span.count{display:none;margin-right:5px;z-index:1}aside.left-panel .navbar .navbar-nav li.active a:after{content:\"\";display:none}aside.left-panel .navbar .navbar-nav .menu-title{font-size:0;line-height:0;opacity:0;padding:0}aside.left-panel .menutoggle{display:none}.navbar .main-menu{padding:0}#language-select .flag-icon,.header-left .dropdown .dropdown-toggle,.header-menu .col-sm-5 .dropdown,.header-menu .col-sm-5 .dropdown .dropdown-toggle,.search-trigger{line-height:3}#language-select,.user-area .dropdown-toggle,header .form-inline{height:48px}.header-left .dropdown .dropdown-menu{top:47px!important}#language-select .dropdown-menu{top:49px!important}.user-area .user-menu{top:51px!important}.content{padding:1.25em}.flotRealtime2{height:330px}.card{margin-bottom:1.25em}.card .card-header{position:relative}.card .card-header strong{display:block}.card .card-header small{float:left}.card .card-header .card-actions{right:0;top:.75rem;position:absolute}.card-footer.bg-white.br-0.pl-5.pr-5.pt-0.pb-5{padding-bottom:1.5em!important;padding-left:1em!important;padding-right:1em!important}#g2{height:auto!important;padding-top:7px}#flotBar2{height:150px}#g1{margin-top:0!important;margin-bottom:0!important;padding-top:0!important}.card-footer.bg-white [class*=float]{display:block;float:none!important;text-align:center}.card-footer.bg-white [class*=float].currency{display:inline-block}.card-footer.bg-white [class*=float].fa{display:inline-block;float:left!important}#traffic-chart{height:232px!important}i.p-4.font-3xl.width-90.text-center.mr-3.float-left.text-light{font-size:1.8125em;width:75px}.card i+h4{display:inline;padding-top:1em!important}.timeline li img{margin:0 5px 5px 0}.timeline li span{padding-bottom:8px!important}.card-footer.bg-white.br-0.pl-5.pr-5.pt-1.pb-4.mb-3{padding-left:1em!important;padding-right:1em!important}.font-4xl{font-size:2.75em}.media.p-4.height-100,.widget .row.p-4.height-93{padding:1rem!important}.height-100{height:63px}.widget .social .rounded-circle{max-width:60px;margin-top:8px}footer.site-footer{padding:0 1.125em}footer.site-footer .footer-inner{padding:1.75em 1em}}@media (max-width:992px){[class*=col].no-padding{flex:none}}@media (max-width:575.99px){body{display:block}aside.left-panel{display:block;height:auto;max-width:inherit;min-height:inherit;padding:0 15px;width:100%}aside.left-panel .navbar{margin-bottom:0;width:100%}aside.left-panel .navbar .navbar-header{height:50px}aside.left-panel .navbar .navbar-brand{border-bottom:none;display:inline-block;float:left;line-height:1;margin-top:11px;padding-left:0;min-height:inherit}aside.left-panel .navbar .navbar-brand.hidden{display:none!important}aside.left-panel .navbar .navbar-toggler{float:right;margin-top:8px}aside.left-panel .navbar .main-menu{width:100%}aside.left-panel .navbar .main-menu .navbar-nav{text-align:left;width:100%}aside.left-panel .navbar .main-menu .navbar-nav li{position:relative}aside.left-panel .navbar .main-menu .navbar-nav li a{font-size:14px;max-width:inherit;position:relative;width:100%}aside.left-panel .navbar .main-menu .navbar-nav li>a{padding:5px 0}aside.left-panel .navbar .main-menu .navbar-nav li .menu-icon{font-size:14px;margin-right:10px;width:auto}aside.left-panel .navbar .main-menu .navbar-nav li.menu-item-has-children a:before{top:5px}aside.left-panel .navbar .main-menu .navbar-nav li.menu-item-has-children .sub-menu{height:0;left:15px;right:inherit;position:static!important;width:100%}aside.left-panel .navbar .main-menu .navbar-nav li.menu-item-has-children .sub-menu.show{height:auto}aside.left-panel .navbar .menu-title{line-height:30px;padding:0}.menutoggle{display:none!important}.right-panel{display:block}.right-panel header.header{padding:5px 10px 1px 5px}.right-panel header.header div[class*=col]{width:auto}.right-panel header.header .col-sm-7{float:left}.right-panel header.header .col-sm-5{float:right}.right-panel .breadcrumbs{padding:10px 15px}.right-panel .breadcrumbs div[class*=col]{padding:0}.right-panel .breadcrumbs .page-header{min-height:inherit;padding:0}.right-panel .breadcrumbs .page-header h1{padding:5px 0}.right-panel .breadcrumbs .page-header.float-right{float:left;text-align:left;width:100%}.right-panel .breadcrumbs .page-header.float-right .breadcrumb{padding:0}.right-panel .content{padding:15px}.right-panel .content .card .card-title{margin-bottom:0}.right-panel .content .card .card-footer{padding:15px 5px}.right-panel .content .card .card-footer ul{margin:0}.right-panel .content .card .card-footer ul li{float:left;margin:5px 0;padding:0 10px;width:33.33%}.right-panel .content .nav-pills .nav-link,.right-panel .content .nav-tabs .nav-link{padding:.5rem}.right-panel .content .tab-content.pl-3{padding-left:0!important}.right-panel .content #bootstrap-data-table_wrapper{font-size:14px;padding:0}.right-panel .content #bootstrap-data-table_wrapper div[class*=col]{padding:0}.right-panel .content #bootstrap-data-table_wrapper .table td,.right-panel .content #bootstrap-data-table_wrapper .table th{padding:5px}footer.site-footer div[class*=col]{text-align:center!important}}button{cursor:pointer}", ""]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(5);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(" + escape(__webpack_require__(83)) + ");src:url(" + escape(__webpack_require__(84)) + "?#iefix&v=4.7.0) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(85)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(86)) + ") format(\"woff\"),url(" + escape(__webpack_require__(87)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(88)) + "#fontawesomeregular) format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.33333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.28571429em;text-align:center}.fa-ul{padding-left:0;margin-left:2.14285714em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.14285714em;width:2.14285714em;top:.14285714em;text-align:center}.fa-li.fa-lg{left:-1.85714286em}.fa-border{padding:.2em .25em .15em;border:.08em solid #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";-webkit-transform:scaleY(-1);-ms-transform:scaleY(-1);transform:scaleY(-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:\"\\F000\"}.fa-music:before{content:\"\\F001\"}.fa-search:before{content:\"\\F002\"}.fa-envelope-o:before{content:\"\\F003\"}.fa-heart:before{content:\"\\F004\"}.fa-star:before{content:\"\\F005\"}.fa-star-o:before{content:\"\\F006\"}.fa-user:before{content:\"\\F007\"}.fa-film:before{content:\"\\F008\"}.fa-th-large:before{content:\"\\F009\"}.fa-th:before{content:\"\\F00A\"}.fa-th-list:before{content:\"\\F00B\"}.fa-check:before{content:\"\\F00C\"}.fa-close:before,.fa-remove:before,.fa-times:before{content:\"\\F00D\"}.fa-search-plus:before{content:\"\\F00E\"}.fa-search-minus:before{content:\"\\F010\"}.fa-power-off:before{content:\"\\F011\"}.fa-signal:before{content:\"\\F012\"}.fa-cog:before,.fa-gear:before{content:\"\\F013\"}.fa-trash-o:before{content:\"\\F014\"}.fa-home:before{content:\"\\F015\"}.fa-file-o:before{content:\"\\F016\"}.fa-clock-o:before{content:\"\\F017\"}.fa-road:before{content:\"\\F018\"}.fa-download:before{content:\"\\F019\"}.fa-arrow-circle-o-down:before{content:\"\\F01A\"}.fa-arrow-circle-o-up:before{content:\"\\F01B\"}.fa-inbox:before{content:\"\\F01C\"}.fa-play-circle-o:before{content:\"\\F01D\"}.fa-repeat:before,.fa-rotate-right:before{content:\"\\F01E\"}.fa-refresh:before{content:\"\\F021\"}.fa-list-alt:before{content:\"\\F022\"}.fa-lock:before{content:\"\\F023\"}.fa-flag:before{content:\"\\F024\"}.fa-headphones:before{content:\"\\F025\"}.fa-volume-off:before{content:\"\\F026\"}.fa-volume-down:before{content:\"\\F027\"}.fa-volume-up:before{content:\"\\F028\"}.fa-qrcode:before{content:\"\\F029\"}.fa-barcode:before{content:\"\\F02A\"}.fa-tag:before{content:\"\\F02B\"}.fa-tags:before{content:\"\\F02C\"}.fa-book:before{content:\"\\F02D\"}.fa-bookmark:before{content:\"\\F02E\"}.fa-print:before{content:\"\\F02F\"}.fa-camera:before{content:\"\\F030\"}.fa-font:before{content:\"\\F031\"}.fa-bold:before{content:\"\\F032\"}.fa-italic:before{content:\"\\F033\"}.fa-text-height:before{content:\"\\F034\"}.fa-text-width:before{content:\"\\F035\"}.fa-align-left:before{content:\"\\F036\"}.fa-align-center:before{content:\"\\F037\"}.fa-align-right:before{content:\"\\F038\"}.fa-align-justify:before{content:\"\\F039\"}.fa-list:before{content:\"\\F03A\"}.fa-dedent:before,.fa-outdent:before{content:\"\\F03B\"}.fa-indent:before{content:\"\\F03C\"}.fa-video-camera:before{content:\"\\F03D\"}.fa-image:before,.fa-photo:before,.fa-picture-o:before{content:\"\\F03E\"}.fa-pencil:before{content:\"\\F040\"}.fa-map-marker:before{content:\"\\F041\"}.fa-adjust:before{content:\"\\F042\"}.fa-tint:before{content:\"\\F043\"}.fa-edit:before,.fa-pencil-square-o:before{content:\"\\F044\"}.fa-share-square-o:before{content:\"\\F045\"}.fa-check-square-o:before{content:\"\\F046\"}.fa-arrows:before{content:\"\\F047\"}.fa-step-backward:before{content:\"\\F048\"}.fa-fast-backward:before{content:\"\\F049\"}.fa-backward:before{content:\"\\F04A\"}.fa-play:before{content:\"\\F04B\"}.fa-pause:before{content:\"\\F04C\"}.fa-stop:before{content:\"\\F04D\"}.fa-forward:before{content:\"\\F04E\"}.fa-fast-forward:before{content:\"\\F050\"}.fa-step-forward:before{content:\"\\F051\"}.fa-eject:before{content:\"\\F052\"}.fa-chevron-left:before{content:\"\\F053\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-plus-circle:before{content:\"\\F055\"}.fa-minus-circle:before{content:\"\\F056\"}.fa-times-circle:before{content:\"\\F057\"}.fa-check-circle:before{content:\"\\F058\"}.fa-question-circle:before{content:\"\\F059\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-crosshairs:before{content:\"\\F05B\"}.fa-times-circle-o:before{content:\"\\F05C\"}.fa-check-circle-o:before{content:\"\\F05D\"}.fa-ban:before{content:\"\\F05E\"}.fa-arrow-left:before{content:\"\\F060\"}.fa-arrow-right:before{content:\"\\F061\"}.fa-arrow-up:before{content:\"\\F062\"}.fa-arrow-down:before{content:\"\\F063\"}.fa-mail-forward:before,.fa-share:before{content:\"\\F064\"}.fa-expand:before{content:\"\\F065\"}.fa-compress:before{content:\"\\F066\"}.fa-plus:before{content:\"\\F067\"}.fa-minus:before{content:\"\\F068\"}.fa-asterisk:before{content:\"\\F069\"}.fa-exclamation-circle:before{content:\"\\F06A\"}.fa-gift:before{content:\"\\F06B\"}.fa-leaf:before{content:\"\\F06C\"}.fa-fire:before{content:\"\\F06D\"}.fa-eye:before{content:\"\\F06E\"}.fa-eye-slash:before{content:\"\\F070\"}.fa-exclamation-triangle:before,.fa-warning:before{content:\"\\F071\"}.fa-plane:before{content:\"\\F072\"}.fa-calendar:before{content:\"\\F073\"}.fa-random:before{content:\"\\F074\"}.fa-comment:before{content:\"\\F075\"}.fa-magnet:before{content:\"\\F076\"}.fa-chevron-up:before{content:\"\\F077\"}.fa-chevron-down:before{content:\"\\F078\"}.fa-retweet:before{content:\"\\F079\"}.fa-shopping-cart:before{content:\"\\F07A\"}.fa-folder:before{content:\"\\F07B\"}.fa-folder-open:before{content:\"\\F07C\"}.fa-arrows-v:before{content:\"\\F07D\"}.fa-arrows-h:before{content:\"\\F07E\"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:\"\\F080\"}.fa-twitter-square:before{content:\"\\F081\"}.fa-facebook-square:before{content:\"\\F082\"}.fa-camera-retro:before{content:\"\\F083\"}.fa-key:before{content:\"\\F084\"}.fa-cogs:before,.fa-gears:before{content:\"\\F085\"}.fa-comments:before{content:\"\\F086\"}.fa-thumbs-o-up:before{content:\"\\F087\"}.fa-thumbs-o-down:before{content:\"\\F088\"}.fa-star-half:before{content:\"\\F089\"}.fa-heart-o:before{content:\"\\F08A\"}.fa-sign-out:before{content:\"\\F08B\"}.fa-linkedin-square:before{content:\"\\F08C\"}.fa-thumb-tack:before{content:\"\\F08D\"}.fa-external-link:before{content:\"\\F08E\"}.fa-sign-in:before{content:\"\\F090\"}.fa-trophy:before{content:\"\\F091\"}.fa-github-square:before{content:\"\\F092\"}.fa-upload:before{content:\"\\F093\"}.fa-lemon-o:before{content:\"\\F094\"}.fa-phone:before{content:\"\\F095\"}.fa-square-o:before{content:\"\\F096\"}.fa-bookmark-o:before{content:\"\\F097\"}.fa-phone-square:before{content:\"\\F098\"}.fa-twitter:before{content:\"\\F099\"}.fa-facebook-f:before,.fa-facebook:before{content:\"\\F09A\"}.fa-github:before{content:\"\\F09B\"}.fa-unlock:before{content:\"\\F09C\"}.fa-credit-card:before{content:\"\\F09D\"}.fa-feed:before,.fa-rss:before{content:\"\\F09E\"}.fa-hdd-o:before{content:\"\\F0A0\"}.fa-bullhorn:before{content:\"\\F0A1\"}.fa-bell:before{content:\"\\F0F3\"}.fa-certificate:before{content:\"\\F0A3\"}.fa-hand-o-right:before{content:\"\\F0A4\"}.fa-hand-o-left:before{content:\"\\F0A5\"}.fa-hand-o-up:before{content:\"\\F0A6\"}.fa-hand-o-down:before{content:\"\\F0A7\"}.fa-arrow-circle-left:before{content:\"\\F0A8\"}.fa-arrow-circle-right:before{content:\"\\F0A9\"}.fa-arrow-circle-up:before{content:\"\\F0AA\"}.fa-arrow-circle-down:before{content:\"\\F0AB\"}.fa-globe:before{content:\"\\F0AC\"}.fa-wrench:before{content:\"\\F0AD\"}.fa-tasks:before{content:\"\\F0AE\"}.fa-filter:before{content:\"\\F0B0\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-arrows-alt:before{content:\"\\F0B2\"}.fa-group:before,.fa-users:before{content:\"\\F0C0\"}.fa-chain:before,.fa-link:before{content:\"\\F0C1\"}.fa-cloud:before{content:\"\\F0C2\"}.fa-flask:before{content:\"\\F0C3\"}.fa-cut:before,.fa-scissors:before{content:\"\\F0C4\"}.fa-copy:before,.fa-files-o:before{content:\"\\F0C5\"}.fa-paperclip:before{content:\"\\F0C6\"}.fa-floppy-o:before,.fa-save:before{content:\"\\F0C7\"}.fa-square:before{content:\"\\F0C8\"}.fa-bars:before,.fa-navicon:before,.fa-reorder:before{content:\"\\F0C9\"}.fa-list-ul:before{content:\"\\F0CA\"}.fa-list-ol:before{content:\"\\F0CB\"}.fa-strikethrough:before{content:\"\\F0CC\"}.fa-underline:before{content:\"\\F0CD\"}.fa-table:before{content:\"\\F0CE\"}.fa-magic:before{content:\"\\F0D0\"}.fa-truck:before{content:\"\\F0D1\"}.fa-pinterest:before{content:\"\\F0D2\"}.fa-pinterest-square:before{content:\"\\F0D3\"}.fa-google-plus-square:before{content:\"\\F0D4\"}.fa-google-plus:before{content:\"\\F0D5\"}.fa-money:before{content:\"\\F0D6\"}.fa-caret-down:before{content:\"\\F0D7\"}.fa-caret-up:before{content:\"\\F0D8\"}.fa-caret-left:before{content:\"\\F0D9\"}.fa-caret-right:before{content:\"\\F0DA\"}.fa-columns:before{content:\"\\F0DB\"}.fa-sort:before,.fa-unsorted:before{content:\"\\F0DC\"}.fa-sort-desc:before,.fa-sort-down:before{content:\"\\F0DD\"}.fa-sort-asc:before,.fa-sort-up:before{content:\"\\F0DE\"}.fa-envelope:before{content:\"\\F0E0\"}.fa-linkedin:before{content:\"\\F0E1\"}.fa-rotate-left:before,.fa-undo:before{content:\"\\F0E2\"}.fa-gavel:before,.fa-legal:before{content:\"\\F0E3\"}.fa-dashboard:before,.fa-tachometer:before{content:\"\\F0E4\"}.fa-comment-o:before{content:\"\\F0E5\"}.fa-comments-o:before{content:\"\\F0E6\"}.fa-bolt:before,.fa-flash:before{content:\"\\F0E7\"}.fa-sitemap:before{content:\"\\F0E8\"}.fa-umbrella:before{content:\"\\F0E9\"}.fa-clipboard:before,.fa-paste:before{content:\"\\F0EA\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-exchange:before{content:\"\\F0EC\"}.fa-cloud-download:before{content:\"\\F0ED\"}.fa-cloud-upload:before{content:\"\\F0EE\"}.fa-user-md:before{content:\"\\F0F0\"}.fa-stethoscope:before{content:\"\\F0F1\"}.fa-suitcase:before{content:\"\\F0F2\"}.fa-bell-o:before{content:\"\\F0A2\"}.fa-coffee:before{content:\"\\F0F4\"}.fa-cutlery:before{content:\"\\F0F5\"}.fa-file-text-o:before{content:\"\\F0F6\"}.fa-building-o:before{content:\"\\F0F7\"}.fa-hospital-o:before{content:\"\\F0F8\"}.fa-ambulance:before{content:\"\\F0F9\"}.fa-medkit:before{content:\"\\F0FA\"}.fa-fighter-jet:before{content:\"\\F0FB\"}.fa-beer:before{content:\"\\F0FC\"}.fa-h-square:before{content:\"\\F0FD\"}.fa-plus-square:before{content:\"\\F0FE\"}.fa-angle-double-left:before{content:\"\\F100\"}.fa-angle-double-right:before{content:\"\\F101\"}.fa-angle-double-up:before{content:\"\\F102\"}.fa-angle-double-down:before{content:\"\\F103\"}.fa-angle-left:before{content:\"\\F104\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angle-down:before{content:\"\\F107\"}.fa-desktop:before{content:\"\\F108\"}.fa-laptop:before{content:\"\\F109\"}.fa-tablet:before{content:\"\\F10A\"}.fa-mobile-phone:before,.fa-mobile:before{content:\"\\F10B\"}.fa-circle-o:before{content:\"\\F10C\"}.fa-quote-left:before{content:\"\\F10D\"}.fa-quote-right:before{content:\"\\F10E\"}.fa-spinner:before{content:\"\\F110\"}.fa-circle:before{content:\"\\F111\"}.fa-mail-reply:before,.fa-reply:before{content:\"\\F112\"}.fa-github-alt:before{content:\"\\F113\"}.fa-folder-o:before{content:\"\\F114\"}.fa-folder-open-o:before{content:\"\\F115\"}.fa-smile-o:before{content:\"\\F118\"}.fa-frown-o:before{content:\"\\F119\"}.fa-meh-o:before{content:\"\\F11A\"}.fa-gamepad:before{content:\"\\F11B\"}.fa-keyboard-o:before{content:\"\\F11C\"}.fa-flag-o:before{content:\"\\F11D\"}.fa-flag-checkered:before{content:\"\\F11E\"}.fa-terminal:before{content:\"\\F120\"}.fa-code:before{content:\"\\F121\"}.fa-mail-reply-all:before,.fa-reply-all:before{content:\"\\F122\"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\F123\"}.fa-location-arrow:before{content:\"\\F124\"}.fa-crop:before{content:\"\\F125\"}.fa-code-fork:before{content:\"\\F126\"}.fa-chain-broken:before,.fa-unlink:before{content:\"\\F127\"}.fa-question:before{content:\"\\F128\"}.fa-info:before{content:\"\\F129\"}.fa-exclamation:before{content:\"\\F12A\"}.fa-superscript:before{content:\"\\F12B\"}.fa-subscript:before{content:\"\\F12C\"}.fa-eraser:before{content:\"\\F12D\"}.fa-puzzle-piece:before{content:\"\\F12E\"}.fa-microphone:before{content:\"\\F130\"}.fa-microphone-slash:before{content:\"\\F131\"}.fa-shield:before{content:\"\\F132\"}.fa-calendar-o:before{content:\"\\F133\"}.fa-fire-extinguisher:before{content:\"\\F134\"}.fa-rocket:before{content:\"\\F135\"}.fa-maxcdn:before{content:\"\\F136\"}.fa-chevron-circle-left:before{content:\"\\F137\"}.fa-chevron-circle-right:before{content:\"\\F138\"}.fa-chevron-circle-up:before{content:\"\\F139\"}.fa-chevron-circle-down:before{content:\"\\F13A\"}.fa-html5:before{content:\"\\F13B\"}.fa-css3:before{content:\"\\F13C\"}.fa-anchor:before{content:\"\\F13D\"}.fa-unlock-alt:before{content:\"\\F13E\"}.fa-bullseye:before{content:\"\\F140\"}.fa-ellipsis-h:before{content:\"\\F141\"}.fa-ellipsis-v:before{content:\"\\F142\"}.fa-rss-square:before{content:\"\\F143\"}.fa-play-circle:before{content:\"\\F144\"}.fa-ticket:before{content:\"\\F145\"}.fa-minus-square:before{content:\"\\F146\"}.fa-minus-square-o:before{content:\"\\F147\"}.fa-level-up:before{content:\"\\F148\"}.fa-level-down:before{content:\"\\F149\"}.fa-check-square:before{content:\"\\F14A\"}.fa-pencil-square:before{content:\"\\F14B\"}.fa-external-link-square:before{content:\"\\F14C\"}.fa-share-square:before{content:\"\\F14D\"}.fa-compass:before{content:\"\\F14E\"}.fa-caret-square-o-down:before,.fa-toggle-down:before{content:\"\\F150\"}.fa-caret-square-o-up:before,.fa-toggle-up:before{content:\"\\F151\"}.fa-caret-square-o-right:before,.fa-toggle-right:before{content:\"\\F152\"}.fa-eur:before,.fa-euro:before{content:\"\\F153\"}.fa-gbp:before{content:\"\\F154\"}.fa-dollar:before,.fa-usd:before{content:\"\\F155\"}.fa-inr:before,.fa-rupee:before{content:\"\\F156\"}.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen:before{content:\"\\F157\"}.fa-rouble:before,.fa-rub:before,.fa-ruble:before{content:\"\\F158\"}.fa-krw:before,.fa-won:before{content:\"\\F159\"}.fa-bitcoin:before,.fa-btc:before{content:\"\\F15A\"}.fa-file:before{content:\"\\F15B\"}.fa-file-text:before{content:\"\\F15C\"}.fa-sort-alpha-asc:before{content:\"\\F15D\"}.fa-sort-alpha-desc:before{content:\"\\F15E\"}.fa-sort-amount-asc:before{content:\"\\F160\"}.fa-sort-amount-desc:before{content:\"\\F161\"}.fa-sort-numeric-asc:before{content:\"\\F162\"}.fa-sort-numeric-desc:before{content:\"\\F163\"}.fa-thumbs-up:before{content:\"\\F164\"}.fa-thumbs-down:before{content:\"\\F165\"}.fa-youtube-square:before{content:\"\\F166\"}.fa-youtube:before{content:\"\\F167\"}.fa-xing:before{content:\"\\F168\"}.fa-xing-square:before{content:\"\\F169\"}.fa-youtube-play:before{content:\"\\F16A\"}.fa-dropbox:before{content:\"\\F16B\"}.fa-stack-overflow:before{content:\"\\F16C\"}.fa-instagram:before{content:\"\\F16D\"}.fa-flickr:before{content:\"\\F16E\"}.fa-adn:before{content:\"\\F170\"}.fa-bitbucket:before{content:\"\\F171\"}.fa-bitbucket-square:before{content:\"\\F172\"}.fa-tumblr:before{content:\"\\F173\"}.fa-tumblr-square:before{content:\"\\F174\"}.fa-long-arrow-down:before{content:\"\\F175\"}.fa-long-arrow-up:before{content:\"\\F176\"}.fa-long-arrow-left:before{content:\"\\F177\"}.fa-long-arrow-right:before{content:\"\\F178\"}.fa-apple:before{content:\"\\F179\"}.fa-windows:before{content:\"\\F17A\"}.fa-android:before{content:\"\\F17B\"}.fa-linux:before{content:\"\\F17C\"}.fa-dribbble:before{content:\"\\F17D\"}.fa-skype:before{content:\"\\F17E\"}.fa-foursquare:before{content:\"\\F180\"}.fa-trello:before{content:\"\\F181\"}.fa-female:before{content:\"\\F182\"}.fa-male:before{content:\"\\F183\"}.fa-gittip:before,.fa-gratipay:before{content:\"\\F184\"}.fa-sun-o:before{content:\"\\F185\"}.fa-moon-o:before{content:\"\\F186\"}.fa-archive:before{content:\"\\F187\"}.fa-bug:before{content:\"\\F188\"}.fa-vk:before{content:\"\\F189\"}.fa-weibo:before{content:\"\\F18A\"}.fa-renren:before{content:\"\\F18B\"}.fa-pagelines:before{content:\"\\F18C\"}.fa-stack-exchange:before{content:\"\\F18D\"}.fa-arrow-circle-o-right:before{content:\"\\F18E\"}.fa-arrow-circle-o-left:before{content:\"\\F190\"}.fa-caret-square-o-left:before,.fa-toggle-left:before{content:\"\\F191\"}.fa-dot-circle-o:before{content:\"\\F192\"}.fa-wheelchair:before{content:\"\\F193\"}.fa-vimeo-square:before{content:\"\\F194\"}.fa-try:before,.fa-turkish-lira:before{content:\"\\F195\"}.fa-plus-square-o:before{content:\"\\F196\"}.fa-space-shuttle:before{content:\"\\F197\"}.fa-slack:before{content:\"\\F198\"}.fa-envelope-square:before{content:\"\\F199\"}.fa-wordpress:before{content:\"\\F19A\"}.fa-openid:before{content:\"\\F19B\"}.fa-bank:before,.fa-institution:before,.fa-university:before{content:\"\\F19C\"}.fa-graduation-cap:before,.fa-mortar-board:before{content:\"\\F19D\"}.fa-yahoo:before{content:\"\\F19E\"}.fa-google:before{content:\"\\F1A0\"}.fa-reddit:before{content:\"\\F1A1\"}.fa-reddit-square:before{content:\"\\F1A2\"}.fa-stumbleupon-circle:before{content:\"\\F1A3\"}.fa-stumbleupon:before{content:\"\\F1A4\"}.fa-delicious:before{content:\"\\F1A5\"}.fa-digg:before{content:\"\\F1A6\"}.fa-pied-piper-pp:before{content:\"\\F1A7\"}.fa-pied-piper-alt:before{content:\"\\F1A8\"}.fa-drupal:before{content:\"\\F1A9\"}.fa-joomla:before{content:\"\\F1AA\"}.fa-language:before{content:\"\\F1AB\"}.fa-fax:before{content:\"\\F1AC\"}.fa-building:before{content:\"\\F1AD\"}.fa-child:before{content:\"\\F1AE\"}.fa-paw:before{content:\"\\F1B0\"}.fa-spoon:before{content:\"\\F1B1\"}.fa-cube:before{content:\"\\F1B2\"}.fa-cubes:before{content:\"\\F1B3\"}.fa-behance:before{content:\"\\F1B4\"}.fa-behance-square:before{content:\"\\F1B5\"}.fa-steam:before{content:\"\\F1B6\"}.fa-steam-square:before{content:\"\\F1B7\"}.fa-recycle:before{content:\"\\F1B8\"}.fa-automobile:before,.fa-car:before{content:\"\\F1B9\"}.fa-cab:before,.fa-taxi:before{content:\"\\F1BA\"}.fa-tree:before{content:\"\\F1BB\"}.fa-spotify:before{content:\"\\F1BC\"}.fa-deviantart:before{content:\"\\F1BD\"}.fa-soundcloud:before{content:\"\\F1BE\"}.fa-database:before{content:\"\\F1C0\"}.fa-file-pdf-o:before{content:\"\\F1C1\"}.fa-file-word-o:before{content:\"\\F1C2\"}.fa-file-excel-o:before{content:\"\\F1C3\"}.fa-file-powerpoint-o:before{content:\"\\F1C4\"}.fa-file-image-o:before,.fa-file-photo-o:before,.fa-file-picture-o:before{content:\"\\F1C5\"}.fa-file-archive-o:before,.fa-file-zip-o:before{content:\"\\F1C6\"}.fa-file-audio-o:before,.fa-file-sound-o:before{content:\"\\F1C7\"}.fa-file-movie-o:before,.fa-file-video-o:before{content:\"\\F1C8\"}.fa-file-code-o:before{content:\"\\F1C9\"}.fa-vine:before{content:\"\\F1CA\"}.fa-codepen:before{content:\"\\F1CB\"}.fa-jsfiddle:before{content:\"\\F1CC\"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-ring:before,.fa-life-saver:before,.fa-support:before{content:\"\\F1CD\"}.fa-circle-o-notch:before{content:\"\\F1CE\"}.fa-ra:before,.fa-rebel:before,.fa-resistance:before{content:\"\\F1D0\"}.fa-empire:before,.fa-ge:before{content:\"\\F1D1\"}.fa-git-square:before{content:\"\\F1D2\"}.fa-git:before{content:\"\\F1D3\"}.fa-hacker-news:before,.fa-y-combinator-square:before,.fa-yc-square:before{content:\"\\F1D4\"}.fa-tencent-weibo:before{content:\"\\F1D5\"}.fa-qq:before{content:\"\\F1D6\"}.fa-wechat:before,.fa-weixin:before{content:\"\\F1D7\"}.fa-paper-plane:before,.fa-send:before{content:\"\\F1D8\"}.fa-paper-plane-o:before,.fa-send-o:before{content:\"\\F1D9\"}.fa-history:before{content:\"\\F1DA\"}.fa-circle-thin:before{content:\"\\F1DB\"}.fa-header:before{content:\"\\F1DC\"}.fa-paragraph:before{content:\"\\F1DD\"}.fa-sliders:before{content:\"\\F1DE\"}.fa-share-alt:before{content:\"\\F1E0\"}.fa-share-alt-square:before{content:\"\\F1E1\"}.fa-bomb:before{content:\"\\F1E2\"}.fa-futbol-o:before,.fa-soccer-ball-o:before{content:\"\\F1E3\"}.fa-tty:before{content:\"\\F1E4\"}.fa-binoculars:before{content:\"\\F1E5\"}.fa-plug:before{content:\"\\F1E6\"}.fa-slideshare:before{content:\"\\F1E7\"}.fa-twitch:before{content:\"\\F1E8\"}.fa-yelp:before{content:\"\\F1E9\"}.fa-newspaper-o:before{content:\"\\F1EA\"}.fa-wifi:before{content:\"\\F1EB\"}.fa-calculator:before{content:\"\\F1EC\"}.fa-paypal:before{content:\"\\F1ED\"}.fa-google-wallet:before{content:\"\\F1EE\"}.fa-cc-visa:before{content:\"\\F1F0\"}.fa-cc-mastercard:before{content:\"\\F1F1\"}.fa-cc-discover:before{content:\"\\F1F2\"}.fa-cc-amex:before{content:\"\\F1F3\"}.fa-cc-paypal:before{content:\"\\F1F4\"}.fa-cc-stripe:before{content:\"\\F1F5\"}.fa-bell-slash:before{content:\"\\F1F6\"}.fa-bell-slash-o:before{content:\"\\F1F7\"}.fa-trash:before{content:\"\\F1F8\"}.fa-copyright:before{content:\"\\F1F9\"}.fa-at:before{content:\"\\F1FA\"}.fa-eyedropper:before{content:\"\\F1FB\"}.fa-paint-brush:before{content:\"\\F1FC\"}.fa-birthday-cake:before{content:\"\\F1FD\"}.fa-area-chart:before{content:\"\\F1FE\"}.fa-pie-chart:before{content:\"\\F200\"}.fa-line-chart:before{content:\"\\F201\"}.fa-lastfm:before{content:\"\\F202\"}.fa-lastfm-square:before{content:\"\\F203\"}.fa-toggle-off:before{content:\"\\F204\"}.fa-toggle-on:before{content:\"\\F205\"}.fa-bicycle:before{content:\"\\F206\"}.fa-bus:before{content:\"\\F207\"}.fa-ioxhost:before{content:\"\\F208\"}.fa-angellist:before{content:\"\\F209\"}.fa-cc:before{content:\"\\F20A\"}.fa-ils:before,.fa-shekel:before,.fa-sheqel:before{content:\"\\F20B\"}.fa-meanpath:before{content:\"\\F20C\"}.fa-buysellads:before{content:\"\\F20D\"}.fa-connectdevelop:before{content:\"\\F20E\"}.fa-dashcube:before{content:\"\\F210\"}.fa-forumbee:before{content:\"\\F211\"}.fa-leanpub:before{content:\"\\F212\"}.fa-sellsy:before{content:\"\\F213\"}.fa-shirtsinbulk:before{content:\"\\F214\"}.fa-simplybuilt:before{content:\"\\F215\"}.fa-skyatlas:before{content:\"\\F216\"}.fa-cart-plus:before{content:\"\\F217\"}.fa-cart-arrow-down:before{content:\"\\F218\"}.fa-diamond:before{content:\"\\F219\"}.fa-ship:before{content:\"\\F21A\"}.fa-user-secret:before{content:\"\\F21B\"}.fa-motorcycle:before{content:\"\\F21C\"}.fa-street-view:before{content:\"\\F21D\"}.fa-heartbeat:before{content:\"\\F21E\"}.fa-venus:before{content:\"\\F221\"}.fa-mars:before{content:\"\\F222\"}.fa-mercury:before{content:\"\\F223\"}.fa-intersex:before,.fa-transgender:before{content:\"\\F224\"}.fa-transgender-alt:before{content:\"\\F225\"}.fa-venus-double:before{content:\"\\F226\"}.fa-mars-double:before{content:\"\\F227\"}.fa-venus-mars:before{content:\"\\F228\"}.fa-mars-stroke:before{content:\"\\F229\"}.fa-mars-stroke-v:before{content:\"\\F22A\"}.fa-mars-stroke-h:before{content:\"\\F22B\"}.fa-neuter:before{content:\"\\F22C\"}.fa-genderless:before{content:\"\\F22D\"}.fa-facebook-official:before{content:\"\\F230\"}.fa-pinterest-p:before{content:\"\\F231\"}.fa-whatsapp:before{content:\"\\F232\"}.fa-server:before{content:\"\\F233\"}.fa-user-plus:before{content:\"\\F234\"}.fa-user-times:before{content:\"\\F235\"}.fa-bed:before,.fa-hotel:before{content:\"\\F236\"}.fa-viacoin:before{content:\"\\F237\"}.fa-train:before{content:\"\\F238\"}.fa-subway:before{content:\"\\F239\"}.fa-medium:before{content:\"\\F23A\"}.fa-y-combinator:before,.fa-yc:before{content:\"\\F23B\"}.fa-optin-monster:before{content:\"\\F23C\"}.fa-opencart:before{content:\"\\F23D\"}.fa-expeditedssl:before{content:\"\\F23E\"}.fa-battery-4:before,.fa-battery-full:before,.fa-battery:before{content:\"\\F240\"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:\"\\F241\"}.fa-battery-2:before,.fa-battery-half:before{content:\"\\F242\"}.fa-battery-1:before,.fa-battery-quarter:before{content:\"\\F243\"}.fa-battery-0:before,.fa-battery-empty:before{content:\"\\F244\"}.fa-mouse-pointer:before{content:\"\\F245\"}.fa-i-cursor:before{content:\"\\F246\"}.fa-object-group:before{content:\"\\F247\"}.fa-object-ungroup:before{content:\"\\F248\"}.fa-sticky-note:before{content:\"\\F249\"}.fa-sticky-note-o:before{content:\"\\F24A\"}.fa-cc-jcb:before{content:\"\\F24B\"}.fa-cc-diners-club:before{content:\"\\F24C\"}.fa-clone:before{content:\"\\F24D\"}.fa-balance-scale:before{content:\"\\F24E\"}.fa-hourglass-o:before{content:\"\\F250\"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:\"\\F251\"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:\"\\F252\"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:\"\\F253\"}.fa-hourglass:before{content:\"\\F254\"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:\"\\F255\"}.fa-hand-paper-o:before,.fa-hand-stop-o:before{content:\"\\F256\"}.fa-hand-scissors-o:before{content:\"\\F257\"}.fa-hand-lizard-o:before{content:\"\\F258\"}.fa-hand-spock-o:before{content:\"\\F259\"}.fa-hand-pointer-o:before{content:\"\\F25A\"}.fa-hand-peace-o:before{content:\"\\F25B\"}.fa-trademark:before{content:\"\\F25C\"}.fa-registered:before{content:\"\\F25D\"}.fa-creative-commons:before{content:\"\\F25E\"}.fa-gg:before{content:\"\\F260\"}.fa-gg-circle:before{content:\"\\F261\"}.fa-tripadvisor:before{content:\"\\F262\"}.fa-odnoklassniki:before{content:\"\\F263\"}.fa-odnoklassniki-square:before{content:\"\\F264\"}.fa-get-pocket:before{content:\"\\F265\"}.fa-wikipedia-w:before{content:\"\\F266\"}.fa-safari:before{content:\"\\F267\"}.fa-chrome:before{content:\"\\F268\"}.fa-firefox:before{content:\"\\F269\"}.fa-opera:before{content:\"\\F26A\"}.fa-internet-explorer:before{content:\"\\F26B\"}.fa-television:before,.fa-tv:before{content:\"\\F26C\"}.fa-contao:before{content:\"\\F26D\"}.fa-500px:before{content:\"\\F26E\"}.fa-amazon:before{content:\"\\F270\"}.fa-calendar-plus-o:before{content:\"\\F271\"}.fa-calendar-minus-o:before{content:\"\\F272\"}.fa-calendar-times-o:before{content:\"\\F273\"}.fa-calendar-check-o:before{content:\"\\F274\"}.fa-industry:before{content:\"\\F275\"}.fa-map-pin:before{content:\"\\F276\"}.fa-map-signs:before{content:\"\\F277\"}.fa-map-o:before{content:\"\\F278\"}.fa-map:before{content:\"\\F279\"}.fa-commenting:before{content:\"\\F27A\"}.fa-commenting-o:before{content:\"\\F27B\"}.fa-houzz:before{content:\"\\F27C\"}.fa-vimeo:before{content:\"\\F27D\"}.fa-black-tie:before{content:\"\\F27E\"}.fa-fonticons:before{content:\"\\F280\"}.fa-reddit-alien:before{content:\"\\F281\"}.fa-edge:before{content:\"\\F282\"}.fa-credit-card-alt:before{content:\"\\F283\"}.fa-codiepie:before{content:\"\\F284\"}.fa-modx:before{content:\"\\F285\"}.fa-fort-awesome:before{content:\"\\F286\"}.fa-usb:before{content:\"\\F287\"}.fa-product-hunt:before{content:\"\\F288\"}.fa-mixcloud:before{content:\"\\F289\"}.fa-scribd:before{content:\"\\F28A\"}.fa-pause-circle:before{content:\"\\F28B\"}.fa-pause-circle-o:before{content:\"\\F28C\"}.fa-stop-circle:before{content:\"\\F28D\"}.fa-stop-circle-o:before{content:\"\\F28E\"}.fa-shopping-bag:before{content:\"\\F290\"}.fa-shopping-basket:before{content:\"\\F291\"}.fa-hashtag:before{content:\"\\F292\"}.fa-bluetooth:before{content:\"\\F293\"}.fa-bluetooth-b:before{content:\"\\F294\"}.fa-percent:before{content:\"\\F295\"}.fa-gitlab:before{content:\"\\F296\"}.fa-wpbeginner:before{content:\"\\F297\"}.fa-wpforms:before{content:\"\\F298\"}.fa-envira:before{content:\"\\F299\"}.fa-universal-access:before{content:\"\\F29A\"}.fa-wheelchair-alt:before{content:\"\\F29B\"}.fa-question-circle-o:before{content:\"\\F29C\"}.fa-blind:before{content:\"\\F29D\"}.fa-audio-description:before{content:\"\\F29E\"}.fa-volume-control-phone:before{content:\"\\F2A0\"}.fa-braille:before{content:\"\\F2A1\"}.fa-assistive-listening-systems:before{content:\"\\F2A2\"}.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before{content:\"\\F2A3\"}.fa-deaf:before,.fa-deafness:before,.fa-hard-of-hearing:before{content:\"\\F2A4\"}.fa-glide:before{content:\"\\F2A5\"}.fa-glide-g:before{content:\"\\F2A6\"}.fa-sign-language:before,.fa-signing:before{content:\"\\F2A7\"}.fa-low-vision:before{content:\"\\F2A8\"}.fa-viadeo:before{content:\"\\F2A9\"}.fa-viadeo-square:before{content:\"\\F2AA\"}.fa-snapchat:before{content:\"\\F2AB\"}.fa-snapchat-ghost:before{content:\"\\F2AC\"}.fa-snapchat-square:before{content:\"\\F2AD\"}.fa-pied-piper:before{content:\"\\F2AE\"}.fa-first-order:before{content:\"\\F2B0\"}.fa-yoast:before{content:\"\\F2B1\"}.fa-themeisle:before{content:\"\\F2B2\"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:\"\\F2B3\"}.fa-fa:before,.fa-font-awesome:before{content:\"\\F2B4\"}.fa-handshake-o:before{content:\"\\F2B5\"}.fa-envelope-open:before{content:\"\\F2B6\"}.fa-envelope-open-o:before{content:\"\\F2B7\"}.fa-linode:before{content:\"\\F2B8\"}.fa-address-book:before{content:\"\\F2B9\"}.fa-address-book-o:before{content:\"\\F2BA\"}.fa-address-card:before,.fa-vcard:before{content:\"\\F2BB\"}.fa-address-card-o:before,.fa-vcard-o:before{content:\"\\F2BC\"}.fa-user-circle:before{content:\"\\F2BD\"}.fa-user-circle-o:before{content:\"\\F2BE\"}.fa-user-o:before{content:\"\\F2C0\"}.fa-id-badge:before{content:\"\\F2C1\"}.fa-drivers-license:before,.fa-id-card:before{content:\"\\F2C2\"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:\"\\F2C3\"}.fa-quora:before{content:\"\\F2C4\"}.fa-free-code-camp:before{content:\"\\F2C5\"}.fa-telegram:before{content:\"\\F2C6\"}.fa-thermometer-4:before,.fa-thermometer-full:before,.fa-thermometer:before{content:\"\\F2C7\"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:\"\\F2C8\"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:\"\\F2C9\"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:\"\\F2CA\"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:\"\\F2CB\"}.fa-shower:before{content:\"\\F2CC\"}.fa-bath:before,.fa-bathtub:before,.fa-s15:before{content:\"\\F2CD\"}.fa-podcast:before{content:\"\\F2CE\"}.fa-window-maximize:before{content:\"\\F2D0\"}.fa-window-minimize:before{content:\"\\F2D1\"}.fa-window-restore:before{content:\"\\F2D2\"}.fa-times-rectangle:before,.fa-window-close:before{content:\"\\F2D3\"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:\"\\F2D4\"}.fa-bandcamp:before{content:\"\\F2D5\"}.fa-grav:before{content:\"\\F2D6\"}.fa-etsy:before{content:\"\\F2D7\"}.fa-imdb:before{content:\"\\F2D8\"}.fa-ravelry:before{content:\"\\F2D9\"}.fa-eercast:before{content:\"\\F2DA\"}.fa-microchip:before{content:\"\\F2DB\"}.fa-snowflake-o:before{content:\"\\F2DC\"}.fa-superpowers:before{content:\"\\F2DD\"}.fa-wpexplorer:before{content:\"\\F2DE\"}.fa-meetup:before{content:\"\\F2E0\"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.eot?674f50d287a8c48dc19ba404d20fe713";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.eot?674f50d287a8c48dc19ba404d20fe713";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.woff2?af7ae505a9eed503f8b8e6982036873e";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.woff?fee66e712a8a08eef5805a46892932ad";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.ttf?b06871f281fee6b241d60582ae9369b9";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.svg?912ec66d7572ff821749319396470bde";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(5);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:themify;src:url(" + escape(__webpack_require__(90)) + ");src:url(" + escape(__webpack_require__(91)) + "?#iefix-fvbane) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(92)) + ") format(\"woff\"),url(" + escape(__webpack_require__(93)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(94)) + "#themify) format(\"svg\");font-weight:400;font-style:normal}[class*=\" ti-\"],[class^=ti-]{font-family:themify;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ti-wand:before{content:\"\\E600\"}.ti-volume:before{content:\"\\E601\"}.ti-user:before{content:\"\\E602\"}.ti-unlock:before{content:\"\\E603\"}.ti-unlink:before{content:\"\\E604\"}.ti-trash:before{content:\"\\E605\"}.ti-thought:before{content:\"\\E606\"}.ti-target:before{content:\"\\E607\"}.ti-tag:before{content:\"\\E608\"}.ti-tablet:before{content:\"\\E609\"}.ti-star:before{content:\"\\E60A\"}.ti-spray:before{content:\"\\E60B\"}.ti-signal:before{content:\"\\E60C\"}.ti-shopping-cart:before{content:\"\\E60D\"}.ti-shopping-cart-full:before{content:\"\\E60E\"}.ti-settings:before{content:\"\\E60F\"}.ti-search:before{content:\"\\E610\"}.ti-zoom-in:before{content:\"\\E611\"}.ti-zoom-out:before{content:\"\\E612\"}.ti-cut:before{content:\"\\E613\"}.ti-ruler:before{content:\"\\E614\"}.ti-ruler-pencil:before{content:\"\\E615\"}.ti-ruler-alt:before{content:\"\\E616\"}.ti-bookmark:before{content:\"\\E617\"}.ti-bookmark-alt:before{content:\"\\E618\"}.ti-reload:before{content:\"\\E619\"}.ti-plus:before{content:\"\\E61A\"}.ti-pin:before{content:\"\\E61B\"}.ti-pencil:before{content:\"\\E61C\"}.ti-pencil-alt:before{content:\"\\E61D\"}.ti-paint-roller:before{content:\"\\E61E\"}.ti-paint-bucket:before{content:\"\\E61F\"}.ti-na:before{content:\"\\E620\"}.ti-mobile:before{content:\"\\E621\"}.ti-minus:before{content:\"\\E622\"}.ti-medall:before{content:\"\\E623\"}.ti-medall-alt:before{content:\"\\E624\"}.ti-marker:before{content:\"\\E625\"}.ti-marker-alt:before{content:\"\\E626\"}.ti-arrow-up:before{content:\"\\E627\"}.ti-arrow-right:before{content:\"\\E628\"}.ti-arrow-left:before{content:\"\\E629\"}.ti-arrow-down:before{content:\"\\E62A\"}.ti-lock:before{content:\"\\E62B\"}.ti-location-arrow:before{content:\"\\E62C\"}.ti-link:before{content:\"\\E62D\"}.ti-layout:before{content:\"\\E62E\"}.ti-layers:before{content:\"\\E62F\"}.ti-layers-alt:before{content:\"\\E630\"}.ti-key:before{content:\"\\E631\"}.ti-import:before{content:\"\\E632\"}.ti-image:before{content:\"\\E633\"}.ti-heart:before{content:\"\\E634\"}.ti-heart-broken:before{content:\"\\E635\"}.ti-hand-stop:before{content:\"\\E636\"}.ti-hand-open:before{content:\"\\E637\"}.ti-hand-drag:before{content:\"\\E638\"}.ti-folder:before{content:\"\\E639\"}.ti-flag:before{content:\"\\E63A\"}.ti-flag-alt:before{content:\"\\E63B\"}.ti-flag-alt-2:before{content:\"\\E63C\"}.ti-eye:before{content:\"\\E63D\"}.ti-export:before{content:\"\\E63E\"}.ti-exchange-vertical:before{content:\"\\E63F\"}.ti-desktop:before{content:\"\\E640\"}.ti-cup:before{content:\"\\E641\"}.ti-crown:before{content:\"\\E642\"}.ti-comments:before{content:\"\\E643\"}.ti-comment:before{content:\"\\E644\"}.ti-comment-alt:before{content:\"\\E645\"}.ti-close:before{content:\"\\E646\"}.ti-clip:before{content:\"\\E647\"}.ti-angle-up:before{content:\"\\E648\"}.ti-angle-right:before{content:\"\\E649\"}.ti-angle-left:before{content:\"\\E64A\"}.ti-angle-down:before{content:\"\\E64B\"}.ti-check:before{content:\"\\E64C\"}.ti-check-box:before{content:\"\\E64D\"}.ti-camera:before{content:\"\\E64E\"}.ti-announcement:before{content:\"\\E64F\"}.ti-brush:before{content:\"\\E650\"}.ti-briefcase:before{content:\"\\E651\"}.ti-bolt:before{content:\"\\E652\"}.ti-bolt-alt:before{content:\"\\E653\"}.ti-blackboard:before{content:\"\\E654\"}.ti-bag:before{content:\"\\E655\"}.ti-move:before{content:\"\\E656\"}.ti-arrows-vertical:before{content:\"\\E657\"}.ti-arrows-horizontal:before{content:\"\\E658\"}.ti-fullscreen:before{content:\"\\E659\"}.ti-arrow-top-right:before{content:\"\\E65A\"}.ti-arrow-top-left:before{content:\"\\E65B\"}.ti-arrow-circle-up:before{content:\"\\E65C\"}.ti-arrow-circle-right:before{content:\"\\E65D\"}.ti-arrow-circle-left:before{content:\"\\E65E\"}.ti-arrow-circle-down:before{content:\"\\E65F\"}.ti-angle-double-up:before{content:\"\\E660\"}.ti-angle-double-right:before{content:\"\\E661\"}.ti-angle-double-left:before{content:\"\\E662\"}.ti-angle-double-down:before{content:\"\\E663\"}.ti-zip:before{content:\"\\E664\"}.ti-world:before{content:\"\\E665\"}.ti-wheelchair:before{content:\"\\E666\"}.ti-view-list:before{content:\"\\E667\"}.ti-view-list-alt:before{content:\"\\E668\"}.ti-view-grid:before{content:\"\\E669\"}.ti-uppercase:before{content:\"\\E66A\"}.ti-upload:before{content:\"\\E66B\"}.ti-underline:before{content:\"\\E66C\"}.ti-truck:before{content:\"\\E66D\"}.ti-timer:before{content:\"\\E66E\"}.ti-ticket:before{content:\"\\E66F\"}.ti-thumb-up:before{content:\"\\E670\"}.ti-thumb-down:before{content:\"\\E671\"}.ti-text:before{content:\"\\E672\"}.ti-stats-up:before{content:\"\\E673\"}.ti-stats-down:before{content:\"\\E674\"}.ti-split-v:before{content:\"\\E675\"}.ti-split-h:before{content:\"\\E676\"}.ti-smallcap:before{content:\"\\E677\"}.ti-shine:before{content:\"\\E678\"}.ti-shift-right:before{content:\"\\E679\"}.ti-shift-left:before{content:\"\\E67A\"}.ti-shield:before{content:\"\\E67B\"}.ti-notepad:before{content:\"\\E67C\"}.ti-server:before{content:\"\\E67D\"}.ti-quote-right:before{content:\"\\E67E\"}.ti-quote-left:before{content:\"\\E67F\"}.ti-pulse:before{content:\"\\E680\"}.ti-printer:before{content:\"\\E681\"}.ti-power-off:before{content:\"\\E682\"}.ti-plug:before{content:\"\\E683\"}.ti-pie-chart:before{content:\"\\E684\"}.ti-paragraph:before{content:\"\\E685\"}.ti-panel:before{content:\"\\E686\"}.ti-package:before{content:\"\\E687\"}.ti-music:before{content:\"\\E688\"}.ti-music-alt:before{content:\"\\E689\"}.ti-mouse:before{content:\"\\E68A\"}.ti-mouse-alt:before{content:\"\\E68B\"}.ti-money:before{content:\"\\E68C\"}.ti-microphone:before{content:\"\\E68D\"}.ti-menu:before{content:\"\\E68E\"}.ti-menu-alt:before{content:\"\\E68F\"}.ti-map:before{content:\"\\E690\"}.ti-map-alt:before{content:\"\\E691\"}.ti-loop:before{content:\"\\E692\"}.ti-location-pin:before{content:\"\\E693\"}.ti-list:before{content:\"\\E694\"}.ti-light-bulb:before{content:\"\\E695\"}.ti-Italic:before{content:\"\\E696\"}.ti-info:before{content:\"\\E697\"}.ti-infinite:before{content:\"\\E698\"}.ti-id-badge:before{content:\"\\E699\"}.ti-hummer:before{content:\"\\E69A\"}.ti-home:before{content:\"\\E69B\"}.ti-help:before{content:\"\\E69C\"}.ti-headphone:before{content:\"\\E69D\"}.ti-harddrives:before{content:\"\\E69E\"}.ti-harddrive:before{content:\"\\E69F\"}.ti-gift:before{content:\"\\E6A0\"}.ti-game:before{content:\"\\E6A1\"}.ti-filter:before{content:\"\\E6A2\"}.ti-files:before{content:\"\\E6A3\"}.ti-file:before{content:\"\\E6A4\"}.ti-eraser:before{content:\"\\E6A5\"}.ti-envelope:before{content:\"\\E6A6\"}.ti-download:before{content:\"\\E6A7\"}.ti-direction:before{content:\"\\E6A8\"}.ti-direction-alt:before{content:\"\\E6A9\"}.ti-dashboard:before{content:\"\\E6AA\"}.ti-control-stop:before{content:\"\\E6AB\"}.ti-control-shuffle:before{content:\"\\E6AC\"}.ti-control-play:before{content:\"\\E6AD\"}.ti-control-pause:before{content:\"\\E6AE\"}.ti-control-forward:before{content:\"\\E6AF\"}.ti-control-backward:before{content:\"\\E6B0\"}.ti-cloud:before{content:\"\\E6B1\"}.ti-cloud-up:before{content:\"\\E6B2\"}.ti-cloud-down:before{content:\"\\E6B3\"}.ti-clipboard:before{content:\"\\E6B4\"}.ti-car:before{content:\"\\E6B5\"}.ti-calendar:before{content:\"\\E6B6\"}.ti-book:before{content:\"\\E6B7\"}.ti-bell:before{content:\"\\E6B8\"}.ti-basketball:before{content:\"\\E6B9\"}.ti-bar-chart:before{content:\"\\E6BA\"}.ti-bar-chart-alt:before{content:\"\\E6BB\"}.ti-back-right:before{content:\"\\E6BC\"}.ti-back-left:before{content:\"\\E6BD\"}.ti-arrows-corner:before{content:\"\\E6BE\"}.ti-archive:before{content:\"\\E6BF\"}.ti-anchor:before{content:\"\\E6C0\"}.ti-align-right:before{content:\"\\E6C1\"}.ti-align-left:before{content:\"\\E6C2\"}.ti-align-justify:before{content:\"\\E6C3\"}.ti-align-center:before{content:\"\\E6C4\"}.ti-alert:before{content:\"\\E6C5\"}.ti-alarm-clock:before{content:\"\\E6C6\"}.ti-agenda:before{content:\"\\E6C7\"}.ti-write:before{content:\"\\E6C8\"}.ti-window:before{content:\"\\E6C9\"}.ti-widgetized:before{content:\"\\E6CA\"}.ti-widget:before{content:\"\\E6CB\"}.ti-widget-alt:before{content:\"\\E6CC\"}.ti-wallet:before{content:\"\\E6CD\"}.ti-video-clapper:before{content:\"\\E6CE\"}.ti-video-camera:before{content:\"\\E6CF\"}.ti-vector:before{content:\"\\E6D0\"}.ti-themify-logo:before{content:\"\\E6D1\"}.ti-themify-favicon:before{content:\"\\E6D2\"}.ti-themify-favicon-alt:before{content:\"\\E6D3\"}.ti-support:before{content:\"\\E6D4\"}.ti-stamp:before{content:\"\\E6D5\"}.ti-split-v-alt:before{content:\"\\E6D6\"}.ti-slice:before{content:\"\\E6D7\"}.ti-shortcode:before{content:\"\\E6D8\"}.ti-shift-right-alt:before{content:\"\\E6D9\"}.ti-shift-left-alt:before{content:\"\\E6DA\"}.ti-ruler-alt-2:before{content:\"\\E6DB\"}.ti-receipt:before{content:\"\\E6DC\"}.ti-pin2:before{content:\"\\E6DD\"}.ti-pin-alt:before{content:\"\\E6DE\"}.ti-pencil-alt2:before{content:\"\\E6DF\"}.ti-palette:before{content:\"\\E6E0\"}.ti-more:before{content:\"\\E6E1\"}.ti-more-alt:before{content:\"\\E6E2\"}.ti-microphone-alt:before{content:\"\\E6E3\"}.ti-magnet:before{content:\"\\E6E4\"}.ti-line-double:before{content:\"\\E6E5\"}.ti-line-dotted:before{content:\"\\E6E6\"}.ti-line-dashed:before{content:\"\\E6E7\"}.ti-layout-width-full:before{content:\"\\E6E8\"}.ti-layout-width-default:before{content:\"\\E6E9\"}.ti-layout-width-default-alt:before{content:\"\\E6EA\"}.ti-layout-tab:before{content:\"\\E6EB\"}.ti-layout-tab-window:before{content:\"\\E6EC\"}.ti-layout-tab-v:before{content:\"\\E6ED\"}.ti-layout-tab-min:before{content:\"\\E6EE\"}.ti-layout-slider:before{content:\"\\E6EF\"}.ti-layout-slider-alt:before{content:\"\\E6F0\"}.ti-layout-sidebar-right:before{content:\"\\E6F1\"}.ti-layout-sidebar-none:before{content:\"\\E6F2\"}.ti-layout-sidebar-left:before{content:\"\\E6F3\"}.ti-layout-placeholder:before{content:\"\\E6F4\"}.ti-layout-menu:before{content:\"\\E6F5\"}.ti-layout-menu-v:before{content:\"\\E6F6\"}.ti-layout-menu-separated:before{content:\"\\E6F7\"}.ti-layout-menu-full:before{content:\"\\E6F8\"}.ti-layout-media-right-alt:before{content:\"\\E6F9\"}.ti-layout-media-right:before{content:\"\\E6FA\"}.ti-layout-media-overlay:before{content:\"\\E6FB\"}.ti-layout-media-overlay-alt:before{content:\"\\E6FC\"}.ti-layout-media-overlay-alt-2:before{content:\"\\E6FD\"}.ti-layout-media-left-alt:before{content:\"\\E6FE\"}.ti-layout-media-left:before{content:\"\\E6FF\"}.ti-layout-media-center-alt:before{content:\"\\E700\"}.ti-layout-media-center:before{content:\"\\E701\"}.ti-layout-list-thumb:before{content:\"\\E702\"}.ti-layout-list-thumb-alt:before{content:\"\\E703\"}.ti-layout-list-post:before{content:\"\\E704\"}.ti-layout-list-large-image:before{content:\"\\E705\"}.ti-layout-line-solid:before{content:\"\\E706\"}.ti-layout-grid4:before{content:\"\\E707\"}.ti-layout-grid3:before{content:\"\\E708\"}.ti-layout-grid2:before{content:\"\\E709\"}.ti-layout-grid2-thumb:before{content:\"\\E70A\"}.ti-layout-cta-right:before{content:\"\\E70B\"}.ti-layout-cta-left:before{content:\"\\E70C\"}.ti-layout-cta-center:before{content:\"\\E70D\"}.ti-layout-cta-btn-right:before{content:\"\\E70E\"}.ti-layout-cta-btn-left:before{content:\"\\E70F\"}.ti-layout-column4:before{content:\"\\E710\"}.ti-layout-column3:before{content:\"\\E711\"}.ti-layout-column2:before{content:\"\\E712\"}.ti-layout-accordion-separated:before{content:\"\\E713\"}.ti-layout-accordion-merged:before{content:\"\\E714\"}.ti-layout-accordion-list:before{content:\"\\E715\"}.ti-ink-pen:before{content:\"\\E716\"}.ti-info-alt:before{content:\"\\E717\"}.ti-help-alt:before{content:\"\\E718\"}.ti-headphone-alt:before{content:\"\\E719\"}.ti-hand-point-up:before{content:\"\\E71A\"}.ti-hand-point-right:before{content:\"\\E71B\"}.ti-hand-point-left:before{content:\"\\E71C\"}.ti-hand-point-down:before{content:\"\\E71D\"}.ti-gallery:before{content:\"\\E71E\"}.ti-face-smile:before{content:\"\\E71F\"}.ti-face-sad:before{content:\"\\E720\"}.ti-credit-card:before{content:\"\\E721\"}.ti-control-skip-forward:before{content:\"\\E722\"}.ti-control-skip-backward:before{content:\"\\E723\"}.ti-control-record:before{content:\"\\E724\"}.ti-control-eject:before{content:\"\\E725\"}.ti-comments-smiley:before{content:\"\\E726\"}.ti-brush-alt:before{content:\"\\E727\"}.ti-youtube:before{content:\"\\E728\"}.ti-vimeo:before{content:\"\\E729\"}.ti-twitter:before{content:\"\\E72A\"}.ti-time:before{content:\"\\E72B\"}.ti-tumblr:before{content:\"\\E72C\"}.ti-skype:before{content:\"\\E72D\"}.ti-share:before{content:\"\\E72E\"}.ti-share-alt:before{content:\"\\E72F\"}.ti-rocket:before{content:\"\\E730\"}.ti-pinterest:before{content:\"\\E731\"}.ti-new-window:before{content:\"\\E732\"}.ti-microsoft:before{content:\"\\E733\"}.ti-list-ol:before{content:\"\\E734\"}.ti-linkedin:before{content:\"\\E735\"}.ti-layout-sidebar-2:before{content:\"\\E736\"}.ti-layout-grid4-alt:before{content:\"\\E737\"}.ti-layout-grid3-alt:before{content:\"\\E738\"}.ti-layout-grid2-alt:before{content:\"\\E739\"}.ti-layout-column4-alt:before{content:\"\\E73A\"}.ti-layout-column3-alt:before{content:\"\\E73B\"}.ti-layout-column2-alt:before{content:\"\\E73C\"}.ti-instagram:before{content:\"\\E73D\"}.ti-google:before{content:\"\\E73E\"}.ti-github:before{content:\"\\E73F\"}.ti-flickr:before{content:\"\\E740\"}.ti-facebook:before{content:\"\\E741\"}.ti-dropbox:before{content:\"\\E742\"}.ti-dribbble:before{content:\"\\E743\"}.ti-apple:before{content:\"\\E744\"}.ti-android:before{content:\"\\E745\"}.ti-save:before{content:\"\\E746\"}.ti-save-alt:before{content:\"\\E747\"}.ti-yahoo:before{content:\"\\E748\"}.ti-wordpress:before{content:\"\\E749\"}.ti-vimeo-alt:before{content:\"\\E74A\"}.ti-twitter-alt:before{content:\"\\E74B\"}.ti-tumblr-alt:before{content:\"\\E74C\"}.ti-trello:before{content:\"\\E74D\"}.ti-stack-overflow:before{content:\"\\E74E\"}.ti-soundcloud:before{content:\"\\E74F\"}.ti-sharethis:before{content:\"\\E750\"}.ti-sharethis-alt:before{content:\"\\E751\"}.ti-reddit:before{content:\"\\E752\"}.ti-pinterest-alt:before{content:\"\\E753\"}.ti-microsoft-alt:before{content:\"\\E754\"}.ti-linux:before{content:\"\\E755\"}.ti-jsfiddle:before{content:\"\\E756\"}.ti-joomla:before{content:\"\\E757\"}.ti-html5:before{content:\"\\E758\"}.ti-flickr-alt:before{content:\"\\E759\"}.ti-email:before{content:\"\\E75A\"}.ti-drupal:before{content:\"\\E75B\"}.ti-dropbox-alt:before{content:\"\\E75C\"}.ti-css3:before{content:\"\\E75D\"}.ti-rss:before{content:\"\\E75E\"}.ti-rss-alt:before{content:\"\\E75F\"}", ""]);

// exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "themify.eot?2c454669bdf3aebf32a1bd8ac1e0d2d6";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "themify.eot?2c454669bdf3aebf32a1bd8ac1e0d2d6";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "themify.woff?a1ecc3b826d01251edddf29c3e4e1e97";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "themify.ttf?e23a7dcaefbde4e74e263247aa42ecd7";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "themify.svg?9c8e96ecc7fa01e6ebcd196495ed2db5";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(5);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:Pe-icon-7-filled;src:url(" + escape(__webpack_require__(96)) + ");src:url(" + escape(__webpack_require__(97)) + "?#iefixkinggk) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(98)) + ") format(\"woff\"),url(" + escape(__webpack_require__(99)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(100)) + "#Pe-icon-7-filled) format(\"svg\");font-weight:400;font-style:normal}[class*=\" pe-7f-\"],[class^=pe-7f-]{display:inline-block;font-family:Pe-icon-7-filled;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.pe-7f-album:before{content:\"\\E625\"}.pe-7f-arc:before{content:\"\\E626\"}.pe-7f-back-2:before{content:\"\\E627\"}.pe-7f-bandaid:before{content:\"\\E628\"}.pe-7f-car:before{content:\"\\E629\"}.pe-7f-diamond:before{content:\"\\E62A\"}.pe-7f-door-lock:before{content:\"\\E62B\"}.pe-7f-eyedropper:before{content:\"\\E62C\"}.pe-7f-female:before{content:\"\\E62D\"}.pe-7f-gym:before{content:\"\\E62E\"}.pe-7f-hammer:before{content:\"\\E62F\"}.pe-7f-headphones:before{content:\"\\E630\"}.pe-7f-helm:before{content:\"\\E631\"}.pe-7f-hourglass:before{content:\"\\E632\"}.pe-7f-leaf:before{content:\"\\E633\"}.pe-7f-magic-wand:before{content:\"\\E634\"}.pe-7f-male:before{content:\"\\E635\"}.pe-7f-map-2:before{content:\"\\E636\"}.pe-7f-next-2:before{content:\"\\E637\"}.pe-7f-paint-bucket:before{content:\"\\E638\"}.pe-7f-pendrive:before{content:\"\\E639\"}.pe-7f-photo:before{content:\"\\E63A\"}.pe-7f-piggy:before{content:\"\\E63B\"}.pe-7f-plugin:before{content:\"\\E63C\"}.pe-7f-refresh-2:before{content:\"\\E63D\"}.pe-7f-rocket:before{content:\"\\E63E\"}.pe-7f-settings:before{content:\"\\E63F\"}.pe-7f-shield:before{content:\"\\E640\"}.pe-7f-smile:before{content:\"\\E641\"}.pe-7f-usb:before{content:\"\\E642\"}.pe-7f-vector:before{content:\"\\E643\"}.pe-7f-wine:before{content:\"\\E644\"}.pe-7f-cloud-upload:before{content:\"\\E605\"}.pe-7f-angle-up:before{content:\"\\E601\"}.pe-7f-cloud-download:before{content:\"\\E606\"}.pe-7f-angle-right:before{content:\"\\E602\"}.pe-7f-angle-left:before{content:\"\\E603\"}.pe-7f-angle-down:before{content:\"\\E604\"}.pe-7f-wallet:before{content:\"\\E680\"}.pe-7f-volume2:before{content:\"\\E681\"}.pe-7f-volume1:before{content:\"\\E682\"}.pe-7f-voicemail:before{content:\"\\E683\"}.pe-7f-video:before{content:\"\\E684\"}.pe-7f-user:before{content:\"\\E685\"}.pe-7f-upload:before{content:\"\\E686\"}.pe-7f-unlock:before{content:\"\\E687\"}.pe-7f-umbrella:before{content:\"\\E688\"}.pe-7f-trash:before{content:\"\\E689\"}.pe-7f-tools:before{content:\"\\E68A\"}.pe-7f-timer:before{content:\"\\E68B\"}.pe-7f-ticket:before{content:\"\\E68C\"}.pe-7f-target:before{content:\"\\E68D\"}.pe-7f-sun:before{content:\"\\E68E\"}.pe-7f-study:before{content:\"\\E68F\"}.pe-7f-stopwatch:before{content:\"\\E690\"}.pe-7f-star:before{content:\"\\E691\"}.pe-7f-speaker:before{content:\"\\E692\"}.pe-7f-signal:before{content:\"\\E693\"}.pe-7f-shuffle:before{content:\"\\E694\"}.pe-7f-shopbag:before{content:\"\\E695\"}.pe-7f-share:before{content:\"\\E696\"}.pe-7f-server:before{content:\"\\E697\"}.pe-7f-search:before{content:\"\\E698\"}.pe-7f-science:before{content:\"\\E699\"}.pe-7f-ribbon:before{content:\"\\E69A\"}.pe-7f-repeat:before{content:\"\\E69B\"}.pe-7f-refresh:before{content:\"\\E69C\"}.pe-7f-refresh-cloud:before{content:\"\\E69D\"}.pe-7f-radio:before{content:\"\\E69E\"}.pe-7f-print:before{content:\"\\E69F\"}.pe-7f-prev:before{content:\"\\E6A0\"}.pe-7f-power:before{content:\"\\E6A1\"}.pe-7f-portfolio:before{content:\"\\E6A2\"}.pe-7f-plus:before{content:\"\\E6A3\"}.pe-7f-play:before{content:\"\\E6A4\"}.pe-7f-plane:before{content:\"\\E6A5\"}.pe-7f-photo-gallery:before{content:\"\\E6A6\"}.pe-7f-phone:before{content:\"\\E6A7\"}.pe-7f-pen:before{content:\"\\E6A8\"}.pe-7f-paper-plane:before{content:\"\\E6A9\"}.pe-7f-bluetooth:before{content:\"\\E607\"}.pe-7f-paint:before{content:\"\\E6AA\"}.pe-7f-wristwatch:before{content:\"\\E608\"}.pe-7f-notebook:before{content:\"\\E6AB\"}.pe-7f-world:before{content:\"\\E609\"}.pe-7f-note:before{content:\"\\E6AC\"}.pe-7f-volume:before{content:\"\\E60A\"}.pe-7f-paperclip:before{content:\"\\E614\"}.pe-7f-news-paper:before{content:\"\\E6AE\"}.pe-7f-note2:before{content:\"\\E615\"}.pe-7f-musiclist:before{content:\"\\E6AF\"}.pe-7f-network:before{content:\"\\E616\"}.pe-7f-music:before{content:\"\\E6B0\"}.pe-7f-mouse:before{content:\"\\E6B1\"}.pe-7f-cash:before{content:\"\\E621\"}.pe-7f-more:before{content:\"\\E6B2\"}.pe-7f-add-user:before{content:\"\\E622\"}.pe-7f-moon:before{content:\"\\E6B3\"}.pe-7f-way:before{content:\"\\E623\"}.pe-7f-monitor:before{content:\"\\E6B4\"}.pe-7f-bottom-arrow:before{content:\"\\E624\"}.pe-7f-micro:before{content:\"\\E6B5\"}.pe-7f-medal:before{content:\"\\E618\"}.pe-7f-menu:before{content:\"\\E6B6\"}.pe-7f-like2:before{content:\"\\E619\"}.pe-7f-map:before{content:\"\\E6B7\"}.pe-7f-left-arrow:before{content:\"\\E61A\"}.pe-7f-map-marker:before{content:\"\\E6B8\"}.pe-7f-key:before{content:\"\\E61B\"}.pe-7f-mail:before{content:\"\\E6B9\"}.pe-7f-joy:before{content:\"\\E61C\"}.pe-7f-mail-open:before{content:\"\\E6BA\"}.pe-7f-id:before{content:\"\\E61D\"}.pe-7f-mail-open-file:before{content:\"\\E6BB\"}.pe-7f-film:before{content:\"\\E61E\"}.pe-7f-magnet:before{content:\"\\E6BC\"}.pe-7f-disk:before{content:\"\\E61F\"}.pe-7f-loop:before{content:\"\\E6BD\"}.pe-7f-delete-user:before{content:\"\\E620\"}.pe-7f-look:before{content:\"\\E6BE\"}.pe-7f-pin:before{content:\"\\E613\"}.pe-7f-lock:before{content:\"\\E6BF\"}.pe-7f-users:before{content:\"\\E60B\"}.pe-7f-lintern:before{content:\"\\E6C0\"}.pe-7f-user-female:before{content:\"\\E60C\"}.pe-7f-link:before{content:\"\\E6C1\"}.pe-7f-up-arrow:before{content:\"\\E60D\"}.pe-7f-like:before{content:\"\\E6C2\"}.pe-7f-switch:before{content:\"\\E60E\"}.pe-7f-light:before{content:\"\\E6C3\"}.pe-7f-scissors:before{content:\"\\E60F\"}.pe-7f-less:before{content:\"\\E6C4\"}.pe-7f-safe:before{content:\"\\E610\"}.pe-7f-keypad:before{content:\"\\E6C5\"}.pe-7f-right-arrow:before{content:\"\\E611\"}.pe-7f-junk:before{content:\"\\E6C6\"}.pe-7f-plug:before{content:\"\\E612\"}.pe-7f-info:before{content:\"\\E6C7\"}.pe-7f-mute:before{content:\"\\E617\"}.pe-7f-home:before{content:\"\\E6C8\"}.pe-7f-help2:before{content:\"\\E6C9\"}.pe-7f-help1:before{content:\"\\E6CA\"}.pe-7f-graph3:before{content:\"\\E6CC\"}.pe-7f-graph2:before{content:\"\\E6CD\"}.pe-7f-graph1:before{content:\"\\E6CE\"}.pe-7f-graph:before{content:\"\\E6CF\"}.pe-7f-global:before{content:\"\\E6D0\"}.pe-7f-gleam:before{content:\"\\E6D1\"}.pe-7f-glasses:before{content:\"\\E6D2\"}.pe-7f-gift:before{content:\"\\E6D3\"}.pe-7f-folder:before{content:\"\\E6D4\"}.pe-7f-flag:before{content:\"\\E6D5\"}.pe-7f-filter:before{content:\"\\E6D6\"}.pe-7f-file:before{content:\"\\E6D7\"}.pe-7f-expand:before{content:\"\\E6D8\"}.pe-7f-expand1:before{content:\"\\E6D9\"}.pe-7f-edit:before{content:\"\\E6DA\"}.pe-7f-drop:before{content:\"\\E6DB\"}.pe-7f-drawer:before{content:\"\\E6DC\"}.pe-7f-download:before{content:\"\\E6DD\"}.pe-7f-display2:before{content:\"\\E6DE\"}.pe-7f-display1:before{content:\"\\E6DF\"}.pe-7f-diskette:before{content:\"\\E6E0\"}.pe-7f-date:before{content:\"\\E6E1\"}.pe-7f-cup:before{content:\"\\E6E2\"}.pe-7f-culture:before{content:\"\\E6E3\"}.pe-7f-crop:before{content:\"\\E6E4\"}.pe-7f-credit:before{content:\"\\E6E5\"}.pe-7f-copy-file:before{content:\"\\E6E6\"}.pe-7f-config:before{content:\"\\E6E7\"}.pe-7f-compass:before{content:\"\\E6E8\"}.pe-7f-comment:before{content:\"\\E6E9\"}.pe-7f-coffee:before{content:\"\\E6EA\"}.pe-7f-cloud:before{content:\"\\E6EB\"}.pe-7f-clock:before{content:\"\\E6EC\"}.pe-7f-check:before{content:\"\\E6ED\"}.pe-7f-chat:before{content:\"\\E6EE\"}.pe-7f-cart:before{content:\"\\E6EF\"}.pe-7f-camera:before{content:\"\\E6F0\"}.pe-7f-call:before{content:\"\\E6F1\"}.pe-7f-calculator:before{content:\"\\E6F2\"}.pe-7f-browser:before{content:\"\\E6F3\"}.pe-7f-box1:before{content:\"\\E6F5\"}.pe-7f-box:before{content:\"\\E6F6\"}.pe-7f-bookmarks:before{content:\"\\E6F7\"}.pe-7f-bicycle:before{content:\"\\E6F8\"}.pe-7f-bell:before{content:\"\\E6F9\"}.pe-7f-battery:before{content:\"\\E6FA\"}.pe-7f-ball:before{content:\"\\E6FB\"}.pe-7f-back:before{content:\"\\E6FC\"}.pe-7f-attention:before{content:\"\\E6FD\"}.pe-7f-anchor:before{content:\"\\E6FE\"}.pe-7f-albums:before{content:\"\\E6FF\"}.pe-7f-alarm:before{content:\"\\E700\"}.pe-7f-airplay:before{content:\"\\E701\"}.pe-7f-close:before{content:\"\\E600\"}.pe-7f-next:before{content:\"\\E6AD\"}", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Pe-icon-7-filled.eot?4483f7460b137982c39df5d9923774f6";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Pe-icon-7-filled.eot?4483f7460b137982c39df5d9923774f6";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Pe-icon-7-filled.woff?b18b07ac92cbd0035eb0f5d04879e1b1";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Pe-icon-7-filled.ttf?05951ccf586d27ea7d50e2d3db3eef65";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Pe-icon-7-filled.svg?07738af623ac48d5fff7e3fb28928d0b";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(5);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".flag-icon,.flag-icon-background{background-repeat:no-repeat;background-size:contain;background-position:50%}.flag-icon{position:relative;display:inline-block;width:1.33333333em;line-height:1em}.flag-icon:before{content:\"\\A0\"}.flag-icon.flag-icon-squared{width:1em}.flag-icon-ad{background-image:url(" + escape(__webpack_require__(102)) + ")}.flag-icon-ad.flag-icon-squared{background-image:url(" + escape(__webpack_require__(103)) + ")}.flag-icon-ae{background-image:url(" + escape(__webpack_require__(104)) + ")}.flag-icon-ae.flag-icon-squared{background-image:url(" + escape(__webpack_require__(105)) + ")}.flag-icon-af{background-image:url(" + escape(__webpack_require__(106)) + ")}.flag-icon-af.flag-icon-squared{background-image:url(" + escape(__webpack_require__(107)) + ")}.flag-icon-ag{background-image:url(" + escape(__webpack_require__(108)) + ")}.flag-icon-ag.flag-icon-squared{background-image:url(" + escape(__webpack_require__(109)) + ")}.flag-icon-ai{background-image:url(" + escape(__webpack_require__(110)) + ")}.flag-icon-ai.flag-icon-squared{background-image:url(" + escape(__webpack_require__(111)) + ")}.flag-icon-al{background-image:url(" + escape(__webpack_require__(112)) + ")}.flag-icon-al.flag-icon-squared{background-image:url(" + escape(__webpack_require__(113)) + ")}.flag-icon-am{background-image:url(" + escape(__webpack_require__(114)) + ")}.flag-icon-am.flag-icon-squared{background-image:url(" + escape(__webpack_require__(115)) + ")}.flag-icon-ao{background-image:url(" + escape(__webpack_require__(116)) + ")}.flag-icon-ao.flag-icon-squared{background-image:url(" + escape(__webpack_require__(117)) + ")}.flag-icon-aq{background-image:url(" + escape(__webpack_require__(118)) + ")}.flag-icon-aq.flag-icon-squared{background-image:url(" + escape(__webpack_require__(119)) + ")}.flag-icon-ar{background-image:url(" + escape(__webpack_require__(120)) + ")}.flag-icon-ar.flag-icon-squared{background-image:url(" + escape(__webpack_require__(121)) + ")}.flag-icon-as{background-image:url(" + escape(__webpack_require__(122)) + ")}.flag-icon-as.flag-icon-squared{background-image:url(" + escape(__webpack_require__(123)) + ")}.flag-icon-at{background-image:url(" + escape(__webpack_require__(124)) + ")}.flag-icon-at.flag-icon-squared{background-image:url(" + escape(__webpack_require__(125)) + ")}.flag-icon-au{background-image:url(" + escape(__webpack_require__(126)) + ")}.flag-icon-au.flag-icon-squared{background-image:url(" + escape(__webpack_require__(127)) + ")}.flag-icon-aw{background-image:url(" + escape(__webpack_require__(128)) + ")}.flag-icon-aw.flag-icon-squared{background-image:url(" + escape(__webpack_require__(129)) + ")}.flag-icon-ax{background-image:url(" + escape(__webpack_require__(130)) + ")}.flag-icon-ax.flag-icon-squared{background-image:url(" + escape(__webpack_require__(131)) + ")}.flag-icon-az{background-image:url(" + escape(__webpack_require__(132)) + ")}.flag-icon-az.flag-icon-squared{background-image:url(" + escape(__webpack_require__(133)) + ")}.flag-icon-ba{background-image:url(" + escape(__webpack_require__(134)) + ")}.flag-icon-ba.flag-icon-squared{background-image:url(" + escape(__webpack_require__(135)) + ")}.flag-icon-bb{background-image:url(" + escape(__webpack_require__(136)) + ")}.flag-icon-bb.flag-icon-squared{background-image:url(" + escape(__webpack_require__(137)) + ")}.flag-icon-bd{background-image:url(" + escape(__webpack_require__(138)) + ")}.flag-icon-bd.flag-icon-squared{background-image:url(" + escape(__webpack_require__(139)) + ")}.flag-icon-be{background-image:url(" + escape(__webpack_require__(140)) + ")}.flag-icon-be.flag-icon-squared{background-image:url(" + escape(__webpack_require__(141)) + ")}.flag-icon-bf{background-image:url(" + escape(__webpack_require__(142)) + ")}.flag-icon-bf.flag-icon-squared{background-image:url(" + escape(__webpack_require__(143)) + ")}.flag-icon-bg{background-image:url(" + escape(__webpack_require__(144)) + ")}.flag-icon-bg.flag-icon-squared{background-image:url(" + escape(__webpack_require__(145)) + ")}.flag-icon-bh{background-image:url(" + escape(__webpack_require__(146)) + ")}.flag-icon-bh.flag-icon-squared{background-image:url(" + escape(__webpack_require__(147)) + ")}.flag-icon-bi{background-image:url(" + escape(__webpack_require__(148)) + ")}.flag-icon-bi.flag-icon-squared{background-image:url(" + escape(__webpack_require__(149)) + ")}.flag-icon-bj{background-image:url(" + escape(__webpack_require__(150)) + ")}.flag-icon-bj.flag-icon-squared{background-image:url(" + escape(__webpack_require__(151)) + ")}.flag-icon-bl{background-image:url(" + escape(__webpack_require__(152)) + ")}.flag-icon-bl.flag-icon-squared{background-image:url(" + escape(__webpack_require__(153)) + ")}.flag-icon-bm{background-image:url(" + escape(__webpack_require__(154)) + ")}.flag-icon-bm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(155)) + ")}.flag-icon-bn{background-image:url(" + escape(__webpack_require__(156)) + ")}.flag-icon-bn.flag-icon-squared{background-image:url(" + escape(__webpack_require__(157)) + ")}.flag-icon-bo{background-image:url(" + escape(__webpack_require__(158)) + ")}.flag-icon-bo.flag-icon-squared{background-image:url(" + escape(__webpack_require__(159)) + ")}.flag-icon-bq{background-image:url(" + escape(__webpack_require__(160)) + ")}.flag-icon-bq.flag-icon-squared{background-image:url(" + escape(__webpack_require__(161)) + ")}.flag-icon-br{background-image:url(" + escape(__webpack_require__(162)) + ")}.flag-icon-br.flag-icon-squared{background-image:url(" + escape(__webpack_require__(163)) + ")}.flag-icon-bs{background-image:url(" + escape(__webpack_require__(164)) + ")}.flag-icon-bs.flag-icon-squared{background-image:url(" + escape(__webpack_require__(165)) + ")}.flag-icon-bt{background-image:url(" + escape(__webpack_require__(166)) + ")}.flag-icon-bt.flag-icon-squared{background-image:url(" + escape(__webpack_require__(167)) + ")}.flag-icon-bv{background-image:url(" + escape(__webpack_require__(168)) + ")}.flag-icon-bv.flag-icon-squared{background-image:url(" + escape(__webpack_require__(169)) + ")}.flag-icon-bw{background-image:url(" + escape(__webpack_require__(170)) + ")}.flag-icon-bw.flag-icon-squared{background-image:url(" + escape(__webpack_require__(171)) + ")}.flag-icon-by{background-image:url(" + escape(__webpack_require__(172)) + ")}.flag-icon-by.flag-icon-squared{background-image:url(" + escape(__webpack_require__(173)) + ")}.flag-icon-bz{background-image:url(" + escape(__webpack_require__(174)) + ")}.flag-icon-bz.flag-icon-squared{background-image:url(" + escape(__webpack_require__(175)) + ")}.flag-icon-ca{background-image:url(" + escape(__webpack_require__(176)) + ")}.flag-icon-ca.flag-icon-squared{background-image:url(" + escape(__webpack_require__(177)) + ")}.flag-icon-cc{background-image:url(" + escape(__webpack_require__(178)) + ")}.flag-icon-cc.flag-icon-squared{background-image:url(" + escape(__webpack_require__(179)) + ")}.flag-icon-cd{background-image:url(" + escape(__webpack_require__(180)) + ")}.flag-icon-cd.flag-icon-squared{background-image:url(" + escape(__webpack_require__(181)) + ")}.flag-icon-cf{background-image:url(" + escape(__webpack_require__(182)) + ")}.flag-icon-cf.flag-icon-squared{background-image:url(" + escape(__webpack_require__(183)) + ")}.flag-icon-cg{background-image:url(" + escape(__webpack_require__(184)) + ")}.flag-icon-cg.flag-icon-squared{background-image:url(" + escape(__webpack_require__(185)) + ")}.flag-icon-ch{background-image:url(" + escape(__webpack_require__(186)) + ")}.flag-icon-ch.flag-icon-squared{background-image:url(" + escape(__webpack_require__(187)) + ")}.flag-icon-ci{background-image:url(" + escape(__webpack_require__(188)) + ")}.flag-icon-ci.flag-icon-squared{background-image:url(" + escape(__webpack_require__(189)) + ")}.flag-icon-ck{background-image:url(" + escape(__webpack_require__(190)) + ")}.flag-icon-ck.flag-icon-squared{background-image:url(" + escape(__webpack_require__(191)) + ")}.flag-icon-cl{background-image:url(" + escape(__webpack_require__(192)) + ")}.flag-icon-cl.flag-icon-squared{background-image:url(" + escape(__webpack_require__(193)) + ")}.flag-icon-cm{background-image:url(" + escape(__webpack_require__(194)) + ")}.flag-icon-cm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(195)) + ")}.flag-icon-cn{background-image:url(" + escape(__webpack_require__(196)) + ")}.flag-icon-cn.flag-icon-squared{background-image:url(" + escape(__webpack_require__(197)) + ")}.flag-icon-co{background-image:url(" + escape(__webpack_require__(198)) + ")}.flag-icon-co.flag-icon-squared{background-image:url(" + escape(__webpack_require__(199)) + ")}.flag-icon-cr{background-image:url(" + escape(__webpack_require__(200)) + ")}.flag-icon-cr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(201)) + ")}.flag-icon-cu{background-image:url(" + escape(__webpack_require__(202)) + ")}.flag-icon-cu.flag-icon-squared{background-image:url(" + escape(__webpack_require__(203)) + ")}.flag-icon-cv{background-image:url(" + escape(__webpack_require__(204)) + ")}.flag-icon-cv.flag-icon-squared{background-image:url(" + escape(__webpack_require__(205)) + ")}.flag-icon-cw{background-image:url(" + escape(__webpack_require__(206)) + ")}.flag-icon-cw.flag-icon-squared{background-image:url(" + escape(__webpack_require__(207)) + ")}.flag-icon-cx{background-image:url(" + escape(__webpack_require__(208)) + ")}.flag-icon-cx.flag-icon-squared{background-image:url(" + escape(__webpack_require__(209)) + ")}.flag-icon-cy{background-image:url(" + escape(__webpack_require__(210)) + ")}.flag-icon-cy.flag-icon-squared{background-image:url(" + escape(__webpack_require__(211)) + ")}.flag-icon-cz{background-image:url(" + escape(__webpack_require__(212)) + ")}.flag-icon-cz.flag-icon-squared{background-image:url(" + escape(__webpack_require__(213)) + ")}.flag-icon-de{background-image:url(" + escape(__webpack_require__(214)) + ")}.flag-icon-de.flag-icon-squared{background-image:url(" + escape(__webpack_require__(215)) + ")}.flag-icon-dj{background-image:url(" + escape(__webpack_require__(216)) + ")}.flag-icon-dj.flag-icon-squared{background-image:url(" + escape(__webpack_require__(217)) + ")}.flag-icon-dk{background-image:url(" + escape(__webpack_require__(218)) + ")}.flag-icon-dk.flag-icon-squared{background-image:url(" + escape(__webpack_require__(219)) + ")}.flag-icon-dm{background-image:url(" + escape(__webpack_require__(220)) + ")}.flag-icon-dm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(221)) + ")}.flag-icon-do{background-image:url(" + escape(__webpack_require__(222)) + ")}.flag-icon-do.flag-icon-squared{background-image:url(" + escape(__webpack_require__(223)) + ")}.flag-icon-dz{background-image:url(" + escape(__webpack_require__(224)) + ")}.flag-icon-dz.flag-icon-squared{background-image:url(" + escape(__webpack_require__(225)) + ")}.flag-icon-ec{background-image:url(" + escape(__webpack_require__(226)) + ")}.flag-icon-ec.flag-icon-squared{background-image:url(" + escape(__webpack_require__(227)) + ")}.flag-icon-ee{background-image:url(" + escape(__webpack_require__(228)) + ")}.flag-icon-ee.flag-icon-squared{background-image:url(" + escape(__webpack_require__(229)) + ")}.flag-icon-eg{background-image:url(" + escape(__webpack_require__(230)) + ")}.flag-icon-eg.flag-icon-squared{background-image:url(" + escape(__webpack_require__(231)) + ")}.flag-icon-eh{background-image:url(" + escape(__webpack_require__(232)) + ")}.flag-icon-eh.flag-icon-squared{background-image:url(" + escape(__webpack_require__(233)) + ")}.flag-icon-er{background-image:url(" + escape(__webpack_require__(234)) + ")}.flag-icon-er.flag-icon-squared{background-image:url(" + escape(__webpack_require__(235)) + ")}.flag-icon-es{background-image:url(" + escape(__webpack_require__(236)) + ")}.flag-icon-es.flag-icon-squared{background-image:url(" + escape(__webpack_require__(237)) + ")}.flag-icon-et{background-image:url(" + escape(__webpack_require__(238)) + ")}.flag-icon-et.flag-icon-squared{background-image:url(" + escape(__webpack_require__(239)) + ")}.flag-icon-fi{background-image:url(" + escape(__webpack_require__(240)) + ")}.flag-icon-fi.flag-icon-squared{background-image:url(" + escape(__webpack_require__(241)) + ")}.flag-icon-fj{background-image:url(" + escape(__webpack_require__(242)) + ")}.flag-icon-fj.flag-icon-squared{background-image:url(" + escape(__webpack_require__(243)) + ")}.flag-icon-fk{background-image:url(" + escape(__webpack_require__(244)) + ")}.flag-icon-fk.flag-icon-squared{background-image:url(" + escape(__webpack_require__(245)) + ")}.flag-icon-fm{background-image:url(" + escape(__webpack_require__(246)) + ")}.flag-icon-fm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(247)) + ")}.flag-icon-fo{background-image:url(" + escape(__webpack_require__(248)) + ")}.flag-icon-fo.flag-icon-squared{background-image:url(" + escape(__webpack_require__(249)) + ")}.flag-icon-fr{background-image:url(" + escape(__webpack_require__(250)) + ")}.flag-icon-fr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(251)) + ")}.flag-icon-ga{background-image:url(" + escape(__webpack_require__(252)) + ")}.flag-icon-ga.flag-icon-squared{background-image:url(" + escape(__webpack_require__(253)) + ")}.flag-icon-gb{background-image:url(" + escape(__webpack_require__(254)) + ")}.flag-icon-gb.flag-icon-squared{background-image:url(" + escape(__webpack_require__(255)) + ")}.flag-icon-gd{background-image:url(" + escape(__webpack_require__(256)) + ")}.flag-icon-gd.flag-icon-squared{background-image:url(" + escape(__webpack_require__(257)) + ")}.flag-icon-ge{background-image:url(" + escape(__webpack_require__(258)) + ")}.flag-icon-ge.flag-icon-squared{background-image:url(" + escape(__webpack_require__(259)) + ")}.flag-icon-gf{background-image:url(" + escape(__webpack_require__(260)) + ")}.flag-icon-gf.flag-icon-squared{background-image:url(" + escape(__webpack_require__(261)) + ")}.flag-icon-gg{background-image:url(" + escape(__webpack_require__(262)) + ")}.flag-icon-gg.flag-icon-squared{background-image:url(" + escape(__webpack_require__(263)) + ")}.flag-icon-gh{background-image:url(" + escape(__webpack_require__(264)) + ")}.flag-icon-gh.flag-icon-squared{background-image:url(" + escape(__webpack_require__(265)) + ")}.flag-icon-gi{background-image:url(" + escape(__webpack_require__(266)) + ")}.flag-icon-gi.flag-icon-squared{background-image:url(" + escape(__webpack_require__(267)) + ")}.flag-icon-gl{background-image:url(" + escape(__webpack_require__(268)) + ")}.flag-icon-gl.flag-icon-squared{background-image:url(" + escape(__webpack_require__(269)) + ")}.flag-icon-gm{background-image:url(" + escape(__webpack_require__(270)) + ")}.flag-icon-gm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(271)) + ")}.flag-icon-gn{background-image:url(" + escape(__webpack_require__(272)) + ")}.flag-icon-gn.flag-icon-squared{background-image:url(" + escape(__webpack_require__(273)) + ")}.flag-icon-gp{background-image:url(" + escape(__webpack_require__(274)) + ")}.flag-icon-gp.flag-icon-squared{background-image:url(" + escape(__webpack_require__(275)) + ")}.flag-icon-gq{background-image:url(" + escape(__webpack_require__(276)) + ")}.flag-icon-gq.flag-icon-squared{background-image:url(" + escape(__webpack_require__(277)) + ")}.flag-icon-gr{background-image:url(" + escape(__webpack_require__(278)) + ")}.flag-icon-gr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(279)) + ")}.flag-icon-gs{background-image:url(" + escape(__webpack_require__(280)) + ")}.flag-icon-gs.flag-icon-squared{background-image:url(" + escape(__webpack_require__(281)) + ")}.flag-icon-gt{background-image:url(" + escape(__webpack_require__(282)) + ")}.flag-icon-gt.flag-icon-squared{background-image:url(" + escape(__webpack_require__(283)) + ")}.flag-icon-gu{background-image:url(" + escape(__webpack_require__(284)) + ")}.flag-icon-gu.flag-icon-squared{background-image:url(" + escape(__webpack_require__(285)) + ")}.flag-icon-gw{background-image:url(" + escape(__webpack_require__(286)) + ")}.flag-icon-gw.flag-icon-squared{background-image:url(" + escape(__webpack_require__(287)) + ")}.flag-icon-gy{background-image:url(" + escape(__webpack_require__(288)) + ")}.flag-icon-gy.flag-icon-squared{background-image:url(" + escape(__webpack_require__(289)) + ")}.flag-icon-hk{background-image:url(" + escape(__webpack_require__(290)) + ")}.flag-icon-hk.flag-icon-squared{background-image:url(" + escape(__webpack_require__(291)) + ")}.flag-icon-hm{background-image:url(" + escape(__webpack_require__(292)) + ")}.flag-icon-hm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(293)) + ")}.flag-icon-hn{background-image:url(" + escape(__webpack_require__(294)) + ")}.flag-icon-hn.flag-icon-squared{background-image:url(" + escape(__webpack_require__(295)) + ")}.flag-icon-hr{background-image:url(" + escape(__webpack_require__(296)) + ")}.flag-icon-hr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(297)) + ")}.flag-icon-ht{background-image:url(" + escape(__webpack_require__(298)) + ")}.flag-icon-ht.flag-icon-squared{background-image:url(" + escape(__webpack_require__(299)) + ")}.flag-icon-hu{background-image:url(" + escape(__webpack_require__(300)) + ")}.flag-icon-hu.flag-icon-squared{background-image:url(" + escape(__webpack_require__(301)) + ")}.flag-icon-id{background-image:url(" + escape(__webpack_require__(302)) + ")}.flag-icon-id.flag-icon-squared{background-image:url(" + escape(__webpack_require__(303)) + ")}.flag-icon-ie{background-image:url(" + escape(__webpack_require__(304)) + ")}.flag-icon-ie.flag-icon-squared{background-image:url(" + escape(__webpack_require__(305)) + ")}.flag-icon-il{background-image:url(" + escape(__webpack_require__(306)) + ")}.flag-icon-il.flag-icon-squared{background-image:url(" + escape(__webpack_require__(307)) + ")}.flag-icon-im{background-image:url(" + escape(__webpack_require__(308)) + ")}.flag-icon-im.flag-icon-squared{background-image:url(" + escape(__webpack_require__(309)) + ")}.flag-icon-in{background-image:url(" + escape(__webpack_require__(310)) + ")}.flag-icon-in.flag-icon-squared{background-image:url(" + escape(__webpack_require__(311)) + ")}.flag-icon-io{background-image:url(" + escape(__webpack_require__(312)) + ")}.flag-icon-io.flag-icon-squared{background-image:url(" + escape(__webpack_require__(313)) + ")}.flag-icon-iq{background-image:url(" + escape(__webpack_require__(314)) + ")}.flag-icon-iq.flag-icon-squared{background-image:url(" + escape(__webpack_require__(315)) + ")}.flag-icon-ir{background-image:url(" + escape(__webpack_require__(316)) + ")}.flag-icon-ir.flag-icon-squared{background-image:url(" + escape(__webpack_require__(317)) + ")}.flag-icon-is{background-image:url(" + escape(__webpack_require__(318)) + ")}.flag-icon-is.flag-icon-squared{background-image:url(" + escape(__webpack_require__(319)) + ")}.flag-icon-it{background-image:url(" + escape(__webpack_require__(320)) + ")}.flag-icon-it.flag-icon-squared{background-image:url(" + escape(__webpack_require__(321)) + ")}.flag-icon-je{background-image:url(" + escape(__webpack_require__(322)) + ")}.flag-icon-je.flag-icon-squared{background-image:url(" + escape(__webpack_require__(323)) + ")}.flag-icon-jm{background-image:url(" + escape(__webpack_require__(324)) + ")}.flag-icon-jm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(325)) + ")}.flag-icon-jo{background-image:url(" + escape(__webpack_require__(326)) + ")}.flag-icon-jo.flag-icon-squared{background-image:url(" + escape(__webpack_require__(327)) + ")}.flag-icon-jp{background-image:url(" + escape(__webpack_require__(328)) + ")}.flag-icon-jp.flag-icon-squared{background-image:url(" + escape(__webpack_require__(329)) + ")}.flag-icon-ke{background-image:url(" + escape(__webpack_require__(330)) + ")}.flag-icon-ke.flag-icon-squared{background-image:url(" + escape(__webpack_require__(331)) + ")}.flag-icon-kg{background-image:url(" + escape(__webpack_require__(332)) + ")}.flag-icon-kg.flag-icon-squared{background-image:url(" + escape(__webpack_require__(333)) + ")}.flag-icon-kh{background-image:url(" + escape(__webpack_require__(334)) + ")}.flag-icon-kh.flag-icon-squared{background-image:url(" + escape(__webpack_require__(335)) + ")}.flag-icon-ki{background-image:url(" + escape(__webpack_require__(336)) + ")}.flag-icon-ki.flag-icon-squared{background-image:url(" + escape(__webpack_require__(337)) + ")}.flag-icon-km{background-image:url(" + escape(__webpack_require__(338)) + ")}.flag-icon-km.flag-icon-squared{background-image:url(" + escape(__webpack_require__(339)) + ")}.flag-icon-kn{background-image:url(" + escape(__webpack_require__(340)) + ")}.flag-icon-kn.flag-icon-squared{background-image:url(" + escape(__webpack_require__(341)) + ")}.flag-icon-kp{background-image:url(" + escape(__webpack_require__(342)) + ")}.flag-icon-kp.flag-icon-squared{background-image:url(" + escape(__webpack_require__(343)) + ")}.flag-icon-kr{background-image:url(" + escape(__webpack_require__(344)) + ")}.flag-icon-kr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(345)) + ")}.flag-icon-kw{background-image:url(" + escape(__webpack_require__(346)) + ")}.flag-icon-kw.flag-icon-squared{background-image:url(" + escape(__webpack_require__(347)) + ")}.flag-icon-ky{background-image:url(" + escape(__webpack_require__(348)) + ")}.flag-icon-ky.flag-icon-squared{background-image:url(" + escape(__webpack_require__(349)) + ")}.flag-icon-kz{background-image:url(" + escape(__webpack_require__(350)) + ")}.flag-icon-kz.flag-icon-squared{background-image:url(" + escape(__webpack_require__(351)) + ")}.flag-icon-la{background-image:url(" + escape(__webpack_require__(352)) + ")}.flag-icon-la.flag-icon-squared{background-image:url(" + escape(__webpack_require__(353)) + ")}.flag-icon-lb{background-image:url(" + escape(__webpack_require__(354)) + ")}.flag-icon-lb.flag-icon-squared{background-image:url(" + escape(__webpack_require__(355)) + ")}.flag-icon-lc{background-image:url(" + escape(__webpack_require__(356)) + ")}.flag-icon-lc.flag-icon-squared{background-image:url(" + escape(__webpack_require__(357)) + ")}.flag-icon-li{background-image:url(" + escape(__webpack_require__(358)) + ")}.flag-icon-li.flag-icon-squared{background-image:url(" + escape(__webpack_require__(359)) + ")}.flag-icon-lk{background-image:url(" + escape(__webpack_require__(360)) + ")}.flag-icon-lk.flag-icon-squared{background-image:url(" + escape(__webpack_require__(361)) + ")}.flag-icon-lr{background-image:url(" + escape(__webpack_require__(362)) + ")}.flag-icon-lr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(363)) + ")}.flag-icon-ls{background-image:url(" + escape(__webpack_require__(364)) + ")}.flag-icon-ls.flag-icon-squared{background-image:url(" + escape(__webpack_require__(365)) + ")}.flag-icon-lt{background-image:url(" + escape(__webpack_require__(366)) + ")}.flag-icon-lt.flag-icon-squared{background-image:url(" + escape(__webpack_require__(367)) + ")}.flag-icon-lu{background-image:url(" + escape(__webpack_require__(368)) + ")}.flag-icon-lu.flag-icon-squared{background-image:url(" + escape(__webpack_require__(369)) + ")}.flag-icon-lv{background-image:url(" + escape(__webpack_require__(370)) + ")}.flag-icon-lv.flag-icon-squared{background-image:url(" + escape(__webpack_require__(371)) + ")}.flag-icon-ly{background-image:url(" + escape(__webpack_require__(372)) + ")}.flag-icon-ly.flag-icon-squared{background-image:url(" + escape(__webpack_require__(373)) + ")}.flag-icon-ma{background-image:url(" + escape(__webpack_require__(374)) + ")}.flag-icon-ma.flag-icon-squared{background-image:url(" + escape(__webpack_require__(375)) + ")}.flag-icon-mc{background-image:url(" + escape(__webpack_require__(376)) + ")}.flag-icon-mc.flag-icon-squared{background-image:url(" + escape(__webpack_require__(377)) + ")}.flag-icon-md{background-image:url(" + escape(__webpack_require__(378)) + ")}.flag-icon-md.flag-icon-squared{background-image:url(" + escape(__webpack_require__(379)) + ")}.flag-icon-me{background-image:url(" + escape(__webpack_require__(380)) + ")}.flag-icon-me.flag-icon-squared{background-image:url(" + escape(__webpack_require__(381)) + ")}.flag-icon-mf{background-image:url(" + escape(__webpack_require__(382)) + ")}.flag-icon-mf.flag-icon-squared{background-image:url(" + escape(__webpack_require__(383)) + ")}.flag-icon-mg{background-image:url(" + escape(__webpack_require__(384)) + ")}.flag-icon-mg.flag-icon-squared{background-image:url(" + escape(__webpack_require__(385)) + ")}.flag-icon-mh{background-image:url(" + escape(__webpack_require__(386)) + ")}.flag-icon-mh.flag-icon-squared{background-image:url(" + escape(__webpack_require__(387)) + ")}.flag-icon-mk{background-image:url(" + escape(__webpack_require__(388)) + ")}.flag-icon-mk.flag-icon-squared{background-image:url(" + escape(__webpack_require__(389)) + ")}.flag-icon-ml{background-image:url(" + escape(__webpack_require__(390)) + ")}.flag-icon-ml.flag-icon-squared{background-image:url(" + escape(__webpack_require__(391)) + ")}.flag-icon-mm{background-image:url(" + escape(__webpack_require__(392)) + ")}.flag-icon-mm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(393)) + ")}.flag-icon-mn{background-image:url(" + escape(__webpack_require__(394)) + ")}.flag-icon-mn.flag-icon-squared{background-image:url(" + escape(__webpack_require__(395)) + ")}.flag-icon-mo{background-image:url(" + escape(__webpack_require__(396)) + ")}.flag-icon-mo.flag-icon-squared{background-image:url(" + escape(__webpack_require__(397)) + ")}.flag-icon-mp{background-image:url(" + escape(__webpack_require__(398)) + ")}.flag-icon-mp.flag-icon-squared{background-image:url(" + escape(__webpack_require__(399)) + ")}.flag-icon-mq{background-image:url(" + escape(__webpack_require__(400)) + ")}.flag-icon-mq.flag-icon-squared{background-image:url(" + escape(__webpack_require__(401)) + ")}.flag-icon-mr{background-image:url(" + escape(__webpack_require__(402)) + ")}.flag-icon-mr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(403)) + ")}.flag-icon-ms{background-image:url(" + escape(__webpack_require__(404)) + ")}.flag-icon-ms.flag-icon-squared{background-image:url(" + escape(__webpack_require__(405)) + ")}.flag-icon-mt{background-image:url(" + escape(__webpack_require__(406)) + ")}.flag-icon-mt.flag-icon-squared{background-image:url(" + escape(__webpack_require__(407)) + ")}.flag-icon-mu{background-image:url(" + escape(__webpack_require__(408)) + ")}.flag-icon-mu.flag-icon-squared{background-image:url(" + escape(__webpack_require__(409)) + ")}.flag-icon-mv{background-image:url(" + escape(__webpack_require__(410)) + ")}.flag-icon-mv.flag-icon-squared{background-image:url(" + escape(__webpack_require__(411)) + ")}.flag-icon-mw{background-image:url(" + escape(__webpack_require__(412)) + ")}.flag-icon-mw.flag-icon-squared{background-image:url(" + escape(__webpack_require__(413)) + ")}.flag-icon-mx{background-image:url(" + escape(__webpack_require__(414)) + ")}.flag-icon-mx.flag-icon-squared{background-image:url(" + escape(__webpack_require__(415)) + ")}.flag-icon-my{background-image:url(" + escape(__webpack_require__(416)) + ")}.flag-icon-my.flag-icon-squared{background-image:url(" + escape(__webpack_require__(417)) + ")}.flag-icon-mz{background-image:url(" + escape(__webpack_require__(418)) + ")}.flag-icon-mz.flag-icon-squared{background-image:url(" + escape(__webpack_require__(419)) + ")}.flag-icon-na{background-image:url(" + escape(__webpack_require__(420)) + ")}.flag-icon-na.flag-icon-squared{background-image:url(" + escape(__webpack_require__(421)) + ")}.flag-icon-nc{background-image:url(" + escape(__webpack_require__(422)) + ")}.flag-icon-nc.flag-icon-squared{background-image:url(" + escape(__webpack_require__(423)) + ")}.flag-icon-ne{background-image:url(" + escape(__webpack_require__(424)) + ")}.flag-icon-ne.flag-icon-squared{background-image:url(" + escape(__webpack_require__(425)) + ")}.flag-icon-nf{background-image:url(" + escape(__webpack_require__(426)) + ")}.flag-icon-nf.flag-icon-squared{background-image:url(" + escape(__webpack_require__(427)) + ")}.flag-icon-ng{background-image:url(" + escape(__webpack_require__(428)) + ")}.flag-icon-ng.flag-icon-squared{background-image:url(" + escape(__webpack_require__(429)) + ")}.flag-icon-ni{background-image:url(" + escape(__webpack_require__(430)) + ")}.flag-icon-ni.flag-icon-squared{background-image:url(" + escape(__webpack_require__(431)) + ")}.flag-icon-nl{background-image:url(" + escape(__webpack_require__(432)) + ")}.flag-icon-nl.flag-icon-squared{background-image:url(" + escape(__webpack_require__(433)) + ")}.flag-icon-no{background-image:url(" + escape(__webpack_require__(434)) + ")}.flag-icon-no.flag-icon-squared{background-image:url(" + escape(__webpack_require__(435)) + ")}.flag-icon-np{background-image:url(" + escape(__webpack_require__(436)) + ")}.flag-icon-np.flag-icon-squared{background-image:url(" + escape(__webpack_require__(437)) + ")}.flag-icon-nr{background-image:url(" + escape(__webpack_require__(438)) + ")}.flag-icon-nr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(439)) + ")}.flag-icon-nu{background-image:url(" + escape(__webpack_require__(440)) + ")}.flag-icon-nu.flag-icon-squared{background-image:url(" + escape(__webpack_require__(441)) + ")}.flag-icon-nz{background-image:url(" + escape(__webpack_require__(442)) + ")}.flag-icon-nz.flag-icon-squared{background-image:url(" + escape(__webpack_require__(443)) + ")}.flag-icon-om{background-image:url(" + escape(__webpack_require__(444)) + ")}.flag-icon-om.flag-icon-squared{background-image:url(" + escape(__webpack_require__(445)) + ")}.flag-icon-pa{background-image:url(" + escape(__webpack_require__(446)) + ")}.flag-icon-pa.flag-icon-squared{background-image:url(" + escape(__webpack_require__(447)) + ")}.flag-icon-pe{background-image:url(" + escape(__webpack_require__(448)) + ")}.flag-icon-pe.flag-icon-squared{background-image:url(" + escape(__webpack_require__(449)) + ")}.flag-icon-pf{background-image:url(" + escape(__webpack_require__(450)) + ")}.flag-icon-pf.flag-icon-squared{background-image:url(" + escape(__webpack_require__(451)) + ")}.flag-icon-pg{background-image:url(" + escape(__webpack_require__(452)) + ")}.flag-icon-pg.flag-icon-squared{background-image:url(" + escape(__webpack_require__(453)) + ")}.flag-icon-ph{background-image:url(" + escape(__webpack_require__(454)) + ")}.flag-icon-ph.flag-icon-squared{background-image:url(" + escape(__webpack_require__(455)) + ")}.flag-icon-pk{background-image:url(" + escape(__webpack_require__(456)) + ")}.flag-icon-pk.flag-icon-squared{background-image:url(" + escape(__webpack_require__(457)) + ")}.flag-icon-pl{background-image:url(" + escape(__webpack_require__(458)) + ")}.flag-icon-pl.flag-icon-squared{background-image:url(" + escape(__webpack_require__(459)) + ")}.flag-icon-pm{background-image:url(" + escape(__webpack_require__(460)) + ")}.flag-icon-pm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(461)) + ")}.flag-icon-pn{background-image:url(" + escape(__webpack_require__(462)) + ")}.flag-icon-pn.flag-icon-squared{background-image:url(" + escape(__webpack_require__(463)) + ")}.flag-icon-pr{background-image:url(" + escape(__webpack_require__(464)) + ")}.flag-icon-pr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(465)) + ")}.flag-icon-ps{background-image:url(" + escape(__webpack_require__(466)) + ")}.flag-icon-ps.flag-icon-squared{background-image:url(" + escape(__webpack_require__(467)) + ")}.flag-icon-pt{background-image:url(" + escape(__webpack_require__(468)) + ")}.flag-icon-pt.flag-icon-squared{background-image:url(" + escape(__webpack_require__(469)) + ")}.flag-icon-pw{background-image:url(" + escape(__webpack_require__(470)) + ")}.flag-icon-pw.flag-icon-squared{background-image:url(" + escape(__webpack_require__(471)) + ")}.flag-icon-py{background-image:url(" + escape(__webpack_require__(472)) + ")}.flag-icon-py.flag-icon-squared{background-image:url(" + escape(__webpack_require__(473)) + ")}.flag-icon-qa{background-image:url(" + escape(__webpack_require__(474)) + ")}.flag-icon-qa.flag-icon-squared{background-image:url(" + escape(__webpack_require__(475)) + ")}.flag-icon-re{background-image:url(" + escape(__webpack_require__(476)) + ")}.flag-icon-re.flag-icon-squared{background-image:url(" + escape(__webpack_require__(477)) + ")}.flag-icon-ro{background-image:url(" + escape(__webpack_require__(478)) + ")}.flag-icon-ro.flag-icon-squared{background-image:url(" + escape(__webpack_require__(479)) + ")}.flag-icon-rs{background-image:url(" + escape(__webpack_require__(480)) + ")}.flag-icon-rs.flag-icon-squared{background-image:url(" + escape(__webpack_require__(481)) + ")}.flag-icon-ru{background-image:url(" + escape(__webpack_require__(482)) + ")}.flag-icon-ru.flag-icon-squared{background-image:url(" + escape(__webpack_require__(483)) + ")}.flag-icon-rw{background-image:url(" + escape(__webpack_require__(484)) + ")}.flag-icon-rw.flag-icon-squared{background-image:url(" + escape(__webpack_require__(485)) + ")}.flag-icon-sa{background-image:url(" + escape(__webpack_require__(486)) + ")}.flag-icon-sa.flag-icon-squared{background-image:url(" + escape(__webpack_require__(487)) + ")}.flag-icon-sb{background-image:url(" + escape(__webpack_require__(488)) + ")}.flag-icon-sb.flag-icon-squared{background-image:url(" + escape(__webpack_require__(489)) + ")}.flag-icon-sc{background-image:url(" + escape(__webpack_require__(490)) + ")}.flag-icon-sc.flag-icon-squared{background-image:url(" + escape(__webpack_require__(491)) + ")}.flag-icon-sd{background-image:url(" + escape(__webpack_require__(492)) + ")}.flag-icon-sd.flag-icon-squared{background-image:url(" + escape(__webpack_require__(493)) + ")}.flag-icon-se{background-image:url(" + escape(__webpack_require__(494)) + ")}.flag-icon-se.flag-icon-squared{background-image:url(" + escape(__webpack_require__(495)) + ")}.flag-icon-sg{background-image:url(" + escape(__webpack_require__(496)) + ")}.flag-icon-sg.flag-icon-squared{background-image:url(" + escape(__webpack_require__(497)) + ")}.flag-icon-sh{background-image:url(" + escape(__webpack_require__(498)) + ")}.flag-icon-sh.flag-icon-squared{background-image:url(" + escape(__webpack_require__(499)) + ")}.flag-icon-si{background-image:url(" + escape(__webpack_require__(500)) + ")}.flag-icon-si.flag-icon-squared{background-image:url(" + escape(__webpack_require__(501)) + ")}.flag-icon-sj{background-image:url(" + escape(__webpack_require__(502)) + ")}.flag-icon-sj.flag-icon-squared{background-image:url(" + escape(__webpack_require__(503)) + ")}.flag-icon-sk{background-image:url(" + escape(__webpack_require__(504)) + ")}.flag-icon-sk.flag-icon-squared{background-image:url(" + escape(__webpack_require__(505)) + ")}.flag-icon-sl{background-image:url(" + escape(__webpack_require__(506)) + ")}.flag-icon-sl.flag-icon-squared{background-image:url(" + escape(__webpack_require__(507)) + ")}.flag-icon-sm{background-image:url(" + escape(__webpack_require__(508)) + ")}.flag-icon-sm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(509)) + ")}.flag-icon-sn{background-image:url(" + escape(__webpack_require__(510)) + ")}.flag-icon-sn.flag-icon-squared{background-image:url(" + escape(__webpack_require__(511)) + ")}.flag-icon-so{background-image:url(" + escape(__webpack_require__(512)) + ")}.flag-icon-so.flag-icon-squared{background-image:url(" + escape(__webpack_require__(513)) + ")}.flag-icon-sr{background-image:url(" + escape(__webpack_require__(514)) + ")}.flag-icon-sr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(515)) + ")}.flag-icon-ss{background-image:url(" + escape(__webpack_require__(516)) + ")}.flag-icon-ss.flag-icon-squared{background-image:url(" + escape(__webpack_require__(517)) + ")}.flag-icon-st{background-image:url(" + escape(__webpack_require__(518)) + ")}.flag-icon-st.flag-icon-squared{background-image:url(" + escape(__webpack_require__(519)) + ")}.flag-icon-sv{background-image:url(" + escape(__webpack_require__(520)) + ")}.flag-icon-sv.flag-icon-squared{background-image:url(" + escape(__webpack_require__(521)) + ")}.flag-icon-sx{background-image:url(" + escape(__webpack_require__(522)) + ")}.flag-icon-sx.flag-icon-squared{background-image:url(" + escape(__webpack_require__(523)) + ")}.flag-icon-sy{background-image:url(" + escape(__webpack_require__(524)) + ")}.flag-icon-sy.flag-icon-squared{background-image:url(" + escape(__webpack_require__(525)) + ")}.flag-icon-sz{background-image:url(" + escape(__webpack_require__(526)) + ")}.flag-icon-sz.flag-icon-squared{background-image:url(" + escape(__webpack_require__(527)) + ")}.flag-icon-tc{background-image:url(" + escape(__webpack_require__(528)) + ")}.flag-icon-tc.flag-icon-squared{background-image:url(" + escape(__webpack_require__(529)) + ")}.flag-icon-td{background-image:url(" + escape(__webpack_require__(530)) + ")}.flag-icon-td.flag-icon-squared{background-image:url(" + escape(__webpack_require__(531)) + ")}.flag-icon-tf{background-image:url(" + escape(__webpack_require__(532)) + ")}.flag-icon-tf.flag-icon-squared{background-image:url(" + escape(__webpack_require__(533)) + ")}.flag-icon-tg{background-image:url(" + escape(__webpack_require__(534)) + ")}.flag-icon-tg.flag-icon-squared{background-image:url(" + escape(__webpack_require__(535)) + ")}.flag-icon-th{background-image:url(" + escape(__webpack_require__(536)) + ")}.flag-icon-th.flag-icon-squared{background-image:url(" + escape(__webpack_require__(537)) + ")}.flag-icon-tj{background-image:url(" + escape(__webpack_require__(538)) + ")}.flag-icon-tj.flag-icon-squared{background-image:url(" + escape(__webpack_require__(539)) + ")}.flag-icon-tk{background-image:url(" + escape(__webpack_require__(540)) + ")}.flag-icon-tk.flag-icon-squared{background-image:url(" + escape(__webpack_require__(541)) + ")}.flag-icon-tl{background-image:url(" + escape(__webpack_require__(542)) + ")}.flag-icon-tl.flag-icon-squared{background-image:url(" + escape(__webpack_require__(543)) + ")}.flag-icon-tm{background-image:url(" + escape(__webpack_require__(544)) + ")}.flag-icon-tm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(545)) + ")}.flag-icon-tn{background-image:url(" + escape(__webpack_require__(546)) + ")}.flag-icon-tn.flag-icon-squared{background-image:url(" + escape(__webpack_require__(547)) + ")}.flag-icon-to{background-image:url(" + escape(__webpack_require__(548)) + ")}.flag-icon-to.flag-icon-squared{background-image:url(" + escape(__webpack_require__(549)) + ")}.flag-icon-tr{background-image:url(" + escape(__webpack_require__(550)) + ")}.flag-icon-tr.flag-icon-squared{background-image:url(" + escape(__webpack_require__(551)) + ")}.flag-icon-tt{background-image:url(" + escape(__webpack_require__(552)) + ")}.flag-icon-tt.flag-icon-squared{background-image:url(" + escape(__webpack_require__(553)) + ")}.flag-icon-tv{background-image:url(" + escape(__webpack_require__(554)) + ")}.flag-icon-tv.flag-icon-squared{background-image:url(" + escape(__webpack_require__(555)) + ")}.flag-icon-tw{background-image:url(" + escape(__webpack_require__(556)) + ")}.flag-icon-tw.flag-icon-squared{background-image:url(" + escape(__webpack_require__(557)) + ")}.flag-icon-tz{background-image:url(" + escape(__webpack_require__(558)) + ")}.flag-icon-tz.flag-icon-squared{background-image:url(" + escape(__webpack_require__(559)) + ")}.flag-icon-ua{background-image:url(" + escape(__webpack_require__(560)) + ")}.flag-icon-ua.flag-icon-squared{background-image:url(" + escape(__webpack_require__(561)) + ")}.flag-icon-ug{background-image:url(" + escape(__webpack_require__(562)) + ")}.flag-icon-ug.flag-icon-squared{background-image:url(" + escape(__webpack_require__(563)) + ")}.flag-icon-um{background-image:url(" + escape(__webpack_require__(564)) + ")}.flag-icon-um.flag-icon-squared{background-image:url(" + escape(__webpack_require__(565)) + ")}.flag-icon-us{background-image:url(" + escape(__webpack_require__(566)) + ")}.flag-icon-us.flag-icon-squared{background-image:url(" + escape(__webpack_require__(567)) + ")}.flag-icon-uy{background-image:url(" + escape(__webpack_require__(568)) + ")}.flag-icon-uy.flag-icon-squared{background-image:url(" + escape(__webpack_require__(569)) + ")}.flag-icon-uz{background-image:url(" + escape(__webpack_require__(570)) + ")}.flag-icon-uz.flag-icon-squared{background-image:url(" + escape(__webpack_require__(571)) + ")}.flag-icon-va{background-image:url(" + escape(__webpack_require__(572)) + ")}.flag-icon-va.flag-icon-squared{background-image:url(" + escape(__webpack_require__(573)) + ")}.flag-icon-vc{background-image:url(" + escape(__webpack_require__(574)) + ")}.flag-icon-vc.flag-icon-squared{background-image:url(" + escape(__webpack_require__(575)) + ")}.flag-icon-ve{background-image:url(" + escape(__webpack_require__(576)) + ")}.flag-icon-ve.flag-icon-squared{background-image:url(" + escape(__webpack_require__(577)) + ")}.flag-icon-vg{background-image:url(" + escape(__webpack_require__(578)) + ")}.flag-icon-vg.flag-icon-squared{background-image:url(" + escape(__webpack_require__(579)) + ")}.flag-icon-vi{background-image:url(" + escape(__webpack_require__(580)) + ")}.flag-icon-vi.flag-icon-squared{background-image:url(" + escape(__webpack_require__(581)) + ")}.flag-icon-vn{background-image:url(" + escape(__webpack_require__(582)) + ")}.flag-icon-vn.flag-icon-squared{background-image:url(" + escape(__webpack_require__(583)) + ")}.flag-icon-vu{background-image:url(" + escape(__webpack_require__(584)) + ")}.flag-icon-vu.flag-icon-squared{background-image:url(" + escape(__webpack_require__(585)) + ")}.flag-icon-wf{background-image:url(" + escape(__webpack_require__(586)) + ")}.flag-icon-wf.flag-icon-squared{background-image:url(" + escape(__webpack_require__(587)) + ")}.flag-icon-ws{background-image:url(" + escape(__webpack_require__(588)) + ")}.flag-icon-ws.flag-icon-squared{background-image:url(" + escape(__webpack_require__(589)) + ")}.flag-icon-ye{background-image:url(" + escape(__webpack_require__(590)) + ")}.flag-icon-ye.flag-icon-squared{background-image:url(" + escape(__webpack_require__(591)) + ")}.flag-icon-yt{background-image:url(" + escape(__webpack_require__(592)) + ")}.flag-icon-yt.flag-icon-squared{background-image:url(" + escape(__webpack_require__(593)) + ")}.flag-icon-za{background-image:url(" + escape(__webpack_require__(594)) + ")}.flag-icon-za.flag-icon-squared{background-image:url(" + escape(__webpack_require__(595)) + ")}.flag-icon-zm{background-image:url(" + escape(__webpack_require__(596)) + ")}.flag-icon-zm.flag-icon-squared{background-image:url(" + escape(__webpack_require__(597)) + ")}.flag-icon-zw{background-image:url(" + escape(__webpack_require__(598)) + ")}.flag-icon-zw.flag-icon-squared{background-image:url(" + escape(__webpack_require__(599)) + ")}", ""]);

// exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ad.svg?2d9288138275b189625c8c2c264648ec";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ad.svg?800207334fe3f06f5cefab0e161ee27d";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ae.svg?998cc1fc1b86c9e1f5e381ed49bcb73c";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ae.svg?8fc34d937ede25b6e171274b804b1e7f";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af.svg?1e73c9eec7a1fe8d8a4a28de746bb09c";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af.svg?ddee87a8c4cdbc2a60b5d4ddc3a1549a";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ag.svg?b8b828913dc2d38b6afaed59032f2ad9";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ag.svg?441882c5d5489780f1ab6b44927e5cd3";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ai.svg?7b4552df49750bda95a7fb860851ba60";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ai.svg?377c542ad344b6c40fd30645601fdb01";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "al.svg?4ed11fa46f929442468e9904abdbcc4a";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "al.svg?0663234670e1d6679628d6f4fbae4e90";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "am.svg?cb2561270555c1b1e80318bc637c05ea";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "am.svg?41e6105650bb108b46e153f4f043e027";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ao.svg?b69218a9dc7ff91ce97305c35b9f8991";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ao.svg?3e1baa0864a908f0cb27d06e155300ba";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aq.svg?02ad59b3dcbdd872f74d3c112f474794";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aq.svg?328821fe6adacfa7bee4f57da5d4e5c6";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ar.svg?5261e632249ca9ab5b916055603be1f6";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ar.svg?53647ae9f056d46e03205f791f2b66e3";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "as.svg?23e6ae7d55de1077626007fdfe9a5822";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "as.svg?078ba7453c7f253d3f2ceea4b8b57d37";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "at.svg?fa4cf0437de30e8cbf8952b91ffbbc3a";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "at.svg?0721b30720785a8a481ea634b50445ff";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "au.svg?bb307e7fab6969ba6d3ff7d2ceeb6288";

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "au.svg?f6b7907ce4405df5f8c7d1abbbadafd5";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aw.svg?3f52fb17e14398c3a3d8e5cece4f9009";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aw.svg?0cd7e031771900e86d3fe8dcd81e5556";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ax.svg?f8c4019f81d13aade8e732ab4a6baf32";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ax.svg?e939bf2ecb653b16e31928f62f14161b";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "az.svg?198dbef38643afbd74b6d1cbe6da9ec8";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "az.svg?1edff1247e1846c4e074a479684ea6ee";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba.svg?7d6f56d23d025c0f0368ac2f85d7f8af";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba.svg?d5ef14f05acaac11a4844e9b3bbedb00";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bb.svg?fe3ac3fea6f1abd9cfce0635cc6d610b";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bb.svg?0c916c1c17d5652f5e92b773aa1d4e2a";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bd.svg?a7978d3d0cb45d9a6dfae8569f7c9969";

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bd.svg?b2af31760187b0f75eb6789dda71f62f";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be.svg?5739940da79d5fa8e595e64c05669c2a";

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be.svg?f34903cc86f134e4aa0aab9ff6a9e571";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bf.svg?57907e6611d0ab08eed5631443cdd447";

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bf.svg?348494c4020e910a1c5ebf26ad17c27b";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.svg?494aa5696f310b06328d4768c4bacdcc";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.svg?44d83f951206160867dedeb992217279";

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bh.svg?7510653e469a48d869e109f7cc5fe930";

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bh.svg?18fac7d81bf6f7575b9f7486ee55cfcd";

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bi.svg?12a40d8db0b02233e8bdfe888231bfdb";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bi.svg?d0615c777a4d8ada254341565c49bcd5";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bj.svg?5561ec954d9c2ec533400b805354a4b6";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bj.svg?22430301448ceea1471d979ca319be92";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bl.svg?2a496da9f0ccf063b143d591045f587a";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bl.svg?2deb442f266b054738dc4389f509a553";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bm.svg?012b04b78dff697d63abb50a1193144c";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bm.svg?f2a17828e24a83b7bb4e980543c5fab6";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bn.svg?f6d5f4005cca9ebb9883e5fb4e3edba9";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bn.svg?c5b91605c852ec62583c5e7498a9f4c5";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bo.svg?5f3fef091d666ea0ed093b1a427eac1f";

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bo.svg?2b6773a9f72cc831c5fd8ac5a2115576";

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bq.svg?fda6c02c937beae291172cd3f50df39c";

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bq.svg?8c6f85c7ffea34a1d11596e9945f112a";

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "br.svg?a31e25766b6f0ba6bea0e6bf7d8e91af";

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "br.svg?a30c10f8643bb31ef60f65958865a812";

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bs.svg?cf40c6afb10d012e938c1fc4975301db";

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bs.svg?0f30e82c7146b9138138a31810ae9e1e";

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bt.svg?87d65251ab5b878dd029615dd4794a8e";

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bt.svg?508393deb13245e36ff088316dbcd5da";

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bv.svg?4fbc14ad662107c170024061b40f6302";

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bv.svg?ce747379b653d0c81d931cd25779c857";

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bw.svg?15ed460a57847531507e5ba7201597b5";

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bw.svg?5f11a0beed3ff05c3accc5df7e42fd66";

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "by.svg?c05c8c07ade1f9ead97ddf35a747f95b";

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "by.svg?9b65127c617c5268e17e0997da71885b";

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bz.svg?2458dd8a8870ea822b25e1cbbd9cb0a9";

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bz.svg?81f2d6419e0debccb76714ed466b0652";

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca.svg?0efb6bf1f18132e87ea2c57d9580c45c";

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca.svg?a3999867cb776b04ebddf5d9eef4f48c";

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cc.svg?dd392e29d025f8df6555fbb825f3ac84";

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cc.svg?e53abbf8dc50b464cbb11a76ff1ec9d6";

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cd.svg?d4408d3c47a4436c01c71fe6af4825bd";

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cd.svg?a3ecd8067fcd90a99ce9385abdc99f45";

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cf.svg?d8dd15d37e5023c354126187fe19327f";

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cf.svg?8f764c6dedaca265cead5bd746224551";

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cg.svg?51ec77aa7dc9bd203501805508836662";

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cg.svg?4ad6f3e8cf63bc61fc684d1e23e86899";

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ch.svg?a69a50e544ff08eb122eedb7dc274cac";

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ch.svg?987cb82c1cadb50c89fe1e58dec40c31";

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ci.svg?11ac689d81026c7e72a1726cc5b8e435";

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ci.svg?728ba64d6ecf525a8eb69909b6f62b58";

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ck.svg?fe45a10b7d10b55b741114dcb7e75f48";

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ck.svg?e2686b2a29a1d7e56e17214b72e4cb0a";

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cl.svg?2fd895c4996f542bf3b07caba07bec6e";

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cl.svg?609867ee88ac78b4aaf397a6fabe6790";

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cm.svg?a56034b73ef6d0700c73206a2f72abe0";

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cm.svg?94ec67b0531daa72807d39d9c7fa2123";

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cn.svg?2c193ab31269f0da8be9830738325d0f";

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cn.svg?3a0829042f88f0dd20060d30fd7057c2";

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "co.svg?c5d7116a03266225f537cb79a0b87c21";

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "co.svg?11131041f85f1e5ebf68667f790af409";

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cr.svg?0d349fd2526b99ef265d29d840611ce6";

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cr.svg?13c483a397095a9d8703d1eb46328c77";

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cu.svg?1c7cc4da857495d8b44eb88d22a51e33";

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cu.svg?e4f897dc1790e9f3d1adafb62d0f7fd1";

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cv.svg?624a2d4d919439bbd76b1431de002c18";

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cv.svg?accdfa0ea8efad323ef4711339765a4b";

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cw.svg?9c06626ee2188bfd83b63be4b009cc30";

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cw.svg?ae75cba57510891147b59f88c71d3584";

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cx.svg?b2a59c5ce370cabebdcbd19672933e7e";

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cx.svg?8142eab77f7fe4cfb349a14b4f94ce1d";

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cy.svg?5e40be33df611e7bdecee279ccf3889e";

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cy.svg?dbf92cb89053f06b273f767cc7dd3a8e";

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cz.svg?09a9b116642e821937ffc1d777a99022";

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cz.svg?b325cced526f0d4cb42b655eca7f40e4";

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "de.svg?246a5fcba5ed21747c2a108e5e635ec7";

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "de.svg?74018f0abdef885f425c141cc3244afb";

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dj.svg?694ca31b23013c8f1127e23741dd54a0";

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dj.svg?63e20123441e1fe6998df866aceb2a4c";

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dk.svg?302b4687163f20c1e43779d2a3f671a0";

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dk.svg?59a9d25f6d57f572f48c2c1eeecb0724";

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dm.svg?b1635699ae7bb121d9efce1f2a881320";

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dm.svg?fda8fe7071e4410604350b7ca25aeb4b";

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "do.svg?704fd2a9ed132ee8e42c5fc4dbea31a1";

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "do.svg?88a82fcc61969d9c897ca685f5020b5e";

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dz.svg?0477e542720bf395ac09392db78e17a7";

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dz.svg?ff15f060b5abba792024a5b144e5a31d";

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ec.svg?3bafd0714678cf63330f182d9ec4cc41";

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ec.svg?8fb69b7933c6f712e20572580736f7c4";

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ee.svg?03c3d564daa8527441e943dab22a6e24";

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ee.svg?9b43910c06e045dae08a96b7e185ca30";

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eg.svg?b0aa9a4e893d49715b780350324cb985";

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eg.svg?4137f1081dc73f5450aa1732b27a73eb";

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eh.svg?44d979031e6ecf702d00c9d07bbfcc0c";

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eh.svg?780a0a9e2e95e4971fdca31fbf97091e";

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "er.svg?b4ea80f7a2a8848ad55e31b9bf3afc90";

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "er.svg?8d5171c77e388034f48931bb77b65014";

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "es.svg?bcf1ab9854fa7d81fedb1115032ab465";

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "es.svg?361eda2a8906d9753ced8c046a754606";

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "et.svg?512bde19026857a0be17fa2271224762";

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "et.svg?a61da8e203efc6ddf8be108c074e44e9";

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fi.svg?8c63a9af82c69e1e067cc51fe8251693";

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fi.svg?55109a408f95186b773e8e89b5a67dcc";

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fj.svg?caf72f69ced8ffea30cc3a38bcc6011e";

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fj.svg?453532c2daca1423d88f079a82cfcfc5";

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fk.svg?1e53dc26d87dc2ff8cdec524787eb102";

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fk.svg?1bffbf9fdbc7e06d1e4ea685247c72f5";

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fm.svg?2c13a5d4f618959c50fcca1b498dd393";

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fm.svg?41b339f3be3f9e3f61694ab4a9086c09";

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fo.svg?c2f634751d1be4f5bb02637a2648823f";

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fo.svg?32019da00e4ad54d1cda9ff412d32ca1";

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fr.svg?4e3ec048e64c77815332dbb34f9b6305";

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fr.svg?f4529ed89ccd5521b6895e298346e71d";

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ga.svg?8629ddf547aa8d81b25fba0579963c21";

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ga.svg?886a7348fe2900f346fe427ffb40dbea";

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gb.svg?85a97dab5b090c1a8110d27fcd570939";

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gb.svg?fe60f8318501f211b9583bc6d666c874";

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gd.svg?0e3d254c0cf13bf900b1eed7022fd68f";

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gd.svg?7c62ce7d1f45914b82768e971aa41745";

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ge.svg?a129579288ce45bca7de9c073c5e17a9";

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ge.svg?49a0b418c43c1db8a679832ec0310144";

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gf.svg?434bae071ab5ed1b79860ca48122b681";

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gf.svg?d0185c1175c7d0fa26b1a282440d7677";

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gg.svg?c447047f465ae1303de6e46c43eb0a6a";

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gg.svg?02df8a5dc2a174160c2ff4febae8c1f6";

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gh.svg?bb3bb60464f9de0885206ae68d817026";

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gh.svg?e0ca5267471f6b47564b10068f37e874";

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gi.svg?71cfe39b19a8cf801dac52745837879d";

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gi.svg?1afed1e43b3df70621911e848165db4f";

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gl.svg?1495643c89bb2002c8d1af03cd3d68b7";

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gl.svg?59e1835690dfbbb0414e59a72686b054";

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gm.svg?39937d8fd860274df069f97aefc58e15";

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gm.svg?6b4107900a93999092ef63fb4b99b171";

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gn.svg?e2dcda47e6c4a060104aaa7be670bf86";

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gn.svg?0798100ed78e72cc9070bb01924cba7e";

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gp.svg?0dcdf9660c568a30d3dbf8caf64e9d42";

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gp.svg?8fc39c39ffec8d93e550676fec3b8b56";

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gq.svg?c095a0d44d955f381d95bc1223c5a74f";

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gq.svg?88946f8ad223fc1224a03988295e4849";

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gr.svg?334890b69eef86b49a9083dcc2f33d31";

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gr.svg?dcc2c8657fa2795dda11f625a3fd5d67";

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gs.svg?21f7c99f17bb19ebe4b9921b7fa01afc";

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gs.svg?1067356806f9346264da936cc4c9e120";

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gt.svg?01ce618dccdf1c3af88fc6cab6c375e9";

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gt.svg?4eea9e03835a6042e803aae0c5103137";

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gu.svg?beb28cdd728df39cc5016605a594cc99";

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gu.svg?d4375e9d037d29bc430f6b8f2591514e";

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gw.svg?f0742332f72950dc2c88c2793ffe423f";

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gw.svg?1ea244637aa5bc1fb63541b77e6a54c0";

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gy.svg?cbacc8b88ee72a8dcf56632a2b2b947d";

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gy.svg?333d94bf559357540545c39f94cb12ef";

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hk.svg?029a6bef7507e48f79319f007585eaec";

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hk.svg?50fa2f99e1b35759629a6399ea58a5c6";

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hm.svg?8bbb5756e34452e030d2ccb14d7bf622";

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hm.svg?45e61c98191d6b1210b748066ce97549";

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hn.svg?db7e3de4435a912737ae15ff8c1b8130";

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hn.svg?4938f675b80bdc7e5ec2768cf4c09c18";

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hr.svg?176d2d57842eb1084e5363276bcaa988";

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hr.svg?635a60933b2268045706360f55b7b477";

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ht.svg?5f6a49d0ed1c19657da2392ce95dc7fe";

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ht.svg?06eefed919d3723c507764ee01357a2e";

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hu.svg?d1065faa141b030f4d6317927525ec32";

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hu.svg?a38286595b4408dcfabeea890b327320";

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "id.svg?e8f1c8799e91c132917570b3442d4ed2";

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "id.svg?cd7ecc1e34dd7b23af6e87d25499a77a";

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ie.svg?deca9e10a3bd63cbb1cc783d2fc85625";

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ie.svg?ce6c7d810f03854cd7517de4dad68c5d";

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "il.svg?ad7a2d12e6947b430bc763470066d10a";

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "il.svg?5a12c248e7badb386042c6f20160aef6";

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im.svg?07fac2afc75f3b5d1c234ea32738512f";

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "im.svg?f6e8452ca63057270d6e65c2688bfa12";

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "in.svg?98c5671706065988ddff35d83a2cadbb";

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "in.svg?f1c7c9bef4ab67d1e4a6cda4f63eb86c";

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "io.svg?7fc155e7fac8126870876572461fe95b";

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "io.svg?1734998df85efc34d79d0fb154fffd7d";

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "iq.svg?77fca3a16e9b7d1b1de65cd1ae6c4973";

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "iq.svg?a632108725e2eb4eebf2bc82161185d3";

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ir.svg?28b0fb3b3d83de326b81a1668e21beb6";

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ir.svg?1a62e10d6cfe077c86a38c4c5e8215e5";

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "is.svg?ba30d1eb1308572f96dc27307903152d";

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "is.svg?2c3b9decb9e6eeff88565452a4be54f6";

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "it.svg?5a3412cbe8f690dc5dfc92c3b8b68001";

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "it.svg?15a1f288182170a580964fb8a64248d7";

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "je.svg?a2bead8f5c6abd826fe5b5e8c52901b4";

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "je.svg?12bf2a5fe22bbdbcf5b5187920ed633e";

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jm.svg?c5279e8583934fd4fcc2b95faab316c9";

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jm.svg?1b388cb263bd368e45888104001165b2";

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jo.svg?5806167645b758207aeb910e04e25ecf";

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jo.svg?e0c3d125e44478b3c9fc62c9c7b07951";

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jp.svg?28157b5298df82905d87061bfe56788c";

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jp.svg?b5b509c87244a9ff54e87d54f97d64bd";

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ke.svg?ac8b7d8174a8767fefb6aa4a648e9024";

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ke.svg?8db0f5f99c8a152df9a5386e54302cab";

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kg.svg?0e8c2a1deb7a97d5d6fae34edf6fffe0";

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kg.svg?20cdf6156992570d17d7e923af3dd9d9";

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kh.svg?add3236a32912b953efd4bcba465536c";

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kh.svg?2be5f19d71be932f32fbfe74572384b5";

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ki.svg?db9ce4a8eedd3429844cb999147e4e05";

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ki.svg?84841933e626d7194ab99001eaffcca7";

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "km.svg?05c0e1c1d234ec535e809a8711e6f779";

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "km.svg?86ad579fab8211512f200facfb700eaf";

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kn.svg?8d2a2bac0a4bec64f61798ef6c86046b";

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kn.svg?a1e5c90bb158a324df6f2f416b58a1a5";

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kp.svg?fc45ba59283feb5ac07259425091029e";

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kp.svg?bab86a2769bae956735f43562d7a0a6e";

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kr.svg?472436a2cd7adcfb81854d5e9d45267b";

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kr.svg?7ce5a14098bfd2fb03e05cb0d1e178b4";

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kw.svg?8758e4ab9960cbd0372b2bdbb5a97db4";

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kw.svg?0a1e78f001df0d3a9a4657ad20df9d20";

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ky.svg?bc2f4070b8aede23d93492f15b23af52";

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ky.svg?58b6db257c2227ed4023905121077fa6";

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kz.svg?765abf25f0c5a3107513c0d71b66ea98";

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kz.svg?0855baa1155ef2663125457d2f27fb81";

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "la.svg?d4742a0bc73e9af721f7b7e6c08c4720";

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "la.svg?635b3d0bd4b2f2854bff71670f72d22f";

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lb.svg?c43e467ffa79b69e102a3242d03863ef";

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lb.svg?bdba8149d35cfa3642a7fddb7d204e19";

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lc.svg?318596539572196c7f62fc47fc2a4e5e";

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lc.svg?5ad24b4c23e1c0240d15d4de8daf6103";

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "li.svg?7f2cb3e761858cd6cd0dad1e9a99c7b4";

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "li.svg?f37f498e8d8d43d49133b6b2de2b447b";

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lk.svg?f8d21a6b463aa47f76f4eaaa36497fca";

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lk.svg?3ce70e5002961066169f54aff5492201";

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lr.svg?e026e0f7f0697fe0dd3cf3f86443b851";

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lr.svg?e3059e9827267ac9bf36de53a29cb0a8";

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ls.svg?6497b847f86af3b088814ff131f87ff2";

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ls.svg?fd0cc2e17bcb57d703a83d0079c316bd";

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lt.svg?c2b153a464289ca2eda1e4c289b65c17";

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lt.svg?76ec6661382ebca94b7f03e61e76e72d";

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lu.svg?cad8b8baa96492b8507359b0dfaaad66";

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lu.svg?57b9eece69ceaf18a2caa31327fa205d";

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lv.svg?35ddb2f334c25ef94cafb8373be1bcae";

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "lv.svg?4838077bfe980fe615358fdc5ce4af8b";

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ly.svg?41489295bb65a7891cc8a0c030689412";

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ly.svg?27ae749c0846f8a5c2e256ed49faf819";

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ma.svg?821b32398c1b5dbe1834770ef5f6ba61";

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ma.svg?c91b74041cf00efd50fc30b8e4d91ffb";

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mc.svg?37be4651b8d058120dd8cb47983e9c99";

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mc.svg?04a4a202a022ccc10add49ca6cf706fd";

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "md.svg?824e3e16727c39d5ad3be1d767e50584";

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "md.svg?879bb31c43329e54330fdf47b5faced9";

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "me.svg?37b693f64c100e0b9a2d6be418dd4fdb";

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "me.svg?be3b17db49b465d383d3ac13ad8218fd";

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mf.svg?d3fbe0d987afbd8149e84ca101791d16";

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mf.svg?647123880ea3877d53947e8c33ecabe4";

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mg.svg?fba42999241fe114d86f32140ad674c8";

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mg.svg?1491077425ac44fdd5ca2a301975640e";

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mh.svg?c1782cea933e24d2f7570be27ab5e12c";

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mh.svg?40dbb5c2801f16957059be2ca054fca1";

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mk.svg?4a879fde847db3890fea5197ef3663d1";

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mk.svg?12c1fffa458d1051841446e12b5f6ae8";

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ml.svg?64aa836720124c581eea7ae0d5b60443";

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ml.svg?02a95bc10fc1791b510be1ecbf972359";

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mm.svg?a646bac36c08c5b843f8eb9efa0ddd88";

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mm.svg?95787e3a534c1ed0a1efe301f700811f";

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mn.svg?5f43e0c610de2e75736483bbbd06da28";

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mn.svg?7ff5bebad5607af5a3a0fbedc02f4d37";

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mo.svg?012b278d37953c5a2e3e8ae12422e31e";

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mo.svg?94c09d5818bb170ef91f26db40712e94";

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mp.svg?bccdcb5ecffe13079a8077d6cd57263a";

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mp.svg?fec806e5ccb0f18ffcadac9464333cf1";

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mq.svg?9bcc4ffb912c745aa7098c0de1905eeb";

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mq.svg?37d2d6810c154684782c747761c2e07c";

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mr.svg?55d8f233036c23373ecf6eade8d735a1";

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mr.svg?38d81da0d49d46e4227690edf3c52976";

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ms.svg?ec75da93364b2dd68705a2718c551a8f";

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ms.svg?830476bcbc2114c0edc9a88954f0816e";

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mt.svg?07ddb919be0f617b964ce47a59528c52";

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mt.svg?4f20d5a79880bb85d3733a8cea2cc22c";

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mu.svg?33b7d11749d57a61797d72ab46cc0ed7";

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mu.svg?fcbb9709a43b6b1f0b94cb5ae9db08be";

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mv.svg?c11e6efecc84326132b226b7cf84bea5";

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mv.svg?f1beedaaf3f70d20d2e962a02d98c559";

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mw.svg?8627c92dc660e33b047a1ae2efe17cf9";

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mw.svg?f075545eec970dd6bea4083002f29084";

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mx.svg?1fcc3cf0c7e6ca135612d8b3ed399e3a";

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mx.svg?4e358e43beb776d5c90cca5ffec8a2bd";

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "my.svg?789a6ddf349312be499c1b20096b0240";

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "my.svg?591d1e38714cc55a73f3b556f00afb11";

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mz.svg?c8308283028cbd9a0281a61635ed3b20";

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mz.svg?4fce86a88ab94af0d4719440a29bbbad";

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "na.svg?efac2847fb683491ca06372a63adc4d7";

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "na.svg?ca8997745270df3094bbff555d517db6";

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nc.svg?846211decb4c6a7eaf50944147654cbd";

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nc.svg?b72ab6b2a834a41cb6cfec2908bf4a78";

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ne.svg?9a5589731c141e7c38d8ec613a5f0304";

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ne.svg?a7f07f0ce07ab31c89770dddbf56d0c4";

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nf.svg?5e07162fc6710cfed614804deb6d57f2";

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nf.svg?44fe5947279a723930d2d21b45017c03";

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ng.svg?ba3bb51aca71f876f6d55d8ea53f7a73";

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ng.svg?f6a23478e72fa37e3b9f3869524e0dfa";

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ni.svg?7affd52e71f565734b35c729fd9a69c6";

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ni.svg?3f7681e7629b2dfdcb7f7c59c1e1b3e0";

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nl.svg?feb9eea9ce02f8633ea8c37354a7e1cb";

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nl.svg?db2b8b183dba8ab799213ee07763a43e";

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "no.svg?fc029595f52e23b8f04102e4e3c802c2";

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "no.svg?51a7ba8c6295a52f4b253b33694eecf1";

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "np.svg?4211aa60556333402993bda5cc007ec3";

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "np.svg?c28b6869e7499315df56b73fd2c42a65";

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nr.svg?66dd15736f1d79053d46cb60eea52e8a";

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nr.svg?61a42463d2f4031baee80bfbb4976079";

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nu.svg?39cb2412fae122cbbb2ae8fc9011fed6";

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nu.svg?482618606f493a8f71e79003956049a0";

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nz.svg?07d3ae50c3576b59ca1cf5ef6eb1cf02";

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nz.svg?d29645cfd55673bf87bf02f95bf79668";

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "om.svg?9170bae18fb32150c2ec4fdc6826238c";

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "om.svg?7171b1e2bb68f23117e15cb01ea2e90a";

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pa.svg?3b4d5528e24d6aa61e049df51eb8c89f";

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pa.svg?943e160a9766c67a31c681d260e00f1d";

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pe.svg?fda667297974310505272d2c7ebaf723";

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pe.svg?017a482a8e2647dc96dea5d770dab327";

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pf.svg?b6f47989b5c69e0ab2ed87e26869a342";

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pf.svg?3ac8d5bdfe5d78013f568a73dd5b4d61";

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pg.svg?5c17391e78b57ac623cff8401a4e303a";

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pg.svg?4359608e6d3f7f7b4c471f4fe1576b6f";

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ph.svg?807a7e5ded435f887dbebed8a7d8d81f";

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ph.svg?605f52201b02fa5bb8a2b99ab1389ed7";

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pk.svg?fbfb5582df374e123a0d4748380f406e";

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pk.svg?f76952932734f7ef0d655691158a4371";

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pl.svg?6607e08cafd66147db56631c31d66cec";

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pl.svg?1f4f8ec32bba1e4e2ec3f4c5fc14efc6";

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pm.svg?6359f9eea5d35f2cc4d89366c20e0a26";

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pm.svg?68469c3f062b2fbeab2e96715a52c798";

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pn.svg?97f773cab9a46804e0d4d49d3269b3d1";

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pn.svg?eb94153e3111b0694e49ac4066bbf9a8";

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pr.svg?563200c5ca16c47d8db68f101700cfb6";

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pr.svg?6949cd9f76c1e488de1074d5d04dc189";

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ps.svg?658c8814aa70f9ef97c7be35d136e492";

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ps.svg?1b8d03996bc990a274d24d660912fe66";

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pt.svg?03f36e39e92b313128a702a06fe14396";

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pt.svg?6143c8e6835f2dba4080dd2214db7b3f";

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pw.svg?5445894875274b8709f1d6f3fd6af976";

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pw.svg?069ec370e716891db264087afdcf6182";

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "py.svg?795e6d0e6797cfb82c1d039a39ef1387";

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "py.svg?f1fa6887d16e8626a2ece3b50b551718";

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "qa.svg?4f997308380e5dd75fff5a89723a3172";

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "qa.svg?29cc28337ed9450a402a45452246c160";

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "re.svg?9c769f63698693183e0416f99ee0ab35";

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "re.svg?16aa0b5b66321c1281c063ee2619ab02";

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ro.svg?b091db3bf85fd316caa80e5b05cf264a";

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ro.svg?488ee906d08b52610dfb7f47cb84f2e6";

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rs.svg?192092d6e9f30bd5151566a79fc77cfc";

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rs.svg?95f28eccd867726d728d8973386f1a9b";

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ru.svg?af31e644412f6079d91279ae7b977196";

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ru.svg?911c03c21a5ddc5df70b61f46589bd5d";

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rw.svg?dbf846e1d345cbded1f7bed600a96965";

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rw.svg?d724e841628d040ff3484698907a1dd1";

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sa.svg?45e17088c50060fa0549d945bc987c24";

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sa.svg?1c14b2ed39388b5bf16aa85c4b6d50bb";

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sb.svg?ab93a7990b049074d06db8b0bc7b3ce2";

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sb.svg?5bc69a36b0852ca3e1023a0bfc21660e";

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sc.svg?5d8966f42246b186ca5ef3d2144ba158";

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sc.svg?ed506f5afdd99e5f884903abf1da85d2";

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sd.svg?aafc9cae603296bc1a353c32c9d0f8f2";

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sd.svg?d702bafe1580a1d29a20610f75f28964";

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "se.svg?b54f0ef0a393bb878f1eaa549bf100f1";

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "se.svg?5d16ff9ec384c46df7c0261b82bc6267";

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sg.svg?814c6d6547960991430a1c71871597ed";

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sg.svg?279844e992ca5aa5bbf4d830b2b79be6";

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sh.svg?e26b4b82312cc681dea395e1de7176e9";

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sh.svg?c147b9c0254aca2a7e4e5c46931ca631";

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "si.svg?48107aebf18a50cd1f74f659dff023b3";

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "si.svg?fdc1ceeae23c149deb2006431d51737a";

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sj.svg?d08937cbcc45b5b72fdbca418a465986";

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sj.svg?f40433689ccd69fe698f04d5d27baf44";

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sk.svg?daf75e75e18b8299db61fabcc0946af1";

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sk.svg?253c193837ab28e6fbc39c28024e023f";

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sl.svg?f5cb409d2dfc8009c8d8d5d193068358";

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sl.svg?58ef1e3b6bff58d6f4ca6047a96fc59d";

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sm.svg?890ad891911e82e4bb6444077e4c4c67";

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sm.svg?d69bce00e26722bba4db9516bdd7aeb3";

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sn.svg?6d85da96305f317874f735494e0ac237";

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sn.svg?c1a6798abc4a04fd81139f968d305a8c";

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "so.svg?fd9745c3e91d65bb27e0ce1a066def8a";

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "so.svg?a3c1b7507d4d51368a9c9c7ef16e50c0";

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sr.svg?64fb37b49bdd1d10f833926e24da7226";

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sr.svg?ceae0ffa4c003d02ae6151089d91a88d";

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ss.svg?5e0bad12f6f55064c3dbc63aa8e8128a";

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ss.svg?c8e5f380d045c394f352a0bb77d6ff60";

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "st.svg?00f5130cc14dbdb86779b734730a1d9d";

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "st.svg?3589e34b716c7cbfb519d64c63aa656c";

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sv.svg?abfac59c5ed910b2ddc7cc545c45cb17";

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sv.svg?88ca96e7891e09e72a3f8c0cf2e22a7b";

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sx.svg?89f96e7884f6dbcbb0496360d3937c34";

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sx.svg?6c22419aeaf5deb9ca0cd85368de24bd";

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sy.svg?d648066bba18b3fedf66db0fca2da5ff";

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sy.svg?96bb3c224fd1a7a3f7869ca176b6ce54";

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sz.svg?d00ba66465ba75f9a782e9f79944402c";

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sz.svg?9ec8da3eae5c07ea00da519d29071389";

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tc.svg?d01602470bf5b8c2cc51fbb9925f71a9";

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tc.svg?bca9f99cb80af8a64a1249b13d08418b";

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "td.svg?d6ccfa17c984bf92472575c6cf018f80";

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "td.svg?cb622bc24400fd328947ffed78f0660a";

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tf.svg?1129c04ba580e9e28171db5d40ce9f32";

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tf.svg?3f87ed9137eee673a8d3799760e5c5de";

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tg.svg?bf9d20b8945bd53245c9ea1e1eed2a4f";

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tg.svg?aff94a793ed8d936373717694ddf3d99";

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "th.svg?565e3c4b62c18bb6ef101a0cf3b4c82f";

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "th.svg?9c1e01fcbd77919148db921c5ce77446";

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tj.svg?e58f32ff84f001bc7168d27cdc241d71";

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tj.svg?1793caa0c484adea27824ce612e96dfc";

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tk.svg?b2df385f8dbecd292c77915242f35869";

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tk.svg?e37e35bfee8ec6f39e49f95ba55b4e32";

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tl.svg?547e42152a9dfb16e33dc6bc3663d712";

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tl.svg?214b6f844896186fb3035180638b8a47";

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tm.svg?f2dc59b2535194d31ce8778386b52164";

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tm.svg?08d55ec816375fc81f1bc352977244e5";

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tn.svg?98351bcb280b1151a28fc9fcf4c1d0f2";

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tn.svg?34dba63bc62c862c8944dd2c827c1bf6";

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "to.svg?00aaa22b9af8c670b1dd4fb7855190b2";

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "to.svg?ee39c2dbb8ab06d415a474be5fc2beee";

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tr.svg?ac4572ccd5aa06b5db888c21b07b728e";

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tr.svg?d4a61f6a22324244789eda3de42ebb68";

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tt.svg?333675d63b5100b2ad628b0278de708a";

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tt.svg?3854b853aee040dd3a36a3bbbb526a16";

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tv.svg?eda22a5dfd270426a548e811128409d4";

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tv.svg?ec5c179a3c54ff54fd82ddda3569f794";

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tw.svg?89a1429ae91ef356268cfdd8759b89e3";

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tw.svg?7794932d0d22ed75f2e1e6f1e2fbf472";

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tz.svg?ed1c43d0c76533c8e19f0e8afd0f604a";

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tz.svg?206592dc6556e3cddf82e5f59dbcef24";

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ua.svg?e2202cb676678f90c10a1c1a0e04afa6";

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ua.svg?5196d8ea0993d5b917b04ddb206163ec";

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ug.svg?f6dbcb210c928f287afbbbf2a191c724";

/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ug.svg?69ed4876cb991fc0c03f2ad3ca250a86";

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "um.svg?f4540fe0a4fe6d781318ce86cd25ec15";

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "um.svg?2da266d727f6a285c2c6c45404d13857";

/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "us.svg?da1c4f85e66e46f759fe736e3f2a5b37";

/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "us.svg?269666d513f4326441bbbdc8564c7cab";

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "uy.svg?2ac18c6e7d7cbee175d28bf5b7e764ad";

/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "uy.svg?4caed1247a7d571f081e9cf2015038a9";

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "uz.svg?d9b782092304b93fa203f2e84a9a5c60";

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "uz.svg?0b281dd521d66869cfba6fc17b814b19";

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "va.svg?8aae3709fb23884b7c01927b3ab56c15";

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "va.svg?a44c6ba981a68dc7e9cd12f0c07c3e9a";

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vc.svg?fc6aa8fea6b1679f5618d420705c9fdf";

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vc.svg?0d52b1116574139a04da5c57a6b24b51";

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ve.svg?05045bcea6cd452ff2110d8595ca1895";

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ve.svg?d384c6ce97ba0ca4aecbc188e84a0670";

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vg.svg?eef14ab6f09e3eaf612af872df742845";

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vg.svg?4236b3592713a56c25d146f790e2a4f4";

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vi.svg?2127440f728f099608ed690b93661341";

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vi.svg?8a178e2ccba3c073eff08cb67977c858";

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vn.svg?010b0c4c6dc4bdb48895ab271d4544c4";

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vn.svg?7e156d1d24f51aca6179f2e54dec5c7c";

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vu.svg?5bc20756ed74f649e3ce3722b2a9c5a1";

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "vu.svg?9c4c893a4c07eab2b1b6b9e5419f1785";

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wf.svg?5e6aa0d6196a1db8431a4fff6937079f";

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wf.svg?a10487a62b8516b7d842cfb1bcf9489f";

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ws.svg?c4eb05965d7ed2e7d561e80e18dc1b68";

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ws.svg?2690f3d8a35c6ca0343fe931be856dc4";

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ye.svg?68c397990d00c23f85c865ba696b19fb";

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ye.svg?58d8d56309a5718c3a4f31be6cdf223e";

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "yt.svg?0f00b1036165d69eff29d5b898873ad8";

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "yt.svg?a1387f1c257ea0838b27317a6606575f";

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "za.svg?177080d3e910a20e5b030f916d77760a";

/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "za.svg?9ed44aea09b417be8090dae8e5222232";

/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "zm.svg?5ac3774ab0e7b84a715c175283127732";

/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "zm.svg?402266a05380383f933eda9a8eff3fb2";

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "zw.svg?58e2cbd64ee1252a407f1ca815b6817f";

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "zw.svg?25d67323ce7c449da65ae3af13fac562";

/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(5);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:icomoon;src:url(" + escape(__webpack_require__(601)) + ");src:url(" + escape(__webpack_require__(602)) + "?#iefix-rdnm34) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(603)) + ") format(\"woff\"),url(" + escape(__webpack_require__(604)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(605)) + "#icomoon) format(\"svg\");font-weight:400;font-style:normal}div.cs-skin-elastic{background:transparent;font-size:1.5em;font-weight:700;color:#5b8583}@media screen and (max-width:30em){div.cs-skin-elastic{font-size:1em}}.cs-skin-elastic>span{background-color:#fff;z-index:100}.cs-skin-elastic>span:after{font-family:icomoon;content:\"\\E005\";-webkit-backface-visibility:hidden;backface-visibility:hidden}.cs-skin-elastic .cs-options{overflow:visible;background:transparent;opacity:1;visibility:visible;padding-bottom:1.25em;pointer-events:none}.cs-skin-elastic.cs-active .cs-options{pointer-events:auto}.cs-skin-elastic .cs-options>ul:before{content:\"\";position:absolute;width:100%;height:100%;left:0;top:0;-webkit-transform:scaleY(0);transform:scaleY(0);background:#fff;-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transition:-webkit-transform .3s;transition:transform .3s}.cs-skin-elastic.cs-active .cs-options>ul:before{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transition:none;transition:none;-webkit-animation:expand .6s ease-out;animation:expand .6s ease-out}.cs-skin-elastic .cs-options ul li{opacity:0;-webkit-transform:translate3d(0,-25px,0);transform:translate3d(0,-25px,0);-webkit-transition:opacity .15s,-webkit-transform .15s;transition:opacity .15s,transform .15s}.cs-skin-elastic.cs-active .cs-options ul li{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1;-webkit-transition:none;transition:none;-webkit-animation:bounce .6s ease-out;animation:bounce .6s ease-out}.cs-skin-elastic .cs-options span{background-repeat:no-repeat;background-position:1.5em 50%;background-size:2em auto;padding:.8em 1em .8em 4em}.cs-skin-elastic .cs-options .cs-selected span,.cs-skin-elastic .cs-options li.cs-focus span,.cs-skin-elastic .cs-options span:hover{color:#1e4c4a}.cs-skin-elastic .cs-options .cs-selected span:after{content:\"\"}.cs-skin-elastic .cs-options li.flag-france span{background-image:url(" + escape(__webpack_require__(606)) + ")}.cs-skin-elastic .cs-options li.flag-brazil span{background-image:url(" + escape(__webpack_require__(607)) + ")}.cs-skin-elastic .cs-options li.flag-safrica span{background-image:url(" + escape(__webpack_require__(608)) + ")}.cs-skin-elastic .cs-options li.flag-argentina span{background-image:url(" + escape(__webpack_require__(609)) + ")}@-webkit-keyframes expand{0%{-webkit-transform:scaleY(0)}25%{-webkit-transform:scaleY(1.2)}50%{-webkit-transform:scaleY(.85)}75%{-webkit-transform:scaleY(1.05)}to{-webkit-transform:scaleX(1)}}@keyframes expand{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}25%{-webkit-transform:scaleY(1.2);transform:scaleY(1.2)}50%{-webkit-transform:scaleY(.85);transform:scaleY(.85)}75%{-webkit-transform:scaleY(1.05);transform:scaleY(1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes bounce{0%{-webkit-transform:translate3d(0,-25px,0);opacity:0}25%{-webkit-transform:translate3d(0,10px,0)}50%{-webkit-transform:translate3d(0,-6px,0)}75%{-webkit-transform:translate3d(0,2px,0)}to{-webkit-transform:translateZ(0);opacity:1}}@keyframes bounce{0%{-webkit-transform:translate3d(0,-25px,0);transform:translate3d(0,-25px,0);opacity:0}25%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}50%{-webkit-transform:translate3d(0,-6px,0);transform:translate3d(0,-6px,0)}75%{-webkit-transform:translate3d(0,2px,0);transform:translate3d(0,2px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}}div.cs-select{display:inline-block;vertical-align:middle;position:relative;text-align:left;background:#f1f2f7;z-index:100;width:100%;max-width:80px;margin-left:25px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.cs-select:focus{outline:none}.cs-select select{display:none}.cs-select span{display:block;position:relative;cursor:pointer;padding:9px 15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cs-select .cs-selected span:after,.cs-select>span:after{speak:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.cs-select>span:after{content:\"\\F107\";font-family:Fontawesome;right:1em}.cs-select .cs-selected span:after{content:\"\\2713\";margin-left:1em}.cs-select.cs-active>span:after{-webkit-transform:translateY(-50%) rotate(180deg);transform:translateY(-50%) rotate(180deg)}div.cs-active{z-index:200}.cs-select .cs-options{position:absolute;overflow:hidden;width:100%;background:#f1f2f7;visibility:hidden}.cs-select.cs-active .cs-options{visibility:visible}.cs-select ul{list-style:none;margin:0;padding:0;width:100%}.cs-select ul span{padding:5px 15px}.cs-select ul li{display:block}.cs-select ul li.cs-focus span{background-color:#ddd}.cs-select li.cs-optgroup ul{padding-left:1em}.cs-select li.cs-optgroup>span{cursor:default}", ""]);

// exports


/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icomoon.eot?35a7a9ba1333644da02577e83b69030e";

/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icomoon.eot?35a7a9ba1333644da02577e83b69030e";

/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icomoon.woff?3c04f3ea24a931b85b0d67765497e1b1";

/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icomoon.ttf?a1551905f48129d747b3ef25941eecb7";

/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icomoon.svg?a62d8fae4b033c4159a875aa561ce8c2";

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fr.svg?027fddb4ab18a2891b0eeabc9aff4a99";

/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "br.svg?575b1c811c4940c67c8df103444452c1";

/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "re.svg?24f6e95e01b68f3cae37e36cf8d4c1b6";

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ar.svg?c1bbd575a008577a8d23f55898b1dfa8";

/***/ }),
/* 610 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 611 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-dashboard',
      badge: {
        variant:'success',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'UI elements',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },

    {
      name: 'Components',
      url: '/components',
      icon: 'fa fa-puzzle-piece',
      children: [
        {
          name: 'Buttons',
          url: '/components/buttons',
          icon: 'fa fa-puzzle-piece',
          badge: {
            variant: 'danger',
            text: 'NEW'
          }
        },
        {
          name: 'Badges',
          url: '/components/badges',
          icon: 'fa fa-id-badge'
        },
        {
          name: 'Alerts',
          url: '/components/alerts',
          icon: 'fa fa-exclamation-triangle'
        },
        {
          name: 'Progress Bars',
          url: '/components/progressbars',
          icon: 'fa fa-spinner'
        },
        {
          name: 'Grids',
          url: '/components/grids',
          icon: 'fa fa-th'
        },
        {
          name: 'Typography',
          url: '/components/typography',
          icon: 'fa fa-file-word-o'
        }
      ]
    },
    {
      name: 'Tables',
      url: '/components/tables',
      icon: 'fa fa-table'
    },
    {
      name: 'Forms',
      url: '/components/basic-form',
      icon: 'fa fa-pencil-square-o',
      badge: {
        variant: 'warning',
        text: 'NEW'
      }
    },
    {
      name: 'Chart JS',
      url: '/components/chartjs',
      icon: 'fa fa-pie-chart',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Maps',
      url: '/components/maps/',
      icon: 'fa fa-map-marker',
      badge: {
        variant: 'info',
        text: 'NEW'
      },
      children: [
                  {
                    name: 'Google Maps',
                    url: '/components/maps/google-maps',
                    icon: 'fa fa-map-o'
                  },
                  {
                    name: 'Leaflet Maps',
                    url: '/components/maps/leaflet-maps',
                    icon: 'fa fa-street-view'
                  }
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/auth',
      icon: 'fa fa-paperclip',
      children: [
        {
          name: 'Login',
          url: '/auth/login',
          icon: 'fa fa-sign-in'
        },
        {
          name: 'Register',
          url: '/auth/register',
          icon: 'fa fa-sign-in'
        },
        {
          name: 'Error 404',
          url: '/auth/Page404',
          icon: 'fa fa-paper-plane'
        },
        {
          name: 'Error 500',
          url: '/auth/Page500',
          icon: 'fa fa-paper-plane'
        }
      ]
    },
    {
      name: 'Documentation',
      url: 'https://docs.vuejsadmin.com/docs/basix-admin-free-vuejs-admin-template/',
      icon: 'fa fa-file-text-o',
      badge: {
        variant: 'info',
        text: 'Docs'
      },
    },
    {
      name: 'Download',
      url: 'https://vuejsadmin.com/product/basix-admin/',
      icon: 'fa fa-shopping-cart',
      class: 'mt-auto',
      badge: {
        variant: 'success',
        text: 'Get It'
      },
    },
    {
      name: 'Purchase',
      url: 'https://vuejsadmin.com/product/arbano-vuejs-admin-pro/',
      icon: 'fa fa-shopping-cart',
      class: 'mt-auto',
      badge: {
        variant: 'danger',
        text: 'Buy Now'
      },
    }

  ]
});


/***/ }),
/* 612 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d74d28e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__ = __webpack_require__(615);
function injectStyle (ssrContext) {
  __webpack_require__(613)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d74d28e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(614);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c6b296b0", content, true, {});

/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "header .form-inline .search-form button{cursor:pointer}", ""]);

// exports


/***/ }),
/* 615 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header",attrs:{"id":"basix-header"}},[_c('div',{staticClass:"header-menu"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-7"},[_c('div',{staticClass:"header-left",class:{'open': _vm.isSearch, '': !_vm.isSearch }},[_c('button',{staticClass:"search-trigger",on:{"click":_vm.searchClick}},[_c('i',{staticClass:"fa fa-search"})]),_vm._v(" "),_c('div',{staticClass:"form-inline"},[_c('form',{staticClass:"search-form"},[_c('input',{staticClass:"form-control mr-sm-2",attrs:{"type":"text","placeholder":"Search ...","aria-label":"Search"}}),_vm._v(" "),_c('button',{staticClass:"search-close",attrs:{"type":"submit"},on:{"click":function($event){_vm.isSearch = !_vm.isSearch}}},[_c('i',{staticClass:"fa fa-close"})])])]),_vm._v(" "),_c('div',{staticClass:"dropdown for-notification"},[_c('button',{staticClass:"btn btn-secondary dropdown-toggle",class:{'notification-show': _vm.isNotification, '': !_vm.isNotification },attrs:{"type":"button","id":"notification","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","autoClose":"true"},on:{"click":_vm.handleNotification}},[_c('i',{staticClass:"fa fa-bell"}),_vm._v(" "),_c('span',{staticClass:"count bg-danger"},[_vm._v("5")])]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('div',{staticClass:"dropdown for-message"},[_c('button',{staticClass:"btn btn-secondary dropdown-toggle",class:{'message-show': _vm.isMessage, '': !_vm.isMessage },attrs:{"type":"button","id":"message","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{"click":_vm.handleMessage}},[_c('i',{staticClass:"ti-email"}),_vm._v(" "),_c('span',{staticClass:"count bg-primary"},[_vm._v("9")])]),_vm._v(" "),_vm._m(1)])])]),_vm._v(" "),_c('div',{staticClass:"col-sm-5"},[_c('div',{staticClass:"user-area dropdown float-right"},[_c('a',{staticClass:"dropdown-toggle",class:{'show': _vm.isActive, '': !_vm.isActive },attrs:{"href":"#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},on:{"click":_vm.handleClick}},[_c('img',{staticClass:"user-avatar rounded-circle",attrs:{"src":__webpack_require__(616),"alt":"User Avatar"}})]),_vm._v(" "),_c('div',{staticClass:"user-menu dropdown-menu",class:{'show': _vm.isActive, '': !_vm.isActive },on:{"click":_vm.handleClick}},[_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5)])]),_vm._v(" "),_c('div',{staticClass:"language-select dropdown",attrs:{"id":"language-select"}},[_c('a',{staticClass:"dropdown-toggle",class:{'show': _vm.isFlag, '':  !_vm.isFlag },attrs:{"href":"#","data-toggle":"dropdown","id":"language","aria-haspopup":"true","aria-expanded":"true"},on:{"click":_vm.handleFlag}},[_c('i',{staticClass:"flag-icon flag-icon-us"})]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu",class:{'show': _vm.isFlag, '': !_vm.isFlag },attrs:{"aria-labelledby":"language"},on:{"click":_vm.handleFlag}},[_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9)])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"notification"}},[_c('a',{staticClass:"dropdown-item media bg-flat-color-2 text-white",attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa-pencil"}),_vm._v(" "),_c('p',{staticClass:"text-white"},[_vm._v("You have 3 Notification")])]),_vm._v(" "),_c('a',{staticClass:"dropdown-item media bg-flat-color-1 text-white",attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa-check"}),_vm._v(" "),_c('p',{staticClass:"text-white"},[_vm._v("Server #1 overloaded.")])]),_vm._v(" "),_c('a',{staticClass:"dropdown-item media bg-flat-color-4 text-white",attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa-info"}),_vm._v(" "),_c('p',{staticClass:"text-white"},[_vm._v("Server #2 overloaded.")])]),_vm._v(" "),_c('a',{staticClass:"dropdown-item media bg-flat-color-5 text-white",attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa-warning"}),_vm._v(" "),_c('p',{staticClass:"text-white"},[_vm._v("Server #3 overloaded.")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"message"}},[_c('p',{staticClass:"red"},[_vm._v("You have 4 Mails")]),_vm._v(" "),_c('a',{staticClass:"dropdown-item media bg-flat-color-1",attrs:{"href":"#"}},[_c('span',{staticClass:"photo media-left"},[_c('img',{attrs:{"alt":"avatar","src":__webpack_require__(617)}})]),_vm._v(" "),_c('div',{staticClass:"message media-body"},[_c('span',{staticClass:"name float-left text-light"},[_vm._v("Jonathan Smith")]),_vm._v(" "),_c('span',{staticClass:"time float-right text-light"},[_vm._v("Just now")]),_vm._v(" "),_c('p',{staticClass:"text-light"},[_vm._v("Hello, this is an example msg")])])]),_vm._v(" "),_c('a',{staticClass:"dropdown-item media bg-flat-color-4",attrs:{"href":"#"}},[_c('span',{staticClass:"photo media-left"},[_c('img',{attrs:{"alt":"avatar","src":__webpack_require__(618)}})]),_vm._v(" "),_c('div',{staticClass:"message media-body"},[_c('span',{staticClass:"name float-left text-light"},[_vm._v("Jack Sanders")]),_vm._v(" "),_c('span',{staticClass:"time float-right text-light"},[_vm._v("5 minutes ago")]),_vm._v(" "),_c('p',{staticClass:"text-light"},[_vm._v("Lorem ipsum dolor sit amet, consectetur")])])]),_vm._v(" "),_c('a',{staticClass:"dropdown-item media bg-flat-color-5",attrs:{"href":"#"}},[_c('span',{staticClass:"photo media-left"},[_c('img',{attrs:{"alt":"avatar","src":__webpack_require__(619)}})]),_vm._v(" "),_c('div',{staticClass:"message media-body"},[_c('span',{staticClass:"name float-left text-light"},[_vm._v("Cheryl Wheeler")]),_vm._v(" "),_c('span',{staticClass:"time float-right text-light"},[_vm._v("10 minutes ago")]),_vm._v(" "),_c('p',{staticClass:"text-light"},[_vm._v("Hello, this is an example msg")])])]),_vm._v(" "),_c('a',{staticClass:"dropdown-item media bg-flat-color-3",attrs:{"href":"#"}},[_c('span',{staticClass:"photo media-left"},[_c('img',{attrs:{"alt":"avatar","src":__webpack_require__(620)}})]),_vm._v(" "),_c('div',{staticClass:"message media-body"},[_c('span',{staticClass:"name float-left text-light"},[_vm._v("Rachel Santos")]),_vm._v(" "),_c('span',{staticClass:"time float-right text-light"},[_vm._v("15 minutes ago")]),_vm._v(" "),_c('p',{staticClass:"text-light"},[_vm._v("Lorem ipsum dolor sit amet, consectetur")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"nav-link",attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa- user"}),_vm._v("My Profile")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"nav-link",attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa- user"}),_vm._v("Notifications "),_c('span',{staticClass:"count"},[_vm._v("13")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"nav-link",attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa -cog"}),_vm._v("Settings")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"nav-link",attrs:{"href":"#"}},[_c('i',{staticClass:"fa fa-power -off"}),_vm._v("Logout")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-item"},[_c('span',{staticClass:"flag-icon flag-icon-fr"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-item"},[_c('i',{staticClass:"flag-icon flag-icon-es"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-item"},[_c('i',{staticClass:"flag-icon flag-icon-us"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-item"},[_c('i',{staticClass:"flag-icon flag-icon-it"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "admin.jpg?5fd1d4e98e6701e94f713044b14ab6be";

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.jpg?4f7fdfc6675d0469eacc4d6c735219ac";

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2.jpg?480fe440dc6b962a63b6ab017d145380";

/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3.jpg?73e3cc5256255d13f8ee6504e38e48f1";

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4.jpg?75e0bbd2d3d2831a6d5e387d674a61db";

/***/ }),
/* 621 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Sidebar_vue__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_92c5df5a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sidebar_vue__ = __webpack_require__(662);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Sidebar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_92c5df5a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sidebar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 622 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarHeader_vue__ = __webpack_require__(28);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03d0f88a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarHeader_vue__ = __webpack_require__(625);
function injectStyle (ssrContext) {
  __webpack_require__(623)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03d0f88a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarHeader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_03d0f88a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarHeader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(624);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("32ba30bc", content, true, {});

/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".navbar .navbar-brand[data-v-03d0f88a]{justify-content:flex-start;padding-left:10%}", ""]);

// exports


/***/ }),
/* 625 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar-header",on:{"click":_vm.handleSidebarToggle}},[_c('button',{staticClass:"navbar-toggler",attrs:{"type":"button","data-toggle":"collapse","data-target":"#main-menu","aria-controls":"main-menu","aria-expanded":"false","aria-label":"Toggle navigation"},on:{"click":_vm.mainmenuToggle}},[_c('i',{staticClass:"fa fa-bars"})]),_vm._v(" "),_c('router-link',{staticClass:"navbar-brand",attrs:{"to":"/","exact":""}},[_c('img',{attrs:{"src":__webpack_require__(29),"alt":"Logo"}})]),_vm._v(" "),_c('router-link',{staticClass:"navbar-brand hidden",attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__(626),"alt":"Logo"}})]),_vm._v(" "),_c('sidebar-collapse')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo2.png?51f9b59f2720db038f5e44e5dead5cd5";

/***/ }),
/* 627 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarNavDropdown_vue__ = __webpack_require__(30);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34ef866e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarNavDropdown_vue__ = __webpack_require__(628);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarNavDropdown_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34ef866e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarNavDropdown_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 628 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"menu-item-has-children dropdown",class:{'show': _vm.isShow, '': !_vm.isShow },attrs:{"to":_vm.url},on:{"click":_vm.handleClick}},[_c('a',{attrs:{"href":"#"}},[_c('i',{staticClass:"menu-icon",class:_vm.icon}),_vm._v(" "),_c('span',{staticClass:"menu-title-text"},[_vm._v(_vm._s(_vm.name))])]),_vm._v(" "),_c('ul',{staticClass:"sub-menu children dropdown-menu",class:{'show': _vm.isShow, '': !_vm.isShow },on:{"click":_vm.handleClick}},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 629 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarNavTitle_vue__ = __webpack_require__(31);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dbf27ea_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarNavTitle_vue__ = __webpack_require__(654);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarNavTitle_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3dbf27ea_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarNavTitle_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(631), __esModule: true };

/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(648);
module.exports = __webpack_require__(14).Array.from;


/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var defined = __webpack_require__(16);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 633 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 634 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(34)(function () {
  return Object.defineProperty(__webpack_require__(35)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(17);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(639);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(41);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(640);
var enumBugKeys = __webpack_require__(40);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(35)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(646).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(641);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 641 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(642);
var enumBugKeys = __webpack_require__(40);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(23);
var arrayIndexOf = __webpack_require__(644)(false);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 644 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(645);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 645 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 646 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 647 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(42);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(33);
var $export = __webpack_require__(24);
var toObject = __webpack_require__(42);
var call = __webpack_require__(649);
var isArrayIter = __webpack_require__(650);
var toLength = __webpack_require__(37);
var createProperty = __webpack_require__(651);
var getIterFn = __webpack_require__(56);

$export($export.S + $export.F * !__webpack_require__(653)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 649 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(13);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(9);
var createDesc = __webpack_require__(18);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(36);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 654 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.classList},[(_vm.wrapper && _vm.wrapper.element)?[_c(_vm.wrapper.element,_vm._b({tag:"component"},'component',_vm.wrapper.attributes,false),[_vm._v("\n      "+_vm._s(_vm.name)+"\n    ")])]:[_vm._v("\n    "+_vm._s(_vm.name)+"\n  ")]],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 655 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarNavLink_vue__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e94f52a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarNavLink_vue__ = __webpack_require__(657);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarNavLink_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e94f52a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarNavLink_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 656 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(url) {
  var host = window.location.hostname;

  var linkHost = function(url) {
    if (/^https?:\/\//.test(url)) { // Absolute URL.
      // The easy way to parse an URL, is to create <a> element.
      // @see: https://gist.github.com/jlong/2428561
      var parser = document.createElement('a');
      parser.href = url;

      return parser.hostname;
    }
    else { // Relative URL.
      return window.location.hostname;
    }
  }(url);

  return host !== linkHost;
};


/***/ }),
/* 657 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ExternalLink)?_c('a',{attrs:{"href":_vm.url,"classes":_vm.classList}},[_c('i',{staticClass:"menu-icon",class:_vm.icon}),_vm._v(" "),_c('span',{staticClass:"menu-title-text"},[_vm._v(" "+_vm._s(_vm.name)+" ")]),_vm._v(" "),(_vm.badge && _vm.badge.text)?_c('span',{class:'badge badge-' + _vm.badge.variant},[_vm._v(_vm._s(_vm.badge.text))]):_vm._e()]):_c('router-link',{class:_vm.classList,attrs:{"to":_vm.url,"exact":""}},[_c('i',{staticClass:"menu-icon",class:_vm.icon}),_vm._v(" "),_c('span',{staticClass:"menu-title-text"},[_vm._v(_vm._s(_vm.name))]),_vm._v(" "),(_vm.badge && _vm.badge.text)?_c('span',{class:'badge badge-' + _vm.badge.variant},[_vm._v(_vm._s(_vm.badge.text))]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 658 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarNavItem_vue__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a19531e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarNavItem_vue__ = __webpack_require__(659);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarNavItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3a19531e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarNavItem_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 659 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:_vm.classList},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 660 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b7cfbc3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarFooter_vue__ = __webpack_require__(661);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b7cfbc3_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarFooter_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 661 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 662 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"left-panel",attrs:{"id":"left-panel"}},[_c('nav',{staticClass:"navbar navbar-expand-sm navbar-default"},[_c('SidebarHeader'),_vm._v(" "),_c('div',{staticClass:"main-menu collapse navbar-collapse",attrs:{"id":"main-menu"}},[_c('ul',{staticClass:"nav navbar-nav"},[_vm._l((_vm.navItems),function(item,index){return [(item.title)?[_c('SidebarNavTitle',{attrs:{"name":item.name,"classes":item.class,"wrapper":item.wrapper}})]:(item.divider)?[_c('li',{staticClass:"divider"})]:[(item.children)?[_c('SidebarNavDropdown',{attrs:{"name":item.name,"url":item.url,"icon":item.icon}},[_vm._l((item.children),function( childL1,index){return [(childL1.children)?[_c('SidebarNavDropdown',{attrs:{"name":childL1.name,"url":childL1.url,"icon":childL1.icon}},_vm._l((childL1.children),function(childL2,index){return _c('li',{staticClass:"nav-item"},[_c('SidebarNavLink',{attrs:{"name":childL2.name,"url":childL2.url,"icon":childL2.icon,"badge":childL2.badge,"variant":item.variant}})],1)}))]:[_c('SidebarNavItem',{attrs:{"classes":item.class}},[_c('SidebarNavLink',{attrs:{"name":childL1.name,"url":childL1.url,"icon":childL1.icon,"badge":childL1.badge,"variant":item.variant}})],1)]]})],2)]:[_c('SidebarNavItem',{attrs:{"classes":item.class}},[_c('SidebarNavLink',{attrs:{"name":item.name,"url":item.url,"icon":item.icon,"badge":item.badge,"variant":item.variant}})],1)]]]})],2)])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 663 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AuthLayout_vue__ = __webpack_require__(45);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ee0ca3a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AuthLayout_vue__ = __webpack_require__(666);
function injectStyle (ssrContext) {
  __webpack_require__(664)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AuthLayout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ee0ca3a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AuthLayout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 664 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(665);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2a1a06cd", content, true, {});

/***/ }),
/* 665 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".auth-layout{height:100vh;margin:0}.auth-layout .main{margin:0;height:100%}.auth-layout .main .auth-content{padding:0;display:flex;align-items:center;justify-content:center;background-color:#fff}.auth-layout .main .auth-wallpaper{background-color:#333;overflow:hidden;display:flex;align-items:center;justify-content:center}.auth-layout .main .auth-wallpaper .basix-home{z-index:2;font-size:2.625rem;color:#1ec260}.auth-layout .main .auth-wallpaper .oblique{position:absolute;background-color:#282828;left:38.5%;transform:rotate(150deg);width:27%;height:115%}", ""]);

// exports


/***/ }),
/* 666 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-layout"},[_c('div',{staticClass:"nav hidden-lg-up"},[_c('router-link',{staticClass:"basix-home",attrs:{"to":{path: '/'}}})],1),_vm._v(" "),_c('div',{staticClass:"main row"},[_c('div',{staticClass:"auth-content col-md-6"},[_c('router-view')],1),_vm._v(" "),_c('div',{staticClass:"auth-wallpaper col-md-6 hidden-md-down"},[_c('div',{staticClass:"oblique"}),_vm._v(" "),_c('router-link',{staticClass:"basix-home",attrs:{"to":{path: '/'}}},[_c('img',{attrs:{"src":__webpack_require__(29),"alt":"Logo"}})])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 667 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(_vm.isAuth)?_c('auth-layout'):_c('div',{staticClass:"admin-container"},[_c('Sidebar',{attrs:{"navItems":_vm.nav}}),_vm._v(" "),_c('div',{staticClass:"right-panel",attrs:{"id":"right-panel"}},[_c('Header'),_vm._v(" "),_c('div',{staticClass:"content pb-0"},[_c('transition',{attrs:{"enter-active-class":"animated fadeIn"}},[_c('router-view')],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 668 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_app__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getters__ = __webpack_require__(670);







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  strict: false,  // process.env.NODE_ENV !== 'production',
  getters: __WEBPACK_IMPORTED_MODULE_3__getters__,
  modules: {
    app: __WEBPACK_IMPORTED_MODULE_2__modules_app__["a" /* default */]
  },
  state: {},
  mutations: {}
})

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 669 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const state = {
  config: {
    googleMaps: {
      apiKey: 'AIzaSyBNAqPrTQoz9P4NBlDDyfxrnKiafkaL8iQ'
    },
    windowMatchSizeLg: '(min-width: 992px)',
  },
  isLoading: true
}

/* harmony default export */ __webpack_exports__["a"] = ({
  state
});


/***/ }),
/* 670 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "palette", function() { return palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const config = state => state.app.config
const isLoading = state => state.app.isLoading
const palette = state => state.app.config.palette




/***/ }),
/* 671 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
  * vue-router v3.0.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (false) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (false) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "production" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (false) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (false) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (false) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (false) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (false) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (false) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (false) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (false) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (false) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (false) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (false) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (false) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "production" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (false) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "production" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 672 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Dynamic Loading Modules

// Views
const Dashboard = resolve => { __webpack_require__.e/* require.ensure */(1).then((()=>{ resolve(__webpack_require__(58)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };

// UI Components
const Buttons = resolve => { new Promise(function(resolve) { resolve(); }).then((()=>{ resolve(__webpack_require__(20)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Badges = resolve => { new Promise(function(resolve) { resolve(); }).then((()=>{ resolve(__webpack_require__(21)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Alerts = resolve => { __webpack_require__.e/* require.ensure */(16).then((()=>{ resolve(__webpack_require__(59)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const ProgressBars = resolve => { new Promise(function(resolve) { resolve(); }).then((()=>{ resolve(__webpack_require__(22)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };

const BasicForms = resolve => { __webpack_require__.e/* require.ensure */(10).then((()=>{ resolve(__webpack_require__(60)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Grids = resolve => { __webpack_require__.e/* require.ensure */(15).then((()=>{ resolve(__webpack_require__(61)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Widgets = resolve => { __webpack_require__.e/* require.ensure */(2).then((()=>{ resolve(__webpack_require__(62)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Typography = resolve => { __webpack_require__.e/* require.ensure */(11).then((()=>{ resolve(__webpack_require__(64)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Icons = resolve => { __webpack_require__.e/* require.ensure */(3).then((()=>{ resolve(__webpack_require__(65)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const SetsList = resolve => { __webpack_require__.e/* require.ensure */(9).then((()=>{ resolve(__webpack_require__(66)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Sets = resolve => { __webpack_require__.e/* require.ensure */(5).then((()=>{ resolve(__webpack_require__(53)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Tables = resolve => { __webpack_require__.e/* require.ensure */(12).then((()=>{ resolve(__webpack_require__(67)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };


//Charts
const ChartJS = resolve => { __webpack_require__.e/* require.ensure */(0).then((()=>{ resolve(__webpack_require__(68)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };


//Maps
const GoogleMapsPage = resolve => { __webpack_require__.e/* require.ensure */(6).then((()=>{ resolve(__webpack_require__(69)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const LeafletMapsPage = resolve => { __webpack_require__.e/* require.ensure */(4).then((()=>{ resolve(__webpack_require__(70)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };


// // User Info
// const User = resolve => { require.ensure(['../layouts/User.vue'], ()=>{ resolve(require('../layouts/User.vue')); }); };

//Pages
const Login = resolve => { __webpack_require__.e/* require.ensure */(8).then((()=>{ resolve(__webpack_require__(71)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Register = resolve => { __webpack_require__.e/* require.ensure */(7).then((()=>{ resolve(__webpack_require__(72)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Page404 = resolve => { __webpack_require__.e/* require.ensure */(14).then((()=>{ resolve(__webpack_require__(73)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };
const Page500 = resolve => { __webpack_require__.e/* require.ensure */(13).then((()=>{ resolve(__webpack_require__(74)); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); };


const routes = [
    {
        path : '',
        name: 'home',
        components:{
            default: Dashboard
        }
    },
    {   path : '/dashboard',
        components:{
            default: Dashboard
        }
    },

    // // UI Components
    { path : '/components/buttons', name: 'buttons', component: Buttons },
    { path : '/components/badges', name: 'badges', component: Badges },
    { path : '/components/alerts', name: 'alerts', component: Alerts },
    { path : '/components/progressbars', name: 'progressbars', component: ProgressBars },
    { path : '/components/basic-form', name: 'basic-form', component: BasicForms },
    { path : '/components/grids', name: 'grids', component: Grids },
    { path : '/components/widgets', name: 'widgets', component: Widgets },
    { path : '/components/typography', name: 'typography', component: Typography },
    { path : '/components/tables', name: 'tables', component: Tables },

    {
        path : '/components/icons',
        component: Icons,
        children:[
            {
                path: '',
                component: SetsList,
                name: 'Icons'
            },
            {
                path: ':name',
                component: Sets,
                props: true,

            }
        ]
    },
    {
        path : '/components/charts',
        name: 'Charts',
        component: { render (c) { return c('router-view') }},
        children:[

            {
                path: '/components/chartjs',
                component: ChartJS,
                name: 'chart-js'
            }
        ]
    },
    {
        path : '/components/maps',
        name: 'Maps',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/components/maps/google-maps',
                component: GoogleMapsPage,
                name: 'google-maps-page'
            },
            {
                path: '/components/maps/leaflet-maps',
                component: LeafletMapsPage,
                name: 'leaflet-maps-page'
            }
        ]
    },
    {
        path : '/components/auth',
        name: 'auth',
        component: { render (c) { return c('router-view') }},
        children:[
            {
                path: '/auth/login',
                component: Login,
                name: 'login',
                meta: {
                    default: false,
                    title: 'Login'
                }
            },
            {
                path: '/auth/register',
                component: Register,
                name: 'Register'
            },
            {
                path: '/auth/Page404',
                component: Page404,
                name: 'Page404'
            },
            {
                path: '/auth/Page500',
                component: Page500,
                name: 'Page500'
            }

        ]
    },

    //Redirect to Home
    { path: '/redirect-me', redirect: { name: 'home' } },

    // 404 redirect to home
    { path: '*', redirect: { name: 'Page404', component: Page404 }  }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = routes;


/***/ }),
/* 673 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buttons row"},[_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Badges ")]),_vm._v(" "),_c('small',[_vm._v("Use this class\n                    "),_c('code',[_vm._v("<a>")]),_vm._v(", "),_c('code',[_vm._v("<button>")]),_vm._v(" or "),_c('code',[_vm._v("<input>")])])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"}},[_vm._v("Primary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button"}},[_vm._v("Secondary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-success",attrs:{"type":"button"}},[_vm._v("Success")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"}},[_vm._v("Danger")]),_vm._v(" "),_c('button',{staticClass:"btn btn-warning",attrs:{"type":"button"}},[_vm._v("Warning")]),_vm._v(" "),_c('button',{staticClass:"btn btn-info",attrs:{"type":"button"}},[_vm._v("Info")]),_vm._v(" "),_c('button',{staticClass:"btn btn-link",attrs:{"type":"button"}},[_vm._v("Link")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Button tags ")]),_vm._v(" "),_c('small',[_vm._v("Use this class\n                    "),_c('code',[_vm._v(".btn")]),_vm._v(" or "),_c('code',[_vm._v("<button>")])])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('a',{staticClass:"btn btn-primary",attrs:{"href":"#","role":"button"}},[_vm._v("Link")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"type":"submit"}},[_vm._v("Button")]),_vm._v(" "),_c('input',{staticClass:"btn btn-info",attrs:{"type":"button","value":"Input"}}),_vm._v(" "),_c('input',{staticClass:"btn btn-success",attrs:{"type":"submit","value":"Submit"}}),_vm._v(" "),_c('input',{staticClass:"btn btn-warning",attrs:{"type":"reset","value":"Reset"}})])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Disabled state ")]),_vm._v(" "),_c('small',[_vm._v("Use this class\n                    "),_c('code',[_vm._v("disabled=\"disabled\"")])])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button","disabled":""}},[_vm._v("Primary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button","disabled":""}},[_vm._v("Secondary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-success",attrs:{"type":"button","disabled":""}},[_vm._v("Success")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button","disabled":""}},[_vm._v("Danger")]),_vm._v(" "),_c('button',{staticClass:"btn btn-warning",attrs:{"type":"button","disabled":""}},[_vm._v("Warning")]),_vm._v(" "),_c('button',{staticClass:"btn btn-info",attrs:{"type":"button","disabled":""}},[_vm._v("Info")]),_vm._v(" "),_c('button',{staticClass:"btn btn-link",attrs:{"type":"button","disabled":""}},[_vm._v("Link")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Button with Icons ")]),_vm._v(" "),_c('small',[_vm._v("Use "),_c('code',[_vm._v("<i>")])])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-star"}),_vm._v("  Primary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-lightbulb-o"}),_vm._v("  Secondary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-success",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-magic"}),_vm._v("  Success")]),_vm._v(" "),_c('button',{staticClass:"btn btn-warning",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-map-marker"}),_vm._v("  Warning")]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-rss"}),_vm._v("  Danger")]),_vm._v(" "),_c('button',{staticClass:"btn btn-link",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-link"}),_vm._v("  Link")])])])]),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Outline Buttons ")]),_vm._v(" "),_c('small',[_vm._v("Use this class\n                    "),_c('code',[_vm._v("<a>")]),_vm._v(", "),_c('code',[_vm._v("<button>")]),_vm._v(" or "),_c('code',[_vm._v("<input>")])])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('button',{staticClass:"btn btn-outline-primary",attrs:{"type":"button"}},[_vm._v("Primary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-secondary",attrs:{"type":"button"}},[_vm._v("Secondary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-success",attrs:{"type":"button"}},[_vm._v("Success")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-danger",attrs:{"type":"button"}},[_vm._v("Danger")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-warning",attrs:{"type":"button"}},[_vm._v("Warning")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-info",attrs:{"type":"button"}},[_vm._v("Info")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-link",attrs:{"type":"button"}},[_vm._v("Link")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Button tags ")]),_vm._v(" "),_c('small',[_vm._v("Use this class\n                    "),_c('code',[_vm._v(".btn")]),_vm._v(" or "),_c('code',[_vm._v("<button>")])])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('a',{staticClass:"btn btn-outline-primary",attrs:{"href":"#","role":"button"}},[_vm._v("Link")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-danger",attrs:{"type":"submit"}},[_vm._v("Button")]),_vm._v(" "),_c('input',{staticClass:"btn btn-outline-info",attrs:{"type":"button","value":"Input"}}),_vm._v(" "),_c('input',{staticClass:"btn btn-outline-success",attrs:{"type":"submit","value":"Submit"}}),_vm._v(" "),_c('input',{staticClass:"btn btn-outline-warning",attrs:{"type":"reset","value":"Reset"}})])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Disabled state ")]),_vm._v(" "),_c('small',[_vm._v("Use this class\n                    "),_c('code',[_vm._v("disabled=\"disabled\"")])])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('button',{staticClass:"btn btn-outline-primary",attrs:{"type":"button","disabled":""}},[_vm._v("Primary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-secondary",attrs:{"type":"button","disabled":""}},[_vm._v("Secondary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-success",attrs:{"type":"button","disabled":""}},[_vm._v("Success")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-danger",attrs:{"type":"button","disabled":""}},[_vm._v("Danger")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-warning",attrs:{"type":"button","disabled":""}},[_vm._v("Warning")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-info",attrs:{"type":"button","disabled":""}},[_vm._v("Info")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-link",attrs:{"type":"button","disabled":""}},[_vm._v("Link")])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Button with Icons ")]),_vm._v(" "),_c('small',[_vm._v("Use "),_c('code',[_vm._v("<i>")])])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('button',{staticClass:"btn btn-outline-primary",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-star"}),_vm._v("  Primary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-secondary",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-lightbulb-o"}),_vm._v("  Secondary")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-success",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-magic"}),_vm._v("  Success")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-warning",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-map-marker"}),_vm._v("  Warning")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-danger",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-rss"}),_vm._v("  Danger")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-link",attrs:{"type":"button"}},[_c('i',{staticClass:"fa fa-link"}),_vm._v("  Link")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(675);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("580f688c", content, true, {});

/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".card button[data-v-ad00a900]{margin-bottom:8px}", ""]);

// exports


/***/ }),
/* 676 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"badges row"},[_c('div',{staticClass:"col-lg-6"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Badges")]),_vm._v(" "),_c('small',[_vm._v("Use "),_c('code',[_vm._v(".badge")]),_vm._v(" class within "),_c('code',[_vm._v("<span>")]),_vm._v(" elements to create badges:\n                ")])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('a',{attrs:{"href":"#"}},[_vm._v("News "),_c('span',{staticClass:"badge badge-primary"},[_vm._v("5")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{attrs:{"href":"#"}},[_vm._v("Comments "),_c('span',{staticClass:"badge badge-warning"},[_vm._v("10")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{attrs:{"href":"#"}},[_vm._v("Updates "),_c('span',{staticClass:"badge badge-success"},[_vm._v("2")])])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Labels")])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('p',{staticClass:"text-muted m-b-15"},[_vm._v("Use the "),_c('code',[_vm._v(".label")]),_vm._v(" class,  followed by one of the six contextual classes "),_c('code',[_vm._v(".label-default")]),_vm._v(", "),_c('code',[_vm._v(".label-primary")]),_vm._v(", "),_c('code',[_vm._v(".label-success")]),_vm._v(",\n                    "),_c('code',[_vm._v(".label-info")]),_vm._v(", "),_c('code',[_vm._v(".label-warning")]),_vm._v(" or "),_c('code',[_vm._v(".label-danger")]),_vm._v(", within a "),_c('code',[_vm._v("<span>")]),_vm._v(" element to create a label:")]),_vm._v(" "),_c('h1',[_vm._v("Example heading "),_c('span',{staticClass:"badge badge-secondary"},[_vm._v("New")])]),_vm._v(" "),_c('h2',[_vm._v("Example heading "),_c('span',{staticClass:"badge badge-secondary"},[_vm._v("New")])]),_vm._v(" "),_c('h3',[_vm._v("Example heading "),_c('span',{staticClass:"badge badge-secondary"},[_vm._v("New")])]),_vm._v(" "),_c('h4',[_vm._v("Example heading "),_c('span',{staticClass:"badge badge-secondary"},[_vm._v("New")])]),_vm._v(" "),_c('h5',[_vm._v("Example heading "),_c('span',{staticClass:"badge badge-secondary"},[_vm._v("New")])]),_vm._v(" "),_c('h6',[_vm._v("Example heading "),_c('span',{staticClass:"badge badge-secondary"},[_vm._v("New")])])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6"},[_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Badges  in Buttons")])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('p',{staticClass:"text-muted m-b-15"},[_vm._v("Use the "),_c('code',[_vm._v(".badge")]),_vm._v(" class within "),_c('code',[_vm._v("<span>")]),_vm._v(" elements to create badges:")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary m-l-10 m-b-10",attrs:{"type":"button"}},[_vm._v("Primary "),_c('span',{staticClass:"badge badge-light"},[_vm._v("7")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-success m-l-10 m-b-10",attrs:{"type":"button"}},[_vm._v("Success "),_c('span',{staticClass:"badge badge-light"},[_vm._v("7")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-info m-l-10 m-b-10",attrs:{"type":"button"}},[_vm._v("Info "),_c('span',{staticClass:"badge badge-light"},[_vm._v("7")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-warning m-l-10 m-b-10",attrs:{"type":"button"}},[_vm._v("Warning "),_c('span',{staticClass:"badge badge-light"},[_vm._v("7")])]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger m-l-10 m-b-10",attrs:{"type":"button"}},[_vm._v("Danger "),_c('span',{staticClass:"badge badge-light"},[_vm._v("7")])])])]),_vm._v(" "),_c('div',{staticClass:"card"},[_c('div',{staticClass:"card-header"},[_c('strong',[_vm._v("Labels")])]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('p',{staticClass:"text-muted m-b-15"},[_vm._v("Use the "),_c('code',[_vm._v(".label")]),_vm._v(" class,  followed by one of the six contextual classes "),_c('code',[_vm._v(".label-default")]),_vm._v(", "),_c('code',[_vm._v(".label-primary")]),_vm._v(", "),_c('code',[_vm._v(".label-success")]),_vm._v(",\n                    "),_c('code',[_vm._v(".label-info")]),_vm._v(", "),_c('code',[_vm._v(".label-warning")]),_vm._v(" or "),_c('code',[_vm._v(".label-danger")]),_vm._v(", within a "),_c('code',[_vm._v("<span>")]),_vm._v(" element to create a label:")]),_vm._v(" "),_c('span',{staticClass:"badge badge-primary"},[_vm._v("Primary")]),_vm._v(" "),_c('span',{staticClass:"badge badge-secondary"},[_vm._v("Secondary")]),_vm._v(" "),_c('span',{staticClass:"badge badge-success"},[_vm._v("Success")]),_vm._v(" "),_c('span',{staticClass:"badge badge-danger"},[_vm._v("Danger")]),_vm._v(" "),_c('span',{staticClass:"badge badge-warning"},[_vm._v("Warning")]),_vm._v(" "),_c('span',{staticClass:"badge badge-info"},[_vm._v("Info")]),_vm._v(" "),_c('span',{staticClass:"badge badge-light"},[_vm._v("Light")]),_vm._v(" "),_c('span',{staticClass:"badge badge-dark"},[_vm._v("Dark")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 677 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(678);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("10bb9a4c", content, true, {});

/***/ }),
/* 678 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".circle .progressbar-text{font-size:4rem}", ""]);

// exports


/***/ }),
/* 679 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(680);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4faaaea5", content, true, {});

/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".progress-bar[data-v-4dd0e00e]{width:0;animation:progress-data-v-4dd0e00e 1.5s ease-in-out forwards;.title{opacity:0;animation:show-data-v-4dd0e00e .35s forwards ease-in-out .5s}}@keyframes progress-data-v-4dd0e00e{0%{width:0}to{width:100%}}@keyframes show-data-v-4dd0e00e{0%{opacity:0}to{opacity:1}}", ""]);

// exports


/***/ }),
/* 681 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress mb-2"},[(_vm.width)?_c('div',{class:_vm.progressClass,style:({ 'max-width': (_vm.width) + '%' }),attrs:{"role":"progressbar"}},[(_vm.width)?_c('span',{staticClass:"title"},[_vm._v(_vm._s(this.width)+"%")]):_vm._e()]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 682 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress-bars row"},[_c('div',{staticClass:"col-md-6"},[_c('card',{attrs:{"header-text":"Background"}},[_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"progress mb-3"},[_c('div',{staticClass:"progress-bar bg-success",staticStyle:{"width":"25%"},attrs:{"role":"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})]),_vm._v(" "),_c('div',{staticClass:"progress mb-2"},[_c('div',{staticClass:"progress-bar bg-info",staticStyle:{"width":"50%"},attrs:{"role":"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}})]),_vm._v(" "),_c('div',{staticClass:"progress mb-2"},[_c('div',{staticClass:"progress-bar bg-warning",staticStyle:{"width":"75%"},attrs:{"role":"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}})]),_vm._v(" "),_c('div',{staticClass:"progress mb-2"},[_c('div',{staticClass:"progress-bar bg-danger",staticStyle:{"width":"100%"},attrs:{"role":"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])])]),_vm._v(" "),_c('card',{attrs:{"header-text":"Labels"}},[_c('div',{staticClass:"card-body"},[_c('div',{staticClass:"progress mb-2"},[_c('div',{staticClass:"progress-bar bg-success",staticStyle:{"width":"25%"},attrs:{"role":"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}},[_vm._v("25%")])]),_vm._v(" "),_c('div',{staticClass:"progress mb-2"},[_c('div',{staticClass:"progress-bar bg-info",staticStyle:{"width":"50%"},attrs:{"role":"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}},[_vm._v("50%")])]),_vm._v(" "),_c('div',{staticClass:"progress mb-2"},[_c('div',{staticClass:"progress-bar bg-warning",staticStyle:{"width":"75%"},attrs:{"role":"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}},[_vm._v("75%")])]),_vm._v(" "),_c('div',{staticClass:"progress mb-2"},[_c('div',{staticClass:"progress-bar bg-danger",staticStyle:{"width":"100%"},attrs:{"role":"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[_vm._v("100%")])])])])],1),_vm._v(" "),_c('div',{staticClass:"col-md-6"},[_c('card',{attrs:{"header-text":"Animated Background"}},[_c('div',{staticClass:"card-body"},[_c('bootstrap-progress-bar',{attrs:{"type":"success","width":25}}),_vm._v(" "),_c('bootstrap-progress-bar',{attrs:{"type":"info","width":50}}),_vm._v(" "),_c('bootstrap-progress-bar',{attrs:{"type":"warning","width":75}}),_vm._v(" "),_c('bootstrap-progress-bar',{attrs:{"type":"danger","width":100}})],1)]),_vm._v(" "),_c('card',{attrs:{"header-text":"Animated Labels"}},[_c('div',{staticClass:"card-body"},[_c('bootstrap-progress-bar',{attrs:{"label":30,"type":"success","width":25}}),_vm._v(" "),_c('bootstrap-progress-bar',{attrs:{"label":50,"type":"info","width":50}}),_vm._v(" "),_c('bootstrap-progress-bar',{attrs:{"label":75,"type":"warning","width":75}}),_vm._v(" "),_c('bootstrap-progress-bar',{attrs:{"label":100,"type":"danger","width":100}})],1)])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 683 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(684);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("642b3949", content, true, {});

/***/ }),
/* 684 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".iCountUp[data-v-0e38f4aa]{font-size:1em;margin:0}", ""]);

// exports


/***/ }),
/* 685 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * vue-animate-number - 
 * @version v0.4.2
 * @link https://github.com/wangdahoo/vue-animate-number
 * @license MIT
 */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueAnimateNumber=e()}(this,function(){"use strict";var t=("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t,e){!function(e,n){t.exports=function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/assets/",e(0)}([function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.unsetBezierFunction=e.setBezierFunction=e.interpolate=e.tween=e.Tweenable=void 0;var r=n(1),i=n(4),o=n(5),u=n(6),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(u);r.Tweenable.filters.token=a,e.Tweenable=r.Tweenable,e.tween=r.tween,e.interpolate=i.interpolate,e.setBezierFunction=o.setBezierFunction,e.unsetBezierFunction=o.unsetBezierFunction},function(t,e,n){(function(t){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new b,n=e.tween(t);return n.tweenable=e,n}Object.defineProperty(e,"__esModule",{value:!0}),e.Tweenable=e.composeEasingObject=e.tweenProps=e.clone=e.each=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.tween=i;var a=n(2),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(a),c=n(3),f=function(t){return t&&t.__esModule?t:{default:t}}(c),h="linear",l="undefined"!=typeof window?window:t,p=l.requestAnimationFrame||l.webkitRequestAnimationFrame||l.oRequestAnimationFrame||l.msRequestAnimationFrame||l.mozCancelRequestAnimationFrame&&l.mozRequestAnimationFrame||setTimeout,d=function(){},m=e.each=function(t,e){Object.keys(t).forEach(e)},_=e.clone=function(t){return(0,f.default)({},t)},v=_(s),g=function(t,e,n,r){return t+(e-t)*n(r)},w=e.tweenProps=function(t,e,n,r,i,o,u){var a=t<o?0:(t-o)/i;return m(e,function(t){var i=u[t],o="function"==typeof i?i:v[i];e[t]=g(n[t],r[t],o,a)}),e},y=e.composeEasingObject=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,n={},r=void 0===e?"undefined":u(e);return"string"===r||"function"===r?m(t,function(t){return n[t]=e}):m(t,function(t){return n[t]=n[t]||e[t]||h}),n},b=e.Tweenable=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;r(this,t),this._currentState=e,this._configured=!1,this._scheduleFunction=p,void 0!==n&&this.setConfig(n)}return o(t,[{key:"_applyFilter",value:function(e){var n=this,r=t.filters,i=this._filterArgs;m(r,function(t){var o=r[t][e];void 0!==o&&o.apply(n,i)})}},{key:"_timeoutHandler",value:function(e){var n=this,r=arguments,i=this._delay,o=this._currentState,u=this._timestamp,a=this._duration,s=this._targetState,c=this._step,f=u+i+a,h=Math.min(e||t.now(),f),p=h>=f,d=a-(f-h);this.isPlaying()&&(p?(c(s,this._attachment,d),this.stop(!0)):(this._scheduleId=this._scheduleFunction.call(l,function(){return n._timeoutHandler.apply(n,r)},1e3/60),this._applyFilter("beforeTween"),h<u+i?(h=1,a=1,u=1):u+=i,w(h,o,this._originalState,s,a,u,this._easing),this._applyFilter("afterTween"),c(o,this._attachment,d)))}},{key:"tween",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this._isTweening?this:(void 0===e&&this._configured||this.setConfig(e),this._timestamp=t.now(),this._start(this.get(),this._attachment),this.resume())}},{key:"setConfig",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._configured=!0,this._attachment=e.attachment,(0,f.default)(this,{_pausedAtTime:null,_scheduleId:null,_delay:e.delay||0,_start:e.start||d,_step:e.step||d,_duration:e.duration||500,_currentState:_(e.from||this.get())}),(0,f.default)(this,{_originalState:this.get(),_targetState:_(e.to||this.get())});var n=this._currentState;return this._targetState=(0,f.default)({},n,this._targetState),this._easing=y(n,e.easing),this._filterArgs=[n,this._originalState,this._targetState,this._easing],this._applyFilter("tweenCreated"),this._promise=new Promise(function(e,n){t._resolve=e,t._reject=n}),this._promise.catch(d),this}},{key:"get",value:function(){return _(this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){return this._pausedAtTime=t.now(),this._isPaused=!0,this}},{key:"resume",value:function(){return this._isPaused&&(this._timestamp+=t.now()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this._promise}},{key:"seek",value:function(e){e=Math.max(e,0);var n=t.now();return this._timestamp+e===0?this:(this._timestamp=n-e,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,this._timeoutHandler(n),this.pause()),this)}},{key:"stop",value:function(t){return this._isTweening=!1,this._isPaused=!1,(l.cancelAnimationFrame||l.webkitCancelAnimationFrame||l.oCancelAnimationFrame||l.msCancelAnimationFrame||l.mozCancelRequestAnimationFrame||l.clearTimeout)(this._scheduleId),t?(this._applyFilter("beforeTween"),w(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd"),this._resolve(this._currentState,this._attachment)):this._reject(this._currentState,this._attachment),this}},{key:"isPlaying",value:function(){return this._isTweening&&!this._isPaused}},{key:"setScheduleFunction",value:function(t){this._scheduleFunction=t}},{key:"dispose",value:function(){var t=this;m(this,function(e){return delete t[e]})}}]),t}();(0,f.default)(b,{formulas:v,filters:{},now:Date.now||function(t){return+new Date}})}).call(e,function(){return this}())},function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.linear=function(t){return t},e.easeInQuad=function(t){return Math.pow(t,2)},e.easeOutQuad=function(t){return-(Math.pow(t-1,2)-1)},e.easeInOutQuad=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},e.easeInCubic=function(t){return Math.pow(t,3)},e.easeOutCubic=function(t){return Math.pow(t-1,3)+1},e.easeInOutCubic=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},e.easeInQuart=function(t){return Math.pow(t,4)},e.easeOutQuart=function(t){return-(Math.pow(t-1,4)-1)},e.easeInOutQuart=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},e.easeInQuint=function(t){return Math.pow(t,5)},e.easeOutQuint=function(t){return Math.pow(t-1,5)+1},e.easeInOutQuint=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},e.easeInSine=function(t){return 1-Math.cos(t*(Math.PI/2))},e.easeOutSine=function(t){return Math.sin(t*(Math.PI/2))},e.easeInOutSine=function(t){return-.5*(Math.cos(Math.PI*t)-1)},e.easeInExpo=function(t){return 0===t?0:Math.pow(2,10*(t-1))},e.easeOutExpo=function(t){return 1===t?1:1-Math.pow(2,-10*t)},e.easeInOutExpo=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},e.easeInCirc=function(t){return-(Math.sqrt(1-t*t)-1)},e.easeOutCirc=function(t){return Math.sqrt(1-Math.pow(t-1,2))},e.easeInOutCirc=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},e.easeOutBounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.easeInBack=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.easeOutBack=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},e.easeInOutBack=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},e.elastic=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},e.swingFromTo=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},e.swingFrom=function(t){var e=1.70158;return t*t*((e+1)*t-e)},e.swingTo=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},e.bounce=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},e.bouncePast=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},e.easeFromTo=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},e.easeFrom=function(t){return Math.pow(t,4)},e.easeTo=function(t){return Math.pow(t,.25)}},function(t,e){function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var u,a,s=n(t),c=1;c<arguments.length;c++){u=Object(arguments[c]);for(var f in u)i.call(u,f)&&(s[f]=u[f]);if(r){a=r(u);for(var h=0;h<a.length;h++)o.call(u,a[h])&&(s[a[h]]=u[a[h]])}}return s}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.interpolate=void 0;var r=n(1),i=new r.Tweenable;i._filterArgs=[],e.interpolate=function(t,e,n,o){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=(0,r.clone)(t),s=(0,r.composeEasingObject)(t,o);i.set({}),i._filterArgs=[a,t,e,s],i._applyFilter("tweenCreated"),i._applyFilter("beforeTween");var c=(0,r.tweenProps)(n,a,t,e,1,u,s);return i._applyFilter("afterTween"),c}},function(t,e,n){function r(t,e,n,r,i,o){var u=0,a=0,s=0,c=0,f=0,h=0,l=function(t){return((u*t+a)*t+s)*t},p=function(t){return((c*t+f)*t+h)*t},d=function(t){return(3*u*t+2*a)*t+s},m=function(t){return t>=0?t:0-t},_=function(t,e){var n=void 0,r=void 0,i=void 0,o=void 0,u=void 0,a=void 0;for(i=t,a=0;a<8;a++){if(o=l(i)-t,m(o)<e)return i;if(u=d(i),m(u)<1e-6)break;i-=o/u}if(n=0,r=1,(i=t)<n)return n;if(i>r)return r;for(;n<r;){if(o=l(i),m(o-t)<e)return i;t>o?n=i:r=i,i=.5*(r-n)+n}return i};return s=3*e,a=3*(r-e)-s,u=1-s-a,h=3*n,f=3*(i-n)-h,c=1-h-f,function(t,e){return p(_(t,e))}(t,function(t){return 1/(200*t)}(o))}Object.defineProperty(e,"__esModule",{value:!0}),e.unsetBezierFunction=e.setBezierFunction=void 0;var i=n(1),o=n(3),u=function(t){return t&&t.__esModule?t:{default:t}}(o),a=function(t,e,n,i){return function(o){return r(o,t,e,n,i,1)}};e.setBezierFunction=function(t,e,n,r,o){return i.Tweenable.formulas[t]=(0,u.default)(a(e,n,r,o),{displayName:t,x1:e,y1:n,x2:r,y2:o})},e.unsetBezierFunction=function(t){return delete i.Tweenable.formulas[t]}},function(t,e,n){function r(t){return parseInt(t,16)}function i(t,e,n){[t,e,n].forEach(g),this._tokenData=F(t)}function o(t,e,n,r){var i=this._tokenData;k(r,i),[t,e,n].forEach(function(t){return O(t,i)})}function u(t,e,n,r){var i=this._tokenData;[t,e,n].forEach(function(t){return j(t,i)}),I(r,i)}Object.defineProperty(e,"__esModule",{value:!0}),e.tweenCreated=i,e.beforeTween=o,e.afterTween=u;var a=n(1),s=/[0-9.\-]+/g,c=function(){var t=s.source,e=/,\s*/.source;return new RegExp("rgb\\("+t+e+t+e+t+"\\)","g")}(),f=/#([0-9]|[a-f]){3,6}/gi,h="VAL",l=function(t,e){return t.map(function(t,n){return"_"+e+"_"+n})},p=function(t){var e=t.match(/([^\-0-9\.]+)/g);return e?(1===e.length||t.charAt(0).match(/(\d|\-|\.)/))&&e.unshift(""):e=["",""],e.join(h)},d=function(t){return t=t.replace(/#/,""),3===t.length&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),[r(t.substr(0,2)),r(t.substr(2,2)),r(t.substr(4,2))]},m=function(t){return"rgb("+d(t).join(",")+")"},_=function(t,e,n){var r=e.match(t),i=e.replace(t,h);return r&&r.forEach(function(t){return i=i.replace(h,n(t))}),i},v=function(t){return _(f,t,m)},g=function(t){(0,a.each)(t,function(e){var n=t[e];"string"==typeof n&&n.match(f)&&(t[e]=v(n))})},w=function(t){var e=t.match(s).map(Math.floor);return""+t.match(/^.*\(/)[0]+e.join(",")+")"},y=function(t){return _(c,t,w)},b=function(t){return t.match(s)},F=function(t){var e={};return(0,a.each)(t,function(n){var r=t[n];"string"==typeof r&&(e[n]={formatString:p(r),chunkNames:l(b(r),n)})}),e},O=function(t,e){(0,a.each)(e,function(n){b(t[n]).forEach(function(r,i){return t[e[n].chunkNames[i]]=+r}),delete t[n]})},M=function(t,e){var n={};return e.forEach(function(e){n[e]=t[e],delete t[e]}),n},S=function(t,e){return e.map(function(e){return t[e]})},C=function(t,e){return e.forEach(function(e){return t=t.replace(h,+e.toFixed(4))}),t},j=function(t,e){(0,a.each)(e,function(n){var r=e[n],i=r.chunkNames,o=r.formatString,u=C(o,S(M(t,i),i));t[n]=y(u)})},k=function(t,e){(0,a.each)(e,function(n){var r=e[n].chunkNames,i=t[n];if("string"==typeof i){var o=i.split(" "),u=o[o.length-1];r.forEach(function(e,n){return t[e]=o[n]||u})}else r.forEach(function(e){return t[e]=i});delete t[n]})},I=function(t,e){(0,a.each)(e,function(n){var r=e[n].chunkNames,i=(r.length,t[r[0]]);t[n]="string"==typeof i?r.map(function(e){var n=t[e];return delete t[e],n}).join(" "):i})}}])}()}()})),e=t,n=/^\d+(\.\d+)?$/,r=/^\[1-9][0-9]*$/,i=/^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/,o=function(t){return"number"==typeof t||"string"==typeof t&&(n.test(t)||r.test(t))},u=function(t){return i.test(t)},a=function(t){return t=t.replace("#",""),3===t.length&&(t=""+t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:parseInt(t.substr(0,2),16),g:parseInt(t.substr(2,2),16),b:parseInt(t.substr(4,2),16)}},s=function(t,e){for(var n in e)t[n]=e[n]},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return void 0!=t.num?n("span",{style:t.numColor,domProps:{textContent:t._s(t.num)}}):t._e()},staticRenderFns:[],props:{from:{type:[Number,String],required:!0,validator:o},to:{type:[Number,String],required:!0,validator:o},duration:{type:[Number,String],default:1e3,validator:o},easing:{type:String,default:"easeOutQuad"},formatter:{type:Function,default:parseInt},mode:{type:String,validator:function(t){return"auto"===t||"manual"===t},default:"auto"},animateEnd:Function,fromColor:{type:String,validator:u},toColor:{type:String,validator:u}},computed:{_from:function(){return this.from},_to:function(){return this.to},_fromColor:function(){return this.fromColor},_toColor:function(){return this.toColor}},data:function(){return{num:void 0,options:void 0,state:0,numColor:{}}},mounted:function(){if(this.makeOptions(),"auto"===this.mode&&this.start(),"manual"===this.mode&&("string"==typeof this._from?this.num=this.formatter(parseFloat(this._from)):this.num=this.formatter(this._from),this._fromColor&&this._toColor)){var t=a(this._fromColor),e=t.r,n=t.g,r=t.b;this.numColor={color:"rgb("+parseInt(e)+", "+parseInt(n)+", "+parseInt(r)+")"}}},methods:{updateNumber:function(t){this.num=this.formatter?this.formatter(t.x):t.x,this.numColor={color:"rgb("+parseInt(t.r)+", "+parseInt(t.g)+", "+parseInt(t.b)+")"}},makeOptions:function(){var t="string"==typeof this._from?{x:parseFloat(this._from)}:{x:this._from},e="string"==typeof this._to?{x:parseFloat(this._to)}:{x:this._to};if(this._fromColor&&this._toColor){var n=a(this._fromColor);s(t,n);var r=a(this._toColor);s(e,r)}var i="string"==typeof this.duration?parseFloat(this.duration):this.duration;this.options={from:t,to:e,duration:i,easing:this.easing,step:this.updateNumber}},start:function(t){var n=this;this.state>0||(this.state=1,t&&s(this.options,t),0===this.options.duration&&(this.options.duration=1),e.tween(this.options).then(this.updateNumber).then(function(){n.state=0,n.animateEnd&&n.animateEnd(parseFloat(n.num))}))},reset:function(t,e,n,r){if(this.options.from="string"==typeof t?{x:parseFloat(t)}:{x:t},this.options.to="string"==typeof e?{x:parseFloat(e)}:{x:e},n&&u(n)&&r&&u(r)){var i=a(n);s(this.options.from,i);var o=a(r);s(this.options.to,o)}}}},f={install:function(t,e){t.component("animate-number",c)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(f),f});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 686 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('animate-number',{attrs:{"mode":"auto","from":_vm.from,"to":_vm.to,"duration":4000,"easing":"easeOutQuad"}})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 687 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Tables */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Alert_vue__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Buttons_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Badges_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AnimateNumber_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProgressBars_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progressbar_BootstrapProgressBar_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_SidebarCollapse_vue__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__widgets_CardTemplate_vue__ = __webpack_require__(694);
/* unused harmony reexport Alert */
/* unused harmony reexport SidebarCollapse */
/* unused harmony reexport CardTemplate */
/* unused harmony reexport AnimateNumber */
/* unused harmony reexport ProgressBars */
/* unused harmony reexport BootstrapProgressBar */


//Components





//Progress Bars




//Importing Custom Components




// Registered Components
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component( 'basix-alert', __WEBPACK_IMPORTED_MODULE_1__Alert_vue__["a" /* default */])
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component( 'sidebar-collapse', __WEBPACK_IMPORTED_MODULE_7__sidebar_SidebarCollapse_vue__["a" /* default */] )
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component( 'card', __WEBPACK_IMPORTED_MODULE_8__widgets_CardTemplate_vue__["a" /* default */] )
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component( 'basix-counter', __WEBPACK_IMPORTED_MODULE_4__AnimateNumber_vue__["a" /* default */] )
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component( 'bootstrap-progress-bar', __WEBPACK_IMPORTED_MODULE_6__progressbar_BootstrapProgressBar_vue__["a" /* default */] )





/***/ }),
/* 688 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alert_vue__ = __webpack_require__(50);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eb094390_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Alert_vue__ = __webpack_require__(691);
function injectStyle (ssrContext) {
  __webpack_require__(689)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eb094390"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Alert_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eb094390_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Alert_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 689 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(690);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2d7e46de", content, true, {});

/***/ }),
/* 690 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".fade-enter-active[data-v-eb094390],.fade-leave-active[data-v-eb094390]{transition:opacity .5s}.fade-enter[data-v-eb094390],.fade-leave-to[data-v-eb094390]{opacity:0}", ""]);

// exports


/***/ }),
/* 691 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(!_vm.hidden)?_c('div',{staticClass:"basix-alert alert",class:_vm.alertClass},[_vm._t("default"),_vm._v(" "),(_vm.withCloseBtn)?_c('i',{staticClass:"fa fa-close alert-close float-right align-text-top",on:{"click":function($event){_vm.hide()}}}):_vm._e()],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 692 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarCollapse_vue__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b7818cb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarCollapse_vue__ = __webpack_require__(693);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SidebarCollapse_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b7818cb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SidebarCollapse_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 693 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"menutoggle pull-left",attrs:{"id":"menuToggle"},on:{"click":_vm.handleSidebarToggle}},[_c('i',{staticClass:"fa fa fa-tasks"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 694 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CardTemplate_vue__ = __webpack_require__(52);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e1a7d39c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardTemplate_vue__ = __webpack_require__(697);
function injectStyle (ssrContext) {
  __webpack_require__(695)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e1a7d39c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CardTemplate_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e1a7d39c_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CardTemplate_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 695 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(696);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1831a37e", content, true, {});

/***/ }),
/* 696 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".noheader .card-header[data-v-e1a7d39c]{display:none}", ""]);

// exports


/***/ }),
/* 697 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",class:{'noheader': !_vm.headerText}},[_c('div',{staticClass:"card-header"},[(_vm.headerIcon)?_c('i',{staticClass:"mr-2",class:_vm.headerIcon}):_vm._e(),_vm._v(" "),(_vm.headerText)?_c('strong',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.headerText))]):_vm._e(),_vm._v(" "),(_vm.smallText)?_c('small',[_vm._v(_vm._s(_vm.smallText))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_vm._t("default")],2),_vm._v(" "),(_vm.footerText)?_c('div',{staticClass:"card-footer"},[_vm._v("\n        "+_vm._s(_vm.footerText)+"\n    ")]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map