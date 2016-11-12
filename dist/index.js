(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('./reducer'), require('./sync'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.reducer, global.sync);
	    global.index = mod.exports;
	  }
	})(this, function (exports, _reducer, _sync) {
	  'use strict';
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.STATUS_CHANGED = exports.connectionStatusChanged = exports.syncConnectionWithStore = undefined;
	
	  var _reducer2 = _interopRequireDefault(_reducer);
	
	  var _sync2 = _interopRequireDefault(_sync);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }
	
	  exports.syncConnectionWithStore = _sync2.default;
	  exports.connectionStatusChanged = _reducer.connectionStatusChanged;
	  exports.STATUS_CHANGED = _reducer.STATUS_CHANGED;
	  exports.default = _reducer2.default;
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.reducer = mod.exports;
	  }
	})(this, function (exports) {
	  'use strict';
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.connectionStatusChanged = connectionStatusChanged;
	  exports.default = connectionReducer;
	
	  var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];
	
	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }
	
	    return target;
	  };
	
	  var STATUS_CHANGED = exports.STATUS_CHANGED = 'Connection.STATUS_CHANGED';
	
	  function connectionStatusChanged(isOnline) {
	    return { type: STATUS_CHANGED, payload: isOnline };
	  }
	
	  var initialState = {
	    isOnline: false
	  };
	
	  function connectionReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];
	
	    if (action.type === STATUS_CHANGED) {
	      return _extends({}, state, { isOnline: action.payload });
	    }
	
	    return state;
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module, exports, require('./reducer'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod, mod.exports, global.reducer);
	    global.sync = mod.exports;
	  }
	})(this, function (module, exports, _reducer) {
	  'use strict';
	
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	
	
	  function connectionDetector(store) {
	    store.dispatch((0, _reducer.connectionStatusChanged)(navigator.onLine));
	
	    window.addEventListener('online', function () {
	      return store.dispatch((0, _reducer.connectionStatusChanged)(true));
	    });
	    window.addEventListener('offline', function () {
	      return store.dispatch((0, _reducer.connectionStatusChanged)(false));
	    });
	  }
	
	  var syncConnectionWithStore = function syncConnectionWithStore(store) {
	    var detectorFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : connectionDetector;
	    return detectorFn(store);
	  };
	
	  exports.default = syncConnectionWithStore;
	  module.exports = exports['default'];
	});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map