const apiKey = 'eed09418de64ad3cf7289ad5140a9026';
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city=document.querySelector('.search-details input');
const btn=document.querySelector('.search-btn')
async function getWeather(city){
    try{
    const response=await fetch(url+city.value+'&appid='+apiKey);
    const data=await response.json();
    const icon=document.querySelector('.weather-icon');
    document.querySelector('.temperature').innerHTML=Math.round(data.main.temp)+'°c';
    document.querySelector('.city').innerHTML=data.name;
    if(data.weather[0].description=='rain' || data.weather[0].description==' shower rain')
        icon.src="./heavy-rain.png";
    else if(data.weather[0].description=='clear sky')
        icon.src="./sun.png";
    else if(data.weather[0].description=='thunderstorm')
        icon.src="./strom.png"
    else if(data.weather[0].description=='snow')
        icon.src="./snow.png"
    else if(data.weather[0].description=='few clouds')
        icon.src="./few clouds.png"
    else if(data.weather[0].description=='scattered clouds' || data.weather[0].description=='broken clouds')
        icon.src="./scattered clouds.png"
    else if(data.weather[0].description=='haze')
        icon.src="./haze.png"
    document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';
    document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
    document.querySelector('.invalid').style.display='none';
    document.querySelector('.weather-details').style.display='block';
    }
    catch(error){
        document.querySelector('.weather-details').style.display='none';
        document.querySelector('.invalid').style.display='block';

    }
}
btn.addEventListener('click',()=>{
    getWeather(city);
    setTimeout(()=>{
        city.value="";
    },1300);
})
