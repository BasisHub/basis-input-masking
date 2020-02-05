(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("bbj-masks/src/StringMask"), require("bbj-masks/src/NumberMask"));
	else if(typeof define === 'function' && define.amd)
		define(["bbj-masks/src/StringMask", "bbj-masks/src/NumberMask"], factory);
	else if(typeof exports === 'object')
		exports["InputMasking"] = factory(require("bbj-masks/src/StringMask"), require("bbj-masks/src/NumberMask"));
	else
		root["Basis"] = root["Basis"] || {}, root["Basis"]["InputMasking"] = factory(root["BBj"]["Masks"]["StringMask"], root["BBj"]["Masks"]["NumberMask"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_67__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var check = function check(it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line no-undef
check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) || check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check((typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global) || // eslint-disable-next-line no-new-func
Function('return this')();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3); // Thank's IE8 for his funny defineProperty


module.exports = !fails(function () {
  return Object.defineProperty({}, 1, {
    get: function get() {
      return 7;
    }
  })[1] != 7;
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);

var definePropertyModule = __webpack_require__(6);

var createPropertyDescriptor = __webpack_require__(14);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);

var IE8_DOM_DEFINE = __webpack_require__(17);

var anObject = __webpack_require__(7);

var toPrimitive = __webpack_require__(16);

var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(40);

var requireObjectCoercible = __webpack_require__(15);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var createNonEnumerableProperty = __webpack_require__(5);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);

var propertyIsEnumerableModule = __webpack_require__(39);

var createPropertyDescriptor = __webpack_require__(14);

var toIndexedObject = __webpack_require__(8);

var toPrimitive = __webpack_require__(16);

var has = __webpack_require__(1);

var IE8_DOM_DEFINE = __webpack_require__(17);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4); // `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);

var fails = __webpack_require__(3);

var createElement = __webpack_require__(18); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var isObject = __webpack_require__(4);

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(20);

var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var setGlobal = __webpack_require__(9);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22);

var uid = __webpack_require__(23);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(45);

var store = __webpack_require__(20);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(48);

var global = __webpack_require__(0);

var aFunction = function aFunction(variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(1);

var toIndexedObject = __webpack_require__(8);

var indexOf = __webpack_require__(50).indexOf;

var hiddenKeys = __webpack_require__(10);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    !has(hiddenKeys, key) && has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);

var min = Math.min; // `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(27);

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TextInput__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NumberInput__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return __WEBPACK_IMPORTED_MODULE_0__TextInput__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return __WEBPACK_IMPORTED_MODULE_1__NumberInput__["a"]; });
/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TextInput__ = __webpack_require__(32);
/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__TextInput__["a" /* default */]);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_js__ = __webpack_require__(33);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/**
 * The `TextInput` will wrap text inputs and apply the given [bbj string mask](https://github.com/BasisHub/bbj-masks#string-masks)
 *
 * **Options**
 *
 * _Options can be passed via data attributes . For data attributes, append the option name to data-, as in data-mask_
 *
 * | Option    | Default | Description                                                                                             |
 * |-----------|---------|---------------------------------------------------------------------------------------------------------|
 * | mask |         | The bbj string mask @see [BBj String Masks](https://github.com/BasisHub/bbj-masks#string-masks) |
 *
 *  <br>
 *
 * **Example :**
 * ```html
 *  <input class="bbj-text-masked" name="test" id="test" value="ed23" data-mask="AA-00">
 *
 *  <script>
 *    document.addEventListener('DOMContentLoaded', function (e) {
 *      new Basis.InputMasking.TextInput({
 *         onUpdate: (maskedValue , rawValue , input) => {
 *            // do something
 *         },
 *         onInvalid: (err , input) => {
 *            // do something
 *         }
 *      })
 *    })
 *  </script>
 * ```
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */

