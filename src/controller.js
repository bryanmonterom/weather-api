import { currentWeatherBuilder } from "./ui";
import { format } from 'date-fns'
import {validateElement} from './utilities'

const key = () => "bb12d776fbfb444a76e9c8822c774d85";

export function show(e) {
//   getWeatherData("Guayama");
}

async function getGeolocation(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${key()}`
    );
    const loc = await response.json();
    return loc;
  } catch (error) {
    console.log(error);
  }
}

async function getCurrentWeatherData(geoLocation, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        geoLocation[0].lat
      }&lon=${geoLocation[0].lon}&units=${units}&appid=${key()}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)

  }
}

async function getForecastWeatherData(geoLocation, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?&lat=${
        geoLocation[0].lat
      }&lon=${geoLocation[0].lon}&units=${units}&appid=${key()}`
    );

    
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
  
''
}

async function getWeatherData(location) {
  try {
    const formData = new FormData(location.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)

    const geoLocation = await getGeolocation(formProps.location);
    let current = await getCurrentWeatherData(geoLocation, "metric");
    let forecast = await getForecastWeatherData(geoLocation, "metric");

    let currentWeather = new CurrentWeather(
      geoLocation,
      current,
      forecast.list
    );
    currentWeatherBuilder(currentWeather);
    console.log(currentWeather);
  } catch (error) {
    console.log(error)
  }
}

function CurrentWeather(geoLocation, data,forecast) {
  this.currentTemperature = Math.round(data.main.temp) + "°";
  this.geoLocation = `${geoLocation[0].name}, ${geoLocation[0].state}`;
  this.clouds = data.weather[0].main;
  this.cloudsDetails = data.weather[0].description;
  this.feelsLike = data.main.feels_like + "°";
  this.tempMin =  Math.round(data.main.temp_min) + "°";
  this.tempMax =  Math.round(data.main.temp_max) + "°";
  this.humidity = data.main.humidity;
  this.pressure = data.main.pressure + " mb";
  this.icon = data.weather[0].icon;
  this.forecast = forecast;
  this.wind = data.wind.speed;

//   this.sunrise = new Date(data.sys.sunrise * 1000);

  this.sunrise = format(((new Date(data.sys.sunrise * 1000))), "hh:m aaa");
  this.sunset = format(((new Date(data.sys.sunset * 1000))), "hh:m aaa");


//   this.sunrise = format((data.sys.sunrise), "hh:m aaa");
}

formEventListener();

function formEventListener(){
  let form = document.getElementById("formWeather")

    form.addEventListener("submit", event =>{
        event.preventDefault();
  
    let formIsValid = true;
    form.classList.toggle('invalid');
    const formElements = Array.from(form.elements)


    formElements.forEach(formElement =>{
        if(!formElement.dataset) return;
        if(!formElement.dataset.validate) return;
        validateElement(formElement)
    })

    let allInvalids = form.querySelector(".invalid");
    // formIsValid = form.querySelector(".invalid").length === 0;
    // formIsValid = fallInvalids === null? true: false;


    if(formIsValid === false){
        form.classList.add('invalid');
        event.preventDefault();
        return
    }else{
        getWeatherData(event)
        return


    }


})
}