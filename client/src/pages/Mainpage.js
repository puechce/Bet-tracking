import React from "react";
import Add from "../component/add/Add"
import Bets from "../component/bets/Bets"
import "./mainpage.css"

function Mainpage(){
    return(
        <div>
            <Add/>
            <Bets/>
        </div>
    )
}

export default Mainpage