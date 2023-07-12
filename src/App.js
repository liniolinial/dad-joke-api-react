import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import JokeList from "./components/JokeList/JokeList";
import fetchNewJokes from "./services/fetchNewJokes";
import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaughSquint } from "@fortawesome/free-solid-svg-icons";

library.add(faLaughSquint);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // upVotes: 0: hier brauche ich es nicht weil  v sehe unten
      // jokes: {id: string, joke: string, upVotes: number }[] // nur für Verständnis: aber mehr mal so: [{id: string, joke: string, upVotes: number }]
      jokes: [],
      isLoaded: true,
    };
    this.handleUpdateJokes = this.handleUpdateJokes.bind(this);
    this.handleUpdateLoaded = this.handleUpdateLoaded.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.updateVotes = this.updateVotes.bind(this);
    this.sortJokes = this.sortJokes.bind(this);
  }

  sortJokes(jokes) {
    jokes.sort((a, b) => {
      return b.upVotes - a.upVotes;
    });
    return jokes;
  }

  componentDidMount() {
    fetchNewJokes(
      1,
      (newJokes) => {
        const sortedJokes = this.sortJokes(newJokes);
        this.setState({ jokes: sortedJokes });
      },
      this.handleUpdateLoaded,
    );
  }

  handleUpVote(id) {
    this.updateVotes(id);
  }

  updateVotes(id, addition = true) {
    const newJokes = this.state.jokes.map((joke) => {
      if (joke.id === id) {
        addition
          ? //diese weitere ? kondition Übung in new.js
            (joke.upVotes += 1)
          : (joke.upVotes -= joke.upVotes > -4);
      }
      return joke;
    });

    const sortedJokes = this.sortJokes(newJokes);
    this.setState({ jokes: sortedJokes });
  }

  handleDownVote(id) {
    this.updateVotes(id, false);
  }

  // handleUp &-Down so ähnliche Func kann man in einer Hauptfunktion schreiben und das verteilen, wie updateVotes

  handleUpdateJokes(newJokes) {
    const newJokesArray = [...this.state.jokes];
    newJokes.forEach((newJoke) => {
      if (!newJokesArray.find((joke) => joke.id === newJoke.id))
        newJokesArray.push(newJoke);
    });

    const sortedJokes = this.sortJokes(newJokesArray);
    this.setState({ jokes: sortedJokes });
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
            <JokeList
              jokes={this.state.jokes}
              onHandleUpVote={this.handleUpVote}
              onHandleDownVote={this.handleDownVote}
            />
          </div>
        ) : (
          <FontAwesomeIcon
            icon={faLaughSquint}
            size='lg'
            spin
            className='loading-smiley'
          />
        )}
      </div>

      // //test
      // <div className='App'>
      //   <div className='background-loading-smiley'>
      //     <FontAwesomeIcon
      //       icon={faLaughSquint}
      //       size='lg'
      //       spin
      //       className='loading-smiley'
      //     />
      //   </div>
      // </div>
    );
  }
}
