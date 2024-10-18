import React from "react";

const Alerts = ({ alerts }) => (
  <div className="alerts">
    <h2>Alerts</h2>
    {alerts.length ? (
      alerts.map((alert, index) => (
        <div key={index} className="alert-card">
          <p>{alert}</p>
        </div>
      ))
    ) : (
      <p>No alerts available.</p>
    )}
  </div>
);

export default Alerts;
