import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Greeting from "./Greeting.js";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Greeting />
  </StrictMode>
);

//JS ( Javascript XML ) Allows you to write
// html like syntax inside javascript which make it easier to create
// components . JSX is converted in to javascript before rendering .
// JSX Syntax: <h1>Hello, {name}!</h1> looks like HTML but is actually JSX.

// Curly Braces {}: Used to embed JavaScript expressions inside JSX.

// Component Function: Greeting() returns a JSX element.

// Exporting: The component is exported to be used in other files.
