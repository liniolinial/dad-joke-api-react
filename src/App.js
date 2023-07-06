import "./App.scss";
import Sidebar from "./components/Sidebar";
import JokeList from "./components/JokeList";
import fetchNewJokes from "./services/fetchNewJokes";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      isLoaded: true,
    };
    this.handleUpdateJokes = this.handleUpdateJokes.bind(this);
    this.handleUpdateLoaded = this.handleUpdateLoaded.bind(this);
    !this.state.jokes.length &&
      fetchNewJokes(this.handleUpdateJokes, this.handleUpdateLoaded);
  }

  handleUpdateJokes(newJokes) {
    this.setState({ jokes: [...this.state.jokes, ...newJokes] });
  }
  handleUpdateLoaded(newIsLoaded) {
    this.setState({ isLoaded: newIsLoaded });
  }

  render() {
    return (
      <div className='App'>
        <Sidebar
          onUpdateJokes={this.handleUpdateJokes}
          onUpdateLoaded={this.handleUpdateLoaded}
          isLoaded={this.state.isLoaded}
        />
        <h1>Jokes count {this.state.jokes.length}</h1>
        <JokeList jokes={this.state.jokes} />
      </div>
    );
  }
}
