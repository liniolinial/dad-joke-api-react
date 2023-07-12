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
        <FontAwesomeIcon icon={faFaceGrinWide} className='smiley orange' />
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
