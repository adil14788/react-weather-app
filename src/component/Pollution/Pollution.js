import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Pollution.css'
import AQI from './AQI';


function Pollution({ lat, lon }) {
    const [aqi, setaqi] = useState(0);
    const [components, setcomponents] = useState([]);
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=3ffe10ab2bf88ca778b09fecf0134707
        `)
            .then((res) => {
                console.log(res.data)
                setaqi(res.data.list[0].main.aqi);
                setcomponents(Object.values(res.data.list[0].components))
            })
            .catch((err) => {
                console.log(err);
            })

    }, [lat, lon])

    return (
        <div className="pol-container">
            <div className="air-index">
                <h1>AIR QUALITY INDEX</h1>
                <AQI aqi={aqi} />
            </div>
            <h2 id='heading'>GASES CONCENTRATION</h2>
            <div className="gases">
                <h4 className="gas-container">CO<span>{components[0]}</span></h4>
                <h4 className="gas-container">  NO<span>{components[1]}</span></h4>
                <h4 className="gas-container"> NO<sub>2</sub> <span>  {components[2]} </span></h4>
                <h4 className="gas-container"> O<sub>3</sub> <span>  {components[3]}</span></h4>
                <h4 className="gas-container"> SO<sub>2</sub> <span> {components[4]}</span></h4>
                {/* <h4> pm2_5:{components[5]}</h4>
                <h4> pm10:{components[6]}</h4> */}
                <h4 className="gas-container"> NH<sub>3</sub><span>{components[7]}</span></h4>
            </div>

        </div>
    )
}

export default Pollution
