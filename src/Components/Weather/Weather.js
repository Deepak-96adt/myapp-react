import React, { useEffect, useState } from 'react';

function Weather() {
    const [apiWeatherData , setApiWeatherData] = useState([]);
    useEffect(()=>{
        const fetchWeather = async()=>{
            const URL = "https://66f27d3871c84d8058757581.mockapi.io/expenses/weather";
            try{
                const jsonData = await fetch(URL);
                const weatherData = await jsonData.json();
                setApiWeatherData(weatherData);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchWeather();
    },[])
  return (
    <>
    <div className='container m-4'>
      <h1 className='text-primary'>Current Weather list</h1>
      <br/>
      <div className="row">
      {apiWeatherData.map((row) => (
        <div key={row.city} className="col-sm-4 m-2">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title text-primary">{row.city}</h5>
                <hr/>
                <p className='card-text'><strong>Temperature: </strong> {row.temperature}°C</p>
                <p className='card-text'><strong>Description: </strong> {row.description}</p>
                <p className='card-text'><strong>Humidity: </strong> {row.humidity}%</p>
                <p className='card-text'><strong>Wind Speed: </strong>{row.wind_speed} km/h</p>
            </div>
            </div>
        </div>
      ))}
      </div>
    </div>
    
  
    </>
  )
}

export default Weather