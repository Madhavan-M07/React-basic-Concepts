// UseEffect Hook in React : that runs a sideEffect in function components.
// It helps in : Fetching data(API Calls) , Updating the DOM , Subscribing and Unsubscribing to
// the Events .React Update the UI after Every re-render (e.g Fetching data.)
// Perform Cleanup (eg., removing event listeners .)

import React , {useState , useEffect} from "react";

const Getter = () => {

    const [count , setCount] = useState(0);

    useEffect(() => {
            console.log("Component rendered or updated! count:" , count);

    } , [count]);

    return(
        <div>

            <p>Count:{count}</p>
            <button onClick={() => setCount(count+1)}>Increase Count</button>

       </div>
    );

};

export default Getter;

//useEffect runs after Every render (because no dependency array is provided).
// console log every time count updates .
// usestae vs useEffect :
// useState -- Stores and updates state
// Runs when ? On state Change
// Can cause Re-renders : Yes
// useEffect - Runs side Effects ( Api calls , timers ,  etc ..)
// On render , state/props change , or unmount
// No(unless state updates inside)
// A hook is function that gives you access to React's internal Memory. 
// You gain access to a value and a command to modify this value. A query and a command. 
// React has no loop like a game engine, rather it's idle until state changes.