import React from "react";
import ProgressBar from "../PropgressBar";

const ProgressSection = () => {
  return (
    <div id="progress" className="rpgui-container framed-grey">
      <h1>Progress Bars</h1>
      <p>This example shows the RPGUI progress bar class.</p>
      <hr />
      <div style={{ width: "40%", marginLeft: "30%" }}>
        <ProgressBar label="Health:" id="hp-bar" dataValue="0.4" color="red" />
        <ProgressBar label="Mana:" id="mana-bar" dataValue="0.8" color="blue" />
        <ProgressBar
          label="Stamina:"
          id="stamina-bar"
          dataValue="0.2"
          color="green"
        />
        <ProgressBar label="Experience:" id="stamina-bar" dataValue="0.5" />
      </div>
    </div>
  );
};

export default ProgressSection;
