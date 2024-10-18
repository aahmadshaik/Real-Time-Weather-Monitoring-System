import React from "react";

const DailySummary = ({ dailySummary }) => (
  <div className="daily-summary">
    <h2>Daily Weather Summary</h2>
    {dailySummary.length ? (
      dailySummary.map((summary, index) => (
        <div key={index} className="summary-card">
          <h3>{summary.date}</h3>
          <p>Average Temperature: {summary.avgTemp} °C</p>
          <p>Max Temperature: {summary.maxTemp} °C</p>
          <p>Min Temperature: {summary.minTemp} °C</p>
          <p>Dominant Condition: {summary.dominantCondition}</p>
        </div>
      ))
    ) : (
      <p>No summary data available.</p>
    )}
  </div>
);

export default DailySummary;
