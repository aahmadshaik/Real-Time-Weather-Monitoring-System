# Real-Time Data Processing System for Weather Monitoring

## Project Overview

This project is a Real-Time Data Processing System designed to monitor weather conditions and provide summarized insights using rollups and aggregates. It retrieves data from the OpenWeatherMap API and presents daily weather summaries, alert thresholds, and visualizations.

## Features

- Continuous retrieval of weather data for major metros in India (Delhi, Mumbai, Chennai, Bangalore, Kolkata, Hyderabad) using the OpenWeatherMap API.
- Conversion of temperature values from Kelvin to Celsius.
- Daily weather summaries that include:
  - Average temperature
  - Maximum temperature
  - Minimum temperature
  - Dominant weather condition
- Configurable alerting thresholds for temperature and specific weather conditions.
- Visualization of daily weather summaries, historical trends, and triggered alerts.
- Bonus features:
  - Support for additional weather parameters (e.g., humidity, wind speed).
  - Retrieval of weather forecasts and summary generation based on predicted conditions.

## Project Structure

src/
├── components/
│   ├── Alerts.js           
                         # Component for displaying weather alerts based on user-defined thresholds.
│   ├── Config.js           
                         # Component for user-configurable settings, including alert thresholds.
│   ├── DailySummary.js      
                         # Component for displaying daily weather summaries and aggregates.
│   ├── Forecast.js          
                         # Component for displaying weather forecasts for upcoming days.
│   └── WeatherDisplay.js    
                         # Component for displaying current weather conditions and updates.
├── App.js                   
                         # Main application component that ties everything together.
├── index.js                
                         # Entry point of the application; renders the App component.
└── App.css                  
                         # Styles for the application, ensuring a cohesive design.




## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A valid API key from [OpenWeatherMap](https://openweathermap.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone <YOUR_REPOSITORY_URL>
   cd <YOUR_PROJECT_DIRECTORY>
Install the necessary dependencies:

bash
Copy code
npm install
Create a .env file in the root of your project:

plaintext
Copy code
REACT_APP_OPENWEATHER_API_KEY=YOUR_API_KEY
Replace YOUR_API_KEY with your actual OpenWeatherMap API key.

Important Note on API Key Security
To keep your API key secure:

Do not expose your API key in publicly accessible code repositories.

Make sure to add the .env file to your .gitignore to prevent it from being pushed to version control:

Add to .gitignore:

plaintext
Copy code
.env
Running the Application
Start the development server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the application.

Features
Real-time weather data retrieval for multiple cities in India.
Daily weather summaries, including average, maximum, and minimum temperatures.
User-configurable alert thresholds for temperature and specific weather conditions.
Visualizations for daily weather summaries and alerts.
Testing
The application includes tests for the following features:

System setup and API connection verification.
Data retrieval from the OpenWeatherMap API.
Temperature conversion from Kelvin to Celsius.
Daily weather summary calculations.
Alerting thresholds for temperature and weather conditions.
License
This project is licensed under the MIT License. See the LICENSE file for more information.










