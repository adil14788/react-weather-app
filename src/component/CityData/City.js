import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import { CityContext } from '../../App';
import './City.css';
import Pollution from '../Pollution/Pollution';

function City() {
    const cityname = useContext(CityContext);
    const [cityData, getcityData] = useState([]);
    const [response, setresponse] = useState({})
    const [country, setcountry] = useState('');
    const [w_type, setw_type] = useState('');
    const [wind, setwind] = useState('');
    const [coord, setcoord] = useState({
        latitude: 0,
        longitude: 0
    });
    useEffect(() => {
        getCity();
    }, [cityname])
    function getCity() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=3ffe10ab2bf88ca778b09fecf0134707
        `)
            .then(res => {
                console.log(res.data);
                getcityData(Object.values(res.data.main));
                setresponse(res.data);
                setcountry(res.data.sys.country)
                setw_type(res.data.weather[0].main)
                setwind(res.data.wind.speed)
                setcoord({
                    latitude: res.data.coord.lat,
                    longitude: res.data.coord.lon
                })




            })
            .catch(error => {
                console.log(error);
            })



    }

    return (
        <div className="container">
            <div className="weather-container">
                <h4>{country}</h4>
                <h1 className="city">{response.name}</h1>
                <h2 className="temprature">{Number(Math.round(cityData[0] - 273))}<span> &#8451;</span></h2>
                <h3 className="weather_type">{w_type}</h3>
            </div>
            <div className="extra-info">
                <h4 className="extra-content">Pressure<span>{cityData[4]}</span></h4>
                <h4 className="extra-content">Humidity<span>{cityData[5]}</span></h4>
                <h4 className="extra-content">Wind Speed<span>{wind} km/hr</span></h4>
            </div>
            {coord.latitude !== 0 ? <Pollution lat={coord.latitude} lon={coord.longitude} /> : null}
        </div>
    )
}

export default City
