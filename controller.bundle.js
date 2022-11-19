/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
const  key =()=> 'bb12d776fbfb444a76e9c8822c774d85'

function show(){
    getWeatherData('Puerto Rico')
}

async function getGeolocation(location){

    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key()}`)
        const loc = await response.json();
        console.log(loc)
        return  loc;
    } catch (error) {
        console.log(error)
    }    

}

async function getCurrentWeatherData(geoLocation){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation[0].lat}&lon=${geoLocation[0].lon}&appid=${key()}`)
        const data = await response.json()
        console.log(data)
        return response
    } catch (error) {
        
    }
   
}

async function getForecastWeatherData(geoLocation){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${geoLocation[0].lat}&lon=${geoLocation[0].lon}&appid=${key()}`)
        const data = await response.json()
        console.log(data)
        return response
    } catch (error) {
        
    }
   
}





async function getWeatherData(location){

    try {
        const geoLocation =   await getGeolocation(location);
        getCurrentWeatherData(geoLocation)
        getForecastWeatherData(geoLocation)

   
    } catch (error) {
        
    }
   
}



 
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsU0FBUyxpQkFBaUIsTUFBTTtBQUN2SDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsbUJBQW1CLE9BQU8sbUJBQW1CLFNBQVMsTUFBTTtBQUN4SjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RkFBNkYsbUJBQW1CLE9BQU8sbUJBQW1CLFNBQVMsTUFBTTtBQUN6SjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBpLy4vc3JjL2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCAga2V5ID0oKT0+ICdiYjEyZDc3NmZiZmI0NDRhNzZlOWM4ODIyYzc3NGQ4NSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93KCl7XHJcbiAgICBnZXRXZWF0aGVyRGF0YSgnUHVlcnRvIFJpY28nKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9sb2NhdGlvbihsb2NhdGlvbil7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYXRpb259JmxpbWl0PTEmYXBwaWQ9JHtrZXkoKX1gKVxyXG4gICAgICAgIGNvbnN0IGxvYyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2MpXHJcbiAgICAgICAgcmV0dXJuICBsb2M7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfSAgICBcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyRGF0YShnZW9Mb2NhdGlvbil7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2dlb0xvY2F0aW9uWzBdLmxhdH0mbG9uPSR7Z2VvTG9jYXRpb25bMF0ubG9ufSZhcHBpZD0ke2tleSgpfWApXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RXZWF0aGVyRGF0YShnZW9Mb2NhdGlvbil7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtnZW9Mb2NhdGlvblswXS5sYXR9Jmxvbj0ke2dlb0xvY2F0aW9uWzBdLmxvbn0mYXBwaWQ9JHtrZXkoKX1gKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbil7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBnZW9Mb2NhdGlvbiA9ICAgYXdhaXQgZ2V0R2VvbG9jYXRpb24obG9jYXRpb24pO1xyXG4gICAgICAgIGdldEN1cnJlbnRXZWF0aGVyRGF0YShnZW9Mb2NhdGlvbilcclxuICAgICAgICBnZXRGb3JlY2FzdFdlYXRoZXJEYXRhKGdlb0xvY2F0aW9uKVxyXG5cclxuICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9