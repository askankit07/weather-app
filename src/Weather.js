
import React from 'react'
import moment from 'moment';

function Weather(props) {
    const data=props.weatherData
    return (
        <>
            <header className='header'>
                <section className='left'>
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg> {data.name}</p>
                </section>
            </header>

            <div className='T-H'>
                <p>Temprature <br /><span className='text'>{(data.main.temp>60)?(data.main.temp- 273.15).toFixed(1):data.main.temp} &deg;C</span> </p>
                <p>Humidity  <br /><span className='text'>{data.main.humidity} %</span></p>
            </div>

            <div className='T-H'>
                <p>Sunrise <br /><span className='text'>{new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN',{ hour: "2-digit", minute: "2-digit" })}</span> </p>
                <p>Visibility  <br /><span className='text'>{(data.visibility/1000).toFixed(1)}Km</span></p>
            </div>

            <div className='T-H'>
                <p>Sunset <br /><span className='text'>{new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN',{ hour: "2-digit", minute: "2-digit" })}</span> </p>
                <p>Description  <br /><span className='text'>{data.weather[0].main}</span></p>
            </div>

            <div className='T-H'>
                <p>Day <br /><span className='text'>{moment().format('dddd')}</span> </p>
                <p>Wind Speed <br /><span className='text'>{(data.wind.speed).toFixed(1)} Km/H</span></p>
            </div>

            <div className='T-H'>
                <p>Date <br /><span className='text'>{moment().format('LL')}</span> </p>
                <p>Pressure <br /><span className='text'>{data.main.pressure} hPa</span></p>
            </div>

        </>
    )
}

export default Weather

