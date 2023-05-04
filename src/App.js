
// import './App.css';
// import React from 'react';
// import { useState, useEffect } from 'react';
// import Weather from './Weather';
// import Forecast from './Forecast';
// import SearchCity from './SearchCity';

// function App() {
//   const [data, setData] = useState([]);
//   const [forecast, setForecast] = useState([])

//   const API_URL = "https://api.openweathermap.org/data/2.5";
//   const API_KEY = "7ffd0ae51541e5d5b0da9023b73acb1f";

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(async function (position) {
//       const lat = position.coords.latitude;
//       const long = position.coords.longitude;
//       const res = await fetch(
//         `${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`
//       );
//       const newres = await res.json();
//       setData(newres);

//       const res2 = await fetch(
//         `${API_URL}/forecast?lat=${lat}&lon=${long}&cnt=8&appid=${API_KEY}`
//       );
//       const foreData = await res2.json()
//       setForecast(foreData)

//     });
//   }, []);

//   return <>
//     {(typeof data.main != 'undefined') ? (
//       <>
//         <SearchCity cityName={data.name}/>
//         <Weather weatherData={data} />
//       </>
//     ) : (
//       <div className='locationMsg'>

//         <img src={require('./img/WeatherIcons.gif')} alt="loading" />

import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import SearchCity from './SearchCity';

function App() {
  const [data, setData] = useState([]);

  const API_URL = "https://api.openweathermap.org/data/2.5";
  const API_KEY = "7ffd0ae51541e5d5b0da9023b73acb1f";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      const res = await fetch(
        `${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`
      );
      const newres = await res.json();
      setData(newres);

    });
  }, []);

  return <>
    {(typeof data.main != 'undefined') ? (
      <>
        <SearchCity weatherData={data}/>
      </>
    ) : (
      <div className='locationMsg'>

        <img src={require('./img/WeatherIcons.gif')} alt="loading" />

        <h3>Detecting your loaction</h3>
        <p>Your current location will be displayed on the App</p>
        <p>& used for calculating Real time weather</p>

      </div>
    )}

  </>;
}

export default App;

