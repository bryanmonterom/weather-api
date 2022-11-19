/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createImages": () => (/* binding */ createImages),
/* harmony export */   "setActive": () => (/* binding */ setActive)
/* harmony export */ });
function createElement(element, className,text, id){
    let elementtoCreate = document.createElement(element);
    elementtoCreate.textContent = text
    elementtoCreate.id = id
    // if(className != []){
    //     className.forEach(element => {
    //     elementtoCreate.classList.add(className)
    //     });
    // }
    if(className != ''){
        className.split(',').forEach(element => {
            elementtoCreate.classList.add(element)
        });
    }
    if(id == ''){
        elementtoCreate.classList.add(className)
        return elementtoCreate;
    }
    return elementtoCreate;

}

function createImages(className, src){
    let img = document.createElement('img');
    img.classList.add(className);
    img.src = src
    return img;
}

function setActive(e){
    document.getElementsByClassName('active')[0].classList.toggle('active');
     e.target.classList.toggle('active') ;
}

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
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentWeatherBuilder": () => (/* binding */ currentWeatherBuilder),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");

function show(){
    console.log('ui')
}

function currentWeatherBuilder(weather){

    let container = document.getElementsByClassName('container')[0];
    let weatherContainer = createWeatherContainer();
    let currentWeather = createCurrentWeather(weather.currentTemperature, weather.geoLocation, weather.clouds, weather.cloudsDetails);
    weatherContainer.appendChild(currentWeather)
    container.appendChild(weatherContainer)
//     <div class="current-weather-container">
//     <div class="current-weather">
//         <div class="current-weather-item"></div>
//         <div class="current-weather-item"></div>
//     </div>
//     <div class="weather-items">
//         <div class="weather-item"></div>
//         <div class="weather-item"></div>
//         <div class="weather-item"></div>
//         <div class="weather-item"></div>
//         <div class="weather-item"></div>
//     </div>
// </div>
}

// create div to hold all the information related to the current weather
function createWeatherContainer(){
    const div = _utilities__WEBPACK_IMPORTED_MODULE_0__.createElement('div','current-weather-container','','currentWeatherContainer');
    return div;
}

//create div to hold the information of the temperature and the sky
function createCurrentWeather(temperature, country, clouds, cloudsDetails){
    const div = _utilities__WEBPACK_IMPORTED_MODULE_0__.createElement('div','current-weather','','');
    div.appendChild(createCurrentWeatherTemperature(temperature,country))
    div.appendChild(createCurrentWeatherClouds(clouds,cloudsDetails))
    return div;
}

// create div to hold the current temp a

function createCurrentWeatherTemperature(temperature, country){
    const div = _utilities__WEBPACK_IMPORTED_MODULE_0__.createElement('div','current-weather-items','','');
    const temp = _utilities__WEBPACK_IMPORTED_MODULE_0__.createElement('div','current-weather-item',temperature,'');
    const location = _utilities__WEBPACK_IMPORTED_MODULE_0__.createElement('div','current-weather-item',country,'');
    div.appendChild(temp)
    div.appendChild(location)
    return div;
}

