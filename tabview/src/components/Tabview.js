import React, { Component } from "react";

import "./Tabview.css";

export default class Tabview extends Component {

  render() {
    return (
      <div className="tabview">
        <ul className="tabs">
          {this.props.titles.map((title, i) => {
            return <li key={i} className={((this.props.initialtab === i) ? `selected` : `` )}><button>{title}</button></li>;
          })}
        </ul>
        <ul className="contents">
          {this.props.contents.map((content, i) => {
            return <li key={i} className={((this.props.initialtab === i) ? `selected` : `` )}>{content}</li>;
          })}
        </ul>
      </div>
    );
  }

};
