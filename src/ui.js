import * as utilities from './utilities'
export function show(){
    console.log('ui')
}

export function currentWeatherBuilder(weather){

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
    const div = utilities.createElement('div','current-weather-container','','currentWeatherContainer');
    return div;
}

//create div to hold the information of the temperature and the sky
function createCurrentWeather(temperature, country, clouds, cloudsDetails){
    const div = utilities.createElement('div','current-weather','','');
    div.appendChild(createCurrentWeatherTemperature(temperature,country))
    div.appendChild(createCurrentWeatherClouds(clouds,cloudsDetails))
    return div;
}

// create div to hold the current temp a

function createCurrentWeatherTemperature(temperature, country){
    const div = utilities.createElement('div','current-weather-items','','');
    const temp = utilities.createElement('div','current-weather-item',temperature,'');
    const location = utilities.createElement('div','current-weather-item',country,'');
    div.appendChild(temp)
    div.appendChild(location)
    return div;
}

function createCurrentWeatherClouds(clouds, cloudsDetails){
    const div = utilities.createElement('div','current-weather-items','','');
    const cloud = utilities.createElement('div','current-weather-item',clouds,'');
    const cloudDetail = utilities.createElement('div','current-weather-item',cloudsDetails,'');
    div.appendChild(cloud)
    div.appendChild(cloudDetail)
    return div;
}