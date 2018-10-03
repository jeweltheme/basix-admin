(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DOMTools"] = factory();
	else
		root["DOMTools"] = factory();
})(this, function() {
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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* Provides DOM Helpers for -IE8+- IE9+
	 *
	 * FIXME: Revisit this library and ensure all methods and/or variables are
	 * compatible with IE8.
	 *
	 * Inspired by jQuery, this library tries to mirror most of jQuery API or at
	 * least provide similar names.
	 */

	module.exports = {

	  canUseDOM: __webpack_require__(1),

	  // jQuery inspired methods
	  // -----------------------

	  addClass: __webpack_require__(2),
	  after: __webpack_require__(3),
	  append: __webpack_require__(5),
	  before: __webpack_require__(6),
	  children: __webpack_require__(7),
	  clone: __webpack_require__(8),
	  contains: __webpack_require__(9),
	  css: __webpack_require__(10),
	  empty: __webpack_require__(14),
	  hasClass: __webpack_require__(15),
	  height: __webpack_require__(16),
	  html: __webpack_require__(17),
	  find: __webpack_require__(18),
	  insertAfter: __webpack_require__(4),
	  hide: __webpack_require__(19),
	  offset: __webpack_require__(20),
	  outerHeight: __webpack_require__(23),
	  outerWidth: __webpack_require__(24),
	  parent: __webpack_require__(25),
	  prepend: __webpack_require__(26),
	  remove: __webpack_require__(27),
	  show: __webpack_require__(28),
	  width: __webpack_require__(29),

	  // jQuery methods
	  // --------------

	  nodeName: __webpack_require__(30),

	  // Events
	  // ------

	  addEventListener: __webpack_require__(31),
	  removeEventListener: __webpack_require__(32),

	  __VERSION__: '0.1.1'
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	
	// from JedWatson/exenv 1.2.0
	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	// Supports IE8+
	//
	// Snippet from:
	//  http://youmightnotneedjquery.com/#add_class
	//

	function addClass(el, className) {
	  if (el.classList) el.classList.add(className);else el.className += ' ' + className;
	}

	module.exports = addClass;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	var insertAfter = __webpack_require__(4);

	// IE8+
	//
	// Attempts to mirror $.after for htmlString and Elements.
	//
	// Portion of this method is a snippet from:
	// http://youmightnotneedjquery.com/#after
	//
	function after( /* Element */el, elementOrText) {
	  if (typeof elementOrText === 'string') {
	    el.insertAdjacentHTML('afterend', elementOrText);
	  } else {
	    insertAfter(elementOrText, el);
	  }
	}

	module.exports = after;

/***/ },
/* 4 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// snippet from http://stackoverflow.com/a/4793630
	function insertAfter(newNode, referenceNode) {
	  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
	}

	module.exports = insertAfter;

/***/ },
/* 5 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// Snippet from:
	// http://youmightnotneedjquery.com/#append
	function append(parent, el) {
	  parent.appendChild(el);
	}

	module.exports = append;

/***/ },
/* 6 */
/***/ function(module, exports) {

	

	// IE8+
	//
	// Attempts to mirror $.before for htmlString and Elements.
	//
	// Portion of this method is a snippet from:
	// http://youmightnotneedjquery.com/#before
	//
	function before( /* Element */el, elementOrText) {
	  if (typeof elementOrText === 'string') {
	    el.insertAdjacentHTML('beforebegin', elementOrText);
	  } else {
	    // assumes node
	    el.parentNode.insertBefore(elementOrText, el);
	  }
	}

	module.exports = before;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// IE8+
	//
	// Returns an Array of all children Element nodes, excluding comment/text
	// nodes, for "node"

	var canUseDOM = __webpack_require__(1);

	var children = function () {}; // noop if not working with DOM

	if (canUseDOM) {
	  children = function () {
	    if (document.children) {
	      return function (node) {
	        /// convert HTMLCollection into an Array
	        return Array.prototype.slice.call(node.children);
	      };
	    } else {
	      return function (node) {
	        var children = [];
	        var nodes = node.childNodes,
	            n,
	            i;
	        for (i = 0; i < nodes.length; i++) {
	          n = nodes[i];
	          if (n.nodeType === 1) {
	            children.push(n);
	          }
	        }
	        return children;
	      };
	    }
	  }();
	}

	module.exports = children;

/***/ },
/* 8 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// http://youmightnotneedjquery.com/#clone
	function clone( /* Element */el) {
	  return el.cloneNode(true);
	}

	module.exports = clone;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var canUseDOM = __webpack_require__(1);

	// react-bootstrap/dom-helpers 2.4.0 query/contains.js

	var contains = function () {
	  var root = canUseDOM && document.documentElement;

	  return root && root.contains ? function (context, node) {
	    return context.contains(node);
	  } : root && root.compareDocumentPosition ? function (context, node) {
	    return context === node || !!(context.compareDocumentPosition(node) & 16);
	  } : function (context, node) {
	    if (node) do {
	      if (node === context) return true;
	    } while (node = node.parentNode);

	    return false;
	  };
	}();

	module.exports = contains;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var _getComputedStyle = __webpack_require__(11);

	// IE8+
	//
	// Snippet from:
	// http://youmightnotneedjquery.com/#get_style
	//
	// We can support IE8+ by using our version of "getComputedStyle"
	function css( /* Element */el, ruleName) {
	  return _getComputedStyle(el)[ruleName];
	}

	module.exports = css;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// A modified version of "getComputedStyle" from react-bootstrap/dom-helpers v2.4.0

	var camelize = __webpack_require__(12);

	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

	module.exports = function _getComputedStyle(node) {
	  if (!node) {
	    throw new TypeError("No Element passed to `getComputedStyle()`");
	  }
	  var doc = node.ownerDocument;

	  return "defaultView" in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {

	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72

	    getPropertyValue: function (prop) {
	      var style = node.style;

	      prop = camelize(prop);

	      if (prop == 'float') {
	        prop = 'styleFloat';
	      }

	      var current = node.currentStyle[prop] || null;

	      if (current == null && style && style[prop]) {
	        current = style[prop];
	      }

	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left;

	        // Put in the new values to get a computed value out
	        if (rsLeft) {
	          runStyle.left = node.currentStyle.left;
	        }

	        style.left = prop === "fontSize" ? "1em" : current;
	        current = style.pixelLeft + "px";

	        // Revert the changed values
	        style.left = left;
	        if (rsLeft) {
	          runStyle.left = rsLeft;
	        }
	      }

	      return current;
	    }

	  };
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	 */

	'use strict';

	var camelize = __webpack_require__(13);
	var msPattern = /^-ms-/;

	module.exports = function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	
	// Modified version of:
	// https://github.com/react-bootstrap/dom-helpers/blob/v2.4.0/src/util/camelize.js

	var rHyphen = /-(.)/g;

	module.exports = function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    chr.toUpperCase();
	  });
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// http://youmightnotneedjquery.com/#empty
	function empty( /* Element */el) {
	  el.innerHTML = '';
	}

	module.exports = empty;

