import React, {useEffect,useState} from "react";
import "./chart.css";
import axios from 'axios';
import {
    AreaChart, Area,
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from "recharts";


/*
const bank = async() => {
        
        const g = axios.get("http://localhost:8080/ini",{
            params:{
                pseudo: sessionStorage.getItem('pseudo')
            }
        }).then((res)=>{
            var u = res.data.map((item)=>{
                return item.inibank
            }) 
            console.log('this is my res')          
            return u[0]
        })
}
*/



function Chart(){
    const [data,setData]=useState([])
    const bank =100;

    useEffect(()=>{
        axios.get("/dispbet",{
            params:{
                gambler: sessionStorage.getItem('pseudo')
            }
        }).then((res)=> {
            const newArr = res.data.data.map((item)=>{

                return {
                    x : item.date, 
                    y : item.gain,
                };
            });
            const newArrs = newArr.sort(function(a, b) {
                var dateA = new Date(a.x), dateB = new Date(b.x);
                return dateA - dateB;
            });

            const arrFin = newArrs.map((item)=>{
                return item.y
            })
            const arrFin2 = []
            for (var i =0; i < arrFin.length;i ++){
                if (i ===0){
                    arrFin2.push(bank+arrFin[i])
                } else {
                arrFin2.push(arrFin2[i-1]+arrFin[i])}
            }
            var j = -1;
            const data = newArrs.map((item)=>{
                j= j+1;
                return {
                    x : item.x,
                    y : arrFin2[j]
                }
            })
            console.log(data)
            setData(data)
        });
    },[data].length)    

    return (
        <chart>
            <div className="card" style={{ height: "100%" }}>
            <ResponsiveContainer width="90%" height="96%">
              <AreaChart  data={data}>
                    <Area type="monotone" dataKey="y" fill="#12aa91" stroke="#12aa91" strokeWidth="3" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis
                    label={{
                        value: "TIME",
                        position: "insideBottom",
                        offset: -5,
                        fill: "#12aa91",
                    }}
                    dataKey="x"
                    allowDuplicatedCategory={false}
                    stroke="#12aa91"
                    minTickGap="5"
                />
              </AreaChart>
              </ResponsiveContainer>
            </div>
        </chart>
    )
}


export default Chart; 