import React, { Component } from "react";
import Button from "../Button/Button";

import "../JokeItem/JokeItem.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
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
  faArrowUp,
  faArrowDown,
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
    this.getColor = this.getColor.bind(this);
    this.getEmoji = this.getEmoji.bind(this);
  }

  //event -handle (handle and on -> verknupfen, keine Übersprung.)
  handleUpVote() {
    console.log("sfsa");
    this.props.onHandleUpVote(this.props.id);
  }

  handleDownVote() {
    this.props.onHandleDownVote(this.props.id);
  }

  getColor() {
    const { upVotes } = this.props;
    let color;
    if (upVotes >= 12) {
      color = "#4CAF50";
    } else if (upVotes >= 10 && upVotes < 12) {
      color = "#8BC34A";
    } else if (upVotes >= 8 && upVotes < 10) {
      color = "#CDDC39";
    } else if (upVotes >= 5 && upVotes < 8) {
      color = "#FFEB3B";
    } else if (upVotes >= 3 && upVotes < 5) {
      color = "#FFC107";
    } else if (upVotes >= 1 && upVotes < 3) {
      color = "#FF9800";
    } else if (upVotes === 0) {
      color = "#f44336";
    } else if (upVotes === -1) {
      color = "#ba271c";
    } else if (upVotes === -2) {
      color = "#942018";
    } else if (upVotes === -3) {
      color = "#500000";
    } else {
      color = "#000000";
    }
    // console.log(color);
    return color;
  }

  getEmoji() {
    if (this.props.upVotes >= 12) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinSquintTears}
          size='lg'
          className='smiley orange'
        />
      );
    } else if (this.props.upVotes >= 10 && this.props.upVotes < 12) {
      return (
        <FontAwesomeIcon
          icon={faGrinTears}
          size='lg'
          className='smiley orange'
        />
      );
    } else if (this.props.upVotes >= 8 && this.props.upVotes < 10) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinSquint}
          size='lg'
          className='smiley orange'
        />
      );
    } else if (this.props.upVotes >= 5 && this.props.upVotes < 8) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinBeam}
          size='lg'
          className='smiley orange'
        />
      );
    } else if (this.props.upVotes >= 3 && this.props.upVotes < 5) {
      return (
        <FontAwesomeIcon
          icon={faSmileWink}
          size='lg'
          className='smiley orange'
        />
      );
    } else if (this.props.upVotes >= 1 && this.props.upVotes < 3) {
      return (
        <FontAwesomeIcon
          icon={faFaceGrinWide}
          size='lg'
          className='smiley orange'
        />
      );
    } else if (this.props.upVotes === 0) {
      return (
        <FontAwesomeIcon icon={faSmile} size='lg' className='smiley orange' />
      );
    } else if (this.props.upVotes === -1) {
      return (
        <FontAwesomeIcon icon={faFrown} size='lg' className='smiley -one' />
      );
    } else if (this.props.upVotes === -2) {
      return (
        <FontAwesomeIcon icon={faFlushed} size='lg' className='smiley -two' />
      );
    } else if (this.props.upVotes === -3) {
      return (
        <FontAwesomeIcon icon={faDizzy} size='lg' className='smiley -three' />
      );
    } else {
      return (
        <FontAwesomeIcon icon={faAngry} size='lg' className='smiley -four' />
      );
    }
  }

  render() {
    return (
      <div>
        <div className='jokeitem'>
          <div className='jokeitem__button'>
            <Button
              className='button__up'
              onClick={this.handleUpVote}
              icon={faArrowUp}
            />
            <Button
              className='button__votes'
              upVotes={this.props.upVotes}
              style={{ borderColor: this.getColor() }}>
              {this.props.upVotes}
            </Button>
            <Button
              className='button__down'
              onClick={this.handleDownVote}
              icon={faArrowDown}
            />
          </div>
          <p className='jokeitem__joke'>{this.props.joke}</p>
          {this.getEmoji()}
        </div>
      </div>
    );
  }
}
