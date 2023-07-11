import React, { Component } from "react";
import Button from "../Button/Button";
import "../JokeList/JokeList.css";
import "../JokeItem/JokeItem.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngry,
  faDizzy,
  faFlushed,
  faFrown,
  faSmile,
  faFaceGrinWide,
  faSmileWink,
  faFaceGrinBeam,
  faFaceGrinSquint,
  faGrinTears,
  faFaceGrinSquintTears,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngry,
  faDizzy,
  faFlushed,
  faFrown,
  faSmile,
  faFaceGrinWide,
  faSmileWink,
  faFaceGrinBeam,
  faFaceGrinSquint,
  faGrinTears,
  faFaceGrinSquintTears,
);

// in diesem Coponent: emoji und num btn?
export default class JokeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upVotes: 0,
    };
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.getEmoji = this.getEmoji.bind(this);
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

  getEmoji() {
    if (this.state.upVotes >= 12) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinSquintTears}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "orange",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    } else if (this.state.upVotes >= 10 || this.props.UpVotes < 12) {
      return (
        <FontAwesomeIcon
          icon={faGrinTears}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "orange",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    } else if (this.state.upVotes >= 8 || this.props.UpVotes < 10) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinSquint}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "orange",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    } else if (this.state.upVotes >= 5 || this.props.UpVotes < 8) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinBeam}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "orange",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    } else if (this.state.upVotes >= 3 || this.props.UpVotes < 5) {
      return (
        <FontAwesomeIcon
          icon={faSmileWink}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "orange",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    } else if (this.state.upVotes >= 1 || this.props.UpVotes < 3) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinWide}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "orange",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    } else if (this.state.upVotes === 0) {
      return (
        <FontAwesomeIcon
          icon={faSmile}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "orange",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    } else if (this.state.upVotes === -1) {
      return (
        <FontAwesomeIcon
          icon={faFrown}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "#69B049",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    } else if (this.state.upVotes === -2) {
      return (
        <FontAwesomeIcon
          icon={faFlushed}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "#A6B6C4",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    } else if (this.state.upVotes === -3) {
      return (
        <FontAwesomeIcon
          icon={faDizzy}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "#5b5b5b",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          icon={faAngry}
          onClick={this.handleClick}
          size='lg'
          style={{
            color: "red",
            boxShadow:
              "0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "55px",
            borderRadius: "50%",
            borderStyle: "none",
          }}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <div className='jokeitem'>
          <div className='jokeitem__button'>
            <Button className='button__up' onClick={this.handleUp} />
            <Button className='button__votes'>{this.state.upVotes}</Button>
            <Button className='button__down' onClick={this.handleDown} />
          </div>
          <p className='jokeitem__joke'>{this.props.joke}</p>
          {this.getEmoji()}
        </div>
      </div>
    );
  }
}
