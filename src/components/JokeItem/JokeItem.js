import React, { Component } from "react";
import Button from "../Button/Button";
import "../JokeList/JokeList.css";
import "../JokeItem/JokeItem.css";

// in diesem Coponent: emoji und num btn?
export default class JokeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upVotes: 0,
    };
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp(id) {
    this.setState((st) => ({
      upVotes: st.upVotes + 1,
    }));
  }

  handleDown(id) {
    this.setState((st) => ({
      upVotes: st.upVotes > -4 ? st.upVotes - 1 : -4,
    }));
  }

  render() {
    return (
      <div>
        <div className='jokeitem'>
          <div className='jokeitem__button'>
            <Button className='button__up' onClick={this.handleUp}>
              ^
            </Button>
            <Button className='button__vote'>{this.state.upVotes}</Button>
            <Button className='button__down' onClick={this.handleDown}>
              v
            </Button>
          </div>
          <p className='jokeitem__joke'>{this.props.joke}</p>
          <button>^</button>
        </div>
      </div>
    );
  }
}
