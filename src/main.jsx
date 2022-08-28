import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./styles/global.css";
import { AuthProvider } from "./Providers/auth";

//importando componentes de BrowserRouter e ContextApi (AuthProvider) para toda a aplicação

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
