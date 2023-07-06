import React, { Component } from "react";
import Button from "./Button";

import "./JokeList.scss";

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
        <div className='jokebox-flex__jokelist'>
          <div className='test'>
            <Button onClick={this.handleUp}>^</Button>
            <Button>{this.state.upVotes}</Button>
            <Button onClick={this.handleDown}>v</Button>
          </div>
          <p>{this.props.joke}</p>
          <button>^</button>
        </div>
      </div>
    );
  }
}
