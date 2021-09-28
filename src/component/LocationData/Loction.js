import React, { useEffect, useState } from 'react'
import Data from './Data';

function Loction() {
    const [latitude, setlatitude] = useState(0)
    const [longitude, setlongitude] = useState(0)
    const [error, setError] = useState(null)
    useEffect(() => {
        geoFindMe();
    }, [])
    const geoFindMe = () => {
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setlatitude(latitude);
            setlongitude(longitude);

        }

        function error() {
            setError('Unable to retrieve your location');
        }

        if (!navigator.geolocation) {
            // status.textContent = 'Geolocation is not supported by your browser';
        }
        else {
            //status.textContent = 'Locating…';
            navigator.geolocation.getCurrentPosition(success, error);
        }

    }

    if (error) {
        <p>{error}</p>
    }
    let Display = '';
    if (latitude !== 0 && longitude !== 0) {
        Display =
            <Data latitude={latitude} longitude={longitude} />
    }


    return (
        <div>
            {/* <button id="find-me" onClick={geoFindMe}>Show my location</button><br /> */}
            {Display}
        </div>
    )
}

export default Loction
