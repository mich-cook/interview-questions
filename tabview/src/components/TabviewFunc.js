import React, { useState } from "react";

import TabviewTabFunc from "./TabviewTabFunc.js";
import TabviewContentFunc from "./TabviewContentFunc.js";

import "./Tabview.css";  // same as all the others

export default (props) => {

  const [ selected, setSelected ] = useState(props.initialtab);

  function handleTabClick(e) {
    const intOffset = parseInt(e.target.parentElement.getAttribute("data-key"));
    setSelected(intOffset);
  }

  return (
    <div className="tabview">
      <ul className="tabs">
        {props.titles.map((title, i) => {
          return <TabviewTabFunc key={i} offset={i} title={title} selected={(selected === i)} handleClick={handleTabClick} />;
        })}
      </ul>
      <ul className="contents">
        {props.contents.map((content, i) => {
          return <TabviewContentFunc key={i} offset={i} content={content} selected={(selected === i)}/>;
        })}
      </ul>
    </div>
  );

};
