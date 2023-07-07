import React, { Component } from "react";
import Button from "./Button";
// import axios from "axios";
import fetchNewJokes from "../services/fetchNewJokes";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { initialDataLoaded: false };
    // this.getNewJokes = this.getNewJokes.bind(this);
    // !this.state.initialDataLoaded && this.getNewJokes(true);
    this.handleClick = this.handleClick.bind(this);
  }

  //   getNewJokes(loadInitialData) {
  //     if (loadInitialData) {
  //       this.setState({
  //         initialDataLoaded: true,
  //       });
  //     }
  //     // loading btn: false->true->after loading->false
  //     this.props.onUpdateLoaded(false);

  //     // first loading then call api

  //     const fetches = [];
  //     const data = [];
  //     //load data
  //     for (let i = 0; i < 10; i++) {
  //       let request = axios.get("https://icanhazdadjoke.com/", {
  //         headers: { Accept: "application/json" },
  //       });

  //       request.then((response) => {
  //         const { id, joke } = response.data;
  //         // deny jokes which have duplicated id
  //         const isDuplicate = data.some((j) => j.id === id);

  //         if (!isDuplicate) {
  //           data.push({
  //             id,
  //             joke,
  //           });
  //         }
  //       });

  //       fetches.push(request);
  //     }

  //     Promise.all(fetches).then(() => {
  //       this.props.onUpdateLoaded(true);
  //       this.props.onUpdateJokes(data);
  //     });
  //     // loading btn: after loading->false
  //     // this.setState({ isLoaded: false });
  //   }

  handleClick() {
    console.log("click ");
    fetchNewJokes(this.props.onUpdateJokes, this.props.onUpdateLoaded);
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