function createCurrentWeatherClouds(clouds, cloudsDetails){
    const div = _utilities__WEBPACK_IMPORTED_MODULE_0__.createElement('div','current-weather-items','','');
    const cloud = _utilities__WEBPACK_IMPORTED_MODULE_0__.createElement('div','current-weather-item',clouds,'');
    const cloudDetail = _utilities__WEBPACK_IMPORTED_MODULE_0__.createElement('div','current-weather-item',cloudsDetails,'');
    div.appendChild(cloud)
    div.appendChild(cloudDetail)
    return div;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDakM7QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQXVCO0FBQ3ZDLGlCQUFpQixxREFBdUI7QUFDeEMscUJBQXFCLHFEQUF1QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQXVCO0FBQ3ZDLGtCQUFrQixxREFBdUI7QUFDekMsd0JBQXdCLHFEQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvLi9zcmMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lLHRleHQsIGlkKXtcclxuICAgIGxldCBlbGVtZW50dG9DcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudHRvQ3JlYXRlLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgZWxlbWVudHRvQ3JlYXRlLmlkID0gaWRcclxuICAgIC8vIGlmKGNsYXNzTmFtZSAhPSBbXSl7XHJcbiAgICAvLyAgICAgY2xhc3NOYW1lLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAvLyAgICAgZWxlbWVudHRvQ3JlYXRlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgaWYoY2xhc3NOYW1lICE9ICcnKXtcclxuICAgICAgICBjbGFzc05hbWUuc3BsaXQoJywnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50dG9DcmVhdGUuY2xhc3NMaXN0LmFkZChlbGVtZW50KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYoaWQgPT0gJycpe1xyXG4gICAgICAgIGVsZW1lbnR0b0NyZWF0ZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgICAgICByZXR1cm4gZWxlbWVudHRvQ3JlYXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnR0b0NyZWF0ZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZXMoY2xhc3NOYW1lLCBzcmMpe1xyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGltZy5zcmMgPSBzcmNcclxuICAgIHJldHVybiBpbWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmUoZSl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKSA7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHV0aWxpdGllcyBmcm9tICcuL3V0aWxpdGllcydcclxuZXhwb3J0IGZ1bmN0aW9uIHNob3coKXtcclxuICAgIGNvbnNvbGUubG9nKCd1aScpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50V2VhdGhlckJ1aWxkZXIod2VhdGhlcil7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRhaW5lcicpWzBdO1xyXG4gICAgbGV0IHdlYXRoZXJDb250YWluZXIgPSBjcmVhdGVXZWF0aGVyQ29udGFpbmVyKCk7XHJcbiAgICBsZXQgY3VycmVudFdlYXRoZXIgPSBjcmVhdGVDdXJyZW50V2VhdGhlcih3ZWF0aGVyLmN1cnJlbnRUZW1wZXJhdHVyZSwgd2VhdGhlci5nZW9Mb2NhdGlvbiwgd2VhdGhlci5jbG91ZHMsIHdlYXRoZXIuY2xvdWRzRGV0YWlscyk7XHJcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpXHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lclwiPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtd2VhdGhlclwiPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXdlYXRoZXItaXRlbVwiPjwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXdlYXRoZXItaXRlbVwiPjwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pdGVtc1wiPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWl0ZW1cIj48L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pdGVtXCI+PC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXItaXRlbVwiPjwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWl0ZW1cIj48L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pdGVtXCI+PC9kaXY+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gPC9kaXY+XHJcbn1cclxuXHJcbi8vIGNyZWF0ZSBkaXYgdG8gaG9sZCBhbGwgdGhlIGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gdGhlIGN1cnJlbnQgd2VhdGhlclxyXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyQ29udGFpbmVyKCl7XHJcbiAgICBjb25zdCBkaXYgPSB1dGlsaXRpZXMuY3JlYXRlRWxlbWVudCgnZGl2JywnY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lcicsJycsJ2N1cnJlbnRXZWF0aGVyQ29udGFpbmVyJyk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG4vL2NyZWF0ZSBkaXYgdG8gaG9sZCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIHRlbXBlcmF0dXJlIGFuZCB0aGUgc2t5XHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRXZWF0aGVyKHRlbXBlcmF0dXJlLCBjb3VudHJ5LCBjbG91ZHMsIGNsb3Vkc0RldGFpbHMpe1xyXG4gICAgY29uc3QgZGl2ID0gdXRpbGl0aWVzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2N1cnJlbnQtd2VhdGhlcicsJycsJycpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUN1cnJlbnRXZWF0aGVyVGVtcGVyYXR1cmUodGVtcGVyYXR1cmUsY291bnRyeSkpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQ3VycmVudFdlYXRoZXJDbG91ZHMoY2xvdWRzLGNsb3Vkc0RldGFpbHMpKVxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuLy8gY3JlYXRlIGRpdiB0byBob2xkIHRoZSBjdXJyZW50IHRlbXAgYVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXJUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZSwgY291bnRyeSl7XHJcbiAgICBjb25zdCBkaXYgPSB1dGlsaXRpZXMuY3JlYXRlRWxlbWVudCgnZGl2JywnY3VycmVudC13ZWF0aGVyLWl0ZW1zJywnJywnJyk7XHJcbiAgICBjb25zdCB0ZW1wID0gdXRpbGl0aWVzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2N1cnJlbnQtd2VhdGhlci1pdGVtJyx0ZW1wZXJhdHVyZSwnJyk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IHV0aWxpdGllcy5jcmVhdGVFbGVtZW50KCdkaXYnLCdjdXJyZW50LXdlYXRoZXItaXRlbScsY291bnRyeSwnJyk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGVtcClcclxuICAgIGRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbilcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRXZWF0aGVyQ2xvdWRzKGNsb3VkcywgY2xvdWRzRGV0YWlscyl7XHJcbiAgICBjb25zdCBkaXYgPSB1dGlsaXRpZXMuY3JlYXRlRWxlbWVudCgnZGl2JywnY3VycmVudC13ZWF0aGVyLWl0ZW1zJywnJywnJyk7XHJcbiAgICBjb25zdCBjbG91ZCA9IHV0aWxpdGllcy5jcmVhdGVFbGVtZW50KCdkaXYnLCdjdXJyZW50LXdlYXRoZXItaXRlbScsY2xvdWRzLCcnKTtcclxuICAgIGNvbnN0IGNsb3VkRGV0YWlsID0gdXRpbGl0aWVzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2N1cnJlbnQtd2VhdGhlci1pdGVtJyxjbG91ZHNEZXRhaWxzLCcnKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjbG91ZClcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjbG91ZERldGFpbClcclxuICAgIHJldHVybiBkaXY7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=