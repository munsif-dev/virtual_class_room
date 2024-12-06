import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <h1>Testing the React Code</h1>;
};

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);

export default App;
