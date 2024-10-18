

# Real-Time Weather Monitoring System

## Deployment Link

You can view the deployed project here: [Real-Time Weather Monitoring System](https://your-weather-monitoring-app.vercel.app)

## GitHub Repository

The source code for this project is available on GitHub: [GitHub Repository](https://github.com/aahmadshaik/real-time-weather-monitoring-system)

---

## Overview

The **Real-Time Weather Monitoring System** is a web application that allows users to monitor current weather conditions, view forecasts, and receive weather alerts. This project integrates with an external weather API to fetch real-time weather data, processes it to display daily summaries, and alerts the user based on specific conditions.

## Features

- **Current Weather Display**: Shows current temperature, humidity, wind speed, and weather conditions for the selected location.
- **Forecast**: Displays weather forecasts for the upcoming days.
- **Daily Summary**: Aggregates and summarizes weather data for easier interpretation.
- **Alerts**: Configurable weather alerts that notify the user when certain thresholds are crossed (e.g., high temperatures, rain).
  
## Project Structure

```
src/
├── components/
│   ├── Alerts.js               # Displays weather alerts based on user-defined thresholds.
│   ├── Config.js               # Handles user configuration settings like alert thresholds.
│   ├── DailySummary.js         # Displays daily weather summaries and aggregates.
│   ├── Forecast.js             # Shows upcoming weather forecasts.
│   └── WeatherDisplay.js       # Shows the current weather conditions.
├── App.js                      # Main application component that ties everything together.
├── index.js                    # Entry point for rendering the App component.
└── App.css                     # Styles for the application.
```

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS (App.css)
- **API**: OpenWeather API
- **Deployment**: Vercel

## Prerequisites

- Node.js (v18 or later)
- npm (v7 or later)

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aahmadshaik/real-time-weather-monitoring-system.git
   cd real-time-weather-monitoring-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **API Key Configuration**:
   - Create a `.env` file in the root directory and add your OpenWeather API key:
     ```
     REACT_APP_API_KEY=your_openweather_api_key
     ```

4. **Run the application**:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## How to Use

- **Select a Location**: Input the city name or use geolocation to get the current weather for your location.
- **Weather Alerts**: Configure custom thresholds (e.g., temperatures above 35°C) to receive alerts.
- **View Forecasts**: Check weather predictions for the next few days.

## API Integration

The application fetches weather data from the OpenWeather API using the provided API key. Make sure to replace `your_openweather_api_key` with your actual API key from OpenWeather.

```js
const API_KEY = "869509f5bf7ea77478fce654614cab31";
```

## Future Enhancements

- **Hourly Forecasts**: Extend the application to display hourly weather predictions.
- **Custom Alerts**: Allow users to create more complex alert conditions (e.g., wind speed, UV index).
- **Advanced Visualization**: Integrate graphs to visualize temperature trends and other data points.

## Contributing

Contributions are welcome! Feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Troubleshooting

If you encounter any issues during setup or usage:

1. Ensure your OpenWeather API key is correct.
2. Check the browser console for any error messages.
3. Make sure that no other services are running on port `3000`.

