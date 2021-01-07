import React from "react";

export default (props) =>
    <li data-key={props.offset} className={((props.selected === true) ? `selected` : `` )}>{props.content}</li>;
