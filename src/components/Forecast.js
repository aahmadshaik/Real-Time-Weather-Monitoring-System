import React, { useEffect, useState } from "react";
import axios from "axios";

const Forecast = ({ cities }) => {
  const [forecastData, setForecastData] = useState([]);
  const API_KEY = "869509f5bf7ea77478fce654614cab31";

  const fetchForecastData = async () => {
    const dataPromises = cities.map((city) =>
      axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      )
    );

    const responses = await Promise.all(dataPromises);
    const formattedData = responses.map((response) => ({
      city: response.data.city.name,
      forecasts: response.data.list.slice(0, 5).map((item) => ({
        dt: item.dt_txt,
        temp: (item.main.temp - 273.15).toFixed(2),
        condition: item.weather[0].main,
      })),
    }));

    setForecastData(formattedData);
  };

  useEffect(() => {
    fetchForecastData();
  }, [cities]);

  return (
    <div className="forecast">
      <h2>Weather Forecast</h2>
      {forecastData.length ? (
        forecastData.map((data, index) => (
          <div key={index} className="forecast-card">
            <h3>{data.city}</h3>
            {data.forecasts.map((forecast, fIndex) => (
              <p key={fIndex}>
                {forecast.dt}: {forecast.temp} °C, {forecast.condition}
              </p>
            ))}
          </div>
        ))
      ) : (
        <p>No forecast data available.</p>
      )}
    </div>
  );
};

export default Forecast;
