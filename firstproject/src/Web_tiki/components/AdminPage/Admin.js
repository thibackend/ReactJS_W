import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Edit from "./Edit";

function Admin() {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(0);
    let navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
            try {
                const res = (await axios.get("http://localhost:8000/api/products").
                    then(
                        (res) => {
                            setData(res.data);
                            localStorage.setItem('product', JSON.stringify(res.data));
                        }));
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, [status]);

    // const Delete = async (id) => {
    //     await axios.delete(`http://localhost:8000/api/products/${id}`)
    //     .then(res => { alert(res.data.mes + `${id}`) });
    // }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/products/${id}`)
                .then(res => { alert(res.data.mes + ` ${id}`); setStatus(status + 1) });
        } catch (error) {
            console.error(error);
            // Xử lý lỗi khi xóa sản phẩm không thành công
        }
    };
    return (
        <>
            <button className="btn btn-primary" onClick={() => navigate('add')}>ADD</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Star</th>
                        <th>Price</th>
                        <th>Sale Number</th>
                        <th>Promote</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (item) => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt='anh tuong trung' style={{ width: "100px", height: "100px" }} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.star}</td>
                                    <td>{item.price}</td>
                                    <td>{item.sale_number}</td>
                                    <td>{item.promote}</td>
                                    <td>
                                        <button className="btn btn-danger py-2 px-2 mx-4" onClick={() => handleDelete(item.id)}>
                                            Delete
                                        </button>
                                        {/* Add update functionality */}
                                        <Link className="btn btn-primary py-2 px-2" to={`edit/${item.id}`}>
                                            Update
                                        </Link>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </>
    );
}
export default Admin;
