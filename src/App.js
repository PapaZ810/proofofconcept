import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './page.css';

export default function App() {
    return (
        <div className="App">
            <div>
                <h1>Proof Of Concept</h1>
                <MyButton/>
            </div>
            <br/>
            <a href={"http://localhost:5000/api/upload"}>Click here to upload images</a>
        </div>
    );
}


function MyButton() {
    useEffect( () => {
        axios.get("/api/garbage").then((response) => {
            console.log(response.data);
        });
    }, []);

    function handleClick() {
        axios.post("/api/send", {
            message: "Hello Server!",
        }).then((response) => {}).catch((error) => {
            console.log(error);
        });
    }

    return (
        <button style={{ backgroundColor: 'black', color: '#69cf97', fontFamily: 'Arial' }} onClick={handleClick}>
            I send data to the server
        </button>
    );
}