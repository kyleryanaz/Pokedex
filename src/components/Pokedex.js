import React, { Component } from "react";
import { fireDex } from "../firebase/authentication";

export class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      name: "",
      number: "",
      type1: "",
      type2: "",
      sprite: ""
    };

    this.updateQuery = this.updateQuery.bind(this);
    this.searchFireDex = this.searchFireDex.bind(this);
  }

  updateQuery(event) {
    this.setState({
      ...this.state,
      query: event.target.value
    });
  }

  searchFireDex(event) {
    event.preventDefault();
    fireDex
      .database()
      .ref("Pokemon")
      .orderByChild("name")
      .equalTo(this.state.query)
      .on("value", snapshot => {
        var data = [];
        snapshot.forEach(ss => {
          data.push(ss.key);
          data.push(ss.child("name").val());
          data.push(ss.child("type1").val());
          data.push(ss.child("type2").val());
          data.push(ss.child("sprite").val());
          this.setState({
            ...this.state,
            number: data[0],
            name: data[1],
            type1: data[2],
            type2: data[3],
            sprite: data[4]
          });
        });
        console.log(data);
      });
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
                <img src={this.state.sprite} alt="Sprite" />
              </div>
              <div class="card-action">
                <p id="name">{this.state.name}</p>
                <p id="number">{this.state.number}</p>
                <p id="type1">{this.state.type1}</p>
                <p id="type2">{this.state.type2}</p>
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
            <form id="chatForm" onSubmit={this.searchFireDex}>
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
