import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.createElement("div");
rootElement.id = "react-chrome-app";
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
