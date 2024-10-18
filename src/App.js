import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherDisplay from "./components/WeatherDisplay";
import DailySummary from "./components/DailySummary";
import Alerts from "./components/Alerts";
import Config from "./components/Config";
import Forecast from "./components/Forecast";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [dailySummary, setDailySummary] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [threshold, setThreshold] = useState(35); // Default temperature threshold
  const cities = [
    "Delhi",
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Kolkata",
    "Hyderabad",
  ];
  const API_KEY = "869509f5bf7ea77478fce654614cab31";

  const fetchWeatherData = async () => {
    const dataPromises = cities.map((city) =>
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      )
    );

    const responses = await Promise.all(dataPromises);
    const formattedData = responses.map((response) => {
      const { main, weather, dt } = response.data;
      return {
        city: response.data.name,
        temp: (main.temp - 273.15).toFixed(2), // Convert from Kelvin to Celsius
        feels_like: (main.feels_like - 273.15).toFixed(2),
        condition: weather[0].main,
        timestamp: dt,
      };
    });

    setWeatherData(formattedData);
    processDailySummary(formattedData);
    checkAlerts(formattedData);
  };

  const processDailySummary = (data) => {
    const currentDate = new Date().toLocaleDateString();
    const summary = {};

    data.forEach((item) => {
      const date = new Date(item.timestamp * 1000).toLocaleDateString();
      if (!summary[date]) {
        summary[date] = {
          totalTemp: 0,
          count: 0,
          maxTemp: -Infinity,
          minTemp: Infinity,
          conditions: {},
        };
      }

      summary[date].totalTemp += parseFloat(item.temp);
      summary[date].count += 1;
      summary[date].maxTemp = Math.max(
        summary[date].maxTemp,
        parseFloat(item.temp)
      );
      summary[date].minTemp = Math.min(
        summary[date].minTemp,
        parseFloat(item.temp)
      );
      summary[date].conditions[item.condition] =
        (summary[date].conditions[item.condition] || 0) + 1;
    });

    const dailySummaries = Object.keys(summary).map((date) => {
      const { totalTemp, count, maxTemp, minTemp, conditions } = summary[date];
      const avgTemp = (totalTemp / count).toFixed(2);
      const dominantCondition = Object.keys(conditions).reduce((a, b) =>
        conditions[a] > conditions[b] ? a : b
      );
      return { date, avgTemp, maxTemp, minTemp, dominantCondition };
    });

    setDailySummary(dailySummaries);
  };

  const checkAlerts = (data) => {
    data.forEach((item) => {
      if (parseFloat(item.temp) > threshold) {
        setAlerts((prevAlerts) => [
          ...prevAlerts,
          `${item.city} has exceeded the threshold! Current temperature: ${item.temp}°C`,
        ]);
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeatherData();
    }, 300000); // Fetch every 5 minutes

    fetchWeatherData(); // Initial fetch
    return () => clearInterval(interval);
  }, [threshold]);

  return (
    <div className="App">
      <h1>Real-Time Weather Monitoring System</h1>
      <Config setThreshold={setThreshold} />
      <WeatherDisplay weatherData={weatherData} />
      <DailySummary dailySummary={dailySummary} />
      <Alerts alerts={alerts} />
      <Forecast cities={cities} />
    </div>
  );
};

export default App;
