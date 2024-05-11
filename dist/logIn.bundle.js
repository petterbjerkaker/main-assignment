/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/log-in.js":
/*!**************************!*\
  !*** ./src/js/log-in.js ***!
  \**************************/
/***/ (() => {

eval("\r\n\r\n//SELECTING THE LOG-IN FORM ELEMENTS\r\nconst emailInput = document.querySelector(\".email\");\r\nconst passwordInput = document.querySelector(\".password\");\r\nconst logInButton = document.querySelector(\".log-in_button\");\r\nconst emailError = document.querySelector(\".email-error\");\r\nconst passwordError = document.querySelector(\".password-error\");\r\nconst logInForm = document.querySelector(\".log-in_form\");\r\nconst logInError = document.querySelector(\".log-in_error\");\r\n\r\n\r\n//LOG IN BUTTON VALIDATION\r\nlogInButton.addEventListener(\"click\", (e)=>{\r\n\te.preventDefault();\r\n\tvalidateLogInForm(\r\n\t\temailInput.value,\r\n\t\tpasswordInput.value,\r\n\t\temailError,\r\n\t\tpasswordError\r\n\t);\r\n});\r\n\r\n//VALIDATION FOR LOG IN FORM FUNCTION\r\nconst validateLogInForm = (email, password, emailErrorElement, passErrorElement)=>{\r\n\tconst errors = {\r\n\t\terrorStatus: false,\r\n\t\temailErrorElement: \"\",\r\n\t\tpasswordError: \"\",\r\n\t};\r\n\r\n\tif(!email && !password){\r\n\t\terrors.errorStatus = true,\r\n\t\terrors.emailErrorElement = \"Email is required!\",\r\n\t\terrors.passwordError = \"Password is required!\";\r\n\r\n\t\temailErrorElement.style.visibility = \"visible\";\r\n\t\tpassErrorElement.style.visibility = \"visible\";\r\n\r\n\r\n\t\temailErrorElement.textContent = errors.emailErrorElement;\r\n\t\tpassErrorElement.textContent = errors.passwordError;\r\n\r\n\t}else if(!email){\r\n\t\terrors.errorStatus = true,\r\n\t\terrors.emailErrorElement = \"Email is required!\",\r\n\t\terrors.passwordError = \"\";\r\n\r\n\t\temailErrorElement.style.visibility = \"visible\";\r\n\t\tpassErrorElement.style.visibility = \"hidden\";\r\n\r\n\r\n\t\temailErrorElement.textContent = errors.emailErrorElement;\r\n\t\tpassErrorElement.textContent = errors.passwordError;\r\n\r\n\t}else if(!password){\r\n\t\terrors.errorStatus = true,\r\n\t\terrors.emailErrorElement = \"\",\r\n\t\terrors.passwordError = \"Password is required!\";\r\n\r\n\t\temailErrorElement.style.visibility = \"hidden\";\r\n\t\tpassErrorElement.style.visibility = \"visible\";\r\n\r\n\r\n\t\temailErrorElement.textContent = errors.emailErrorElement;\r\n\t\tpassErrorElement.textContent = errors.passwordError;\r\n\r\n\t}else{\r\n\t\terrors.errorStatus = false,\r\n\t\terrors.emailErrorElement = \"\",\r\n\t\terrors.passwordError = \"\";\r\n\r\n\t\temailErrorElement.style.visibility = \"hidden\";\r\n\t\tpassErrorElement.style.visibility = \"hidden\";\r\n\r\n\r\n\t\temailErrorElement.textContent = errors.emailErrorElement;\r\n\t\tpassErrorElement.textContent = errors.passwordError;\r\n\t}\r\n\r\n\tconst logInFormStatus = ()=>{\r\n\t\treturn errors.errorStatus\r\n\t}\r\n\r\n\treturn { logInFormStatus }\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://src/./src/js/log-in.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/log-in.js"]();
/******/ 	
/******/ })()
;