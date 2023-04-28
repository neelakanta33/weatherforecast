import { useRef } from "react";
import "../components/weather.css";

const Weather = () => {
  //!targeted the tags to change the value  
  let city = document.getElementById("city");
  let country = document.getElementById("country");
  let humidity = document.getElementById("humidity");
  let temperature = document.getElementById("temp");

  //!to fetch city name from input tag
  let user_input1 = useRef();

  //!checktemp method to dispatch the details
  let checkTemp = async () => {
    let cityvalue = user_input1.current.value;
    if (cityvalue == null) {
      alert("Please enter city name before search");
    } else {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
      );
      console.log(response);
      let data = await response.json();
      city.textContent = data.name;
      country.textContent = data.sys.country;
      temperature.textContent = data.main.temp;
      humidity.textContent = data.main.humidity;
    }
  };

  return (
    <section className="weatherApp container">
      <div className="block">
        <div classNameName="location">
          <div className="city">
            <h1 id="city" style={{ fontSize: "60px" }}>
              {" "}
              City Name
            </h1>
          </div>

          <h2 id="country" style={{ fontSize: "40px" }}>
            Country Name{" "}
          </h2>
        </div>
        <div className="information">
          <div className="temp_information">
            <h3>
              Temperature:
              <span id="temp">
                _0<sup>o</sup>
              </span>
              C
            </h3>
            <h3>
              Humidity:<span id="humidity">_</span>
            </h3>
          </div>
        </div>

        <div className="search">
          <input
            ref={user_input1}
            type="text"
            placeholder="enter the city name"
          />
          <button onClick={checkTemp}>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Weather;
