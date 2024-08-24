import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <br />
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/basket">Basket</Link>
      </header>
      <main><Outlet/></main>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
