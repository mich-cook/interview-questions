import React from "react";

const TabviewTabFunc = (props) =>
    <li data-key={props.offset} className={((props.selected === true) ? `selected` : `` )} onClick={props.handleClick}>
      <button>{props.title}</button>
    </li>;

export default TabviewTabFunc;
