import React, { useState } from "react";
const Counting = () => {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }
  console.log(count);
  return (
    <div>
      <p>
        Count: <span>{count}</span>
      </p>
      <button onClick={increaseCount}>increaseCount</button>
    </div>
  );
};

export default Counting;

//Usestate Counter : Uses React state
//Reactively Upates UI when setCount is called
//React automatically updates the UI when state changes.
//Triggers re-render when state updates .

//What is re-render : The component updates and executes its function again to reflect the latest 
// state or props in the UI .
// A react Component re-render when state is called .
// If parent component passes new props , the child re-renders
// If a parent component re-renders , its child components also re-render .'

// why is react logging twice on one-click :
// React intentionally renders components twice in development mode to detect potential side effect
// (like direct state mutations)
// This happens only in development mode , not in the production .
