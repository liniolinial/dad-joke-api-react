import React, { Component } from "react";
import axios from "axios";
// import Joke from "./Joke";

export default class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      jokeList: [],
      isLoaded: false,
    };
    this.getNewJokes = this.getNewJokes.bind(this);
  }

  // async componentDidMount() {
  //   let response = await axios.get("https://icanhazdadjoke.com/", {
  //     headers: { Accept: "application/json" },
  //   });
  //   let data = response.data;
  //   this.setState((st) => ({
  //     joke: data.joke,
  //   }));
  // }

  // async getNewJokes() {
  //   //load data
  //   for (let i = 0; i < 10; i++) {
  //     let response = await axios.get("https://icanhazdadjoke.com/", {
  //       headers: { Accept: "application/json" },
  //     });

  //     this.setState((st) => ({
  //       jokeList: [
  //         ...st.jokeList,
  //         {
  //           id: response.data.id,
  //           joke: response.data.joke,
  //         },
  //       ],
  //     }));

  //     let tenJokesAtOnce = this.state.jokeList.map((t) => ({
  //       key: t.id,
  //       joke: t.joke,
  //     }));
  //     console.log(tenJokesAtOnce);
  //   }
  // }

  async getNewJokes() {
    //load data
    for (let i = 0; i < 10; i++) {
      let response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });

      this.setState((st) => ({
        jokeList: [
          ...st.jokeList,
          {
            id: response.data.id,
            joke: response.data.joke,
          },
        ],
      }));

      // let tenJokesAtOnce = this.state.jokeList.map((t) => ({
      //   key: t.id,
      //   joke: t.joke,
      // }));
      // console.log(tenJokesAtOnce);
    }
  }

  render() {
    const { jokeList } = this.state;
    return (
      <div>
        <h1>Dad Jokes</h1>
        {jokeList.map((joke) => (
          <div key={joke.id}>{joke.joke}</div>
        ))}
        <button onClick={this.getNewJokes}>New Jokes</button>
      </div>
    );
  }
}
// let tenJokesAtOnce = this.state.jokeList.map((t) => ({
//   key: t.id,
//   joke: t.joke,
// }));
// console.log(tenJokesAtOnce);
