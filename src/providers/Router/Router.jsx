import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../components/home/Home";
import ProductInfo from "../../components/product-info/ProductInfo";
import LoginPage from "../../components/authorization/login_page/Login";
import CreateUserPage from "../../components/authorization/registration_page/CreateUserPage";
import AdminPanel from "../../components/admin/adminPanel";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AdminPanel />} path="/admin" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ProductInfo />} path="/product/:id" />
        <Route element={<CreateUserPage />} path="/registration" />
        <Route element={<div>Page not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