var TextInput =
/*#__PURE__*/
function () {
  /**
   * Construct new TextInput
   *
   * @param {?Object} options - The input options.
   * @param {HTMLElement|String} [options.elements=".bbj-text-masked"] - The class name or the node to use
   * @param {HTMLDocument} [options.document=document] - Document instance to use
   * @param {String} [options.cssClassError="bbj-mask-error"] - A css class to attach to the input when it is invalid
   * @param {String} [options.cssClassSuccess="bbj-mask-success"] - A css class to attach to the input when it is valid after the user interaction
   * @param {Function} [options.onUpdate=null] - A callback to be called on the new masked value is set
   * @param {Function} [options.onInvalid=null] - A callback to be called on the input or the mask is invalid
   */
  function TextInput() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TextInput);

    this.options = _objectSpread({}, {
      elements: '.bbj-text-masked',
      doc: document,
      cssClassError: 'bbj-mask-error',
      cssClassSuccess: 'bbj-mask-success',
      onUpdate: null,
      onInvalid: null
    }, {}, options);
    this._onKeystroke = this._onKeystroke.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this.refresh();
  }
  /**
   * Initialize the component and wrap the input elements for masking in case
   * they are not wrapped yet
   */


  _createClass(TextInput, [{
    key: "refresh",
    value: function refresh() {
      var elements = typeof this.options.elements === 'string' ? this.options.doc.querySelectorAll(this.options.elements) : this.options.elements;
      var input, parentClass;

      for (var i = 0; i < elements.length; i++) {
        input = elements[i];

        if (input instanceof HTMLInputElement) {
          parentClass = input.parentNode.getAttribute('class');

          if (!input.getAttribute('id')) {
            console.warn("BBjMasking: Input has no ID. Without an ID the input cannot be masked", input);
            continue;
          } // we don't initialize the input's wrap twice


          var isWrapped = parentClass && parentClass.indexOf('textInputMask__wrap') > -1;

          this._wrap(input, isWrapped);
        } else {
          console.warn("BBjMasking: Invalid input element. The element will be ignored", input);
        }
      }
    }
    /**
     * Unwrap the input elements and remove attached listeners
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var elements = typeof this.options.elements === 'string' ? this.options.doc.querySelectorAll(this.options.elements) : this.options.elements;
      var input, parent, parentClass;

      for (var i = 0; i < elements.length; i++) {
        input = elements[i];
        parent = input.parentNode;
        parentClass = parent.getAttribute('class');

        if (parentClass && parentClass.indexOf('textInputMask__wrap') > -1) {
          this._unwrap(parent);
        }
      }
    }
    /**
     * Create the text masking input wrapper
     *
     * @param {HTMLInputElement} input the input element
     * @param {Boolean} isWrapped when true the input is already wrapped and we need to add what is
     *                            missing only
     *
     * @returns {HTMLSpanElement} the wrap element
     *
     * @protected
     */

  }, {
    key: "_wrap",
    value: function _wrap(input, isWrapped) {
      var inputId = input.getAttribute('id'),
          inputName = input.getAttribute('name'),
          mask = input.dataset.mask || '',
          originalPattern = input.pattern,
          defaultPattern = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["b" /* generatePatternFromMask */])(mask),
          pattern = originalPattern || defaultPattern;
      var wrap = null,
          unmaskInput = null;

      if (!isWrapped) {
        wrap = this.options.doc.createElement('span');
        unmaskInput = this.options.doc.createElement('input'); // hidden input with the unmasked values for forms
      } else {
        wrap = input.parentNode;
        unmaskInput = wrap.querySelector('.textInputMask__unmaskedInput');
      } // configure the actual input
      // -----------------------------------------------------


      input.value = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["c" /* maskIfNotMasked */])(input.value, mask);
      input.pattern = pattern;
      input.classList.add('textInputMask__textInput');
      input.dataset.mask = mask;
      input.dataset.valueUnmasked = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["d" /* unmask */])(input.value, mask);

      if (originalPattern && originalPattern !== defaultPattern) {
        input.dataset.isCustomPattern = true;
      }

      if (!isWrapped) {
        if (!(input.hasAttribute('readonly') || input.hasAttribute('disable'))) {
          input.addEventListener('keyup', this._onKeystroke);
          input.addEventListener('keypress', this._onKeystroke);
          input.addEventListener('paste', this._onKeystroke);
          input.addEventListener('focusin', this._onFocus);
          input.addEventListener('click', this._onFocus);
        }

        input.parentNode.insertBefore(wrap, input); // move the input outside the wrapper
      }

      if (this._validateInput(input)) {
        this.__fireOnUpdate(input.value, input.dataset.valueUnmasked, input);
      } // configure the unmasked input
      // ----------------------------------------------------


      unmaskInput.setAttribute('aria-hidden', 'true');
      unmaskInput.setAttribute('type', 'hidden');
      unmaskInput.classList.add('textInputMask__unmaskedInput');
      unmaskInput.value = input.dataset.valueUnmasked;
      if (inputId) unmaskInput.setAttribute('id', "".concat(inputId, "-unmasked"));
      if (inputName) unmaskInput.setAttribute('name', "".concat(inputName, "-unmasked"));

      if (!isWrapped) {
        // configure the wrapper
        wrap.setAttribute('class', 'textInputMask__wrap');
        wrap.appendChild(unmaskInput);
        wrap.appendChild(input);
      }

      return wrap;
    }
    /**
     * Unwrap the masked input and remove the value changed listener
     *
     * @param {HTMLSpanElement} textInput the wrapper span instance
     *
     * @protected
     */

  }, {
    key: "_unwrap",
    value: function _unwrap(textInput) {
      textInput.removeChild(textInput.querySelector('.textInputMask__unmaskedInput'));
      var input = textInput.querySelector('.textInputMask__textInput');
      input.removeEventListener('keyup', this._onKeystroke);
      input.removeEventListener('keypress', this._onKeystroke);
      input.removeEventListener('paste', this._onKeystroke);
      input.removeEventListener('focusin', this._onFocus);
      input.removeEventListener('click', this._onFocus);
      delete input.dataset.valueUnmasked;

      if (!input.dataset.isCustomPattern) {
        input.removeAttribute('pattern');
        delete input.dataset.isCustomPattern;
      }

      input.classList.remove(this.options.cssClassError);
      textInput.parentNode.insertBefore(input, textInput);
      textInput.parentNode.removeChild(textInput);
    }
    /**
     * Listen to every keystroke on the input and update the masked and the unmasked value
     *
     * @param {Event} e
     *
     * @protected
     */

  }, {
    key: "_onKeystroke",
    value: function _onKeystroke(e) {
      if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;
      e.preventDefault();
      var input = e.target,
          mask = input.dataset.mask || this.options.mask,
          eventType = e.type;
      input.classList.remove(this.options.cssClassError);
      input.classList.remove(this.options.cssClassSuccess);
      var value = input.value,
          keyCode = e.keyCode,
          key = e.key ? e.key.length > 1 ? '' : e.key : '',
          insertPosition = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* findCaretPosition */])(value, mask),
          newValue,
          unmaskedValue,
          maskError = false;

      switch (eventType) {
        case 'paste':
          newValue = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["c" /* maskIfNotMasked */])((e.clipboardData || window.clipboardData).getData('Text'), mask);
          break;

        case 'keyup':
          newValue = value;
          break;

        case 'keypress':
          var selectionStart = input.selectionStart;
          if (selectionStart !== insertPosition) insertPosition = selectionStart;
          newValue = value.substr(0, insertPosition) + key + value.substr(insertPosition);
          break;

        default:
          break;
      }

      unmaskedValue = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["d" /* unmask */])(newValue, mask);

      if ([35, 36, 37, 38, 39, 40].indexOf(keyCode) === -1) {
        try {
          input.value = __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default.a.mask(unmaskedValue, mask, false);
          input.dataset.valueUnmasked = unmaskedValue;
          this.options.doc.querySelector("#".concat(input.getAttribute('id'), "-unmasked")).value = unmaskedValue;

          this.__applyCssClassState(input, 'success');

          this.__fireOnUpdate(input.value, unmaskedValue, input);

          maskError = false;
        } catch (error) {
          this.__applyCssClassState(input, 'error');

          this.__fireOnInvalid(error, input);

          maskError = true;
        }

        this._updateCaretPosition(input, mask);
      }

      if (!maskError) this._validateInput(input);
    }
    /**
     * Listen to focus events on the input and update the caret position
     * where the next char should be inserted according to the mask
     *
     * @param {FocusEvent} e
     *
     * @protected
     */

  }, {
    key: "_onFocus",
    value: function _onFocus(e) {
      var input = e.target;
      var mask = input.dataset.mask || this.options.mask;

      this._updateCaretPosition(input, mask);
    }
    /**
     * Update the caret position on the input based on the given mask
     *
     * @param {HTMLInputElement} input instance
     * @param {String} mask  bbj string
     *
     * @protected
     */

  }, {
    key: "_updateCaretPosition",
    value: function _updateCaretPosition(input, mask) {
      setTimeout(function () {
        var position = Object(__WEBPACK_IMPORTED_MODULE_1__tools_js__["a" /* findCaretPosition */])(input.value, mask);
        input.setSelectionRange(position, position);
      }, 0);
    }
    /**
     * Trigger `checkValidity` on the input
     *
     * @param {HTMLInputElement} input
     *
     * @returns {Boolean} true when valid , false otherwise
     *
     * @protected
     */

  }, {
    key: "_validateInput",
    value: function _validateInput(input) {
      var isValid = input.checkValidity();

      if (isValid) {
        this.__applyCssClassState(input, 'success');
      } else {
        this.__applyCssClassState(input, 'error');

        this.__fireOnInvalid('Validity check fails', input);
      }

      return isValid;
    }
    /**
     * @private
     */

  }, {
    key: "__fireOnUpdate",
    value: function __fireOnUpdate(valueMasked, valueUnmasked, input) {
      if (this.options.onUpdate) {
        this.options.onUpdate(valueMasked, valueUnmasked, input);
      }
    }
    /**
     * @private
     */

  }, {
    key: "__fireOnInvalid",
    value: function __fireOnInvalid(error, input) {
      if (this.options.onInvalid) {
        this.options.onInvalid(error, input);
      }
    }
    /**
     * @private
     */

  }, {
    key: "__applyCssClassState",
    value: function __applyCssClassState(input, state) {
      if (input.hasAttribute('readonly') || input.hasAttribute('disabled')) {
        input.classList.remove(this.options.cssClassError);
        input.classList.remove(this.options.cssClassSuccess);
      } else {
        if (state === 'success') {
          input.classList.remove(this.options.cssClassError);
          input.classList.add(this.options.cssClassSuccess);
        }

        if (state === 'error') {
          input.classList.add(this.options.cssClassError);
          input.classList.remove(this.options.cssClassSuccess);
        }
      }
    }
  }]);

  return TextInput;
}();

