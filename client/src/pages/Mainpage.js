import React from "react";
import Add from "../component/add/Add"
import Bets from "../component/bets/Bets"
import Stat from "../component/stat/Stat"
import Chart from "../component/chart/Chart"
import "./mainpage.css"

function Mainpage(){
    return(
        <div id="full">
            <div id="half1">
                <Add/>
                <Bets/>
                <Stat/>
            </div>
            <div id="half2">
                <Chart/>
            </div>
        </div>

    )
}

export default Mainpage