import React from "react";
import Icon from "../Icon";

const IconSection = () => {
  return (
    <div id="icons" className="rpgui-container rpgui-center framed-grey">
      <h1>Icons</h1>
      <p>
        This example shows the built-in icons. These can be easily extended (
        <a href="http://opengameart.org/users/ouren" target="_blank">
          skeletons
        </a>{" "}
        not included).
      </p>
      <hr />
      <img
        src="/skelly2.png"
        style={{
          display: "inline-block",
          width: "160px",
          bottom: 0,
          left: "0px",
          position: "absolute",
        }}
      />
      <img
        src="/skelly2.png"
        style={{
          display: "inline-block",
          width: "160px",
          bottom: 0,
          right: "0px",
          position: "absolute",
          transform: "scaleX(-1)",
        }}
      />
      <Icon icon="sword" />
      <Icon icon="shield" />
      <Icon icon="exclamation" />
      <br />
      <br />
      <Icon icon="potion-red" />
      <Icon icon="potion-green" />
      <Icon icon="potion-blue" />
      <br />
      <br />
      <Icon icon="weapon-slot" />
      <Icon icon="shield-slot" />
      <Icon icon="armor-slot" />
      <br />
      <br />
      <Icon icon="helmet-slot" />
      <Icon icon="ring-slot" />
      <Icon icon="potion-slot" />
      <br />
      <br />
      <Icon icon="magic-slot" />
      <Icon icon="shoes-slot" />
      <Icon icon="empty-slot" />
    </div>
  );
};

export default IconSection;
