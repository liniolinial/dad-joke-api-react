import React, { Component } from "react";
import JokeItem from "../JokeItem/JokeItem";
import "../JokeList/JokeList.scss";

export default class JokeList extends Component {
  render() {
    return (
      <div className='JokeList'>
        <div className='jokebox-flex__right'>
          {this.props.jokes.map((j) => (
            <JokeItem key={j.id} joke={j.joke} />
          ))}
        </div>
      </div>
    );
  }
}
