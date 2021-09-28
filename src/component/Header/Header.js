import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
function Header({ getcity }) {
    const [city, setcity] = useState('');
    const EventHandler = (e) => {
        setcity(e.target.value)
    }

    const handlekeyPress = (e) => {
        if (e.key === 'Enter') {
            getcity(city);
            setcity('');
        }

    }


    return (
        <div className='header'>
            <div className='logo'>
                <h1>Weather App</h1>
            </div>

            <div className="input-box">
                <SearchIcon />
                <input type="text" value={city} onChange={EventHandler} placeholder='Enter City or Country Name' onKeyPress={handlekeyPress} />
            </div>
            <div className="right">
                <button onClick={() => {
                    getcity(city);
                    setcity('');

                }}>ENTER</button>
            </div>

        </div>
    )
}
export default Header;