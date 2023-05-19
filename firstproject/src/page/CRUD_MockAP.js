import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";

function Student() {
    var a =2;
    if(a){
        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Gender</th>
                </tr>

            </table>
        );
    }else{
        return(
            <ul></ul>
        );
    }
}

export default Student;