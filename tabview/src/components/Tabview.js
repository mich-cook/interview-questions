import React, { Component } from "react";

import "./Tabview.css";

export default class Tabview extends Component {

  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.state = {
      selected: this.props.initialtab
    };
  }

  handleTabClick(e) {
    const intOffset = parseInt(e.target.parentElement.getAttribute("data-key"));
    this.setState({ "selected": intOffset });
  }

  render() {
    return (
      <div className="tabview">
        <ul className="tabs">
          {this.props.titles.map((title, i) => {
            return <li key={i} data-key={i} onClick={this.handleTabClick} className={((this.state.selected === i) ? `selected` : `` )}><button>{title}</button></li>;
          })}
        </ul>
        <ul className="contents">
          {this.props.contents.map((content, i) => {
            return <li key={i} data-key={i} className={((this.state.selected === i) ? `selected` : `` )}>{content}</li>;
          })}
        </ul>
      </div>
    );
  }

};
