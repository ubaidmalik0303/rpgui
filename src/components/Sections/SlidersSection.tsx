import React from "react";
import Slider from "../Slider";

const SlidersSection = () => {
  return (
    <div id="sliders" className="rpgui-container rpgui-center framed-grey">
      <h1>Sliders</h1>
      <p>
        This example shows the sliders class, which replaces the "range" input
        element.
      </p>
      <hr />
      <div style={{ width: "60%", marginLeft: "20%" }}>
        <Slider
          label="Slider"
          min={0}
          max={10}
          defaultValue={5}
          style={{ width: "100%" }}
        />
        <br />
        <br />
        <Slider
          golden
          label="Slider"
          min={0}
          max={10}
          defaultValue={5}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default SlidersSection;
