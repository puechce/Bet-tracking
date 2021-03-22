import React from "react";
import "./login.css";
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";

const axios = require('axios');

function empty(id){
    document.getElementById(id).value='';
}


function Login(){

    let history = useHistory();
   
    const formik = useFormik({
        initialValues: {
          pseudo: '',
          password: '',
        },

     
        onSubmit: (values) => {
            axios({
                method:'post',
                url:'http://localhost:8080/login',
                data:values
            }).then(function (response) {
              if (response.data === true ){
                  history.push('/welcome')
              } 
            }).catch(function (error) {
              console.log(error);
            });  
        }
      });
      

    return ( 
        <add>
            <h2>Login</h2>    
            <form  onSubmit={formik.handleSubmit}  >
                 <label >pseudo</label>
                 <input id="pseudo" name="pseudo" onChange={formik.handleChange} value={formik.values.pseudo}  type="text" onClick={()=>empty('pseudo')} />
                 <label>your password</label>
                 <input id="password" type="text" name="password" onChange={formik.handleChange} value={formik.values.password} onClick={()=>empty('password')}/>
                 <input type="submit"  value="Login"/>
            </form> 
            
        </add>
    )
}

export default Login ; 