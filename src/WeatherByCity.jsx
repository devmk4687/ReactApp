import React, { useState } from "react";
import axios from "axios";

function WeatherByCity() {
  // state to store user input (city name)
  const [city, setCity] = useState("");
  // state to store weather info (array of searched cities)
  const [weather, setWeather] = useState([]);

  // function to fetch weather
  const fetchWeather = () => {
    // ⿡ First call → get latitude & longitude of city
    axios
      .get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}`
      )
      .then((geoRes) => {
        // if no city found
        if (!geoRes.data.results || geoRes.data.results.length === 0) {
          alert("City not found!");
          return;
        }

        // extract first matched city
        const { latitude, longitude, name, country } = geoRes.data.results[0];

        // ⿢ Second call → get weather info using lat/lon
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
          .then((weatherRes) => {
            // update state (keep old + add new city)
            setWeather([
              ...weather,
              {
                name,
                country,
                temp: weatherRes.data.current_weather.temperature,
                wind: weatherRes.data.current_weather.windspeed,
              },
            ]);
          })
          .catch((err) => {
            console.error(err);
            alert("Failed to fetch weather data!");
          });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch city location!");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        <i className="bi bi-cloud"></i> Weather App
      </h2>

      {/* input box for city name */}
      <input type="text" value={city} placeholder="Enter city" onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchWeather} className=" btn btn-primary ms-2">Get Weather</button>

      {/* display weather cards */}
      {weather.map((w) => (
        <div class="container" style={{width: "200px"}}>
        <div className="card" style={{ marginTop: "15px" }} >
          <div className="card-body" style={{background: `url(https://res.cloudinary.com/dxfq3iotg/image/upload/v1557323760/weather.svg) no-repeat center`}}>
            <h5 className="card-title">
              {w.name}, {w.country}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <i className="bi bi-thermometer-half"></i> Temp: {w.temp} °C
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              <i className="bi bi-wind"></i> Wind: {w.wind} km/h
            </h6>
          </div>
        </div>
        </div>
      ))}
</div>);
}

export default WeatherByCity;