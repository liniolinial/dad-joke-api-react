import React, { Component } from "react";
import JokeItem from "../JokeItem/JokeItem";
import "../JokeList/JokeList.css";

export default class JokeList extends Component {
  constructor(props) {
    super(props);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  // verknupft handleUpVote func mit onHadleUp props id von JokeList id(=genauer gesagt id von JokeItem id von unten map)
  handleUpVote(id) {
    console.log(id);
    this.props.onHandleUpVote(id);
  }

  // hier onHandle-Vote sind keine Funktion von App.js sondern Props ind jsx von app.js von JokeList
  handleDownVote(id) {
    this.props.onHandleDownVote(id);
  }

  render() {
    return (
      <div className='jokeList'>
        <div className='jokeList__right'>
          {this.props.jokes.map((j) => (
            <JokeItem
              key={j.id}
              joke={j.joke}
              id={j.id}
              // wichtig hier j.upVotes!!! wegen map
              // on- bleibt immer in Props
              upVotes={j.upVotes}
              onHandleUpVote={this.handleUpVote}
              onHandleDownVote={this.handleDownVote}
            />
          ))}
        </div>
      </div>
    );
  }
}
