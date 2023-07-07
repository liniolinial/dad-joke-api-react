import React, { Component } from "react";
import axios from "axios";
// import Joke from "./Joke";
import "./JokeList.css";

export default class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upDown: 0,
      joke: "",
      jokeList: [],
      isLoaded: false,
    };
    this.getNewJokes = this.getNewJokes.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
  }

  async getNewJokes() {
    // loading btn: false->true->after loading->false
    this.setState({ isLoaded: true });

    // first loading then call api
    await new Promise((resolve) => setTimeout(resolve, 1000));

    //load data
    for (let i = 0; i < 10; i++) {
      let response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      const { id, joke } = response.data;

      // deny jokes which have duplicated id
      const isDuplicate = this.state.jokeList.some((j) => j.id === id);
      if (!isDuplicate) {
        this.setState((st) => ({
          jokeList: [
            ...st.jokeList,
            {
              id: id,
              joke: joke,
            },
          ],
        }));
      }
    }

    // loading btn: after loading->false
    this.setState({ isLoaded: false });
  }

  //   handleUp(id) {
  //     this.setState((prevState) => {
  //       const updatedJokeList = prevState.jokeList.map((joke) => {
  //         if (joke.id === id) {
  //           return { ...joke, upDown: joke.upDown + 1 };
  //         }
  //         return joke;
  //       });
  //       return { jokeList: updatedJokeList };
  //     });
  //   }

  handleUp(id) {
    this.setState((st) => ({
      upDown: st.upDown + 1,
    }));
  }

  handleDown(id, isDuplicate) {
    if (!isDuplicate) {
      this.setState((st) => ({
        upDown: st.upDown > -4 ? st.upDown - 1 : -4,
      }));
    }
  }

  //   mindmap
  //   joke emoji => in einer array sein: insgesamt dann 8 emoji und ab +8 bleibt gleich
  //     const NUM_DICE = 5;
  //   class Game extends Component {
  //     constructor(props) {
  //       super(props);
  //       this.state = {
  //         dice: Array.from({ length: NUM_DICE }).map((d) =>
  //          array->emoji reinpacken
  //         ),

  render() {
    const { jokeList, isLoaded, joke } = this.state;

    return (
      <div className='JokeList'>
        {isLoaded ? (
          <div className='loading' />
        ) : (
          <div className='jokebox-flex'>
            {/* flex left sollte auch kommen */}
            <aside className='jokebox-flex__left'>
              <h1>Dad Jokes</h1>
              <p>emoji placeholder{!this.props.isLoaded}</p>
              <button onClick={this.getNewJokes}>New Jokes</button>
            </aside>
            <div className='jokebox-flex__right'>
              {jokeList.map((j) => (
                <div key={j.id} joke={j.joke}>
                  <div className='test'>
                    <button onClick={this.handleUp}>^</button>
                    <button>{this.state.upDown}</button>
                    <button onClick={this.handleDown}>v</button>
                  </div>
                  <p>{joke}</p>
                  <button>^</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
