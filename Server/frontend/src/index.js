// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Import the App component from App.js

// Get the root container element from the DOM
const container = document.getElementById("app");

// Create a root for the React app
const root = createRoot(container);

// Render the App component inside the container
root.render(<App />);
