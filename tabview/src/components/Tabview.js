import React, { Component } from "react";

import "./Tabview.css";

export default class Tabview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.initialtab
    };
  }

  render() {
    return (
      <div className="tabview">
        <ul className="tabs">
          {this.props.titles.map((title, i) => {
            return <li key={i} className={((this.state.selected === i) ? `selected` : `` )}><button>{title}</button></li>;
          })}
        </ul>
        <ul className="contents">
          {this.props.contents.map((content, i) => {
            return <li key={i} className={((this.state.selected === i) ? `selected` : `` )}>{content}</li>;
          })}
        </ul>
      </div>
    );
  }

};
