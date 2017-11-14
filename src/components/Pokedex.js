import React, { Component } from "react";
import { fireDex } from "../firebase/authentication";

export class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props
    };

    this.updateQuery = this.updateQuery.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
  }

  updateQuery(event) {
    this.setState({
      ...this.state,
      query: event.target.value
    });
  }

  submitQuery(event) {
    event.preventDefault();
    fireDex
      .database()
      .ref(`Query`)
      .push({
        query: this.state.query || ""
      });
    // clears the input on submit
    event.target.elements["query"].value = "";
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col s12" />
        </div>
        <div class="row">
          <div class="col s4" />
          <div class="col s4">
            <div class="card">
              <div class="card-image">
                <img src="" alt="PokemonProfile" />
              </div>
              <div class="card-action">
                <p id="name">Bulbasaur</p>
                <p id="number">#001</p>
                <p id="type">Grass</p>
              </div>
            </div>
          </div>
          <div class="col s4" />
        </div>
        <div class="row">
          <div class="col s12" />
        </div>
        <div class="row">
          <div class="col s4" />
          <div class="col s4">
            <form id="chatForm" onSubmit={this.submitQuery}>
              <input
                id="query"
                onChange={this.updateQuery}
                type="text"
                placeholder="Search"
                required
                autoComplete="off"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div class="col s4" />
        </div>
      </div>
    );
  }
}
