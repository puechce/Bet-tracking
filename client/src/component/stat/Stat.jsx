import React, {useEffect,useState} from "react";
import "./stat.css";
import axios from 'axios';




function Stat(){
    const [data,setData] = useState([]);
    const [nbWin,setWin] = useState(0);
    const [nbBet,setBet] = useState(0);
    const [ratio,setRatio] = useState(0)


    useEffect(()=>{
        axios.get("http://localhost:8080/dispbet",{
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
            setBet(newArr.length)
        });
    },{})

    useEffect(() => {
        var json = data.filter(function (a){
            return a.status == 'win'
        })
        setWin(json.length)
    },[data])

    useEffect(() => {
        let num = nbWin
        let den = nbBet 
        let r =num/den
        setRatio(r.toFixed(2))
    },[nbWin])

    return (
        <stat>
            <div className="Tuile">
                <div>Wins</div>  
                <div className="number">{nbWin} </div>
            </div>
            <div className="Tuile"> 
                <div>Bet number</div>
                <div className="number">{nbBet}</div>
            </div>
            <div className="Tuile"> 
                <div>Ratio</div>
                <div className="number">{ratio}</div>
            </div>
        </stat>
    )
}

export default Stat;