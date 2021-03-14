import React from "react";
import "./add.css";
import { useFormik } from 'formik';
import axios from 'axios';


function empty(id){
    document.getElementById(id).value='';
}

function Add(){

    const options = {
        method: 'POST',
    }
    const formik = useFormik({
        initialValues: {
          name: '',
          date: '',
          bet: '',
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
          console.log(values)
        }
    */
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