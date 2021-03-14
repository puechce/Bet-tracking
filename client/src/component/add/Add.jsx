import React from "react";
import "./add.css";
import { useFormik } from 'formik';
const axios = require('axios');



function empty(id){
    document.getElementById(id).value='';
}

function Add(){
    const formik = useFormik({
        initialValues: {
          name: '',
          date: '',
          bet: '',
        },
   
        onSubmit: values => {
          axios({
              method:'get',
              url:'https://www.facebook.com/',
              //data:values
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
          console.log(values)
        }
      });

    return ( 
        <add>
            
            <h2>Ajoute ton pari 💪</h2>    

            <form  onSubmit={formik.handleSubmit}  >
                 <input id="match" name="name" onChange={formik.handleChange} value={formik.values.name}  type="text" defaultValue="Quel match chef ? ⚽" onClick={()=>empty('match')} />
                 <input type="date" name="date" onChange={formik.handleChange} value={formik.values.date} defaultValue="Date du match ?"/>
                 <input id="mise" name="bet" onChange={formik.handleChange} value={formik.values.bet}  type="text" defaultValue="Tu mets combien ? 💸" onClick={()=>empty('mise')}/>
                 <input type="submit"  value="Boom !!! 💣 "/>
            </form> 

        </add>
    )
}



export default Add ; 