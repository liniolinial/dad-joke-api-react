import React, { Component } from "react";
import Button from "../Button/Button";
import "../Sidebar/Sidebar.scss";

import fetchNewJokes from "../../services/fetchNewJokes";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { initialDataLoaded: false, page: 2 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("click");
    fetchNewJokes(
      this.setState((st) => ({
        page: st.page + 1,
      })),
      this.state.page,
      this.props.onUpdateJokes,
      this.props.onUpdateLoaded,
    );
  }

  render() {
    return (
      <aside className='jokebox-flex-left'>
        <h1>
          <span>Dad</span>Jokes
        </h1>
        <img
          className='jokebox-flex-left__laughing-emoji'
          src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'
          alt='emoji'
          {...!this.props.isLoaded}></img>

        <Button onClick={this.handleClick} disabled={!this.props.isLoaded}>
          New Jokes
        </Button>
      </aside>
    );
  }
}
