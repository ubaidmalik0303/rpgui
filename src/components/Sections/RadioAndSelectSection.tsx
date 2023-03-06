import React from "react";
import Checkbox from "../Checkbox";
import Radio from "../Radio";

const RadioAndSelectSection = () => {
  return (
    <div id="radio-and-check" className="rpgui-container framed-grey">
      <h1>Radio and Check boxes</h1>
      <p>This example shows radio buttons and check boxes.</p>
      <hr />
      <div style={{ float: "left", width: "24.5%" }}>
        <Checkbox label="Checkbox 1." defaultChecked  />
        <Checkbox label="Checkbox 2." />
        <Checkbox label="Checkbox 3." />
      </div>
      <div style={{ float: "left", width: "24.5%" }}>
        <Checkbox golden label="Checkbox 1." defaultChecked />
        <Checkbox golden label="Checkbox 2." />
        <Checkbox golden label="Checkbox 3." />
      </div>
      <div style={{ float: "left", width: "24.5%" }}>
        <Radio label="Radio 1" name="radio" defaultChecked />
        <Radio label="Radio 2" name="radio" />
        <Radio label="Radio 3" name="radio" />
      </div>
      <div style={{ float: "left", width: "24.5%" }}>
        <Radio golden label="Radio 1" name="radio_golden" defaultChecked />
        <Radio golden label="Radio 2" name="radio_golden" />
        <Radio golden label="Radio 3" name="radio_golden" />
      </div>
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default RadioAndSelectSection;
