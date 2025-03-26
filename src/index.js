import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//JS ( Javascript XML ) Allows you to write
// html like syntax inside javascript which make it easier to create
// components . JSX is converted in to javascript before rendering .
// JSX Syntax: <h1>Hello, {name}!</h1> looks like HTML but is actually JSX.

// Curly Braces {}: Used to embed JavaScript expressions inside JSX.

// Component Function: Greeting() returns a JSX element.

// Exporting: The component is exported to be used in other files.

// Here Button is the Component ..Where I have resued the component twice
// Components make the UI reusable.
// They Keep Code Clean and Structured .
// You can use the same Component multiple times .

//Jsx must be wrap in to the single parent called fragment or div .
// Passing Data Between Components Using Props in React
// Props ( Short form of properties) allow you to pass data from one component (parent)
// to child component
// Props helps to pass dynamic data to child components.
// Props are read  only (Cannot be modified inside the Child Component)
// multiple 

// Hooks :

// 1. USESTATE : is a react hook that allows a function component to have
// a state (dynamic data that can change)
// In simple terms usestate stores a data that can change over time , and
// React updates the UI when it changes .
