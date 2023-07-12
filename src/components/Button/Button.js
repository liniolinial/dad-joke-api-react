import React, { Component } from "react";
import "../Button/Button.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUp, faArrowDown);

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  handleClick(e) {
    if (!this.props.onClick) return;
    this.props.onClick(e);
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
      color = "#2e0806";
    } else {
      color = "#080100";
    }
    // console.log(color);
    return color;
  }

  render() {
    const { className, children, disabled } = this.props;
    if (className === "button__up") {
      return (
        <FontAwesomeIcon
          className='button__up'
          icon={faArrowUp}
          style={{
            color: "#bababa",
            cursor: "pointer",
          }}
          onClick={this.handleClick}
          disabled={disabled}>
          {children}
        </FontAwesomeIcon>
      );
    }

    if (className === "button__votes") {
      return (
        <button
          className='button__votes'
          style={{ borderColor: this.getColor() }}
          disabled={disabled}>
          {children}
        </button>
      );
    }

    if (className === "button__down") {
      return (
        <FontAwesomeIcon
          className='button__down'
          icon={faArrowDown}
          style={{
            color: "#bababa",
            cursor: "pointer",
          }}
          onClick={this.handleClick}
          disabled={disabled}>
          {children}
        </FontAwesomeIcon>
      );
    }

    return (
      <button
        className='button__getmore'
        onClick={this.handleClick}
        disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
}
