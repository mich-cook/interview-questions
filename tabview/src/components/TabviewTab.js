import React, { Component } from "react";

export default class TabviewTab extends Component {

  render() {
    return (
      <li data-key={this.props.offset} className={((this.props.selected === true) ? `selected` : `` )} onClick={this.props.handleClick}>
        <button>{this.props.title}</button>
      </li>
    );
  }

};
