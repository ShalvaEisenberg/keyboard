/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27);
	module.exports = __webpack_require__(13);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(28);
	} else {
	  module.exports = require('./cjs/react.development.js');
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var e,r=__webpack_require__(7),t=__webpack_require__(21),n=__webpack_require__(1),o=(e=n)&&"object"==typeof e&&"default"in e?e.default:e,i=__webpack_require__(3),a=0,s={};function c(e){return s[e]||(s[e]=function(e){if("function"==typeof Symbol)return Symbol(e);var r="__$mobx-react "+e+" ("+a+")";return a++,r}(e)),s[e]}function u(e,r){if(f(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var o=0;o<t.length;o++)if(!hasOwnProperty.call(r,t[o])||!f(e[t[o]],r[t[o]]))return!1;return!0}function f(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}var p={$$typeof:1,render:1,compare:1,type:1,childContextTypes:1,contextType:1,contextTypes:1,defaultProps:1,getDefaultProps:1,getDerivedStateFromError:1,getDerivedStateFromProps:1,mixins:1,propTypes:1};function l(e,r,t){Object.hasOwnProperty.call(e,r)?e[r]=t:Object.defineProperty(e,r,{enumerable:!1,configurable:!0,writable:!0,value:t})}var b=c("patchMixins"),d=c("patchedDefinition");function y(e,r){for(var t=this,n=[],o=arguments.length-2;o-- >0;)n[o]=arguments[o+2];r.locks++;try{var i;return null!=e&&(i=e.apply(this,n)),i}finally{r.locks--,0===r.locks&&r.methods.forEach(function(e){e.apply(t,n)})}}function m(e,r){return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];y.call.apply(y,[this,e,r].concat(t))}}function v(e,r,t){var n=function(e,r){var t=e[b]=e[b]||{},n=t[r]=t[r]||{};return n.locks=n.locks||0,n.methods=n.methods||[],n}(e,r);n.methods.indexOf(t)<0&&n.methods.push(t);var o=Object.getOwnPropertyDescriptor(e,r);if(!o||!o[d]){var i=function e(r,t,n,o,i){var a,s=m(i,o);return(a={})[d]=!0,a.get=function(){return s},a.set=function(i){if(this===r)s=m(i,o);else{var a=e(this,t,n,o,i);Object.defineProperty(this,t,a)}},a.configurable=!0,a.enumerable=n,a}(e,r,o?o.enumerable:void 0,n,e[r]);Object.defineProperty(e,r,i)}}var h=i.$mobx||"$mobx",O=c("isUnmounted"),g=c("skipRender"),w=c("isForcingUpdate");function x(e,r){return t.isUsingStaticRendering()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==r||!u(this.props,e)}function j(e,r){var t=c("reactProp_"+r+"_valueHolder"),n=c("reactProp_"+r+"_atomHolder");function o(){return this[n]||l(this,n,i.createAtom("reactive "+r)),this[n]}Object.defineProperty(e,r,{configurable:!0,enumerable:!0,get:function(){return o.call(this).reportObserved(),this[t]},set:function(e){this[w]||u(this[t],e)?l(this,t,e):(l(this,t,e),l(this,g,!0),o.call(this).reportChanged(),l(this,g,!1))}})}var P="function"==typeof Symbol&&Symbol.for,E=P?Symbol.for("react.forward_ref"):"function"==typeof n.forwardRef&&n.forwardRef(function(){}).$$typeof,C=P?Symbol.for("react.memo"):"function"==typeof n.memo&&n.memo(function(){}).$$typeof;function R(e){if(!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),C&&e.$$typeof===C)throw new Error("Mobx observer: You are trying to use 'observer' on function component wrapped to either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(E&&e.$$typeof===E){var r=e.render;if("function"!=typeof r)throw new Error("render property of ForwardRef was not a function");return n.forwardRef(function(){var e=arguments;return o.createElement(t.Observer,null,function(){return r.apply(void 0,e)})})}return"function"!=typeof e||e.prototype&&e.prototype.render||e.isReactClass||Object.prototype.isPrototypeOf.call(n.Component,e)?function(e){var r=e.prototype;if(r.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==n.PureComponent)if(r.shouldComponentUpdate){if(r.shouldComponentUpdate!==x)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else r.shouldComponentUpdate=x;j(r,"props"),j(r,"state");var o=r.render;return r.render=function(){return function(e){var r=this;if(!0===t.isUsingStaticRendering())return e.call(this);l(this,g,!1),l(this,w,!1);var o=this.displayName||this.name||this.constructor&&(this.constructor.displayName||this.constructor.name)||"<component>",a=e.bind(this),s=!1,c=new i.Reaction(o+".render()",function(){if(!s&&(s=!0,!0!==r[O])){var e=!0;try{l(r,w,!0),r[g]||n.Component.prototype.forceUpdate.call(r),e=!1}finally{l(r,w,!1),e&&c.dispose()}}});function u(){s=!1;var e=void 0,r=void 0;if(c.track(function(){try{r=i._allowStateChanges(!1,a)}catch(r){e=r}}),e)throw e;return r}return c.reactComponent=this,u[h]=c,this.render=u,u.call(this)}.call(this,o)},v(r,"componentWillUnmount",function(){!0!==t.isUsingStaticRendering()&&(this.render[h]&&this.render[h].dispose(),this[O]=!0)}),e}(e):t.observer(e)}var S=o.createContext({});function U(e){var r=e.children,t=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===r.indexOf(n)&&(t[n]=e[n]);return t}(e,["children"]),n=o.useContext(S),i=o.useRef(Object.assign({},n,t)).current;if(false)throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");return o.createElement(S.Provider,{value:i},r)}function k(e,r,t,i){var a,s,c,u=o.forwardRef(function(t,i){var a=Object.assign({},t),s=o.useContext(S);return Object.assign(a,e(s||{},a)||{}),i&&(a.ref=i),n.createElement(r,a)});return i&&(u=R(u)),u.isMobxInjector=!0,a=r,s=u,c=Object.getOwnPropertyNames(Object.getPrototypeOf(a)),Object.getOwnPropertyNames(a).forEach(function(e){p[e]||-1!==c.indexOf(e)||Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(a,e))}),u.wrappedComponent=r,u.displayName=function(e,r){var t=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return r?"inject-with-"+r+"("+t+")":"inject("+t+")"}(r,t),u}U.displayName="MobXProvider";var A=c("disposeOnUnmountProto"),_=c("disposeOnUnmountInst");function M(){var e=this;(this[A]||[]).concat(this[_]||[]).forEach(function(r){var t="string"==typeof r?e[r]:r;null!=t&&(Array.isArray(t)?t.map(function(e){return e()}):t())})}function $(e){function r(r,t,n,o,a,s){for(var c=[],u=arguments.length-6;u-- >0;)c[u]=arguments[u+6];return i.untracked(function(){return o=o||"<<anonymous>>",s=s||n,null==t[n]?r?new Error("The "+a+" `"+s+"` is marked as required in `"+o+"`, but its value is `"+(null===t[n]?"null":"undefined")+"`."):null:e.apply(void 0,[t,n,o,a,s].concat(c))})}var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function T(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||"Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol}(r,e)?"symbol":r}function N(e,r){return $(function(t,n,o,a,s){return i.untracked(function(){if(e&&T(t[n])===r.toLowerCase())return null;var a;switch(r){case"Array":a=i.isObservableArray;break;case"Object":a=i.isObservableObject;break;case"Map":a=i.isObservableMap;break;default:throw new Error("Unexpected mobxType: "+r)}var c=t[n];if(!a(c)){var u=function(e){var r=T(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}(c),f=e?" or javascript `"+r.toLowerCase()+"`":"";return new Error("Invalid prop `"+s+"` of type `"+u+"` supplied to `"+o+"`, expected `mobx.Observable"+r+"`"+f+".")}return null})})}function q(e,r){return $(function(t,n,o,a,s){for(var c=[],u=arguments.length-5;u-- >0;)c[u]=arguments[u+5];return i.untracked(function(){if("function"!=typeof r)return new Error("Property `"+s+"` of component `"+o+"` has invalid PropType notation.");var i=N(e,"Array")(t,n,o);if(i instanceof Error)return i;for(var u=t[n],f=0;f<u.length;f++)if((i=r.apply(void 0,[u,f,o,a,s+"["+f+"]"].concat(c)))instanceof Error)return i;return null})})}var D={observableArray:N(!1,"Array"),observableArrayOf:q.bind(null,!1),observableMap:N(!1,"Map"),observableObject:N(!1,"Object"),arrayOrObservableArray:N(!0,"Array"),arrayOrObservableArrayOf:q.bind(null,!0),objectOrObservableObject:N(!0,"Object")};if(!n.Component)throw new Error("mobx-react requires React to be available");if(!i.observable)throw new Error("mobx-react requires mobx to be available");"function"==typeof r.unstable_batchedUpdates&&i.configure({reactionScheduler:r.unstable_batchedUpdates}),exports.Observer=t.Observer,exports.useObserver=t.useObserver,exports.useAsObservableSource=t.useAsObservableSource,exports.useLocalStore=t.useLocalStore,exports.isUsingStaticRendering=t.isUsingStaticRendering,exports.useStaticRendering=t.useStaticRendering,exports.observer=R,exports.Provider=U,exports.MobXProviderContext=S,exports.inject=function(){for(var e,r=[],t=arguments.length;t--;)r[t]=arguments[t];return"function"==typeof arguments[0]?(e=arguments[0],function(r){return k(e,r,e.name,!0)}):function(e){return k(function(e){return function(r,t){return e.forEach(function(e){if(!(e in t)){if(!(e in r))throw new Error("MobX injector: Store '"+e+"' is not available! Make sure it is provided by some Provider");t[e]=r[e]}}),t}}(r),e,r.join("-"),!1)}},exports.disposeOnUnmount=function e(r,t){if(Array.isArray(t))return t.map(function(t){return e(r,t)});var o=Object.getPrototypeOf(r).constructor||Object.getPrototypeOf(r.constructor),i=Object.getPrototypeOf(r.constructor);if(o!==n.Component&&o!==n.PureComponent&&i!==n.Component&&i!==n.PureComponent)throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");if("string"!=typeof t&&"function"!=typeof t&&!Array.isArray(t))throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");var a=!!r[A]||!!r[_];return("string"==typeof t?r[A]||(r[A]=[]):r[_]||(r[_]=[])).push(t),a||v(r,"componentWillUnmount",M),"string"!=typeof t?t:void 0},exports.PropTypes=D;
	//# sourceMappingURL=mobx-react.js.map


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/** MobX - (c) Michel Weststrate 2015 - 2019 - MIT Licensed */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0
	
	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.
	
	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */
	
	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};
	
	function __extends(d, b) {
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}
	
	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	
	function __values(o) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
	    if (m) return m.call(o);
	    return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	}
	
	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}
	
	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}
	
	var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is a production build.";
	var EMPTY_ARRAY = [];
	Object.freeze(EMPTY_ARRAY);
	var EMPTY_OBJECT = {};
	Object.freeze(EMPTY_OBJECT);
	function getNextId() {
	    return ++globalState.mobxGuid;
	}
	function fail(message) {
	    invariant(false, message);
	    throw "X"; // unreachable
	}
	function invariant(check, message) {
	    if (!check)
	        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
	}
	/**
	 * Prints a deprecation message, but only one time.
	 * Returns false if the deprecated message was already printed before
	 */
	var deprecatedMessages = [];
	function deprecated(msg, thing) {
	    if (true)
	        return false;
	    if (thing) {
	        return deprecated("'" + msg + "', use '" + thing + "' instead.");
	    }
	    if (deprecatedMessages.indexOf(msg) !== -1)
	        return false;
	    deprecatedMessages.push(msg);
	    console.error("[mobx] Deprecated: " + msg);
	    return true;
	}
	/**
	 * Makes sure that the provided function is invoked at most once.
	 */
	function once(func) {
	    var invoked = false;
	    return function () {
	        if (invoked)
	            return;
	        invoked = true;
	        return func.apply(this, arguments);
	    };
	}
	var noop = function () { };
	function unique(list) {
	    var res = [];
	    list.forEach(function (item) {
	        if (res.indexOf(item) === -1)
	            res.push(item);
	    });
	    return res;
	}
	function isObject(value) {
	    return value !== null && typeof value === "object";
	}
	function isPlainObject(value) {
	    if (value === null || typeof value !== "object")
	        return false;
	    var proto = Object.getPrototypeOf(value);
	    return proto === Object.prototype || proto === null;
	}
	function addHiddenProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: true,
	        configurable: true,
	        value: value
	    });
	}
	function addHiddenFinalProp(object, propName, value) {
	    Object.defineProperty(object, propName, {
	        enumerable: false,
	        writable: false,
	        configurable: true,
	        value: value
	    });
	}
	function isPropertyConfigurable(object, prop) {
	    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
	}
	function assertPropertyConfigurable(object, prop) {
	    if (false)
	        fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
	}
	function createInstanceofPredicate(name, clazz) {
	    var propName = "isMobX" + name;
	    clazz.prototype[propName] = true;
	    return function (x) {
	        return isObject(x) && x[propName] === true;
	    };
	}
	/**
	 * Returns whether the argument is an array, disregarding observability.
	 */
	function isArrayLike(x) {
	    return Array.isArray(x) || isObservableArray(x);
	}
	function isES6Map(thing) {
	    return thing instanceof Map;
	}
	function isES6Set(thing) {
	    return thing instanceof Set;
	}
	/**
	 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
	 */
	function getPlainObjectKeys(object) {
	    var enumerables = new Set();
	    for (var key in object)
	        enumerables.add(key); // *all* enumerables
	    Object.getOwnPropertySymbols(object).forEach(function (k) {
	        if (Object.getOwnPropertyDescriptor(object, k).enumerable)
	            enumerables.add(k);
	    }); // *own* symbols
	    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
	    // as there is no efficient iterator that returns *all* properties
	    return Array.from(enumerables);
	}
	function stringifyKey(key) {
	    if (key && key.toString)
	        return key.toString();
	    else
	        return new String(key).toString();
	}
	function getMapLikeKeys(map) {
	    if (isPlainObject(map))
	        return Object.keys(map);
	    if (Array.isArray(map))
	        return map.map(function (_a) {
	            var _b = __read(_a, 1), key = _b[0];
	            return key;
	        });
	    if (isES6Map(map) || isObservableMap(map))
	        return Array.from(map.keys());
	    return fail("Cannot get keys from '" + map + "'");
	}
	function toPrimitive(value) {
	    return value === null ? null : typeof value === "object" ? "" + value : value;
	}
	
	var $mobx = Symbol("mobx administration");
	var Atom = /** @class */ (function () {
	    /**
	     * Create a new atom. For debugging purposes it is recommended to give it a name.
	     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
	     */
	    function Atom(name) {
	        if (name === void 0) { name = "Atom@" + getNextId(); }
	        this.name = name;
	        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
	        this.isBeingObserved = false;
	        this.observers = new Set();
	        this.diffValue = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = exports.IDerivationState.NOT_TRACKING;
	    }
	    Atom.prototype.onBecomeObserved = function () {
	        if (this.onBecomeObservedListeners) {
	            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
	        }
	    };
	    Atom.prototype.onBecomeUnobserved = function () {
	        if (this.onBecomeUnobservedListeners) {
	            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
	        }
	    };
	    /**
	     * Invoke this method to notify mobx that your atom has been used somehow.
	     * Returns true if there is currently a reactive context.
	     */
	    Atom.prototype.reportObserved = function () {
	        return reportObserved(this);
	    };
	    /**
	     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
	     */
	    Atom.prototype.reportChanged = function () {
	        startBatch();
	        propagateChanged(this);
	        endBatch();
	    };
	    Atom.prototype.toString = function () {
	        return this.name;
	    };
	    return Atom;
	}());
	var isAtom = createInstanceofPredicate("Atom", Atom);
	function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
	    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
	    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
	    var atom = new Atom(name);
	    // default `noop` listener will not initialize the hook Set
	    if (onBecomeObservedHandler !== noop) {
	        onBecomeObserved(atom, onBecomeObservedHandler);
	    }
	    if (onBecomeUnobservedHandler !== noop) {
	        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
	    }
	    return atom;
	}
	
	function identityComparer(a, b) {
	    return a === b;
	}
	function structuralComparer(a, b) {
	    return deepEqual(a, b);
	}
	function shallowComparer(a, b) {
	    return deepEqual(a, b, 1);
	}
	function defaultComparer(a, b) {
	    return Object.is(a, b);
	}
	var comparer = {
	    identity: identityComparer,
	    structural: structuralComparer,
	    default: defaultComparer,
	    shallow: shallowComparer
	};
	
	var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
	var mobxPendingDecorators = Symbol("mobx pending decorators");
	var enumerableDescriptorCache = {};
	var nonEnumerableDescriptorCache = {};
	function createPropertyInitializerDescriptor(prop, enumerable) {
	    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
	    return (cache[prop] ||
	        (cache[prop] = {
	            configurable: true,
	            enumerable: enumerable,
	            get: function () {
	                initializeInstance(this);
	                return this[prop];
	            },
	            set: function (value) {
	                initializeInstance(this);
	                this[prop] = value;
	            }
	        }));
	}
	function initializeInstance(target) {
	    var e_1, _a;
	    if (target[mobxDidRunLazyInitializersSymbol] === true)
	        return;
	    var decorators = target[mobxPendingDecorators];
	    if (decorators) {
	        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
	        // Build property key array from both strings and symbols
	        var keys = __spread(Object.getOwnPropertySymbols(decorators), Object.keys(decorators));
	        try {
	            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
	                var key = keys_1_1.value;
	                var d = decorators[key];
	                d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
	            }
	        }
	        catch (e_1_1) { e_1 = { error: e_1_1 }; }
	        finally {
	            try {
	                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
	            }
	            finally { if (e_1) throw e_1.error; }
	        }
	    }
	}
	function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
	    return function decoratorFactory() {
	        var decoratorArguments;
	        var decorator = function decorate(target, prop, descriptor, applyImmediately
	        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
	        // as the instance to apply the decorator to equals the target
	        ) {
	            if (applyImmediately === true) {
	                propertyCreator(target, prop, descriptor, target, decoratorArguments);
	                return null;
	            }
	            if (false)
	                fail("This function is a decorator, but it wasn't invoked like a decorator");
	            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
	                var inheritedDecorators = target[mobxPendingDecorators];
	                addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
	            }
	            target[mobxPendingDecorators][prop] = {
	                prop: prop,
	                propertyCreator: propertyCreator,
	                descriptor: descriptor,
	                decoratorTarget: target,
	                decoratorArguments: decoratorArguments
	            };
	            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
	        };
	        if (quacksLikeADecorator(arguments)) {
	            // @decorator
	            decoratorArguments = EMPTY_ARRAY;
	            return decorator.apply(null, arguments);
	        }
	        else {
	            // @decorator(args)
	            decoratorArguments = Array.prototype.slice.call(arguments);
	            return decorator;
	        }
	    };
	}
	function quacksLikeADecorator(args) {
	    return (((args.length === 2 || args.length === 3) &&
	        (typeof args[1] === "string" || typeof args[1] === "symbol")) ||
	        (args.length === 4 && args[3] === true));
	}
	
	function deepEnhancer(v, _, name) {
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    if (Array.isArray(v))
	        return observable.array(v, { name: name });
	    if (isPlainObject(v))
	        return observable.object(v, undefined, { name: name });
	    if (isES6Map(v))
	        return observable.map(v, { name: name });
	    if (isES6Set(v))
	        return observable.set(v, { name: name });
	    return v;
	}
	function shallowEnhancer(v, _, name) {
	    if (v === undefined || v === null)
	        return v;
	    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
	        return v;
	    if (Array.isArray(v))
	        return observable.array(v, { name: name, deep: false });
	    if (isPlainObject(v))
	        return observable.object(v, undefined, { name: name, deep: false });
	    if (isES6Map(v))
	        return observable.map(v, { name: name, deep: false });
	    if (isES6Set(v))
	        return observable.set(v, { name: name, deep: false });
	    return fail(("production") !== "production" &&
	        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
	}
	function referenceEnhancer(newValue) {
	    // never turn into an observable
	    return newValue;
	}
	function refStructEnhancer(v, oldValue, name) {
	    if (false)
	        throw "observable.struct should not be used with observable values";
	    if (deepEqual(v, oldValue))
	        return oldValue;
	    return v;
	}
	
	function createDecoratorForEnhancer(enhancer) {
	    invariant(enhancer);
	    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
	        if (false) {
	            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
	        }
	        var initialValue = descriptor
	            ? descriptor.initializer
	                ? descriptor.initializer.call(target)
	                : descriptor.value
	            : undefined;
	        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
	    });
	    var res = 
	    // Extra process checks, as this happens during module initialization
	    typeof process !== "undefined" && ({"NODE_ENV":"production","PUBLIC_URL":"."}) && ("production") !== "production"
	        ? function observableDecorator() {
	            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
	            // and simply return the created prop decorator
	            if (arguments.length < 2)
	                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
	            return decorator.apply(null, arguments);
	        }
	        : decorator;
	    res.enhancer = enhancer;
	    return res;
	}
	
	// Predefined bags of create observable options, to avoid allocating temporarily option objects
	// in the majority of cases
	var defaultCreateObservableOptions = {
	    deep: true,
	    name: undefined,
	    defaultDecorator: undefined,
	    proxy: true
	};
	Object.freeze(defaultCreateObservableOptions);
	function assertValidOption(key) {
	    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
	        fail("invalid option for (extend)observable: " + key);
	}
	function asCreateObservableOptions(thing) {
	    if (thing === null || thing === undefined)
	        return defaultCreateObservableOptions;
	    if (typeof thing === "string")
	        return { name: thing, deep: true, proxy: true };
	    if (false) {
	        if (typeof thing !== "object")
	            return fail("expected options object");
	        Object.keys(thing).forEach(assertValidOption);
	    }
	    return thing;
	}
	var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
	var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
	var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
	var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
	function getEnhancerFromOptions(options) {
	    return options.defaultDecorator
	        ? options.defaultDecorator.enhancer
	        : options.deep === false
	            ? referenceEnhancer
	            : deepEnhancer;
	}
	/**
	 * Turns an object, array or function into a reactive structure.
	 * @param v the value which should become observable.
	 */
	function createObservable(v, arg2, arg3) {
	    // @observable someProp;
	    if (typeof arguments[1] === "string" || typeof arguments[1] === "symbol") {
	        return deepDecorator.apply(null, arguments);
	    }
	    // it is an observable already, done
	    if (isObservable(v))
	        return v;
	    // something that can be converted and mutated?
	    var res = isPlainObject(v)
	        ? observable.object(v, arg2, arg3)
	        : Array.isArray(v)
	            ? observable.array(v, arg2)
	            : isES6Map(v)
	                ? observable.map(v, arg2)
	                : isES6Set(v)
	                    ? observable.set(v, arg2)
	                    : v;
	    // this value could be converted to a new observable data structure, return it
	    if (res !== v)
	        return res;
	    // otherwise, just box it
	    fail(("production") !== "production" &&
	        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
	}
	var observableFactories = {
	    box: function (value, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("box");
	        var o = asCreateObservableOptions(options);
	        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
	    },
	    array: function (initialValues, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("array");
	        var o = asCreateObservableOptions(options);
	        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
	    },
	    map: function (initialValues, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("map");
	        var o = asCreateObservableOptions(options);
	        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
	    },
	    set: function (initialValues, options) {
	        if (arguments.length > 2)
	            incorrectlyUsedAsDecorator("set");
	        var o = asCreateObservableOptions(options);
	        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
	    },
	    object: function (props, decorators, options) {
	        if (typeof arguments[1] === "string")
	            incorrectlyUsedAsDecorator("object");
	        var o = asCreateObservableOptions(options);
	        if (o.proxy === false) {
	            return extendObservable({}, props, decorators, o);
	        }
	        else {
	            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
	            var base = extendObservable({}, undefined, undefined, o);
	            var proxy = createDynamicObservableObject(base);
	            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
	            return proxy;
	        }
	    },
	    ref: refDecorator,
	    shallow: shallowDecorator,
	    deep: deepDecorator,
	    struct: refStructDecorator
	};
	var observable = createObservable;
	// weird trick to keep our typings nicely with our funcs, and still extend the observable function
	Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
	function incorrectlyUsedAsDecorator(methodName) {
	    fail(
	    // process.env.NODE_ENV !== "production" &&
	    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
	}
	
	var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
	    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
	    // Optimization: faster on decorator target or instance? Assuming target
	    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
	    // Forcing instance now, fixes hot reloadig issues on React Native:
	    var options = decoratorArgs[0] || {};
	    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({ get: get,
	        set: set, context: instance }, options));
	});
	var computedStructDecorator = computedDecorator({ equals: comparer.structural });
	/**
	 * Decorator for class properties: @computed get value() { return expr; }.
	 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
	 */
	var computed = function computed(arg1, arg2, arg3) {
	    if (typeof arg2 === "string") {
	        // @computed
	        return computedDecorator.apply(null, arguments);
	    }
	    if (arg1 !== null && typeof arg1 === "object" && arguments.length === 1) {
	        // @computed({ options })
	        return computedDecorator.apply(null, arguments);
	    }
	    // computed(expr, options?)
	    if (false) {
	        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
	        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
	    }
	    var opts = typeof arg2 === "object" ? arg2 : {};
	    opts.get = arg1;
	    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
	    opts.name = opts.name || arg1.name || ""; /* for generated name */
	    return new ComputedValue(opts);
	};
	computed.struct = computedStructDecorator;
	
	(function (IDerivationState) {
	    // before being run or (outside batch and not being observed)
	    // at this point derivation is not holding any data about dependency tree
	    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
	    // no shallow dependency changed since last computation
	    // won't recalculate derivation
	    // this is what makes mobx fast
	    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
	    // some deep dependency changed, but don't know if shallow dependency changed
	    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
	    // currently only ComputedValue will propagate POSSIBLY_STALE
	    //
	    // having this state is second big optimization:
	    // don't have to recompute on every dependency change, but only when it's needed
	    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
	    // A shallow dependency has changed since last computation and the derivation
	    // will need to recompute when it's needed next.
	    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
	})(exports.IDerivationState || (exports.IDerivationState = {}));
	var TraceMode;
	(function (TraceMode) {
	    TraceMode[TraceMode["NONE"] = 0] = "NONE";
	    TraceMode[TraceMode["LOG"] = 1] = "LOG";
	    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
	})(TraceMode || (TraceMode = {}));
	var CaughtException = /** @class */ (function () {
	    function CaughtException(cause) {
	        this.cause = cause;
	        // Empty
	    }
	    return CaughtException;
	}());
	function isCaughtException(e) {
	    return e instanceof CaughtException;
	}
	/**
	 * Finds out whether any dependency of the derivation has actually changed.
	 * If dependenciesState is 1 then it will recalculate dependencies,
	 * if any dependency changed it will propagate it by changing dependenciesState to 2.
	 *
	 * By iterating over the dependencies in the same order that they were reported and
	 * stopping on the first change, all the recalculations are only called for ComputedValues
	 * that will be tracked by derivation. That is because we assume that if the first x
	 * dependencies of the derivation doesn't change then the derivation should run the same way
	 * up until accessing x-th dependency.
	 */
	function shouldCompute(derivation) {
	    switch (derivation.dependenciesState) {
	        case exports.IDerivationState.UP_TO_DATE:
	            return false;
	        case exports.IDerivationState.NOT_TRACKING:
	        case exports.IDerivationState.STALE:
	            return true;
	        case exports.IDerivationState.POSSIBLY_STALE: {
	            // state propagation can occur outside of action/reactive context #2195
	            var prevAllowStateReads = allowStateReadsStart(true);
	            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
	            var obs = derivation.observing, l = obs.length;
	            for (var i = 0; i < l; i++) {
	                var obj = obs[i];
	                if (isComputedValue(obj)) {
	                    if (globalState.disableErrorBoundaries) {
	                        obj.get();
	                    }
	                    else {
	                        try {
	                            obj.get();
	                        }
	                        catch (e) {
	                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
	                            untrackedEnd(prevUntracked);
	                            allowStateReadsEnd(prevAllowStateReads);
	                            return true;
	                        }
	                    }
	                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
	                    // and `derivation` is an observer of `obj`
	                    // invariantShouldCompute(derivation)
	                    if (derivation.dependenciesState === exports.IDerivationState.STALE) {
	                        untrackedEnd(prevUntracked);
	                        allowStateReadsEnd(prevAllowStateReads);
	                        return true;
	                    }
	                }
	            }
	            changeDependenciesStateTo0(derivation);
	            untrackedEnd(prevUntracked);
	            allowStateReadsEnd(prevAllowStateReads);
	            return false;
	        }
	    }
	}
	// function invariantShouldCompute(derivation: IDerivation) {
	//     const newDepState = (derivation as any).dependenciesState
	//     if (
	//         process.env.NODE_ENV === "production" &&
	//         (newDepState === IDerivationState.POSSIBLY_STALE ||
	//             newDepState === IDerivationState.NOT_TRACKING)
	//     )
	//         fail("Illegal dependency state")
	// }
	function isComputingDerivation() {
	    return globalState.trackingDerivation !== null; // filter out actions inside computations
	}
	function checkIfStateModificationsAreAllowed(atom) {
	    var hasObservers = atom.observers.size > 0;
	    // Should never be possible to change an observed observable from inside computed, see #798
	    if (globalState.computationDepth > 0 && hasObservers)
	        fail(("production") !== "production" &&
	            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
	    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
	    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
	        fail(("production") !== "production" &&
	            (globalState.enforceActions
	                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
	                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
	                atom.name);
	}
	function checkIfStateReadsAreAllowed(observable) {
	    if (false) {
	        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
	    }
	}
	/**
	 * Executes the provided function `f` and tracks which observables are being accessed.
	 * The tracking information is stored on the `derivation` object and the derivation is registered
	 * as observer of any of the accessed observables.
	 */
	function trackDerivedFunction(derivation, f, context) {
	    var prevAllowStateReads = allowStateReadsStart(true);
	    // pre allocate array allocation + room for variation in deps
	    // array will be trimmed by bindDependencies
	    changeDependenciesStateTo0(derivation);
	    derivation.newObserving = new Array(derivation.observing.length + 100);
	    derivation.unboundDepsCount = 0;
	    derivation.runId = ++globalState.runId;
	    var prevTracking = globalState.trackingDerivation;
	    globalState.trackingDerivation = derivation;
	    var result;
	    if (globalState.disableErrorBoundaries === true) {
	        result = f.call(context);
	    }
	    else {
	        try {
	            result = f.call(context);
	        }
	        catch (e) {
	            result = new CaughtException(e);
	        }
	    }
	    globalState.trackingDerivation = prevTracking;
	    bindDependencies(derivation);
	    warnAboutDerivationWithoutDependencies(derivation);
	    allowStateReadsEnd(prevAllowStateReads);
	    return result;
	}
	function warnAboutDerivationWithoutDependencies(derivation) {
	    if (true)
	        return;
	    if (derivation.observing.length !== 0)
	        return;
	    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
	        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
	    }
	}
	/**
	 * diffs newObserving with observing.
	 * update observing to be newObserving with unique observables
	 * notify observers that become observed/unobserved
	 */
	function bindDependencies(derivation) {
	    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
	    var prevObserving = derivation.observing;
	    var observing = (derivation.observing = derivation.newObserving);
	    var lowestNewObservingDerivationState = exports.IDerivationState.UP_TO_DATE;
	    // Go through all new observables and check diffValue: (this list can contain duplicates):
	    //   0: first occurrence, change to 1 and keep it
	    //   1: extra occurrence, drop it
	    var i0 = 0, l = derivation.unboundDepsCount;
	    for (var i = 0; i < l; i++) {
	        var dep = observing[i];
	        if (dep.diffValue === 0) {
	            dep.diffValue = 1;
	            if (i0 !== i)
	                observing[i0] = dep;
	            i0++;
	        }
	        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
	        // not hitting the condition
	        if (dep.dependenciesState > lowestNewObservingDerivationState) {
	            lowestNewObservingDerivationState = dep.dependenciesState;
	        }
	    }
	    observing.length = i0;
	    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
	    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
	    //   0: it's not in new observables, unobserve it
	    //   1: it keeps being observed, don't want to notify it. change to 0
	    l = prevObserving.length;
	    while (l--) {
	        var dep = prevObserving[l];
	        if (dep.diffValue === 0) {
	            removeObserver(dep, derivation);
	        }
	        dep.diffValue = 0;
	    }
	    // Go through all new observables and check diffValue: (now it should be unique)
	    //   0: it was set to 0 in last loop. don't need to do anything.
	    //   1: it wasn't observed, let's observe it. set back to 0
	    while (i0--) {
	        var dep = observing[i0];
	        if (dep.diffValue === 1) {
	            dep.diffValue = 0;
	            addObserver(dep, derivation);
	        }
	    }
	    // Some new observed derivations may become stale during this derivation computation
	    // so they have had no chance to propagate staleness (#916)
	    if (lowestNewObservingDerivationState !== exports.IDerivationState.UP_TO_DATE) {
	        derivation.dependenciesState = lowestNewObservingDerivationState;
	        derivation.onBecomeStale();
	    }
	}
	function clearObserving(derivation) {
	    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
	    var obs = derivation.observing;
	    derivation.observing = [];
	    var i = obs.length;
	    while (i--)
	        removeObserver(obs[i], derivation);
	    derivation.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	}
	function untracked(action) {
	    var prev = untrackedStart();
	    try {
	        return action();
	    }
	    finally {
	        untrackedEnd(prev);
	    }
	}
	function untrackedStart() {
	    var prev = globalState.trackingDerivation;
	    globalState.trackingDerivation = null;
	    return prev;
	}
	function untrackedEnd(prev) {
	    globalState.trackingDerivation = prev;
	}
	function allowStateReadsStart(allowStateReads) {
	    var prev = globalState.allowStateReads;
	    globalState.allowStateReads = allowStateReads;
	    return prev;
	}
	function allowStateReadsEnd(prev) {
	    globalState.allowStateReads = prev;
	}
	/**
	 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
	 *
	 */
	function changeDependenciesStateTo0(derivation) {
	    if (derivation.dependenciesState === exports.IDerivationState.UP_TO_DATE)
	        return;
	    derivation.dependenciesState = exports.IDerivationState.UP_TO_DATE;
	    var obs = derivation.observing;
	    var i = obs.length;
	    while (i--)
	        obs[i].lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	}
	
	// we don't use globalState for these in order to avoid possible issues with multiple
	// mobx versions
	var currentActionId = 0;
	var nextActionId = 1;
	function createAction(actionName, fn, ref) {
	    if (false) {
	        invariant(typeof fn === "function", "`action` can only be invoked on functions");
	        if (typeof actionName !== "string" || !actionName)
	            fail("actions should have valid names, got: '" + actionName + "'");
	    }
	    var res = function () {
	        return executeAction(actionName, fn, ref || this, arguments);
	    };
	    res.isMobxAction = true;
	    return res;
	}
	function executeAction(actionName, fn, scope, args) {
	    var runInfo = _startAction(actionName, scope, args);
	    try {
	        return fn.apply(scope, args);
	    }
	    catch (err) {
	        runInfo.error = err;
	        throw err;
	    }
	    finally {
	        _endAction(runInfo);
	    }
	}
	function _startAction(actionName, scope, args) {
	    var notifySpy = isSpyEnabled() && !!actionName;
	    var startTime = 0;
	    if (notifySpy && ("production") !== "production") {
	        startTime = Date.now();
	        var l = (args && args.length) || 0;
	        var flattendArgs = new Array(l);
	        if (l > 0)
	            for (var i = 0; i < l; i++)
	                flattendArgs[i] = args[i];
	        spyReportStart({
	            type: "action",
	            name: actionName,
	            object: scope,
	            arguments: flattendArgs
	        });
	    }
	    var prevDerivation = untrackedStart();
	    startBatch();
	    var prevAllowStateChanges = allowStateChangesStart(true);
	    var prevAllowStateReads = allowStateReadsStart(true);
	    var runInfo = {
	        prevDerivation: prevDerivation,
	        prevAllowStateChanges: prevAllowStateChanges,
	        prevAllowStateReads: prevAllowStateReads,
	        notifySpy: notifySpy,
	        startTime: startTime,
	        actionId: nextActionId++,
	        parentActionId: currentActionId
	    };
	    currentActionId = runInfo.actionId;
	    return runInfo;
	}
	function _endAction(runInfo) {
	    if (currentActionId !== runInfo.actionId) {
	        fail("invalid action stack. did you forget to finish an action?");
	    }
	    currentActionId = runInfo.parentActionId;
	    if (runInfo.error !== undefined) {
	        globalState.suppressReactionErrors = true;
	    }
	    allowStateChangesEnd(runInfo.prevAllowStateChanges);
	    allowStateReadsEnd(runInfo.prevAllowStateReads);
	    endBatch();
	    untrackedEnd(runInfo.prevDerivation);
	    if (runInfo.notifySpy && ("production") !== "production") {
	        spyReportEnd({ time: Date.now() - runInfo.startTime });
	    }
	    globalState.suppressReactionErrors = false;
	}
	function allowStateChanges(allowStateChanges, func) {
	    var prev = allowStateChangesStart(allowStateChanges);
	    var res;
	    try {
	        res = func();
	    }
	    finally {
	        allowStateChangesEnd(prev);
	    }
	    return res;
	}
	function allowStateChangesStart(allowStateChanges) {
	    var prev = globalState.allowStateChanges;
	    globalState.allowStateChanges = allowStateChanges;
	    return prev;
	}
	function allowStateChangesEnd(prev) {
	    globalState.allowStateChanges = prev;
	}
	function allowStateChangesInsideComputed(func) {
	    var prev = globalState.computationDepth;
	    globalState.computationDepth = 0;
	    var res;
	    try {
	        res = func();
	    }
	    finally {
	        globalState.computationDepth = prev;
	    }
	    return res;
	}
	
	var ObservableValue = /** @class */ (function (_super) {
	    __extends(ObservableValue, _super);
	    function ObservableValue(value, enhancer, name, notifySpy, equals) {
	        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
	        if (notifySpy === void 0) { notifySpy = true; }
	        if (equals === void 0) { equals = comparer.default; }
	        var _this = _super.call(this, name) || this;
	        _this.enhancer = enhancer;
	        _this.name = name;
	        _this.equals = equals;
	        _this.hasUnreportedChange = false;
	        _this.value = enhancer(value, undefined, name);
	        if (notifySpy && isSpyEnabled() && ("production") !== "production") {
	            // only notify spy if this is a stand-alone observable
	            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
	        }
	        return _this;
	    }
	    ObservableValue.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined)
	            return this.dehancer(value);
	        return value;
	    };
	    ObservableValue.prototype.set = function (newValue) {
	        var oldValue = this.value;
	        newValue = this.prepareNewValue(newValue);
	        if (newValue !== globalState.UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            if (notifySpy && ("production") !== "production") {
	                spyReportStart({
	                    type: "update",
	                    name: this.name,
	                    newValue: newValue,
	                    oldValue: oldValue
	                });
	            }
	            this.setNewValue(newValue);
	            if (notifySpy && ("production") !== "production")
	                spyReportEnd();
	        }
	    };
	    ObservableValue.prototype.prepareNewValue = function (newValue) {
	        checkIfStateModificationsAreAllowed(this);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this,
	                type: "update",
	                newValue: newValue
	            });
	            if (!change)
	                return globalState.UNCHANGED;
	            newValue = change.newValue;
	        }
	        // apply modifier
	        newValue = this.enhancer(newValue, this.value, this.name);
	        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
	    };
	    ObservableValue.prototype.setNewValue = function (newValue) {
	        var oldValue = this.value;
	        this.value = newValue;
	        this.reportChanged();
	        if (hasListeners(this)) {
	            notifyListeners(this, {
	                type: "update",
	                object: this,
	                newValue: newValue,
	                oldValue: oldValue
	            });
	        }
	    };
	    ObservableValue.prototype.get = function () {
	        this.reportObserved();
	        return this.dehanceValue(this.value);
	    };
	    ObservableValue.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableValue.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately)
	            listener({
	                object: this,
	                type: "update",
	                newValue: this.value,
	                oldValue: undefined
	            });
	        return registerListener(this, listener);
	    };
	    ObservableValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ObservableValue.prototype.toString = function () {
	        return this.name + "[" + this.value + "]";
	    };
	    ObservableValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    ObservableValue.prototype[Symbol.toPrimitive] = function () {
	        return this.valueOf();
	    };
	    return ObservableValue;
	}(Atom));
	var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
	
	/**
	 * A node in the state dependency root that observes other nodes, and can be observed itself.
	 *
	 * ComputedValue will remember the result of the computation for the duration of the batch, or
	 * while being observed.
	 *
	 * During this time it will recompute only when one of its direct dependencies changed,
	 * but only when it is being accessed with `ComputedValue.get()`.
	 *
	 * Implementation description:
	 * 1. First time it's being accessed it will compute and remember result
	 *    give back remembered result until 2. happens
	 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
	 * 3. When it's being accessed, recompute if any shallow dependency changed.
	 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
	 *    go to step 2. either way
	 *
	 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
	 */
	var ComputedValue = /** @class */ (function () {
	    /**
	     * Create a new computed value based on a function expression.
	     *
	     * The `name` property is for debug purposes only.
	     *
	     * The `equals` property specifies the comparer function to use to determine if a newly produced
	     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
	     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
	     * Structural comparison can be convenient if you always produce a new aggregated object and
	     * don't want to notify observers if it is structurally the same.
	     * This is useful for working with vectors, mouse coordinates etc.
	     */
	    function ComputedValue(options) {
	        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	        this.observing = []; // nodes we are looking at. Our value depends on these nodes
	        this.newObserving = null; // during tracking it's an array with new observed observers
	        this.isBeingObserved = false;
	        this.isPendingUnobservation = false;
	        this.observers = new Set();
	        this.diffValue = 0;
	        this.runId = 0;
	        this.lastAccessedBy = 0;
	        this.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.value = new CaughtException(null);
	        this.isComputing = false; // to check for cycles
	        this.isRunningSetter = false;
	        this.isTracing = TraceMode.NONE;
	        if (false)
	            throw "[mobx] missing option for computed: get";
	        this.derivation = options.get;
	        this.name = options.name || "ComputedValue@" + getNextId();
	        if (options.set)
	            this.setter = createAction(this.name + "-setter", options.set);
	        this.equals =
	            options.equals ||
	                (options.compareStructural || options.struct
	                    ? comparer.structural
	                    : comparer.default);
	        this.scope = options.context;
	        this.requiresReaction = !!options.requiresReaction;
	        this.keepAlive = !!options.keepAlive;
	    }
	    ComputedValue.prototype.onBecomeStale = function () {
	        propagateMaybeChanged(this);
	    };
	    ComputedValue.prototype.onBecomeObserved = function () {
	        if (this.onBecomeObservedListeners) {
	            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
	        }
	    };
	    ComputedValue.prototype.onBecomeUnobserved = function () {
	        if (this.onBecomeUnobservedListeners) {
	            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
	        }
	    };
	    /**
	     * Returns the current value of this computed value.
	     * Will evaluate its computation first if needed.
	     */
	    ComputedValue.prototype.get = function () {
	        if (this.isComputing)
	            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
	        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
	            if (shouldCompute(this)) {
	                this.warnAboutUntrackedRead();
	                startBatch(); // See perf test 'computed memoization'
	                this.value = this.computeValue(false);
	                endBatch();
	            }
	        }
	        else {
	            reportObserved(this);
	            if (shouldCompute(this))
	                if (this.trackAndCompute())
	                    propagateChangeConfirmed(this);
	        }
	        var result = this.value;
	        if (isCaughtException(result))
	            throw result.cause;
	        return result;
	    };
	    ComputedValue.prototype.peek = function () {
	        var res = this.computeValue(false);
	        if (isCaughtException(res))
	            throw res.cause;
	        return res;
	    };
	    ComputedValue.prototype.set = function (value) {
	        if (this.setter) {
	            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
	            this.isRunningSetter = true;
	            try {
	                this.setter.call(this.scope, value);
	            }
	            finally {
	                this.isRunningSetter = false;
	            }
	        }
	        else
	            invariant(false, ("production") !== "production" &&
	                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
	    };
	    ComputedValue.prototype.trackAndCompute = function () {
	        if (isSpyEnabled() && ("production") !== "production") {
	            spyReport({
	                object: this.scope,
	                type: "compute",
	                name: this.name
	            });
	        }
	        var oldValue = this.value;
	        var wasSuspended = 
	        /* see #1208 */ this.dependenciesState === exports.IDerivationState.NOT_TRACKING;
	        var newValue = this.computeValue(true);
	        var changed = wasSuspended ||
	            isCaughtException(oldValue) ||
	            isCaughtException(newValue) ||
	            !this.equals(oldValue, newValue);
	        if (changed) {
	            this.value = newValue;
	        }
	        return changed;
	    };
	    ComputedValue.prototype.computeValue = function (track) {
	        this.isComputing = true;
	        globalState.computationDepth++;
	        var res;
	        if (track) {
	            res = trackDerivedFunction(this, this.derivation, this.scope);
	        }
	        else {
	            if (globalState.disableErrorBoundaries === true) {
	                res = this.derivation.call(this.scope);
	            }
	            else {
	                try {
	                    res = this.derivation.call(this.scope);
	                }
	                catch (e) {
	                    res = new CaughtException(e);
	                }
	            }
	        }
	        globalState.computationDepth--;
	        this.isComputing = false;
	        return res;
	    };
	    ComputedValue.prototype.suspend = function () {
	        if (!this.keepAlive) {
	            clearObserving(this);
	            this.value = undefined; // don't hold on to computed value!
	        }
	    };
	    ComputedValue.prototype.observe = function (listener, fireImmediately) {
	        var _this = this;
	        var firstTime = true;
	        var prevValue = undefined;
	        return autorun(function () {
	            var newValue = _this.get();
	            if (!firstTime || fireImmediately) {
	                var prevU = untrackedStart();
	                listener({
	                    type: "update",
	                    object: _this,
	                    newValue: newValue,
	                    oldValue: prevValue
	                });
	                untrackedEnd(prevU);
	            }
	            firstTime = false;
	            prevValue = newValue;
	        });
	    };
	    ComputedValue.prototype.warnAboutUntrackedRead = function () {
	        if (true)
	            return;
	        if (this.requiresReaction === true) {
	            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
	        }
	        if (this.isTracing !== TraceMode.NONE) {
	            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
	        }
	        if (globalState.computedRequiresReaction) {
	            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
	        }
	    };
	    ComputedValue.prototype.toJSON = function () {
	        return this.get();
	    };
	    ComputedValue.prototype.toString = function () {
	        return this.name + "[" + this.derivation.toString() + "]";
	    };
	    ComputedValue.prototype.valueOf = function () {
	        return toPrimitive(this.get());
	    };
	    ComputedValue.prototype[Symbol.toPrimitive] = function () {
	        return this.valueOf();
	    };
	    return ComputedValue;
	}());
	var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
	
	/**
	 * These values will persist if global state is reset
	 */
	var persistentKeys = [
	    "mobxGuid",
	    "spyListeners",
	    "enforceActions",
	    "computedRequiresReaction",
	    "reactionRequiresObservable",
	    "observableRequiresReaction",
	    "allowStateReads",
	    "disableErrorBoundaries",
	    "runId",
	    "UNCHANGED"
	];
	var MobXGlobals = /** @class */ (function () {
	    function MobXGlobals() {
	        /**
	         * MobXGlobals version.
	         * MobX compatiblity with other versions loaded in memory as long as this version matches.
	         * It indicates that the global state still stores similar information
	         *
	         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
	         * internal state storage of MobX, and can be the same across many different package versions
	         */
	        this.version = 5;
	        /**
	         * globally unique token to signal unchanged
	         */
	        this.UNCHANGED = {};
	        /**
	         * Currently running derivation
	         */
	        this.trackingDerivation = null;
	        /**
	         * Are we running a computation currently? (not a reaction)
	         */
	        this.computationDepth = 0;
	        /**
	         * Each time a derivation is tracked, it is assigned a unique run-id
	         */
	        this.runId = 0;
	        /**
	         * 'guid' for general purpose. Will be persisted amongst resets.
	         */
	        this.mobxGuid = 0;
	        /**
	         * Are we in a batch block? (and how many of them)
	         */
	        this.inBatch = 0;
	        /**
	         * Observables that don't have observers anymore, and are about to be
	         * suspended, unless somebody else accesses it in the same batch
	         *
	         * @type {IObservable[]}
	         */
	        this.pendingUnobservations = [];
	        /**
	         * List of scheduled, not yet executed, reactions.
	         */
	        this.pendingReactions = [];
	        /**
	         * Are we currently processing reactions?
	         */
	        this.isRunningReactions = false;
	        /**
	         * Is it allowed to change observables at this point?
	         * In general, MobX doesn't allow that when running computations and React.render.
	         * To ensure that those functions stay pure.
	         */
	        this.allowStateChanges = true;
	        /**
	         * Is it allowed to read observables at this point?
	         * Used to hold the state needed for `observableRequiresReaction`
	         */
	        this.allowStateReads = true;
	        /**
	         * If strict mode is enabled, state changes are by default not allowed
	         */
	        this.enforceActions = false;
	        /**
	         * Spy callbacks
	         */
	        this.spyListeners = [];
	        /**
	         * Globally attached error handlers that react specifically to errors in reactions
	         */
	        this.globalReactionErrorHandlers = [];
	        /**
	         * Warn if computed values are accessed outside a reactive context
	         */
	        this.computedRequiresReaction = false;
	        /**
	         * (Experimental)
	         * Warn if you try to create to derivation / reactive context without accessing any observable.
	         */
	        this.reactionRequiresObservable = false;
	        /**
	         * (Experimental)
	         * Warn if observables are accessed outside a reactive context
	         */
	        this.observableRequiresReaction = false;
	        /**
	         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
	         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
	         */
	        this.computedConfigurable = false;
	        /*
	         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
	         * the stack when an exception occurs while debugging.
	         */
	        this.disableErrorBoundaries = false;
	        /*
	         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
	         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
	         */
	        this.suppressReactionErrors = false;
	    }
	    return MobXGlobals;
	}());
	var mockGlobal = {};
	function getGlobal() {
	    if (typeof window !== "undefined") {
	        return window;
	    }
	    if (typeof global !== "undefined") {
	        return global;
	    }
	    if (typeof self !== "undefined") {
	        return self;
	    }
	    return mockGlobal;
	}
	var canMergeGlobalState = true;
	var isolateCalled = false;
	var globalState = (function () {
	    var global = getGlobal();
	    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
	        canMergeGlobalState = false;
	    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
	        canMergeGlobalState = false;
	    if (!canMergeGlobalState) {
	        setTimeout(function () {
	            if (!isolateCalled) {
	                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
	            }
	        }, 1);
	        return new MobXGlobals();
	    }
	    else if (global.__mobxGlobals) {
	        global.__mobxInstanceCount += 1;
	        if (!global.__mobxGlobals.UNCHANGED)
	            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
	        return global.__mobxGlobals;
	    }
	    else {
	        global.__mobxInstanceCount = 1;
	        return (global.__mobxGlobals = new MobXGlobals());
	    }
	})();
	function isolateGlobalState() {
	    if (globalState.pendingReactions.length ||
	        globalState.inBatch ||
	        globalState.isRunningReactions)
	        fail("isolateGlobalState should be called before MobX is running any reactions");
	    isolateCalled = true;
	    if (canMergeGlobalState) {
	        if (--getGlobal().__mobxInstanceCount === 0)
	            getGlobal().__mobxGlobals = undefined;
	        globalState = new MobXGlobals();
	    }
	}
	function getGlobalState() {
	    return globalState;
	}
	/**
	 * For testing purposes only; this will break the internal state of existing observables,
	 * but can be used to get back at a stable state after throwing errors
	 */
	function resetGlobalState() {
	    var defaultGlobals = new MobXGlobals();
	    for (var key in defaultGlobals)
	        if (persistentKeys.indexOf(key) === -1)
	            globalState[key] = defaultGlobals[key];
	    globalState.allowStateChanges = !globalState.enforceActions;
	}
	
	function hasObservers(observable) {
	    return observable.observers && observable.observers.size > 0;
	}
	function getObservers(observable) {
	    return observable.observers;
	}
	// function invariantObservers(observable: IObservable) {
	//     const list = observable.observers
	//     const map = observable.observersIndexes
	//     const l = list.length
	//     for (let i = 0; i < l; i++) {
	//         const id = list[i].__mapid
	//         if (i) {
	//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
	//         } else {
	//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
	//         }
	//     }
	//     invariant(
	//         list.length === 0 || Object.keys(map).length === list.length - 1,
	//         "INTERNAL ERROR there is no junk in map"
	//     )
	// }
	function addObserver(observable, node) {
	    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
	    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
	    // invariantObservers(observable);
	    observable.observers.add(node);
	    if (observable.lowestObserverState > node.dependenciesState)
	        observable.lowestObserverState = node.dependenciesState;
	    // invariantObservers(observable);
	    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
	}
	function removeObserver(observable, node) {
	    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
	    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
	    // invariantObservers(observable);
	    observable.observers.delete(node);
	    if (observable.observers.size === 0) {
	        // deleting last observer
	        queueForUnobservation(observable);
	    }
	    // invariantObservers(observable);
	    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
	}
	function queueForUnobservation(observable) {
	    if (observable.isPendingUnobservation === false) {
	        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
	        observable.isPendingUnobservation = true;
	        globalState.pendingUnobservations.push(observable);
	    }
	}
	/**
	 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
	 * During a batch `onBecomeUnobserved` will be called at most once per observable.
	 * Avoids unnecessary recalculations.
	 */
	function startBatch() {
	    globalState.inBatch++;
	}
	function endBatch() {
	    if (--globalState.inBatch === 0) {
	        runReactions();
	        // the batch is actually about to finish, all unobserving should happen here.
	        var list = globalState.pendingUnobservations;
	        for (var i = 0; i < list.length; i++) {
	            var observable = list[i];
	            observable.isPendingUnobservation = false;
	            if (observable.observers.size === 0) {
	                if (observable.isBeingObserved) {
	                    // if this observable had reactive observers, trigger the hooks
	                    observable.isBeingObserved = false;
	                    observable.onBecomeUnobserved();
	                }
	                if (observable instanceof ComputedValue) {
	                    // computed values are automatically teared down when the last observer leaves
	                    // this process happens recursively, this computed might be the last observabe of another, etc..
	                    observable.suspend();
	                }
	            }
	        }
	        globalState.pendingUnobservations = [];
	    }
	}
	function reportObserved(observable) {
	    checkIfStateReadsAreAllowed(observable);
	    var derivation = globalState.trackingDerivation;
	    if (derivation !== null) {
	        /**
	         * Simple optimization, give each derivation run an unique id (runId)
	         * Check if last time this observable was accessed the same runId is used
	         * if this is the case, the relation is already known
	         */
	        if (derivation.runId !== observable.lastAccessedBy) {
	            observable.lastAccessedBy = derivation.runId;
	            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
	            derivation.newObserving[derivation.unboundDepsCount++] = observable;
	            if (!observable.isBeingObserved) {
	                observable.isBeingObserved = true;
	                observable.onBecomeObserved();
	            }
	        }
	        return true;
	    }
	    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
	        queueForUnobservation(observable);
	    }
	    return false;
	}
	// function invariantLOS(observable: IObservable, msg: string) {
	//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
	//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
	//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
	//     throw new Error(
	//         "lowestObserverState is wrong for " +
	//             msg +
	//             " because " +
	//             min +
	//             " < " +
	//             observable.lowestObserverState
	//     )
	// }
	/**
	 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
	 * It will propagate changes to observers from previous run
	 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
	 * Hopefully self reruning autoruns aren't a feature people should depend on
	 * Also most basic use cases should be ok
	 */
	// Called by Atom when its value changes
	function propagateChanged(observable) {
	    // invariantLOS(observable, "changed start");
	    if (observable.lowestObserverState === exports.IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.STALE;
	    // Ideally we use for..of here, but the downcompiled version is really slow...
	    observable.observers.forEach(function (d) {
	        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
	            if (d.isTracing !== TraceMode.NONE) {
	                logTraceInfo(d, observable);
	            }
	            d.onBecomeStale();
	        }
	        d.dependenciesState = exports.IDerivationState.STALE;
	    });
	    // invariantLOS(observable, "changed end");
	}
	// Called by ComputedValue when it recalculate and its value changed
	function propagateChangeConfirmed(observable) {
	    // invariantLOS(observable, "confirmed start");
	    if (observable.lowestObserverState === exports.IDerivationState.STALE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.STALE;
	    observable.observers.forEach(function (d) {
	        if (d.dependenciesState === exports.IDerivationState.POSSIBLY_STALE)
	            d.dependenciesState = exports.IDerivationState.STALE;
	        else if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
	        )
	            observable.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
	    });
	    // invariantLOS(observable, "confirmed end");
	}
	// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
	function propagateMaybeChanged(observable) {
	    // invariantLOS(observable, "maybe start");
	    if (observable.lowestObserverState !== exports.IDerivationState.UP_TO_DATE)
	        return;
	    observable.lowestObserverState = exports.IDerivationState.POSSIBLY_STALE;
	    observable.observers.forEach(function (d) {
	        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
	            d.dependenciesState = exports.IDerivationState.POSSIBLY_STALE;
	            if (d.isTracing !== TraceMode.NONE) {
	                logTraceInfo(d, observable);
	            }
	            d.onBecomeStale();
	        }
	    });
	    // invariantLOS(observable, "maybe end");
	}
	function logTraceInfo(derivation, observable) {
	    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
	    if (derivation.isTracing === TraceMode.BREAK) {
	        var lines = [];
	        printDepTree(getDependencyTree(derivation), lines, 1);
	        // prettier-ignore
	        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
	    }
	}
	function printDepTree(tree, lines, depth) {
	    if (lines.length >= 1000) {
	        lines.push("(and many more)");
	        return;
	    }
	    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
	    if (tree.dependencies)
	        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
	}
	
	var Reaction = /** @class */ (function () {
	    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
	        if (name === void 0) { name = "Reaction@" + getNextId(); }
	        if (requiresObservable === void 0) { requiresObservable = false; }
	        this.name = name;
	        this.onInvalidate = onInvalidate;
	        this.errorHandler = errorHandler;
	        this.requiresObservable = requiresObservable;
	        this.observing = []; // nodes we are looking at. Our value depends on these nodes
	        this.newObserving = [];
	        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
	        this.diffValue = 0;
	        this.runId = 0;
	        this.unboundDepsCount = 0;
	        this.__mapid = "#" + getNextId();
	        this.isDisposed = false;
	        this._isScheduled = false;
	        this._isTrackPending = false;
	        this._isRunning = false;
	        this.isTracing = TraceMode.NONE;
	    }
	    Reaction.prototype.onBecomeStale = function () {
	        this.schedule();
	    };
	    Reaction.prototype.schedule = function () {
	        if (!this._isScheduled) {
	            this._isScheduled = true;
	            globalState.pendingReactions.push(this);
	            runReactions();
	        }
	    };
	    Reaction.prototype.isScheduled = function () {
	        return this._isScheduled;
	    };
	    /**
	     * internal, use schedule() if you intend to kick off a reaction
	     */
	    Reaction.prototype.runReaction = function () {
	        if (!this.isDisposed) {
	            startBatch();
	            this._isScheduled = false;
	            if (shouldCompute(this)) {
	                this._isTrackPending = true;
	                try {
	                    this.onInvalidate();
	                    if (this._isTrackPending &&
	                        isSpyEnabled() &&
	                        ("production") !== "production") {
	                        // onInvalidate didn't trigger track right away..
	                        spyReport({
	                            name: this.name,
	                            type: "scheduled-reaction"
	                        });
	                    }
	                }
	                catch (e) {
	                    this.reportExceptionInDerivation(e);
	                }
	            }
	            endBatch();
	        }
	    };
	    Reaction.prototype.track = function (fn) {
	        if (this.isDisposed) {
	            return;
	            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
	        }
	        startBatch();
	        var notify = isSpyEnabled();
	        var startTime;
	        if (notify && ("production") !== "production") {
	            startTime = Date.now();
	            spyReportStart({
	                name: this.name,
	                type: "reaction"
	            });
	        }
	        this._isRunning = true;
	        var result = trackDerivedFunction(this, fn, undefined);
	        this._isRunning = false;
	        this._isTrackPending = false;
	        if (this.isDisposed) {
	            // disposed during last run. Clean up everything that was bound after the dispose call.
	            clearObserving(this);
	        }
	        if (isCaughtException(result))
	            this.reportExceptionInDerivation(result.cause);
	        if (notify && ("production") !== "production") {
	            spyReportEnd({
	                time: Date.now() - startTime
	            });
	        }
	        endBatch();
	    };
	    Reaction.prototype.reportExceptionInDerivation = function (error) {
	        var _this = this;
	        if (this.errorHandler) {
	            this.errorHandler(error, this);
	            return;
	        }
	        if (globalState.disableErrorBoundaries)
	            throw error;
	        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
	        if (globalState.suppressReactionErrors) {
	            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
	        }
	        else {
	            console.error(message, error);
	            /** If debugging brought you here, please, read the above message :-). Tnx! */
	        }
	        if (isSpyEnabled()) {
	            spyReport({
	                type: "error",
	                name: this.name,
	                message: message,
	                error: "" + error
	            });
	        }
	        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
	    };
	    Reaction.prototype.dispose = function () {
	        if (!this.isDisposed) {
	            this.isDisposed = true;
	            if (!this._isRunning) {
	                // if disposed while running, clean up later. Maybe not optimal, but rare case
	                startBatch();
	                clearObserving(this);
	                endBatch();
	            }
	        }
	    };
	    Reaction.prototype.getDisposer = function () {
	        var r = this.dispose.bind(this);
	        r[$mobx] = this;
	        return r;
	    };
	    Reaction.prototype.toString = function () {
	        return "Reaction[" + this.name + "]";
	    };
	    Reaction.prototype.trace = function (enterBreakPoint) {
	        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
	        trace(this, enterBreakPoint);
	    };
	    return Reaction;
	}());
	function onReactionError(handler) {
	    globalState.globalReactionErrorHandlers.push(handler);
	    return function () {
	        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
	        if (idx >= 0)
	            globalState.globalReactionErrorHandlers.splice(idx, 1);
	    };
	}
	/**
	 * Magic number alert!
	 * Defines within how many times a reaction is allowed to re-trigger itself
	 * until it is assumed that this is gonna be a never ending loop...
	 */
	var MAX_REACTION_ITERATIONS = 100;
	var reactionScheduler = function (f) { return f(); };
	function runReactions() {
	    // Trampolining, if runReactions are already running, new reactions will be picked up
	    if (globalState.inBatch > 0 || globalState.isRunningReactions)
	        return;
	    reactionScheduler(runReactionsHelper);
	}
	function runReactionsHelper() {
	    globalState.isRunningReactions = true;
	    var allReactions = globalState.pendingReactions;
	    var iterations = 0;
	    // While running reactions, new reactions might be triggered.
	    // Hence we work with two variables and check whether
	    // we converge to no remaining reactions after a while.
	    while (allReactions.length > 0) {
	        if (++iterations === MAX_REACTION_ITERATIONS) {
	            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
	                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
	            allReactions.splice(0); // clear reactions
	        }
	        var remainingReactions = allReactions.splice(0);
	        for (var i = 0, l = remainingReactions.length; i < l; i++)
	            remainingReactions[i].runReaction();
	    }
	    globalState.isRunningReactions = false;
	}
	var isReaction = createInstanceofPredicate("Reaction", Reaction);
	function setReactionScheduler(fn) {
	    var baseScheduler = reactionScheduler;
	    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
	}
	
	function isSpyEnabled() {
	    return ("production") !== "production" && !!globalState.spyListeners.length;
	}
	function spyReport(event) {
	    if (true)
	        return; // dead code elimination can do the rest
	    if (!globalState.spyListeners.length)
	        return;
	    var listeners = globalState.spyListeners;
	    for (var i = 0, l = listeners.length; i < l; i++)
	        listeners[i](event);
	}
	function spyReportStart(event) {
	    if (true)
	        return;
	    var change = __assign(__assign({}, event), { spyReportStart: true });
	    spyReport(change);
	}
	var END_EVENT = { spyReportEnd: true };
	function spyReportEnd(change) {
	    if (true)
	        return;
	    if (change)
	        spyReport(__assign(__assign({}, change), { spyReportEnd: true }));
	    else
	        spyReport(END_EVENT);
	}
	function spy(listener) {
	    if (true) {
	        console.warn("[mobx.spy] Is a no-op in production builds");
	        return function () { };
	    }
	    else {
	        globalState.spyListeners.push(listener);
	        return once(function () {
	            globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
	        });
	    }
	}
	
	function dontReassignFields() {
	    fail(("production") !== "production" && "@action fields are not reassignable");
	}
	function namedActionDecorator(name) {
	    return function (target, prop, descriptor) {
	        if (descriptor) {
	            if (false) {
	                return fail("@action cannot be used with getters");
	            }
	            // babel / typescript
	            // @action method() { }
	            if (descriptor.value) {
	                // typescript
	                return {
	                    value: createAction(name, descriptor.value),
	                    enumerable: false,
	                    configurable: true,
	                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
	                };
	            }
	            // babel only: @action method = () => {}
	            var initializer_1 = descriptor.initializer;
	            return {
	                enumerable: false,
	                configurable: true,
	                writable: true,
	                initializer: function () {
	                    // N.B: we can't immediately invoke initializer; this would be wrong
	                    return createAction(name, initializer_1.call(this));
	                }
	            };
	        }
	        // bound instance methods
	        return actionFieldDecorator(name).apply(this, arguments);
	    };
	}
	function actionFieldDecorator(name) {
	    // Simple property that writes on first invocation to the current instance
	    return function (target, prop, descriptor) {
	        Object.defineProperty(target, prop, {
	            configurable: true,
	            enumerable: false,
	            get: function () {
	                return undefined;
	            },
	            set: function (value) {
	                addHiddenProp(this, prop, action(name, value));
	            }
	        });
	    };
	}
	function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
	    if (applyToInstance === true) {
	        defineBoundAction(target, propertyName, descriptor.value);
	        return null;
	    }
	    if (descriptor) {
	        // if (descriptor.value)
	        // Typescript / Babel: @action.bound method() { }
	        // also: babel @action.bound method = () => {}
	        return {
	            configurable: true,
	            enumerable: false,
	            get: function () {
	                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
	                return this[propertyName];
	            },
	            set: dontReassignFields
	        };
	    }
	    // field decorator Typescript @action.bound method = () => {}
	    return {
	        enumerable: false,
	        configurable: true,
	        set: function (v) {
	            defineBoundAction(this, propertyName, v);
	        },
	        get: function () {
	            return undefined;
	        }
	    };
	}
	
	var action = function action(arg1, arg2, arg3, arg4) {
	    // action(fn() {})
	    if (arguments.length === 1 && typeof arg1 === "function")
	        return createAction(arg1.name || "<unnamed action>", arg1);
	    // action("name", fn() {})
	    if (arguments.length === 2 && typeof arg2 === "function")
	        return createAction(arg1, arg2);
	    // @action("name") fn() {}
	    if (arguments.length === 1 && typeof arg1 === "string")
	        return namedActionDecorator(arg1);
	    // @action fn() {}
	    if (arg4 === true) {
	        // apply to instance immediately
	        addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
	    }
	    else {
	        return namedActionDecorator(arg2).apply(null, arguments);
	    }
	};
	action.bound = boundActionDecorator;
	function runInAction(arg1, arg2) {
	    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
	    var fn = typeof arg1 === "function" ? arg1 : arg2;
	    if (false) {
	        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
	        if (typeof actionName !== "string" || !actionName)
	            fail("actions should have valid names, got: '" + actionName + "'");
	    }
	    return executeAction(actionName, fn, this, undefined);
	}
	function isAction(thing) {
	    return typeof thing === "function" && thing.isMobxAction === true;
	}
	function defineBoundAction(target, propertyName, fn) {
	    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
	}
	
	/**
	 * Creates a named reactive view and keeps it alive, so that the view is always
	 * updated if one of the dependencies changes, even when the view is not further used by something else.
	 * @param view The reactive view
	 * @returns disposer function, which can be used to stop the view from being updated in the future.
	 */
	function autorun(view, opts) {
	    if (opts === void 0) { opts = EMPTY_OBJECT; }
	    if (false) {
	        invariant(typeof view === "function", "Autorun expects a function as first argument");
	        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
	    }
	    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
	    var runSync = !opts.scheduler && !opts.delay;
	    var reaction;
	    if (runSync) {
	        // normal autorun
	        reaction = new Reaction(name, function () {
	            this.track(reactionRunner);
	        }, opts.onError, opts.requiresObservable);
	    }
	    else {
	        var scheduler_1 = createSchedulerFromOptions(opts);
	        // debounced autorun
	        var isScheduled_1 = false;
	        reaction = new Reaction(name, function () {
	            if (!isScheduled_1) {
	                isScheduled_1 = true;
	                scheduler_1(function () {
	                    isScheduled_1 = false;
	                    if (!reaction.isDisposed)
	                        reaction.track(reactionRunner);
	                });
	            }
	        }, opts.onError, opts.requiresObservable);
	    }
	    function reactionRunner() {
	        view(reaction);
	    }
	    reaction.schedule();
	    return reaction.getDisposer();
	}
	var run = function (f) { return f(); };
	function createSchedulerFromOptions(opts) {
	    return opts.scheduler
	        ? opts.scheduler
	        : opts.delay
	            ? function (f) { return setTimeout(f, opts.delay); }
	            : run;
	}
	function reaction(expression, effect, opts) {
	    if (opts === void 0) { opts = EMPTY_OBJECT; }
	    if (false) {
	        invariant(typeof expression === "function", "First argument to reaction should be a function");
	        invariant(typeof opts === "object", "Third argument of reactions should be an object");
	    }
	    var name = opts.name || "Reaction@" + getNextId();
	    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
	    var runSync = !opts.scheduler && !opts.delay;
	    var scheduler = createSchedulerFromOptions(opts);
	    var firstTime = true;
	    var isScheduled = false;
	    var value;
	    var equals = opts.compareStructural
	        ? comparer.structural
	        : opts.equals || comparer.default;
	    var r = new Reaction(name, function () {
	        if (firstTime || runSync) {
	            reactionRunner();
	        }
	        else if (!isScheduled) {
	            isScheduled = true;
	            scheduler(reactionRunner);
	        }
	    }, opts.onError, opts.requiresObservable);
	    function reactionRunner() {
	        isScheduled = false; // Q: move into reaction runner?
	        if (r.isDisposed)
	            return;
	        var changed = false;
	        r.track(function () {
	            var nextValue = expression(r);
	            changed = firstTime || !equals(value, nextValue);
	            value = nextValue;
	        });
	        if (firstTime && opts.fireImmediately)
	            effectAction(value, r);
	        if (!firstTime && changed === true)
	            effectAction(value, r);
	        if (firstTime)
	            firstTime = false;
	    }
	    r.schedule();
	    return r.getDisposer();
	}
	function wrapErrorHandler(errorHandler, baseFn) {
	    return function () {
	        try {
	            return baseFn.apply(this, arguments);
	        }
	        catch (e) {
	            errorHandler.call(this, e);
	        }
	    };
	}
	
	function onBecomeObserved(thing, arg2, arg3) {
	    return interceptHook("onBecomeObserved", thing, arg2, arg3);
	}
	function onBecomeUnobserved(thing, arg2, arg3) {
	    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
	}
	function interceptHook(hook, thing, arg2, arg3) {
	    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
	    var cb = typeof arg3 === "function" ? arg3 : arg2;
	    var listenersKey = hook + "Listeners";
	    if (atom[listenersKey]) {
	        atom[listenersKey].add(cb);
	    }
	    else {
	        atom[listenersKey] = new Set([cb]);
	    }
	    var orig = atom[hook];
	    if (typeof orig !== "function")
	        return fail(("production") !== "production" && "Not an atom that can be (un)observed");
	    return function () {
	        var hookListeners = atom[listenersKey];
	        if (hookListeners) {
	            hookListeners.delete(cb);
	            if (hookListeners.size === 0) {
	                delete atom[listenersKey];
	            }
	        }
	    };
	}
	
	function configure(options) {
	    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
	    if (options.isolateGlobalState === true) {
	        isolateGlobalState();
	    }
	    if (enforceActions !== undefined) {
	        if (typeof enforceActions === "boolean" || enforceActions === "strict")
	            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
	        var ea = void 0;
	        switch (enforceActions) {
	            case true:
	            case "observed":
	                ea = true;
	                break;
	            case false:
	            case "never":
	                ea = false;
	                break;
	            case "strict":
	            case "always":
	                ea = "strict";
	                break;
	            default:
	                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
	        }
	        globalState.enforceActions = ea;
	        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
	    }
	    if (computedRequiresReaction !== undefined) {
	        globalState.computedRequiresReaction = !!computedRequiresReaction;
	    }
	    if (reactionRequiresObservable !== undefined) {
	        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
	    }
	    if (observableRequiresReaction !== undefined) {
	        globalState.observableRequiresReaction = !!observableRequiresReaction;
	        globalState.allowStateReads = !globalState.observableRequiresReaction;
	    }
	    if (computedConfigurable !== undefined) {
	        globalState.computedConfigurable = !!computedConfigurable;
	    }
	    if (disableErrorBoundaries !== undefined) {
	        if (disableErrorBoundaries === true)
	            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
	        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
	    }
	    if (reactionScheduler) {
	        setReactionScheduler(reactionScheduler);
	    }
	}
	
	function decorate(thing, decorators) {
	    ("production") !== "production" &&
	        invariant(isPlainObject(decorators), "Decorators should be a key value map");
	    var target = typeof thing === "function" ? thing.prototype : thing;
	    var _loop_1 = function (prop) {
	        var propertyDecorators = decorators[prop];
	        if (!Array.isArray(propertyDecorators)) {
	            propertyDecorators = [propertyDecorators];
	        }
	        ("production") !== "production" &&
	            invariant(propertyDecorators.every(function (decorator) { return typeof decorator === "function"; }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
	        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
	        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) { return decorator(target, prop, accDescriptor); }, descriptor);
	        if (newDescriptor)
	            Object.defineProperty(target, prop, newDescriptor);
	    };
	    for (var prop in decorators) {
	        _loop_1(prop);
	    }
	    return thing;
	}
	
	function extendObservable(target, properties, decorators, options) {
	    if (false) {
	        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
	        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
	        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
	    }
	    options = asCreateObservableOptions(options);
	    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
	    initializeInstance(target); // Fixes #1740
	    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
	    if (properties)
	        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
	    return target;
	}
	function getDefaultDecoratorFromObjectOptions(options) {
	    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
	}
	function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
	    var e_1, _a, e_2, _b;
	    if (false) {
	        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
	        if (decorators) {
	            var keys = getPlainObjectKeys(decorators);
	            try {
	                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
	                    var key = keys_1_1.value;
	                    if (!(key in properties))
	                        fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
	                }
	            }
	            catch (e_1_1) { e_1 = { error: e_1_1 }; }
	            finally {
	                try {
	                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
	                }
	                finally { if (e_1) throw e_1.error; }
	            }
	        }
	    }
	    startBatch();
	    try {
	        var keys = getPlainObjectKeys(properties);
	        try {
	            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
	                var key = keys_2_1.value;
	                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
	                if (false) {
	                    if (!isPlainObject(properties))
	                        fail("'extendObservabe' only accepts plain objects as second argument");
	                    if (Object.getOwnPropertyDescriptor(target, key))
	                        fail("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + stringifyKey(key) + "' already exists on '" + target + "'");
	                    if (isComputed(descriptor.value))
	                        fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
	                }
	                var decorator = decorators && key in decorators
	                    ? decorators[key]
	                    : descriptor.get
	                        ? computedDecorator
	                        : defaultDecorator;
	                if (false)
	                    fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
	                var resultDescriptor = decorator(target, key, descriptor, true);
	                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
	                )
	                    Object.defineProperty(target, key, resultDescriptor);
	            }
	        }
	        catch (e_2_1) { e_2 = { error: e_2_1 }; }
	        finally {
	            try {
	                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
	            }
	            finally { if (e_2) throw e_2.error; }
	        }
	    }
	    finally {
	        endBatch();
	    }
	}
	
	function getDependencyTree(thing, property) {
	    return nodeToDependencyTree(getAtom(thing, property));
	}
	function nodeToDependencyTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (node.observing && node.observing.length > 0)
	        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
	    return result;
	}
	function getObserverTree(thing, property) {
	    return nodeToObserverTree(getAtom(thing, property));
	}
	function nodeToObserverTree(node) {
	    var result = {
	        name: node.name
	    };
	    if (hasObservers(node))
	        result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
	    return result;
	}
	
	var generatorId = 0;
	function FlowCancellationError() {
	    this.message = "FLOW_CANCELLED";
	}
	FlowCancellationError.prototype = Object.create(Error.prototype);
	function isFlowCancellationError(error) {
	    return error instanceof FlowCancellationError;
	}
	function flow(generator) {
	    if (arguments.length !== 1)
	        fail(!!("production") && "Flow expects 1 argument and cannot be used as decorator");
	    var name = generator.name || "<unnamed flow>";
	    // Implementation based on https://github.com/tj/co/blob/master/index.js
	    return function () {
	        var ctx = this;
	        var args = arguments;
	        var runId = ++generatorId;
	        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
	        var rejector;
	        var pendingPromise = undefined;
	        var promise = new Promise(function (resolve, reject) {
	            var stepId = 0;
	            rejector = reject;
	            function onFulfilled(res) {
	                pendingPromise = undefined;
	                var ret;
	                try {
	                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
	                }
	                catch (e) {
	                    return reject(e);
	                }
	                next(ret);
	            }
	            function onRejected(err) {
	                pendingPromise = undefined;
	                var ret;
	                try {
	                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
	                }
	                catch (e) {
	                    return reject(e);
	                }
	                next(ret);
	            }
	            function next(ret) {
	                if (ret && typeof ret.then === "function") {
	                    // an async iterator
	                    ret.then(next, reject);
	                    return;
	                }
	                if (ret.done)
	                    return resolve(ret.value);
	                pendingPromise = Promise.resolve(ret.value);
	                return pendingPromise.then(onFulfilled, onRejected);
	            }
	            onFulfilled(undefined); // kick off the process
	        });
	        promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
	            try {
	                if (pendingPromise)
	                    cancelPromise(pendingPromise);
	                // Finally block can return (or yield) stuff..
	                var res = gen.return(undefined);
	                // eat anything that promise would do, it's cancelled!
	                var yieldedPromise = Promise.resolve(res.value);
	                yieldedPromise.then(noop, noop);
	                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
	                // reject our original promise
	                rejector(new FlowCancellationError());
	            }
	            catch (e) {
	                rejector(e); // there could be a throwing finally block
	            }
	        });
	        return promise;
	    };
	}
	function cancelPromise(promise) {
	    if (typeof promise.cancel === "function")
	        promise.cancel();
	}
	
	function interceptReads(thing, propOrHandler, handler) {
	    var target;
	    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
	        target = getAdministration(thing);
	    }
	    else if (isObservableObject(thing)) {
	        if (typeof propOrHandler !== "string")
	            return fail(("production") !== "production" &&
	                "InterceptReads can only be used with a specific property, not with an object in general");
	        target = getAdministration(thing, propOrHandler);
	    }
	    else {
	        return fail(("production") !== "production" &&
	            "Expected observable map, object or array as first array");
	    }
	    if (target.dehancer !== undefined)
	        return fail(("production") !== "production" && "An intercept reader was already established");
	    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
	    return function () {
	        target.dehancer = undefined;
	    };
	}
	
	function intercept(thing, propOrHandler, handler) {
	    if (typeof handler === "function")
	        return interceptProperty(thing, propOrHandler, handler);
	    else
	        return interceptInterceptable(thing, propOrHandler);
	}
	function interceptInterceptable(thing, handler) {
	    return getAdministration(thing).intercept(handler);
	}
	function interceptProperty(thing, property, handler) {
	    return getAdministration(thing, property).intercept(handler);
	}
	
	function _isComputed(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (isObservableObject(value) === false)
	            return false;
	        if (!value[$mobx].values.has(property))
	            return false;
	        var atom = getAtom(value, property);
	        return isComputedValue(atom);
	    }
	    return isComputedValue(value);
	}
	function isComputed(value) {
	    if (arguments.length > 1)
	        return fail(("production") !== "production" &&
	            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
	    return _isComputed(value);
	}
	function isComputedProp(value, propName) {
	    if (typeof propName !== "string")
	        return fail(("production") !== "production" &&
	            "isComputed expected a property name as second argument");
	    return _isComputed(value, propName);
	}
	
	function _isObservable(value, property) {
	    if (value === null || value === undefined)
	        return false;
	    if (property !== undefined) {
	        if (false)
	            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
	        if (isObservableObject(value)) {
	            return value[$mobx].values.has(property);
	        }
	        return false;
	    }
	    // For first check, see #701
	    return (isObservableObject(value) ||
	        !!value[$mobx] ||
	        isAtom(value) ||
	        isReaction(value) ||
	        isComputedValue(value));
	}
	function isObservable(value) {
	    if (arguments.length !== 1)
	        fail(("production") !== "production" &&
	            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
	    return _isObservable(value);
	}
	function isObservableProp(value, propName) {
	    if (typeof propName !== "string")
	        return fail(("production") !== "production" && "expected a property name as second argument");
	    return _isObservable(value, propName);
	}
	
	function keys(obj) {
	    if (isObservableObject(obj)) {
	        return obj[$mobx].getKeys();
	    }
	    if (isObservableMap(obj)) {
	        return Array.from(obj.keys());
	    }
	    if (isObservableSet(obj)) {
	        return Array.from(obj.keys());
	    }
	    if (isObservableArray(obj)) {
	        return obj.map(function (_, index) { return index; });
	    }
	    return fail(("production") !== "production" &&
	        "'keys()' can only be used on observable objects, arrays, sets and maps");
	}
	function values(obj) {
	    if (isObservableObject(obj)) {
	        return keys(obj).map(function (key) { return obj[key]; });
	    }
	    if (isObservableMap(obj)) {
	        return keys(obj).map(function (key) { return obj.get(key); });
	    }
	    if (isObservableSet(obj)) {
	        return Array.from(obj.values());
	    }
	    if (isObservableArray(obj)) {
	        return obj.slice();
	    }
	    return fail(("production") !== "production" &&
	        "'values()' can only be used on observable objects, arrays, sets and maps");
	}
	function entries(obj) {
	    if (isObservableObject(obj)) {
	        return keys(obj).map(function (key) { return [key, obj[key]]; });
	    }
	    if (isObservableMap(obj)) {
	        return keys(obj).map(function (key) { return [key, obj.get(key)]; });
	    }
	    if (isObservableSet(obj)) {
	        return Array.from(obj.entries());
	    }
	    if (isObservableArray(obj)) {
	        return obj.map(function (key, index) { return [index, key]; });
	    }
	    return fail(("production") !== "production" &&
	        "'entries()' can only be used on observable objects, arrays and maps");
	}
	function set(obj, key, value) {
	    if (arguments.length === 2 && !isObservableSet(obj)) {
	        startBatch();
	        var values_1 = key;
	        try {
	            for (var key_1 in values_1)
	                set(obj, key_1, values_1[key_1]);
	        }
	        finally {
	            endBatch();
	        }
	        return;
	    }
	    if (isObservableObject(obj)) {
	        var adm = obj[$mobx];
	        var existingObservable = adm.values.get(key);
	        if (existingObservable) {
	            adm.write(key, value);
	        }
	        else {
	            adm.addObservableProp(key, value, adm.defaultEnhancer);
	        }
	    }
	    else if (isObservableMap(obj)) {
	        obj.set(key, value);
	    }
	    else if (isObservableSet(obj)) {
	        obj.add(key);
	    }
	    else if (isObservableArray(obj)) {
	        if (typeof key !== "number")
	            key = parseInt(key, 10);
	        invariant(key >= 0, "Not a valid index: '" + key + "'");
	        startBatch();
	        if (key >= obj.length)
	            obj.length = key + 1;
	        obj[key] = value;
	        endBatch();
	    }
	    else {
	        return fail(("production") !== "production" &&
	            "'set()' can only be used on observable objects, arrays and maps");
	    }
	}
	function remove(obj, key) {
	    if (isObservableObject(obj)) {
	        obj[$mobx].remove(key);
	    }
	    else if (isObservableMap(obj)) {
	        obj.delete(key);
	    }
	    else if (isObservableSet(obj)) {
	        obj.delete(key);
	    }
	    else if (isObservableArray(obj)) {
	        if (typeof key !== "number")
	            key = parseInt(key, 10);
	        invariant(key >= 0, "Not a valid index: '" + key + "'");
	        obj.splice(key, 1);
	    }
	    else {
	        return fail(("production") !== "production" &&
	            "'remove()' can only be used on observable objects, arrays and maps");
	    }
	}
	function has(obj, key) {
	    if (isObservableObject(obj)) {
	        // return keys(obj).indexOf(key) >= 0
	        var adm = getAdministration(obj);
	        return adm.has(key);
	    }
	    else if (isObservableMap(obj)) {
	        return obj.has(key);
	    }
	    else if (isObservableSet(obj)) {
	        return obj.has(key);
	    }
	    else if (isObservableArray(obj)) {
	        return key >= 0 && key < obj.length;
	    }
	    else {
	        return fail(("production") !== "production" &&
	            "'has()' can only be used on observable objects, arrays and maps");
	    }
	}
	function get(obj, key) {
	    if (!has(obj, key))
	        return undefined;
	    if (isObservableObject(obj)) {
	        return obj[key];
	    }
	    else if (isObservableMap(obj)) {
	        return obj.get(key);
	    }
	    else if (isObservableArray(obj)) {
	        return obj[key];
	    }
	    else {
	        return fail(("production") !== "production" &&
	            "'get()' can only be used on observable objects, arrays and maps");
	    }
	}
	
	function observe(thing, propOrCb, cbOrFire, fireImmediately) {
	    if (typeof cbOrFire === "function")
	        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
	    else
	        return observeObservable(thing, propOrCb, cbOrFire);
	}
	function observeObservable(thing, listener, fireImmediately) {
	    return getAdministration(thing).observe(listener, fireImmediately);
	}
	function observeObservableProperty(thing, property, listener, fireImmediately) {
	    return getAdministration(thing, property).observe(listener, fireImmediately);
	}
	
	var defaultOptions = {
	    detectCycles: true,
	    exportMapsAsObjects: true,
	    recurseEverything: false
	};
	function cache(map, key, value, options) {
	    if (options.detectCycles)
	        map.set(key, value);
	    return value;
	}
	function toJSHelper(source, options, __alreadySeen) {
	    if (!options.recurseEverything && !isObservable(source))
	        return source;
	    if (typeof source !== "object")
	        return source;
	    // Directly return null if source is null
	    if (source === null)
	        return null;
	    // Directly return the Date object itself if contained in the observable
	    if (source instanceof Date)
	        return source;
	    if (isObservableValue(source))
	        return toJSHelper(source.get(), options, __alreadySeen);
	    // make sure we track the keys of the object
	    if (isObservable(source))
	        keys(source);
	    var detectCycles = options.detectCycles === true;
	    if (detectCycles && source !== null && __alreadySeen.has(source)) {
	        return __alreadySeen.get(source);
	    }
	    if (isObservableArray(source) || Array.isArray(source)) {
	        var res_1 = cache(__alreadySeen, source, [], options);
	        var toAdd = source.map(function (value) { return toJSHelper(value, options, __alreadySeen); });
	        res_1.length = toAdd.length;
	        for (var i = 0, l = toAdd.length; i < l; i++)
	            res_1[i] = toAdd[i];
	        return res_1;
	    }
	    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
	        if (options.exportMapsAsObjects === false) {
	            var res_2 = cache(__alreadySeen, source, new Set(), options);
	            source.forEach(function (value) {
	                res_2.add(toJSHelper(value, options, __alreadySeen));
	            });
	            return res_2;
	        }
	        else {
	            var res_3 = cache(__alreadySeen, source, [], options);
	            source.forEach(function (value) {
	                res_3.push(toJSHelper(value, options, __alreadySeen));
	            });
	            return res_3;
	        }
	    }
	    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
	        if (options.exportMapsAsObjects === false) {
	            var res_4 = cache(__alreadySeen, source, new Map(), options);
	            source.forEach(function (value, key) {
	                res_4.set(key, toJSHelper(value, options, __alreadySeen));
	            });
	            return res_4;
	        }
	        else {
	            var res_5 = cache(__alreadySeen, source, {}, options);
	            source.forEach(function (value, key) {
	                res_5[key] = toJSHelper(value, options, __alreadySeen);
	            });
	            return res_5;
	        }
	    }
	    // Fallback to the situation that source is an ObservableObject or a plain object
	    var res = cache(__alreadySeen, source, {}, options);
	    getPlainObjectKeys(source).forEach(function (key) {
	        res[key] = toJSHelper(source[key], options, __alreadySeen);
	    });
	    return res;
	}
	function toJS(source, options) {
	    // backward compatibility
	    if (typeof options === "boolean")
	        options = { detectCycles: options };
	    if (!options)
	        options = defaultOptions;
	    options.detectCycles =
	        options.detectCycles === undefined
	            ? options.recurseEverything === true
	            : options.detectCycles === true;
	    var __alreadySeen;
	    if (options.detectCycles)
	        __alreadySeen = new Map();
	    return toJSHelper(source, options, __alreadySeen);
	}
	
	function trace() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i] = arguments[_i];
	    }
	    var enterBreakPoint = false;
	    if (typeof args[args.length - 1] === "boolean")
	        enterBreakPoint = args.pop();
	    var derivation = getAtomFromArgs(args);
	    if (!derivation) {
	        return fail(("production") !== "production" &&
	            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
	    }
	    if (derivation.isTracing === TraceMode.NONE) {
	        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
	    }
	    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
	}
	function getAtomFromArgs(args) {
	    switch (args.length) {
	        case 0:
	            return globalState.trackingDerivation;
	        case 1:
	            return getAtom(args[0]);
	        case 2:
	            return getAtom(args[0], args[1]);
	    }
	}
	
	/**
	 * During a transaction no views are updated until the end of the transaction.
	 * The transaction will be run synchronously nonetheless.
	 *
	 * @param action a function that updates some reactive state
	 * @returns any value that was returned by the 'action' parameter.
	 */
	function transaction(action, thisArg) {
	    if (thisArg === void 0) { thisArg = undefined; }
	    startBatch();
	    try {
	        return action.apply(thisArg);
	    }
	    finally {
	        endBatch();
	    }
	}
	
	function when(predicate, arg1, arg2) {
	    if (arguments.length === 1 || (arg1 && typeof arg1 === "object"))
	        return whenPromise(predicate, arg1);
	    return _when(predicate, arg1, arg2 || {});
	}
	function _when(predicate, effect, opts) {
	    var timeoutHandle;
	    if (typeof opts.timeout === "number") {
	        timeoutHandle = setTimeout(function () {
	            if (!disposer[$mobx].isDisposed) {
	                disposer();
	                var error = new Error("WHEN_TIMEOUT");
	                if (opts.onError)
	                    opts.onError(error);
	                else
	                    throw error;
	            }
	        }, opts.timeout);
	    }
	    opts.name = opts.name || "When@" + getNextId();
	    var effectAction = createAction(opts.name + "-effect", effect);
	    var disposer = autorun(function (r) {
	        if (predicate()) {
	            r.dispose();
	            if (timeoutHandle)
	                clearTimeout(timeoutHandle);
	            effectAction();
	        }
	    }, opts);
	    return disposer;
	}
	function whenPromise(predicate, opts) {
	    if (false)
	        return fail("the options 'onError' and 'promise' cannot be combined");
	    var cancel;
	    var res = new Promise(function (resolve, reject) {
	        var disposer = _when(predicate, resolve, __assign(__assign({}, opts), { onError: reject }));
	        cancel = function () {
	            disposer();
	            reject("WHEN_CANCELLED");
	        };
	    });
	    res.cancel = cancel;
	    return res;
	}
	
	function getAdm(target) {
	    return target[$mobx];
	}
	function isPropertyKey(val) {
	    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
	}
	// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
	// and skip either the internal values map, or the base object with its property descriptors!
	var objectProxyTraps = {
	    has: function (target, name) {
	        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
	            return true;
	        var adm = getAdm(target);
	        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
	        // TODO: check performance stats!
	        // if (adm.values.get(name as string)) return true
	        if (isPropertyKey(name))
	            return adm.has(name);
	        return name in target;
	    },
	    get: function (target, name) {
	        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
	            return target[name];
	        var adm = getAdm(target);
	        var observable = adm.values.get(name);
	        if (observable instanceof Atom) {
	            var result = observable.get();
	            if (result === undefined) {
	                // This fixes #1796, because deleting a prop that has an
	                // undefined value won't retrigger a observer (no visible effect),
	                // the autorun wouldn't subscribe to future key changes (see also next comment)
	                adm.has(name);
	            }
	            return result;
	        }
	        // make sure we start listening to future keys
	        // note that we only do this here for optimization
	        if (isPropertyKey(name))
	            adm.has(name);
	        return target[name];
	    },
	    set: function (target, name, value) {
	        if (!isPropertyKey(name))
	            return false;
	        set(target, name, value);
	        return true;
	    },
	    deleteProperty: function (target, name) {
	        if (!isPropertyKey(name))
	            return false;
	        var adm = getAdm(target);
	        adm.remove(name);
	        return true;
	    },
	    ownKeys: function (target) {
	        var adm = getAdm(target);
	        adm.keysAtom.reportObserved();
	        return Reflect.ownKeys(target);
	    },
	    preventExtensions: function (target) {
	        fail("Dynamic observable objects cannot be frozen");
	        return false;
	    }
	};
	function createDynamicObservableObject(base) {
	    var proxy = new Proxy(base, objectProxyTraps);
	    base[$mobx].proxy = proxy;
	    return proxy;
	}
	
	function hasInterceptors(interceptable) {
	    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
	}
	function registerInterceptor(interceptable, handler) {
	    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
	    interceptors.push(handler);
	    return once(function () {
	        var idx = interceptors.indexOf(handler);
	        if (idx !== -1)
	            interceptors.splice(idx, 1);
	    });
	}
	function interceptChange(interceptable, change) {
	    var prevU = untrackedStart();
	    try {
	        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
	        var interceptors = __spread((interceptable.interceptors || []));
	        for (var i = 0, l = interceptors.length; i < l; i++) {
	            change = interceptors[i](change);
	            invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
	            if (!change)
	                break;
	        }
	        return change;
	    }
	    finally {
	        untrackedEnd(prevU);
	    }
	}
	
	function hasListeners(listenable) {
	    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
	}
	function registerListener(listenable, handler) {
	    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
	    listeners.push(handler);
	    return once(function () {
	        var idx = listeners.indexOf(handler);
	        if (idx !== -1)
	            listeners.splice(idx, 1);
	    });
	}
	function notifyListeners(listenable, change) {
	    var prevU = untrackedStart();
	    var listeners = listenable.changeListeners;
	    if (!listeners)
	        return;
	    listeners = listeners.slice();
	    for (var i = 0, l = listeners.length; i < l; i++) {
	        listeners[i](change);
	    }
	    untrackedEnd(prevU);
	}
	
	var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
	var arrayTraps = {
	    get: function (target, name) {
	        if (name === $mobx)
	            return target[$mobx];
	        if (name === "length")
	            return target[$mobx].getArrayLength();
	        if (typeof name === "number") {
	            return arrayExtensions.get.call(target, name);
	        }
	        if (typeof name === "string" && !isNaN(name)) {
	            return arrayExtensions.get.call(target, parseInt(name));
	        }
	        if (arrayExtensions.hasOwnProperty(name)) {
	            return arrayExtensions[name];
	        }
	        return target[name];
	    },
	    set: function (target, name, value) {
	        if (name === "length") {
	            target[$mobx].setArrayLength(value);
	        }
	        if (typeof name === "number") {
	            arrayExtensions.set.call(target, name, value);
	        }
	        if (typeof name === "symbol" || isNaN(name)) {
	            target[name] = value;
	        }
	        else {
	            // numeric string
	            arrayExtensions.set.call(target, parseInt(name), value);
	        }
	        return true;
	    },
	    preventExtensions: function (target) {
	        fail("Observable arrays cannot be frozen");
	        return false;
	    }
	};
	function createObservableArray(initialValues, enhancer, name, owned) {
	    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
	    if (owned === void 0) { owned = false; }
	    var adm = new ObservableArrayAdministration(name, enhancer, owned);
	    addHiddenFinalProp(adm.values, $mobx, adm);
	    var proxy = new Proxy(adm.values, arrayTraps);
	    adm.proxy = proxy;
	    if (initialValues && initialValues.length) {
	        var prev = allowStateChangesStart(true);
	        adm.spliceWithArray(0, 0, initialValues);
	        allowStateChangesEnd(prev);
	    }
	    return proxy;
	}
	var ObservableArrayAdministration = /** @class */ (function () {
	    function ObservableArrayAdministration(name, enhancer, owned) {
	        this.owned = owned;
	        this.values = [];
	        this.proxy = undefined;
	        this.lastKnownLength = 0;
	        this.atom = new Atom(name || "ObservableArray@" + getNextId());
	        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
	    }
	    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined)
	            return this.dehancer(value);
	        return value;
	    };
	    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
	        if (this.dehancer !== undefined && values.length > 0)
	            return values.map(this.dehancer);
	        return values;
	    };
	    ObservableArrayAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        if (fireImmediately) {
	            listener({
	                object: this.proxy,
	                type: "splice",
	                index: 0,
	                added: this.values.slice(),
	                addedCount: this.values.length,
	                removed: [],
	                removedCount: 0
	            });
	        }
	        return registerListener(this, listener);
	    };
	    ObservableArrayAdministration.prototype.getArrayLength = function () {
	        this.atom.reportObserved();
	        return this.values.length;
	    };
	    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
	        if (typeof newLength !== "number" || newLength < 0)
	            throw new Error("[mobx.array] Out of range: " + newLength);
	        var currentLength = this.values.length;
	        if (newLength === currentLength)
	            return;
	        else if (newLength > currentLength) {
	            var newItems = new Array(newLength - currentLength);
	            for (var i = 0; i < newLength - currentLength; i++)
	                newItems[i] = undefined; // No Array.fill everywhere...
	            this.spliceWithArray(currentLength, 0, newItems);
	        }
	        else
	            this.spliceWithArray(newLength, currentLength - newLength);
	    };
	    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
	        if (oldLength !== this.lastKnownLength)
	            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
	        this.lastKnownLength += delta;
	    };
	    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this.atom);
	        var length = this.values.length;
	        if (index === undefined)
	            index = 0;
	        else if (index > length)
	            index = length;
	        else if (index < 0)
	            index = Math.max(0, length + index);
	        if (arguments.length === 1)
	            deleteCount = length - index;
	        else if (deleteCount === undefined || deleteCount === null)
	            deleteCount = 0;
	        else
	            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
	        if (newItems === undefined)
	            newItems = EMPTY_ARRAY;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.proxy,
	                type: "splice",
	                index: index,
	                removedCount: deleteCount,
	                added: newItems
	            });
	            if (!change)
	                return EMPTY_ARRAY;
	            deleteCount = change.removedCount;
	            newItems = change.added;
	        }
	        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
	        if (false) {
	            var lengthDelta = newItems.length - deleteCount;
	            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
	        }
	        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
	        if (deleteCount !== 0 || newItems.length !== 0)
	            this.notifyArraySplice(index, newItems, res);
	        return this.dehanceValues(res);
	    };
	    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
	        var _a;
	        if (newItems.length < MAX_SPLICE_SIZE) {
	            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
	        }
	        else {
	            var res = this.values.slice(index, index + deleteCount);
	            this.values = this.values
	                .slice(0, index)
	                .concat(newItems, this.values.slice(index + deleteCount));
	            return res;
	        }
	    };
	    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                object: this.proxy,
	                type: "update",
	                index: index,
	                newValue: newValue,
	                oldValue: oldValue
	            }
	            : null;
	        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
	        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
	        if (notifySpy && ("production") !== "production")
	            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
	        this.atom.reportChanged();
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy && ("production") !== "production")
	            spyReportEnd();
	    };
	    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
	        var notifySpy = !this.owned && isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                object: this.proxy,
	                type: "splice",
	                index: index,
	                removed: removed,
	                added: added,
	                removedCount: removed.length,
	                addedCount: added.length
	            }
	            : null;
	        if (notifySpy && ("production") !== "production")
	            spyReportStart(__assign(__assign({}, change), { name: this.atom.name }));
	        this.atom.reportChanged();
	        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy && ("production") !== "production")
	            spyReportEnd();
	    };
	    return ObservableArrayAdministration;
	}());
	var arrayExtensions = {
	    intercept: function (handler) {
	        return this[$mobx].intercept(handler);
	    },
	    observe: function (listener, fireImmediately) {
	        if (fireImmediately === void 0) { fireImmediately = false; }
	        var adm = this[$mobx];
	        return adm.observe(listener, fireImmediately);
	    },
	    clear: function () {
	        return this.splice(0);
	    },
	    replace: function (newItems) {
	        var adm = this[$mobx];
	        return adm.spliceWithArray(0, adm.values.length, newItems);
	    },
	    /**
	     * Converts this array back to a (shallow) javascript structure.
	     * For a deep clone use mobx.toJS
	     */
	    toJS: function () {
	        return this.slice();
	    },
	    toJSON: function () {
	        // Used by JSON.stringify
	        return this.toJS();
	    },
	    /*
	     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
	     * since these functions alter the inner structure of the array, the have side effects.
	     * Because the have side effects, they should not be used in computed function,
	     * and for that reason the do not call dependencyState.notifyObserved
	     */
	    splice: function (index, deleteCount) {
	        var newItems = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            newItems[_i - 2] = arguments[_i];
	        }
	        var adm = this[$mobx];
	        switch (arguments.length) {
	            case 0:
	                return [];
	            case 1:
	                return adm.spliceWithArray(index);
	            case 2:
	                return adm.spliceWithArray(index, deleteCount);
	        }
	        return adm.spliceWithArray(index, deleteCount, newItems);
	    },
	    spliceWithArray: function (index, deleteCount, newItems) {
	        var adm = this[$mobx];
	        return adm.spliceWithArray(index, deleteCount, newItems);
	    },
	    push: function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this[$mobx];
	        adm.spliceWithArray(adm.values.length, 0, items);
	        return adm.values.length;
	    },
	    pop: function () {
	        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
	    },
	    shift: function () {
	        return this.splice(0, 1)[0];
	    },
	    unshift: function () {
	        var items = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            items[_i] = arguments[_i];
	        }
	        var adm = this[$mobx];
	        adm.spliceWithArray(0, 0, items);
	        return adm.values.length;
	    },
	    reverse: function () {
	        // reverse by default mutates in place before returning the result
	        // which makes it both a 'derivation' and a 'mutation'.
	        // so we deviate from the default and just make it an dervitation
	        if (false) {
	            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
	        }
	        var clone = this.slice();
	        return clone.reverse.apply(clone, arguments);
	    },
	    sort: function (compareFn) {
	        // sort by default mutates in place before returning the result
	        // which goes against all good practices. Let's not change the array in place!
	        if (false) {
	            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
	        }
	        var clone = this.slice();
	        return clone.sort.apply(clone, arguments);
	    },
	    remove: function (value) {
	        var adm = this[$mobx];
	        var idx = adm.dehanceValues(adm.values).indexOf(value);
	        if (idx > -1) {
	            this.splice(idx, 1);
	            return true;
	        }
	        return false;
	    },
	    get: function (index) {
	        var adm = this[$mobx];
	        if (adm) {
	            if (index < adm.values.length) {
	                adm.atom.reportObserved();
	                return adm.dehanceValue(adm.values[index]);
	            }
	            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
	        }
	        return undefined;
	    },
	    set: function (index, newValue) {
	        var adm = this[$mobx];
	        var values = adm.values;
	        if (index < values.length) {
	            // update at index in range
	            checkIfStateModificationsAreAllowed(adm.atom);
	            var oldValue = values[index];
	            if (hasInterceptors(adm)) {
	                var change = interceptChange(adm, {
	                    type: "update",
	                    object: adm.proxy,
	                    index: index,
	                    newValue: newValue
	                });
	                if (!change)
	                    return;
	                newValue = change.newValue;
	            }
	            newValue = adm.enhancer(newValue, oldValue);
	            var changed = newValue !== oldValue;
	            if (changed) {
	                values[index] = newValue;
	                adm.notifyArrayChildUpdate(index, newValue, oldValue);
	            }
	        }
	        else if (index === values.length) {
	            // add a new item
	            adm.spliceWithArray(index, 0, [newValue]);
	        }
	        else {
	            // out of bounds
	            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
	        }
	    }
	};
	[
	    "concat",
	    "every",
	    "filter",
	    "forEach",
	    "indexOf",
	    "join",
	    "lastIndexOf",
	    "map",
	    "reduce",
	    "reduceRight",
	    "slice",
	    "some",
	    "toString",
	    "toLocaleString"
	].forEach(function (funcName) {
	    arrayExtensions[funcName] = function () {
	        var adm = this[$mobx];
	        adm.atom.reportObserved();
	        var res = adm.dehanceValues(adm.values);
	        return res[funcName].apply(res, arguments);
	    };
	});
	var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
	function isObservableArray(thing) {
	    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
	}
	
	var _a;
	var ObservableMapMarker = {};
	// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
	// But: https://github.com/mobxjs/mobx/issues/1556
	var ObservableMap = /** @class */ (function () {
	    function ObservableMap(initialData, enhancer, name) {
	        if (enhancer === void 0) { enhancer = deepEnhancer; }
	        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
	        this.enhancer = enhancer;
	        this.name = name;
	        this[_a] = ObservableMapMarker;
	        this._keysAtom = createAtom(this.name + ".keys()");
	        this[Symbol.toStringTag] = "Map";
	        if (typeof Map !== "function") {
	            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
	        }
	        this._data = new Map();
	        this._hasMap = new Map();
	        this.merge(initialData);
	    }
	    ObservableMap.prototype._has = function (key) {
	        return this._data.has(key);
	    };
	    ObservableMap.prototype.has = function (key) {
	        var _this = this;
	        if (!globalState.trackingDerivation)
	            return this._has(key);
	        var entry = this._hasMap.get(key);
	        if (!entry) {
	            // todo: replace with atom (breaking change)
	            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
	            this._hasMap.set(key, newEntry);
	            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
	        }
	        return entry.get();
	    };
	    ObservableMap.prototype.set = function (key, value) {
	        var hasKey = this._has(key);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: hasKey ? "update" : "add",
	                object: this,
	                newValue: value,
	                name: key
	            });
	            if (!change)
	                return this;
	            value = change.newValue;
	        }
	        if (hasKey) {
	            this._updateValue(key, value);
	        }
	        else {
	            this._addValue(key, value);
	        }
	        return this;
	    };
	    ObservableMap.prototype.delete = function (key) {
	        var _this = this;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "delete",
	                object: this,
	                name: key
	            });
	            if (!change)
	                return false;
	        }
	        if (this._has(key)) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "delete",
	                    object: this,
	                    oldValue: this._data.get(key).value,
	                    name: key
	                }
	                : null;
	            if (notifySpy && ("production") !== "production")
	                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
	            transaction(function () {
	                _this._keysAtom.reportChanged();
	                _this._updateHasMapEntry(key, false);
	                var observable = _this._data.get(key);
	                observable.setNewValue(undefined);
	                _this._data.delete(key);
	            });
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && ("production") !== "production")
	                spyReportEnd();
	            return true;
	        }
	        return false;
	    };
	    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
	        var entry = this._hasMap.get(key);
	        if (entry) {
	            entry.setNewValue(value);
	        }
	    };
	    ObservableMap.prototype._updateValue = function (key, newValue) {
	        var observable = this._data.get(key);
	        newValue = observable.prepareNewValue(newValue);
	        if (newValue !== globalState.UNCHANGED) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "update",
	                    object: this,
	                    oldValue: observable.value,
	                    name: key,
	                    newValue: newValue
	                }
	                : null;
	            if (notifySpy && ("production") !== "production")
	                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && ("production") !== "production")
	                spyReportEnd();
	        }
	    };
	    ObservableMap.prototype._addValue = function (key, newValue) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this._keysAtom);
	        transaction(function () {
	            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
	            _this._data.set(key, observable);
	            newValue = observable.value; // value might have been changed
	            _this._updateHasMapEntry(key, true);
	            _this._keysAtom.reportChanged();
	        });
	        var notifySpy = isSpyEnabled();
	        var notify = hasListeners(this);
	        var change = notify || notifySpy
	            ? {
	                type: "add",
	                object: this,
	                name: key,
	                newValue: newValue
	            }
	            : null;
	        if (notifySpy && ("production") !== "production")
	            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy && ("production") !== "production")
	            spyReportEnd();
	    };
	    ObservableMap.prototype.get = function (key) {
	        if (this.has(key))
	            return this.dehanceValue(this._data.get(key).get());
	        return this.dehanceValue(undefined);
	    };
	    ObservableMap.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined) {
	            return this.dehancer(value);
	        }
	        return value;
	    };
	    ObservableMap.prototype.keys = function () {
	        this._keysAtom.reportObserved();
	        return this._data.keys();
	    };
	    ObservableMap.prototype.values = function () {
	        var self = this;
	        var nextIndex = 0;
	        var keys = Array.from(this.keys());
	        return makeIterable({
	            next: function () {
	                return nextIndex < keys.length
	                    ? { value: self.get(keys[nextIndex++]), done: false }
	                    : { done: true };
	            }
	        });
	    };
	    ObservableMap.prototype.entries = function () {
	        var self = this;
	        var nextIndex = 0;
	        var keys = Array.from(this.keys());
	        return makeIterable({
	            next: function () {
	                if (nextIndex < keys.length) {
	                    var key = keys[nextIndex++];
	                    return {
	                        value: [key, self.get(key)],
	                        done: false
	                    };
	                }
	                return { done: true };
	            }
	        });
	    };
	    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
	        return this.entries();
	    };
	    ObservableMap.prototype.forEach = function (callback, thisArg) {
	        var e_1, _b;
	        try {
	            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
	                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
	                callback.call(thisArg, value, key, this);
	            }
	        }
	        catch (e_1_1) { e_1 = { error: e_1_1 }; }
	        finally {
	            try {
	                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
	            }
	            finally { if (e_1) throw e_1.error; }
	        }
	    };
	    /** Merge another object into this object, returns this. */
	    ObservableMap.prototype.merge = function (other) {
	        var _this = this;
	        if (isObservableMap(other)) {
	            other = other.toJS();
	        }
	        transaction(function () {
	            if (isPlainObject(other))
	                getPlainObjectKeys(other).forEach(function (key) { return _this.set(key, other[key]); });
	            else if (Array.isArray(other))
	                other.forEach(function (_b) {
	                    var _c = __read(_b, 2), key = _c[0], value = _c[1];
	                    return _this.set(key, value);
	                });
	            else if (isES6Map(other)) {
	                if (other.constructor !== Map)
	                    fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
	                other.forEach(function (value, key) { return _this.set(key, value); });
	            }
	            else if (other !== null && other !== undefined)
	                fail("Cannot initialize map from " + other);
	        });
	        return this;
	    };
	    ObservableMap.prototype.clear = function () {
	        var _this = this;
	        transaction(function () {
	            untracked(function () {
	                var e_2, _b;
	                try {
	                    for (var _c = __values(_this.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
	                        var key = _d.value;
	                        _this.delete(key);
	                    }
	                }
	                catch (e_2_1) { e_2 = { error: e_2_1 }; }
	                finally {
	                    try {
	                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
	                    }
	                    finally { if (e_2) throw e_2.error; }
	                }
	            });
	        });
	    };
	    ObservableMap.prototype.replace = function (values) {
	        var _this = this;
	        transaction(function () {
	            // grab all the keys that are present in the new map but not present in the current map
	            // and delete them from the map, then merge the new map
	            // this will cause reactions only on changed values
	            var newKeys = getMapLikeKeys(values);
	            var oldKeys = Array.from(_this.keys());
	            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
	            missingKeys.forEach(function (k) { return _this.delete(k); });
	            _this.merge(values);
	        });
	        return this;
	    };
	    Object.defineProperty(ObservableMap.prototype, "size", {
	        get: function () {
	            this._keysAtom.reportObserved();
	            return this._data.size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns a plain object that represents this map.
	     * Note that all the keys being stringified.
	     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
	     */
	    ObservableMap.prototype.toPOJO = function () {
	        var e_3, _b;
	        var res = {};
	        try {
	            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
	                var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
	                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
	                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
	            }
	        }
	        catch (e_3_1) { e_3 = { error: e_3_1 }; }
	        finally {
	            try {
	                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
	            }
	            finally { if (e_3) throw e_3.error; }
	        }
	        return res;
	    };
	    /**
	     * Returns a shallow non observable object clone of this map.
	     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
	     */
	    ObservableMap.prototype.toJS = function () {
	        return new Map(this);
	    };
	    ObservableMap.prototype.toJSON = function () {
	        // Used by JSON.stringify
	        return this.toPOJO();
	    };
	    ObservableMap.prototype.toString = function () {
	        var _this = this;
	        return (this.name +
	            "[{ " +
	            Array.from(this.keys())
	                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
	                .join(", ") +
	            " }]");
	    };
	    /**
	     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
	     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
	     * for callback details
	     */
	    ObservableMap.prototype.observe = function (listener, fireImmediately) {
	        ("production") !== "production" &&
	            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
	        return registerListener(this, listener);
	    };
	    ObservableMap.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    return ObservableMap;
	}());
	/* 'var' fixes small-build issue */
	var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
	
	var _a$1;
	var ObservableSetMarker = {};
	var ObservableSet = /** @class */ (function () {
	    function ObservableSet(initialData, enhancer, name) {
	        if (enhancer === void 0) { enhancer = deepEnhancer; }
	        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
	        this.name = name;
	        this[_a$1] = ObservableSetMarker;
	        this._data = new Set();
	        this._atom = createAtom(this.name);
	        this[Symbol.toStringTag] = "Set";
	        if (typeof Set !== "function") {
	            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
	        }
	        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
	        if (initialData) {
	            this.replace(initialData);
	        }
	    }
	    ObservableSet.prototype.dehanceValue = function (value) {
	        if (this.dehancer !== undefined) {
	            return this.dehancer(value);
	        }
	        return value;
	    };
	    ObservableSet.prototype.clear = function () {
	        var _this = this;
	        transaction(function () {
	            untracked(function () {
	                var e_1, _b;
	                try {
	                    for (var _c = __values(_this._data.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
	                        var value = _d.value;
	                        _this.delete(value);
	                    }
	                }
	                catch (e_1_1) { e_1 = { error: e_1_1 }; }
	                finally {
	                    try {
	                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
	                    }
	                    finally { if (e_1) throw e_1.error; }
	                }
	            });
	        });
	    };
	    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
	        var e_2, _b;
	        try {
	            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
	                var value = _d.value;
	                callbackFn.call(thisArg, value, value, this);
	            }
	        }
	        catch (e_2_1) { e_2 = { error: e_2_1 }; }
	        finally {
	            try {
	                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
	            }
	            finally { if (e_2) throw e_2.error; }
	        }
	    };
	    Object.defineProperty(ObservableSet.prototype, "size", {
	        get: function () {
	            this._atom.reportObserved();
	            return this._data.size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ObservableSet.prototype.add = function (value) {
	        var _this = this;
	        checkIfStateModificationsAreAllowed(this._atom);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "add",
	                object: this,
	                newValue: value
	            });
	            if (!change)
	                return this;
	            // TODO: ideally, value = change.value would be done here, so that values can be
	            // changed by interceptor. Same applies for other Set and Map api's.
	        }
	        if (!this.has(value)) {
	            transaction(function () {
	                _this._data.add(_this.enhancer(value, undefined));
	                _this._atom.reportChanged();
	            });
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "add",
	                    object: this,
	                    newValue: value
	                }
	                : null;
	            if (notifySpy && ("production") !== "production")
	                spyReportStart(change);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && ("production") !== "production")
	                spyReportEnd();
	        }
	        return this;
	    };
	    ObservableSet.prototype.delete = function (value) {
	        var _this = this;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "delete",
	                object: this,
	                oldValue: value
	            });
	            if (!change)
	                return false;
	        }
	        if (this.has(value)) {
	            var notifySpy = isSpyEnabled();
	            var notify = hasListeners(this);
	            var change = notify || notifySpy
	                ? {
	                    type: "delete",
	                    object: this,
	                    oldValue: value
	                }
	                : null;
	            if (notifySpy && ("production") !== "production")
	                spyReportStart(__assign(__assign({}, change), { name: this.name }));
	            transaction(function () {
	                _this._atom.reportChanged();
	                _this._data.delete(value);
	            });
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && ("production") !== "production")
	                spyReportEnd();
	            return true;
	        }
	        return false;
	    };
	    ObservableSet.prototype.has = function (value) {
	        this._atom.reportObserved();
	        return this._data.has(this.dehanceValue(value));
	    };
	    ObservableSet.prototype.entries = function () {
	        var nextIndex = 0;
	        var keys = Array.from(this.keys());
	        var values = Array.from(this.values());
	        return makeIterable({
	            next: function () {
	                var index = nextIndex;
	                nextIndex += 1;
	                return index < values.length
	                    ? { value: [keys[index], values[index]], done: false }
	                    : { done: true };
	            }
	        });
	    };
	    ObservableSet.prototype.keys = function () {
	        return this.values();
	    };
	    ObservableSet.prototype.values = function () {
	        this._atom.reportObserved();
	        var self = this;
	        var nextIndex = 0;
	        var observableValues = Array.from(this._data.values());
	        return makeIterable({
	            next: function () {
	                return nextIndex < observableValues.length
	                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
	                    : { done: true };
	            }
	        });
	    };
	    ObservableSet.prototype.replace = function (other) {
	        var _this = this;
	        if (isObservableSet(other)) {
	            other = other.toJS();
	        }
	        transaction(function () {
	            if (Array.isArray(other)) {
	                _this.clear();
	                other.forEach(function (value) { return _this.add(value); });
	            }
	            else if (isES6Set(other)) {
	                _this.clear();
	                other.forEach(function (value) { return _this.add(value); });
	            }
	            else if (other !== null && other !== undefined) {
	                fail("Cannot initialize set from " + other);
	            }
	        });
	        return this;
	    };
	    ObservableSet.prototype.observe = function (listener, fireImmediately) {
	        // TODO 'fireImmediately' can be true?
	        ("production") !== "production" &&
	            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
	        return registerListener(this, listener);
	    };
	    ObservableSet.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableSet.prototype.toJS = function () {
	        return new Set(this);
	    };
	    ObservableSet.prototype.toString = function () {
	        return this.name + "[ " + Array.from(this).join(", ") + " ]";
	    };
	    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
	        return this.values();
	    };
	    return ObservableSet;
	}());
	var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);
	
	var ObservableObjectAdministration = /** @class */ (function () {
	    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
	        if (values === void 0) { values = new Map(); }
	        this.target = target;
	        this.values = values;
	        this.name = name;
	        this.defaultEnhancer = defaultEnhancer;
	        this.keysAtom = new Atom(name + ".keys");
	    }
	    ObservableObjectAdministration.prototype.read = function (key) {
	        return this.values.get(key).get();
	    };
	    ObservableObjectAdministration.prototype.write = function (key, newValue) {
	        var instance = this.target;
	        var observable = this.values.get(key);
	        if (observable instanceof ComputedValue) {
	            observable.set(newValue);
	            return;
	        }
	        // intercept
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                type: "update",
	                object: this.proxy || instance,
	                name: key,
	                newValue: newValue
	            });
	            if (!change)
	                return;
	            newValue = change.newValue;
	        }
	        newValue = observable.prepareNewValue(newValue);
	        // notify spy & observers
	        if (newValue !== globalState.UNCHANGED) {
	            var notify = hasListeners(this);
	            var notifySpy = isSpyEnabled();
	            var change = notify || notifySpy
	                ? {
	                    type: "update",
	                    object: this.proxy || instance,
	                    oldValue: observable.value,
	                    name: key,
	                    newValue: newValue
	                }
	                : null;
	            if (notifySpy && ("production") !== "production")
	                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
	            observable.setNewValue(newValue);
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && ("production") !== "production")
	                spyReportEnd();
	        }
	    };
	    ObservableObjectAdministration.prototype.has = function (key) {
	        var map = this.pendingKeys || (this.pendingKeys = new Map());
	        var entry = map.get(key);
	        if (entry)
	            return entry.get();
	        else {
	            var exists = !!this.values.get(key);
	            // Possible optimization: Don't have a separate map for non existing keys,
	            // but store them in the values map instead, using a special symbol to denote "not existing"
	            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
	            map.set(key, entry);
	            return entry.get(); // read to subscribe
	        }
	    };
	    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
	        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
	        var target = this.target;
	        assertPropertyConfigurable(target, propName);
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.proxy || target,
	                name: propName,
	                type: "add",
	                newValue: newValue
	            });
	            if (!change)
	                return;
	            newValue = change.newValue;
	        }
	        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
	        this.values.set(propName, observable);
	        newValue = observable.value; // observableValue might have changed it
	        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
	        this.notifyPropertyAddition(propName, newValue);
	    };
	    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
	    propName, options) {
	        var target = this.target;
	        options.name = options.name || this.name + "." + stringifyKey(propName);
	        this.values.set(propName, new ComputedValue(options));
	        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
	            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
	    };
	    ObservableObjectAdministration.prototype.remove = function (key) {
	        if (!this.values.has(key))
	            return;
	        var target = this.target;
	        if (hasInterceptors(this)) {
	            var change = interceptChange(this, {
	                object: this.proxy || target,
	                name: key,
	                type: "remove"
	            });
	            if (!change)
	                return;
	        }
	        try {
	            startBatch();
	            var notify = hasListeners(this);
	            var notifySpy = isSpyEnabled();
	            var oldObservable = this.values.get(key);
	            var oldValue = oldObservable && oldObservable.get();
	            oldObservable && oldObservable.set(undefined);
	            // notify key and keyset listeners
	            this.keysAtom.reportChanged();
	            this.values.delete(key);
	            if (this.pendingKeys) {
	                var entry = this.pendingKeys.get(key);
	                if (entry)
	                    entry.set(false);
	            }
	            // delete the prop
	            delete this.target[key];
	            var change = notify || notifySpy
	                ? {
	                    type: "remove",
	                    object: this.proxy || target,
	                    oldValue: oldValue,
	                    name: key
	                }
	                : null;
	            if (notifySpy && ("production") !== "production")
	                spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
	            if (notify)
	                notifyListeners(this, change);
	            if (notifySpy && ("production") !== "production")
	                spyReportEnd();
	        }
	        finally {
	            endBatch();
	        }
	    };
	    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
	        /**
	         * This happens if a property is accessed through the prototype chain, but the property was
	         * declared directly as own property on the prototype.
	         *
	         * E.g.:
	         * class A {
	         * }
	         * extendObservable(A.prototype, { x: 1 })
	         *
	         * classB extens A {
	         * }
	         * console.log(new B().x)
	         *
	         * It is unclear whether the property should be considered 'static' or inherited.
	         * Either use `console.log(A.x)`
	         * or: decorate(A, { x: observable })
	         *
	         * When using decorate, the property will always be redeclared as own property on the actual instance
	         */
	        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
	    };
	    /**
	     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
	     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
	     * for callback details
	     */
	    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
	        ("production") !== "production" &&
	            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
	        return registerListener(this, callback);
	    };
	    ObservableObjectAdministration.prototype.intercept = function (handler) {
	        return registerInterceptor(this, handler);
	    };
	    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
	        var notify = hasListeners(this);
	        var notifySpy = isSpyEnabled();
	        var change = notify || notifySpy
	            ? {
	                type: "add",
	                object: this.proxy || this.target,
	                name: key,
	                newValue: newValue
	            }
	            : null;
	        if (notifySpy && ("production") !== "production")
	            spyReportStart(__assign(__assign({}, change), { name: this.name, key: key }));
	        if (notify)
	            notifyListeners(this, change);
	        if (notifySpy && ("production") !== "production")
	            spyReportEnd();
	        if (this.pendingKeys) {
	            var entry = this.pendingKeys.get(key);
	            if (entry)
	                entry.set(true);
	        }
	        this.keysAtom.reportChanged();
	    };
	    ObservableObjectAdministration.prototype.getKeys = function () {
	        var e_1, _a;
	        this.keysAtom.reportObserved();
	        // return Reflect.ownKeys(this.values) as any
	        var res = [];
	        try {
	            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
	                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
	                if (value instanceof ObservableValue)
	                    res.push(key);
	            }
	        }
	        catch (e_1_1) { e_1 = { error: e_1_1 }; }
	        finally {
	            try {
	                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
	            }
	            finally { if (e_1) throw e_1.error; }
	        }
	        return res;
	    };
	    return ObservableObjectAdministration;
	}());
	function asObservableObject(target, name, defaultEnhancer) {
	    if (name === void 0) { name = ""; }
	    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
	    if (Object.prototype.hasOwnProperty.call(target, $mobx))
	        return target[$mobx];
	    ("production") !== "production" &&
	        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
	    if (!isPlainObject(target))
	        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
	    if (!name)
	        name = "ObservableObject@" + getNextId();
	    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
	    addHiddenProp(target, $mobx, adm);
	    return adm;
	}
	var observablePropertyConfigs = Object.create(null);
	var computedPropertyConfigs = Object.create(null);
	function generateObservablePropConfig(propName) {
	    return (observablePropertyConfigs[propName] ||
	        (observablePropertyConfigs[propName] = {
	            configurable: true,
	            enumerable: true,
	            get: function () {
	                return this[$mobx].read(propName);
	            },
	            set: function (v) {
	                this[$mobx].write(propName, v);
	            }
	        }));
	}
	function getAdministrationForComputedPropOwner(owner) {
	    var adm = owner[$mobx];
	    if (!adm) {
	        // because computed props are declared on proty,
	        // the current instance might not have been initialized yet
	        initializeInstance(owner);
	        return owner[$mobx];
	    }
	    return adm;
	}
	function generateComputedPropConfig(propName) {
	    return (computedPropertyConfigs[propName] ||
	        (computedPropertyConfigs[propName] = {
	            configurable: globalState.computedConfigurable,
	            enumerable: false,
	            get: function () {
	                return getAdministrationForComputedPropOwner(this).read(propName);
	            },
	            set: function (v) {
	                getAdministrationForComputedPropOwner(this).write(propName, v);
	            }
	        }));
	}
	var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
	function isObservableObject(thing) {
	    if (isObject(thing)) {
	        // Initializers run lazily when transpiling to babel, so make sure they are run...
	        initializeInstance(thing);
	        return isObservableObjectAdministration(thing[$mobx]);
	    }
	    return false;
	}
	
	function getAtom(thing, property) {
	    if (typeof thing === "object" && thing !== null) {
	        if (isObservableArray(thing)) {
	            if (property !== undefined)
	                fail(("production") !== "production" &&
	                    "It is not possible to get index atoms from arrays");
	            return thing[$mobx].atom;
	        }
	        if (isObservableSet(thing)) {
	            return thing[$mobx];
	        }
	        if (isObservableMap(thing)) {
	            var anyThing = thing;
	            if (property === undefined)
	                return anyThing._keysAtom;
	            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
	            if (!observable)
	                fail(("production") !== "production" &&
	                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
	            return observable;
	        }
	        // Initializers run lazily when transpiling to babel, so make sure they are run...
	        initializeInstance(thing);
	        if (property && !thing[$mobx])
	            thing[property]; // See #1072
	        if (isObservableObject(thing)) {
	            if (!property)
	                return fail(("production") !== "production" && "please specify a property");
	            var observable = thing[$mobx].values.get(property);
	            if (!observable)
	                fail(("production") !== "production" &&
	                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
	            return observable;
	        }
	        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
	            return thing;
	        }
	    }
	    else if (typeof thing === "function") {
	        if (isReaction(thing[$mobx])) {
	            // disposer function
	            return thing[$mobx];
	        }
	    }
	    return fail(("production") !== "production" && "Cannot obtain atom from " + thing);
	}
	function getAdministration(thing, property) {
	    if (!thing)
	        fail("Expecting some object");
	    if (property !== undefined)
	        return getAdministration(getAtom(thing, property));
	    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
	        return thing;
	    if (isObservableMap(thing) || isObservableSet(thing))
	        return thing;
	    // Initializers run lazily when transpiling to babel, so make sure they are run...
	    initializeInstance(thing);
	    if (thing[$mobx])
	        return thing[$mobx];
	    fail(("production") !== "production" && "Cannot obtain administration from " + thing);
	}
	function getDebugName(thing, property) {
	    var named;
	    if (property !== undefined)
	        named = getAtom(thing, property);
	    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
	        named = getAdministration(thing);
	    else
	        named = getAtom(thing); // valid for arrays as well
	    return named.name;
	}
	
	var toString = Object.prototype.toString;
	function deepEqual(a, b, depth) {
	    if (depth === void 0) { depth = -1; }
	    return eq(a, b, depth);
	}
	// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
	// Internal recursive comparison function for `isEqual`.
	function eq(a, b, depth, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b)
	        return a !== 0 || 1 / a === 1 / b;
	    // `null` or `undefined` only equal to itself (strict comparison).
	    if (a == null || b == null)
	        return false;
	    // `NaN`s are equivalent, but non-reflexive.
	    if (a !== a)
	        return b !== b;
	    // Exhaust primitive checks
	    var type = typeof a;
	    if (type !== "function" && type !== "object" && typeof b != "object")
	        return false;
	    // Unwrap any wrapped objects.
	    a = unwrap(a);
	    b = unwrap(b);
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b))
	        return false;
	    switch (className) {
	        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	        case "[object RegExp]":
	        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	        case "[object String]":
	            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	            // equivalent to `new String("5")`.
	            return "" + a === "" + b;
	        case "[object Number]":
	            // `NaN`s are equivalent, but non-reflexive.
	            // Object(NaN) is equivalent to NaN.
	            if (+a !== +a)
	                return +b !== +b;
	            // An `egal` comparison is performed for other numeric values.
	            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	        case "[object Date]":
	        case "[object Boolean]":
	            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	            // millisecond representations. Note that invalid dates with millisecond representations
	            // of `NaN` are not equivalent.
	            return +a === +b;
	        case "[object Symbol]":
	            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
	    }
	    var areArrays = className === "[object Array]";
	    if (!areArrays) {
	        if (typeof a != "object" || typeof b != "object")
	            return false;
	        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	        // from different frames are.
	        var aCtor = a.constructor, bCtor = b.constructor;
	        if (aCtor !== bCtor &&
	            !(typeof aCtor === "function" &&
	                aCtor instanceof aCtor &&
	                typeof bCtor === "function" &&
	                bCtor instanceof bCtor) &&
	            ("constructor" in a && "constructor" in b)) {
	            return false;
	        }
	    }
	    if (depth === 0) {
	        return false;
	    }
	    else if (depth < 0) {
	        depth = -1;
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	        // Linear search. Performance is inversely proportional to the number of
	        // unique nested structures.
	        if (aStack[length] === a)
	            return bStack[length] === b;
	    }
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	        // Compare array lengths to determine if a deep comparison is necessary.
	        length = a.length;
	        if (length !== b.length)
	            return false;
	        // Deep compare the contents, ignoring non-numeric properties.
	        while (length--) {
	            if (!eq(a[length], b[length], depth - 1, aStack, bStack))
	                return false;
	        }
	    }
	    else {
	        // Deep compare objects.
	        var keys = Object.keys(a);
	        var key = void 0;
	        length = keys.length;
	        // Ensure that both objects contain the same number of properties before comparing deep equality.
	        if (Object.keys(b).length !== length)
	            return false;
	        while (length--) {
	            // Deep compare each member
	            key = keys[length];
	            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack)))
	                return false;
	        }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	}
	function unwrap(a) {
	    if (isObservableArray(a))
	        return a.slice();
	    if (isES6Map(a) || isObservableMap(a))
	        return Array.from(a.entries());
	    if (isES6Set(a) || isObservableSet(a))
	        return Array.from(a.entries());
	    return a;
	}
	function has$1(a, key) {
	    return Object.prototype.hasOwnProperty.call(a, key);
	}
	
	function makeIterable(iterator) {
	    iterator[Symbol.iterator] = getSelf;
	    return iterator;
	}
	function getSelf() {
	    return this;
	}
	
	/*
	The only reason for this file to exist is pure horror:
	Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
	it will cause undefined errors (for example because super classes or local variables not being hoisted).
	With this file that will still happen,
	but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
	*/
	
	/**
	 * (c) Michel Weststrate 2015 - 2018
	 * MIT Licensed
	 *
	 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
	 * this is a good place to start:
	 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
	 *
	 * Source folders:
	 * ===============
	 *
	 * - api/     Most of the public static methods exposed by the module can be found here.
	 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
	 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
	 * - utils/   Utility stuff.
	 *
	 */
	if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
	    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
	}
	try {
	    // define process.env if needed
	    // if this is not a production build in the first place
	    // (in which case the expression below would be substituted with 'production')
	    ("production");
	}
	catch (e) {
	    var g = getGlobal();
	    if (typeof process === "undefined")
	        g.process = {};
	    g.process.env = {};
	}
	(function () {
	    function testCodeMinification() { }
	    if (testCodeMinification.name !== "testCodeMinification" &&
	        ("production") !== "production" &&
	        ({"NODE_ENV":"production","PUBLIC_URL":"."}).IGNORE_MOBX_MINIFY_WARNING !== "true") {
	        // trick so it doesn't get replaced
	        var varName = ["process", "env", "NODE_ENV"].join(".");
	        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
	    }
	})();
	if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
	    // See: https://github.com/andykog/mobx-devtools/
	    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
	        spy: spy,
	        extras: {
	            getDebugName: getDebugName
	        },
	        $mobx: $mobx
	    });
	}
	
	exports.$mobx = $mobx;
	exports.FlowCancellationError = FlowCancellationError;
	exports.ObservableMap = ObservableMap;
	exports.ObservableSet = ObservableSet;
	exports.Reaction = Reaction;
	exports._allowStateChanges = allowStateChanges;
	exports._allowStateChangesInsideComputed = allowStateChangesInsideComputed;
	exports._allowStateReadsEnd = allowStateReadsEnd;
	exports._allowStateReadsStart = allowStateReadsStart;
	exports._endAction = _endAction;
	exports._getAdministration = getAdministration;
	exports._getGlobalState = getGlobalState;
	exports._interceptReads = interceptReads;
	exports._isComputingDerivation = isComputingDerivation;
	exports._resetGlobalState = resetGlobalState;
	exports._startAction = _startAction;
	exports.action = action;
	exports.autorun = autorun;
	exports.comparer = comparer;
	exports.computed = computed;
	exports.configure = configure;
	exports.createAtom = createAtom;
	exports.decorate = decorate;
	exports.entries = entries;
	exports.extendObservable = extendObservable;
	exports.flow = flow;
	exports.get = get;
	exports.getAtom = getAtom;
	exports.getDebugName = getDebugName;
	exports.getDependencyTree = getDependencyTree;
	exports.getObserverTree = getObserverTree;
	exports.has = has;
	exports.intercept = intercept;
	exports.isAction = isAction;
	exports.isArrayLike = isArrayLike;
	exports.isBoxedObservable = isObservableValue;
	exports.isComputed = isComputed;
	exports.isComputedProp = isComputedProp;
	exports.isFlowCancellationError = isFlowCancellationError;
	exports.isObservable = isObservable;
	exports.isObservableArray = isObservableArray;
	exports.isObservableMap = isObservableMap;
	exports.isObservableObject = isObservableObject;
	exports.isObservableProp = isObservableProp;
	exports.isObservableSet = isObservableSet;
	exports.keys = keys;
	exports.observable = observable;
	exports.observe = observe;
	exports.onBecomeObserved = onBecomeObserved;
	exports.onBecomeUnobserved = onBecomeUnobserved;
	exports.onReactionError = onReactionError;
	exports.reaction = reaction;
	exports.remove = remove;
	exports.runInAction = runInAction;
	exports.set = set;
	exports.spy = spy;
	exports.toJS = toJS;
	exports.trace = trace;
	exports.transaction = transaction;
	exports.untracked = untracked;
	exports.values = values;
	exports.when = when;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22), (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/star.db6b4396.svg";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var asap = __webpack_require__(8);
	
	function noop() {}
	
	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable
	
	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.
	
	
	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	module.exports = Promise;
	
	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._45 = 0;
	  this._81 = 0;
	  this._65 = null;
	  this._54 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._10 = null;
	Promise._97 = null;
	Promise._61 = noop;
	
	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};
	
	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._81 === 3) {
	    self = self._65;
	  }
	  if (Promise._10) {
	    Promise._10(self);
	  }
	  if (self._81 === 0) {
	    if (self._45 === 0) {
	      self._45 = 1;
	      self._54 = deferred;
	      return;
	    }
	    if (self._45 === 1) {
	      self._45 = 2;
	      self._54 = [self._54, deferred];
	      return;
	    }
	    self._54.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}
	
	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._81 === 1) {
	        resolve(deferred.promise, self._65);
	      } else {
	        reject(deferred.promise, self._65);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._65);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._81 = 3;
	      self._65 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._81 = 1;
	  self._65 = newValue;
	  finale(self);
	}
	
	function reject(self, newValue) {
	  self._81 = 2;
	  self._65 = newValue;
	  if (Promise._97) {
	    Promise._97(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._45 === 1) {
	    handle(self, self._54);
	    self._54 = null;
	  }
	  if (self._45 === 2) {
	    for (var i = 0; i < self._54.length; i++) {
	      handle(self, self._54[i]);
	    }
	    self._54 = null;
	  }
	}
	
	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}
	
	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  if (false) {
	    // This branch is unreachable because this function is only called
	    // in production, but the condition is true only in development.
	    // Therefore if the branch is still here, dead code elimination wasn't
	    // properly applied.
	    // Don't change the message. React DevTools relies on it. Also make sure
	    // this message doesn't occur elsewhere in this function, or it will cause
	    // a false positive.
	    throw new Error('^_^');
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}
	
	if (true) {
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  module.exports = __webpack_require__(26);
	} else {
	  module.exports = require('./cjs/react-dom.development.js');
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}
	
	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;
	
	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}
	
	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	
	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
	
	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);
	
	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.
	
	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396
	
	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}
	
	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;
	
	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}
	
	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html
	
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.
	
	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }
	
	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.
	
	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }
	
	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.
	
	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.
	
	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);
	
	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}
	
	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
	
	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(17);
	
	var _keyboard = __webpack_require__(14);
	
	var _keyboard2 = _interopRequireDefault(_keyboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import CSSProject from './css_project';
	
	
	var App = function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, App);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.sqrt = function () {
	
	      //find slope of high
	      //find where slope line intersects with x
	      //find where function reaches that x
	      //does fn(x)>x? if yes, fn(x) is the new high, otherwise new low
	      //find slope of new high (x2)
	      //find where slope line intersects with x2
	
	      ////////////////////
	
	      var high = 10;
	      var low = 0;
	      var something = high - low > 0.001;
	      var n = prompt("choose a number from 1 to 10");
	
	      while (something) {
	        var avg = (high + low) / 2;
	        var sqrtN = Math.sqrt(n);
	
	        if (sqrtN > avg) low = avg;else high = avg;
	
	        console.log(avg);
	        if (sqrtN == avg) something = false;
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { /*onClick={() => this.sqrt()}*/className: 'container' },
	        _react2.default.createElement(_keyboard2.default, null)
	      );
	    }
	  }]);
	
	  return App;
	}(_react.Component);
	
	exports.default = App;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mobxReact = __webpack_require__(2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _correct = __webpack_require__(33);
	
	var _correct2 = _interopRequireDefault(_correct);
	
	var _star = __webpack_require__(5);
	
	var _star2 = _interopRequireDefault(_star);
	
	__webpack_require__(18);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // source: https://codepen.io/gschier/pen/VKgyaY
	
	
	var KeyboardLetters = function (_Component) {
	  _inherits(KeyboardLetters, _Component);
	
	  function KeyboardLetters(props) {
	    _classCallCheck(this, KeyboardLetters);
	
	    var _this = _possibleConstructorReturn(this, (KeyboardLetters.__proto__ || Object.getPrototypeOf(KeyboardLetters)).call(this, props));
	
	    _this.sendLetterNew = function (e, char) {
	      if (_this.state.currCharObj && _this.state.currCharObj === char) return; //to ensure no more clicks while green
	      //prob
	      var heightProportion = _this.myInput.current.offsetHeight / window.innerHeight;
	      var widthProportion = _this.myInput.current.offsetWidth / window.innerWidth;
	
	      var rect = e.target.getBoundingClientRect();
	      var xCoord = Math.floor(rect.left * widthProportion);
	      var yCoord = Math.floor(rect.top * heightProportion);
	
	      var newState = { currCharObj: char };
	
	      var typedCorrectly = _this.props.sendLetter(e);
	      if (typedCorrectly) {
	        _this.correctLtr.play();
	        newState.starTop = yCoord - 60;
	        newState.starLeft = xCoord;
	      }
	
	      _this.setState(newState);
	
	      setTimeout(function () {
	        //prob
	        _this.setState({
	          currCharObj: "",
	          starTop: null,
	          starLeft: null
	        });
	      }, 1400);
	    };
	
	    _this.sendLetter = function (e, char) {
	      if (_this.state.currCharObj && _this.state.currCharObj === char) return; //to ensure no more clicks while green
	      //prob
	      var heightProportion = _this.myInput.current.offsetHeight / window.innerHeight;
	      var widthProportion = _this.myInput.current.offsetWidth / window.innerWidth;
	
	      var rect = e.target.getBoundingClientRect();
	      var xCoord = Math.floor(rect.left * widthProportion);
	      var yCoord = Math.floor(rect.top * heightProportion);
	
	      _this.setState({
	        currCharObj: char,
	        starTop: yCoord - 60,
	        starLeft: xCoord,
	        starAppear: _this.props.upTo.toLowerCase() === char.toLowerCase() ? true : false
	      });
	
	      var typedCorrectly = _this.props.sendLetter(e);
	      if (typedCorrectly) _this.correctLtr.play();else return;
	
	      setTimeout(function () {
	        //prob
	        _this.setState({
	          currCharObj: "",
	          starTop: null,
	          starLeft: null,
	          starAppear: false
	        });
	      }, 1400);
	    };
	
	    _this.setLang = function () {
	      var lang = _this.engKeyboard;
	      if (/^[a-zA-Z]+$/.test(_this.props.upTo)) {
	        _this.props.Keyboard.changeLang("eng");
	        lang = _this.engKeyboard;
	      } else if (/^[א-ת]+$/.test(_this.props.upTo)) {
	        _this.props.Keyboard.changeLang("heb");
	        lang = _this.hebKeyboard;
	      } else if (/^[\u0600-\u06FF]+$/.test(_this.props.upTo)) {
	        _this.props.Keyboard.changeLang("arb");
	        lang = _this.arbKeyboard;
	      }
	      return lang;
	    };
	
	    _this.setLangAndBoard = function () {
	      var lang = _this.setLang();
	      if (_this.state.currCharObj && _this.state.currCharObj !== _this.props.upTo) return lang;
	
	      for (var i = 0; i < 3; i++) {
	        //3 is number of rows
	        var level = Math.floor(_this.props.Keyboard.progress);
	        var numOfLettersPerRow = level;
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = lang['row' + (i + 1)][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var letter = _step.value;
	
	            if (letter.char.toLowerCase() === _this.props.upTo) {
	              letter.appear = true;
	            } else letter.appear = false;
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
	
	        var counter = 0;
	
	        while (counter < numOfLettersPerRow) {
	          var randIndex = Math.floor(Math.random() * lang['row' + (i + 1)].length);
	          if (lang['row' + (i + 1)][randIndex].appear) continue;
	          lang['row' + (i + 1)][randIndex].appear = true;
	          counter++;
	        }
	      }
	      return lang;
	    };
	
	    _this.state = { currCharObj: "" };
	
	    _this.engKeyboard = {
	      row1: [{ char: 'Q', appear: false }, { char: 'W', appear: false }, { char: 'E', appear: false }, { char: 'R', appear: false }, { char: 'T', appear: false }, { char: 'Y', appear: false }, { char: 'U', appear: false }, { char: 'I', appear: false }, { char: 'O', appear: false }, { char: 'P', appear: false }],
	      row2: [{ char: 'A', appear: false }, { char: 'S', appear: false }, { char: 'D', appear: false }, { char: 'F', appear: false }, { char: 'G', appear: false }, { char: 'H', appear: false }, { char: 'J', appear: false }, { char: 'K', appear: false }, { char: 'L', appear: false }],
	      row3: [{ char: 'Z', appear: false }, { char: 'X', appear: false }, { char: 'C', appear: false }, { char: 'V', appear: false }, { char: 'B', appear: false }, { char: 'N', appear: false }, { char: 'M', appear: false }]
	    };
	    _this.hebKeyboard = {
	      row1: [/*{ char: '/', appear: false },*/{ char: "'", appear: false }, { char: 'ק', appear: false }, { char: 'ר', appear: false }, { char: 'א', appear: false }, { char: 'ט', appear: false }, { char: 'ו', appear: false }, { char: 'ן', appear: false }, { char: 'ם', appear: false }, { char: 'פ', appear: false }],
	      row2: [{ char: 'ש', appear: false }, { char: 'ד', appear: false }, { char: 'ג', appear: false }, { char: 'כ', appear: false }, { char: 'ע', appear: false }, { char: 'י', appear: false }, { char: 'ח', appear: false }, { char: 'ל', appear: false }, { char: 'ך', appear: false }, { char: 'ף', appear: false }],
	      row3: [{ char: 'ז', appear: false }, { char: 'ס', appear: false }, { char: 'ב', appear: false }, { char: 'ה', appear: false }, { char: 'נ', appear: false }, { char: 'מ', appear: false }, { char: 'צ', appear: false }, { char: 'ת', appear: false }, { char: 'ץ', appear: false }]
	    };
	    _this.arbKeyboard = {
	      row1: [{ char: 'ض', appear: false }, { char: 'ص', appear: false }, { char: 'ث', appear: false }, { char: 'ق', appear: false }, { char: 'ف', appear: false }, { char: 'غ', appear: false }, { char: 'ع', appear: false }, { char: 'ه', appear: false }, { char: 'خ', appear: false }, { char: 'ح', appear: false }, { char: 'ج', appear: false }, { char: 'د', appear: false }],
	      row2: [{ char: 'ش', appear: false }, { char: 'س', appear: false }, { char: 'ي', appear: false }, { char: 'ب', appear: false }, { char: 'ل', appear: false }, { char: 'ا', appear: false }, { char: 'ت', appear: false }, { char: 'ن', appear: false }, { char: 'م', appear: false }, { char: 'ك', appear: false }, { char: 'ط', appear: false }],
	      row3: [{ char: 'ئ', appear: false }, { char: 'ء', appear: false }, { char: 'ؤ', appear: false }, { char: 'ر', appear: false }, { char: 'ﻻ', appear: false }, { char: 'ى', appear: false }, { char: 'ة', appear: false }, { char: 'و', appear: false }, { char: 'ز', appear: false }, { char: 'ظ', appear: false }]
	    };
	    _this.correctLtr = new Audio(_correct2.default);
	    _this.myInput = _react2.default.createRef();
	
	    return _this;
	  }
	
	  _createClass(KeyboardLetters, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var lang = this.setLangAndBoard();
	      return _react2.default.createElement(
	        'div',
	        { className: 'keyboard', ref: this.myInput },
	        this.state.starAppear && _react2.default.createElement('img', { src: _star2.default, className: 'letter-star', style: { top: this.state.starTop, left: this.state.starLeft, zIndex: "1000" } }),
	        _react2.default.createElement(
	          'div',
	          { className: 'keyboard__row' },
	          lang.row1.map(function (item) {
	            var kl = ' key--letter ';
	            var x = _this2.props.upTo == item.char.toLowerCase() ? ' ' + kl + ' chosen-right ' : ' ' + kl + ' chosen-wrong ';
	            var y = _this2.props.upTo == item.char.toLowerCase() && ' correct ';
	
	            return _react2.default.createElement(
	              'div',
	              {
	                key: item.char,
	                onClick: function onClick(e) {
	                  return _this2.sendLetter(e, item.char);
	                },
	                className: _this2.state.currCharObj == item.char ? x + y : kl + y,
	                'data-char': item.char },
	              item.appear ? item.char : ''
	            );
	          })
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'keyboard__row' },
	          lang.row2.map(function (item) {
	            var kl = ' key--letter ';
	            var x = _this2.props.upTo == item.char.toLowerCase() ? ' ' + kl + ' chosen-right ' : ' ' + kl + ' chosen-wrong ';
	            var y = _this2.props.upTo == item.char.toLowerCase() && ' correct ';
	
	            return _react2.default.createElement(
	              'div',
	              {
	                key: item.char,
	                onClick: function onClick(e) {
	                  return _this2.sendLetter(e, item.char);
	                },
	                className: _this2.state.currCharObj == item.char ? x + y : kl + y,
	                'data-char': item.char },
	              item.appear ? item.char : ''
	            );
	          }),
	          _react2.default.createElement('div', { className: 'key--double', 'data-key': '222' })
	        ),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'div',
	          { className: 'keyboard__row' },
	          lang.row3.map(function (item) {
	            var kl = ' key--letter ';
	            var x = _this2.props.upTo == item.char.toLowerCase() ? ' ' + kl + ' chosen-right ' : ' ' + kl + ' chosen-wrong ';
	            var y = _this2.props.upTo == item.char.toLowerCase() && ' correct ';
	
	            return _react2.default.createElement(
	              'div',
	              {
	                key: item.char,
	                onClick: function onClick(e) {
	                  return _this2.sendLetter(e, item.char);
	                },
	                className: _this2.state.currCharObj == item.char ? x + y : kl + y,
	                'data-char': item.char },
	              item.appear ? item.char : ''
	            );
	          }),
	          _react2.default.createElement('div', { className: 'key--double', 'data-key': '191' })
	        )
	      );
	    }
	  }]);
	
	  return KeyboardLetters;
	}(_react.Component);
	
	exports.default = (0, _mobxReact.inject)('Keyboard')((0, _mobxReact.observer)(KeyboardLetters));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KeyboardSideKeys = function (_Component) {
	    _inherits(KeyboardSideKeys, _Component);
	
	    function KeyboardSideKeys() {
	        _classCallCheck(this, KeyboardSideKeys);
	
	        return _possibleConstructorReturn(this, (KeyboardSideKeys.__proto__ || Object.getPrototypeOf(KeyboardSideKeys)).apply(this, arguments));
	    }
	
	    _createClass(KeyboardSideKeys, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "keyboard__row keyboard__row--h3" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "key--bottom-left key--word" },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        "fn"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "key--bottom-left key--word key--w1", "data-key": "17" },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        "control"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "key--bottom-left key--word key--w1", "data-key": "18" },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        "option"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "key--bottom-right key--word key--w3", "data-key": "91" },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        "command"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "key--double key--right key--space", "data-key": "32", "data-char": " " },
	                    "\xA0"
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "key--bottom-left key--word key--w3", "data-key": "93-R" },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        "command"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "key--bottom-left key--word key--w1", "data-key": "18-R" },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        "option"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { "data-key": "37", className: "key--arrow" },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        "\u25C0"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "key--double key--arrow--tall", "data-key": "38" },
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        "\u25B2"
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        "\u25BC"
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { "data-key": "39", className: "key--arrow" },
	                    _react2.default.createElement(
	                        "span",
	                        null,
	                        "\u25B6"
	                    )
	                )
	            );
	        }
	    }]);
	
	    return KeyboardSideKeys;
	}(_react.Component);
	
	exports.default = KeyboardSideKeys;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Keyboard = function (_Component) {
	    _inherits(Keyboard, _Component);
	
	    function Keyboard(props) {
	        _classCallCheck(this, Keyboard);
	
	        var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, props));
	
	        _this.state = {
	            zoomedIn: false
	        };
	        return _this;
	    }
	
	    _createClass(Keyboard, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "div",
	                    { className: "keyboard__row keyboard__row--h1" },
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "27", className: "key--word" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "esc"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "112", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F1"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "113", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F2"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "114", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F3"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "115", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F4"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "116", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F5"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "117", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F6"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "118", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F7"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "119", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F8"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "120", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F9"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "121", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F10"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "122", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F11"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "123", className: "key--fn" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "F12"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { "data-key": "n/a", className: "key--word" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "pwr"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "keyboard__row" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "192" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "~"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "`"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "49" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "!"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "1"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "50" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "@"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "2"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "51" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "#"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "3"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "52" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "$"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "4"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "53" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "%"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "5"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "54" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "^"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "6"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "55" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "&"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "7"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "56" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "*"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "8"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "57" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "("
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "9"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "48" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            ")"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "0"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "189" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "_"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "-"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--double", "data-key": "187" },
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "+"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "="
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "key--bottom-right key--word key--w4", "data-key": "8" },
	                        _react2.default.createElement(
	                            "span",
	                            null,
	                            "delete"
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Keyboard;
	}(_react.Component);
	
	exports.default = Keyboard;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(7);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(9);
	
	var _App2 = _interopRequireDefault(_App);
	
	__webpack_require__(19);
	
	var _stores = __webpack_require__(15);
	
	var _stores2 = _interopRequireDefault(_stores);
	
	var _mobxReact = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(
	    _mobxReact.Provider,
	    _stores2.default,
	    _react2.default.createElement(_App2.default, null)
	), document.getElementById('root'));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _mobxReact = __webpack_require__(2);
	
	var _star = __webpack_require__(5);
	
	var _star2 = _interopRequireDefault(_star);
	
	var _confetti = __webpack_require__(32);
	
	var _confetti2 = _interopRequireDefault(_confetti);
	
	var _upload = __webpack_require__(34);
	
	var _upload2 = _interopRequireDefault(_upload);
	
	var _A = __webpack_require__(31);
	
	var _A2 = _interopRequireDefault(_A);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _keyboardLetters = __webpack_require__(10);
	
	var _keyboardLetters2 = _interopRequireDefault(_keyboardLetters);
	
	var _keyboardTopRows = __webpack_require__(12);
	
	var _keyboardTopRows2 = _interopRequireDefault(_keyboardTopRows);
	
	var _keyboardSideKeys = __webpack_require__(11);
	
	var _keyboardSideKeys2 = _interopRequireDefault(_keyboardSideKeys);
	
	var _randomWords = __webpack_require__(25);
	
	var _randomWords2 = _interopRequireDefault(_randomWords);
	
	__webpack_require__(20);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import Confetti from './../images/confetti.webp';
	
	// import Confetti from './../images/confetti2.gif';
	
	
	var Keyboard = function (_Component) {
	    _inherits(Keyboard, _Component);
	
	    function Keyboard(props) {
	        _classCallCheck(this, Keyboard);
	
	        var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, props));
	
	        _this.updateLevel = function (e) {
	            if (_this.props.Keyboard.progress === e.target.value) return;else {
	                _this.props.Keyboard.progress = e.target.value > 4 ? 4 : e.target.value;
	                _this.setState({ progress: 1 });
	            }
	        };
	
	        _this.newWord = function () {
	            var newState = {};
	            if (_this.state.word.length < 2) {
	                newState.valid = false;
	            } else {
	                newState.inputWord = !_this.state.inputWord;
	                newState.valid = true;
	            }
	            _this.setState(newState);
	        };
	
	        _this.fileChangedHandler = function (event) {
	
	            _this.setState({ selectedFile: event.target.files[0] });
	
	            var reader = new FileReader();
	            reader.onloadend = function () {
	                _this.setState({ imagePreviewUrl: reader.result });
	            };
	
	            reader.readAsDataURL(event.target.files[0]);
	        };
	
	        _this.sendLetter = function (e) {
	            if (_this.state.word.length < 1) {
	                _this.setState({ inputWord: true });
	                return;
	            }
	            var typedLtr = e.currentTarget.textContent.toLowerCase();
	
	            var newState = {};
	
	            if (typedLtr === _this.state.word[_this.state.wordSoFar.length]) {
	                var wordSoFar = _this.state.wordSoFar + typedLtr;
	                setTimeout(function () {
	                    newState = {
	                        upTo: _this.state.word[_this.state.wordSoFar.length + 1],
	                        wordSoFar: wordSoFar,
	                        lettersRight: _this.state.lettersRight + 1
	
	                    };
	                    if (_this.state.word === wordSoFar) {
	                        var entireLevelComplete = _this.progress();
	                        if (!entireLevelComplete) newState.complete = true;
	                    }
	
	                    //prob
	                    _this.setState(newState);
	                }, 1400);
	                return true;
	            } else {
	                //prob
	                _this.setState({ lettersWrong: _this.state.lettersWrong + 1 });
	                navigator.vibrate(100);
	                window.navigator.vibrate(100);
	                return false;
	            }
	        };
	
	        _this.progress = function () {
	            var entireLevelComplete = false;
	
	            var newState = {
	                progress: _this.state.progress + 1
	            };
	            if (_this.state.lettersRight / _this.state.lettersWrong > 0.75 && _this.state.progress < 8) {
	                // 8 is num of letters on keyboard... must change!!
	                if (_this.state.progress == _this.props.Keyboard.wordsPerLevel) {
	                    _this.levelComplete.play();
	                    newState.displayLevelUp = true;
	                    entireLevelComplete = true;
	                }
	
	                _this.setState(newState);
	                _this.props.Keyboard.progress = Math.floor(JSON.parse(_this.props.Keyboard.progress) + 1 / _this.props.Keyboard.wordsPerLevel);
	                console.log("this.props.Keyboard.progress", _this.props.Keyboard.progress);
	                console.log("this.state.progress", _this.state.progress);
	                return entireLevelComplete;
	            } else return entireLevelComplete; // this.setState({ progress: this.state.progress - 1 })
	        };
	
	        _this.closeGameOverModal = function () {
	            //are all these really necessary?
	            _this.setState({
	                displayLevelUp: false,
	                lettersRight: 0,
	                lettersWrong: 0,
	                imagePreviewUrl: null,
	                complete: false,
	                inputWord: true,
	                word: "", //new RandomWords({ exactly: 1, maxLength: 4 })[0],
	                wordSoFar: "",
	                upTo: ""
	            });
	        };
	
	        _this.nextLevel = function () {
	            //are all these really necessary?
	            _this.setState({
	                progress: 1,
	                displayLevelUp: false,
	                lettersRight: 0,
	                lettersWrong: 0,
	                imagePreviewUrl: null,
	                complete: false,
	                inputWord: true,
	                word: "", //new RandomWords({ exactly: 1, maxLength: 4 })[0],
	                wordSoFar: "",
	                upTo: ""
	
	            });
	            _this.props.Keyboard.progress = _this.props.Keyboard.progress + 1;
	        };
	
	        _this.setNewWord = function (e) {
	            var word = e && e.target.value ? e.target.value.toLowerCase() : _this.state.word;
	            _this.setState({
	                valid: word.length > 1 ? true : false,
	                word: word,
	                wordSoFar: "",
	                upTo: word.charAt(0)
	            });
	            _this.props.Keyboard.word = word;
	        };
	
	        _this.state = {
	            imgPath: "#",
	            inputWord: true,
	            progress: 1,
	            lettersRight: 0,
	            lettersWrong: 0,
	            complete: false,
	            word: "",
	            wordSoFar: "",
	            upTo: "",
	            valid: true
	        };
	        _this.levelComplete = new Audio(_A2.default);
	
	        return _this;
	    }
	
	    // lang = () => {
	    //     let lang;
	    //     switch (this.props.Keyboard.lang) {
	    //         case "heb":
	    //             lang = "עברית"
	    //             break;
	    //         case "eng":
	    //             lang = "english"
	    //             break;
	    //         case "arb":
	    //             lang = "ערבית"
	    //             break;
	    //         default:
	    //     }
	    //     return lang
	    // }
	
	    _createClass(Keyboard, [{
	        key: 'render',
	
	
	        // changeLang = () => {
	        //     let nextIndex = this.props.Keyboard.languages.indexOf(this.props.Keyboard.lang) + 1
	        //     if (nextIndex >= this.props.Keyboard.languages.length) nextIndex = 0
	        //     this.props.Keyboard.lang = this.props.Keyboard.languages[nextIndex]
	        // }
	
	
	        value: function render() {
	            var _this2 = this;
	
	            var showImg = !this.state.complete && !this.state.inputWord && this.props.Keyboard.progress < 3 ? true : false;
	            var letters = this.state.wordSoFar ? this.state.wordSoFar.toUpperCase().split("").map(function (letter, index) {
	                return _react2.default.createElement(
	                    'div',
	                    { key: index, className: index == _this2.state.wordSoFar.length - 1 ? "animation" : "" },
	                    letter
	                );
	            }) : "";
	
	            var imagePreview = void 0;
	
	            if (this.state.imagePreviewUrl) {
	                imagePreview = _react2.default.createElement('img', { className: 'imgPreview', src: this.state.imagePreviewUrl, alt: 'icon' });
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'keyboard-scene-container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'info-box' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'btn', onClick: function onClick() {
	                                return _this2.setState({ inputWord: true });
	                            } },
	                        '\u05E9\u05E0\u05D4 \u05DE\u05D9\u05DC\u05D4 '
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'level' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'bar-container' },
	                            _react2.default.createElement('div', { className: 'progress', style: { width: this.state.progress > 1 ? JSON.stringify((this.state.progress - 1) * 100 / this.props.Keyboard.wordsPerLevel) + "%" : 0 } })
	                        ),
	                        _react2.default.createElement(
	                            'strong',
	                            null,
	                            " " + Math.floor(this.props.Keyboard.progress) + " ",
	                            '\u05E8\u05DE\u05D4'
	                        )
	                    )
	                ),
	                this.state.complete && _react2.default.createElement(
	                    'div',
	                    { className: 'done-modal-container' },
	                    _react2.default.createElement('img', { src: _star2.default, className: 'star' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'done-modal' },
	                        imagePreview,
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            '\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 ',
	                            this.state.word,
	                            '!'
	                        ),
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'btn', onClick: this.closeGameOverModal },
	                            '\u05E2\u05D5\u05D3 \u05DE\u05D9\u05DC\u05D4!'
	                        )
	                    )
	                ),
	                this.state.inputWord && _react2.default.createElement(
	                    'div',
	                    { className: 'which-word-popup' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(
	                            'strong',
	                            null,
	                            '  \u05DE\u05D9\u05DC\u05D4 \u05DC\u05D4\u05E7\u05DC\u05D3\u05D4:*'
	                        ),
	                        _react2.default.createElement('input', { type: 'text', maxLength: '18', autoFocus: true, className: 'input-word', onFocus: function onFocus() {
	                                return _this2.setState({ valid: true });
	                            }, onBlur: function onBlur(e) {
	                                return _this2.setNewWord(e);
	                            } })
	                    ),
	                    ' ',
	                    !this.state.valid && _react2.default.createElement(
	                        'div',
	                        { className: 'err-msg' },
	                        '\u05E0\u05D0 \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05DE\u05D9\u05DC\u05D4 \u05DC\u05D4\u05E7\u05DC\u05D3\u05D4'
	                    ),
	                    !this.state.valid && _react2.default.createElement('hr', null),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'child-level-container' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'child-level-text' },
	                            _react2.default.createElement(
	                                'strong',
	                                null,
	                                '\u05E8\u05DE\u05EA \u05D4\u05D9\u05DC\u05D3:'
	                            )
	                        ),
	                        _react2.default.createElement('input', { min: '1', max: '4', type: 'number', defaultValue: this.props.Keyboard.progress, className: 'input-word', onBlur: function onBlur(e) {
	                                return _this2.updateLevel(e);
	                            } })
	                    ),
	                    _react2.default.createElement('hr', null),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'image-container' },
	                        imagePreview
	                    ),
	                    _react2.default.createElement(
	                        'label',
	                        { className: 'cabinet custom-file-input' },
	                        _react2.default.createElement('img', { src: _upload2.default }),
	                        this.state.imagePreviewUrl ? "שנה תמונה" : "להעלאת תמונה",
	                        _react2.default.createElement('input', { type: 'file', value: '', title: '', className: 'file', onChange: this.fileChangedHandler })
	                    ),
	                    _react2.default.createElement(
	                        'button',
	                        { className: 'done-btn', onClick: this.newWord },
	                        '\u05E1\u05D9\u05D5\u05DD'
	                    )
	                ),
	                showImg && imagePreview,
	                !this.state.complete && _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'word-container' },
	                        !this.state.inputWord && _react2.default.createElement(
	                            'div',
	                            { className: 'word-correct' },
	                            this.state.word.toUpperCase()
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: this.props.Keyboard.lang == "eng" ? "word-trial" : "word-trial heb" },
	                            letters
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'containercontainer' },
	                        !this.state.inputWord && _react2.default.createElement(_keyboardLetters2.default, {
	                            sendLetter: this.sendLetter
	                            // deleteLetter={this.deleteLetter}
	                            , upTo: this.state.upTo,
	                            changeLang: this.changeLang
	                        })
	                    )
	                ),
	                this.state.displayLevelUp && _react2.default.createElement(
	                    'div',
	                    { className: 'done-modal-container' },
	                    _react2.default.createElement('img', { src: _confetti2.default, width: '100vw', height: '100vh' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'which-word-popup' },
	                        '\u05DB\u05DC \u05D4\u05DB\u05D1\u05D5\u05D3!! \u05D4\u05E6\u05DC\u05D7\u05EA \u05D0\u05EA \u05D4\u05E9\u05DC\u05D1',
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'btn', onClick: this.nextLevel },
	                            '\u05DC\u05E9\u05DC\u05D1 \u05D4\u05D1\u05D0'
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Keyboard;
	}(_react.Component);
	
	exports.default = (0, _mobxReact.inject)('Keyboard')((0, _mobxReact.observer)(Keyboard));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _keyboard = __webpack_require__(16);
	
	var _keyboard2 = _interopRequireDefault(_keyboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    Keyboard: _keyboard2.default
	}; // import ExampleStore from './example.store'

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _mobx = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Keyboard = function Keyboard() {
	    var _this = this;
	
	    _classCallCheck(this, Keyboard);
	
	    this.word = "";
	    this.progress = 1;
	    this.languages = ["eng", "heb", "arb"];
	    this.lang = this.languages[0];
	    this.wordsPerLevel = 3;
	
	    this.changeLang = function (lang) {
	        _this.lang = lang;
	    };
	};
	
	(0, _mobx.decorate)(Keyboard, {
	    word: _mobx.observable,
	    wordsPerLevel: _mobx.observable,
	    progress: _mobx.observable,
	    lang: _mobx.observable,
	    languages: _mobx.observable,
	    changeLang: _mobx.action
	});
	
	exports.default = new Keyboard();

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */
17,
/* 19 */
17,
/* 20 */
17,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(3), __webpack_require__(1)) :
	    typeof define === 'function' && define.amd ? define(['exports', 'mobx', 'react'], factory) :
	    (global = global || self, factory(global.mobxReactLite = {}, global.mobx, global.React));
	}(this, function (exports, mobx, React) { 'use strict';
	
	    var React__default = 'default' in React ? React['default'] : React;
	
	    if (!React.useState) {
	        throw new Error("mobx-react-lite requires React with Hooks support");
	    }
	    if (!mobx.spy) {
	        throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
	    }
	
	    function useObservable(initialValue) {
	        var observableRef = React.useRef(null);
	        if (!observableRef.current) {
	            observableRef.current = mobx.observable(initialValue);
	        }
	        return observableRef.current;
	    }
	
	    function useComputed(func, inputs) {
	        if (inputs === void 0) { inputs = []; }
	        var computed = React.useMemo(function () { return mobx.computed(func); }, inputs);
	        return computed.get();
	    }
	
	    var doNothingDisposer = function () {
	        // empty
	    };
	    /**
	     * Adds an observable effect (reaction, autorun, or anything else that returns a disposer) that will be registered upon component creation and disposed upon unmounting.
	     * Returns the generated disposer for early disposal.
	     *
	     * @export
	     * @template D
	     * @param {() => D} disposerGenerator A function that returns the disposer of the wanted effect.
	     * @param {ReadonlyArray<any>} [inputs=[]] If you want the effect to be automatically re-created when some variable(s) are changed then pass them in this array.
	     * @returns {D}
	     */
	    function useDisposable(disposerGenerator, inputs) {
	        if (inputs === void 0) { inputs = []; }
	        var disposerRef = React.useRef(null);
	        var earlyDisposedRef = React.useRef(false);
	        React.useEffect(function () {
	            return lazyCreateDisposer(false);
	        }, inputs);
	        function lazyCreateDisposer(earlyDisposal) {
	            // ensure that we won't create a new disposer if it was early disposed
	            if (earlyDisposedRef.current) {
	                return doNothingDisposer;
	            }
	            if (!disposerRef.current) {
	                var newDisposer = disposerGenerator();
	                if (typeof newDisposer !== "function") {
	                    var error = new Error("generated disposer must be a function");
	                    {
	                        // tslint:disable-next-line:no-console
	                        console.error(error);
	                        return doNothingDisposer;
	                    }
	                }
	                disposerRef.current = newDisposer;
	            }
	            return function () {
	                if (disposerRef.current) {
	                    disposerRef.current();
	                    disposerRef.current = null;
	                }
	                if (earlyDisposal) {
	                    earlyDisposedRef.current = true;
	                }
	            };
	        }
	        return lazyCreateDisposer(true);
	    }
	
	    var globalIsUsingStaticRendering = false;
	    function useStaticRendering(enable) {
	        globalIsUsingStaticRendering = enable;
	    }
	    function isUsingStaticRendering() {
	        return globalIsUsingStaticRendering;
	    }
	
	    /*! *****************************************************************************
	    Copyright (c) Microsoft Corporation. All rights reserved.
	    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	    this file except in compliance with the License. You may obtain a copy of the
	    License at http://www.apache.org/licenses/LICENSE-2.0
	
	    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	    MERCHANTABLITY OR NON-INFRINGEMENT.
	
	    See the Apache Version 2.0 License for specific language governing permissions
	    and limitations under the License.
	    ***************************************************************************** */
	
	    var __assign = function() {
	        __assign = Object.assign || function __assign(t) {
	            for (var s, i = 1, n = arguments.length; i < n; i++) {
	                s = arguments[i];
	                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	            }
	            return t;
	        };
	        return __assign.apply(this, arguments);
	    };
	
	    function __read(o, n) {
	        var m = typeof Symbol === "function" && o[Symbol.iterator];
	        if (!m) return o;
	        var i = m.call(o), r, ar = [], e;
	        try {
	            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	        }
	        catch (error) { e = { error: error }; }
	        finally {
	            try {
	                if (r && !r.done && (m = i["return"])) m.call(i);
	            }
	            finally { if (e) throw e.error; }
	        }
	        return ar;
	    }
	
	    function printDebugValue(v) {
	        if (!v.current) {
	            return "<unknown>";
	        }
	        return mobx.getDependencyTree(v.current);
	    }
	
	    var EMPTY_ARRAY = [];
	    function useUnmount(fn) {
	        React.useEffect(function () { return fn; }, EMPTY_ARRAY);
	    }
	    function useForceUpdate() {
	        var _a = __read(React.useState(0), 2), setTick = _a[1];
	        var update = React.useCallback(function () {
	            setTick(function (tick) { return tick + 1; });
	        }, []);
	        return update;
	    }
	    function isPlainObject(value) {
	        if (!value || typeof value !== "object") {
	            return false;
	        }
	        var proto = Object.getPrototypeOf(value);
	        return !proto || proto === Object.prototype;
	    }
	
	    var EMPTY_OBJECT = {};
	    function useObserver(fn, baseComponentName, options) {
	        if (baseComponentName === void 0) { baseComponentName = "observed"; }
	        if (options === void 0) { options = EMPTY_OBJECT; }
	        if (isUsingStaticRendering()) {
	            return fn();
	        }
	        var wantedForceUpdateHook = options.useForceUpdate || useForceUpdate;
	        var forceUpdate = wantedForceUpdateHook();
	        var reaction = React.useRef(null);
	        if (!reaction.current) {
	            reaction.current = new mobx.Reaction("observer(" + baseComponentName + ")", function () {
	                forceUpdate();
	            });
	        }
	        var dispose = function () {
	            if (reaction.current && !reaction.current.isDisposed) {
	                reaction.current.dispose();
	                reaction.current = null;
	            }
	        };
	        React.useDebugValue(reaction, printDebugValue);
	        useUnmount(function () {
	            dispose();
	        });
	        // render the original component, but have the
	        // reaction track the observables, so that rendering
	        // can be invalidated (see above) once a dependency changes
	        var rendering;
	        var exception;
	        reaction.current.track(function () {
	            try {
	                rendering = fn();
	            }
	            catch (e) {
	                exception = e;
	            }
	        });
	        if (exception) {
	            dispose();
	            throw exception; // re-throw any exceptions catched during rendering
	        }
	        return rendering;
	    }
	
	    // n.b. base case is not used for actual typings or exported in the typing files
	    function observer(baseComponent, options) {
	        // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
	        if (isUsingStaticRendering()) {
	            return baseComponent;
	        }
	        var realOptions = __assign({ forwardRef: false }, options);
	        var baseComponentName = baseComponent.displayName || baseComponent.name;
	        var wrappedComponent = function (props, ref) {
	            return useObserver(function () { return baseComponent(props, ref); }, baseComponentName);
	        };
	        wrappedComponent.displayName = baseComponentName;
	        // memo; we are not intested in deep updates
	        // in props; we assume that if deep objects are changed,
	        // this is in observables, which would have been tracked anyway
	        var memoComponent;
	        if (realOptions.forwardRef) {
	            // we have to use forwardRef here because:
	            // 1. it cannot go before memo, only after it
	            // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
	            //    since it wouldn't be a callable function anymore
	            memoComponent = React.memo(React.forwardRef(wrappedComponent));
	        }
	        else {
	            memoComponent = React.memo(wrappedComponent);
	        }
	        copyStaticProperties(baseComponent, memoComponent);
	        memoComponent.displayName = baseComponentName;
	        return memoComponent;
	    }
	    // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
	    var hoistBlackList = {
	        $$typeof: true,
	        render: true,
	        compare: true,
	        type: true
	    };
	    function copyStaticProperties(base, target) {
	        Object.keys(base).forEach(function (key) {
	            if (base.hasOwnProperty(key) && !hoistBlackList[key]) {
	                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
	            }
	        });
	    }
	
	    function ObserverComponent(_a) {
	        var children = _a.children, render = _a.render;
	        var component = children || render;
	        if (typeof component !== "function") {
	            return null;
	        }
	        return useObserver(component);
	    }
	    ObserverComponent.propTypes = {
	        children: ObserverPropsCheck,
	        render: ObserverPropsCheck
	    };
	    ObserverComponent.displayName = "Observer";
	    function ObserverPropsCheck(props, key, componentName, location, propFullName) {
	        var extraKey = key === "children" ? "render" : "children";
	        var hasProp = typeof props[key] === "function";
	        var hasExtraProp = typeof props[extraKey] === "function";
	        if (hasProp && hasExtraProp) {
	            return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
	        }
	        if (hasProp || hasExtraProp) {
	            return null;
	        }
	        return new Error("Invalid prop `" +
	            propFullName +
	            "` of type `" +
	            typeof props[key] +
	            "` supplied to" +
	            " `" +
	            componentName +
	            "`, expected `function`.");
	    }
	
	    function useAsObservableSourceInternal(current, usedByLocalStore) {
	        if (usedByLocalStore && current === undefined) {
	            return undefined;
	        }
	        var _a = __read(React__default.useState(function () { return mobx.observable(current, {}, { deep: false }); }), 1), res = _a[0];
	        mobx.runInAction(function () {
	            Object.assign(res, current);
	        });
	        return res;
	    }
	    function useAsObservableSource(current) {
	        return useAsObservableSourceInternal(current, false);
	    }
	
	    function useLocalStore(initializer, current) {
	        var source = useAsObservableSourceInternal(current, true);
	        return React__default.useState(function () {
	            var local = mobx.observable(initializer(source));
	            if (isPlainObject(local)) {
	                mobx.runInAction(function () {
	                    Object.keys(local).forEach(function (key) {
	                        var value = local[key];
	                        if (typeof value === "function") {
	                            // @ts-ignore No idea why ts2536 is popping out here
	                            local[key] = wrapInTransaction(value, local);
	                        }
	                    });
	                });
	            }
	            return local;
	        })[0];
	    }
	    // tslint:disable-next-line: ban-types
	    function wrapInTransaction(fn, context) {
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            return mobx.transaction(function () { return fn.apply(context, args); });
	        };
	    }
	
	    var optimizeScheduler = function (reactionScheduler) {
	        if (typeof reactionScheduler === "function") {
	            mobx.configure({ reactionScheduler: reactionScheduler });
	        }
	    };
	
	    exports.Observer = ObserverComponent;
	    exports.isUsingStaticRendering = isUsingStaticRendering;
	    exports.observer = observer;
	    exports.optimizeScheduler = optimizeScheduler;
	    exports.useAsObservableSource = useAsObservableSource;
	    exports.useComputed = useComputed;
	    exports.useDisposable = useDisposable;
	    exports.useForceUpdate = useForceUpdate;
	    exports.useLocalStore = useLocalStore;
	    exports.useObservable = useObservable;
	    exports.useObserver = useObserver;
	    exports.useStaticRendering = useStaticRendering;
	
	    Object.defineProperty(exports, '__esModule', { value: true });
	
	}));


