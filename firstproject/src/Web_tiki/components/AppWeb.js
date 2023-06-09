import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Showproduct from "./Showproduct";
import Admin from "./Admin";
import Addproduct from "./Addproduct";
import Edit from "./Edit";
import Header from "./Header";
function AppwebTiki() {
  return (
    <>
      <Header />
      <nav className="my-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className='nav-link' to="/admin">Admin</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to="/product">product</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/product" element={<Showproduct />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </>
  );
}
export default AppwebTiki;