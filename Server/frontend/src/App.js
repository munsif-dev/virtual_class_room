import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <p>Hello, World!</p>;
};

const container = document.getElementById("app");
const root = createRoot(container); // Use createRoot instead of ReactDOM.render
root.render(<App />);

// Export the App component as default
export default App; // <-- This is necessary
