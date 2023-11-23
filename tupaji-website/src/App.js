import logo from './logo.svg';
import './App.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <NavBar/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