/***/ },
/* 22 */
/***/ function(module, exports) {

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


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//This file contains the ES6 extensions to the core Promises/A+ API
	
	var Promise = __webpack_require__(6);
	
	module.exports = Promise;
	
	/* Static Functions */
	
	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');
	
	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._81 = 1;
	  p._65 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;
	
	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;
	
	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};
	
	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);
	
	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._81 === 3) {
	            val = val._65;
	          }
	          if (val._81 === 1) return res(i, val._65);
	          if (val._81 === 2) reject(val._65);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};
	
	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};
	
	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};
	
	/* Prototype Methods */
	
	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(6);
	
	var DEFAULT_WHITELIST = [
	  ReferenceError,
	  TypeError,
	  RangeError
	];
	
	var enabled = false;
	exports.disable = disable;
	function disable() {
	  enabled = false;
	  Promise._10 = null;
	  Promise._97 = null;
	}
	
	exports.enable = enable;
	function enable(options) {
	  options = options || {};
	  if (enabled) disable();
	  enabled = true;
	  var id = 0;
	  var displayId = 0;
	  var rejections = {};
	  Promise._10 = function (promise) {
	    if (
	      promise._81 === 2 && // IS REJECTED
	      rejections[promise._72]
	    ) {
	      if (rejections[promise._72].logged) {
	        onHandled(promise._72);
	      } else {
	        clearTimeout(rejections[promise._72].timeout);
	      }
	      delete rejections[promise._72];
	    }
	  };
	  Promise._97 = function (promise, err) {
	    if (promise._45 === 0) { // not yet handled
	      promise._72 = id++;
	      rejections[promise._72] = {
	        displayId: null,
	        error: err,
	        timeout: setTimeout(
	          onUnhandled.bind(null, promise._72),
	          // For reference errors and type errors, this almost always
	          // means the programmer made a mistake, so log them after just
	          // 100ms
	          // otherwise, wait 2 seconds to see if they get handled
	          matchWhitelist(err, DEFAULT_WHITELIST)
	            ? 100
	            : 2000
	        ),
	        logged: false
	      };
	    }
	  };
	  function onUnhandled(id) {
	    if (
	      options.allRejections ||
	      matchWhitelist(
	        rejections[id].error,
	        options.whitelist || DEFAULT_WHITELIST
	      )
	    ) {
	      rejections[id].displayId = displayId++;
	      if (options.onUnhandled) {
	        rejections[id].logged = true;
	        options.onUnhandled(
	          rejections[id].displayId,
	          rejections[id].error
	        );
	      } else {
	        rejections[id].logged = true;
	        logError(
	          rejections[id].displayId,
	          rejections[id].error
	        );
	      }
	    }
	  }
	  function onHandled(id) {
	    if (rejections[id].logged) {
	      if (options.onHandled) {
	        options.onHandled(rejections[id].displayId, rejections[id].error);
	      } else if (!rejections[id].onUnhandled) {
	        console.warn(
	          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
	        );
	        console.warn(
	          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
	          rejections[id].displayId + '.'
	        );
	      }
	    }
	  }
	}
	
	function logError(id, error) {
	  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
	  var errStr = (error && (error.stack || error)) + '';
	  errStr.split('\n').forEach(function (line) {
	    console.warn('  ' + line);
	  });
	}
	
	function matchWhitelist(error, list) {
	  return list.some(function (cls) {
	    return error instanceof cls;
	  });
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	var wordList = [
	  // Borrowed from xkcd password generator which borrowed it from wherever
	  "ability","able","aboard","about","above","accept","accident","according",
	  "account","accurate","acres","across","act","action","active","activity",
	  "actual","actually","add","addition","additional","adjective","adult","adventure",
	  "advice","affect","afraid","after","afternoon","again","against","age",
	  "ago","agree","ahead","aid","air","airplane","alike","alive",
	  "all","allow","almost","alone","along","aloud","alphabet","already",
	  "also","although","am","among","amount","ancient","angle","angry",
	  "animal","announced","another","answer","ants","any","anybody","anyone",
	  "anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
	  "appropriate","are","area","arm","army","around","arrange","arrangement",
	  "arrive","arrow","art","article","as","aside","ask","asleep",
	  "at","ate","atmosphere","atom","atomic","attached","attack","attempt",
	  "attention","audience","author","automobile","available","average","avoid","aware",
	  "away","baby","back","bad","badly","bag","balance","ball",
	  "balloon","band","bank","bar","bare","bark","barn","base",
	  "baseball","basic","basis","basket","bat","battle","be","bean",
	  "bear","beat","beautiful","beauty","became","because","become","becoming",
	  "bee","been","before","began","beginning","begun","behavior","behind",
	  "being","believed","bell","belong","below","belt","bend","beneath",
	  "bent","beside","best","bet","better","between","beyond","bicycle",
	  "bigger","biggest","bill","birds","birth","birthday","bit","bite",
	  "black","blank","blanket","blew","blind","block","blood","blow",
	  "blue","board","boat","body","bone","book","border","born",
	  "both","bottle","bottom","bound","bow","bowl","box","boy",
	  "brain","branch","brass","brave","bread","break","breakfast","breath",
	  "breathe","breathing","breeze","brick","bridge","brief","bright","bring",
	  "broad","broke","broken","brother","brought","brown","brush","buffalo",
	  "build","building","built","buried","burn","burst","bus","bush",
	  "business","busy","but","butter","buy","by","cabin","cage",
	  "cake","call","calm","came","camera","camp","can","canal",
	  "cannot","cap","capital","captain","captured","car","carbon","card",
	  "care","careful","carefully","carried","carry","case","cast","castle",
	  "cat","catch","cattle","caught","cause","cave","cell","cent",
	  "center","central","century","certain","certainly","chain","chair","chamber",
	  "chance","change","changing","chapter","character","characteristic","charge","chart",
	  "check","cheese","chemical","chest","chicken","chief","child","children",
	  "choice","choose","chose","chosen","church","circle","circus","citizen",
	  "city","class","classroom","claws","clay","clean","clear","clearly",
	  "climate","climb","clock","close","closely","closer","cloth","clothes",
	  "clothing","cloud","club","coach","coal","coast","coat","coffee",
	  "cold","collect","college","colony","color","column","combination","combine",
	  "come","comfortable","coming","command","common","community","company","compare",
	  "compass","complete","completely","complex","composed","composition","compound","concerned",
	  "condition","congress","connected","consider","consist","consonant","constantly","construction",
	  "contain","continent","continued","contrast","control","conversation","cook","cookies",
	  "cool","copper","copy","corn","corner","correct","correctly","cost",
	  "cotton","could","count","country","couple","courage","course","court",
	  "cover","cow","cowboy","crack","cream","create","creature","crew",
	  "crop","cross","crowd","cry","cup","curious","current","curve",
	  "customs","cut","cutting","daily","damage","dance","danger","dangerous",
	  "dark","darkness","date","daughter","dawn","day","dead","deal",
	  "dear","death","decide","declared","deep","deeply","deer","definition",
	  "degree","depend","depth","describe","desert","design","desk","detail",
	  "determine","develop","development","diagram","diameter","did","die","differ",
	  "difference","different","difficult","difficulty","dig","dinner","direct","direction",
	  "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
	  "disease","dish","distance","distant","divide","division","do","doctor",
	  "does","dog","doing","doll","dollar","done","donkey","door",
	  "dot","double","doubt","down","dozen","draw","drawn","dream",
	  "dress","drew","dried","drink","drive","driven","driver","driving",
	  "drop","dropped","drove","dry","duck","due","dug","dull",
	  "during","dust","duty","each","eager","ear","earlier","early",
	  "earn","earth","easier","easily","east","easy","eat","eaten",
	  "edge","education","effect","effort","egg","eight","either","electric",
	  "electricity","element","elephant","eleven","else","empty","end","enemy",
	  "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
	  "environment","equal","equally","equator","equipment","escape","especially","essential",
	  "establish","even","evening","event","eventually","ever","every","everybody",
	  "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
	  "excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
	  "exist","expect","experience","experiment","explain","explanation","explore","express",
	  "expression","extra","eye","face","facing","fact","factor","factory",
	  "failed","fair","fairly","fall","fallen","familiar","family","famous",
	  "far","farm","farmer","farther","fast","fastened","faster","fat",
	  "father","favorite","fear","feathers","feature","fed","feed","feel",
	  "feet","fell","fellow","felt","fence","few","fewer","field",
	  "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
	  "film","final","finally","find","fine","finest","finger","finish",
	  "fire","fireplace","firm","first","fish","five","fix","flag",
	  "flame","flat","flew","flies","flight","floating","floor","flow",
	  "flower","fly","fog","folks","follow","food","foot","football",
	  "for","force","foreign","forest","forget","forgot","forgotten","form",
	  "former","fort","forth","forty","forward","fought","found","four",
	  "fourth","fox","frame","free","freedom","frequently","fresh","friend",
	  "friendly","frighten","frog","from","front","frozen","fruit","fuel",
	  "full","fully","fun","function","funny","fur","furniture","further",
	  "future","gain","game","garage","garden","gas","gasoline","gate",
	  "gather","gave","general","generally","gentle","gently","get","getting",
	  "giant","gift","girl","give","given","giving","glad","glass",
	  "globe","go","goes","gold","golden","gone","good","goose",
	  "got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
	  "graph","grass","gravity","gray","great","greater","greatest","greatly",
	  "green","grew","ground","group","grow","grown","growth","guard",
	  "guess","guide","gulf","gun","habit","had","hair","half",
	  "halfway","hall","hand","handle","handsome","hang","happen","happened",
	  "happily","happy","harbor","hard","harder","hardly","has","hat",
	  "have","having","hay","he","headed","heading","health","heard",
	  "hearing","heart","heat","heavy","height","held","hello","help",
	  "helpful","her","herd","here","herself","hidden","hide","high",
	  "higher","highest","highway","hill","him","himself","his","history",
	  "hit","hold","hole","hollow","home","honor","hope","horn",
	  "horse","hospital","hot","hour","house","how","however","huge",
	  "human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
	  "hurt","husband","ice","idea","identity","if","ill","image",
	  "imagine","immediately","importance","important","impossible","improve","in","inch",
	  "include","including","income","increase","indeed","independent","indicate","individual",
	  "industrial","industry","influence","information","inside","instance","instant","instead",
	  "instrument","interest","interior","into","introduced","invented","involved","iron",
	  "is","island","it","its","itself","jack","jar","jet",
	  "job","join","joined","journey","joy","judge","jump","jungle",
	  "just","keep","kept","key","kids","kill","kind","kitchen",
	  "knew","knife","know","knowledge","known","label","labor","lack",
	  "lady","laid","lake","lamp","land","language","large","larger",
	  "largest","last","late","later","laugh","law","lay","layers",
	  "lead","leader","leaf","learn","least","leather","leave","leaving",
	  "led","left","leg","length","lesson","let","letter","level",
	  "library","lie","life","lift","light","like","likely","limited",
	  "line","lion","lips","liquid","list","listen","little","live",
	  "living","load","local","locate","location","log","lonely","long",
	  "longer","look","loose","lose","loss","lost","lot","loud",
	  "love","lovely","low","lower","luck","lucky","lunch","lungs",
	  "lying","machine","machinery","mad","made","magic","magnet","mail",
	  "main","mainly","major","make","making","man","managed","manner",
	  "manufacturing","many","map","mark","market","married","mass","massage",
	  "master","material","mathematics","matter","may","maybe","me","meal",
	  "mean","means","meant","measure","meat","medicine","meet","melted",
	  "member","memory","men","mental","merely","met","metal","method",
	  "mice","middle","might","mighty","mile","military","milk","mill",
	  "mind","mine","minerals","minute","mirror","missing","mission","mistake",
	  "mix","mixture","model","modern","molecular","moment","money","monkey",
	  "month","mood","moon","more","morning","most","mostly","mother",
	  "motion","motor","mountain","mouse","mouth","move","movement","movie",
	  "moving","mud","muscle","music","musical","must","my","myself",
	  "mysterious","nails","name","nation","national","native","natural","naturally",
	  "nature","near","nearby","nearer","nearest","nearly","necessary","neck",
	  "needed","needle","needs","negative","neighbor","neighborhood","nervous","nest",
	  "never","new","news","newspaper","next","nice","night","nine",
	  "no","nobody","nodded","noise","none","noon","nor","north",
	  "nose","not","note","noted","nothing","notice","noun","now",
	  "number","numeral","nuts","object","observe","obtain","occasionally","occur",
	  "ocean","of","off","offer","office","officer","official","oil",
	  "old","older","oldest","on","once","one","only","onto",
	  "open","operation","opinion","opportunity","opposite","or","orange","orbit",
	  "order","ordinary","organization","organized","origin","original","other","ought",
	  "our","ourselves","out","outer","outline","outside","over","own",
	  "owner","oxygen","pack","package","page","paid","pain","paint",
	  "pair","palace","pale","pan","paper","paragraph","parallel","parent",
	  "park","part","particles","particular","particularly","partly","parts","party",
	  "pass","passage","past","path","pattern","pay","peace","pen",
	  "pencil","people","per","percent","perfect","perfectly","perhaps","period",
	  "person","personal","pet","phrase","physical","piano","pick","picture",
	  "pictured","pie","piece","pig","pile","pilot","pine","pink",
	  "pipe","pitch","place","plain","plan","plane","planet","planned",
	  "planning","plant","plastic","plate","plates","play","pleasant","please",
	  "pleasure","plenty","plural","plus","pocket","poem","poet","poetry",
	  "point","pole","police","policeman","political","pond","pony","pool",
	  "poor","popular","population","porch","port","position","positive","possible",
	  "possibly","post","pot","potatoes","pound","pour","powder","power",
	  "powerful","practical","practice","prepare","present","president","press","pressure",
	  "pretty","prevent","previous","price","pride","primitive","principal","principle",
	  "printed","private","prize","probably","problem","process","produce","product",
	  "production","program","progress","promised","proper","properly","property","protection",
	  "proud","prove","provide","public","pull","pupil","pure","purple",
	  "purpose","push","put","putting","quarter","queen","question","quick",
	  "quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
	  "rain","raise","ran","ranch","range","rapidly","rate","rather",
	  "raw","rays","reach","read","reader","ready","real","realize",
	  "rear","reason","recall","receive","recent","recently","recognize","record",
	  "red","refer","refused","region","regular","related","relationship","religious",
	  "remain","remarkable","remember","remove","repeat","replace","replied","report",
	  "represent","require","research","respect","rest","result","return","review",
	  "rhyme","rhythm","rice","rich","ride","riding","right","ring",
	  "rise","rising","river","road","roar","rock","rocket","rocky",
	  "rod","roll","roof","room","root","rope","rose","rough",
	  "round","route","row","rubbed","rubber","rule","ruler","run",
	  "running","rush","sad","saddle","safe","safety","said","sail",
	  "sale","salmon","salt","same","sand","sang","sat","satellites",
	  "satisfied","save","saved","saw","say","scale","scared","scene",
	  "school","science","scientific","scientist","score","screen","sea","search",
	  "season","seat","second","secret","section","see","seed","seeing",
	  "seems","seen","seldom","select","selection","sell","send","sense",
	  "sent","sentence","separate","series","serious","serve","service","sets",
	  "setting","settle","settlers","seven","several","shade","shadow","shake",
	  "shaking","shall","shallow","shape","share","sharp","she","sheep",
	  "sheet","shelf","shells","shelter","shine","shinning","ship","shirt",
	  "shoe","shoot","shop","shore","short","shorter","shot","should",
	  "shoulder","shout","show","shown","shut","sick","sides","sight",
	  "sign","signal","silence","silent","silk","silly","silver","similar",
	  "simple","simplest","simply","since","sing","single","sink","sister",
	  "sit","sitting","situation","six","size","skill","skin","sky",
	  "slabs","slave","sleep","slept","slide","slight","slightly","slip",
	  "slipped","slope","slow","slowly","small","smaller","smallest","smell",
	  "smile","smoke","smooth","snake","snow","so","soap","social",
	  "society","soft","softly","soil","solar","sold","soldier","solid",
	  "solution","solve","some","somebody","somehow","someone","something","sometime",
	  "somewhere","son","song","soon","sort","sound","source","south",
	  "southern","space","speak","special","species","specific","speech","speed",
	  "spell","spend","spent","spider","spin","spirit","spite","split",
	  "spoken","sport","spread","spring","square","stage","stairs","stand",
	  "standard","star","stared","start","state","statement","station","stay",
	  "steady","steam","steel","steep","stems","step","stepped","stick",
	  "stiff","still","stock","stomach","stone","stood","stop","stopped",
	  "store","storm","story","stove","straight","strange","stranger","straw",
	  "stream","street","strength","stretch","strike","string","strip","strong",
	  "stronger","struck","structure","struggle","stuck","student","studied","studying",
	  "subject","substance","success","successful","such","sudden","suddenly","sugar",
	  "suggest","suit","sum","summer","sun","sunlight","supper","supply",
	  "support","suppose","sure","surface","surprise","surrounded","swam","sweet",
	  "swept","swim","swimming","swing","swung","syllable","symbol","system",
	  "table","tail","take","taken","tales","talk","tall","tank",
	  "tape","task","taste","taught","tax","tea","teach","teacher",
	  "team","tears","teeth","telephone","television","tell","temperature","ten",
	  "tent","term","terrible","test","than","thank","that","thee",
	  "them","themselves","then","theory","there","therefore","these","they",
	  "thick","thin","thing","think","third","thirty","this","those",
	  "thou","though","thought","thousand","thread","three","threw","throat",
	  "through","throughout","throw","thrown","thumb","thus","thy","tide",
	  "tie","tight","tightly","till","time","tin","tiny","tip",
	  "tired","title","to","tobacco","today","together","told","tomorrow",
	  "tone","tongue","tonight","too","took","tool","top","topic",
	  "torn","total","touch","toward","tower","town","toy","trace",
	  "track","trade","traffic","trail","train","transportation","trap","travel",
	  "treated","tree","triangle","tribe","trick","tried","trip","troops",
	  "tropical","trouble","truck","trunk","truth","try","tube","tune",
	  "turn","twelve","twenty","twice","two","type","typical","uncle",
	  "under","underline","understanding","unhappy","union","unit","universe","unknown",
	  "unless","until","unusual","up","upon","upper","upward","us",
	  "use","useful","using","usual","usually","valley","valuable","value",
	  "vapor","variety","various","vast","vegetable","verb","vertical","very",
	  "vessels","victory","view","village","visit","visitor","voice","volume",
	  "vote","vowel","voyage","wagon","wait","walk","wall","want",
	  "war","warm","warn","was","wash","waste","watch","water",
	  "wave","way","we","weak","wealth","wear","weather","week",
	  "weigh","weight","welcome","well","went","were","west","western",
	  "wet","whale","what","whatever","wheat","wheel","when","whenever",
	  "where","wherever","whether","which","while","whispered","whistle","white",
	  "who","whole","whom","whose","why","wide","widely","wife",
	  "wild","will","willing","win","wind","window","wing","winter",
	  "wire","wise","wish","with","within","without","wolf","women",
	  "won","wonder","wonderful","wood","wooden","wool","word","wore",
	  "work","worker","world","worried","worry","worse","worth","would",
	  "wrapped","write","writer","writing","written","wrong","wrote","yard",
	  "year","yellow","yes","yesterday","yet","you","young","younger",
	  "your","yourself","youth","zero","zebra","zipper","zoo","zulu"
	];
	
	function words(options) {
	
	  function word() {
	    if (options && options.maxLength > 1) {
	      return generateWordWithMaxLength();
	    } else {
	      return generateRandomWord();
	    }
	  }
	
	  function generateWordWithMaxLength() {
	    let rightSize = false;
	    let wordUsed;
	    while (!rightSize) {  
	      wordUsed = generateRandomWord();
	      if(wordUsed.length <= options.maxLength) {
	        rightSize = true;
	      }
	
	    }
	    return wordUsed;
	  }
	
	  function generateRandomWord() {
	    return wordList[randInt(wordList.length)];
	  }
	
	  function randInt(lessThan) {
	    return Math.floor(Math.random() * lessThan);
	  }
	
	  // No arguments = generate one word
	  if (typeof(options) === 'undefined') {
	    return word();
	  }
	
	  // Just a number = return that many words
	  if (typeof(options) === 'number') {
	    options = { exactly: options };
	  }
	
	  // options supported: exactly, min, max, join
	  if (options.exactly) {
	    options.min = options.exactly;
	    options.max = options.exactly;
	  }
	  
	  // not a number = one word par string
	  if (typeof(options.wordsPerString) !== 'number') {
	    options.wordsPerString = 1;
	  }
	
	  //not a function = returns the raw word
	  if (typeof(options.formatter) !== 'function') {
	    options.formatter = (word) => word;
	  }
	
	  //not a string = separator is a space
	  if (typeof(options.separator) !== 'string') {
	    options.separator = ' ';
	  }
	
	  var total = options.min + randInt(options.max + 1 - options.min);
	  var results = [];
	  var token = '';
	  var relativeIndex = 0;
	
	  for (var i = 0; (i < total * options.wordsPerString); i++) {
	    if (relativeIndex === options.wordsPerString - 1) {
	      token += options.formatter(word(), relativeIndex);
	    }
	    else {
	      token += options.formatter(word(), relativeIndex) + options.separator;
	    }
	    relativeIndex++;
	    if ((i + 1) % options.wordsPerString === 0) {
	      results.push(token);
	      token = ''; 
	      relativeIndex = 0;
	    }
	   
	  }
	  if (options.join) {
	    results = results.join(options.join);
	  }
	
	  return results;
	}
	
	module.exports = words;
	// Export the word list as it is often useful
	words.wordList = wordList;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v16.9.0
	 * react-dom.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	/*
	 Modernizr 3.0.0pre (Custom Build) | MIT
	*/
	'use strict';var aa=__webpack_require__(1),m=__webpack_require__(4),q=__webpack_require__(30);function t(a){for(var b=a.message,c="https://reactjs.org/docs/error-decoder.html?invariant="+b,d=1;d<arguments.length;d++)c+="&args[]="+encodeURIComponent(arguments[d]);a.message="Minified React error #"+b+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}if(!aa)throw t(Error(227));var ba=null,ca={};
	function da(){if(ba)for(var a in ca){var b=ca[a],c=ba.indexOf(a);if(!(-1<c))throw t(Error(96),a);if(!ea[c]){if(!b.extractEvents)throw t(Error(97),a);ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],h=b,g=d;if(fa.hasOwnProperty(g))throw t(Error(99),g);fa[g]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],h,g);e=!0}else f.registrationName?(ha(f.registrationName,h,g),e=!0):e=!1;if(!e)throw t(Error(98),d,a);}}}}
	function ha(a,b,c){if(ia[a])throw t(Error(100),a);ia[a]=b;ja[a]=b.eventTypes[c].dependencies}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,h,g,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a}};function qa(a,b,c,d,e,f,h,g,k){la=!1;ma=null;ka.apply(pa,arguments)}
	function ra(a,b,c,d,e,f,h,g,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null}else throw t(Error(198));na||(na=!0,oa=l)}}var sa=null,ta=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ra(d,b,void 0,a);a.currentTarget=null}function xa(a,b){if(null==b)throw t(Error(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
	function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ba(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a){ya(a,Aa);if(za)throw t(Error(95));if(na)throw a=oa,na=!1,oa=null,a;}}
	var Ca={injectEventPluginOrder:function(a){if(ba)throw t(Error(101));ba=Array.prototype.slice.call(a);da()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca.hasOwnProperty(c)||ca[c]!==d){if(ca[c])throw t(Error(102),c);ca[c]=d;b=!0}}b&&da()}};
	function Da(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw t(Error(231),b,typeof c);
	return c}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;throw t(Error(33));}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
	function Ma(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}
	function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement);
	function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
	Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
	var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),ab=Wa("transitionend"),bb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=null,db=null,eb=null;
	function fb(){if(eb)return eb;var a,b=db,c=b.length,d,e="value"in cb?cb.value:cb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var h=c-a;for(d=1;d<=h&&b[c-d]===e[f-d];d++);return eb=e.slice(a,1<d?1-d:void 0)}function gb(){return!0}function hb(){return!1}
	function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?gb:hb;this.isPropagationStopped=hb;return this}
	m(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=gb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=gb)},persist:function(){this.isPersistent=gb},isPersistent:hb,destructor:function(){var a=this.constructor.Interface,
	b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=hb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
	y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;m(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=m({},d.Interface,a);c.extend=d.extend;ib(c);return c};ib(y);function jb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
	function kb(a){if(!(a instanceof this))throw t(Error(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function ib(a){a.eventPool=[];a.getPooled=jb;a.release=kb}var lb=y.extend({data:null}),mb=y.extend({data:null}),nb=[9,13,27,32],ob=Ra&&"CompositionEvent"in window,pb=null;Ra&&"documentMode"in document&&(pb=document.documentMode);
	var qb=Ra&&"TextEvent"in window&&!pb,sb=Ra&&(!ob||pb&&8<pb&&11>=pb),tb=String.fromCharCode(32),ub={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
	captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vb=!1;
	function wb(a,b){switch(a){case "keyup":return-1!==nb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function xb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var yb=!1;function Ab(a,b){switch(a){case "compositionend":return xb(b);case "keypress":if(32!==b.which)return null;vb=!0;return tb;case "textInput":return a=b.data,a===tb&&vb?null:a;default:return null}}
	function Bb(a,b){if(yb)return"compositionend"===a||!ob&&wb(a,b)?(a=fb(),eb=db=cb=null,yb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return sb&&"ko"!==b.locale?null:b.data;default:return null}}
	var Cb={eventTypes:ub,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(ob)b:{switch(a){case "compositionstart":e=ub.compositionStart;break b;case "compositionend":e=ub.compositionEnd;break b;case "compositionupdate":e=ub.compositionUpdate;break b}e=void 0}else yb?wb(a,c)&&(e=ub.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ub.compositionStart);e?(sb&&"ko"!==c.locale&&(yb||e!==ub.compositionStart?e===ub.compositionEnd&&yb&&(f=fb()):(cb=d,db="value"in cb?cb.value:cb.textContent,yb=
	!0)),e=lb.getPooled(e,b,c,d),f?e.data=f:(f=xb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=qb?Ab(a,c):Bb(a,c))?(b=mb.getPooled(ub.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Db=null,Eb=null,Fb=null;function Gb(a){if(a=ta(a)){if("function"!==typeof Db)throw t(Error(280));var b=sa(a.stateNode);Db(a.stateNode,a.type,b)}}function Hb(a){Eb?Fb?Fb.push(a):Fb=[a]:Eb=a}function Ib(){if(Eb){var a=Eb,b=Fb;Fb=Eb=null;Gb(a);if(b)for(a=0;a<b.length;a++)Gb(b[a])}}
	function Jb(a,b){return a(b)}function Kb(a,b,c,d){return a(b,c,d)}function Lb(){}var Mb=Jb,Nb=!1;function Ob(){if(null!==Eb||null!==Fb)Lb(),Ib()}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Pb[a.type]:"textarea"===b?!0:!1}
	function Rb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Sb(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Tb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ub(a){var b=Tb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
	null;delete a[b]}}}}function Vb(a){a._valueTracker||(a._valueTracker=Ub(a))}function Wb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Tb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Xb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Xb.hasOwnProperty("ReactCurrentDispatcher")||(Xb.ReactCurrentDispatcher={current:null});Xb.hasOwnProperty("ReactCurrentBatchConfig")||(Xb.ReactCurrentBatchConfig={suspense:null});
	var Yb=/^(.*)[\\\/]/,B="function"===typeof Symbol&&Symbol.for,Zb=B?Symbol.for("react.element"):60103,$b=B?Symbol.for("react.portal"):60106,ac=B?Symbol.for("react.fragment"):60107,bc=B?Symbol.for("react.strict_mode"):60108,cc=B?Symbol.for("react.profiler"):60114,dc=B?Symbol.for("react.provider"):60109,ec=B?Symbol.for("react.context"):60110,fc=B?Symbol.for("react.concurrent_mode"):60111,gc=B?Symbol.for("react.forward_ref"):60112,hc=B?Symbol.for("react.suspense"):60113,ic=B?Symbol.for("react.suspense_list"):
	60120,jc=B?Symbol.for("react.memo"):60115,kc=B?Symbol.for("react.lazy"):60116;B&&Symbol.for("react.fundamental");B&&Symbol.for("react.responder");var lc="function"===typeof Symbol&&Symbol.iterator;function mc(a){if(null===a||"object"!==typeof a)return null;a=lc&&a[lc]||a["@@iterator"];return"function"===typeof a?a:null}
	function oc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ac:return"Fragment";case $b:return"Portal";case cc:return"Profiler";case bc:return"StrictMode";case hc:return"Suspense";case ic:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ec:return"Context.Consumer";case dc:return"Context.Provider";case gc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
	"ForwardRef");case jc:return oc(a.type);case kc:if(a=1===a._status?a._result:null)return oc(a)}return null}function pc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=oc(a.type);c=null;d&&(c=oc(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Yb,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
	var qc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rc=Object.prototype.hasOwnProperty,sc={},tc={};
	function uc(a){if(rc.call(tc,a))return!0;if(rc.call(sc,a))return!1;if(qc.test(a))return tc[a]=!0;sc[a]=!0;return!1}function vc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
	function wc(a,b,c,d){if(null===b||"undefined"===typeof b||vc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function D(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var F={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F[a]=new D(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F[b]=new D(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F[a]=new D(a,2,!1,a.toLowerCase(),null,!1)});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F[a]=new D(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F[a]=new D(a,3,!1,a.toLowerCase(),null,!1)});
	["checked","multiple","muted","selected"].forEach(function(a){F[a]=new D(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){F[a]=new D(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){F[a]=new D(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){F[a]=new D(a,5,!1,a.toLowerCase(),null,!1)});var xc=/[\-:]([a-z])/g;function yc(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(xc,
	yc);F[b]=new D(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(xc,yc);F[b]=new D(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!1)});
	F.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){F[a]=new D(a,1,!1,a.toLowerCase(),null,!0)});
	function zc(a,b,c,d){var e=F.hasOwnProperty(b)?F[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(wc(b,c,e,d)&&(c=null),d||null===e?uc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
	function Ac(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Bc(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
	function Cc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Ac(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Dc(a,b){b=b.checked;null!=b&&zc(a,"checked",b,!1)}
	function Ec(a,b){Dc(a,b);var c=Ac(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fc(a,b.type,Ac(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
	function Gc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
	function Fc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Hc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Ic(a,b,c){a=y.getPooled(Hc.change,a,b,c);a.type="change";Hb(c);Qa(a);return a}var Jc=null,Kc=null;function Lc(a){Ba(a)}
	function Mc(a){var b=Ja(a);if(Wb(b))return a}function Nc(a,b){if("change"===a)return b}var Oc=!1;Ra&&(Oc=Sb("input")&&(!document.documentMode||9<document.documentMode));function Pc(){Jc&&(Jc.detachEvent("onpropertychange",Qc),Kc=Jc=null)}function Qc(a){if("value"===a.propertyName&&Mc(Kc))if(a=Ic(Kc,a,Rb(a)),Nb)Ba(a);else{Nb=!0;try{Jb(Lc,a)}finally{Nb=!1,Ob()}}}function Rc(a,b,c){"focus"===a?(Pc(),Jc=b,Kc=c,Jc.attachEvent("onpropertychange",Qc)):"blur"===a&&Pc()}
	function Sc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Mc(Kc)}function Tc(a,b){if("click"===a)return Mc(b)}function Uc(a,b){if("input"===a||"change"===a)return Mc(b)}
	var Vc={eventTypes:Hc,_isInputEventSupported:Oc,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,h=void 0,g=e.nodeName&&e.nodeName.toLowerCase();"select"===g||"input"===g&&"file"===e.type?f=Nc:Qb(e)?Oc?f=Uc:(f=Sc,h=Rc):(g=e.nodeName)&&"input"===g.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Tc);if(f&&(f=f(a,b)))return Ic(f,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fc(e,"number",e.value)}},Wc=y.extend({view:null,detail:null}),Xc={Alt:"altKey",
	Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Xc[a])?!!b[a]:!1}function Zc(){return Yc}
	var $c=0,ad=0,bd=!1,cd=!1,dd=Wc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
	var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
	dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var h=void 0,g=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)h=dd,g=fd.mouseLeave,k=fd.mouseEnter,l="mouse";
	else if("pointerout"===a||"pointerover"===a)h=ed,g=fd.pointerLeave,k=fd.pointerEnter,l="pointer";var n=null==f?e:Ja(f);e=null==b?e:Ja(b);a=h.getPooled(g,f,c,d);a.type=l+"leave";a.target=n;a.relatedTarget=e;c=h.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=n;d=b;if(f&&d)a:{b=f;e=d;l=0;for(h=b;h;h=La(h))l++;h=0;for(k=e;k;k=La(k))h++;for(;0<l-h;)b=La(b),l--;for(;0<h-l;)e=La(e),h--;for(;l--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
	f.alternate;if(null!==l&&l===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function hd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var id=Object.prototype.hasOwnProperty;
	function jd(a,b){if(hd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!id.call(b,c[d])||!hd(a[c[d]],b[c[d]]))return!1;return!0}function kd(a,b){return{responder:a,props:b}}new Map;new Map;new Set;new Map;
	function ld(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function od(a){if(2!==ld(a))throw t(Error(188));}
	function pd(a){var b=a.alternate;if(!b){b=ld(a);if(3===b)throw t(Error(188));return 1===b?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return od(e),a;if(f===d)return od(e),b;f=f.sibling}throw t(Error(188));}if(c.return!==d.return)c=e,d=f;else{for(var h=!1,g=e.child;g;){if(g===c){h=!0;c=e;d=f;break}if(g===d){h=!0;d=e;c=f;break}g=g.sibling}if(!h){for(g=f.child;g;){if(g===
	c){h=!0;c=f;d=e;break}if(g===d){h=!0;d=f;c=e;break}g=g.sibling}if(!h)throw t(Error(189));}}if(c.alternate!==d)throw t(Error(190));}if(3!==c.tag)throw t(Error(188));return c.stateNode.current===c?a:b}function qd(a){a=pd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
	var rd=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),sd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),td=Wc.extend({relatedTarget:null});function ud(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
	var vd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
	116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xd=Wc.extend({key:function(a){if(a.key){var b=vd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ud(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?wd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zc,charCode:function(a){return"keypress"===
	a.type?ud(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ud(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),yd=dd.extend({dataTransfer:null}),zd=Wc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zc}),Ad=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Bd=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
	a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Cd=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],
	["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",
	1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",2],[Xa,"animationEnd",2],[Ya,"animationIteration",2],[Za,"animationStart",2],["canplay","canPlay",2],["canplaythrough",
	"canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress","progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",
	2],[ab,"transitionEnd",2],["waiting","waiting",2]],Dd={},Ed={},Fd=0;for(;Fd<Cd.length;Fd++){var Gd=Cd[Fd],Hd=Gd[0],Id=Gd[1],Jd=Gd[2],Kd="on"+(Id[0].toUpperCase()+Id.slice(1)),Ld={phasedRegistrationNames:{bubbled:Kd,captured:Kd+"Capture"},dependencies:[Hd],eventPriority:Jd};Dd[Id]=Ld;Ed[Hd]=Ld}
	var Md={eventTypes:Dd,getEventPriority:function(a){a=Ed[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=Ed[a];if(!e)return null;switch(a){case "keypress":if(0===ud(c))return null;case "keydown":case "keyup":a=xd;break;case "blur":case "focus":a=td;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
	yd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=zd;break;case Xa:case Ya:case Za:a=rd;break;case ab:a=Ad;break;case "scroll":a=Wc;break;case "wheel":a=Bd;break;case "copy":case "cut":case "paste":a=sd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},Nd=Md.getEventPriority,Od=[];
	function Pd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Rb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,h=null,g=0;g<ea.length;g++){var k=ea[g];k&&(k=k.extractEvents(d,b,f,e))&&(h=xa(h,k))}Ba(h)}}var Qd=!0;function G(a,b){Rd(b,a,!1)}
	function Rd(a,b,c){switch(Nd(b)){case 0:var d=Sd.bind(null,b,1);break;case 1:d=Td.bind(null,b,1);break;default:d=Ud.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Sd(a,b,c){Nb||Lb();var d=Ud,e=Nb;Nb=!0;try{Kb(d,a,b,c)}finally{(Nb=e)||Ob()}}function Td(a,b,c){Ud(a,b,c)}
	function Ud(a,b,c){if(Qd){b=Rb(c);b=Ha(b);null===b||"number"!==typeof b.tag||2===ld(b)||(b=null);if(Od.length){var d=Od.pop();d.topLevelType=a;d.nativeEvent=c;d.targetInst=b;a=d}else a={topLevelType:a,nativeEvent:c,targetInst:b,ancestors:[]};try{if(c=a,Nb)Pd(c,void 0);else{Nb=!0;try{Mb(Pd,c,void 0)}finally{Nb=!1,Ob()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Od.length&&Od.push(a)}}}var Vd=new ("function"===typeof WeakMap?WeakMap:Map);
	function Wd(a){var b=Vd.get(a);void 0===b&&(b=new Set,Vd.set(a,b));return b}function Xd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Yd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Zd(a,b){var c=Yd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Yd(c)}}function $d(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?$d(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
	function ae(){for(var a=window,b=Xd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xd(a.document)}return b}function be(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	var ce=Ra&&"documentMode"in document&&11>=document.documentMode,de={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ee=null,fe=null,ge=null,he=!1;
	function ie(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(he||null==ee||ee!==Xd(c))return null;c=ee;"selectionStart"in c&&be(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return ge&&jd(ge,c)?null:(ge=c,a=y.getPooled(de.select,fe,a,b),a.type="select",a.target=ee,Qa(a),a)}
	var je={eventTypes:de,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Wd(e);f=ja.onSelect;for(var h=0;h<f.length;h++)if(!e.has(f[h])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Qb(e)||"true"===e.contentEditable)ee=e,fe=b,ge=null;break;case "blur":ge=fe=ee=null;break;case "mousedown":he=!0;break;case "contextmenu":case "mouseup":case "dragend":return he=!1,ie(c,d);case "selectionchange":if(ce)break;
	case "keydown":case "keyup":return ie(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));sa=Ka;ta=Ia;va=Ja;Ca.injectEventPluginsByName({SimpleEventPlugin:Md,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Vc,SelectEventPlugin:je,BeforeInputEventPlugin:Cb});function ke(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
	function le(a,b){a=m({children:void 0},b);if(b=ke(b.children))a.children=b;return a}function me(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Ac(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
	function ne(a,b){if(null!=b.dangerouslySetInnerHTML)throw t(Error(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function oe(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw t(Error(92));if(Array.isArray(b)){if(!(1>=b.length))throw t(Error(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:Ac(c)}}
	function pe(a,b){var c=Ac(b.value),d=Ac(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function qe(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var re={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
	function se(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function te(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?se(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var ue=void 0,ve=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==re.svg||"innerHTML"in a)a.innerHTML=b;else{ue=ue||document.createElement("div");ue.innerHTML="<svg>"+b+"</svg>";for(b=ue.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
	function we(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
	var xe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
	floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ye=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(a){ye.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);xe[b]=xe[a]})});function ze(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||xe.hasOwnProperty(a)&&xe[a]?(""+b).trim():b+"px"}
	function Ae(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ze(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Ce=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function De(a,b){if(b){if(Ce[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw t(Error(137),a,"");if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw t(Error(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw t(Error(61));}if(null!=b.style&&"object"!==typeof b.style)throw t(Error(62),"");}}
	function Ee(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
	function Fe(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Wd(a);b=ja[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.has(e)){switch(e){case "scroll":Rd(a,"scroll",!0);break;case "focus":case "blur":Rd(a,"focus",!0);Rd(a,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Sb(e)&&Rd(a,e,!0);break;case "invalid":case "submit":case "reset":break;default:-1===bb.indexOf(e)&&G(e,a)}c.add(e)}}}function Ge(){}var He=null,Ie=null;
	function Je(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ke(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Le="function"===typeof setTimeout?setTimeout:void 0,Me="function"===typeof clearTimeout?clearTimeout:void 0;
	function Ne(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}new Set;var Oe=[],Pe=-1;function H(a){0>Pe||(a.current=Oe[Pe],Oe[Pe]=null,Pe--)}function J(a,b){Pe++;Oe[Pe]=a.current;a.current=b}var Qe={},L={current:Qe},M={current:!1},Re=Qe;
	function Se(a,b){var c=a.type.contextTypes;if(!c)return Qe;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function N(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Te(a){H(M,a);H(L,a)}function Ue(a){H(M,a);H(L,a)}
	function Ve(a,b,c){if(L.current!==Qe)throw t(Error(168));J(L,b,a);J(M,c,a)}function We(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw t(Error(108),oc(b)||"Unknown",e);return m({},c,d)}function Xe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Qe;Re=L.current;J(L,b,a);J(M,M.current,a);return!0}
	function Ye(a,b,c){var d=a.stateNode;if(!d)throw t(Error(169));c?(b=We(a,b,Re),d.__reactInternalMemoizedMergedChildContext=b,H(M,a),H(L,a),J(L,b,a)):H(M,a);J(M,c,a)}
	var Ze=q.unstable_runWithPriority,$e=q.unstable_scheduleCallback,af=q.unstable_cancelCallback,bf=q.unstable_shouldYield,cf=q.unstable_requestPaint,df=q.unstable_now,ef=q.unstable_getCurrentPriorityLevel,ff=q.unstable_ImmediatePriority,hf=q.unstable_UserBlockingPriority,jf=q.unstable_NormalPriority,kf=q.unstable_LowPriority,lf=q.unstable_IdlePriority,mf={},nf=void 0!==cf?cf:function(){},of=null,pf=null,qf=!1,rf=df(),sf=1E4>rf?df:function(){return df()-rf};
	function tf(){switch(ef()){case ff:return 99;case hf:return 98;case jf:return 97;case kf:return 96;case lf:return 95;default:throw t(Error(332));}}function uf(a){switch(a){case 99:return ff;case 98:return hf;case 97:return jf;case 96:return kf;case 95:return lf;default:throw t(Error(332));}}function vf(a,b){a=uf(a);return Ze(a,b)}function wf(a,b,c){a=uf(a);return $e(a,b,c)}function xf(a){null===of?(of=[a],pf=$e(ff,yf)):of.push(a);return mf}function O(){null!==pf&&af(pf);yf()}
	function yf(){if(!qf&&null!==of){qf=!0;var a=0;try{var b=of;vf(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});of=null}catch(c){throw null!==of&&(of=of.slice(a+1)),$e(ff,O),c;}finally{qf=!1}}}function zf(a,b){if(1073741823===b)return 99;if(1===b)return 95;a=10*(1073741821-b)-10*(1073741821-a);return 0>=a?99:250>=a?98:5250>=a?97:95}function Af(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
	function Bf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var Cf={current:null},Df=null,Ef=null,Ff=null;function Gf(){Ff=Ef=Df=null}
	function Hf(a,b){var c=a.type._context;J(Cf,c._currentValue,a);c._currentValue=b}function If(a){var b=Cf.current;H(Cf,a);a.type._context._currentValue=b}function Jf(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}
	function Kf(a,b){Df=a;Ff=Ef=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(Lf=!0),a.firstContext=null)}function Mf(a,b){if(Ff!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Ff=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===Ef){if(null===Df)throw t(Error(308));Ef=b;Df.dependencies={expirationTime:0,firstContext:b,responders:null}}else Ef=Ef.next=b}return a._currentValue}var Nf=!1;
	function Of(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Pf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
	function Qf(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Rf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
	function Sf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Of(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Of(a.memoizedState),e=c.updateQueue=Of(c.memoizedState)):d=a.updateQueue=Pf(e):null===e&&(e=c.updateQueue=Pf(d));null===e||d===e?Rf(d,b):null===d.lastUpdate||null===e.lastUpdate?(Rf(d,b),Rf(e,b)):(Rf(d,b),e.lastUpdate=b)}
	function Tf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Of(a.memoizedState):Uf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Uf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Pf(b));return b}
	function Vf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return m({},d,e);case 2:Nf=!0}return d}
	function Wf(a,b,c,d,e){Nf=!1;b=Uf(a,b);for(var f=b.baseState,h=null,g=0,k=b.firstUpdate,l=f;null!==k;){var n=k.expirationTime;n<e?(null===h&&(h=k,f=l),g<n&&(g=n)):(Xf(n,k.suspenseConfig),l=Vf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}n=null;for(k=b.firstCapturedUpdate;null!==k;){var z=k.expirationTime;z<e?(null===n&&(n=k,null===h&&(f=l)),g<z&&(g=z)):(l=Vf(a,b,k,l,c,d),null!==
	k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===h&&(b.lastUpdate=null);null===n?b.lastCapturedUpdate=null:a.effectTag|=32;null===h&&null===n&&(f=l);b.baseState=f;b.firstUpdate=h;b.firstCapturedUpdate=n;a.expirationTime=g;a.memoizedState=l}
	function Yf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Zf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Zf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Zf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw t(Error(191),c);c.call(d)}a=a.nextEffect}}
	var $f=Xb.ReactCurrentBatchConfig,ag=(new aa.Component).refs;function bg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
	var fg={isMounted:function(a){return(a=a._reactInternalFiber)?2===ld(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=cg(),e=$f.suspense;d=dg(d,a,e);e=Qf(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf(a,e);eg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=cg(),e=$f.suspense;d=dg(d,a,e);e=Qf(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Sf(a,e);eg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=cg(),d=$f.suspense;
	c=dg(c,a,d);d=Qf(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Sf(a,d);eg(a,c)}};function gg(a,b,c,d,e,f,h){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,h):b.prototype&&b.prototype.isPureReactComponent?!jd(c,d)||!jd(e,f):!0}
	function hg(a,b,c){var d=!1,e=Qe;var f=b.contextType;"object"===typeof f&&null!==f?f=Mf(f):(e=N(b)?Re:L.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Se(a,e):Qe);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=fg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function ig(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&fg.enqueueReplaceState(b,b.state,null)}
	function jg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=ag;var f=b.contextType;"object"===typeof f&&null!==f?e.context=Mf(f):(f=N(b)?Re:L.current,e.context=Se(a,f));f=a.updateQueue;null!==f&&(Wf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(bg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
	typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&fg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Wf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var kg=Array.isArray;
	function lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;if(c){if(1!==c.tag)throw t(Error(309));d=c.stateNode}if(!d)throw t(Error(147),a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===ag&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw t(Error(284));if(!c._owner)throw t(Error(290),a);}return a}
	function mg(a,b){if("textarea"!==a.type)throw t(Error(31),"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
	function ng(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=og(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
	2,c):d;b.effectTag=2;return c}function h(b){a&&null===b.alternate&&(b.effectTag=2);return b}function g(a,b,c,d){if(null===b||6!==b.tag)return b=pg(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=lg(a,b,c),d.return=a,d;d=qg(c.type,c.key,c.props,null,a.mode,d);d.ref=lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
	c.implementation)return b=rg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=sg(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function z(a,b,c){if("string"===typeof b||"number"===typeof b)return b=pg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Zb:return c=qg(b.type,b.key,b.props,null,a.mode,c),c.ref=lg(a,null,b),c.return=a,c;case $b:return b=rg(b,a.mode,c),b.return=a,b}if(kg(b)||
	mc(b))return b=sg(b,a.mode,c,null),b.return=a,b;mg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:g(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Zb:return c.key===e?c.type===ac?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case $b:return c.key===e?l(a,b,c,d):null}if(kg(c)||mc(c))return null!==e?null:n(a,b,c,d,null);mg(a,c)}return null}function v(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
	a.get(c)||null,g(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Zb:return a=a.get(null===d.key?c:d.key)||null,d.type===ac?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case $b:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(kg(d)||mc(d))return a=a.get(c)||null,n(b,a,d,e,null);mg(b,d)}return null}function rb(e,h,g,k){for(var l=null,u=null,n=h,w=h=0,C=null;null!==n&&w<g.length;w++){n.index>w?(C=n,n=null):C=n.sibling;var p=x(e,n,g[w],k);if(null===p){null===n&&(n=C);break}a&&
	n&&null===p.alternate&&b(e,n);h=f(p,h,w);null===u?l=p:u.sibling=p;u=p;n=C}if(w===g.length)return c(e,n),l;if(null===n){for(;w<g.length;w++)n=z(e,g[w],k),null!==n&&(h=f(n,h,w),null===u?l=n:u.sibling=n,u=n);return l}for(n=d(e,n);w<g.length;w++)C=v(n,e,w,g[w],k),null!==C&&(a&&null!==C.alternate&&n.delete(null===C.key?w:C.key),h=f(C,h,w),null===u?l=C:u.sibling=C,u=C);a&&n.forEach(function(a){return b(e,a)});return l}function Be(e,h,g,k){var l=mc(g);if("function"!==typeof l)throw t(Error(150));g=l.call(g);
	if(null==g)throw t(Error(151));for(var n=l=null,u=h,w=h=0,C=null,p=g.next();null!==u&&!p.done;w++,p=g.next()){u.index>w?(C=u,u=null):C=u.sibling;var r=x(e,u,p.value,k);if(null===r){null===u&&(u=C);break}a&&u&&null===r.alternate&&b(e,u);h=f(r,h,w);null===n?l=r:n.sibling=r;n=r;u=C}if(p.done)return c(e,u),l;if(null===u){for(;!p.done;w++,p=g.next())p=z(e,p.value,k),null!==p&&(h=f(p,h,w),null===n?l=p:n.sibling=p,n=p);return l}for(u=d(e,u);!p.done;w++,p=g.next())p=v(u,e,w,p.value,k),null!==p&&(a&&null!==
	p.alternate&&u.delete(null===p.key?w:p.key),h=f(p,h,w),null===n?l=p:n.sibling=p,n=p);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,g){var k="object"===typeof f&&null!==f&&f.type===ac&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Zb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){if(7===k.tag?f.type===ac:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ac?f.props.children:f.props,g);d.ref=lg(a,k,f);d.return=a;a=d;break a}c(a,
	k);break}else b(a,k);k=k.sibling}f.type===ac?(d=sg(f.props.children,a.mode,g,f.key),d.return=a,a=d):(g=qg(f.type,f.key,f.props,null,a.mode,g),g.ref=lg(a,d,f),g.return=a,a=g)}return h(a);case $b:a:{for(k=f.key;null!==d;){if(d.key===k){if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],g);d.return=a;a=d;break a}c(a,d);break}else b(a,d);d=d.sibling}d=rg(f,a.mode,g);d.return=a;a=d}return h(a)}if("string"===typeof f||
	"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,g),d.return=a,a=d):(c(a,d),d=pg(f,a.mode,g),d.return=a,a=d),h(a);if(kg(f))return rb(a,d,f,g);if(mc(f))return Be(a,d,f,g);l&&mg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,t(Error(152),a.displayName||a.name||"Component");}return c(a,d)}}var tg=ng(!0),ug=ng(!1),vg={},wg={current:vg},xg={current:vg},yg={current:vg};function zg(a){if(a===vg)throw t(Error(174));return a}
	function Ag(a,b){J(yg,b,a);J(xg,a,a);J(wg,vg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:te(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=te(b,c)}H(wg,a);J(wg,b,a)}function Bg(a){H(wg,a);H(xg,a);H(yg,a)}function Cg(a){zg(yg.current);var b=zg(wg.current);var c=te(b,a.type);b!==c&&(J(xg,a,a),J(wg,c,a))}function Dg(a){xg.current===a&&(H(wg,a),H(xg,a))}var Eg=1,Fg=1,Gg=2,P={current:0};
	function Hg(a){for(var b=a;null!==b;){if(13===b.tag){if(null!==b.memoizedState)return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}
	var Ig=0,Jg=2,Kg=4,Lg=8,Mg=16,Ng=32,Og=64,Pg=128,Qg=Xb.ReactCurrentDispatcher,Rg=0,Sg=null,Q=null,Tg=null,Ug=null,R=null,Vg=null,Wg=0,Xg=null,Yg=0,Zg=!1,$g=null,ah=0;function bh(){throw t(Error(321));}function ch(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!hd(a[c],b[c]))return!1;return!0}
	function dh(a,b,c,d,e,f){Rg=f;Sg=b;Tg=null!==a?a.memoizedState:null;Qg.current=null===Tg?eh:fh;b=c(d,e);if(Zg){do Zg=!1,ah+=1,Tg=null!==a?a.memoizedState:null,Vg=Ug,Xg=R=Q=null,Qg.current=fh,b=c(d,e);while(Zg);$g=null;ah=0}Qg.current=hh;a=Sg;a.memoizedState=Ug;a.expirationTime=Wg;a.updateQueue=Xg;a.effectTag|=Yg;a=null!==Q&&null!==Q.next;Rg=0;Vg=R=Ug=Tg=Q=Sg=null;Wg=0;Xg=null;Yg=0;if(a)throw t(Error(300));return b}
	function ih(){Qg.current=hh;Rg=0;Vg=R=Ug=Tg=Q=Sg=null;Wg=0;Xg=null;Yg=0;Zg=!1;$g=null;ah=0}function jh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===R?Ug=R=a:R=R.next=a;return R}function kh(){if(null!==Vg)R=Vg,Vg=R.next,Q=Tg,Tg=null!==Q?Q.next:null;else{if(null===Tg)throw t(Error(310));Q=Tg;var a={memoizedState:Q.memoizedState,baseState:Q.baseState,queue:Q.queue,baseUpdate:Q.baseUpdate,next:null};R=null===R?Ug=a:R.next=a;Tg=Q.next}return R}
	function lh(a,b){return"function"===typeof b?b(a):b}
	function mh(a){var b=kh(),c=b.queue;if(null===c)throw t(Error(311));c.lastRenderedReducer=a;if(0<ah){var d=c.dispatch;if(null!==$g){var e=$g.get(c);if(void 0!==e){$g.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var h=b.baseUpdate;f=b.baseState;null!==h?(null!==d&&(d.next=null),d=h.next):d=null!==d?d.next:null;if(null!==
	d){var g=e=null,k=d,l=!1;do{var n=k.expirationTime;n<Rg?(l||(l=!0,g=h,e=f),n>Wg&&(Wg=n)):(Xf(n,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));h=k;k=k.next}while(null!==k&&k!==d);l||(g=h,e=f);hd(f,b.memoizedState)||(Lf=!0);b.memoizedState=f;b.baseUpdate=g;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
	function nh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===Xg?(Xg={lastEffect:null},Xg.lastEffect=a.next=a):(b=Xg.lastEffect,null===b?Xg.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,Xg.lastEffect=a));return a}function oh(a,b,c,d){var e=jh();Yg|=a;e.memoizedState=nh(b,c,void 0,void 0===d?null:d)}
	function ph(a,b,c,d){var e=kh();d=void 0===d?null:d;var f=void 0;if(null!==Q){var h=Q.memoizedState;f=h.destroy;if(null!==d&&ch(d,h.deps)){nh(Ig,c,f,d);return}}Yg|=a;e.memoizedState=nh(b,c,f,d)}function qh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function rh(){}
	function sh(a,b,c){if(!(25>ah))throw t(Error(301));var d=a.alternate;if(a===Sg||null!==d&&d===Sg)if(Zg=!0,a={expirationTime:Rg,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===$g&&($g=new Map),c=$g.get(b),void 0===c)$g.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=cg(),f=$f.suspense;e=dg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var h=b.last;if(null===h)f.next=f;else{var g=h.next;null!==g&&
	(f.next=g);h.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(hd(l,k))return}catch(n){}finally{}eg(a,e)}}
	var hh={readContext:Mf,useCallback:bh,useContext:bh,useEffect:bh,useImperativeHandle:bh,useLayoutEffect:bh,useMemo:bh,useReducer:bh,useRef:bh,useState:bh,useDebugValue:bh,useResponder:bh},eh={readContext:Mf,useCallback:function(a,b){jh().memoizedState=[a,void 0===b?null:b];return a},useContext:Mf,useEffect:function(a,b){return oh(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return oh(4,Kg|Ng,qh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return oh(4,
	Kg|Ng,a,b)},useMemo:function(a,b){var c=jh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=jh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=sh.bind(null,Sg,a);return[d.memoizedState,a]},useRef:function(a){var b=jh();a={current:a};return b.memoizedState=a},useState:function(a){var b=jh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue=
	{last:null,dispatch:null,lastRenderedReducer:lh,lastRenderedState:a};a=a.dispatch=sh.bind(null,Sg,a);return[b.memoizedState,a]},useDebugValue:rh,useResponder:kd},fh={readContext:Mf,useCallback:function(a,b){var c=kh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ch(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:Mf,useEffect:function(a,b){return ph(516,Pg|Og,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ph(4,Kg|Ng,qh.bind(null,
	b,a),c)},useLayoutEffect:function(a,b){return ph(4,Kg|Ng,a,b)},useMemo:function(a,b){var c=kh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ch(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:mh,useRef:function(){return kh().memoizedState},useState:function(a){return mh(lh,a)},useDebugValue:rh,useResponder:kd},th=null,uh=null,vh=!1;
	function wh(a,b){var c=xh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function yh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
	function zh(a){if(vh){var b=uh;if(b){var c=b;if(!yh(a,b)){b=Ne(c.nextSibling);if(!b||!yh(a,b)){a.effectTag|=2;vh=!1;th=a;return}wh(th,c)}th=a;uh=Ne(b.firstChild)}else a.effectTag|=2,vh=!1,th=a}}function Ah(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;th=a}
	function Bh(a){if(a!==th)return!1;if(!vh)return Ah(a),vh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ke(b,a.memoizedProps))for(b=uh;b;)wh(a,b),b=Ne(b.nextSibling);Ah(a);uh=th?Ne(a.stateNode.nextSibling):null;return!0}function Ch(){uh=th=null;vh=!1}var Dh=Xb.ReactCurrentOwner,Lf=!1;function S(a,b,c,d){b.child=null===a?ug(b,null,c,d):tg(b,a.child,c,d)}
	function Eh(a,b,c,d,e){c=c.render;var f=b.ref;Kf(b,e);d=dh(a,b,c,d,f,e);if(null!==a&&!Lf)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Fh(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
	function Gh(a,b,c,d,e,f){if(null===a){var h=c.type;if("function"===typeof h&&!Hh(h)&&void 0===h.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=h,Ih(a,b,h,d,e,f);a=qg(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}h=a.child;if(e<f&&(e=h.memoizedProps,c=c.compare,c=null!==c?c:jd,c(e,d)&&a.ref===b.ref))return Fh(a,b,f);b.effectTag|=1;a=og(h,d,f);a.ref=b.ref;a.return=b;return b.child=a}
	function Ih(a,b,c,d,e,f){return null!==a&&jd(a.memoizedProps,d)&&a.ref===b.ref&&(Lf=!1,e<f)?Fh(a,b,f):Jh(a,b,c,d,f)}function Kh(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Jh(a,b,c,d,e){var f=N(c)?Re:L.current;f=Se(b,f);Kf(b,e);c=dh(a,b,c,d,f,e);if(null!==a&&!Lf)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Fh(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
	function Lh(a,b,c,d,e){if(N(c)){var f=!0;Xe(b)}else f=!1;Kf(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),hg(b,c,d,e),jg(b,c,d,e),d=!0;else if(null===a){var h=b.stateNode,g=b.memoizedProps;h.props=g;var k=h.context,l=c.contextType;"object"===typeof l&&null!==l?l=Mf(l):(l=N(c)?Re:L.current,l=Se(b,l));var n=c.getDerivedStateFromProps,z="function"===typeof n||"function"===typeof h.getSnapshotBeforeUpdate;z||"function"!==typeof h.UNSAFE_componentWillReceiveProps&&
	"function"!==typeof h.componentWillReceiveProps||(g!==d||k!==l)&&ig(b,h,d,l);Nf=!1;var x=b.memoizedState;k=h.state=x;var v=b.updateQueue;null!==v&&(Wf(b,v,d,h,e),k=b.memoizedState);g!==d||x!==k||M.current||Nf?("function"===typeof n&&(bg(b,c,n,d),k=b.memoizedState),(g=Nf||gg(b,c,g,d,x,k,l))?(z||"function"!==typeof h.UNSAFE_componentWillMount&&"function"!==typeof h.componentWillMount||("function"===typeof h.componentWillMount&&h.componentWillMount(),"function"===typeof h.UNSAFE_componentWillMount&&
	h.UNSAFE_componentWillMount()),"function"===typeof h.componentDidMount&&(b.effectTag|=4)):("function"===typeof h.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),h.props=d,h.state=k,h.context=l,d=g):("function"===typeof h.componentDidMount&&(b.effectTag|=4),d=!1)}else h=b.stateNode,g=b.memoizedProps,h.props=b.type===b.elementType?g:Af(b.type,g),k=h.context,l=c.contextType,"object"===typeof l&&null!==l?l=Mf(l):(l=N(c)?Re:L.current,l=Se(b,l)),n=c.getDerivedStateFromProps,(z=
	"function"===typeof n||"function"===typeof h.getSnapshotBeforeUpdate)||"function"!==typeof h.UNSAFE_componentWillReceiveProps&&"function"!==typeof h.componentWillReceiveProps||(g!==d||k!==l)&&ig(b,h,d,l),Nf=!1,k=b.memoizedState,x=h.state=k,v=b.updateQueue,null!==v&&(Wf(b,v,d,h,e),x=b.memoizedState),g!==d||k!==x||M.current||Nf?("function"===typeof n&&(bg(b,c,n,d),x=b.memoizedState),(n=Nf||gg(b,c,g,d,k,x,l))?(z||"function"!==typeof h.UNSAFE_componentWillUpdate&&"function"!==typeof h.componentWillUpdate||
	("function"===typeof h.componentWillUpdate&&h.componentWillUpdate(d,x,l),"function"===typeof h.UNSAFE_componentWillUpdate&&h.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof h.componentDidUpdate&&(b.effectTag|=4),"function"===typeof h.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof h.componentDidUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof h.getSnapshotBeforeUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
	d,b.memoizedState=x),h.props=d,h.state=x,h.context=l,d=n):("function"!==typeof h.componentDidUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof h.getSnapshotBeforeUpdate||g===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return Mh(a,b,c,d,f,e)}
	function Mh(a,b,c,d,e,f){Kh(a,b);var h=0!==(b.effectTag&64);if(!d&&!h)return e&&Ye(b,c,!1),Fh(a,b,f);d=b.stateNode;Dh.current=b;var g=h&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&h?(b.child=tg(b,a.child,null,f),b.child=tg(b,null,g,f)):S(a,b,g,f);b.memoizedState=d.state;e&&Ye(b,c,!0);return b.child}function Nh(a){var b=a.stateNode;b.pendingContext?Ve(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ve(a,b.context,!1);Ag(a,b.containerInfo)}
	var Oh={};
	function Ph(a,b,c){var d=b.mode,e=b.pendingProps,f=P.current,h=null,g=!1,k;(k=0!==(b.effectTag&64))||(k=0!==(f&Gg)&&(null===a||null!==a.memoizedState));k?(h=Oh,g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=Fg);f&=Eg;J(P,f,b);if(null===a)if(g){e=e.fallback;a=sg(null,d,0,null);a.return=b;if(0===(b.mode&2))for(g=null!==b.memoizedState?b.child.child:b.child,a.child=g;null!==g;)g.return=a,g=g.sibling;c=sg(e,d,c,null);c.return=b;a.sibling=
	c;d=a}else d=c=ug(b,null,e.children,c);else{if(null!==a.memoizedState)if(f=a.child,d=f.sibling,g){e=e.fallback;c=og(f,f.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==f.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;e=og(d,e,d.expirationTime);e.return=b;c.sibling=e;d=c;c.childExpirationTime=0;c=e}else d=c=tg(b,f.child,e.children,c);else if(f=a.child,g){g=e.fallback;e=sg(null,d,0,null);e.return=b;e.child=f;null!==f&&(f.return=e);if(0===(b.mode&
	2))for(f=null!==b.memoizedState?b.child.child:b.child,e.child=f;null!==f;)f.return=e,f=f.sibling;c=sg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;d=e;e.childExpirationTime=0}else c=d=tg(b,f,e.children,c);b.stateNode=a.stateNode}b.memoizedState=h;b.child=d;return c}function Qh(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.last=d,f.tail=c,f.tailExpiration=0,f.tailMode=e)}
	function Rh(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;S(a,b,d.children,c);d=P.current;if(0!==(d&Gg))d=d&Eg|Gg,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag){if(null!==a.memoizedState){a.expirationTime<c&&(a.expirationTime=c);var h=a.alternate;null!==h&&h.expirationTime<c&&(h.expirationTime=c);Jf(a.return,c)}}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===
	b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=Eg}J(P,d,b);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)d=c.alternate,null!==d&&null===Hg(d)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Qh(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){d=e.alternate;if(null!==d&&null===Hg(d)){b.child=e;break}d=e.sibling;e.sibling=c;c=e;e=d}Qh(b,!0,c,null,f);break;case "together":Qh(b,
	!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}function Fh(a,b,c){null!==a&&(b.dependencies=a.dependencies);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw t(Error(153));if(null!==b.child){a=b.child;c=og(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=og(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function Sh(a){a.effectTag|=4}
	var Th=void 0,Uh=void 0,Vh=void 0,Wh=void 0;Th=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(20===c.tag)a.appendChild(c.stateNode.instance);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Uh=function(){};
	Vh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var h=b.stateNode;zg(wg.current);a=null;switch(c){case "input":f=Bc(h,f);d=Bc(h,d);a=[];break;case "option":f=le(h,f);d=le(h,d);a=[];break;case "select":f=m({},f,{value:void 0});d=m({},d,{value:void 0});a=[];break;case "textarea":f=ne(h,f);d=ne(h,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(h.onclick=Ge)}De(c,d);h=c=void 0;var g=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
	c){var k=f[c];for(h in k)k.hasOwnProperty(h)&&(g||(g={}),g[h]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ia.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(h in k)!k.hasOwnProperty(h)||l&&l.hasOwnProperty(h)||(g||(g={}),g[h]="");for(h in l)l.hasOwnProperty(h)&&k[h]!==l[h]&&(g||
	(g={}),g[h]=l[h])}else g||(a||(a=[]),a.push(c,g)),g=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ia.hasOwnProperty(c)?(null!=l&&Fe(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}g&&(a=a||[]).push("style",g);e=a;(b.updateQueue=e)&&Sh(b)}};Wh=function(a,b,c,d){c!==d&&Sh(b)};
	function $h(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
	function ai(a){switch(a.tag){case 1:N(a.type)&&Te(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:Bg(a);Ue(a);b=a.effectTag;if(0!==(b&64))throw t(Error(285));a.effectTag=b&-2049|64;return a;case 5:return Dg(a),null;case 13:return H(P,a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 19:return H(P,a),null;case 4:return Bg(a),null;case 10:return If(a),null;default:return null}}function bi(a,b){return{value:a,source:b,stack:pc(b)}}
	var ci="function"===typeof WeakSet?WeakSet:Set;function di(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=pc(c));null!==c&&oc(c.type);b=b.value;null!==a&&1===a.tag&&oc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function ei(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){fi(a,c)}}function gi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){fi(a,c)}else b.current=null}
	function hi(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Ig){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Ig&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
	function ii(a,b){"function"===typeof ji&&ji(a);switch(a.tag){case 0:case 11:case 14:case 15:var c=a.updateQueue;if(null!==c&&(c=c.lastEffect,null!==c)){var d=c.next;vf(97<b?97:b,function(){var b=d;do{var c=b.destroy;if(void 0!==c){var h=a;try{c()}catch(g){fi(h,g)}}b=b.next}while(b!==d)})}break;case 1:gi(a);b=a.stateNode;"function"===typeof b.componentWillUnmount&&ei(a,b);break;case 5:gi(a);break;case 4:ki(a,b)}}
	function li(a,b){for(var c=a;;)if(ii(c,b),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}function mi(a){return 5===a.tag||3===a.tag||4===a.tag}
	function ni(a){a:{for(var b=a.return;null!==b;){if(mi(b)){var c=b;break a}b=b.return}throw t(Error(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw t(Error(161));}c.effectTag&16&&(we(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||mi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
	if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f||20===e.tag){var h=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var g=h;h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(h,c);else d?(g=b,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=Ge)):
	b.appendChild(h)}else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
	function ki(a,b){for(var c=a,d=!1,e=void 0,f=void 0;;){if(!d){d=c.return;a:for(;;){if(null===d)throw t(Error(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag)if(li(c,b),f){var h=e,g=c.stateNode;8===h.nodeType?h.parentNode.removeChild(g):h.removeChild(g)}else e.removeChild(c.stateNode);else if(20===c.tag)g=c.stateNode.instance,li(c,b),f?(h=e,8===h.nodeType?h.parentNode.removeChild(g):
	h.removeChild(g)):e.removeChild(g);else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(ii(c,b),null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
	function oi(a,b){switch(b.tag){case 0:case 11:case 14:case 15:hi(Kg,Lg,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ga]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Dc(c,d);Ee(a,e);b=Ee(a,d);for(e=0;e<f.length;e+=2){var h=f[e],g=f[e+1];"style"===h?Ae(c,g):"dangerouslySetInnerHTML"===h?ve(c,g):"children"===h?we(c,g):zc(c,h,g,b)}switch(a){case "input":Ec(c,d);break;case "textarea":pe(c,
	d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?me(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?me(c,!!d.multiple,d.defaultValue,!0):me(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw t(Error(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,pi=sf());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=
	f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ze("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===
	a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}qi(b);break;case 19:qi(b);break;case 17:break;case 20:break;default:throw t(Error(163));}}function qi(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new ci);b.forEach(function(b){var d=ri.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var si="function"===typeof WeakMap?WeakMap:Map;
	function ti(a,b,c){c=Qf(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){ui||(ui=!0,vi=d);di(a,b)};return c}
	function wi(a,b,c){c=Qf(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){di(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===xi?xi=new Set([this]):xi.add(this),di(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
	var yi=Math.ceil,zi=Xb.ReactCurrentDispatcher,Ai=Xb.ReactCurrentOwner,T=0,Bi=8,Ci=16,Di=32,Ei=0,Fi=1,Gi=2,Hi=3,Ii=4,U=T,Ji=null,V=null,W=0,X=Ei,Ki=1073741823,Li=1073741823,Mi=null,Ni=!1,pi=0,Oi=500,Y=null,ui=!1,vi=null,xi=null,Pi=!1,Qi=null,Ri=90,Si=0,Ti=null,Ui=0,Vi=null,Wi=0;function cg(){return(U&(Ci|Di))!==T?1073741821-(sf()/10|0):0!==Wi?Wi:Wi=1073741821-(sf()/10|0)}
	function dg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=tf();if(0===(b&4))return 99===d?1073741823:1073741822;if((U&Ci)!==T)return W;if(null!==c)a=1073741821-25*(((1073741821-a+(c.timeoutMs|0||5E3)/10)/25|0)+1);else switch(d){case 99:a=1073741823;break;case 98:a=1073741821-10*(((1073741821-a+15)/10|0)+1);break;case 97:case 96:a=1073741821-25*(((1073741821-a+500)/25|0)+1);break;case 95:a=1;break;default:throw t(Error(326));}null!==Ji&&a===W&&--a;return a}var Xi=0;
	function eg(a,b){if(50<Ui)throw Ui=0,Vi=null,t(Error(185));a=Yi(a,b);if(null!==a){a.pingTime=0;var c=tf();if(1073741823===b)if((U&Bi)!==T&&(U&(Ci|Di))===T)for(var d=Z(a,1073741823,!0);null!==d;)d=d(!0);else Zi(a,99,1073741823),U===T&&O();else Zi(a,c,b);(U&4)===T||98!==c&&99!==c||(null===Ti?Ti=new Map([[a,b]]):(c=Ti.get(a),(void 0===c||c>b)&&Ti.set(a,b)))}}
	function Yi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(b>e.firstPendingTime&&(e.firstPendingTime=b),a=e.lastPendingTime,0===a||b<a)&&(e.lastPendingTime=
	b);return e}function Zi(a,b,c){if(a.callbackExpirationTime<c){var d=a.callbackNode;null!==d&&d!==mf&&af(d);a.callbackExpirationTime=c;1073741823===c?a.callbackNode=xf($i.bind(null,a,Z.bind(null,a,c))):(d=null,1!==c&&(d={timeout:10*(1073741821-c)-sf()}),a.callbackNode=wf(b,$i.bind(null,a,Z.bind(null,a,c)),d))}}function $i(a,b,c){var d=a.callbackNode,e=null;try{return e=b(c),null!==e?$i.bind(null,a,e):null}finally{null===e&&d===a.callbackNode&&(a.callbackNode=null,a.callbackExpirationTime=0)}}
	function aj(){(U&(1|Ci|Di))===T&&(bj(),cj())}function dj(a,b){var c=a.firstBatch;return null!==c&&c._defer&&c._expirationTime>=b?(wf(97,function(){c._onComplete();return null}),!0):!1}function bj(){if(null!==Ti){var a=Ti;Ti=null;a.forEach(function(a,c){xf(Z.bind(null,c,a))});O()}}function ej(a,b){var c=U;U|=1;try{return a(b)}finally{U=c,U===T&&O()}}function fj(a,b,c,d){var e=U;U|=4;try{return vf(98,a.bind(null,b,c,d))}finally{U=e,U===T&&O()}}
	function gj(a,b){var c=U;U&=-2;U|=Bi;try{return a(b)}finally{U=c,U===T&&O()}}
	function hj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Me(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Te(d);break;case 3:Bg(d);Ue(d);break;case 5:Dg(d);break;case 4:Bg(d);break;case 13:H(P,d);break;case 19:H(P,d);break;case 10:If(d)}c=c.return}Ji=a;V=og(a.current,null,b);W=b;X=Ei;Li=Ki=1073741823;Mi=null;Ni=!1}
	function Z(a,b,c){if((U&(Ci|Di))!==T)throw t(Error(327));if(a.firstPendingTime<b)return null;if(c&&a.finishedExpirationTime===b)return ij.bind(null,a);cj();if(a!==Ji||b!==W)hj(a,b);else if(X===Hi)if(Ni)hj(a,b);else{var d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d)}if(null!==V){d=U;U|=Ci;var e=zi.current;null===e&&(e=hh);zi.current=hh;if(c){if(1073741823!==b){var f=cg();if(f<b)return U=d,Gf(),zi.current=e,Z.bind(null,a,f)}}else Wi=0;do try{if(c)for(;null!==V;)V=jj(V);else for(;null!==V&&!bf();)V=
	jj(V);break}catch(rb){Gf();ih();f=V;if(null===f||null===f.return)throw hj(a,b),U=d,rb;a:{var h=a,g=f.return,k=f,l=rb,n=W;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===typeof l&&"function"===typeof l.then){var z=l,x=0!==(P.current&Fg);l=g;do{var v;if(v=13===l.tag)null!==l.memoizedState?v=!1:(v=l.memoizedProps,v=void 0===v.fallback?!1:!0!==v.unstable_avoidThisFallback?!0:x?!1:!0);if(v){g=l.updateQueue;null===g?(g=new Set,g.add(z),l.updateQueue=g):g.add(z);if(0===(l.mode&
	2)){l.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(n=Qf(1073741823,null),n.tag=2,Sf(k,n)));k.expirationTime=1073741823;break a}k=h;h=n;x=k.pingCache;null===x?(x=k.pingCache=new si,g=new Set,x.set(z,g)):(g=x.get(z),void 0===g&&(g=new Set,x.set(z,g)));g.has(h)||(g.add(h),k=kj.bind(null,k,z,h),z.then(k,k));l.effectTag|=2048;l.expirationTime=n;break a}l=l.return}while(null!==l);l=Error((oc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
	pc(k))}X!==Ii&&(X=Fi);l=bi(l,k);k=g;do{switch(k.tag){case 3:k.effectTag|=2048;k.expirationTime=n;n=ti(k,l,n);Tf(k,n);break a;case 1:if(z=l,h=k.type,g=k.stateNode,0===(k.effectTag&64)&&("function"===typeof h.getDerivedStateFromError||null!==g&&"function"===typeof g.componentDidCatch&&(null===xi||!xi.has(g)))){k.effectTag|=2048;k.expirationTime=n;n=wi(k,z,n);Tf(k,n);break a}}k=k.return}while(null!==k)}V=lj(f)}while(1);U=d;Gf();zi.current=e;if(null!==V)return Z.bind(null,a,b)}a.finishedWork=a.current.alternate;
	a.finishedExpirationTime=b;if(dj(a,b))return null;Ji=null;switch(X){case Ei:throw t(Error(328));case Fi:return d=a.lastPendingTime,d<b?Z.bind(null,a,d):c?ij.bind(null,a):(hj(a,b),xf(Z.bind(null,a,b)),null);case Gi:if(1073741823===Ki&&!c&&(c=pi+Oi-sf(),10<c)){if(Ni)return hj(a,b),Z.bind(null,a,b);d=a.lastPendingTime;if(d<b)return Z.bind(null,a,d);a.timeoutHandle=Le(ij.bind(null,a),c);return null}return ij.bind(null,a);case Hi:if(!c){if(Ni)return hj(a,b),Z.bind(null,a,b);c=a.lastPendingTime;if(c<b)return Z.bind(null,
	a,c);1073741823!==Li?c=10*(1073741821-Li)-sf():1073741823===Ki?c=0:(c=10*(1073741821-Ki)-5E3,d=sf(),b=10*(1073741821-b)-d,c=d-c,0>c&&(c=0),c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>c?4320:1960*yi(c/1960))-c,b<c&&(c=b));if(10<c)return a.timeoutHandle=Le(ij.bind(null,a),c),null}return ij.bind(null,a);case Ii:return!c&&1073741823!==Ki&&null!==Mi&&(d=Ki,e=Mi,b=e.busyMinDurationMs|0,0>=b?b=0:(c=e.busyDelayMs|0,d=sf()-(10*(1073741821-d)-(e.timeoutMs|0||5E3)),b=d<=c?0:c+b-d),10<b)?(a.timeoutHandle=
	Le(ij.bind(null,a),b),null):ij.bind(null,a);default:throw t(Error(329));}}function Xf(a,b){a<Ki&&1<a&&(Ki=a);null!==b&&a<Li&&1<a&&(Li=a,Mi=b)}function jj(a){var b=mj(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=lj(a));Ai.current=null;return b}
	function lj(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&1024)){a:{var c=b;b=V;var d=W,e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:N(b.type)&&Te(b);break;case 3:Bg(b);Ue(b);d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===c||null===c.child)Bh(b),b.effectTag&=-3;Uh(b);break;case 5:Dg(b);d=zg(yg.current);var f=b.type;if(null!==c&&null!=b.stateNode)Vh(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var h=
	zg(wg.current);if(Bh(b)){c=b;e=void 0;f=c.stateNode;var g=c.type,k=c.memoizedProps;f[Fa]=c;f[Ga]=k;switch(g){case "iframe":case "object":case "embed":G("load",f);break;case "video":case "audio":for(var l=0;l<bb.length;l++)G(bb[l],f);break;case "source":G("error",f);break;case "img":case "image":case "link":G("error",f);G("load",f);break;case "form":G("reset",f);G("submit",f);break;case "details":G("toggle",f);break;case "input":Cc(f,k);G("invalid",f);Fe(d,"onChange");break;case "select":f._wrapperState=
	{wasMultiple:!!k.multiple};G("invalid",f);Fe(d,"onChange");break;case "textarea":oe(f,k),G("invalid",f),Fe(d,"onChange")}De(g,k);l=null;for(e in k)k.hasOwnProperty(e)&&(h=k[e],"children"===e?"string"===typeof h?f.textContent!==h&&(l=["children",h]):"number"===typeof h&&f.textContent!==""+h&&(l=["children",""+h]):ia.hasOwnProperty(e)&&null!=h&&Fe(d,e));switch(g){case "input":Vb(f);Gc(f,k,!0);break;case "textarea":Vb(f);qe(f,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
	(f.onclick=Ge)}d=l;c.updateQueue=d;null!==d&&Sh(b)}else{k=f;c=e;g=b;l=9===d.nodeType?d:d.ownerDocument;h===re.html&&(h=se(k));h===re.html?"script"===k?(k=l.createElement("div"),k.innerHTML="<script>\x3c/script>",l=k.removeChild(k.firstChild)):"string"===typeof c.is?l=l.createElement(k,{is:c.is}):(l=l.createElement(k),"select"===k&&(k=l,c.multiple?k.multiple=!0:c.size&&(k.size=c.size))):l=l.createElementNS(h,k);k=l;k[Fa]=g;k[Ga]=c;c=k;Th(c,b,!1,!1);g=c;var n=d,z=Ee(f,e);switch(f){case "iframe":case "object":case "embed":G("load",
	g);d=e;break;case "video":case "audio":for(d=0;d<bb.length;d++)G(bb[d],g);d=e;break;case "source":G("error",g);d=e;break;case "img":case "image":case "link":G("error",g);G("load",g);d=e;break;case "form":G("reset",g);G("submit",g);d=e;break;case "details":G("toggle",g);d=e;break;case "input":Cc(g,e);d=Bc(g,e);G("invalid",g);Fe(n,"onChange");break;case "option":d=le(g,e);break;case "select":g._wrapperState={wasMultiple:!!e.multiple};d=m({},e,{value:void 0});G("invalid",g);Fe(n,"onChange");break;case "textarea":oe(g,
	e);d=ne(g,e);G("invalid",g);Fe(n,"onChange");break;default:d=e}De(f,d);k=void 0;l=f;h=g;var x=d;for(k in x)if(x.hasOwnProperty(k)){var v=x[k];"style"===k?Ae(h,v):"dangerouslySetInnerHTML"===k?(v=v?v.__html:void 0,null!=v&&ve(h,v)):"children"===k?"string"===typeof v?("textarea"!==l||""!==v)&&we(h,v):"number"===typeof v&&we(h,""+v):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ia.hasOwnProperty(k)?null!=v&&Fe(n,k):null!=v&&zc(h,k,v,z))}switch(f){case "input":Vb(g);
	Gc(g,e,!1);break;case "textarea":Vb(g);qe(g,e);break;case "option":null!=e.value&&g.setAttribute("value",""+Ac(e.value));break;case "select":d=g;g=e;d.multiple=!!g.multiple;k=g.value;null!=k?me(d,!!g.multiple,k,!1):null!=g.defaultValue&&me(d,!!g.multiple,g.defaultValue,!0);break;default:"function"===typeof d.onClick&&(g.onclick=Ge)}Je(f,e)&&Sh(b);b.stateNode=c}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw t(Error(166));break;case 6:if(c&&null!=b.stateNode)Wh(c,b,c.memoizedProps,
	e);else{if("string"!==typeof e&&null===b.stateNode)throw t(Error(166));c=zg(yg.current);zg(wg.current);Bh(b)?(d=b.stateNode,c=b.memoizedProps,d[Fa]=b,d.nodeValue!==c&&Sh(b)):(d=b,c=(9===c.nodeType?c:c.ownerDocument).createTextNode(e),c[Fa]=b,d.stateNode=c)}break;case 11:break;case 13:H(P,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}d=null!==e;e=!1;null===c?Bh(b):(f=c.memoizedState,e=null!==f,d||null===f||(f=c.child.sibling,null!==f&&(g=b.firstEffect,null!==g?(b.firstEffect=
	f,f.nextEffect=g):(b.firstEffect=b.lastEffect=f,f.nextEffect=null),f.effectTag=8)));if(d&&!e&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&Fg))X===Ei&&(X=Gi);else if(X===Ei||X===Gi)X=Hi;if(d||e)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Bg(b);Uh(b);break;case 10:If(b);break;case 9:break;case 14:break;case 17:N(b.type)&&Te(b);break;case 18:break;case 19:H(P,b);e=b.memoizedState;if(null===e)break;f=0!==(b.effectTag&64);g=e.rendering;
	if(null===g)if(f)$h(e,!1);else{if(X!==Ei||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){g=Hg(c);if(null!==g){b.effectTag|=64;$h(e,!1);c=g.updateQueue;null!==c&&(b.updateQueue=c,b.effectTag|=4);b.firstEffect=b.lastEffect=null;for(c=b.child;null!==c;)e=c,f=d,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,g=e.alternate,null===g?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=
	g.childExpirationTime,e.expirationTime=g.expirationTime,e.child=g.child,e.memoizedProps=g.memoizedProps,e.memoizedState=g.memoizedState,e.updateQueue=g.updateQueue,f=g.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),c=c.sibling;J(P,P.current&Eg|Gg,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=Hg(g),null!==c){if(b.effectTag|=64,f=!0,$h(e,!0),null===e.tail&&"hidden"===e.tailMode){d=c.updateQueue;null!==d&&(b.updateQueue=
	d,b.effectTag|=4);b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else sf()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,$h(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(g.sibling=b.child,b.child=g):(d=e.last,null!==d?d.sibling=g:b.child=g,e.last=g)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=sf()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;e.lastEffect=b.lastEffect;d.sibling=null;c=P.current;c=f?c&Eg|Gg:c&Eg;J(P,c,b);b=d;break a}break;case 20:break;
	default:throw t(Error(156));}b=null}d=V;if(1===W||1!==d.childExpirationTime){c=0;for(e=d.child;null!==e;)f=e.expirationTime,g=e.childExpirationTime,f>c&&(c=f),g>c&&(c=g),e=e.sibling;d.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&1024)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,
	a.lastEffect=V))}else{b=ai(V,W);if(null!==b)return b.effectTag&=1023,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=1024)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===Ei&&(X=Ii);return null}function ij(a){var b=tf();vf(99,nj.bind(null,a,b));null!==Qi&&wf(97,function(){cj();return null});return null}
	function nj(a,b){cj();if((U&(Ci|Di))!==T)throw t(Error(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw t(Error(177));a.callbackNode=null;a.callbackExpirationTime=0;var e=c.expirationTime,f=c.childExpirationTime;e=f>e?f:e;a.firstPendingTime=e;e<a.lastPendingTime&&(a.lastPendingTime=e);a===Ji&&(V=Ji=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;
	if(null!==e){f=U;U|=Di;Ai.current=null;He=Qd;var h=ae();if(be(h)){if("selectionStart"in h)var g={start:h.selectionStart,end:h.selectionEnd};else a:{g=(g=h.ownerDocument)&&g.defaultView||window;var k=g.getSelection&&g.getSelection();if(k&&0!==k.rangeCount){g=k.anchorNode;var l=k.anchorOffset,n=k.focusNode;k=k.focusOffset;try{g.nodeType,n.nodeType}catch(zb){g=null;break a}var z=0,x=-1,v=-1,rb=0,Be=0,u=h,w=null;b:for(;;){for(var C;;){u!==g||0!==l&&3!==u.nodeType||(x=z+l);u!==n||0!==k&&3!==u.nodeType||
	(v=z+k);3===u.nodeType&&(z+=u.nodeValue.length);if(null===(C=u.firstChild))break;w=u;u=C}for(;;){if(u===h)break b;w===g&&++rb===l&&(x=z);w===n&&++Be===k&&(v=z);if(null!==(C=u.nextSibling))break;u=w;w=u.parentNode}u=C}g=-1===x||-1===v?null:{start:x,end:v}}else g=null}g=g||{start:0,end:0}}else g=null;Ie={focusedElem:h,selectionRange:g};Qd=!1;Y=e;do try{for(;null!==Y;){if(0!==(Y.effectTag&256)){var I=Y.alternate;h=Y;switch(h.tag){case 0:case 11:case 15:hi(Jg,Ig,h);break;case 1:if(h.effectTag&256&&null!==
	I){var E=I.memoizedProps,ua=I.memoizedState,gh=h.stateNode,oj=gh.getSnapshotBeforeUpdate(h.elementType===h.type?E:Af(h.type,E),ua);gh.__reactInternalSnapshotBeforeUpdate=oj}break;case 3:case 5:case 6:case 4:case 17:break;default:throw t(Error(163));}}Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));fi(Y,zb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(I=b;null!==Y;){var A=Y.effectTag;A&16&&we(Y.stateNode,"");if(A&128){var p=Y.alternate;if(null!==p){var r=p.ref;null!==r&&("function"===typeof r?
	r(null):r.current=null)}}switch(A&14){case 2:ni(Y);Y.effectTag&=-3;break;case 6:ni(Y);Y.effectTag&=-3;oi(Y.alternate,Y);break;case 4:oi(Y.alternate,Y);break;case 8:E=Y;ki(E,I);E.return=null;E.child=null;E.memoizedState=null;E.updateQueue=null;E.dependencies=null;var K=E.alternate;null!==K&&(K.return=null,K.child=null,K.memoizedState=null,K.updateQueue=null,K.dependencies=null)}Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));fi(Y,zb);Y=Y.nextEffect}while(null!==Y);r=Ie;p=ae();A=r.focusedElem;
	I=r.selectionRange;if(p!==A&&A&&A.ownerDocument&&$d(A.ownerDocument.documentElement,A)){null!==I&&be(A)&&(p=I.start,r=I.end,void 0===r&&(r=p),"selectionStart"in A?(A.selectionStart=p,A.selectionEnd=Math.min(r,A.value.length)):(r=(p=A.ownerDocument||document)&&p.defaultView||window,r.getSelection&&(r=r.getSelection(),E=A.textContent.length,K=Math.min(I.start,E),I=void 0===I.end?K:Math.min(I.end,E),!r.extend&&K>I&&(E=I,I=K,K=E),E=Zd(A,K),ua=Zd(A,I),E&&ua&&(1!==r.rangeCount||r.anchorNode!==E.node||r.anchorOffset!==
	E.offset||r.focusNode!==ua.node||r.focusOffset!==ua.offset)&&(p=p.createRange(),p.setStart(E.node,E.offset),r.removeAllRanges(),K>I?(r.addRange(p),r.extend(ua.node,ua.offset)):(p.setEnd(ua.node,ua.offset),r.addRange(p))))));p=[];for(r=A;r=r.parentNode;)1===r.nodeType&&p.push({element:r,left:r.scrollLeft,top:r.scrollTop});"function"===typeof A.focus&&A.focus();for(A=0;A<p.length;A++)r=p[A],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}Ie=null;Qd=!!He;He=null;a.current=c;Y=e;do try{for(A=d;null!==
	Y;){var $a=Y.effectTag;if($a&36){var nc=Y.alternate;p=Y;r=A;switch(p.tag){case 0:case 11:case 15:hi(Mg,Ng,p);break;case 1:var md=p.stateNode;if(p.effectTag&4)if(null===nc)md.componentDidMount();else{var Fj=p.elementType===p.type?nc.memoizedProps:Af(p.type,nc.memoizedProps);md.componentDidUpdate(Fj,nc.memoizedState,md.__reactInternalSnapshotBeforeUpdate)}var Xh=p.updateQueue;null!==Xh&&Yf(p,Xh,md,r);break;case 3:var Yh=p.updateQueue;if(null!==Yh){K=null;if(null!==p.child)switch(p.child.tag){case 5:K=
	p.child.stateNode;break;case 1:K=p.child.stateNode}Yf(p,Yh,K,r)}break;case 5:var Gj=p.stateNode;null===nc&&p.effectTag&4&&(r=Gj,Je(p.type,p.memoizedProps)&&r.focus());break;case 6:break;case 4:break;case 12:break;case 13:case 19:case 17:case 20:break;default:throw t(Error(163));}}if($a&128){var nd=Y.ref;if(null!==nd){var Zh=Y.stateNode;switch(Y.tag){case 5:var gf=Zh;break;default:gf=Zh}"function"===typeof nd?nd(gf):nd.current=gf}}$a&512&&(Pi=!0);Y=Y.nextEffect}}catch(zb){if(null===Y)throw t(Error(330));
	fi(Y,zb);Y=Y.nextEffect}while(null!==Y);Y=null;nf();U=f}else a.current=c;if(Pi)Pi=!1,Qi=a,Si=d,Ri=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0!==b?($a=cg(),$a=zf($a,b),Zi(a,$a,b)):xi=null;"function"===typeof pj&&pj(c.stateNode,d);1073741823===b?a===Vi?Ui++:(Ui=0,Vi=a):Ui=0;if(ui)throw ui=!1,a=vi,vi=null,a;if((U&Bi)!==T)return null;O();return null}
	function cj(){if(null===Qi)return!1;var a=Qi,b=Si,c=Ri;Qi=null;Si=0;Ri=90;return vf(97<c?97:c,qj.bind(null,a,b))}function qj(a){if((U&(Ci|Di))!==T)throw t(Error(331));var b=U;U|=Di;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:hi(Pg,Ig,c),hi(Ig,Og,c)}}catch(d){if(null===a)throw t(Error(330));fi(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}U=b;O();return!0}
	function rj(a,b,c){b=bi(c,b);b=ti(a,b,1073741823);Sf(a,b);a=Yi(a,1073741823);null!==a&&Zi(a,99,1073741823)}function fi(a,b){if(3===a.tag)rj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){rj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===xi||!xi.has(d))){a=bi(b,a);a=wi(c,a,1073741823);Sf(c,a);c=Yi(c,1073741823);null!==c&&Zi(c,99,1073741823);break}}c=c.return}}
	function kj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);Ji===a&&W===c?X===Hi||X===Gi&&1073741823===Ki&&sf()-pi<Oi?hj(a,W):Ni=!0:a.lastPendingTime<c||(b=a.pingTime,0!==b&&b<c||(a.pingTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),b=cg(),b=zf(b,c),Zi(a,b,c)))}function ri(a,b){var c=a.stateNode;null!==c&&c.delete(b);c=cg();b=dg(c,a,null);c=zf(c,b);a=Yi(a,b);null!==a&&Zi(a,c,b)}var mj=void 0;
	mj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||M.current)Lf=!0;else if(d<c){Lf=!1;switch(b.tag){case 3:Nh(b);Ch();break;case 5:Cg(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:N(b.type)&&Xe(b);break;case 4:Ag(b,b.stateNode.containerInfo);break;case 10:Hf(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Ph(a,b,c);J(P,P.current&
	Eg,b);b=Fh(a,b,c);return null!==b?b.sibling:null}J(P,P.current&Eg,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Rh(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);J(P,P.current,b);if(!d)return null}return Fh(a,b,c)}}else Lf=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Se(b,L.current);Kf(b,c);e=dh(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&
	null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;ih();if(N(d)){var f=!0;Xe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var h=d.getDerivedStateFromProps;"function"===typeof h&&bg(b,d,h,a);e.updater=fg;b.stateNode=e;e._reactInternalFiber=b;jg(b,d,a,c);b=Mh(null,b,d,!0,f,c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Bf(e);b.type=e;f=b.tag=sj(e);
	a=Af(e,a);switch(f){case 0:b=Jh(null,b,e,a,c);break;case 1:b=Lh(null,b,e,a,c);break;case 11:b=Eh(null,b,e,a,c);break;case 14:b=Gh(null,b,e,Af(e.type,a),d,c);break;default:throw t(Error(306),e,"");}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Jh(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Lh(a,b,d,e,c);case 3:Nh(b);d=b.updateQueue;if(null===d)throw t(Error(282));e=b.memoizedState;e=null!==e?e.element:null;Wf(b,d,b.pendingProps,
	null,c);d=b.memoizedState.element;if(d===e)Ch(),b=Fh(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)uh=Ne(b.stateNode.containerInfo.firstChild),th=b,e=vh=!0;e?(b.effectTag|=2,b.child=ug(b,null,d,c)):(S(a,b,d,c),Ch());b=b.child}return b;case 5:return Cg(b),null===a&&zh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,h=e.children,Ke(d,e)?h=null:null!==f&&Ke(d,f)&&(b.effectTag|=16),Kh(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):
	(S(a,b,h,c),b=b.child),b;case 6:return null===a&&zh(b),null;case 13:return Ph(a,b,c);case 4:return Ag(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=tg(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),Eh(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;h=b.memoizedProps;
	f=e.value;Hf(b,f);if(null!==h){var g=h.value;f=hd(g,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(g,f):1073741823)|0;if(0===f){if(h.children===e.children&&!M.current){b=Fh(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){var k=g.dependencies;if(null!==k){h=g.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===g.tag&&(l=Qf(c,null),l.tag=2,Sf(g,l));g.expirationTime<c&&(g.expirationTime=c);l=g.alternate;null!==l&&l.expirationTime<
	c&&(l.expirationTime=c);Jf(g.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else h=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==h)h.return=g;else for(h=g;null!==h;){if(h===b){h=null;break}g=h.sibling;if(null!==g){g.return=h.return;h=g;break}h=h.return}g=h}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Kf(b,c),e=Mf(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=Af(e,b.pendingProps),
	f=Af(e.type,f),Gh(a,b,e,f,d,c);case 15:return Ih(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Af(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,N(d)?(a=!0,Xe(b)):a=!1,Kf(b,c),hg(b,d,e,c),jg(b,d,e,c),Mh(null,b,d,!0,a,c);case 19:return Rh(a,b,c)}throw t(Error(156));};var pj=null,ji=null;
	function tj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);pj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};ji=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
	function uj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function xh(a,b,c,d){return new uj(a,b,c,d)}
	function Hh(a){a=a.prototype;return!(!a||!a.isReactComponent)}function sj(a){if("function"===typeof a)return Hh(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gc)return 11;if(a===jc)return 14}return 2}
	function og(a,b){var c=a.alternate;null===c?(c=xh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
	firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
	function qg(a,b,c,d,e,f){var h=2;d=a;if("function"===typeof a)Hh(a)&&(h=1);else if("string"===typeof a)h=5;else a:switch(a){case ac:return sg(c.children,e,f,b);case fc:h=8;e|=7;break;case bc:h=8;e|=1;break;case cc:return a=xh(12,c,b,e|8),a.elementType=cc,a.type=cc,a.expirationTime=f,a;case hc:return a=xh(13,c,b,e),a.type=hc,a.elementType=hc,a.expirationTime=f,a;case ic:return a=xh(19,c,b,e),a.elementType=ic,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case dc:h=
	10;break a;case ec:h=9;break a;case gc:h=11;break a;case jc:h=14;break a;case kc:h=16;d=null;break a}throw t(Error(130),null==a?a:typeof a,"");}b=xh(h,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function sg(a,b,c,d){a=xh(7,a,d,b);a.expirationTime=c;return a}function pg(a,b,c){a=xh(6,a,null,b);a.expirationTime=c;return a}
	function rg(a,b,c){b=xh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function vj(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=this.firstBatch=null;this.pingTime=this.lastPendingTime=this.firstPendingTime=this.callbackExpirationTime=0}function wj(a,b,c){a=new vj(a,b,c);b=xh(3,null,null,2===b?7:1===b?3:0);a.current=b;return b.stateNode=a}
	function xj(a,b,c,d,e,f){var h=b.current;a:if(c){c=c._reactInternalFiber;b:{if(2!==ld(c)||1!==c.tag)throw t(Error(170));var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(N(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);throw t(Error(171));}if(1===c.tag){var k=c.type;if(N(k)){c=We(c,k,g);break a}}c=g}else c=Qe;null===b.context?b.context=c:b.pendingContext=c;b=f;e=Qf(d,e);e.payload={element:a};b=void 0===b?null:b;null!==b&&
	(e.callback=b);Sf(h,e);eg(h,d);return d}function yj(a,b,c,d){var e=b.current,f=cg(),h=$f.suspense;e=dg(f,e,h);return xj(a,b,c,e,h,d)}function zj(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Aj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	Db=function(a,b,c){switch(b){case "input":Ec(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);if(!e)throw t(Error(90));Wb(d);Ec(d,e)}}}break;case "textarea":pe(a,c);break;case "select":b=c.value,null!=b&&me(a,!!c.multiple,b,!1)}};
	function Bj(a){var b=1073741821-25*(((1073741821-cg()+500)/25|0)+1);b<=Xi&&--b;this._expirationTime=Xi=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Bj.prototype.render=function(a){if(!this._defer)throw t(Error(250));this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Cj;xj(a,b,null,c,null,d._onCommit);return d};
	Bj.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
	Bj.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;if(!this._defer||null===b)throw t(Error(251));if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;if(null===d)throw t(Error(251));d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;b=c;if((U&(Ci|Di))!==T)throw t(Error(253));xf(Z.bind(null,a,b));O();b=this._next;this._next=
	null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Bj.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Cj(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Cj.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
	Cj.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];if("function"!==typeof c)throw t(Error(191),c);c()}}};function Dj(a,b,c){this._internalRoot=wj(a,b,c)}function Ej(a,b){this._internalRoot=wj(a,2,b)}Ej.prototype.render=Dj.prototype.render=function(a,b){var c=this._internalRoot,d=new Cj;b=void 0===b?null:b;null!==b&&d.then(b);yj(a,c,null,d._onCommit);return d};
	Ej.prototype.unmount=Dj.prototype.unmount=function(a){var b=this._internalRoot,c=new Cj;a=void 0===a?null:a;null!==a&&c.then(a);yj(null,b,null,c._onCommit);return c};Ej.prototype.createBatch=function(){var a=new Bj(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};
	function Hj(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Jb=ej;Kb=fj;Lb=aj;Mb=function(a,b){var c=U;U|=2;try{return a(b)}finally{U=c,U===T&&O()}};function Ij(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Dj(a,0,b)}
	function Jj(a,b,c,d,e){var f=c._reactRootContainer,h=void 0;if(f){h=f._internalRoot;if("function"===typeof e){var g=e;e=function(){var a=zj(h);g.call(a)}}yj(b,h,a,e)}else{f=c._reactRootContainer=Ij(c,d);h=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=zj(h);k.call(a)}}gj(function(){yj(b,h,a,e)})}return zj(h)}function Kj(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Hj(b))throw t(Error(200));return Aj(a,b,null,c)}
	var Nj={createPortal:Kj,findDOMNode:function(a){if(null==a)a=null;else if(1!==a.nodeType){var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw t(Error(188));throw t(Error(268),Object.keys(a));}a=qd(b);a=null===a?null:a.stateNode}return a},hydrate:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!0,c)},render:function(a,b,c){if(!Hj(b))throw t(Error(200));return Jj(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!Hj(c))throw t(Error(200));
	if(null==a||void 0===a._reactInternalFiber)throw t(Error(38));return Jj(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!Hj(a))throw t(Error(40));return a._reactRootContainer?(gj(function(){Jj(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Kj.apply(void 0,arguments)},unstable_batchedUpdates:ej,unstable_interactiveUpdates:function(a,b,c,d){aj();return fj(a,b,c,d)},unstable_discreteUpdates:fj,unstable_flushDiscreteUpdates:aj,flushSync:function(a,
	b){if((U&(Ci|Di))!==T)throw t(Error(187));var c=U;U|=1;try{return vf(99,a.bind(null,b))}finally{U=c,O()}},unstable_createRoot:Lj,unstable_createSyncRoot:Mj,unstable_flushControlled:function(a){var b=U;U|=1;try{vf(99,a)}finally{U=b,U===T&&O()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ca.injectEventPluginsByName,fa,Qa,function(a){ya(a,Pa)},Hb,Ib,Ud,Ba,cj,{current:!1}]}};
	function Lj(a,b){if(!Hj(a))throw t(Error(299),"unstable_createRoot");return new Ej(a,null!=b&&!0===b.hydrate)}function Mj(a,b){if(!Hj(a))throw t(Error(299),"unstable_createRoot");return new Dj(a,1,null!=b&&!0===b.hydrate)}
	(function(a){var b=a.findFiberByHostInstance;return tj(m({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=qd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.9.0",
	rendererPackageName:"react-dom"});var Oj={default:Nj},Pj=Oj&&Nj||Oj;module.exports=Pj.default||Pj;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// @remove-on-eject-begin
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	// @remove-on-eject-end
	'use strict';
	
	if (typeof Promise === 'undefined') {
	  // Rejection tracking prevents a common issue where React gets into an
	  // inconsistent state due to an error, but it gets swallowed by a Promise,
	  // and the user has no idea what causes React's erratic future behavior.
	  __webpack_require__(24).enable();
	  window.Promise = __webpack_require__(23);
	}
	
	// fetch() polyfill for making API calls.
	__webpack_require__(35);
	
	// Object.assign() is commonly used with React.
	// It will use the native implementation if it's present and isn't buggy.
	Object.assign = __webpack_require__(4);


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/** @license React v16.9.0
	 * react.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';var h=__webpack_require__(4),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.suspense_list"):60120,ba=n?Symbol.for("react.memo"):
	60115,ca=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");var z="function"===typeof Symbol&&Symbol.iterator;
	function A(a){for(var b=a.message,d="https://reactjs.org/docs/error-decoder.html?invariant="+b,c=1;c<arguments.length;c++)d+="&args[]="+encodeURIComponent(arguments[c]);a.message="Minified React error #"+b+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";return a}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C={};
	function D(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}D.prototype.isReactComponent={};D.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw A(Error(85));this.updater.enqueueSetState(this,a,b,"setState")};D.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function E(){}E.prototype=D.prototype;function F(a,b,d){this.props=a;this.context=b;this.refs=C;this.updater=d||B}var G=F.prototype=new E;
	G.constructor=F;h(G,D.prototype);G.isPureReactComponent=!0;var H={current:null},I={suspense:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,d){var c=void 0,e={},g=null,k=null;if(null!=b)for(c in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:k,props:e,_owner:J.current}}
	function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
	function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
	function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){e=a[k];var f=b+T(e,k);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=z&&a[z]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
	0;!(e=a.next()).done;)e=e.value,f=b+T(e,k++),g+=S(e,f,d,c);else if("object"===e)throw d=""+a,A(Error(31),"[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,"");return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
	function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=H.current;if(null===a)throw A(Error(321));return a}
	var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw A(Error(143));return a}},createRef:function(){return{current:null}},Component:D,PureComponent:F,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
	_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:ca,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:ba,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
	b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,unstable_SuspenseList:aa,createElement:M,cloneElement:function(a,b,d){if(null===a||void 0===a)throw A(Error(267),a);var c=void 0,e=
	h({},a.props),g=a.key,k=a.ref,f=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:k,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);
	b.type=a;return b},isValidElement:N,version:"16.9.0",unstable_withSuspenseConfig:function(a,b){var d=I.suspense;I.suspense=void 0===b?null:b;try{a()}finally{I.suspense=d}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:H,ReactCurrentBatchConfig:I,ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/** @license React v0.15.0
	 * scheduler.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var d=void 0,e=void 0,g=void 0,m=void 0,n=void 0;exports.unstable_now=void 0;exports.unstable_forceFrameRate=void 0;
	if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,r=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(r,0),b;}};exports.unstable_now=function(){return Date.now()};d=function(a){null!==p?setTimeout(d,0,a):(p=a,setTimeout(r,0))};e=function(a,b){q=setTimeout(a,b)};g=function(){clearTimeout(q)};m=function(){return!1};n=exports.unstable_forceFrameRate=function(){}}else{var t=window.performance,u=window.Date,v=window.setTimeout,
	w=window.clearTimeout,x=window.requestAnimationFrame,y=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof x&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));exports.unstable_now="object"===typeof t&&
	"function"===typeof t.now?function(){return t.now()}:function(){return u.now()};var z=!1,A=null,B=-1,C=-1,D=33.33,E=-1,F=-1,G=0,H=!1;m=function(){return exports.unstable_now()>=G};n=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):0<a?(D=Math.floor(1E3/a),H=!0):(D=33.33,H=!1)};var J=function(){if(null!==A){var a=exports.unstable_now(),b=0<G-a;try{A(b,
	a)||(A=null)}catch(c){throw I.postMessage(null),c;}}},K=new MessageChannel,I=K.port2;K.port1.onmessage=J;var L=function(a){if(null===A)F=E=-1,z=!1;else{z=!0;x(function(a){w(B);L(a)});var b=function(){G=exports.unstable_now()+D/2;J();B=v(b,3*D)};B=v(b,3*D);if(-1!==E&&.1<a-E){var c=a-E;!H&&-1!==F&&c<D&&F<D&&(D=c<F?F:c,8.33>D&&(D=8.33));F=c}E=a;G=a+D;I.postMessage(null)}};d=function(a){A=a;z||(z=!0,x(function(a){L(a)}))};e=function(a,b){C=v(function(){a(exports.unstable_now())},b)};g=function(){w(C);
	C=-1}}var M=null,N=null,O=null,P=3,Q=!1,R=!1,S=!1;
	function T(a,b){var c=a.next;if(c===a)M=null;else{a===M&&(M=c);var f=a.previous;f.next=c;c.previous=f}a.next=a.previous=null;c=a.callback;f=P;var l=O;P=a.priorityLevel;O=a;try{var h=a.expirationTime<=b;switch(P){case 1:var k=c(h);break;case 2:k=c(h);break;case 3:k=c(h);break;case 4:k=c(h);break;case 5:k=c(h)}}catch(Z){throw Z;}finally{P=f,O=l}if("function"===typeof k)if(b=a.expirationTime,a.callback=k,null===M)M=a.next=a.previous=a;else{k=null;h=M;do{if(b<=h.expirationTime){k=h;break}h=h.next}while(h!==
	M);null===k?k=M:k===M&&(M=a);b=k.previous;b.next=k.previous=a;a.next=k;a.previous=b}}function U(a){if(null!==N&&N.startTime<=a){do{var b=N,c=b.next;if(b===c)N=null;else{N=c;var f=b.previous;f.next=c;c.previous=f}b.next=b.previous=null;V(b,b.expirationTime)}while(null!==N&&N.startTime<=a)}}function W(a){S=!1;U(a);R||(null!==M?(R=!0,d(X)):null!==N&&e(W,N.startTime-a))}
	function X(a,b){R=!1;S&&(S=!1,g());U(b);Q=!0;try{if(!a)for(;null!==M&&M.expirationTime<=b;)T(M,b),b=exports.unstable_now(),U(b);else if(null!==M){do T(M,b),b=exports.unstable_now(),U(b);while(null!==M&&!m())}if(null!==M)return!0;null!==N&&e(W,N.startTime-b);return!1}finally{Q=!1}}function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}
	function V(a,b){if(null===M)M=a.next=a.previous=a;else{var c=null,f=M;do{if(b<f.expirationTime){c=f;break}f=f.next}while(f!==M);null===c?c=M:c===M&&(M=a);b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}}var aa=n;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
	exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};
	exports.unstable_scheduleCallback=function(a,b,c){var f=exports.unstable_now();if("object"===typeof c&&null!==c){var l=c.delay;l="number"===typeof l&&0<l?f+l:f;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),l=f;c=l+c;a={callback:b,priorityLevel:a,startTime:l,expirationTime:c,next:null,previous:null};if(l>f){c=l;if(null===N)N=a.next=a.previous=a;else{b=null;var h=N;do{if(c<h.startTime){b=h;break}h=h.next}while(h!==N);null===b?b=N:b===N&&(N=a);c=b.previous;c.next=b.previous=a;a.next=b;a.previous=
	c}null===M&&N===a&&(S?g():S=!0,e(W,l-f))}else V(a,c),R||Q||(R=!0,d(X));return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(a===b)a===M?M=null:a===N&&(N=null);else{a===M?M=b:a===N&&(N=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};exports.unstable_getCurrentPriorityLevel=function(){return P};
	exports.unstable_shouldYield=function(){var a=exports.unstable_now();U(a);return null!==O&&null!==M&&M.startTime<=a&&M.expirationTime<O.expirationTime||m()};exports.unstable_requestPaint=aa;exports.unstable_continueExecution=function(){R||Q||(R=!0,d(X))};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return M};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(29);
	} else {
	  module.exports = require('./cjs/scheduler.development.js');
	}


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/A.5a9481f3.mp3";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/confetti1.cf506d69.gif";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/correct.59460284.wav";

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABbOSURBVHhe7d0tkFvHmgbgMMOgVDzntCUYGBh2L3TVksCwDVgQaGg4LNAw0HDgQENDQ1ctMVgQaGgYuttt9WwcuWdGM/r7TvfzVL2Ve+2K5yhq9/fq6OjoGwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBupJSezPPFzynNfzx7Nr1Nafr47Nn8v18m/9pf5ffy/76a5+mX9Xr9bf3XAYAlmabp33mgX2+G+z8H/m4pheDi1/rHAQCRbQb/51fzjaH+8KQ0/1nOINQ/HgCIpJy2P+Tgb+T9avX0h/rjAIBzu7i4+LG8Um8M7YMmpenTPM/P648FAM5lc4Hf9Kk1sI+YF/XHAwCnVi7SawznU+WyHgYAcCpnHv43UQIA4FSCDP+bKAEAcGzBhv9NlAAAOJagw/8mSgAAHFrw4X8TJQAADmUhw/8mSgAA7Gthw/8mSgAAPNZCh/9NlAAAeKiFD/+bKAEAsKtOhv9NlAAAuE9nw/8mSgAA3KbT4X8TJQAAtnU+/G+iBADAjUGG/02UAAAYbPjfRAkAYFyDDv+bKAEAjGfw4X8TJQCAcRj+/4gSAED/DP9mlAAA+mX43xklAID+GP47RQkAoB+G/4OiBACwfIb/o6IEALBchv9eUQIAWB7D/yBRAgBYDsP/oFECAIjP8D9KlAAA4jL8jxolAIB4DP+TRAkAIA7D/6RRAgA4P8P/LFECADgfw/+sUQIAOD3DP0SUAABOx/APFSUAgOMz/ENGCQDgeAz/0FECADg8w38RUQIAOBzDf1FRAgDYn+G/yCgBADye4b/oKAEAPJzh30WUAAB2Z/h3FSUAgPsZ/l1GCQDgdoZ/11ECAPjamMN/avxa11ECAPjb2K/8lQAABuS0f4kSAMBADP8vowQAMADDvxUlAICOGf53RQkAoEOG/y5RAgDoiOH/kCgBAHTA8H9MlAAAFszw3ydKAAALZPgfIkoAAAti+B8ySgAAC2D4HyNKAACBGf7HjBIAQECG/ymiBAAQiOF/yigBAARg+J8jSgAAZ2T4nzNKAABnYPhHiBIAwAkZ/pGiBABwAoZ/xCgBABzRgMP/fxq/FjQX/93+9W6jBACcwoDD//00Tf/R+PWgefpfz55Nb9q/122UAIBjGnH4r9frby8uLv7V+L2gefqfKaUnSgAABzHq8C+PfWkFoBxzUgIA2NfIw79YYgEokhIAwGONPvyLpRaAIikBADyU4b+x5AJQJCUAgF0Z/n9begEokhIAwH0M/3/qoQAUSQkA4DaG/9d6KQBFUgIA2Gb4t/VUAIqkBABww/C/XW8FoEhKAACG/916LABFUgIAxmX436/XAlAkJQBgPIb/bnouAEVSAgDGYfjvrvcCUCQlAKB/hv/DjFAAiqQEAPTL8H+4UQpAkZQAgP4Y/o8zUgEokhIA0A/D//FGKwBFUgIAls/w38+IBaBISgDAchn++xu1ABRJCQBYHsP/MEYuAEVSAgCWw/A/nNELQJGUAID4DP/DUgA2khIAEJfhf3gKwN+SEgAQj+F/HArAPyUlACAOw/94FICvJSUA4PwM/+NSANqSEgBwPob/8SkAt0tKAMDpGf6noQDcLSkBAKczTdO/U5r+amxMveYsw79QAO6XxiwBL+rDBziN9fq7dR7+nxobUq852/AvFIDdpAFLwDzPz+vDBziuMghTmj+0NqNOc9bhXygAu0uDlYBSxFerpz/Uhw9wPHnDedXaiDrN2Yd/oQA8TBrvTMD7+tABjmO1Wn0/0Pv+IYZ/oQA8XBqsBMzzxc/1oQMcXt5orrc3nk4TZvgXCsDjpLFKgLMAwHHkIfRjY9PpMaGGf6EAPF4aqAQ4CwAcRd5gLrc3nA4TbvgXCsB+0jAlYHpTHzLA4eQN5v3XG05XCTn8CwVgf2mAElCuz0n5cdaHDLC/8rn/1obTUcIO/0IBOIw0QAnwNgBwUHnT/K212XSS0MO/UAAOJ3VeAlKaX9eHCrC/jj/7H374FwrAYaWuS8D0tj5MgP3ljeXq641m8VnE8C8UgMNLnZaAlOY/60ME2F95VdHabBacxQz/QgE4jtRhCSi3Bq4PD2B/nd37f1HDv1AAjid1WALqQwPYX95UevkI4OKGf1G+ernxWILm4td62IuROisB9WEB7K+TzXGRw79QAI4vdVICUpo+1ocEsL/y0aLWZrOgLHb4FwrAaaQ+SoDvBAAOJ7+q+L2x0Swlix7+hQJwOmnxJcDtgIEDKncXa2824bP44V8oAKeVll0CLuvDANhfyhtiuc94Y7OJnC6Gf6EAnF5aaAm4uLj4sT4EgMNY2GbYzfAvFIDzSAsrAW4CBBxF3giX8n0AXQ3/QgE4n7SgEpALwB/1sAEOJ23eBvjY2ngCpbvhXygA55UWUgKc/geOJm8yL7Y3nUDpcvgXCsD5pfgl4KoeKsDhpbhnAbod/oUCEEMKWgLKBbqr1er7epgAxxHwWoCuh3+hAMSRApaAcp+OengAx1UuNmptRGdI98O/UABiSaFKwPQ25eOphwZwXGXDKRtPe0M6WYYY/oUCEE8KUALKx/5G+TsABFI2nrIBtTamE2SY4V8oADGlM5aAlKZPq9XTH+qhAJxWufAob4DvWhvU8TK9He1VjwIQV8ol4NRviZXi7SN/wNmlz6+C5qvtTeoYya96XtUfOxQFIL5cTH8rV+O3/5scMtM7p/2BUPLm9PJYG2A53TnP0y/1Rw1HAViG/Dz9dMy3xUoBTrlw1x8HEEd5S2CzSR2mCJTBn/95OforHgVgWfJ/hxd57R7yfhnX6/V36/rHA8T1dxF43Kuh8u/lf/93NzfZUACWJ23eGit3znz/z/8+u6WU3/z34LX3+oHFKhtY3tBelov3bisE+dc/5N8vV1O/cGXz1xSAZasXy5YbaF2X9/C//m/2eeB/3PwdmV6VtxLqvwrQl5RfHZWhVv8v91AA+lQGvbNcANxKAQCAASkAADAgBQAABqQAAMCAFAAAGJACAAADUgAAYEAKAAAMSAEAgAEpAAAwIAUAAAakAADAgBQAABiQAgAAA1IAAGBACgAADEgBAIABKQAAMCAFAAAGpAAAwIAUAAAYkAIAAANSAABgQAoAAAxIAQCAASkAADAgBQAABqQAAMCAFAAAGJACAAADUgAAYEAKAAAMSAEAgAEpAAAwIAUAAAakAADAgBQAABiQAgAAA1IAAGBACgAADEgBAIABKQAAMCAFAAAGpAAAwIAUAAAYkAIAAANSAABgQAoAAAxIAQCAASkAADAgBQAABqQAAMCAFAAAGJACAAADUgAAYEAKAAAMSAEAgAEpAAAwIAUAAAakAADAgBQAABiQAgAAA1IAAGBACgAADEgBAIABKQAAMCAFAAAGpAAAwIAUAAAYkAIAAANSAABgQAoAAAxIAQCAASkAADAgBQAABqQAAMCAFAAAGJACAAADUgAAYEAKAAAMSAEAgAEpAAAwIAUAAAakAADAgBQAABiQAgAAA1IAAGBACgAADEgBAIABKQAAMCAFAAAGpAAAwIAUAAAYkAIAcEIppSfzPP2SN7WrZ8+mtynNf25vdvnXPtTfez3PFz/XfxUOSgFgdBcXFz+mNP1e9tucd9vrLv/eX/X33uT8tl5/t67/KuyubGB5QV1vL7BdslmE85UywCEpAIyoDPH84uqP1ouvHfM+5+V6vf62/pHQVoZ2XTCthfSITG/Lxl3/eHg0BYCRrFar78vgb6+vhye/MPuU//kypfSk/gjYWK2e/rA5ddRePAfIdVnQ9cfBgykAjKKc5q9nUhtra7/kP/djeVu3/ihGVzbW2g6bC+ZQKaewyntY9cfCgygA9K6cps/r51FvvT40pWTUH8uoyoUix2qarZSfpX3yGAoAPSvv9ee1c8C3X3fKtWsDBpWf/Bdbi+GEsUHyMAoAvdpc6Dd9bK+lY2d6l1wXMJZ5np+3F8NpUs4ElA29Hg7cSwGgRykP37xmTv3KfztX9XDoXbngLw/go7/nf1/KMficKrtSAOhRXi8nec9/h7ysh0SvUm6be3ye9Bh5Xw8N7qQA0Ju8Vs74NuzXKWeG66HRo/wkh1pwJW4YxC4UAHqSPr8YO9f7/rfGC7JepZgLrrwV8DG5CIV7KAD0JO97r9pr57zxgqxT+cl9uf1kB8qLepjQVO4h0Vg3QaMAcLvNXf5O9/HrB8ZZgB4Fe+9/OxYddyqbZmPdhEw5W1EPG76S10jkF2PWb2/yE/pT64mOFJ8I4D6tdRMx5ZM29ZDhK0e+7freKW9P1EOlB/lJvdx+kgPG2wDcKfhZrP+Pu6txmyWcySp/z+rh0oP8hH5oPdGxMr2thwtNeY28aa+dOLF5cpdyfUhr3USL723pSOsJjpaUpk/1cKFpCZun06fcJerV/1/HhaxdqF8y0XiC4yX5OCB3WMLpUxdQcZe8Rq6210zQXNZDZsmWcAHgTVwIyH0iX0DlLBb3iX4B4E1Smv+oh8ySlRs7tJ7giPHqifuUr5NurZ0Icfqf+yzlQtac63rILNlSLjopUQDYRV4r5/72tK+Sh/9f5S2KeojQVNZJa/3Ei4uyu6AA0JugZ7V8jJV7NdZN0CgAXVAA6FHeoN611tA5kl/V+T4LdtJaPzGjAHRBAaBHm/upn//91HJKN6/bn+phwZ1aayhmFIAuKAD0qtys5NzvqZaLEuvhwL1aayhmFIAuKAD07MzXA/isNA/SWENBowB0QQGgd6UEpDR9aq2pI8ZFfzxYYx0FjQLQBQWAEWzeDjj+NQGlaFinPFZrTcWMAtAFBYBR1FsFX2+vq8NleuurftlHe11FjALQBQWA0ZR1VDaw1hp7ZN6XtxnqHw+P1lhbQaMAdEEBYFT1AsGrPT4pcF3+/tQ/DvbWWGNBowB0QQGAmwsF59dlY8v//LC99jbXD3w+a3BVPtqX3NiHI9hed3GjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdUAAAYmjtezGjAHRBAQCIobXvxYwC0AUFACCG1r4XMwpAFxQAgBha+17MKABdmOfpl/YTHC+r1dMf6mEDdKe178XM9KYeMktWXlW3n+B4cQYA6Flr34uYlObX9ZBZsjxUf2o9wRGT0vSqHjZAV9br9betfS9iFIBOrNffrVtPcMTkRfdnPWyArszzxc+tfS9i8oux3+ths2RLKgAlFxcXP9ZDB+hGeVXd2vOC5rIeNkvXeHIjx8IDupJSepJfVf/V2O+C5uLXeugsXfsJDpv39bABupD3tRdb+1zouCC7IynNH1pPctSU98rqoQMsWtq8+v/Y2uuiZrVafV8Pn6XLT+jV9hMcOaWwpPyXph4+wGLlPe1ye4+LnPJWRT10epCf1JfbT/IC4loAYNHKzc2W9d7/53gbtifzPD9vPMnh460AYKnK5/7LR5tbe1vwXNeHQA+WdAOKL5Ob8ye3BwaWqNxOt7WvLSAv60OgFwttop9vDuTeAMBSpJSe5L1rUdddfRn7bYfyE3u9/UQvJeVMgLcDgOjK1fP5lf+71j62hJQXXPWh0JO8KH9rPeFLSi4Cr3w8BYio3Dwn71GL+rjfdnIB8B0APVraLYFvSzkbkP95Wa5rqA8N4GzqV66//3KfWmrKY6kPi94s+dTUdkoRKG3VWwPAKZUXH3XoX9UXJM09aonxwqpj+Qle1A0pds3mL+H0VkTkSClX9Of9c7FX9u+Q6W0dFfSoXN3ZfuJFRGTwuPla75b6cUARETlepmn6qY4JepXS9Kr15IuIyJgpb6PWEUHPvA0gIiJfprwwrCOC3uUnvIuPrIiIyP5x97+B1I+wNBeCiIiMlOlNHQ2MIKX0JC38jlUiIrJ/3EtlQPmJf7G9EEREZKj47v8RJWcBRESGjlf/AytPfmtRiIhI97muo4BR5UXgEwEiIoPFlf98M8/z89biEBGRbnNVRwCjy4vhemtxiIhIh0lp+mu1Wn1ft39G5+6AIiJjJBeA3+vWDxtlUbQWi4iI9JGU5g8ppSd124eNsijK4mgtGhERWX584x+3KoujtWhERGTZceqfe+WF4g6BIiJdZXqXnPpnFynNr9uLSERElpRyx1dX/bOzlJtiaYytxSQiIstI+cif9/15sNIYU5r/bC0qERGJn/LV73VLh4cp9wcoDbK1sEREJG5c9MfefGGQiMji4ot+OIxnzy5+bSwwEREJl+lNcsU/h6QEiIhEj+HPkZQS4JoAEZGQuUqGP8dUPlJSPlfaWHwiInKeXNYtGo5rvf5unRfc+60FKCIiJ0w5I+ujfpxc+nyzoPl6e0GKiMjxU87Elo9q1y0ZTi8vxMvthSkiIsfM9M7tfQmhnILKbfRTe6GKiMihUr6rJbnYj0hKGy0fQWktWBER2S/llP88z8/rlgvx1I8KOhsgInKglFf96/X627rNQlxloeYS8CrHPQNERB6d6a1v82OR6jcKvm4vbBERuSXvne6nC+WjKnlB+8igiMgd2XwF+8WvdeuEfkzT9O+8yBUBEZEvshn802/J1f30rtxJsF4j4GJBERk40xun+hlWWfybMjB/aP8FERHpKtfl1b4b+cAXNt8xMP2W/4JcOTsgIj2k7GXlYujNDdOc4oed1G8e/D3/JfLFQyKykEzv6qefXvoIHxxIOUOwuZDw81mCy/L+Wc7bks1FNK2/jCIiB0t+MbLZczb7z+fvQrksr+59MQ8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAyX3zzf8BELT46XMdf74AAAAASUVORK5CYII="

/***/ },
/* 35 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]
	
	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }
	
	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }
	
	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	
	    if (input instanceof Request) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = String(input)
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split(/\r?\n/).forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }
/******/ ])));
//# sourceMappingURL=main.e90ba9cd.js.map