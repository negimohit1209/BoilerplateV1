import React from "react";
const Action = props => (
  <button onClick={props.handlePick} disabled={!props.hasOptions} className="big-button">
    what should I do
  </button>
);

export default Action;
