import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CountProvider from "./Store/Store.jsx";

createRoot(document.getElementById("root")).render(
  <CountProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CountProvider>
);