/***/ },
/* 15 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// http://youmightnotneedjquery.com/#has_class
	function hasClass(el, className) {
	  if (el.classList) {
	    return el.classList.contains(className);
	  } else {
	    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	  }
	}

	module.exports = hasClass;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var _getComputedStyle = __webpack_require__(11);

	// emulate $(el).height();
	//
	// Browser support: IE9+
	//
	// Modified snippet from http://stackoverflow.com/a/29881817
	function height( /* Element */el) {
	  var computedStyle = _getComputedStyle(el);
	  var height = el.clientHeight; // height with padding

	  height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);

	  return height;
	}

	module.exports = height;

/***/ },
/* 17 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// Attempt to mirror $(el).html() API
	function html( /* Element */el, /* string? */htmlString) {
	  if (typeof htmlString === 'string') {
	    el.innerHTML = htmlString;
	  } else {
	    return el.innerHTML;
	  }
	}

	module.exports = html;

/***/ },
/* 18 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// *IMPORTANT:*
	//
	// According to MDN, "Internet Explorer 8 only supported CSS2 selectors."
	//
	// Attempt to mirror $(el).find(selector);
	//
	// http://youmightnotneedjquery.com/#find_children
	//
	// @return {NodeList}
	function find( /* Element */el, /* String */selector) {
	  return el.querySelectorAll(selector);
	}

	module.exports = find;

/***/ },
/* 19 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// Snippet from:
	// http://youmightnotneedjquery.com/#hide
	function hide( /* Element */el) {
	  el.style.display = 'none';
	}

	module.exports = hide;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var contains = __webpack_require__(9);
	var getWindow = __webpack_require__(21);
	var ownerDocument = __webpack_require__(22);

	// Modified version of:
	// react-bootstrap/dom-helpers 2.4.0 query/offset.js
	function offset(node) {
	  var doc = ownerDocument(node),
	      win = getWindow(doc),
	      docElem = doc && doc.documentElement,
	      box = { top: 0, left: 0, height: 0, width: 0 };

	  if (!doc) return;

	  // Make sure it's not a disconnected DOM node
	  if (!contains(docElem, node)) return box;

	  if (node.getBoundingClientRect !== undefined) {
	    box = node.getBoundingClientRect();
	  }

	  if (box.width || box.height) {
	    box = {
	      top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
	      left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0),
	      width: (box.width == null ? node.offsetWidth : box.width) || 0,
	      height: (box.height == null ? node.offsetHeight : box.height) || 0
	    };
	  }

	  return box;
	}

	module.exports = offset;

