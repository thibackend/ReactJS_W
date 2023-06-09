import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom"
import Addproduct from "./Addproduct";

export default function Showproduct() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products').
            then((res) => { setData(res.data) }).
            catch((err) => { console.log("ERRORS: " + err) });
    }, []);

    const Edit = (data) =>{
        console.log(data);
    }
    return (
        <>
            <div className="row d-flex justify-content-center">
                {
                    data.map((e) => (
                        <div className="col-md-2 mx-5 my-5" key={e.id}>
                            <div className="card" style={{ width: '30rem', height: "45rem" }}>
                                <img className="card-img-top img-thumbnail" src={e.img} alt="Card image cap" style={{width:"100%", height:"50%"}} />
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text">{e.price}</p>
                                    <p className="card-text">{e.promote}</p>
                                    <p className="card-text">{e.sale_number}</p>
                                    <a href="#" className="btn btn-primary">Buy</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}



