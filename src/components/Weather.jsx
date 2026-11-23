import './Weather.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchDefaultLocation = async () => {
      const defaultLocation = 'Vilnius';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=257d40f82eff0a9ab2f7bd1d63e21454`;

      const response = await axios.get(url);

      setData(response.data);
    };

    fetchDefaultLocation();
  }, []);

  const search = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=257d40f82eff0a9ab2f7bd1d63e21454`;

    try {
      const response = await axios.get(url);
      if (response.data.cod !== 200) {
        setData({ notFound: true });
      } else {
        setData(response.data);
        setLocation('');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setData({ notFound: true });
      } else {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const getWeatherIcon = (weatherType) => {
    switch (weatherType) {
      case 'Clear':
        return <i className="bx bx-sun"></i>;
      case 'Clouds':
        return <i className="bx bx-cloud"></i>;
      case 'Rain':
      case 'Drizzle':
        return <i className="bx bx-cloud-rain-wind-alt"></i>;
      case 'Snow':
        return <i className="bxf bx-cloud-snow"></i>;
      case 'Thunderstorm':
        return <i className="bx bx-bolt"></i>;
      case 'Haze':
      case 'Mist':
        return <i className="bxf bx-cloud-fog"></i>;
      default:
        return <i className="bx bx-cloud"></i>;
    }
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
      {data.notFound ?
        <div className="not-found">Location not found! 😒</div>
      : <div className="weather-data">
          {data.weather && data.weather[0] && getWeatherIcon(data.weather[0].main)}
          <div className="weather-type">{data.weather ? data.weather[0].main : null}</div>
          <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°` : null}</div>
        </div>
      }
    </div>
  );
};

export default Weather;
