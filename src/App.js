import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <div className="search-bar">
            <form id="search-form" className="mt-5">
              <div className="row gx-0">
                <div className="col">
                  <input
                    type="search"
                    id="city-search"
                    autoComplete="off"
                    placeholder="Enter city name"
                    className="form-control border-0"
                  />
                </div>
                <div className="col-auto px-2">
                  <button type="submit" id="search-button" aria-label="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <button id="current-position" aria-label="current">
                    <i className="fa-solid fa-location-dot"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="city-overview">
            <div className="row">
              <div className="col-6 city-name" id="displayed-city">
                London
              </div>
              <div className="col-6 day">
                <div id="currentDate">Thursday March 16th</div>
                <div className="col time" id="currentTime">
                  22:22
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-left align-items-center">
              <span className="current-temp">
                <span id="currentTemp">0</span>
                <span id="units">
                  <a href="#" id="celsius-link" className="activeunit">
                    {" "}
                    °C
                  </a>
                  |
                  <a href="#" id="fahrenheit-link" className="unit">
                    {" "}
                    °F
                  </a>
                </span>
              </span>

              <img src="" alt="" id="current-icon" />

              <ul className="current-characteristics">
                <li id="current-description">Cloudy</li>
                <li>
                  Humidity: <span id="current-humidity">20</span>%
                </li>
                <li>
                  Wind: <span id="current-wind">3</span> m/s
                </li>
              </ul>
            </div>
          </div>
          <div className="forecast-days" id="forecast"></div>
        </div>
      </div>
      <div className="author">
        <em>
          Coded by Pauline Jung and
          <a
            href="https://github.com/jungpauline/weather_react"
            target="_blank"
            rel="noreferrer">
            open-source on GitHub
          </a>
        </em>
      </div>
    </div>
  );
}
