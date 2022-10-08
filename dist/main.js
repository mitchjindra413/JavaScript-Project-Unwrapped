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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_authorization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/authorization */ \"./src/scripts/authorization.js\");\n/* harmony import */ var _scripts_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/requests */ \"./src/scripts/requests.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  if (!window.location.hash.includes('access_token')) {\n    let bttn = document.querySelector(\"#login_bttn\");\n    let url = (0,_scripts_authorization__WEBPACK_IMPORTED_MODULE_0__.auth_url)();\n    bttn.setAttribute(\"href\", url);\n    console.log(url);\n    document.querySelector('#logged_in').style.display = \"none\";\n  } else {\n    document.querySelector('#login').style.display = \"none\";\n  }\n\n  let short = document.querySelector('#short_bttn');\n  short.addEventListener(\"click\", _scripts_requests__WEBPACK_IMPORTED_MODULE_1__.recieveRequest);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsUUFBckIsQ0FBOEIsY0FBOUIsQ0FBTCxFQUFtRDtJQUMvQyxJQUFJQyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixhQUF2QixDQUFYO0lBQ0EsSUFBSUMsR0FBRyxHQUFHVixnRUFBUSxFQUFsQjtJQUNBUSxJQUFJLENBQUNHLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEJELEdBQTFCO0lBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0lBRUFSLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixZQUF2QixFQUFxQ0ssS0FBckMsQ0FBMkNDLE9BQTNDLEdBQXFELE1BQXJEO0VBRUgsQ0FSRCxNQVFPO0lBQ0hiLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixRQUF2QixFQUFpQ0ssS0FBakMsQ0FBdUNDLE9BQXZDLEdBQWlELE1BQWpEO0VBQ0g7O0VBRUQsSUFBSUMsS0FBSyxHQUFHZCxRQUFRLENBQUNPLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBWjtFQUNBTyxLQUFLLENBQUNiLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDRiw2REFBaEM7QUFDSCxDQWZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aF91cmwgfSBmcm9tICcuL3NjcmlwdHMvYXV0aG9yaXphdGlvbidcbmltcG9ydCB7IHJlY2lldmVSZXF1ZXN0IH0gZnJvbSAnLi9zY3JpcHRzL3JlcXVlc3RzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgaWYgKCF3aW5kb3cubG9jYXRpb24uaGFzaC5pbmNsdWRlcygnYWNjZXNzX3Rva2VuJykpe1xuICAgICAgICBsZXQgYnR0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW5fYnR0blwiKVxuICAgICAgICBsZXQgdXJsID0gYXV0aF91cmwoKVxuICAgICAgICBidHRuLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdXJsKTtcbiAgICAgICAgY29uc29sZS5sb2codXJsKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nZ2VkX2luJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cblxuICAgIGxldCBzaG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG9ydF9idHRuJylcbiAgICBzaG9ydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVjaWV2ZVJlcXVlc3QpXG59KVxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJhdXRoX3VybCIsInJlY2lldmVSZXF1ZXN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwiaW5jbHVkZXMiLCJidHRuIiwicXVlcnlTZWxlY3RvciIsInVybCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImRpc3BsYXkiLCJzaG9ydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/authorization.js":
/*!**************************************!*\
  !*** ./src/scripts/authorization.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth_url\": function() { return /* binding */ auth_url; }\n/* harmony export */ });\nconst client_id = '9b212b049d7743ec9891cd13f67a9b85';\nconst redirect_uri = 'http://127.0.0.1:5500/index.html';\nconst stateKey = 'spotify_auth_state';\nconst scope = 'user-read-private user-read-email user-read-recently-played user-top-read playlist-modify-public';\n\nfunction generateRandomString(length) {\n  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n  let str = '';\n\n  for (let i = 0; i < length; i++) {\n    str += chars.charAt(Math.floor(Math.random() * chars.length));\n  }\n\n  return str;\n}\n\n;\nconst state = generateRandomString(16);\nconst auth_url = () => {\n  let url = 'https://accounts.spotify.com/authorize';\n  url += '?response_type=token';\n  url += '&client_id=' + encodeURIComponent(client_id);\n  url += '&scope=' + encodeURIComponent(scope);\n  url += '&redirect_uri=' + encodeURIComponent(redirect_uri);\n  url += '&state=' + encodeURIComponent(state);\n  localStorage.setItem(stateKey, state);\n  return url;\n}; // app.get('/login', (req, res) => {\n//     let state = res.cookie(stateKey, generateRandomString(16))\n//     const codeVerifier = generateRandomString(64)\n//     const scope = 'user-read-private user-read-email user-read-recently-played user-top-read playlist-modify-public';\n//     res.redirect(generateUrlWithSearchParams('https://accounts.spotify.com/authorize?',\n//         {\n//             client_id: client_id,\n//             response_type: 'code',\n//             redirect_uri: redirect_uri,\n//             state: state,\n//             scope: scope,\n//             code_challange_method: 'S256',\n//             code_challange: generateCodeChallenge(codeVerifier)\n//         }\n//     ))\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hdXRob3JpemF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsa0NBQWxCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLGtDQUFyQjtBQUVBLE1BQU1DLFFBQVEsR0FBRyxvQkFBakI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsa0dBQWQ7O0FBR0EsU0FBU0Msb0JBQVQsQ0FBOEJDLE1BQTlCLEVBQXNDO0VBQ2xDLElBQUlDLEtBQUssR0FBRyxnRUFBWjtFQUVBLElBQUlDLEdBQUcsR0FBRyxFQUFWOztFQUNBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsTUFBcEIsRUFBNEJHLENBQUMsRUFBN0IsRUFBaUM7SUFDN0JELEdBQUcsSUFBSUQsS0FBSyxDQUFDRyxNQUFOLENBQWFDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JOLEtBQUssQ0FBQ0QsTUFBakMsQ0FBYixDQUFQO0VBQ0g7O0VBRUQsT0FBT0UsR0FBUDtBQUNIOztBQUFBO0FBRUQsTUFBTU0sS0FBSyxHQUFHVCxvQkFBb0IsQ0FBQyxFQUFELENBQWxDO0FBS08sTUFBTVUsUUFBUSxHQUFHLE1BQU07RUFDMUIsSUFBSUMsR0FBRyxHQUFHLHdDQUFWO0VBQ0FBLEdBQUcsSUFBSSxzQkFBUDtFQUNBQSxHQUFHLElBQUksZ0JBQWdCQyxrQkFBa0IsQ0FBQ2hCLFNBQUQsQ0FBekM7RUFDQWUsR0FBRyxJQUFJLFlBQVlDLGtCQUFrQixDQUFDYixLQUFELENBQXJDO0VBQ0FZLEdBQUcsSUFBSSxtQkFBbUJDLGtCQUFrQixDQUFDZixZQUFELENBQTVDO0VBQ0FjLEdBQUcsSUFBSSxZQUFZQyxrQkFBa0IsQ0FBQ0gsS0FBRCxDQUFyQztFQUVBSSxZQUFZLENBQUNDLE9BQWIsQ0FBcUJoQixRQUFyQixFQUErQlcsS0FBL0I7RUFFQSxPQUFPRSxHQUFQO0FBRUgsQ0FaTSxFQWlCUDtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2F1dGhvcml6YXRpb24uanM/ODNlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbGllbnRfaWQgPSAnOWIyMTJiMDQ5ZDc3NDNlYzk4OTFjZDEzZjY3YTliODUnXG5jb25zdCByZWRpcmVjdF91cmkgPSAnaHR0cDovLzEyNy4wLjAuMTo1NTAwL2luZGV4Lmh0bWwnXG5cbmNvbnN0IHN0YXRlS2V5ID0gJ3Nwb3RpZnlfYXV0aF9zdGF0ZSdcbmNvbnN0IHNjb3BlID0gJ3VzZXItcmVhZC1wcml2YXRlIHVzZXItcmVhZC1lbWFpbCB1c2VyLXJlYWQtcmVjZW50bHktcGxheWVkIHVzZXItdG9wLXJlYWQgcGxheWxpc3QtbW9kaWZ5LXB1YmxpYyc7XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TdHJpbmcobGVuZ3RoKSB7XG4gICAgbGV0IGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcblxuICAgIGxldCBzdHIgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN0ciArPSBjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IHN0YXRlID0gZ2VuZXJhdGVSYW5kb21TdHJpbmcoMTYpO1xuXG5cblxuXG5leHBvcnQgY29uc3QgYXV0aF91cmwgPSAoKSA9PiB7XG4gICAgbGV0IHVybCA9ICdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZSc7XG4gICAgdXJsICs9ICc/cmVzcG9uc2VfdHlwZT10b2tlbic7XG4gICAgdXJsICs9ICcmY2xpZW50X2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X2lkKTtcbiAgICB1cmwgKz0gJyZzY29wZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHNjb3BlKTtcbiAgICB1cmwgKz0gJyZyZWRpcmVjdF91cmk9JyArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdF91cmkpO1xuICAgIHVybCArPSAnJnN0YXRlPScgKyBlbmNvZGVVUklDb21wb25lbnQoc3RhdGUpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RhdGVLZXksIHN0YXRlKTtcbiAgICBcbiAgICByZXR1cm4gdXJsO1xuXG59XG5cblxuXG5cbi8vIGFwcC5nZXQoJy9sb2dpbicsIChyZXEsIHJlcykgPT4ge1xuLy8gICAgIGxldCBzdGF0ZSA9IHJlcy5jb29raWUoc3RhdGVLZXksIGdlbmVyYXRlUmFuZG9tU3RyaW5nKDE2KSlcbi8vICAgICBjb25zdCBjb2RlVmVyaWZpZXIgPSBnZW5lcmF0ZVJhbmRvbVN0cmluZyg2NClcbi8vICAgICBjb25zdCBzY29wZSA9ICd1c2VyLXJlYWQtcHJpdmF0ZSB1c2VyLXJlYWQtZW1haWwgdXNlci1yZWFkLXJlY2VudGx5LXBsYXllZCB1c2VyLXRvcC1yZWFkIHBsYXlsaXN0LW1vZGlmeS1wdWJsaWMnO1xuXG4vLyAgICAgcmVzLnJlZGlyZWN0KGdlbmVyYXRlVXJsV2l0aFNlYXJjaFBhcmFtcygnaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemU/Jyxcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgICAgY2xpZW50X2lkOiBjbGllbnRfaWQsXG4vLyAgICAgICAgICAgICByZXNwb25zZV90eXBlOiAnY29kZScsXG4vLyAgICAgICAgICAgICByZWRpcmVjdF91cmk6IHJlZGlyZWN0X3VyaSxcbi8vICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbi8vICAgICAgICAgICAgIHNjb3BlOiBzY29wZSxcbi8vICAgICAgICAgICAgIGNvZGVfY2hhbGxhbmdlX21ldGhvZDogJ1MyNTYnLFxuLy8gICAgICAgICAgICAgY29kZV9jaGFsbGFuZ2U6IGdlbmVyYXRlQ29kZUNoYWxsZW5nZShjb2RlVmVyaWZpZXIpXG4vLyAgICAgICAgIH1cbi8vICAgICApKVxuLy8gfSk7XG5cbiJdLCJuYW1lcyI6WyJjbGllbnRfaWQiLCJyZWRpcmVjdF91cmkiLCJzdGF0ZUtleSIsInNjb3BlIiwiZ2VuZXJhdGVSYW5kb21TdHJpbmciLCJsZW5ndGgiLCJjaGFycyIsInN0ciIsImkiLCJjaGFyQXQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGF0ZSIsImF1dGhfdXJsIiwidXJsIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/authorization.js\n");

