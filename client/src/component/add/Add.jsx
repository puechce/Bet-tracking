import React from "react";
import "./add.css";


function empty(id){
    document.getElementById(id).value='';
}

function Add(){
    return ( 
        <add>
            <h2>Ajoute ton pari 💪</h2>      
            <form method="post" action="/test">
                 <input id="match" name="name"  type="text" defaultValue="Quel match chef ? ⚽" onClick={()=>empty('match')} />
                 <input type="date" name="date" defaultValue="Date du match ?"/>
                 <input id="mise" name="bet" type="text" defaultValue="Tu mets combien ? 💸" onClick={()=>empty('mise')}/>
                 <input type="submit" value="Boom !!! 💣 "/>
            </form> 
        </add>
    )
}



export default Add ; 