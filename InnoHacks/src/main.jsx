import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter.jsx";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
