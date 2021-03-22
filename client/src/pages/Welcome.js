import React from "react";
import "./welcome.css"
import { Link } from "react-router-dom";


function Welcome(){
    return(
        <div className="Container">
            <h1 id="titre">Déjà membre ? 🔓</h1>
            <Link to='/Login'>
                <button className="butt">Login</button>
            </Link>
            <Link  to="/Register">
                <button className="butt">Register</button>
            </Link>
            
        </div>
    )
}

export default Welcome