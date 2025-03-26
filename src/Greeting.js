import React from "react";
function Greeting(props) {
  const name = "Macha";
  return( 
  <>
  <h1>Hello , {name}!</h1>
  <h2>Hello , Im {props.name}!</h2>
  </ >
);
}

export default Greeting;
