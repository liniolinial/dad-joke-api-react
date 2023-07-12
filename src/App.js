import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import JokeList from "./components/JokeList/JokeList";
import fetchNewJokes from "./services/fetchNewJokes";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // upVotes: 0,
      jokes: [],
      isLoaded: true,
    };
    this.handleUpdateJokes = this.handleUpdateJokes.bind(this);
    this.handleUpdateLoaded = this.handleUpdateLoaded.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.handleScoreCompare = this.handleScoreCompare.bind(this);
  }

  componentDidMount() {
    fetchNewJokes(
      1,
      (newJokes) => {
        this.setState({ jokes: newJokes });
      },
      // 2. Parm ist quasi das: this.handleUpdateJokes,
      this.handleUpdateLoaded,
    );
  }

  handleUpVote(id) {
    this.setState((st) => ({
      upVotes: st.upVotes + 1,
    }));
  }

  handleDownVote(id) {
    this.setState((st) => ({
      upVotes: st.upVotes > -4 ? st.upVotes - 1 : -4,
    }));
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

  handleScoreCompare() {
    const scoreCompare = (a, b) => {
      return b - a;
    };
    const sortedJokes = [...this.state].jokes.sort(scoreCompare);
    return sortedJokes;
    // this.setState({
    //   jokes: sortedJokes,
    // });
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
            {/* <JokeList jokes={this.state.jokes} */}
            <JokeList
              jokes={this.state.jokes}
              upVotes={this.handleScoreCompare()}
              onHandleUpVote={this.handleUpVote}
              onHandleDownVote={this.handleDownVote}
            />
          </div>
        ) : (
          <div className='loading' />
        )}
      </div>
    );
  }
}