/***/ }),

/***/ "./src/scripts/requests.js":
/*!*********************************!*\
  !*** ./src/scripts/requests.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"recieveRequest\": function() { return /* binding */ recieveRequest; }\n/* harmony export */ });\nconst key = window.location.hash;\nconst token = key.slice(key.indexOf(\"=\") + 1, key.indexOf(\"&\"));\n\nfunction generateRequestUrl(type, length, time) {\n  let url = 'https://api.spotify.com/v1/me/top';\n  url += '/' + type;\n  url += '?limit=' + length;\n  url += '&time_range=' + time;\n  return url;\n} // https://api.spotify.com/v1/me/top/song?limit=50&time_range=long_term\n\n\nasync function recieveRequest() {\n  const total_data = {};\n  let length = ['short_term', 'medium_term', 'long_term'];\n\n  for (let time of length) {\n    const response = await fetch(generateRequestUrl('tracks', '50', time), {\n      method: 'GET',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + token\n      }\n    });\n    const data = await response.json();\n    total_data[`tracks_${time}`] = data.items;\n    const response2 = await fetch(generateRequestUrl('artists', '50', time), {\n      method: 'GET',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + token\n      }\n    });\n    const data2 = await response2.json();\n    total_data[`artists_${time}`] = data2.items;\n  }\n\n  ;\n  const tds = JSON.stringify(total_data);\n  console.log(tds);\n  sessionStorage.setItem('total_data', tds);\n  return total_data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9yZXF1ZXN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQTVCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSixHQUFHLENBQUNLLEtBQUosQ0FBVUwsR0FBRyxDQUFDTSxPQUFKLENBQVksR0FBWixJQUFtQixDQUE3QixFQUFnQ04sR0FBRyxDQUFDTSxPQUFKLENBQVksR0FBWixDQUFoQyxDQUFkOztBQUVBLFNBQVNDLGtCQUFULENBQTRCQyxJQUE1QixFQUFrQ0MsTUFBbEMsRUFBMENDLElBQTFDLEVBQWdEO0VBQzVDLElBQUlDLEdBQUcsR0FBRyxtQ0FBVjtFQUNBQSxHQUFHLElBQUksTUFBTUgsSUFBYjtFQUNBRyxHQUFHLElBQUksWUFBWUYsTUFBbkI7RUFDQUUsR0FBRyxJQUFJLGlCQUFpQkQsSUFBeEI7RUFFQSxPQUFPQyxHQUFQO0FBQ0gsRUFFRDs7O0FBRU8sZUFBZUMsY0FBZixHQUErQjtFQUVsQyxNQUFNQyxVQUFVLEdBQUcsRUFBbkI7RUFDQSxJQUFJSixNQUFNLEdBQUcsQ0FBQyxZQUFELEVBQWUsYUFBZixFQUE4QixXQUE5QixDQUFiOztFQUNBLEtBQUksSUFBSUMsSUFBUixJQUFnQkQsTUFBaEIsRUFBd0I7SUFDcEIsTUFBTUssUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ1Isa0JBQWtCLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUJHLElBQWpCLENBQW5CLEVBQTJDO01BQ25FTSxNQUFNLEVBQUUsS0FEMkQ7TUFFbkVDLE9BQU8sRUFBRTtRQUNMLFVBQVUsa0JBREw7UUFFTCxnQkFBZ0Isa0JBRlg7UUFHTCxpQkFBaUIsWUFBWWI7TUFIeEI7SUFGMEQsQ0FBM0MsQ0FBNUI7SUFRQSxNQUFNYyxJQUFJLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFULEVBQW5CO0lBRUFOLFVBQVUsQ0FBRSxVQUFTSCxJQUFLLEVBQWhCLENBQVYsR0FBK0JRLElBQUksQ0FBQ0UsS0FBcEM7SUFHQSxNQUFNQyxTQUFTLEdBQUcsTUFBTU4sS0FBSyxDQUFDUixrQkFBa0IsQ0FBQyxTQUFELEVBQVksSUFBWixFQUFrQkcsSUFBbEIsQ0FBbkIsRUFBNEM7TUFDckVNLE1BQU0sRUFBRSxLQUQ2RDtNQUVyRUMsT0FBTyxFQUFFO1FBQ0wsVUFBVSxrQkFETDtRQUVMLGdCQUFnQixrQkFGWDtRQUdMLGlCQUFpQixZQUFZYjtNQUh4QjtJQUY0RCxDQUE1QyxDQUE3QjtJQVFBLE1BQU1rQixLQUFLLEdBQUcsTUFBTUQsU0FBUyxDQUFDRixJQUFWLEVBQXBCO0lBRUFOLFVBQVUsQ0FBRSxXQUFVSCxJQUFLLEVBQWpCLENBQVYsR0FBZ0NZLEtBQUssQ0FBQ0YsS0FBdEM7RUFDSDs7RUFBQTtFQUdELE1BQU1HLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVaLFVBQWYsQ0FBWjtFQUNBYSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBWjtFQUNBSyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsWUFBdkIsRUFBcUNOLEdBQXJDO0VBQ0EsT0FBT1YsVUFBUDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvcmVxdWVzdHMuanM/NWVkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXkgPSB3aW5kb3cubG9jYXRpb24uaGFzaFxuY29uc3QgdG9rZW4gPSBrZXkuc2xpY2Uoa2V5LmluZGV4T2YoXCI9XCIpICsgMSwga2V5LmluZGV4T2YoXCImXCIpKVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJlcXVlc3RVcmwodHlwZSwgbGVuZ3RoLCB0aW1lKSB7IFxuICAgIGxldCB1cmwgPSAnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wJztcbiAgICB1cmwgKz0gJy8nICsgdHlwZTtcbiAgICB1cmwgKz0gJz9saW1pdD0nICsgbGVuZ3RoO1xuICAgIHVybCArPSAnJnRpbWVfcmFuZ2U9JyArIHRpbWU7XG5cbiAgICByZXR1cm4gdXJsO1xufVxuXG4vLyBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS90b3Avc29uZz9saW1pdD01MCZ0aW1lX3JhbmdlPWxvbmdfdGVybVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVjaWV2ZVJlcXVlc3QoKXtcblxuICAgIGNvbnN0IHRvdGFsX2RhdGEgPSB7fTtcbiAgICBsZXQgbGVuZ3RoID0gWydzaG9ydF90ZXJtJywgJ21lZGl1bV90ZXJtJywgJ2xvbmdfdGVybSddXG4gICAgZm9yKGxldCB0aW1lIG9mIGxlbmd0aCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGdlbmVyYXRlUmVxdWVzdFVybCgndHJhY2tzJywgJzUwJywgdGltZSksIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgXG4gICAgICAgIHRvdGFsX2RhdGFbYHRyYWNrc18ke3RpbWV9YF0gPSBkYXRhLml0ZW1zXG4gICAgICAgICAgICBcblxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBmZXRjaChnZW5lcmF0ZVJlcXVlc3RVcmwoJ2FydGlzdHMnLCAnNTAnLCB0aW1lKSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBkYXRhMiA9IGF3YWl0IHJlc3BvbnNlMi5qc29uKClcblxuICAgICAgICB0b3RhbF9kYXRhW2BhcnRpc3RzXyR7dGltZX1gXSA9IGRhdGEyLml0ZW1zXG4gICAgfTtcblxuICAgIFxuICAgIGNvbnN0IHRkcyA9IEpTT04uc3RyaW5naWZ5KHRvdGFsX2RhdGEpXG4gICAgY29uc29sZS5sb2codGRzKTtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0b3RhbF9kYXRhJywgdGRzKTtcbiAgICByZXR1cm4gdG90YWxfZGF0YTtcbn1cblxuIl0sIm5hbWVzIjpbImtleSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInRva2VuIiwic2xpY2UiLCJpbmRleE9mIiwiZ2VuZXJhdGVSZXF1ZXN0VXJsIiwidHlwZSIsImxlbmd0aCIsInRpbWUiLCJ1cmwiLCJyZWNpZXZlUmVxdWVzdCIsInRvdGFsX2RhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwiaXRlbXMiLCJyZXNwb25zZTIiLCJkYXRhMiIsInRkcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/requests.js\n");

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