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
        query: this.state.query
      });
    // clears the input on submit
    event.target.elements["query"].value = "";
  }

  render() {
    return (
      <div>
        <form id="chatForm" onSubmit={this.submitQuery}>
          <input
            id="query"
            onChange={this.updateQuery}
            type="text"
            placeholder="Search"
            required
            autoComplete="off"
          />
          <button type="submit">Test</button>
        </form>
      </div>
    );
  }
}
