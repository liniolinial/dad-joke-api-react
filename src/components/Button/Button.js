import React, { Component } from "react";
import "../Button/Button.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUp, faArrowDown);

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.props.onClick) return;
    this.props.onClick(e);
  }

  render() {
    const { className, children, disabled } = this.props;
    if (className === "button__up") {
      return (
        <FontAwesomeIcon
          className='button__up'
          icon={faArrowUp}
          onClick={this.handleClick}
          disabled={disabled}>
          {children}
        </FontAwesomeIcon>
      );
    }

    if (className === "button__vote") {
      return (
        <button
          className='button__vote'
          onClick={this.handleClick}
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

// -------------
// handleClick(e) {
//   if (!this.props.onClick) return;
//   this.props.onClick(e);
// }

// render() {
//   const { className, children, disabled } = this.props;

//   if (className === "button__up") {
//     return (
//       <button
//         className="button__up"
//         onClick={this.handleClick}
//         disabled={disabled}
//       >
//         {children}
//       </button>
//     );
//   }

//   if (className === "button__down") {
//     return (
//       <button
//         className="button__down"
//         onClick={this.handleClick}
//         disabled={disabled}
//       >
//         {children}
//       </button>
//     );
//   }

//   // Standard-JSX für andere Klassen
//   return (
//     <button
//       className="button__default"
//       onClick={this.handleClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// }
// }
