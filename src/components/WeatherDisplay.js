import React from "react";

const WeatherDisplay = ({ weatherData }) => (
  <div className="weather-display">
    <h2>Current Weather</h2>
    {weatherData.length ? (
      weatherData.map((data, index) => (
        <div key={index} className="weather-card">
          <h3>{data.city}</h3>
          <p>Temperature: {data.temp} °C</p>
          <p>Feels Like: {data.feels_like} °C</p>
          <p>Condition: {data.condition}</p>
        </div>
      ))
    ) : (
      <p>No weather data available.</p>
    )}
  </div>
);

export default WeatherDisplay;
