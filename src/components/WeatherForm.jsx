import { useState } from "react";

const WeatherForm = ({ onCitySelect }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onCitySelect(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="weather-form">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
