import React, { Component } from "react";
import "./App.css";
import { Pokedex } from "./components/Pokedex";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokedex</h1>
        </header>
        <br />
        <Pokedex />
      </div>
    );
  }
}

export default App;
