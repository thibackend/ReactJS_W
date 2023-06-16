import React from "react";
import "./App.css";
import Routers from "./Web_tiki/route";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}
export default App;
