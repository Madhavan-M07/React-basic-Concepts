//Event Handling (onClick , onChange , etc..)
// React Event Handlers work like HTML events but use camelcase .

import React , { useState } from "react";
const ButtonClick = () => {
    const [count , setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
           <p>Count: {count} </p>
           <button onClick={handleClick}>Increase Count </button>
        </div>
    );

};

export default ButtonClick;

//handleClick updates the state (Count)
// Clicking the button triggers re-rendering with updated count
