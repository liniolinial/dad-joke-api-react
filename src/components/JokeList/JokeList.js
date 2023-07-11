import React, { Component } from "react";
import JokeItem from "../JokeItem/JokeItem";
import "../JokeList/JokeList.css";

export default class JokeList extends Component {
  render() {
    return (
      <div className='jokeList'>
        <div className='jokeList__right'>
          {this.props.jokes.map((j) => (
            <JokeItem key={j.id} joke={j.joke} />
          ))}
        </div>
      </div>
    );
  }
}
