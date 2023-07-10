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

  componentDidMount() {
    fetchNewJokes(
      1,
      (newJokes) => {
        this.setState({ jokes: newJokes });
      },
      // this.handleUpdateJokes,
      this.handleUpdateLoaded,
    );
  }

  // handleUpdatePage() {
  //   if (this.state.initialPage < 74) {
  //     this.setState(
  //       (st) => ({
  //         initialPage: st.initialPage + 1,
  //       }),
  //       () => {
  //         fetchNewJokes(
  //           this.handleUpdatePage,
  //           this.state.initialPage,
  //           this.handleUpdateJokes,
  //           this.handleUpdateLoaded,
  //         );
  //       },
  //     );
  //   }
  // }

  handleUpdateJokes(newJokes) {
    console.log(newJokes);
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
        {this.state.isLoaded ? (
          <div className='Jokepage'>
            <Sidebar
              onUpdateJokes={this.handleUpdateJokes}
              onUpdateLoaded={this.handleUpdateLoaded}
              isLoaded={this.state.isLoaded}
            />
            <JokeList jokes={this.state.jokes} />
          </div>
        ) : (
          <div className='loading' />
        )}
      </div>
    );
  }
}
