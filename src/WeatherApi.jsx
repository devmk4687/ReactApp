import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function WeatherApi() {
    const [data, setWeatherData] = useState([]);
   
    useEffect(()=>{
       
         axios.get("https://api.open-meteo.com/v1/forecast?latitude=18.5246&longitude=73.8786&current_weather=true").then((response) => {
            console.log(response.data.current_weather);

            setWeatherData(response.data.current_weather);
            }).catch(error => {
                console.error("Error fetching weather  data:", error);
            });
    }, []);

  return (
    <>
    <h1>WeatherApi</h1>
     <div class="container" style={{width: "500px"}}>
        <div class="card">
            <div class="card-body" style={{background: `url(https://res.cloudinary.com/dxfq3iotg/image/upload/v1557323760/weather.svg) no-repeat center`}}> 
                <h5 class="card-title">Current Weather</h5>
                 {/* <img class="" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559286899/weatherbg.jpg" alt="Card image cap" /> */}
               
                 <p class="card-text">Temperature: {data.temperature}°C</p> 
                <p class="card-text">Wind Speed: {data.windspeed} km/h</p>
                <p class="card-text">Wind Direction: {data.winddirection}°</p>
                <p class="card-text">Weather Code: {data.weathercode}</p>
                <p class="card-text">Time: {data.time}</p>
                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default WeatherApi;