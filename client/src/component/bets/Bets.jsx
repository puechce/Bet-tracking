import React, {useEffect,useState} from "react";
import "./bets.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";


//If a bet is win or not
function changeStatus(item,res){
    axios.put('/status',{_id: item._id,status:res})
    if (res==='win'){
        document.getElementById(item._id).style.backgroundColor='rgb(76, 226, 76)';

    } else {
        document.getElementById(item._id).style.backgroundColor='rgb(231, 132, 132)';
    }
}

//Current bets Display 
function buildBet(item){
    return(
        <div id={item._id} className="bet-box">
            <div id='name'>{item.name}</div>
            <div>{item.bet} </div>
            <div id='gain'>{item.gain}</div>
            <button id='win' onClick={()=>changeStatus(item,'win')}></button>
            <button id='loose' onClick={()=>changeStatus(item,'loose')}></button>

        </div>
    )
}

function Bets(){
    let history = useHistory();
    const [data,setData]=useState([]);
    const [test,setTest]=useState({});
    
    //Select data in the database
    useEffect(()=>{
        axios.get("/disp",{
            params:{
                gambler: sessionStorage.getItem('pseudo')
            }
        }).then((res)=> {
            const newArr = res.data.data.map((item)=>{
                    return {
                        _id: item._id,
                        name : item.name, 
                        date : item.date, 
                        bet : item.bet,
                        gain : item.gain
                    };
            });
            const test = res.data.data.map((item)=>{
                return {
                    key : item.name
                }
            });
            setTest(test)
            console.log(test)
            setData(newArr)
        });
    },{test})

    return ( 
        <bets>
            <h1>Mes paris en cours 🚀 </h1>
            <button onClick={()=>history.push('/database')}> Tout voir </button>
            {data.map((item)=>{
                 return <div>{buildBet(item)}</div>
            })}
        </bets>
    )
}

export default Bets ; 