/***/ },
/* 21 */
/***/ function(module, exports) {

	
	// react-bootstrap/dom-helpers 2.4.0 query/isWindow.js

	function getWindow(node) {
	  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
	}

	module.exports = getWindow;

/***/ },
/* 22 */
/***/ function(module, exports) {

	
	// react-bootstrap/dom-helpers 2.4.0 ownerDocument.js

	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}

	module.exports = ownerDocument;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var _getComputedStyle = __webpack_require__(11);

	// IE8+
	//
	// "$.outerHeight()"      http://youmightnotneedjquery.com/#outer_height
	// "$.outerHeight(true)"  http://youmightnotneedjquery.com/#outer_height_with_margin
	function outerHeight( /* Element */el, withMargin) {
	  var height = el.offsetHeight;
	  if (withMargin) {
	    var style = _getComputedStyle(el);

	    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
	  }
	  return height;
	}

	module.exports = outerHeight;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var _getComputedStyle = __webpack_require__(11);

	// IE8+
	//
	// "$.outerWidth()"      http://youmightnotneedjquery.com/#outer_width
	// "$.outerWidth(true)"  http://youmightnotneedjquery.com/#outer_width_with_margin
	function outerWidth( /* Element */el, withMargin) {
	  var width = el.offsetWidth;
	  if (withMargin) {
	    var style = _getComputedStyle(el);

	    width += parseInt(style.marginLeft) + parseInt(style.marginRight);
	    return width;
	  }
	  return width;
	}

	module.exports = outerWidth;

/***/ },
/* 25 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// http://youmightnotneedjquery.com/#parent
	function parent( /* Element */el) {
	  return el.parentNode;
	}

	module.exports = parent;

/***/ },
/* 26 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// http://youmightnotneedjquery.com/#prepend
	function prepend( /* Element */parent, /* Element */el) {
	  parent.insertBefore(el, parent.firstChild);
	}

	module.exports = prepend;

/***/ },
/* 27 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// Snippet from:
	// http://youmightnotneedjquery.com/#remove
	function remove( /* Element */el) {
	  el.parentNode.removeChild(el);
	}

	module.exports = remove;

/***/ },
/* 28 */
/***/ function(module, exports) {

	
	// IE8+
	//
	// Snippet from:
	// http://youmightnotneedjquery.com/#show
	function show( /* Element */el) {
	  el.style.display = '';
	}

	module.exports = show;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var _getComputedStyle = __webpack_require__(11);

	// emulate $(el).width();
	//
	// Browser support: IE9+
	//
	// Modified snippet from http://stackoverflow.com/a/29881817
	function width( /* Element */el) {
	  var computedStyle = _getComputedStyle(el);
	  var width = el.clientWidth; // width with padding

	  width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);

	  return width;
	}

	module.exports = width;

/***/ },
/* 30 */
/***/ function(module, exports) {

	
	// from jQuery 2.1.3
	function nodeName(elem, name) {
	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	}

	module.exports = nodeName;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var canUseDOM = __webpack_require__(1);

	var addEventListener = function () {};

	if (canUseDOM) {
	  addEventListener = function () {
	    if (document.addEventListener) {
	      /**
	       * Listen to DOM events during the bubble or capture phase.
	       *
	       * @param {Element} target DOM element to register listener on.
	       * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	       * @param {function} callback Callback function.
	       * @param {boolean} capture Capture phase. defaults to `false`
	       */
	      return function (target, eventType, callback, capture) {
	        target.addEventListener(eventType, callback, !!capture);
	      };
	    } else if (document.attachEvent) {
	      /**
	       * Listen to DOM events during the bubble phase.
	       *
	       * @param {Element} target DOM element to register listener on.
	       * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	       * @param {function} callback Callback function.
	       */
	      return function (target, eventType, callback) {
	        target.attachEvent('on' + eventType, callback);
	      };
	    }
	  }();
	}

	module.exports = addEventListener;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var canUseDOM = __webpack_require__(1);

	var removeEventListener = function () {};

	if (canUseDOM) {
	  removeEventListener = function () {
	    if (document.addEventListener) {
	      /**
	       * Remove existing event handler.
	       *
	       * @param {Element} target DOM element to register listener on.
	       * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	       * @param {function} callback Callback function.
	       * @param {boolean} capture Capture phase. defaults to `false`
	       */
	      return function (target, eventType, callback, capture) {
	        target.removeEventListener(eventType, callback, !!capture);
	      };
	    } else if (document.attachEvent) {
	      /**
	       * Remove existing event handler.
	       *
	       * @param {Element} target DOM element to register listener on.
	       * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	       * @param {function} callback Callback function.
	       */
	      return function (target, eventType, callback) {
	        target.detachEvent('on' + eventType, callback);
	      };
	    }
	  }();
	}

	module.exports = removeEventListener;

/***/ }
/******/ ])
});
;