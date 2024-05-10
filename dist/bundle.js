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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebaseConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebaseConfig.js */ \"./src/js/firebaseConfig.js\");\n\r\n\r\nconsole.log(_firebaseConfig_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\nconst API_KEY = \"7e06685fd85ca11f85cd3e8a7eb7e12f\"\r\nconst image_path = \"https://image.tmdb.org/t/p/w1280\"\r\nconst trailer_path = \"https://www.youtube.com/watch?v=\"\r\n\r\nconst input = document.querySelector(\".search input\");\r\nconst button = document.querySelector(\".search button\");\r\nconst mainGridTitle = document.querySelector(\".favorites h1\");\r\nconst mainGrid = document.querySelector(\".favorites .movies-grid\");\r\n\r\nconst trendingMovies = document.querySelector(\".trending .movies-grid\")\r\n\r\nconst popUpContainer = document.querySelector(\".popup-container\");\r\n\r\nfunction clickCard (cards){\r\n\tcards.forEach(card => {\r\n\t\tcard.addEventListener(\"click\", () => showPopUp(card))\r\n\t});\r\n}\r\n\r\nasync function getMovieBySearch (search_term){\r\n\tconst response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search_term}`);\r\n\tconst responseData = await response.json();\r\n\treturn responseData.results;\r\n}\r\n\r\nbutton.addEventListener(\"click\", addSearchedMovies)\r\n\r\n\r\n//SEARCH MOVIES\r\nasync function addSearchedMovies(){\r\n\tconst data = await getMovieBySearch(input.value)\r\n\r\n\tmainGridTitle.innerText = \"Search Results...\"\r\n\tmainGrid.innerHTML = data.map(e =>{\r\n\t\treturn `\r\n\t\t\t\t<div class=\"card\" data-id=\"${e.id}\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t<img src=\"${image_path + e.poster_path}\">\r\n\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t<h2>${e.title}</h2>\r\n\t\t\t\t\t<div class=\"single-info\">\r\n\t\t\t\t\t\t<span>Rating: </span>\r\n\t\t\t\t\t\t<span>${e.vote_average} / 10</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<div class=\"single-info\">\r\n\t\t\t\t\t<span>Release date: </span>\r\n\t\t\t\t\t<span>${e.release_date}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t`\r\n\t}).join(\"\")\r\n\r\n\t//------------------------------------------------------------------------------\r\n\r\n\tconst cards = document.querySelectorAll(\".card\");\r\n\tclickCard(cards);\r\n}\r\n\r\n\r\n// POPUP\r\nasync function getMovieById (id){\r\n\tconst response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);\r\n\tconst responseData = await response.json();\r\n\treturn responseData;\r\n}\r\n\r\nasync function getMovieTrailer (id){\r\n\tconst response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);\r\n\tconst responseData = await response.json();\r\n\treturn responseData.results[0].key;\r\n}\r\n\r\nasync function showPopUp(card){\r\n\tpopUpContainer.classList.add(\"show-popup\");\r\n\r\n\tconst movieId = card.getAttribute(\"data-id\");\r\n\tconst movie = await getMovieById(movieId);\r\n\tconst movieTrailer = await getMovieTrailer(movieId);\r\n\r\n\tpopUpContainer.style.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)),\r\n\turl(${image_path + movie.poster_path})`\r\n\r\n\tpopUpContainer.innerHTML = `\r\n\t\t<span class=\"x-icon\">&#10006;</span>\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t\t<div class=\"poster-img\">\r\n\t\t\t\t\t\t\t<img src=\"${image_path + movie.poster_path}\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t<div class=\"single-info\">\r\n\t\t\t\t\t<span>Add to favorites:</span>\r\n\t\t\t\t\t<span class=\"heart-icon\">&#9829;</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"right\">\r\n\t\t\t\t<h1>${movie.title}</h1>\r\n\t\t\t\t<h3>${movie.tagline}</h3>\r\n\t\t\t\t<div class=\"single-info-container\">\r\n\t\t\t\t\t<div class=\"single-info\">\r\n\t\t\t\t\t\t<span>Language:</span>\r\n\t\t\t\t\t\t<span>${movie.spoken_languages[0].name}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<div class=\"single-info\">\r\n\t\t\t\t\t<span>Length:</span>\r\n\t\t\t\t\t<span>${movie.runtime}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"single-info\">\r\n\t\t\t\t\t<span>Rating:</span>\r\n\t\t\t\t\t<span>${movie.vote_average} / 10</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"single-info\">\r\n\t\t\t\t\t<span>Budget:</span>\r\n\t\t\t\t\t<span>$ ${movie.budget}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"single-info\">\r\n\t\t\t\t\t<span>Release Date:</span>\r\n\t\t\t\t\t<span>${movie.release_date}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"genres\">\r\n\t\t\t\t<h2>Genres</h2>\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t${movie.genres.map(e => `<li>${e.name}</li>`).join(\"\")}\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"overview\">\r\n\t\t\t\t<h2>Overview</h2>\r\n\t\t\t\t<p>${movie.overview}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"trailer\">\r\n\t\t\t\t<h2>Trailer</h2>\r\n\t\t\t\t\t<iframe \r\n\t\t\t\t\t\twidth=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/${movieTrailer}\" frameborder=\"0\" \r\n\t\t\t\t\t\tallow=\"accelerometer; autoplay; clipboard-write; \r\n\t\t\t\t\t\tencrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\r\n\t\t\t\t</iframe>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t`\r\n\r\n\tconst xIcon = document.querySelector(\".x-icon\");\r\n\txIcon.addEventListener(\"click\", () => popUpContainer.classList.remove(\"show-popup\"));\r\n\r\n\tconst heartIcon = popUpContainer.querySelector(\".heart-icon\");\r\n\r\n\tconst favoritedMovies = getLocalStorage();\r\n\tfor(let i = 0; i <= favoritedMovies.length; i++){\r\n\t\tif (favoritedMovies[i] == movieId) heartIcon.classList.add(\"change-color\");\r\n\t};\r\n\r\nheartIcon.addEventListener(\"click\", ()=>{\r\n\tif(heartIcon.classList.contains(\"change-color\")){\r\n\t\tremoveLocalStorage(movieId);\r\n\t\theartIcon.classList.remove(\"change-color\");\r\n\t}else{\r\n\t\taddToLocalStorage(movieId);\r\n\t\theartIcon.classList.add(\"change-color\");\r\n\t}\r\n\tfetchFavoritedMovies(); \r\n });\r\n};\r\n\r\n//LOCAL STORAGE\r\nfunction getLocalStorage (){\r\n\tconst favoritedMovies = JSON.parse(localStorage.getItem(\"movie-id\"));\r\n\treturn favoritedMovies === null ? [] : favoritedMovies;\r\n}\r\n\r\nfunction addToLocalStorage (id){\r\n\tconst favoritedMovies = getLocalStorage();\r\n\tlocalStorage.setItem(\"movie-id\", JSON.stringify([...favoritedMovies, id]));\r\n}\r\n\r\nfunction removeLocalStorage (id){\r\n\tconst favoritedMovies = getLocalStorage();\r\n\tlocalStorage.setItem(\"movie-id\", JSON.stringify(favoritedMovies.filter(e => e !== id)));\r\n}\r\n\r\n\r\n//ADDING AND REMOVING FAVORITE MOVIES\r\nfetchFavoritedMovies()\r\nasync function fetchFavoritedMovies(){\r\n\tmainGrid.innerHTML = \"\"\r\n\tconst moviesLocalStorage = await getLocalStorage()\r\n\tconst movies = []\r\n\tfor(let i = 0; i <= moviesLocalStorage.length - 1; i++){\r\n\t\tconst movieId = moviesLocalStorage[i];\r\n\t\tlet movie = await getMovieById(movieId);\r\n\t\taddFavoritesFromLocalStorage(movie);\r\n\t\tmovies.push(movie);\r\n\t};\t\r\n};\r\n\r\nfunction addFavoritesFromLocalStorage(movie_data){\r\n\tmainGrid.innerHTML += `\r\n\t\t<div class=\"card\" data-id=\"${movie_data.id}\">\r\n\t\t\t<div class=\"img\">\r\n\t\t\t<img src=\"${image_path + movie_data.poster_path}\">\r\n\t\t</div>\r\n\t\t<div class=\"info\">\r\n\t\t\t<h2>${movie_data.title}</h2>\r\n\t\t\t<div class=\"single-info\">\r\n\t\t\t\t<span>Rating: </span>\r\n\t\t\t\t<span>${movie_data.vote_average}</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"single-info\">\r\n\t\t\t\t<span>Release date: </span>\r\n\t\t\t\t<span>${movie_data.release_date}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t`\r\n\r\n\tconst cards = document.querySelectorAll(\".card\");\r\n\tclickCard(cards);\r\n}\r\n\r\n\r\ngetTrendingMovies();\r\nasync function getTrendingMovies (){\r\n\tconst response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);\r\n\tconst responseData = await response.json();\r\n\treturn responseData.results;\r\n}\r\n\r\n\r\naddTrendingMovies();\r\nasync function addTrendingMovies (){\r\n\tconst data = await getTrendingMovies();\r\n\r\n\ttrendingMovies.innerHTML = data.slice(0, 5).map(e => {\r\n\t\treturn `\r\n\t\t\t\t<div class=\"card\" data-id=\"${e.id}\">\r\n\t\t\t\t\t<div class=\"img\">\r\n\t\t\t\t\t\t<img src=\"${image_path + e.poster_path}\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t<h2>${e.title}</h2>\r\n\t\t\t\t\t<div class=\"single-info\">\r\n\t\t\t\t\t\t<span>Rating: </span>\r\n\t\t\t\t\t\t<span>${e.vote_average} / 10</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<div class=\"single-info\">\r\n\t\t\t\t\t<span>Release date: </span>\r\n\t\t\t\t\t<span>${e.release_date}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t`\r\n\t\t\r\n\t}).join(\"\");\r\n\tconst cards = document.querySelectorAll(\".card\");\r\n\tclickCard(cards);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://src/./src/js/app.js?");

/***/ }),

/***/ "./src/js/firebaseConfig.js":
/*!**********************************!*\
  !*** ./src/js/firebaseConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firebaseConfig = {\r\n\tapiKey: \"AIzaSyBJlHyaeU53R1gonwEHSH23D1qDDSvC8wg\",\r\n\tauthDomain: \"main-assignment-990e8.firebaseapp.com\",\r\n\tprojectId: \"main-assignment-990e8\",\r\n\tstorageBucket: \"main-assignment-990e8.appspot.com\",\r\n\tmessagingSenderId: \"255805880148\",\r\n\tappId: \"1:255805880148:web:f6817f7cd6e2c969123ac1\"\r\n };\r\n\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseConfig);\n\n//# sourceURL=webpack://src/./src/js/firebaseConfig.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;