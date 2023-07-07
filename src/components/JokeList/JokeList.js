import React, { Component } from "react";
import JokeItem from "../JokeItem/JokeItem";
import "./JokeList.scss";

export default class JokeList extends Component {
  // mindmap
  // joke emoji => in einer array sein: insgesamt dann 8 emoji und ab +8 bleibt gleich
  //   const NUM_DICE = 5;
  // class Game extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       dice: Array.from({ length: NUM_DICE }).map((d) =>
  //        array->emoji reinpacken
  //       ),

  render() {
    return (
      <div className='JokeList'>
        <div className='jokebox-flex__right'>
          {this.props.jokes.map((j) => (
            <JokeItem key={j.id} joke={j.joke} />
          ))}
        </div>
      </div>
    );
  }
}
