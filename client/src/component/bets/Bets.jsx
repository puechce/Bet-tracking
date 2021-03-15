import React from "react";
import "./bets.css";
import axios from 'axios';

function display(){
    axios({
        method:"get",
        url:"/disp"      
    }).then(function (response) {
        console.log(response.data.data);
      }).catch(function (error) {
        console.log(error);
      });
}

function Bets(){

    return ( 
        <bets>
            <h1>Mes pars</h1>
            <button onClick={()=>display()}>Refresh</button>
        </bets>
    )
}

export default Bets ; 