import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";

function Student() {
    const [dataStudent, setDataStudent]= useState([])

    useEffect(
        () =>{
            const fetchData = async () =>{
                const datafetch = await axios.get('https://63a5720f318b23efa793a65e.mockapi.io/api/PERSON');
                setDataStudent(datafetch);
                console.log(datafetch);
            }
            fetchData();
        }
        ,[])
    console.log(dataStudent);
    if(dataStudent){
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Gender</th>
                </tr>
                {dataStudent.map(item =>
                    <tr>
                        {/* "Name": "Name 1",
  "Gender": "Gender 1",
  "Address": "Address 1",
  "Class": "Class 1",
  "id": "1" */}
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.Address}</td>
                        <td>{item.Gender}</td>
                    </tr>
                    )}

            </table>
        );
    }
}

export default Student;