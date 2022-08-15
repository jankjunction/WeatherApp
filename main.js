/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildContainer": () => (/* binding */ buildContainer),
/* harmony export */   "buildHeader": () => (/* binding */ buildHeader)
/* harmony export */ });
const buildContainer = () => {
  let container = document.createElement('div');
  container.setAttribute('id', 'container');
  document.body.appendChild(container);
};

const buildLogo = (header) => {
  let logo = document.createElement('span');
  logo.setAttribute('id', 'logo');
  logo.innerText = 'Weather';
  header.appendChild(logo);
};

const buildCitySearch = (header) => {
  let citySearchForm = document.createElement('form');
  citySearchForm.setAttribute('id', 'city-search-form');
  let citySearch = document.createElement('input');
  citySearch.setAttribute('type', 'text');
  citySearch.setAttribute('id', 'city-search');
  citySearch.setAttribute('name', 'city-search');
  citySearch.setAttribute('placeholder', 'input city');
  let citySearchSubmit = document.createElement('button');
  citySearchSubmit.setAttribute('type', 'button');
  citySearchSubmit.setAttribute('id', 'city-search-submit');
  citySearchSubmit.innerText = 'Search';
  citySearchForm.appendChild(citySearch);
  citySearchForm.appendChild(citySearchSubmit);
  header.appendChild(citySearchForm);
};

const buildHeader = () => {
  let header = document.createElement('div');
  header.setAttribute('id', 'header');
  let container = document.getElementById('container');
  container.appendChild(header);
  buildLogo(header);
  buildCitySearch(header);
};




/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "citySubmit": () => (/* binding */ citySubmit)
/* harmony export */ });
/* harmony import */ var _fetch_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_weather */ "./src/fetch_weather.js");


const citySubmit = () => {
  let submit = document.getElementById('city-search-submit');

  submit.addEventListener('click', async () => {
    let citySearch = document.getElementById('city-search');
    let cityWeather = await (0,_fetch_weather__WEBPACK_IMPORTED_MODULE_0__["default"])(citySearch.value);
    console.log(cityWeather);
    return cityWeather;
  });
};




/***/ }),

/***/ "./src/fetch_weather.js":
/*!******************************!*\
  !*** ./src/fetch_weather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fetchWeather = async (city) => {
  try {
    const apiKey = '3c68b43789bf56a9dc2ea91cc4a6309e';
    const weather5d3hr = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`,
      { cors: true }
    );
    const weather = await weather5d3hr.json();
    return weather;
  } catch {
    console.log(err);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeather);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events.js");



(0,_components__WEBPACK_IMPORTED_MODULE_0__.buildContainer)();
(0,_components__WEBPACK_IMPORTED_MODULE_0__.buildHeader)();
(0,_events__WEBPACK_IMPORTED_MODULE_1__.citySubmit)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDSTs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLDBEQUFZO0FBQ3hDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUNidEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSyxTQUFTLE9BQU87QUFDakYsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7VUNiNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMkQ7QUFDckI7O0FBRXRDLDJEQUFjO0FBQ2Qsd0RBQVc7QUFDWCxtREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ZldGNoX3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidWlsZENvbnRhaW5lciA9ICgpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuY29uc3QgYnVpbGRMb2dvID0gKGhlYWRlcikgPT4ge1xuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvZ28nKTtcbiAgbG9nby5pbm5lclRleHQgPSAnV2VhdGhlcic7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbn07XG5cbmNvbnN0IGJ1aWxkQ2l0eVNlYXJjaCA9IChoZWFkZXIpID0+IHtcbiAgbGV0IGNpdHlTZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjaXR5U2VhcmNoRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NpdHktc2VhcmNoLWZvcm0nKTtcbiAgbGV0IGNpdHlTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaXR5U2VhcmNoLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGNpdHlTZWFyY2guc2V0QXR0cmlidXRlKCdpZCcsICdjaXR5LXNlYXJjaCcpO1xuICBjaXR5U2VhcmNoLnNldEF0dHJpYnV0ZSgnbmFtZScsICdjaXR5LXNlYXJjaCcpO1xuICBjaXR5U2VhcmNoLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnaW5wdXQgY2l0eScpO1xuICBsZXQgY2l0eVNlYXJjaFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjaXR5U2VhcmNoU3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgY2l0eVNlYXJjaFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NpdHktc2VhcmNoLXN1Ym1pdCcpO1xuICBjaXR5U2VhcmNoU3VibWl0LmlubmVyVGV4dCA9ICdTZWFyY2gnO1xuICBjaXR5U2VhcmNoRm9ybS5hcHBlbmRDaGlsZChjaXR5U2VhcmNoKTtcbiAgY2l0eVNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoY2l0eVNlYXJjaFN1Ym1pdCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjaXR5U2VhcmNoRm9ybSk7XG59O1xuXG5jb25zdCBidWlsZEhlYWRlciA9ICgpID0+IHtcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGJ1aWxkTG9nbyhoZWFkZXIpO1xuICBidWlsZENpdHlTZWFyY2goaGVhZGVyKTtcbn07XG5cbmV4cG9ydCB7IGJ1aWxkQ29udGFpbmVyLCBidWlsZEhlYWRlciB9O1xuIiwiaW1wb3J0IGZldGNoV2VhdGhlciBmcm9tICcuL2ZldGNoX3dlYXRoZXInO1xuXG5jb25zdCBjaXR5U3VibWl0ID0gKCkgPT4ge1xuICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktc2VhcmNoLXN1Ym1pdCcpO1xuXG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgY2l0eVNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LXNlYXJjaCcpO1xuICAgIGxldCBjaXR5V2VhdGhlciA9IGF3YWl0IGZldGNoV2VhdGhlcihjaXR5U2VhcmNoLnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhjaXR5V2VhdGhlcik7XG4gICAgcmV0dXJuIGNpdHlXZWF0aGVyO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNpdHlTdWJtaXQgfTtcbiIsImNvbnN0IGZldGNoV2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXBpS2V5ID0gJzNjNjhiNDM3ODliZjU2YTlkYzJlYTkxY2M0YTYzMDllJztcbiAgICBjb25zdCB3ZWF0aGVyNWQzaHIgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz1pbXBlcmlhbGAsXG4gICAgICB7IGNvcnM6IHRydWUgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHdlYXRoZXI1ZDNoci5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXI7XG4gIH0gY2F0Y2gge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmZXRjaFdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGJ1aWxkQ29udGFpbmVyLCBidWlsZEhlYWRlciB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBjaXR5U3VibWl0IH0gZnJvbSAnLi9ldmVudHMnO1xuXG5idWlsZENvbnRhaW5lcigpO1xuYnVpbGRIZWFkZXIoKTtcbmNpdHlTdWJtaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==