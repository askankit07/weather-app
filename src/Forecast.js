import React, { useEffect, useState } from 'react'

function Forecast(props) {
  const [forecastData, setForeCastData] = useState([])

  const data = props.coord

  const API_URL = "https://api.openweathermap.org/data/2.5";
  const API_KEY = "7ffd0ae51541e5d5b0da9023b73acb1f";

  const data2 = forecastData && forecastData.list ? forecastData.list : [];

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `${API_URL}/forecast?lat=${data.lat}&lon=${data.lon}&cnt=8&appid=${API_KEY}`
      );
      const Data = await res.json()
      setForeCastData(Data)
    }
    getData()
  }, [data]);
  return (
    <footer className='footer'>
      {
        data2.map((user) => (
          <>
            <p key={user.dt}> {new Date(user.dt * 1000).toLocaleTimeString('en-IN', { hour: "2-digit" })} <br /> <span className='foreTemp'>{(user.main.temp - 273.15).toFixed(1)}&deg;C</span></p>
          </>
        ))
      }
    </footer>
  )
}

export default Forecast