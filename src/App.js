import React/*, {useState}*/ from 'react';
import './App.css';


export default function App() {
    return (
      <div>
        <h1>Welcome to my app!</h1>
        <MyButton />
      </div>
    );
}


function MyButton() {

    function handleClick() {
        alert('holy shit!');
    }

    return (
        <button  onClick={handleClick}>
            I don't change colors!
        </button>
    );
}
