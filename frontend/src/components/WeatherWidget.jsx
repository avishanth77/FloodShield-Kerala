import { useState, useEffect } from "react";
import axios from "axios";
import "../style/WeatherWidget.css";
import {
  FaCloudSun,
  FaSearch,
  FaMapMarkerAlt,
  FaTint,
  FaWind,
} from "react-icons/fa";

function WeatherWidget() {
  const [city, setCity] = useState("Thrissur");
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      // Get city coordinates
      const geoRes = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );

      if (!geoRes.data.results) {
        alert("City not found");
        return;
      }

      const { latitude, longitude, name } = geoRes.data.results[0];

      // Get weather
      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
      );

      setWeather({
        city: name,
        ...weatherRes.data.current,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = () => {
    if (!search.trim()) return;

    setCity(search);
    fetchWeather(search);
    setSearch("");
  };

  return (
   <div className="weather-widget">
  <h3>
    <FaCloudSun className="weather-icon" />
    Current Weather
  </h3>

  <div className="search-box">
    <input
      type="text"
      placeholder="Search city..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    />

    <button onClick={handleSearch}>
      <FaSearch />
    </button>
  </div>

  {weather ? (
    <>
      <div className="weather-temp">
        {weather.temperature_2m}°C
      </div>

      <p className="weather-location">
        <FaMapMarkerAlt />
        {weather.city}
      </p>

      <div className="weather-info">
        <p>
          <FaTint />
          Humidity: {weather.relative_humidity_2m}%
        </p>

        <p>
          <FaWind />
          Wind: {weather.wind_speed_10m} km/h
        </p>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  )}
</div>
  );
}

export default WeatherWidget;