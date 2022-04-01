// Current component (client)

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Current = (props) => {
    let chirpDisplay = [];
    (props.chirps).forEach(item => {
        chirpDisplay.push(
        <div className='chirps' key={item.id}>
        <p>{item.name}: {item.text}</p>
        <Fragment >
            <Link to={`/${item.id}`}>
            <button className="details">Details</button>
            </Link>
        </Fragment>
        </div>
        )
    })

    return (
        <div className="current">
            <div className="flex-column">
                <h2>Current Chirps</h2>
                <div>{chirpDisplay}</div>
            </div>
        </div>
    )
}

export default Current;