import React from "react";
import Cpulogo from "./Cpulogo.png";
import Rectangle from "./Rectangle.png"
import "./style.css";
function Logoright(){
    return(
    <div className="navbar">
        <div className="bg-shape">
            <img class="imm1" src={Cpulogo} alt=""/>
        </div>
    </div>
    );
}
export default Logoright;