import React, {useEffect,useState} from "react";
import "./bets.css";
import axios from 'axios';

//Current bets Display 
function buildBet(item){
    return(
        <div className="bet-box">
            <div>{item.name}</div>
            <div>{item.bet} </div>
            <button></button>
        </div>
    )
}

function Bets(){
    const [data,setData]=useState([]);
    //Select data in the database
    useEffect(()=>{
        axios.get("/disp").then((res)=> {
            const newArr = res.data.data.map((item)=>{
                return {
                    name : item.name, 
                    date : item.date, 
                    bet : item.bet
                };
            });
            setData(newArr)
        });
    },[])

    return ( 
        <bets>
            <h1>Mes paris</h1>
            {data.map((item)=>{
                 return <div>{buildBet(item)}</div>
            })}
        </bets>
    )
}

export default Bets ; 