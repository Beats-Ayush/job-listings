import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import configureJobsStore from "./store/jobs-store";

configureJobsStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
