/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

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
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");

const  key =()=> 'bb12d776fbfb444a76e9c8822c774d85'

function show(){
    getWeatherData('Guayama')
}

async function getGeolocation(location){

    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key()}`)
        const loc = await response.json();
        // console.log(loc)
        return  loc;
    } catch (error) {
        console.log(error)
    }    

}

async function getCurrentWeatherData(geoLocation,units){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation[0].lat}&lon=${geoLocation[0].lon}&units=${units}&appid=${key()}`)
        const data = await response.json()
     
        let currentWeather = new CurrentWeather(geoLocation, data)
        ;(0,_ui__WEBPACK_IMPORTED_MODULE_0__.currentWeatherBuilder)(currentWeather)
        console.log(data)
        return response
    } catch (error) {
        
    }
   
}

async function getForecastWeatherData(geoLocation){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${geoLocation[0].lat}&lon=${geoLocation[0].lon}&appid=${key()}`)
        const data = await response.json()
        // console.log(data)
        return response
    } catch (error) {
        
    }
   
}





async function getWeatherData(location){

    try {
        const geoLocation =   await getGeolocation(location);
       let current =  getCurrentWeatherData(geoLocation,'metric')
       let forecast = getForecastWeatherData(geoLocation,'metric')

   
    } catch (error) {
        
    }
   
}


function CurrentWeather(geoLocation, data){
    this.currentTemperature = data.main.temp;
    this.geoLocation = `${geoLocation[0].name}, ${geoLocation[0].state}`
    this.clouds = data.weather[0].main;
    this.cloudsDetails = data.weather[0].description


}

 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNqQztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxREFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxREFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxREFBdUI7QUFDdkMsaUJBQWlCLHFEQUF1QjtBQUN4QyxxQkFBcUIscURBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxREFBdUI7QUFDdkMsa0JBQWtCLHFEQUF1QjtBQUN6Qyx3QkFBd0IscURBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0RPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzFDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RixTQUFTLGlCQUFpQixNQUFNO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RixtQkFBbUIsT0FBTyxtQkFBbUIsU0FBUyxNQUFNLFNBQVMsTUFBTTtBQUN2SztBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFxQjtBQUM3QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLG1CQUFtQixPQUFPLG1CQUFtQixTQUFTLE1BQU07QUFDeko7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvQkFBb0IsSUFBSSxxQkFBcUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBpLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBpLy4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBpLy4vc3JjL2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbGl0aWVzIGZyb20gJy4vdXRpbGl0aWVzJ1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvdygpe1xyXG4gICAgY29uc29sZS5sb2coJ3VpJylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRXZWF0aGVyQnVpbGRlcih3ZWF0aGVyKXtcclxuXHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGFpbmVyJylbMF07XHJcbiAgICBsZXQgd2VhdGhlckNvbnRhaW5lciA9IGNyZWF0ZVdlYXRoZXJDb250YWluZXIoKTtcclxuICAgIGxldCBjdXJyZW50V2VhdGhlciA9IGNyZWF0ZUN1cnJlbnRXZWF0aGVyKHdlYXRoZXIuY3VycmVudFRlbXBlcmF0dXJlLCB3ZWF0aGVyLmdlb0xvY2F0aW9uLCB3ZWF0aGVyLmNsb3Vkcywgd2VhdGhlci5jbG91ZHNEZXRhaWxzKTtcclxuICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXIpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckNvbnRhaW5lcilcclxuLy8gICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXdlYXRoZXItY29udGFpbmVyXCI+XHJcbi8vICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC13ZWF0aGVyXCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtd2VhdGhlci1pdGVtXCI+PC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtd2VhdGhlci1pdGVtXCI+PC9kaXY+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWl0ZW1zXCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXItaXRlbVwiPjwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWl0ZW1cIj48L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pdGVtXCI+PC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXItaXRlbVwiPjwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWl0ZW1cIj48L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyA8L2Rpdj5cclxufVxyXG5cclxuLy8gY3JlYXRlIGRpdiB0byBob2xkIGFsbCB0aGUgaW5mb3JtYXRpb24gcmVsYXRlZCB0byB0aGUgY3VycmVudCB3ZWF0aGVyXHJcbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJDb250YWluZXIoKXtcclxuICAgIGNvbnN0IGRpdiA9IHV0aWxpdGllcy5jcmVhdGVFbGVtZW50KCdkaXYnLCdjdXJyZW50LXdlYXRoZXItY29udGFpbmVyJywnJywnY3VycmVudFdlYXRoZXJDb250YWluZXInKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbi8vY3JlYXRlIGRpdiB0byBob2xkIHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgdGVtcGVyYXR1cmUgYW5kIHRoZSBza3lcclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXIodGVtcGVyYXR1cmUsIGNvdW50cnksIGNsb3VkcywgY2xvdWRzRGV0YWlscyl7XHJcbiAgICBjb25zdCBkaXYgPSB1dGlsaXRpZXMuY3JlYXRlRWxlbWVudCgnZGl2JywnY3VycmVudC13ZWF0aGVyJywnJywnJyk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQ3VycmVudFdlYXRoZXJUZW1wZXJhdHVyZSh0ZW1wZXJhdHVyZSxjb3VudHJ5KSlcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVDdXJyZW50V2VhdGhlckNsb3VkcyhjbG91ZHMsY2xvdWRzRGV0YWlscykpXHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG4vLyBjcmVhdGUgZGl2IHRvIGhvbGQgdGhlIGN1cnJlbnQgdGVtcCBhXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50V2VhdGhlclRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlLCBjb3VudHJ5KXtcclxuICAgIGNvbnN0IGRpdiA9IHV0aWxpdGllcy5jcmVhdGVFbGVtZW50KCdkaXYnLCdjdXJyZW50LXdlYXRoZXItaXRlbXMnLCcnLCcnKTtcclxuICAgIGNvbnN0IHRlbXAgPSB1dGlsaXRpZXMuY3JlYXRlRWxlbWVudCgnZGl2JywnY3VycmVudC13ZWF0aGVyLWl0ZW0nLHRlbXBlcmF0dXJlLCcnKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXRpbGl0aWVzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2N1cnJlbnQtd2VhdGhlci1pdGVtJyxjb3VudHJ5LCcnKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uKVxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXJDbG91ZHMoY2xvdWRzLCBjbG91ZHNEZXRhaWxzKXtcclxuICAgIGNvbnN0IGRpdiA9IHV0aWxpdGllcy5jcmVhdGVFbGVtZW50KCdkaXYnLCdjdXJyZW50LXdlYXRoZXItaXRlbXMnLCcnLCcnKTtcclxuICAgIGNvbnN0IGNsb3VkID0gdXRpbGl0aWVzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2N1cnJlbnQtd2VhdGhlci1pdGVtJyxjbG91ZHMsJycpO1xyXG4gICAgY29uc3QgY2xvdWREZXRhaWwgPSB1dGlsaXRpZXMuY3JlYXRlRWxlbWVudCgnZGl2JywnY3VycmVudC13ZWF0aGVyLWl0ZW0nLGNsb3Vkc0RldGFpbHMsJycpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNsb3VkKVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNsb3VkRGV0YWlsKVxyXG4gICAgcmV0dXJuIGRpdjtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQsIGNsYXNzTmFtZSx0ZXh0LCBpZCl7XHJcbiAgICBsZXQgZWxlbWVudHRvQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICAgIGVsZW1lbnR0b0NyZWF0ZS50ZXh0Q29udGVudCA9IHRleHRcclxuICAgIGVsZW1lbnR0b0NyZWF0ZS5pZCA9IGlkXHJcbiAgICAvLyBpZihjbGFzc05hbWUgIT0gW10pe1xyXG4gICAgLy8gICAgIGNsYXNzTmFtZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgLy8gICAgIGVsZW1lbnR0b0NyZWF0ZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIGlmKGNsYXNzTmFtZSAhPSAnJyl7XHJcbiAgICAgICAgY2xhc3NOYW1lLnNwbGl0KCcsJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudHRvQ3JlYXRlLmNsYXNzTGlzdC5hZGQoZWxlbWVudClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmKGlkID09ICcnKXtcclxuICAgICAgICBlbGVtZW50dG9DcmVhdGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnR0b0NyZWF0ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50dG9DcmVhdGU7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VzKGNsYXNzTmFtZSwgc3JjKXtcclxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBpbWcuc3JjID0gc3JjXHJcbiAgICByZXR1cm4gaW1nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlKGUpe1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aXZlJylbMF0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJykgO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2N1cnJlbnRXZWF0aGVyQnVpbGRlcn0gZnJvbSAnLi91aSdcclxuY29uc3QgIGtleSA9KCk9PiAnYmIxMmQ3NzZmYmZiNDQ0YTc2ZTljODgyMmM3NzRkODUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvdygpe1xyXG4gICAgZ2V0V2VhdGhlckRhdGEoJ0d1YXlhbWEnKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9sb2NhdGlvbihsb2NhdGlvbil7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmxpbWl0PTEmYXBwaWQ9JHtrZXkoKX1gKVxyXG4gICAgICAgIGNvbnN0IGxvYyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2MpXHJcbiAgICAgICAgcmV0dXJuICBsb2M7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfSAgICBcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyRGF0YShnZW9Mb2NhdGlvbix1bml0cyl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2dlb0xvY2F0aW9uWzBdLmxhdH0mbG9uPSR7Z2VvTG9jYXRpb25bMF0ubG9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2tleSgpfWApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgIFxyXG4gICAgICAgIGxldCBjdXJyZW50V2VhdGhlciA9IG5ldyBDdXJyZW50V2VhdGhlcihnZW9Mb2NhdGlvbiwgZGF0YSlcclxuICAgICAgICBjdXJyZW50V2VhdGhlckJ1aWxkZXIoY3VycmVudFdlYXRoZXIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdFdlYXRoZXJEYXRhKGdlb0xvY2F0aW9uKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2dlb0xvY2F0aW9uWzBdLmxhdH0mbG9uPSR7Z2VvTG9jYXRpb25bMF0ubG9ufSZhcHBpZD0ke2tleSgpfWApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKXtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGdlb0xvY2F0aW9uID0gICBhd2FpdCBnZXRHZW9sb2NhdGlvbihsb2NhdGlvbik7XHJcbiAgICAgICBsZXQgY3VycmVudCA9ICBnZXRDdXJyZW50V2VhdGhlckRhdGEoZ2VvTG9jYXRpb24sJ21ldHJpYycpXHJcbiAgICAgICBsZXQgZm9yZWNhc3QgPSBnZXRGb3JlY2FzdFdlYXRoZXJEYXRhKGdlb0xvY2F0aW9uLCdtZXRyaWMnKVxyXG5cclxuICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEN1cnJlbnRXZWF0aGVyKGdlb0xvY2F0aW9uLCBkYXRhKXtcclxuICAgIHRoaXMuY3VycmVudFRlbXBlcmF0dXJlID0gZGF0YS5tYWluLnRlbXA7XHJcbiAgICB0aGlzLmdlb0xvY2F0aW9uID0gYCR7Z2VvTG9jYXRpb25bMF0ubmFtZX0sICR7Z2VvTG9jYXRpb25bMF0uc3RhdGV9YFxyXG4gICAgdGhpcy5jbG91ZHMgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcclxuICAgIHRoaXMuY2xvdWRzRGV0YWlscyA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvblxyXG5cclxuXHJcbn1cclxuXHJcbiAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=