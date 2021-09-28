import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Data.css'
import Pollution from '../Pollution/Pollution'

function Data({ latitude, longitude, getTemp }) {
    const [weather, setweather] = useState([])
    const [response, setresponse] = useState({})
    const [country, setcountry] = useState('');
    const [w_type, setw_type] = useState('');
    const [wind, setwind] = useState('');
    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3ffe10ab2bf88ca778b09fecf0134707`)
            .then(res => {
                console.log(res.data);
                setweather(Object.values(res.data.main));
                setresponse(res.data);
                setcountry(res.data.sys.country)
                setw_type(res.data.weather[0].main)
                setwind(res.data.wind.speed)
            })
            .catch(error => {
                console.log(error);
            })

    }, [latitude, longitude])
    return (
        <div className="container">
            <div className="weather-container">
                <h4>{country}</h4>
                <h1 className="city">{response.name}   </h1>
                <h2 className="temprature">{Number(Math.round(weather[0] - 273.00))}<span> &#8451;</span></h2>
                <h3 className="weather_type">{w_type}</h3>
            </div>
            <div className="extra-info">
                <h4 className="extra-content">Pressure<span>{weather[4]}hPa</span></h4>
                <h4 className="extra-content">Humidity<span>{weather[5]}%</span></h4>
                <h4 className="extra-content">Wind Speed<span>{wind} km/hr</span></h4>
            </div>
            {/* {weather.map((items, index) => {
                return (
                    <h1 key={index.toString()} id={'a' + index.toString()}>
                        {items}
                    </h1>
                );
            })} */}
            {latitude && <Pollution lat={latitude} lon={longitude} />}
        </div>
    )
}

export default Data
