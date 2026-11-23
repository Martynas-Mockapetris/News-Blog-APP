import './Weather.css';
import { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=257d40f82eff0a9ab2f7bd1d63e21454`;

    const response = await axios.get(url);
    // console.log(response.data);

    setData(response.data);
    // console.log(data);

    setLocation('');
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">{data.name}</div>
        </div>
        <div className="search-location">
          <input type="text" placeholder="Enter location" value={location} onChange={handleInputChange} />
          <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
        </div>
      </div>
      <div className="weather-data">
        <i className="bx bx-cloud-rain-wind-alt" />
        <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
        <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°` : null}</div>
      </div>
    </div>
  );
};

export default Weather;
