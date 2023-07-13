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
        // this.setState({ jokes: newJokes });
      },
      this.handleUpdateLoaded,
    );
  }

  handleUpVote(id) {
    console.log(id);
    this.updateVotes(id);
  }

  updateVotes(id, addition = true) {
    const newJokes = this.state.jokes.map((joke) => {
      if (joke.id === id) {
        addition
          ? //diese weitere ? kondition Übung in new.js: true/false value von 1 /0
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
    const newJokesArray = [...newJokes, ...this.state.jokes]; //hier ...newJokes hinzufügen: alte state joke einfach weiter hinzufügen
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
        {/* {this.state.isLoaded ? (  -> wegen component reMount macht html weg. guck DOM und docs!*/}
        <div
          className='Jokepage'
          style={{ display: this.state.isLoaded ? "flex" : "none" }}>
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
          <h1>Jokes count {this.state.jokes.length}</h1>
        </div>
        {/* ) : ( */}
        <div style={{ display: !this.state.isLoaded ? "block" : "none" }}>
          <FontAwesomeIcon
            icon={faLaughSquint}
            size='lg'
            spin
            className='loading-smiley'
          />
        </div>

        {/* )} */}
      </div>
    );
  }
}
