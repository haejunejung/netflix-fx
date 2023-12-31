import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

import Pages from "./Pages";
import App from "./App";

const theme = {
  logoRed: "rgb(233, 0, 22)",
  buttonGray: "rgb(255, 255, 255)",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Pages /> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
