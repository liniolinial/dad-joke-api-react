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

export default class JokeItem extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // upVotes: 0,-> zur app.js
    // };
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.getEmoji = this.getEmoji.bind(this);
  }

  //event -handle (handle and on -> verknupfen, keine Übersprung.)
  handleUpVote() {
    this.props.onHandleUpVote(this.props.id);
  }

  handleDownVote() {
    this.props.onHandleDownVote(this.props.id);
  }

  getEmoji() {
    if (this.props.upVotes >= 12) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinSquintTears}
          // onClick={this.handleClick}
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
    } else if (this.props.upVotes >= 10 && this.props.upVotes < 12) {
      return (
        <FontAwesomeIcon
          icon={faGrinTears}
          // onClick={this.handleClick}
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
    } else if (this.props.upVotes >= 8 && this.props.upVotes < 10) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinSquint}
          // onClick={this.handleClick}
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
    } else if (this.props.upVotes >= 5 && this.props.upVotes < 8) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinBeam}
          // onClick={this.handleClick}
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
    } else if (this.props.upVotes >= 3 && this.props.upVotes < 5) {
      return (
        <FontAwesomeIcon
          icon={faSmileWink}
          // onClick={this.handleClick}
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
    } else if (this.props.upVotes >= 1 && this.props.upVotes < 3) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinWide}
          // onClick={this.handleClick}
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
    } else if (this.props.upVotes === 0) {
      return (
        <FontAwesomeIcon
          icon={faSmile}
          // onClick={this.handleClick}
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
    } else if (this.props.upVotes === -1) {
      return (
        <FontAwesomeIcon
          icon={faFrown}
          // onClick={this.handleClick}
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
    } else if (this.props.upVotes === -2) {
      return (
        <FontAwesomeIcon
          icon={faFlushed}
          // onClick={this.handleClick}
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
    } else if (this.props.upVotes === -3) {
      return (
        <FontAwesomeIcon
          icon={faDizzy}
          // onClick={this.handleClick}
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
          // onClick={this.handleClick}
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
            <Button className='button__up' onClick={this.handleUpVote} />
            <Button className='button__votes' upVotes={this.props.upVotes}>
              {this.props.upVotes}
            </Button>
            <Button className='button__down' onClick={this.handleDownVote} />
          </div>
          <p className='jokeitem__joke'>{this.props.joke}</p>
          {this.getEmoji()}
        </div>
      </div>
    );
  }
}
