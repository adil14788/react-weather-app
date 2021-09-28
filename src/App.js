import React, { useState } from 'react'
import './App.css'
import City from './component/CityData/City';
import Header from './component/Header/Header'
import Loction from './component/LocationData/Loction'
import Time from './component/Time/Time';

export const CityContext = React.createContext('');
function App() {
  const [c_name, setc_name] = useState('');
  // const [temprature, settemprature] = useState('');

  function CityName(parameter) {
    setc_name(parameter);
  }
  return (
    <div className="App">
      <CityContext.Provider value={c_name}>
        <Header getcity={CityName} />
        <div className="app-body">
          <Time />
          {c_name ? <City cityname={c_name} /> : <Loction />}
        </div>
      </CityContext.Provider>

    </div>
  )
}

export default App
