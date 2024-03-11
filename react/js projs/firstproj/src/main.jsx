import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // app in dev mode
  <React.StrictMode>
    <App />
  </React.StrictMode> 

  // <App /> // app in prod mode
);
