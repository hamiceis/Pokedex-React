import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./styles/global.css";
import { AuthProvider } from "./Providers/auth";

//AuthProvider é o contextAPI que envolve toda aplicação para poder passar props entre os componentes
//BrowserRouter também está englobando a aplicação, para poder usar as rotas que criamos

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
