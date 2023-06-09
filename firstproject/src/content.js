import { useFormik } from "formik";
import ReactDOM from 'react-dom';
import "./css/web.css";

export default function Contents() {
    return (
        <div className='Container'>
            <h1 className='title'>Sản phẩm của chúng tôi</h1>
            <div className="row">
                <div className="col-md-3">
                    <div className="thumbnail">
                        <a href="#">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUcmNNRsJkYuZJ8og_N7AyW45ZyooossPnOQ&usqp=CAU" alt="Lights" />
                            {/* <div className="caption">
                                <p>Lorem ipsum...</p>
                            </div> */}
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <a href="/w3images/nature.jpg">
                            <img src="/w3images/nature.jpg" alt="Nature" />
                            <div className="caption">
                                <p>ip14</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <a href="/w3images/fjords.jpg">
                            <img src="/w3images/fjords.jpg" alt="Fjords" />
                            <div className="caption">
                                <p>Lorem ipsum...</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <a href="">
                            <img src="/w3images/fjords.jpg" alt="Fjords" />
                            <div className="caption">
                                <p>Lorem ipsum...</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
