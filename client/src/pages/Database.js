import React, {useEffect,useState} from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './database.css'


function Database(){
    let history = useHistory();
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get("/dispbet",{
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
                    gain : item.gain,
                    status : item.status
                };
            });
            setData(newArr)
        });
    },data.length)
    return(
        <div class='database'>
            <button id='back-welcome' onClick={()=>history.push('/welcome')}>Retour</button>
            {data.map((item)=>{
                return(
                <div stat={item.status} class='result'>
                        <div>{item.name}</div>
                        <div>{item.gain}</div>
                        <div>{item.status}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Database
