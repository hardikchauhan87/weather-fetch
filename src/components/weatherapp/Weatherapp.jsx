import React, { Children, useState } from 'react'
import './weatherapp.css'
import clearicon from '../assets/clear.png'
import cloudicon from '../assets/cloud.png'
import drizzleicon from '../assets/drizzle.png'
import humidityicon from '../assets/humidity.png'
import rainicon from '../assets/rain.png'
import searchicon from '../assets/search.png'
import snowicon from '../assets/snow.png'
import windicon from '../assets/wind.png'
import nighticon from '../assets/night.png'
import initialicon from '../assets/initial.png'





const Weatherapp = () => {

  let api_key="224ea947c3c84278a385f322694e5750";
  const [wicon,setWicon]=useState(initialicon)
  const search = async ()=>{
    const element=document.getElementsByClassName("cityinput")
    
    if(element[0].value===""){
      return 0;
    }
    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
    
 
    
  
     let response=await fetch(url);
     let data= await response.json()
     
    
    
     const humidity=document.getElementsByClassName("humidity-percentage")
     const wind=document.getElementsByClassName("wind-rate")
     const temprature=document.getElementsByClassName("weather-temp")
     const location=document.getElementsByClassName("weather-location")
     const Sky=document.getElementById("sky")
     
     humidity[0].innerHTML= data.main.humidity+"%";
     wind[0].innerHTML= Math.floor(data.wind.speed)+"km/h";
     temprature[0].innerHTML = Math.floor(data.main.temp)+"°c";
     location[0].innerHTML = data.name;
     Sky.innerHTML=data.weather[0].description
     
     
     if(data.weather[0].icon==="01d"){
     setWicon(clearicon)
     }
     else if(data.weather[0].icon==="01n"){
      setWicon(nighticon)

     }
     else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
     setWicon(cloudicon)
     }
     else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
     setWicon(drizzleicon)
     }
     else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
     setWicon(drizzleicon)
     }
     else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
     setWicon(rainicon)
     }
     else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
     setWicon(rainicon)
     }
     else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
     setWicon(snowicon)
     }
  else{
   setWicon(clearicon)
  }
  
  }
  return (
    <div className='containerf col-md col-sm col-lg'>
      <div className='top-bar'>
        <input type="text" className="cityinput" placeholder='search city'/>
        <div className='search-icon' onClick={()=>{search()}}>
          <img src={searchicon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img id='mainimg' src={wicon} alt="" /> 
      </div>
      
      <div className="weather-temp"></div>
      <div className="weather-location">enter city name</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityicon} alt="" />
          <div className="data">
            <div className="humidity-percentage"></div>
            <div className="text">humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windicon} alt="" />
          <div className="data">
            <div className="wind-rate"></div>
            <div className="text">wind speed</div>
           
          </div>
        </div>
        
      </div>
      <div id='clear'>
        <div id='sky'></div>
      </div>
     <div id='mydetails'>
      <span id='detail'>created by hardik chauhan <a href="https://instagram.com/hardik.since2002_?igshid=OGQ5ZDc2ODk2ZA==" className='"glyphicon ' target='ig'></a></span>
    
     </div>
    </div>
  )
} 

export default Weatherapp
