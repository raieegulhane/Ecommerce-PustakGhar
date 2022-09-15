import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider, ProductProvider, FilterProvider, CartProvider, UserDetailsProvider } from "./contexts";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <FilterProvider>
            <CartProvider>
              <UserDetailsProvider>
                <App />
              </UserDetailsProvider>
            </CartProvider>
          </FilterProvider>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  
  document.getElementById("root")
);
