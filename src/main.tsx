import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GuitarBodyProvider from "./context/provider/GuitarBodyProvider.tsx";
import GuitarNeckProvider from "./context/provider/GuitarNeckProvider.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GuitarBodyProvider>
      <GuitarNeckProvider>
        <App />
      </GuitarNeckProvider>
    </GuitarBodyProvider>
  </React.StrictMode>
);
