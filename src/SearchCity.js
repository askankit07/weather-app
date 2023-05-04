
import React, { useState } from 'react'
import Weather from './Weather'
import Forecast from './Forecast'

function SearchCity(props) {
  const [data, setData] = useState(props.weatherData)
  const [city, setCity] = useState()
  const [errorMsg, setErrorMsg] = useState()

  const City_API_URL = 'https://api.openweathermap.org/data/2.5/'
  const API_KEY = '7ffd0ae51541e5d5b0da9023b73acb1f'

  function handleCity(e) {
    setCity(e.target.value)
  }

  async function getData() {
    const res = await fetch(`${City_API_URL}weather?q=${city}&appid=${API_KEY}`)
    const data = await res.json()
    if (data.cod === 200) {
      setData(data)
      setErrorMsg()
    }
    else {
      setErrorMsg(data.message)
    }
  }

  const refresh = () => {
    window.location.reload()
  }
  return (
    <>
      <section className='searchSection'>
        <input type="search" name='cityName' onChange={handleCity} placeholder='Search city' className='searchBar' />

        <button className='mybtn' onClick={getData}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg></button>

        <button className='mybtn' onClick={refresh} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg></button>
      </section>
        <p className='errorMsg'>{errorMsg}</p>

      <Weather weatherData={data} />

      <Forecast coord={data.coord} />
    </>
  )
}

export default SearchCity

