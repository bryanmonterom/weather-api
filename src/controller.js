const  key =()=> 'bb12d776fbfb444a76e9c8822c774d85'

export function show(){
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



 