import React from 'react';
import { ReactDOM } from 'react';
import "../css/web.css";
import image from "../Image/image.png"

export default function Head(){
  return(
    <div className="container-fluid">
        <div className="row">
        <div className="col-sm-8">
      <div className="row">
    <div className="col-sm-4">
    <img className="logo" src={image} alt="logo" />
    </div>
    <div className="col-sm-8" id='title'>
      <h3> TRUNG TÂM BÁN ĐIỆN THOẠI CAO CẤP LUXURY</h3>
      <h4 className="dana">WELCOME TO MY SHOP</h4>
      <div className='address'>
        <p><i class="fa-solid fa-location-dot"></i> 99 Tô Hiến Thành, Sơn Trà, Đà Nẵng </p>
        <p> <i class="fa-solid fa-envelope"></i> luxuryshop888@gmail.com</p>
        <p><i class="fa-solid fa-phone"></i> 0912.888.345 – 0912.444.555</p>
      </div>
    </div>
  </div>
  </div>
<div className="col-sm-4 search" id='search'>
  <input type="text" placeholder="Search.." name="search" />
  <button type="submit"><i className="fa fa-search"></i></button>
</div>
      </div>
      <Menu/>
</div>

  )
}

function Menu() {
    return (
      <div className="navbar">
        <a href="#home">Trang chủ</a>
        <a href="#home">shoping card</a>
        <a href="#news">Giới thiệu</a>
      </div>
    );
  }

function Background_img() {
  return (
    <div className='bgr'>
    </div>
  )
}
