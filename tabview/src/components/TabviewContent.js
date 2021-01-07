import React, { Component } from "react";

export default class TabviewContent extends Component {

  render() {
    return (
      <li data-key={this.props.offset} className={((this.props.selected === true) ? `selected` : `` )}>{this.props.content}</li>
    );
  }

};
