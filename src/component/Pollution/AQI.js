import React from 'react'
import './AQI.css'

function AQI({ aqi }) {
    switch (aqi) {
        case 1: {
            return (
                <>
                    <p className='meter'>
                        <h4 className='meter-child1'> {aqi} </h4>
                    </p>
                    <h3>GOOD</h3>
                </>
            )
        }
        case 2: {
            return (
                <>
                    <p className='meter'>
                        <h4 className='meter-child2'> {aqi} </h4>
                    </p>
                    <h3>FAIR </h3>

                </>
            )
        }
        case 3: {
            return (
                <>
                    <p className='meter'>
                        <h4 className='meter-child3'> {aqi} </h4>
                    </p>
                    <h3>MODERATE</h3>

                </>
            )
        }
        case 4: {
            return (
                <>
                    <p className='meter'>
                        <h4 className='meter-child4'> {aqi} </h4>
                    </p>
                    <h3>POOR </h3>

                </>
            )
        }
        case 5: {
            return (
                <>
                    <p className='meter'>
                        <h4 className='meter-child5'> {aqi} </h4>
                    </p>
                    <h4>VERY POOR </h4>

                </>
            )
        }
        default: {
            return (
                <>

                </>
            )
        }
    }

}

export default AQI
