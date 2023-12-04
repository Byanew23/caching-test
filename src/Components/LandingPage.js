import logo from '../logo.svg'
import React, { useState, useEffect } from 'react'

export const LandingPage = () => {
    let [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        const fetchData = async (method, body, user) => {
            try {

                const response = await fetch('http://localhost:8080', { method, body, user });
                const data = await response.json();
                // Process the data as needed
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call fetchData initially
        fetchData("GET", '<div>hi</div>', 'Danny');

        // Set up an interval to call fetchData every second
        const intervalId = setInterval(fetchData, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once on mount



    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {counter}
                </p>
                <h1>Dannys project</h1>

                <p onClick={() => handleClick()}>React is gengsta</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}
