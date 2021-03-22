import './App.css';
import React from 'react';
import SideBar from "./component/header/SideBar"
import Mainpage from "./pages/Mainpage.js"
import Welcome from "./pages/Welcome.js"
import Register from "./component/register/Register.jsx"
import Login from "./component/login/Login"

import { Switch, Route } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <SideBar/> 
      <div className="Body">
        <Switch>
          <Route exact path='/'>
            <Welcome/>
          </Route>
          <Route exact path='/Login'>
            <Login/>
          </Route>
          <Route exact path='/Register'>
            <Register/>
          </Route>
          <Route exact path='/welcome'>
            <Mainpage/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
