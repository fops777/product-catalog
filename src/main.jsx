import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./providers/AuthProvider.jsx";
import ProductsProvider from "./providers/Context";
import Router from "./providers/Router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProductsProvider>
      <Router />
    </ProductsProvider>
  </AuthProvider>
);
