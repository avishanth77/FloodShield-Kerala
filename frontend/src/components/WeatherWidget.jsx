import "../style/WeatherWidget.css";

function WeatherWidget() {
  return (
    <div className="weather-widget">
      <h3>🌧 Current Weather</h3>

      <div className="weather-temp">
        26°C
      </div>

      <p>Thiruvananthapuram</p>

      <div className="weather-info">
        <p>Humidity: 88%</p>
        <p>Wind: 15 km/h</p>
      </div>
    </div>
  );
}

export default WeatherWidget;