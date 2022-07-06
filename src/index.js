import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";
import Description from "./components/description";
import Clutch from "./components/clutch";
import Quote from "./components/quote";
import Stats from "./components/stats";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Description />
    <Clutch />
    <Quote />
    <Stats />
    <footer>&copy; 2022 Jason Tang</footer>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
