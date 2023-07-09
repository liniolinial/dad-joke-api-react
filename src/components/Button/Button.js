import React, { Component } from "react";

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
    return (
      <button onClick={this.handleClick} disabled={this.props.disabled}>
        {this.props.children}
      </button>
    );
  }
}
