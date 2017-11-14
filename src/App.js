import React, { Component } from "react";
import "./App.css";
import { Pokedex } from "./components/Pokedex";

class App extends Component {
  render() {
    return (
      <div>
        <Pokedex />
      </div>
    );
  }
}

export default App;
