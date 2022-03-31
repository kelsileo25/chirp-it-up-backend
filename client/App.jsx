import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import ChirpCard from './components/ChirpCard.jsx';

const App = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [chirps, setChirps] = useState([
        {
            id: uuidv4(),
            username: "Josh",
            message: "This is the chirp body!",
            created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        },
        {
            id: uuidv4(),
            username: "Haylee",
            message: "Hello!",
            created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        },
        {
            id: uuidv4(),
            username: "Garrett",
            message: "I'm not mad!",
            created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        }
    ]);

    const handleUsernameChange = e => setUsername(e.target.value);
    const handleMessageChange = e => setMessage(e.target.value);
    const handleChirpSubmit = e => {
        e.preventDefault();

        const newChirp = {
            id: uuidv4(),
            username: username,
            message: message,
            created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        };

        setChirps([...chirps, newChirp]);
    }

    return (
        <>
            <nav>
                <img id="header-logo" src="./assets/Studio_Ghibli_logo.png" alt="logo for awesome site yay" />
                <h1>Chirpr</h1>
            </nav>

            <form action="">
                <input type="text" value={username} onChange={handleUsernameChange} />
                <textarea value={message} onChange={handleMessageChange} cols="30" rows="10"></textarea>
                <button onClick={handleChirpSubmit}>Chirp It!</button>
            </form>

            {chirps.map(chirp => <ChirpCard
                key={chirp.id}
                username={chirp.username}
                message={chirp.message}
                created={chirp.created}
            />)}
        </>
    );
};

export default App;