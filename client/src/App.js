import './App.css';
import SideBar from "./component/header/SideBar"
import Add from "./component/add/Add"
import Bets from "./component/bets/Bets"

function App() {
  return (
    <div className="App">
      <SideBar/> 
      <div className="Body">
        <Add/>
        <Bets/>
      </div>
    </div>
  );
}

export default App;
