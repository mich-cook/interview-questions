import React, { Component } from "react";

export default class Tabview extends Component {

  render() {
    return (
      <div className="tabview">
        <ul className="tabs">
          {this.props.titles.map(title => <li><button>{title}</button></li>)}
        </ul>
        <ul className="contents">
          {this.props.contents.map(content => <li>{content}</li>)}
        </ul>
      </div>
    );
  }

};
