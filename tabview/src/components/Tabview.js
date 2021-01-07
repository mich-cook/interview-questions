import React, { Component } from "react";

export default class Tabview extends Component {

  render() {
    return (
      <div class="tabview">
        <ul class="tabs">
          {this.props.titles.map(title => <li><button>{title}</button></li>)}
        </ul>
        <ul class="contents">
          {this.props.contents.map(content => <li>{content}</li>)}
        </ul>
      </div>
    );
  }

};
