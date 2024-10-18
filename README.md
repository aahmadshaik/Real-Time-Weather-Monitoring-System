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

src/ ├── components/ │ ├── Alerts.js # Component for displaying weather alerts based on user-defined thresholds. │ ├── Config.js # Component for user-configurable settings, including alert thresholds. │ ├── DailySummary.js # Component for displaying daily weather summaries and aggregates. │ ├── Forecast.js # Component for displaying weather forecasts for upcoming days. │ └── WeatherDisplay.js # Component for displaying current weather conditions and updates. ├── App.js # Main application component that ties everything together. ├── index.js # Entry point of the application; renders the App component. └── App.css # Styles for the application, ensuring a cohesive design.



## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
Install dependencies:

Make sure you have Node.js installed, then run:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add your OpenWeatherMap API key:

makefile
Copy code
REACT_APP_API_KEY=your_api_key_here
Run the application:

Start the development server:

bash
Copy code
npm start
Usage
The application will automatically fetch weather data at configurable intervals (e.g., every 5 minutes).
You can adjust alert thresholds through the Config component.
View real-time weather updates, daily summaries, and alerts in the respective components.
Testing
To run tests, use the following command:

bash
Copy code
npm test
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
OpenWeatherMap API for providing the weather data.
React for building the user interface.
Contact
For any inquiries or feedback, please reach out to [shaikahmadaslam@gmail.com].
