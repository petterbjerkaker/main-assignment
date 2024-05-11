/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/firebaseConfig.js":
/*!**********************************!*\
  !*** ./src/js/firebaseConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firebaseConfig = {\r\n\tapiKey: \"AIzaSyBJlHyaeU53R1gonwEHSH23D1qDDSvC8wg\",\r\n\tauthDomain: \"main-assignment-990e8.firebaseapp.com\",\r\n\tprojectId: \"main-assignment-990e8\",\r\n\tstorageBucket: \"main-assignment-990e8.appspot.com\",\r\n\tmessagingSenderId: \"255805880148\",\r\n\tappId: \"1:255805880148:web:f6817f7cd6e2c969123ac1\"\r\n };\r\n\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseConfig);\n\n//# sourceURL=webpack://src/./src/js/firebaseConfig.js?");

/***/ }),

/***/ "./src/js/register.js":
/*!****************************!*\
  !*** ./src/js/register.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebaseConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebaseConfig.js */ \"./src/js/firebaseConfig.js\");\n\r\n\r\nconsole.log(_firebaseConfig_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n\r\nconst registerFirstname = document.querySelector(\".firstname\");\r\nconst registerLastname = document.querySelector(\".lastname\");\r\nconst registerEmail = document.querySelector(\".email\");\r\nconst registerPassword = document.querySelector(\".password\");\r\nconst registerError = document.querySelector(\".register-error\");\r\nconst registerForm = document.querySelector(\".register-form\");\r\nconst registerButton = document.querySelector(\".register-button\");\r\n\r\n\r\n//VALIDATE REGISTER FORM\r\nconst validateRegisterForm = (firstname, lastname, email, password, registerError)=>{\r\n\tlet errorStatus = false;\r\n\tif(!firstname || !lastname || !email || !password ){\r\n\t\terrorStatus = true;\r\n\t\tregisterError.style.visibility = \"visible\";\r\n\t\tregisterError.textContent = \"Please fill out all the fields!\"\r\n\t}else{\r\n\t\terrorStatus = false;\r\n\t\tregisterError.style.visibility = \"hidden\";\r\n\t\tregisterError.textContent = \"\";\r\n\t}\r\n\tconst registerErrorStatus = ()=>{\r\n\t\treturn errorStatus;\r\n\t}\r\n\treturn {registerErrorStatus}\r\n\t\r\n};\r\n\r\n//VALIDATION REGISTER BUTTON\r\nregisterButton.addEventListener(\"click\", (e)=>{\r\n\te.preventDefault();\r\n\tvalidateRegisterForm(registerFirstname.value, registerLastname.value, registerEmail.value, registerPassword.value, registerError)\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://src/./src/js/register.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/register.js");
/******/ 	
/******/ })()
;