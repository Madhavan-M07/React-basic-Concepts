import React from "react";
const Counter = () => {
  let count = 0;
  function increaseCount() {
    count++;
    document.getElementById("count").textContent = count;
  }
  console.log(count);
  return (
    <div>
      <p>
        Count:<span id="count">{count}</span>
      </p>
      <button onClick={increaseCount}>Increase Count </button>
    </div>
  );
};
export default Counter;

//Normal Javascript Counter :Uses regular variable ( let Count = 0 )
//Not reactive (UI doesn't update automatically)
//Uses DOM to manually update the UI
//UI Wont be re-render when count changes.