/* harmony default export */ __webpack_exports__["a"] = (TextInput);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isMaskedValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return maskIfNotMasked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unmask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findCaretPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generatePatternFromMask; });
/* unused harmony export IS_UNICODE_PROPERTY_SUPPORTED */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_stable_array_fill__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_stable_array_fill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_stable_array_fill__);
/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


var SUPPORTED_MASKS = ['X', 'a', 'A', '0', 'z', 'Z', 'U'];
/**
 * When true , then the browser supports Unicode Property Escapes
 * otherwise it is false 
 * 
 * {@link https://github.com/tc39/proposal-regexp-unicode-property-escapes}
 */

var IS_UNICODE_PROPERTY_SUPPORTED = false;

try {
  eval('/\\p{L}/u');
  IS_UNICODE_PROPERTY_SUPPORTED = true;
} catch (err) {
  IS_UNICODE_PROPERTY_SUPPORTED = false;
}
/**
 * Check if the given value is masked with the given mask or not
 *
 * @param {String} value masked or unmasked value
 * @param {String} mask  a bbj mask
 *
 * @return {Boolean} true when the value is masked with given mask , false otherwise
 */


var isMaskedValue = function isMaskedValue(value, mask) {
  if (typeof isMaskedValue.__CACHE__ === 'undefined') {
    isMaskedValue.__CACHE__ = {};
  }

  var cacheKey = "".concat(value, "-").concat(mask);

  if (!isMaskedValue.__CACHE__[cacheKey]) {
    var unmaskedValue = unmask(value, mask);
    isMaskedValue.__CACHE__[cacheKey] = value === __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default.a.mask(unmaskedValue, mask);
  }

  return isMaskedValue.__CACHE__[cacheKey];
};
/**
 * Mask the given value with the given mask in case the value is not already masked with the
 * given mask
 *
 * @param {String} value masked or unmasked value
 * @param {String} mask  a bbj mask
 *
 * @return {String} a masked value
 */


