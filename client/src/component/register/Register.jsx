import React from "react";
import "./register.css";
import { useFormik } from 'formik';
import { useHistory } from "react-router-dom";

const axios = require('axios');

function empty(id){
    document.getElementById(id).value='';
}


function Register(){

    let history = useHistory();
   
    const formik = useFormik({
        initialValues: {
          pseudo: '',
          password: '',
        },

     
        onSubmit: (values) => {
          axios({
              method:'post',
              url:'/users/register',
              data:values
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });
          history.push('/login')
        }
      });
      

    return ( 
        <add>
            <h2>Register</h2>    
            <form  onSubmit={formik.handleSubmit}  >
                 <label >pseudo</label>
                 <input id="pseudo" name="pseudo" onChange={formik.handleChange} value={formik.values.pseudo}  type="text" onClick={()=>empty('pseudo')} />
                 <label>your password</label>
                 <input id="password" type="text" name="password" onChange={formik.handleChange} value={formik.values.password} onClick={()=>empty('password')}/>
                 <input type="submit"  value="Register"/>
            </form> 
            
        </add>
    )
}

export default Register ; 