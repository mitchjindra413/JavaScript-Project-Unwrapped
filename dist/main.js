/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_authorization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/authorization */ \"./src/scripts/authorization.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  if (!window.location.hash.includes('access_token')) {\n    let bttn = document.querySelector(\"#login_bttn\");\n    let url = (0,_scripts_authorization__WEBPACK_IMPORTED_MODULE_0__.auth_url)();\n    bttn.setAttribute(\"href\", url);\n    console.log(url);\n    document.querySelector('#logged_in').style.display = \"none\";\n  } else {\n    document.querySelector('#login').style.display = \"none\";\n  }\n});\ndocument;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsUUFBckIsQ0FBOEIsY0FBOUIsQ0FBTCxFQUFtRDtJQUMvQyxJQUFJQyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixhQUF2QixDQUFYO0lBQ0EsSUFBSUMsR0FBRyxHQUFHVCxnRUFBUSxFQUFsQjtJQUNBTyxJQUFJLENBQUNHLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEJELEdBQTFCO0lBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0lBRUFSLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixZQUF2QixFQUFxQ0ssS0FBckMsQ0FBMkNDLE9BQTNDLEdBQXFELE1BQXJEO0VBRUgsQ0FSRCxNQVFPO0lBQ0hiLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixRQUF2QixFQUFpQ0ssS0FBakMsQ0FBdUNDLE9BQXZDLEdBQWlELE1BQWpEO0VBQ0g7QUFDSixDQVpEO0FBY0FiLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dGhfdXJsfSBmcm9tICcuL3NjcmlwdHMvYXV0aG9yaXphdGlvbidcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGlmICghd2luZG93LmxvY2F0aW9uLmhhc2guaW5jbHVkZXMoJ2FjY2Vzc190b2tlbicpKXtcbiAgICAgICAgbGV0IGJ0dG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2luX2J0dG5cIilcbiAgICAgICAgbGV0IHVybCA9IGF1dGhfdXJsKClcbiAgICAgICAgYnR0bi5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHVybCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVybCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2dlZF9pbicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG59KVxuXG5kb2N1bWVudFxuXG5cbiJdLCJuYW1lcyI6WyJhdXRoX3VybCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsImluY2x1ZGVzIiwiYnR0biIsInF1ZXJ5U2VsZWN0b3IiLCJ1cmwiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/authorization.js":
/*!**************************************!*\
  !*** ./src/scripts/authorization.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth_url\": function() { return /* binding */ auth_url; }\n/* harmony export */ });\nconst client_id = '9b212b049d7743ec9891cd13f67a9b85';\nconst redirect_uri = 'http://127.0.0.1:5500/index.html';\nconst stateKey = 'spotify_auth_state';\nconst scope = 'user-read-private user-read-email user-read-recently-played user-top-read playlist-modify-public';\n\nfunction generateRandomString(length) {\n  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n  let str = '';\n\n  for (let i = 0; i < length; i++) {\n    str += chars.charAt(Math.floor(Math.random() * chars.length));\n  }\n\n  return str;\n}\n\n;\nconst state = generateRandomString(16);\nconst auth_url = () => {\n  let url = 'https://accounts.spotify.com/authorize';\n  url += '?response_type=token';\n  url += '&client_id=' + encodeURIComponent(client_id);\n  url += '&scope=' + encodeURIComponent(scope);\n  url += '&redirect_uri=' + encodeURIComponent(redirect_uri);\n  url += '&state=' + encodeURIComponent(state);\n  localStorage.setItem(stateKey, state);\n  return url;\n}; // app.get('/login', (req, res) => {\n//     let state = res.cookie(stateKey, generateRandomString(16))\n//     const codeVerifier = generateRandomString(64)\n//     const scope = 'user-read-private user-read-email user-read-recently-played user-top-read playlist-modify-public';\n//     res.redirect(generateUrlWithSearchParams('https://accounts.spotify.com/authorize?',\n//         {\n//             client_id: client_id,\n//             response_type: 'code',\n//             redirect_uri: redirect_uri,\n//             state: state,\n//             scope: scope,\n//             code_challange_method: 'S256',\n//             code_challange: generateCodeChallenge(codeVerifier)\n//         }\n//     ))\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hdXRob3JpemF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsa0NBQWxCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGtDQUFyQjtBQUVBLE1BQU1DLFFBQVEsR0FBRyxvQkFBakI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsa0dBQWQ7O0FBR0EsU0FBU0Msb0JBQVQsQ0FBOEJDLE1BQTlCLEVBQXNDO0VBQ2xDLElBQUlDLEtBQUssR0FBRyxnRUFBWjtFQUVBLElBQUlDLEdBQUcsR0FBRyxFQUFWOztFQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsTUFBcEIsRUFBNEJHLENBQUMsRUFBN0IsRUFBaUM7SUFDN0JELEdBQUcsSUFBSUQsS0FBSyxDQUFDRyxNQUFOLENBQWFDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JOLEtBQUssQ0FBQ0QsTUFBakMsQ0FBYixDQUFQO0VBQ0g7O0VBRUQsT0FBT0UsR0FBUDtBQUNIOztBQUFBO0FBRUQsTUFBTU0sS0FBSyxHQUFHVCxvQkFBb0IsQ0FBQyxFQUFELENBQWxDO0FBS08sTUFBTVUsUUFBUSxHQUFHLE1BQU07RUFDMUIsSUFBSUMsR0FBRyxHQUFHLHdDQUFWO0VBQ0FBLEdBQUcsSUFBSSxzQkFBUDtFQUNBQSxHQUFHLElBQUksZ0JBQWdCQyxrQkFBa0IsQ0FBQ2hCLFNBQUQsQ0FBekM7RUFDQWUsR0FBRyxJQUFJLFlBQVlDLGtCQUFrQixDQUFDYixLQUFELENBQXJDO0VBQ0FZLEdBQUcsSUFBSSxtQkFBbUJDLGtCQUFrQixDQUFDZixZQUFELENBQTVDO0VBQ0FjLEdBQUcsSUFBSSxZQUFZQyxrQkFBa0IsQ0FBQ0gsS0FBRCxDQUFyQztFQUVBSSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJoQixRQUFyQixFQUErQlcsS0FBL0I7RUFFQSxPQUFPRSxHQUFQO0FBRUgsQ0FaTSxFQWlCUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2F1dGhvcml6YXRpb24uanM/ODNlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbGllbnRfaWQgPSAnOWIyMTJiMDQ5ZDc3NDNlYzk4OTFjZDEzZjY3YTliODUnXG5jb25zdCByZWRpcmVjdF91cmkgPSAnaHR0cDovLzEyNy4wLjAuMTo1NTAwL2luZGV4Lmh0bWwnXG5cbmNvbnN0IHN0YXRlS2V5ID0gJ3Nwb3RpZnlfYXV0aF9zdGF0ZSdcbmNvbnN0IHNjb3BlID0gJ3VzZXItcmVhZC1wcml2YXRlIHVzZXItcmVhZC1lbWFpbCB1c2VyLXJlYWQtcmVjZW50bHktcGxheWVkIHVzZXItdG9wLXJlYWQgcGxheWxpc3QtbW9kaWZ5LXB1YmxpYyc7XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TdHJpbmcobGVuZ3RoKSB7XG4gICAgbGV0IGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcblxuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN0ciArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IHN0YXRlID0gZ2VuZXJhdGVSYW5kb21TdHJpbmcoMTYpO1xuXG5cblxuXG5leHBvcnQgY29uc3QgYXV0aF91cmwgPSAoKSA9PiB7XG4gICAgbGV0IHVybCA9ICdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZSc7XG4gICAgdXJsICs9ICc/cmVzcG9uc2VfdHlwZT10b2tlbic7XG4gICAgdXJsICs9ICcmY2xpZW50X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X2lkKTtcbiAgICB1cmwgKz0gJyZzY29wZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNjb3BlKTtcbiAgICB1cmwgKz0gJyZyZWRpcmVjdF91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdF91cmkpO1xuICAgIHVybCArPSAnJnN0YXRlPScgKyBlbmNvZGVVUklDb21wb25lbnQoc3RhdGUpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RhdGVLZXksIHN0YXRlKTtcbiAgICBcbiAgICByZXR1cm4gdXJsO1xuXG59XG5cblxuXG5cbi8vIGFwcC5nZXQoJy9sb2dpbicsIChyZXEsIHJlcykgPT4ge1xuLy8gICAgIGxldCBzdGF0ZSA9IHJlcy5jb29raWUoc3RhdGVLZXksIGdlbmVyYXRlUmFuZG9tU3RyaW5nKDE2KSlcbi8vICAgICBjb25zdCBjb2RlVmVyaWZpZXIgPSBnZW5lcmF0ZVJhbmRvbVN0cmluZyg2NClcbi8vICAgICBjb25zdCBzY29wZSA9ICd1c2VyLXJlYWQtcHJpdmF0ZSB1c2VyLXJlYWQtZW1haWwgdXNlci1yZWFkLXJlY2VudGx5LXBsYXllZCB1c2VyLXRvcC1yZWFkIHBsYXlsaXN0LW1vZGlmeS1wdWJsaWMnO1xuXG4vLyAgICAgcmVzLnJlZGlyZWN0KGdlbmVyYXRlVXJsV2l0aFNlYXJjaFBhcmFtcygnaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemU/Jyxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgICAgY2xpZW50X2lkOiBjbGllbnRfaWQsXG4vLyAgICAgICAgICAgICByZXNwb25zZV90eXBlOiAnY29kZScsXG4vLyAgICAgICAgICAgICByZWRpcmVjdF91cmk6IHJlZGlyZWN0X3VyaSxcbi8vICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbi8vICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbi8vICAgICAgICAgICAgIGNvZGVfY2hhbGxhbmdlX21ldGhvZDogJ1MyNTYnLFxuLy8gICAgICAgICAgICAgY29kZV9jaGFsbGFuZ2U6IGdlbmVyYXRlQ29kZUNoYWxsZW5nZShjb2RlVmVyaWZpZXIpXG4vLyAgICAgICAgIH1cbi8vICAgICApKVxuLy8gfSk7XG5cbiJdLCJuYW1lcyI6WyJjbGllbnRfaWQiLCJyZWRpcmVjdF91cmkiLCJzdGF0ZUtleSIsInNjb3BlIiwiZ2VuZXJhdGVSYW5kb21TdHJpbmciLCJsZW5ndGgiLCJjaGFycyIsInN0ciIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGF0ZSIsImF1dGhfdXJsIiwidXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/authorization.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;