var maskIfNotMasked = function maskIfNotMasked(value, mask) {
  if (typeof maskIfNotMasked.__CACHE__ === 'undefined') {
    maskIfNotMasked.__CACHE__ = {};
  }

  var cacheKey = "".concat(value, "-").concat(mask);

  if (!maskIfNotMasked.__CACHE__[cacheKey]) {
    if (isMaskedValue(value, mask)) {
      maskIfNotMasked.__CACHE__[cacheKey] = value;
    } else {
      try {
        maskIfNotMasked.__CACHE__[cacheKey] = __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default.a.mask(value, mask, false);
      } catch (e) {
        maskIfNotMasked.__CACHE__[cacheKey] = __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_StringMask___default.a.mask('', mask);
      }
    }
  }

  return maskIfNotMasked.__CACHE__[cacheKey];
};
/**
 * Generate a regex patter based on the give task
 *
 * @param {String} mask  bbj string mask
 *
 * @return {String} regex for the give mask
 */


var generatePatternFromMask = function generatePatternFromMask(mask) {
  if (typeof generatePatternFromMask.__CACHE__ === 'undefined') {
    generatePatternFromMask.__CACHE__ = {};
  }

  var cacheKey = mask;

  if (!generatePatternFromMask.__CACHE__[cacheKey]) {
    var maskAsArry = mask.split('');
    var regex = '';
    maskAsArry.forEach(function (c) {
      switch (c) {
        case 'X':
          regex += '([^ -~])';
          break;

        case 'a':
        case 'A':
          // https://mothereff.in/regexpu#input=var+regex+%3D+/%5Cp%7BL%7D/u%3B&unicodePropertyEscape=1
          // https://stackoverflow.com/questions/150033/regular-expression-to-match-non-ascii-characters#answer-48902765
          regex += IS_UNICODE_PROPERTY_SUPPORTED ? '\\p{L}' : "((?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]))";
          break;

        case '0':
          regex += '([0-9])';
          break;

        case 'z':
        case 'Z':
          regex += IS_UNICODE_PROPERTY_SUPPORTED ? '([0-9]|\\p{L})' : "([0-9]|(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]))";
          break;

        case 'U':
          regex += IS_UNICODE_PROPERTY_SUPPORTED ? '(([0-9])|(\\s)|([.,/#!$%^&*;:{}=-_`~()])|(\\p{L}))' : "(([0-9])|(\\s)|([.,/#!$%^&*;:{}=-_`~()])|(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]))";
          break;

        default:
          regex += c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          break;
      }
    });
    generatePatternFromMask.__CACHE__[cacheKey] = regex;
  }

  return generatePatternFromMask.__CACHE__[cacheKey];
};
/**
 * Unmask the given value
 *
 * @param {String} maskedValue masked string
 * @param {String} mask  the used mask to produce the masked string
 */


var unmask = function unmask(maskedValue, mask) {
  if (typeof unmask.__CACHE__ === 'undefined') {
    unmask.__CACHE__ = {};
  }

  var cacheKey = "".concat(maskedValue, "-").concat(mask);

  if (!unmask.__CACHE__[cacheKey]) {
    var maskAsArray = mask.split('');
    var maskedValueAsArray = maskedValue.split('');
    var unmasked = '';

    for (var index = 0; index < maskedValueAsArray.length; index++) {
      var el = maskedValueAsArray[index];
      var _mask = maskAsArray[index];
      var elHasMask = SUPPORTED_MASKS.indexOf(_mask) > -1;

      if (elHasMask) {
        var pattern = new RegExp(generatePatternFromMask(_mask), IS_UNICODE_PROPERTY_SUPPORTED ? 'u' : '');
        if (pattern.test(el)) unmasked += el;else break;
      }
    }

    unmask.__CACHE__[cacheKey] = unmasked.toLocaleLowerCase();
  }

  return unmask.__CACHE__[cacheKey];
};
/**
 * Given the masked string , find the next caret position depending on
 * what is missing to complete the mask
 *
 * @param {String} maskedValue masked string
 * @param {String} mask  the used mask to produce the masked string
 */


var findCaretPosition = function findCaretPosition(maskedValue, mask) {
  if (typeof findCaretPosition.__CACHE__ === 'undefined') {
    findCaretPosition.__CACHE__ = {};
  }

  var cacheKey = "".concat(maskedValue, "-").concat(mask);

  if (!findCaretPosition.__CACHE__[cacheKey]) {
    var maskAsArray = mask.split('');
    var maskedValueAsArray = maskedValue.split('');

    if (maskedValueAsArray.length < maskAsArray.length) {
      maskedValueAsArray = maskedValueAsArray.concat(new Array(maskAsArray.length - maskedValueAsArray.length).fill(' '));
    }

    var position = -1;

    for (var index = 0; index < maskAsArray.length; index++) {
      var el = maskAsArray[index];

      if (el !== maskedValueAsArray[index]) {
        // if (maskedValueAsArray[index] === ' ') return index
        if (SUPPORTED_MASKS.indexOf(el) > -1) {
          var pattern = new RegExp(generatePatternFromMask(el), IS_UNICODE_PROPERTY_SUPPORTED ? 'u' : '');

          if (!pattern.test(maskedValueAsArray[index])) {
            position = index;
            break;
          }
        }
      }
    }

    findCaretPosition.__CACHE__[cacheKey] = position < 0 ? maskedValueAsArray.length : position;
  }

  return findCaretPosition.__CACHE__[cacheKey];
};



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(35);

