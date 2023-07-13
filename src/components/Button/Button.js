import React, { Component } from "react";
import "../Button/Button.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(this.props.onClick);
    if (!this.props.onClick) return;
    this.props.onClick(e);
  }

  // getColor() {
  //   const { upVotes } = this.props;
  //   let color;
  //   if (upVotes >= 12) {
  //     color = "#4CAF50";
  //   } else if (upVotes >= 10 && upVotes < 12) {
  //     color = "#8BC34A";
  //   } else if (upVotes >= 8 && upVotes < 10) {
  //     color = "#CDDC39";
  //   } else if (upVotes >= 5 && upVotes < 8) {
  //     color = "#FFEB3B";
  //   } else if (upVotes >= 3 && upVotes < 5) {
  //     color = "#FFC107";
  //   } else if (upVotes >= 1 && upVotes < 3) {
  //     color = "#FF9800";
  //   } else if (upVotes === 0) {
  //     color = "#f44336";
  //   } else if (upVotes === -1) {
  //     color = "#ba271c";
  //   } else if (upVotes === -2) {
  //     color = "#942018";
  //   } else if (upVotes === -3) {
  //     color = "#500000";
  //   } else {
  //     color = "#000000";
  //   }
  //   // console.log(color);
  //   return color;
  // }

  render() {
    // if (className === "button__up") {
    //   return (

    //     <FontAwesomeIcon
    //       className='button__up'

    //       icon={faArrowUp}
    //       disabled={disabled}>
    //       {children}
    //     </FontAwesomeIcon>
    //   );
    // }

    // if (className === "button__votes") {
    //   return (
    //     <button
    //       className='button__votes'
    //       style={{ borderColor: this.getColor() }}
    //       disabled={disabled}>
    //       {children}
    //     </button>
    //   );
    // }

    // if (className === "button__down") {
    //   return (
    // <FontAwesomeIcon
    //   className='button__down'
    //   icon={faArrowDown}
    //   disabled={disabled}>
    //   {children}
    // </FontAwesomeIcon>
    //   );
    // }

    // button js ist dumm Komponent: also außer funktion übertragen machts nicht anderes
    // daher verschiebt get color und emoji alle in jokeItem compoent: von Code Inhalt her macht mehr Sinn
    return (
      <button
        className={this.props.className}
        onClick={this.handleClick} // nur für click event
        disabled={this.props.disabled}
        style={this.props.style}>
        {this.props.children}

        {!!this.props.icon && (
          <FontAwesomeIcon icon={this.props.icon}></FontAwesomeIcon>
        )}
      </button>
    );
  }
}
