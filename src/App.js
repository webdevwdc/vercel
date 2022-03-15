import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./ShareModules/Layout/Header/Header";
import Footer from "./ShareModules/Layout/Footer/Footer";
import Index from "./Components/Home/Index";
import PrivateOutlet from "./ShareModules/RouterWraper/PrivateOutlet";

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  );
}

export default App;