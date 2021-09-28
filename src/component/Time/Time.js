import React, { useState } from 'react'

function Time() {
    let time = new Date().toLocaleTimeString();
    const [update, setupdate] = useState(time);
    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        setupdate(time);
    }
    setInterval(UpdateTime, 1000)
    return (
        <div className="clock">
            <h1>{update}</h1>


        </div>
    )
}

export default Time
