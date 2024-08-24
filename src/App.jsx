import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import ProductList from "./Pages/ProductList/ProductList";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Basket from "./Pages/Basket/Basket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
