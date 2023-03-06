import React from "react";
import Button from "../Button";

const CursorSection = () => {
  return (
    <div id="cursors" className="rpgui-container framed-grey rpgui-center">
      <h1>Cursors</h1>
      <p>This example shows the basic cursors.</p>
      <hr />
      <Button cursor="rpgui-cursor-default" style={{ width: "30%" }}>
        <p>Default</p>
      </Button>
      <Button cursor="rpgui-cursor-point" style={{ width: "30%" }}>
        <p>Pointer</p>
      </Button>
      <Button cursor="rpgui-cursor-select" style={{ width: "30%" }}>
        <p>Text Select</p>
      </Button>
      <Button cursor="rpgui-cursor-grab-open" style={{ width: "30%" }}>
        <p>Grab Open</p>
      </Button>
      <Button cursor="rpgui-cursor-grab-close" style={{ width: "30%" }}>
        <p>Grab Close</p>
      </Button>
    </div>
  );
};

export default CursorSection;
