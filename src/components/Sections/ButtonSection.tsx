import React from "react";
import Button from "../Button";

const ButtonSection = () => {
  return (
    <div id="buttons" className="rpgui-container framed-grey">
      <h1>Buttons</h1>
      <p>This example shows the basic buttons.</p>
      <hr />
      <div className="rpgui-center" style={{ float: "left", width: "49%" }}>
        <Button>Regular button</Button>
        <Button pressed>Button pressed</Button>
        <Button hover>Button hover</Button>
      </div>
      <div className="rpgui-center" style={{ float: "right", width: "49%" }}>
        <Button golden>Golden button</Button>
        <Button golden pressed>
          Golden down
        </Button>
        <Button golden hover>
          Golden hover
        </Button>
      </div>
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default ButtonSection;
