import React from "react";
import Cpulogo from "./Cpulogo.png";
import Rectangle from "./Rectangle.png"
import "./style.css";
function Logoright(){
    return(
    <div>
    <img className="imm1" src={Cpulogo} alt=""/>
    <img className="imm2" src={Rectangle} alt=""/>
    </div>);
}
export default Logoright;