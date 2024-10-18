import React, { useState } from "react";

const Config = ({ setThreshold }) => {
  const [tempThreshold, setTempThreshold] = useState(35);

  const handleChange = (e) => {
    setTempThreshold(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setThreshold(tempThreshold);
  };

  return (
    <form onSubmit={handleSubmit} className="config-form">
      <h2>Configure Alerts</h2>
      <label>
        Temperature Threshold (°C):
        <input
          type="number"
          value={tempThreshold}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Set Threshold</button>
    </form>
  );
};

export default Config;
