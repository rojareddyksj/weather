import "./Weather.css";

const WeatherDashboard = ({ weatherData, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!weatherData) return <p>Please enter a city to see the weather.</p>;

  return (
    <div className="weather-dashboard">
      <h2>Weather in {weatherData.city}</h2>
      <p>
        <strong>Temperature:</strong> {weatherData.temperature}°C
      </p>
      <p>
        <strong>Condition:</strong> {weatherData.condition}
      </p>
      <p>
        <strong>Humidity:</strong> {weatherData.humidity}%
      </p>
      <p>
        <strong>Wind Speed:</strong> {weatherData.wind} km/h
      </p>
    </div>
  );
};

export default WeatherDashboard;
