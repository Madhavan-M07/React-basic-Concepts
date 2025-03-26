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
