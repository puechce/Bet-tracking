import React from "react";
import "./sidebar.css";
import { useFormik } from 'formik';
import axios from "axios";

function empty(id){
    document.getElementById(id).value='';
}

function SideBar(){

    const formik = useFormik({
        initialValues: {
            name: 'Your deposit',
        },

        onSubmit: (values) => {
            axios.put('http://localhost:8080/ini',{pseudo:sessionStorage.getItem('pseudo'),inibank:values.inibank})
            .then(function (response){
                 console.log(response);
            }).catch(function (error){
                console.log(error);
            });
            formik.resetForm()
        }
    });

    return ( 
        <header>
                <h1>Bet Tracking</h1>
                
                
        </header>
    )
}

export default SideBar ; 

/*
<form onSubmit={formik.handleSubmit}>
                <input id="inibank" name="inibank" onChange={formik.handleChange} value={formik.values.inibank}  type="number" defaultValue="Deposit" onClick={()=>empty('inibank')} />
                <input type="submit"  value="Depose my money"/>
</form>
*/