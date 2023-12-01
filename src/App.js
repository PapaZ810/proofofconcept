import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {
    const [isBackgroundMint, setBackground] = useState(true);

    return (
      <div className={isBackgroundMint ? 'background-mint' : 'background-gray'}>
        <h1>Welcome to my app!</h1>
        <MyButton setBackground={setBackground} isBackgroundMint={isBackgroundMint} />
      </div>
    );
}


function MyButton({setBackground, isBackgroundMint}) {

    function handleClick() {
        setBackground(!isBackgroundMint);
    }

    return (
        <button  onClick={handleClick}>
            I change colors!
        </button>
    );
}