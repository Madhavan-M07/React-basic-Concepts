// useRef - Hook in React 
// UseRef - is a React Hook that creates a mutable reference (object) which :
// presists betweeen renders (without causing re-renders).
// can hold DOM elements or any value

// why we use useRef ?

// Accessing and manipulating DOM elements 
// Storing Previous Values without Causing Re-renders
// Handling Timers (Settimeout , setInternal) without Losing references.


// When to UseRef 
// Store a DOM reference , keep a value without re-rendering 

import React , {useRef , useState , useEffect} from "react";

const Refer = ( ) => {
    const[count , setCount] = useState(0);
    const prevcountRef = useRef(0);

    useEffect(()=>{
       prevcountRef.current = count; //stores previous count
    } , [count]);

    return(
        <div>
          <p>current count:{count}</p>
          <p>previous count: {prevcountRef.current}</p>
          <button onClick={()=> setCount(count+1)}>IncreaseCount </button>
        </div>
    );
};

export default Refer;

//useRef stores the previous count without causing re-renders .
// useState triggers a re-render , but useRef does not
// Best for Dom manipulation . usestate for UI updates & useRef for non-rendering values. 