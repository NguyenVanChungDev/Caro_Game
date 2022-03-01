import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Clock from "./components/Clock";
import Nuclear from "./components/Broad";

function App() {
    return (
        <div className="App">
            <h3>Cờ Caro new</h3>
            <User />
            <Clock />
            <Nuclear />
        </div>
    );
}

export default App;
