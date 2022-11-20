import * as utilities from "./utilities";
import { format, compareAsc, parseISO } from 'date-fns'

export function show() {
}

export function cleanContent(){
    console.log('Limpiar')
  let container = document.getElementById("weather");
  container.textContent = ''


  let  forecastContainerFather = document.getElementById("weather-forecastData-container");
  forecastContainerFather.textContent = ''

  let  sunContainer = document.getElementById("weather-sunInfo-Container");
  sunContainer.textContent = ''

  let weatherDetail = document.getElementById("weather-detail");
  weatherDetail.textContent = ''




  
}

export function currentWeatherBuilder(weather) {
    cleanContent()
  // main card with weather info
  let container = document.getElementById("weather");

  let weatherContainer = createWeatherContainer();
  let currentWeather = createCurrentWeather(
    weather.currentTemperature,
    weather.geoLocation,
    weather.clouds,
    weather.cloudsDetails,
    weather.icon
  );
  weatherContainer.appendChild(currentWeather);

  // second card with forecast data
  let  forecastContainerFather = document.getElementById("weather-forecastData-container");


  let forecastContainer = utilities.createElement('div',"weather-forecastData",'','weather-forecastData');

  let forecast = createForecast(weather.forecast);
  forecastContainer.appendChild(forecast)

  forecastContainerFather.appendChild(forecastContainer)
  // third card with sun info

  

  let  sunContainer = document.getElementById("weather-sunInfo-Container");
  let  sun = utilities.createElement('div','weather-sunInfo','','weather-sunInfo');



let sunrise = createSunInfo('Sunrise',weather.sunrise)
let sunset = createSunInfo('Sunset',weather.sunset)

sun.appendChild(sunrise)
sun.appendChild(sunset)
sunContainer.appendChild(sun)




  let weatherDetail = document.getElementById("weather-detail");
  let currenWeatherAdditionals = createAdditionalWeatherDetails(
    weather.feelsLike,
    weather.humidity,
    weather.pressure,
    weather.wind,
  );
  weatherDetail.appendChild(currenWeatherAdditionals);

  container.appendChild(weatherContainer);
}

// create div to hold all the information related to the current weather
function createWeatherContainer() {
  const div = utilities.createElement(
    "div",
    "current-weather-container",
    "",
    "currentWeatherContainer"
  );
  return div;
}



//create div to hold the information of the temperature and the sky
function createCurrentWeather(
  temperature,
  country,
  clouds,
  cloudsDetails,
  icon
) {
  const div = utilities.createElement("div", "current-weather", "", "");
  const hr = utilities.createElement("hr", "current-weather-hr", "", "");
  let divImg = utilities.createElement('div','circle','','')
  let img = utilities.createImages(
    "icon-weather",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
  );

  divImg.appendChild(img)

  let cloudsdiv = createCurrentWeatherClouds(clouds, cloudsDetails);


  div.appendChild(createCurrentWeatherTemperature(temperature, country));
  div.appendChild(hr);
  div.appendChild(cloudsdiv);
  div.appendChild(divImg);


  return div;
}

// create div to hold the current temp a

function createCurrentWeatherTemperature(temperature, country) {
  const div = utilities.createElement("div", "current-weather-items", "", "");
  const temp = utilities.createElement(
    "div",
    "current-weather-item-header",
    temperature,
    ""
  );
  const location = utilities.createElement(
    "div",
    "current-weather-item",
    country,
    ""
  );

  div.appendChild(temp);
  div.appendChild(location);
  return div;
}

function createCurrentWeatherClouds(clouds, cloudsDetails) {
  const div = utilities.createElement("div", "current-weather-items", "", "");
  const cloud = utilities.createElement(
    "div",
    "current-weather-item-header",
    clouds,
    ""
  );
  const cloudDetail = utilities.createElement(
    "div",
    "current-weather-item",
    cloudsDetails,
    ""
  );
  div.appendChild(cloud);
  div.appendChild(cloudDetail);
  return div;
}


function createSunInfo(status, hour) {
let div = utilities.createElement('div','sunset','','')
  let header = utilities.createElement('div','label',status,'')
  let time = utilities.createElement('div','lbl',hour,'')

 let img = utilities.createImages('icon-sun',"./icons/"+status.toLowerCase()+'.png')

  div.appendChild(header)
  div.appendChild(time)
  div.appendChild(img)
    return div;
  }


function createAdditionalWeatherDetails(
  feelsLike,
  humidity,
  pressure,
  wind,
  maxtemp
) {
  const div = utilities.createElement("div", "weather-items", "", "");

  
  const feelLikediv = createAdditionalWeatherItem("Feels like", feelsLike,'feels');
  const humiditydiv = createAdditionalWeatherItem("Humidity", humidity+ '%','humidity');
  const pressurediv = createAdditionalWeatherItem("Pressure", pressure,'pressure');
  const winddiv = createAdditionalWeatherItem("Wind", wind + ' m/s','wind');
  const hr = utilities.createElement("hr", "weather-detail-hr", "", "");
  const hr1 = utilities.createElement("hr", "weather-detail-hr", "", "");
  const hr2 = utilities.createElement("hr", "weather-detail-hr", "", "");


//   const minTempdiv = createAdditionalWeatherItem("Min Temp", mintemp);
//   const maxTempdiv = createAdditionalWeatherItem("Max Temp", maxtemp);
  div.appendChild(feelLikediv);
  div.appendChild(hr)
  div.appendChild(humiditydiv);
  div.appendChild(hr1)

  div.appendChild(pressurediv);
  div.appendChild(hr2)

  div.appendChild(winddiv);

//   div.appendChild(maxTempdiv);
//   div.appendChild(minTempdiv);
  return div;
}

function createAdditionalWeatherItem(name, value,image) {
  const div = utilities.createElement("div", "weather-item", "", "");
  const label = utilities.createElement("div", "weather-item-label", name, "");
  const info = utilities.createElement("div", "weather-item-value", value, "");
 let img = utilities.createImages('icon-sun',"./icons/"+image+".png")

div.appendChild(img)
  div.appendChild(label);
  div.appendChild(info);
  return div;
}

utilities.formValidator();

function createForecast(forecast) {
  const div = utilities.createElement("div", "forecast-container", "", "");

  for (let index = 0; index < forecast.length; index++) {
    const element = createForecastItem(forecast[index]);
    div.appendChild(element);
  }

  return div;
}


function createForecastItem(forecast) {
  const div = utilities.createElement("div", "forecast-items", "", "");

  const day = utilities.createElement(
    "div",
    "forecast-item,label",
    format(parseISO(forecast.dt_txt), "MMM dd")
    ,
    ""
  );

  const hour = utilities.createElement(
    "div",
    "forecast-item",
    format(parseISO(forecast.dt_txt), "hh aaa")
    ,
    ""
  );


  const maxTemp = utilities.createElement(
    "div",
    "forecast-item",
    Math.round(forecast.main.temp) + "°",
    ""
  );
  const minTemp = utilities.createElement(
    "div",
    "forecast-item",
    forecast.main.temp_min,
    ""
  );

  let img = utilities.createImages(
    "icon-weather",
    `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`
  );

  div.appendChild(day);
  div.appendChild(hour);
  div.appendChild(img);
  div.appendChild(maxTemp);

  return div;
}
