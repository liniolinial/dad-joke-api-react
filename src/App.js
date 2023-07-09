import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import JokeList from "./components/JokeList/JokeList";
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
  }
  //überschreiben initial value (damit ich kein verdoppelte componentDM in konsole kriege.)
  componentDidMount() {
    fetchNewJokes((newJokes) => {
      this.setState({ jokes: newJokes });
    }, this.handleUpdateLoaded);
  }

  handleUpdateJokes(newJokes) {
    const newJokesArray = [...this.state.jokes];
    newJokes.forEach((newJoke) => {
      if (!newJokesArray.find((joke) => joke.id === newJoke.id))
        newJokesArray.push(newJoke);
    });

    this.setState({ jokes: newJokesArray });
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
