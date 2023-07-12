import React, { Component } from "react";
import JokeItem from "../JokeItem/JokeItem";
import "../JokeList/JokeList.css";

export default class JokeList extends Component {
  constructor(props) {
    super(props);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    // this.handleDownVote = this.handleDownVote.bind(this);
    // this.handleUpVote = this.handleUpVote.bind(this);
  }

  //hint
  handleUpVote(id) {
    this.props.onHandleUpVote(id);
  }

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
              // upVotes={this.upVotes}
              upVotes={j.upVotes}
              onHandleUpVote={this.handleUpVote}
              onHandleDownVote={this.handleDownVote}
              // onHandleUpVote={this.onHandleUpVote}
              // onHandleDownVote={this.onHandleDownVote}
            />
          ))}
        </div>
      </div>
    );
  }
}
