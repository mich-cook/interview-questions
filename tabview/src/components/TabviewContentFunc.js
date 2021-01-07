import React from "react";

const TabviewContentFunc = (props) =>
    <li data-key={props.offset} className={((props.selected === true) ? `selected` : `` )}>{props.content}</li>;

export default TabviewContentFunc;
