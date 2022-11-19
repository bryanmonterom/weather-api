/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

 

/***/ }),

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



_controller__WEBPACK_IMPORTED_MODULE_0__.show();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUMxQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsU0FBUyxpQkFBaUIsTUFBTTtBQUN2SDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsbUJBQW1CLE9BQU8sbUJBQW1CLFNBQVMsTUFBTSxTQUFTLE1BQU07QUFDdks7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBcUI7QUFDN0I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE2RixtQkFBbUIsT0FBTyxtQkFBbUIsU0FBUyxNQUFNO0FBQ3pKO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0JBQW9CLElBQUkscUJBQXFCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0V3QztBQUNqQztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxREFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxREFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxREFBdUI7QUFDdkMsaUJBQWlCLHFEQUF1QjtBQUN4QyxxQkFBcUIscURBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxREFBdUI7QUFDdkMsa0JBQWtCLHFEQUF1QjtBQUN6Qyx3QkFBd0IscURBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0RPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNoQjtBQUMxQjtBQUNBLDZDQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1cnJlbnRXZWF0aGVyQnVpbGRlcn0gZnJvbSAnLi91aSdcclxuY29uc3QgIGtleSA9KCk9PiAnYmIxMmQ3NzZmYmZiNDQ0YTc2ZTljODgyMmM3NzRkODUnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvdygpe1xyXG4gICAgZ2V0V2VhdGhlckRhdGEoJ0d1YXlhbWEnKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9sb2NhdGlvbihsb2NhdGlvbil7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmxpbWl0PTEmYXBwaWQ9JHtrZXkoKX1gKVxyXG4gICAgICAgIGNvbnN0IGxvYyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2MpXHJcbiAgICAgICAgcmV0dXJuICBsb2M7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfSAgICBcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyRGF0YShnZW9Mb2NhdGlvbix1bml0cyl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2dlb0xvY2F0aW9uWzBdLmxhdH0mbG9uPSR7Z2VvTG9jYXRpb25bMF0ubG9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2tleSgpfWApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgIFxyXG4gICAgICAgIGxldCBjdXJyZW50V2VhdGhlciA9IG5ldyBDdXJyZW50V2VhdGhlcihnZW9Mb2NhdGlvbiwgZGF0YSlcclxuICAgICAgICBjdXJyZW50V2VhdGhlckJ1aWxkZXIoY3VycmVudFdlYXRoZXIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdFdlYXRoZXJEYXRhKGdlb0xvY2F0aW9uKXtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2dlb0xvY2F0aW9uWzBdLmxhdH0mbG9uPSR7Z2VvTG9jYXRpb25bMF0ubG9ufSZhcHBpZD0ke2tleSgpfWApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKXtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGdlb0xvY2F0aW9uID0gICBhd2FpdCBnZXRHZW9sb2NhdGlvbihsb2NhdGlvbik7XHJcbiAgICAgICBsZXQgY3VycmVudCA9ICBnZXRDdXJyZW50V2VhdGhlckRhdGEoZ2VvTG9jYXRpb24sJ21ldHJpYycpXHJcbiAgICAgICBsZXQgZm9yZWNhc3QgPSBnZXRGb3JlY2FzdFdlYXRoZXJEYXRhKGdlb0xvY2F0aW9uLCdtZXRyaWMnKVxyXG5cclxuICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEN1cnJlbnRXZWF0aGVyKGdlb0xvY2F0aW9uLCBkYXRhKXtcclxuICAgIHRoaXMuY3VycmVudFRlbXBlcmF0dXJlID0gZGF0YS5tYWluLnRlbXA7XHJcbiAgICB0aGlzLmdlb0xvY2F0aW9uID0gYCR7Z2VvTG9jYXRpb25bMF0ubmFtZX0sICR7Z2VvTG9jYXRpb25bMF0uc3RhdGV9YFxyXG4gICAgdGhpcy5jbG91ZHMgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcclxuICAgIHRoaXMuY2xvdWRzRGV0YWlscyA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvblxyXG5cclxuXHJcbn1cclxuXHJcbiAiLCJpbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSAnLi91dGlsaXRpZXMnXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93KCl7XHJcbiAgICBjb25zb2xlLmxvZygndWknKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudFdlYXRoZXJCdWlsZGVyKHdlYXRoZXIpe1xyXG5cclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250YWluZXInKVswXTtcclxuICAgIGxldCB3ZWF0aGVyQ29udGFpbmVyID0gY3JlYXRlV2VhdGhlckNvbnRhaW5lcigpO1xyXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyID0gY3JlYXRlQ3VycmVudFdlYXRoZXIod2VhdGhlci5jdXJyZW50VGVtcGVyYXR1cmUsIHdlYXRoZXIuZ2VvTG9jYXRpb24sIHdlYXRoZXIuY2xvdWRzLCB3ZWF0aGVyLmNsb3Vkc0RldGFpbHMpO1xyXG4gICAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlcilcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKVxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnQtd2VhdGhlci1jb250YWluZXJcIj5cclxuLy8gICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXdlYXRoZXJcIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC13ZWF0aGVyLWl0ZW1cIj48L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudC13ZWF0aGVyLWl0ZW1cIj48L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXItaXRlbXNcIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pdGVtXCI+PC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXItaXRlbVwiPjwvZGl2PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWl0ZW1cIj48L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1pdGVtXCI+PC9kaXY+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXItaXRlbVwiPjwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIDwvZGl2PlxyXG59XHJcblxyXG4vLyBjcmVhdGUgZGl2IHRvIGhvbGQgYWxsIHRoZSBpbmZvcm1hdGlvbiByZWxhdGVkIHRvIHRoZSBjdXJyZW50IHdlYXRoZXJcclxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckNvbnRhaW5lcigpe1xyXG4gICAgY29uc3QgZGl2ID0gdXRpbGl0aWVzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2N1cnJlbnQtd2VhdGhlci1jb250YWluZXInLCcnLCdjdXJyZW50V2VhdGhlckNvbnRhaW5lcicpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuLy9jcmVhdGUgZGl2IHRvIGhvbGQgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSB0ZW1wZXJhdHVyZSBhbmQgdGhlIHNreVxyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50V2VhdGhlcih0ZW1wZXJhdHVyZSwgY291bnRyeSwgY2xvdWRzLCBjbG91ZHNEZXRhaWxzKXtcclxuICAgIGNvbnN0IGRpdiA9IHV0aWxpdGllcy5jcmVhdGVFbGVtZW50KCdkaXYnLCdjdXJyZW50LXdlYXRoZXInLCcnLCcnKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVDdXJyZW50V2VhdGhlclRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlLGNvdW50cnkpKVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZUN1cnJlbnRXZWF0aGVyQ2xvdWRzKGNsb3VkcyxjbG91ZHNEZXRhaWxzKSlcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbi8vIGNyZWF0ZSBkaXYgdG8gaG9sZCB0aGUgY3VycmVudCB0ZW1wIGFcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRXZWF0aGVyVGVtcGVyYXR1cmUodGVtcGVyYXR1cmUsIGNvdW50cnkpe1xyXG4gICAgY29uc3QgZGl2ID0gdXRpbGl0aWVzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2N1cnJlbnQtd2VhdGhlci1pdGVtcycsJycsJycpO1xyXG4gICAgY29uc3QgdGVtcCA9IHV0aWxpdGllcy5jcmVhdGVFbGVtZW50KCdkaXYnLCdjdXJyZW50LXdlYXRoZXItaXRlbScsdGVtcGVyYXR1cmUsJycpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSB1dGlsaXRpZXMuY3JlYXRlRWxlbWVudCgnZGl2JywnY3VycmVudC13ZWF0aGVyLWl0ZW0nLGNvdW50cnksJycpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRlbXApXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobG9jYXRpb24pXHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50V2VhdGhlckNsb3VkcyhjbG91ZHMsIGNsb3Vkc0RldGFpbHMpe1xyXG4gICAgY29uc3QgZGl2ID0gdXRpbGl0aWVzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsJ2N1cnJlbnQtd2VhdGhlci1pdGVtcycsJycsJycpO1xyXG4gICAgY29uc3QgY2xvdWQgPSB1dGlsaXRpZXMuY3JlYXRlRWxlbWVudCgnZGl2JywnY3VycmVudC13ZWF0aGVyLWl0ZW0nLGNsb3VkcywnJyk7XHJcbiAgICBjb25zdCBjbG91ZERldGFpbCA9IHV0aWxpdGllcy5jcmVhdGVFbGVtZW50KCdkaXYnLCdjdXJyZW50LXdlYXRoZXItaXRlbScsY2xvdWRzRGV0YWlscywnJyk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2xvdWQpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2xvdWREZXRhaWwpXHJcbiAgICByZXR1cm4gZGl2O1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgY2xhc3NOYW1lLHRleHQsIGlkKXtcclxuICAgIGxldCBlbGVtZW50dG9DcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudHRvQ3JlYXRlLnRleHRDb250ZW50ID0gdGV4dFxyXG4gICAgZWxlbWVudHRvQ3JlYXRlLmlkID0gaWRcclxuICAgIC8vIGlmKGNsYXNzTmFtZSAhPSBbXSl7XHJcbiAgICAvLyAgICAgY2xhc3NOYW1lLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAvLyAgICAgZWxlbWVudHRvQ3JlYXRlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgaWYoY2xhc3NOYW1lICE9ICcnKXtcclxuICAgICAgICBjbGFzc05hbWUuc3BsaXQoJywnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50dG9DcmVhdGUuY2xhc3NMaXN0LmFkZChlbGVtZW50KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYoaWQgPT0gJycpe1xyXG4gICAgICAgIGVsZW1lbnR0b0NyZWF0ZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgICAgICByZXR1cm4gZWxlbWVudHRvQ3JlYXRlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnR0b0NyZWF0ZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbWFnZXMoY2xhc3NOYW1lLCBzcmMpe1xyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGltZy5zcmMgPSBzcmNcclxuICAgIHJldHVybiBpbWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmUoZSl7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmUnKVswXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKSA7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJ1xyXG5pbXBvcnQgKiBhcyB1aSBmcm9tICcuL3VpJ1xyXG5cclxuY29udHJvbGxlci5zaG93KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==