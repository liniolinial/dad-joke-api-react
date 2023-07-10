import React, { Component } from "react";
import Button from "../Button/Button";
import fetchNewJokes from "../../services/fetchNewJokes";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { initialDataLoaded: false, page: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("click");
    fetchNewJokes(
      this.state.page,
      this.props.onUpdateJokes,
      this.props.onUpdateLoaded,
    );
  }

  render() {
    return (
      <aside className='jokebox-flex__left'>
        <h1>Dad Jokes</h1>
        <p>emoji placeholder{!this.props.isLoaded}</p>
        <Button onClick={this.handleClick} disabled={!this.props.isLoaded}>
          New Jokes
        </Button>
      </aside>
    );
  }
}
