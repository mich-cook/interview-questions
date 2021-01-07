import React from "react";

export default (props) =>
    <li data-key={props.offset} className={((props.selected === true) ? `selected` : `` )} onClick={props.handleClick}>
      <button>{props.title}</button>
    </li>;
