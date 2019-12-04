import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path='/' component={Home}/>
      </div>
    </Router>
  );
}

export default App;
