import { useState } from "react";
import WeatherForm from "./components/WeatherForm";
import WeatherDashboard from "./components/WeatherDashboard";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    const API_KEY = `d223d67b2cc35d0f4211e5c8e46ac9ca

`;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    setLoading(true);
    setError(null);
    setWeatherData(null);
    console.log("API", API_KEY);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("City not found or API error.");
      }
      const data = await response.json();
      setWeatherData({
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <WeatherForm onCitySelect={fetchWeather} />
      <WeatherDashboard
        weatherData={weatherData}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default App;
