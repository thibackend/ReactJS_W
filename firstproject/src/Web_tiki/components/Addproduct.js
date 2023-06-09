import React, { useState } from "react";
import axios from "axios";

const Addproduct = () => {
  const [name, setname] = useState();
  const [img, setimg] = useState();
  const [star, setstar] = useState();
  const [price, setprice] = useState();
  const [sale_number, setsale_numer] = useState();
  const [promote, setpromote] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/products', {
      name,
      img,
      star,
      price,
      sale_number,
      promote
    })
      .then(res => {console.log(alert(res.data.message));})
      .catch(err => { console.log(err); })
  }

  return (
    <form className="form-group my-5 mx-5">
      <label>
        Image:
        <input
          className="form-control"
          placeholder="enter the link image"
          type="text"
          name="img"
          onChange={(e) => { setimg(e.target.value) }}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          className="form-control"
          placeholder="enter the product name"
          type="text"
          name="name"
          onChange={(e) => { setname(e.target.value) }}
        />
      </label>
      <br />
      <label>
        Star:
        <input
          className="form-control"
          placeholder="enter the star number"
          type="number"
          name="star"
          onChange={(e) => { setstar(e.target.value) }}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          className="form-control"
          placeholder="enter the price"
          type="number"
          name="price"
          onChange={(e) => { setprice(e.target.value) }}
        />
      </label>
      <br />
      <label>
        Sale Number:
        <input
          className="form-control"
          placeholder="enter the sale number"
          type="number"
          name="sale_number"
          onChange={(e) => { setsale_numer(e.target.value) }}
        />
      </label>
      <br />
      <label>
        Promote:
        <input
          className="form-control"
          placeholder="enter the total promote"
          type="number"
          name="promote"
          onChange={(e) => { setpromote(e.target.value) }} 
        />
      </label>
      <br />
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Addproduct;