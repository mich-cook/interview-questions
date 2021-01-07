import React, { Component } from "react";

import "./Tabview.css";

export default class Tabview extends Component {

  render() {
    return (
      <div className="tabview">
        <ul className="tabs">
          {this.props.titles.map((title, i) => <li key={i}><button>{title}</button></li>)}
        </ul>
        <ul className="contents">
          {this.props.contents.map((content, i) => <li key={i}>{content}</li>)}
        </ul>
      </div>
    );
  }

};
