import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function App() {
  const [search, setSearch] = useState("chennai");
  const [city, setCity] = useState(null);

  const getWeatherData = async () => {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8f5fc8ee5c784197c3622dce8fa1eec4&units=metric`);
    let result = await response.json();
    setCity(result);
  }

  useEffect(() => {
    getWeatherData();
  }, [search]);

  return (
    <div className="App">
      <div className="weather-card">
        <h2>Weather App</h2>
        <div className="search">
          <input type="search" placeholder="Enter City Name" onChange={(e) => setSearch(e.target.value)} />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="weather">
          <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="..." />
          <h1 className="temp">{city?.main?.temp}°C</h1>
          <h2 className="city" >{city?.name}</h2>
          <div className="details">
            <div  className="col">
              <img className="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" />
              <div className="info">
                <p className="humidity">{city?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>

            <div className="col">
              <img className="humi1" src="https://cdn-icons-png.flaticon.com/512/136/136712.png" />
              <div className="info">
                <p className="wind">{city?.wind?.speed} km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
