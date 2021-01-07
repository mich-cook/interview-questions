import React, { Component } from "react";

import TabviewTab from "./TabviewTab.js";
import TabviewContent from "./TabviewContent.js";

import "./Tabview.css";  // same as all the others

export default class TabviewMulti extends Component {

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
            return <TabviewTab key={i} offset={i} title={title} selected={(this.state.selected === i)} handleClick={this.handleTabClick} />;
          })}
        </ul>
        <ul className="contents">
          {this.props.contents.map((content, i) => {
            return <TabviewContent key={i} offset={i} content={content} selected={(this.state.selected === i)}/>;
          })}
        </ul>
      </div>
    );
  }

};
