import React from "react";
import { useState, useEffect } from "react";

export default function Tinhdiem() {
    const [hk1, setHk1] = useState(0);
    const [dtb, setDtb] = useState(0);
    const [hk2, setHk2] = useState(0);
    const [kq, setKq] = useState(''); 
    const [xepLoai, setXepLoai] = useState('');


    const xeploai = (dtb) =>{
        if(dtb>=5){
            setKq('Lam Tot lam con trai!');
        }else{
            setKq('Sao may ngu the ha');
        }

        if (dtb >= 8) {
            setXepLoai('Xuất sắc');
          } else if (dtb >= 6.5) {
            setXepLoai('Giỏi');
          } else if (dtb >= 5) {
            setXepLoai('Trung bình');
          } else {
            setXepLoai('Yếu');
          }
    }
    const handleSubmit =()=> {
        setDtb((parseFloat(hk1) + parseFloat(hk2)) / 2);
        console.log(hk1);
        console.log(hk2);
        
    }
    useEffect(()=>{
        xeploai(dtb);
    }, [dtb]);


    return (
        <form>
        <label>
            HK1:
            <input
            type="number"
            onChange={(e) => setHk1(e.target.value)}
            placeholder="Diểm học kỳ 1"
            />
        </label>
        <br />
        <label>
            HK2:
            <input
            type="number"
            onChange={(e) => setHk2(e.target.value)}
            placeholder="Điểm học kỳ 2"
            />
        </label>
        <br />
        <label>
            Diem TB:
            <input
            type="number"
            value={dtb}
            />
        </label>
        <br />
        <label>
            Kết quả:
            <input
            type="text"
            value={kq}
            />
        </label>
        <br />
        <label>
            Xếp loại:
            <input
            type="text"
            value={xepLoai}
            />
        </label>
        <br />
        <input type="button"  value={'OK'}  onClick={handleSubmit}  />


        <h1> TTHEM HIANH ANH R CHUWS HEF</h1>
        </form>
    )
}