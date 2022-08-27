import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider, FilterProvider, CartProvider } from "./contexts";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  
  document.getElementById("root")
);
