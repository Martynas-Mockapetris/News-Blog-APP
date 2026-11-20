import './Weather.css';

const Weather = () => {
  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">Vilnius</div>
        </div>
        <div className="search-location">
          <input type="text" placeholder="Enter location" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="weather-data">
        <i className="bx bx-cloud-rain-wind-alt" />
        <div className="weather-type">Rainy</div>
        <div className="temp">7°C</div>
      </div>
    </div>
  );
};

export default Weather;