module.exports = parent;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(36);

var entryUnbind = __webpack_require__(62);

module.exports = entryUnbind('Array', 'fill');

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(37);

var fill = __webpack_require__(53);

var addToUnscopables = __webpack_require__(55); // `Array.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-array.prototype.fill


$({
  target: 'Array',
  proto: true
}, {
  fill: fill
}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('fill');

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(0);

var getOwnPropertyDescriptor = __webpack_require__(13).f;

var createNonEnumerableProperty = __webpack_require__(5);

var redefine = __webpack_require__(42);

var setGlobal = __webpack_require__(9);

var copyConstructorProperties = __webpack_require__(46);

var isForced = __webpack_require__(52);
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (_typeof(sourceProperty) === _typeof(targetProperty)) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

var classof = __webpack_require__(41);

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var createNonEnumerableProperty = __webpack_require__(5);

var has = __webpack_require__(1);

var setGlobal = __webpack_require__(9);

var inspectSource = __webpack_require__(19);

var InternalStateModule = __webpack_require__(43);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(44);

var global = __webpack_require__(0);

var isObject = __webpack_require__(4);

var createNonEnumerableProperty = __webpack_require__(5);

var objectHas = __webpack_require__(1);

var sharedKey = __webpack_require__(21);

var hiddenKeys = __webpack_require__(10);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function enforce(it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function getterFor(TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function set(it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function get(it) {
    return wmget.call(store, it) || {};
  };

  has = function has(it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function set(it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function get(it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function has(it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var inspectSource = __webpack_require__(19);

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(1);

var ownKeys = __webpack_require__(47);

var getOwnPropertyDescriptorModule = __webpack_require__(13);

var definePropertyModule = __webpack_require__(6);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(24);

var getOwnPropertyNamesModule = __webpack_require__(49);

var getOwnPropertySymbolsModule = __webpack_require__(51);

var anObject = __webpack_require__(7); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

module.exports = global;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(25);

var enumBugKeys = __webpack_require__(11);

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(8);

var toLength = __webpack_require__(26);

var toAbsoluteIndex = __webpack_require__(28); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function createMethod(IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

var replacement = /#|\.prototype\./;

var isForced = function isForced(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toObject = __webpack_require__(54);

var toAbsoluteIndex = __webpack_require__(28);

var toLength = __webpack_require__(26); // `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill


module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(15); // `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(56);

var create = __webpack_require__(58);

var definePropertyModule = __webpack_require__(6);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var shared = __webpack_require__(22);

var has = __webpack_require__(1);

var uid = __webpack_require__(23);

var NATIVE_SYMBOL = __webpack_require__(29);

var USE_SYMBOL_AS_UID = __webpack_require__(57);

var WellKnownSymbolsStore = shared('wks');
var _Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? _Symbol : _Symbol && _Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(_Symbol, name)) WellKnownSymbolsStore[name] = _Symbol[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var NATIVE_SYMBOL = __webpack_require__(29);

module.exports = NATIVE_SYMBOL // eslint-disable-next-line no-undef
&& !Symbol.sham // eslint-disable-next-line no-undef
&& _typeof(Symbol.iterator) == 'symbol';

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);

var defineProperties = __webpack_require__(59);

var enumBugKeys = __webpack_require__(11);

var hiddenKeys = __webpack_require__(10);

var html = __webpack_require__(61);

var documentCreateElement = __webpack_require__(18);

var sharedKey = __webpack_require__(21);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function EmptyConstructor() {
  /* empty */
};

var scriptTag = function scriptTag(content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var _NullProtoObject = function NullProtoObject() {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  _NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) {
    delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  }

  return _NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(2);

var definePropertyModule = __webpack_require__(6);

var anObject = __webpack_require__(7);

var objectKeys = __webpack_require__(60); // `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties


module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) {
    definePropertyModule.f(O, key = keys[index++], Properties[key]);
  }

  return O;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(25);

var enumBugKeys = __webpack_require__(11); // `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(24);

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);

var bind = __webpack_require__(63);

var call = Function.call;

module.exports = function (CONSTRUCTOR, METHOD, length) {
  return bind(call, global[CONSTRUCTOR].prototype[METHOD], length);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(64); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__NumberInput__ = __webpack_require__(66);
/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__NumberInput__["a" /* default */]);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_NumberMask__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_NumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_NumberMask__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * This file is part of basis-input-masking lib.
 * (c) Basis Europe <eu@basis.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


var countDecimals = function countDecimals(value) {
  if (value % 1 != 0) {
    var split = value.toString().split('.');
    if (split.length === 2) return split[1].length;
  }

  return 0;
};
/**
 * The `NumberInput` will wrap text inputs and apply the given [bbj Number mask](https://github.com/BasisHub/bbj-masks#number-masks)
 *
 * **Options**
 *
 * _Options can be passed via data attributes . For data attributes, append the option name to data-, as in data-mask_
 *
 * | Option    | Default | Description                                                                                             |
 * |-----------|---------|---------------------------------------------------------------------------------------------------------|
 * | mask |         | The bbj number mask @see [BBj Number Masks](https://github.com/BasisHub/bbj-masks#number-masks) |
 * | min |         | The maximum value to accept for this input|
 * | max |         | The minimum value to accept for this input|
 * | step |         | A stepping interval to use when using up and down arrows to adjust the value, as well as for validation|
 * |grouping-separator | , | a char which will be used as a grouping separator |
 * |decimal-separator | . | a char which will be used as a decimal separator |
 * |force-trailing-zeros | false | Affects the output by switching the way a mask with "#" characters in the trailing positions is filled. for example, the function NumberMask.mask(.10:"#.##") returns .10 instead of .1|
 *
 *  <br>
 *
 * **Example :**
 * ```html
 *  <input class="bbj-number-masked" name="test" id="test" value="1234" data-mask="##,##0">
 *
 *  <script>
 *    document.addEventListener('DOMContentLoaded', function (e) {
 *      new Basis.InputMasking.NumberInput({
 *         onUpdate: (maskedValue , rawValue , input) => {
 *            // do something
 *         },
 *         onInvalid: (err , input) => {
 *            // do something
 *         }
 *      })
 *    })
 *  </script>
 * ```
 *
 * @author Hyyan Abo Fakher <habofakher@basis.com>
 */


var NumberInput =
/*#__PURE__*/
function () {
  /**
   * Construct new NumberInput
   *
   * @param {?Object} options - The input options.
   * @param {HTMLElement|String} [options.elements=".bbj-number-masked"] - The class name or the node to use
   * @param {HTMLDocument} [options.document=document] - Document instance to use
   * @param {String} [options.cssClassError="bbj-mask-error"] - A css class to attach to the input when it is invalid
   * @param {String} [options.cssClassSuccess="bbj-mask-success"] - A css class to attach to the input when it is valid after the user interaction
   * @param {Function} [options.onUpdate=null] - A callback to be called on the new masked value is set
   * @param {Function} [options.onInvalid=null] - A callback to be called on the input or the mask is invalid
   */
  function NumberInput() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, NumberInput);

    this.options = _objectSpread({}, {
      elements: '.bbj-number-masked',
      doc: document,
      cssClassError: 'bbj-mask-error',
      cssClassSuccess: 'bbj-mask-success',
      onUpdate: null,
      onInvalid: null
    }, {}, options);
    this._actualInputHandler = this._actualInputHandler.bind(this);
    this._unmaskedInputHandler = this._unmaskedInputHandler.bind(this);
    this.refresh();
  }
  /**
   * Initialize the component and wrap the input elements for masking in case
   * they are not wrapped yet
   */


  _createClass(NumberInput, [{
    key: "refresh",
    value: function refresh() {
      var elements = typeof this.options.elements === 'string' ? this.options.doc.querySelectorAll(this.options.elements) : this.options.elements;
      var input, parentClass;

      for (var i = 0; i < elements.length; i++) {
        input = elements[i];

        if (input instanceof HTMLInputElement) {
          parentClass = input.parentNode.getAttribute('class');

          if (!input.getAttribute('id')) {
            console.warn("BBjMasking: Input has no ID. Without an ID the input cannot be masked", input);
            continue;
          } // we don't initialize the input's wrap twice


          var isWrapped = parentClass && parentClass.indexOf('numberInputMask__wrap') > -1;

          this._wrap(input, isWrapped);
        } else {
          console.warn("BBjMasking: Invalid input element. The element will be ignored", input);
        }
      }
    }
    /**
     * Unwrap the input elements and remove attached listeners
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var elements = typeof this.options.elements === 'string' ? this.options.doc.querySelectorAll(this.options.elements) : this.options.elements;
      var input, parent, parentClass;

      for (var i = 0; i < elements.length; i++) {
        input = elements[i];
        parent = input.parentNode;
        parentClass = parent.getAttribute('class');

        if (parentClass && parentClass.indexOf('numberInputMask__wrap') > -1) {
          this._unwrap(parent);
        }
      }
    }
    /**
     * Create the number masking input wrapper
     *
     * @param {HTMLInputElement} actualInput the input element
     * @param {Boolean} isWrapped when true the input is already wrapped and we need to add what is
     *                            missing only
     *
     * @returns {HTMLSpanElement} wrapper instance
     *
     * @protected
     */

  }, {
    key: "_wrap",
    value: function _wrap(actualInput, isWrapped) {
      var actualInputId = actualInput.getAttribute('id'),
          actualInputName = actualInput.getAttribute('name'),
          actualInputStep = actualInput.dataset.step || null,
          actualInputMax = actualInput.dataset.max || null,
          actualInputMin = actualInput.dataset.min || null,
          actualInputGroupingSeparator = actualInput.dataset.groupingSeparator || ',',
          actualInputDecimalSeparator = actualInput.dataset.decimalSeparator || '.',
          actualInputForceTrailingZeros = actualInput.dataset.forceTrailingZeros || null,
          actualInputMask = actualInput.dataset.mask || '',
          actualInputClasses = actualInput.getAttribute('class'),
          actualInputRequired = actualInput.getAttribute('required') || null;
      var wrap = null,
          unmaskedInput = null;

      if (!isWrapped) {
        wrap = this.options.doc.createElement('span');
        unmaskedInput = this.options.doc.createElement('input'); // hidden input with the unmasked values for forms
      } else {
        wrap = actualInput.parentNode;
        unmaskedInput = wrap.querySelector('.numberInputMask__unmaskedInput');
      } // configure the actual input
      // -----------------------------------------------------


      if (!isWrapped) {
        actualInput.parentNode.insertBefore(wrap, actualInput); // move the input outside the wrapper

        if (!(actualInput.hasAttribute('readonly') || actualInput.hasAttribute('disabled'))) {
          actualInput.addEventListener('click', this._actualInputHandler);
          actualInput.addEventListener('focusin', this._actualInputHandler);
        }
      }

      actualInput.dataset.valueUnmasked = actualInput.value || 0;
      actualInput.dataset.groupingSeparator = actualInputGroupingSeparator;
      actualInput.dataset.decimalSeparator = actualInputDecimalSeparator;
      actualInput.dataset.forceTrailingZeros = actualInputForceTrailingZeros;
      actualInput.value = __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_NumberMask___default.a.mask(actualInput.dataset.valueUnmasked, actualInputMask, actualInputGroupingSeparator, actualInputDecimalSeparator, actualInputForceTrailingZeros).trim();
      actualInput.classList.add('numberInputMask__textInput', this.options.cssClassSuccess); // configure the unmasked input
      // ----------------------------------------------------

      unmaskedInput.value = actualInput.dataset.valueUnmasked;
      unmaskedInput.setAttribute('aria-hidden', 'true');
      unmaskedInput.setAttribute('type', 'hidden');
      unmaskedInput.setAttribute('class', actualInputClasses);
      if (actualInputId) unmaskedInput.setAttribute('id', "".concat(actualInputId, "-unmasked"));
      if (actualInputName) unmaskedInput.setAttribute('name', "".concat(actualInputName, "-unmasked"));
      if (actualInputRequired) unmaskedInput.setAttribute('required', 'required');
      if (actualInputStep) unmaskedInput.setAttribute('step', actualInputStep);else {
        var decimals = countDecimals(unmaskedInput.value);
        var step = '1';

        if (decimals > 0) {
          step = ".".concat(Array(decimals).join('0'), "1");
        }

        unmaskedInput.setAttribute('step', step);
      }
      if (actualInputMin) unmaskedInput.setAttribute('min', actualInputMin);
      if (actualInputMax) unmaskedInput.setAttribute('max', actualInputMax);
      unmaskedInput.dataset.inputId = actualInputId;
      unmaskedInput.dataset.mask = actualInputMask;
      unmaskedInput.dataset.groupingSeparator = actualInputGroupingSeparator;
      unmaskedInput.dataset.decimalSeparator = actualInputDecimalSeparator;
      if (actualInputForceTrailingZeros) unmaskedInput.dataset.forceTrailingZeros = actualInputForceTrailingZeros;

      if (!isWrapped) {
        unmaskedInput.classList.add('numberInputMask__unmaskedInput');
        unmaskedInput.addEventListener('keyup', this._unmaskedInputHandler);
        unmaskedInput.addEventListener('keypress', this._unmaskedInputHandler);
        unmaskedInput.addEventListener('focusout', this._unmaskedInputHandler); // configure the wrapper

        wrap.setAttribute('class', 'numberInputMask__wrap');
        wrap.appendChild(unmaskedInput);
        wrap.appendChild(actualInput);
      }

      if (!isNaN(Number(actualInput.dataset.valueUnmasked))) {
        if (this._validateInput(unmaskedInput, actualInput)) {
          this.__fireOnUpdate(actualInput.value, actualInput.dataset.valueUnmasked, actualInput);
        }
      } else {
        actualInput.classList.add(this.options.cssClassError);
      }

      return wrap;
    }
    /**
     * Unwrap the masked input and remove the value changed listener
     *
     * @param {HTMLSpanElement} textInput the wrapper span instance
     *
     * @protected
     */

  }, {
    key: "_unwrap",
    value: function _unwrap(textInput) {
      textInput.removeChild(textInput.querySelector('.numberInputMask__unmaskedInput'));
      var input = textInput.querySelector('.numberInputMask__textInput');
      input.removeEventListener('click', this._actualInputHandler);
      input.removeEventListener('focusin', this._actualInputHandler);
      input.classList.remove('numberInputMask__textInput');
      input.classList.remove(this.options.cssClassError);
      input.classList.remove(this.options.cssClassSuccess);
      delete input.dataset.valueUnmasked;
      textInput.parentNode.insertBefore(input, textInput);
      textInput.parentNode.removeChild(textInput);
    }
    /**
     * Listen to click and focusin event on the actual input and toggle the number input
     *
     * @param {Event} e
     *
     * @protected
     */

  }, {
    key: "_actualInputHandler",
    value: function _actualInputHandler(e) {
      var actualInput = e.target,
          actualInputId = actualInput.id,
          unmaskInput = this.options.doc.querySelector("#".concat(actualInputId, "-unmasked"));
      actualInput.setAttribute('aria-hidden', 'true');
      actualInput.setAttribute('type', 'hidden');
      unmaskInput.removeAttribute('aria-hidden');
      unmaskInput.setAttribute('type', 'number');

      this._validateInput(unmaskInput, actualInput);

      setTimeout(function () {
        unmaskInput.focus();
      });
    }
    /**
     * Listen to the unmasked input keypress , keyup and focusout events and check
     * if the input value can be masked or not
     *
     * @param {Event} e
     *
     * @protected
     */

  }, {
    key: "_unmaskedInputHandler",
    value: function _unmaskedInputHandler(e) {
      var unmaskedInput = e.target,
          type = e.type,
          keyCode = e.keyCode,
          mask = unmaskedInput.dataset.mask,
          groupingSeparator = unmaskedInput.dataset.groupingSeparator,
          decimalSeparator = unmaskedInput.dataset.decimalSeparator,
          forceTrailingZeros = unmaskedInput.dataset.forceTrailingZeros,
          actualInputId = unmaskedInput.dataset.inputId,
          actualInput = this.options.doc.querySelector("#".concat(actualInputId));

      var restore = false,
          apply = false,
          maskedValue = false,
          isValid = this._validateInput(unmaskedInput, actualInput);

      try {
        maskedValue = __WEBPACK_IMPORTED_MODULE_0_bbj_masks_src_NumberMask___default.a.mask(unmaskedInput.value || 0, mask, groupingSeparator, decimalSeparator, forceTrailingZeros, false).trim();
      } catch (e) {
        maskedValue = false;

        this.__applyCssClassState(unmaskedInput, actualInput, 'error');

        this.__fireOnInvalid(e, actualInput);
      }

      switch (type) {
        case 'keyup':
          restore = keyCode === 13 && maskedValue && isValid || keyCode === 27;
          apply = keyCode === 13;
          break;

        case 'focusout':
          restore = true;
          apply = maskedValue && isValid;
          break;

        default:
          break;
      }

      if (restore) {
        unmaskedInput.classList.remove(this.options.cssClassError);
        unmaskedInput.classList.remove(this.options.cssClassSuccess);
        unmaskedInput.setAttribute('aria-hidden', 'true');
        unmaskedInput.setAttribute('type', 'hidden');
        actualInput.removeAttribute('aria-hidden');
        actualInput.setAttribute('type', 'text');
        actualInput.classList.add(this.options.cssClassSuccess);

        if (apply && maskedValue && isValid) {
          actualInput.value = maskedValue;
          actualInput.dataset.valueUnmasked = unmaskedInput.value;

          this.__fireOnUpdate(maskedValue, unmaskedInput.value, actualInput);
        } else {
          unmaskedInput.value = actualInput.dataset.valueUnmasked;
        }
      }
    }
    /**
     * Trigger `checkValidity` on the input
     *
     * @param {HTMLInputElement} unmaskedInput
     * @param {HTMLInputElement} actualInput
     *
     * @returns {Boolean} true when valid , false otherwise
     *
     * @protected
     */

  }, {
    key: "_validateInput",
    value: function _validateInput(unmaskedInput, actualInput) {
      var isValid = true;
      var value = Number(unmaskedInput.value);

      if (unmaskedInput.getAttribute('type') === 'hidden' && !isNaN(value)) {
        var max = unmaskedInput.getAttribute('max');
        var min = unmaskedInput.getAttribute('min');
        var step = unmaskedInput.getAttribute('step');
        if (min) isValid = isValid && value >= Number(min);
        if (max) isValid = isValid && value <= Number(max);
        if (step) isValid = isValid && countDecimals(step) === countDecimals(unmaskedInput.value);
      } else isValid = unmaskedInput.checkValidity();

      if (isValid) {
        this.__applyCssClassState(unmaskedInput, actualInput, 'success');
      } else {
        this.__applyCssClassState(unmaskedInput, actualInput, 'error');

        this.__fireOnInvalid('Validity check fails', actualInput);
      }

      return isValid;
    }
    /**
     * @private
     */

  }, {
    key: "__fireOnUpdate",
    value: function __fireOnUpdate(valueMasked, valueUnmasked, input) {
      if (this.options.onUpdate) {
        this.options.onUpdate(valueMasked, valueUnmasked, input);
      }
    }
    /**
     * @private
     */

  }, {
    key: "__fireOnInvalid",
    value: function __fireOnInvalid(error, input) {
      if (this.options.onInvalid) {
        this.options.onInvalid(error, input);
      }
    }
    /**
     * @private
     */

  }, {
    key: "__applyCssClassState",
    value: function __applyCssClassState(unmaskedInput, actualInput, state) {
      if (actualInput.hasAttribute('readonly') || actualInput.hasAttribute('disabled')) {
        actualInput.classList.remove(this.options.cssClassError);
        actualInput.classList.remove(this.options.cssClassSuccess);
        unmaskedInput.classList.remove(this.options.cssClassError);
        unmaskedInput.classList.remove(this.options.cssClassSuccess);
      } else {
        if (state === 'success') {
          actualInput.classList.remove(this.options.cssClassError);
          actualInput.classList.add(this.options.cssClassSuccess);
          unmaskedInput.classList.remove(this.options.cssClassError);
          unmaskedInput.classList.add(this.options.cssClassSuccess);
        }

        if (state === 'error') {
          actualInput.classList.add(this.options.cssClassError);
          actualInput.classList.remove(this.options.cssClassSuccess);
          unmaskedInput.classList.add(this.options.cssClassError);
          unmaskedInput.classList.remove(this.options.cssClassSuccess);
        }
      }
    }
  }]);

  return NumberInput;
}();

/* harmony default export */ __webpack_exports__["a"] = (NumberInput);

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_67__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=basis-input-masking.js.map