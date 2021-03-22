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
          name: 'Quel match chef ? ⚽',
          date: '',
          bet: 'Tu mets combien ? 💸',
          status: 'waiting',
          gain: 0
        },
   
        onSubmit: (values) => {
          axios({
              method:'post',
              url:'http://localhost:8080/test',
              data:values
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
          formik.resetForm()
        }
      });

    return ( 
        <add>
            
            <h2>Ajoute ton paris 💪</h2>    

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