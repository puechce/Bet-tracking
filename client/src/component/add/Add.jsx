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
          odd: 'Côte',
          gain: 0,
          gambler: sessionStorage.getItem('pseudo')
        },
        onSubmit : values =>{
            fetch('/test',{
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
            })
        }
   /*
         onSubmit: values => {
            axios({
              method:'post',
              url:'https://bet-tracking.herokuapp.com/test',
              data:values
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
          formik.resetForm()
        }
    */
      });

    return ( 
        <add>
            
            <h2>Ajoute ton paris 💪</h2>    

            <form  class="flex-container" onSubmit={formik.handleSubmit}  >
                 <input class="flex-child" id="match" name="name" onChange={formik.handleChange} value={formik.values.name}  type="text" defaultValue="Quel match chef ? ⚽" onClick={()=>empty('match')} />
                 <input class="flex-child" type="date" name="date" onChange={formik.handleChange} value={formik.values.date} defaultValue="Date du match ?"/>
                 <input class="flex-child" id="mise" name="bet" onChange={formik.handleChange} value={formik.values.bet}  type="text" defaultValue="Tu mets combien ? 💸" onClick={()=>empty('mise')}/>
                 <input class="flex-child" id="odd" name="odd" onChange={formik.handleChange} value={formik.values.odd}  type="text" defaultValue="Côte" onClick={()=>empty('odd')}/>
                 <input class="flex-child" type="submit"  value="Boom !!! 💣 "/>
            </form> 

        </add>
    )
}



export default Add ; 