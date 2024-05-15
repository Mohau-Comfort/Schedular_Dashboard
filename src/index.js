// Import React and ReactDOM from their respective packages
import React from "react";
import ReactDOM from "react-dom";

import './Index.css';
import Home from "./Home";
import App from "./App";

import { ContextProvider } from "./contexts/ContextProvider";

// Use ReactDOM to render your root component into the DOM
ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);
