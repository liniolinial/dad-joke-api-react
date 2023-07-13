import React, { Component } from "react";
import Button from "../Button/Button";
import "../Sidebar/Sidebar.css";

import fetchNewJokes from "../../services/fetchNewJokes";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { initialDataLoaded: false, page: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log(length);
    this.setState((st) => ({
      page: st.page + 1,
    }));
    fetchNewJokes(
      this.state.page,
      this.props.onUpdateJokes,
      this.props.onUpdateLoaded,
    );
  }

  render() {
    return (
      <aside className='sidebar'>
        <h1 className='sidebar__title'>
          <span>Dad </span>JOKES
        </h1>
        <img
          src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'
          alt='emoji'
          {...!this.props.isLoaded}></img>
        <Button
          className='button__getmore'
          onClick={this.handleClick}
          disabled={!this.props.isLoaded}>
          New Jokes
        </Button>
      </aside>
    );
  }
}
