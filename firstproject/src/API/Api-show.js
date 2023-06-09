import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./css/productList.css"

export default function ShowproductApi() {
    const [data, setData] = useState([]);
    useEffect(
        () => {
            axios.get('http://localhost:8000/api/get-product')
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        , []);
    return (
        <div className="container">
            <h2>Product List</h2>
            <table className="table table-striped">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Unit Price</th>
                        <th>Promotion Price</th>
                        <th>Unit</th>
                        <th>New</th>
                        <th>ID Type</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td><img src={product.image} alt="Product Image" /></td>
                            <td>{product.description}</td>
                            <td>{product.unit_price}</td>
                            <td>{product.promotion_price}</td>
                            <td>{product.unit}</td>
                            <td>{product.new}</td>
                            <td>{product.id_type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
