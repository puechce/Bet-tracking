import './App.css';
import Header from "./component/header/Header"
import Add from "./component/add/Add"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Body">
        <Add/>
      </div>
    </div>
  );
}

export default App;
