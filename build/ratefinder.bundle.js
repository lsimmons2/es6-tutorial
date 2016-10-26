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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _rateServiceMock = __webpack_require__(2);
	
	var service = _interopRequireWildcard(_rateServiceMock);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	service.findAll().then(function (rates) {
	    var html = '';
	    rates.forEach(function (rate) {
	        return html += '<tr><td>' + rate.name + '</td><td>' + rate.years + '</td><td>' + rate.rate + '%</td></tr>';
	    });
	    document.getElementById("rates").innerHTML = html;
	}).catch(function (e) {
	    return console.log(e);
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var rates = [{
	    "name": "30 years fixed",
	    "rate": "13",
	    "years": "30"
	}, {
	    "name": "20 years fixed",
	    "rate": "2.8",
	    "years": "20"
	}];
	
	var findAll = exports.findAll = function findAll() {
	    return new Promise(function (resolve, reject) {
	        if (rates) {
	            resolve(rates);
	        } else {
	            reject("No rates");
	        }
	    });
	};

/***/ }
/******/ ]);
//# sourceMappingURL=ratefinder.bundle.js.map