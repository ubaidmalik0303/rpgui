import React from "react";
import Icon from "../Icon";
import TextInput from "../TextInput";
import Slider from "../Slider";
import Button from "../Button";
import Radio from "../Radio";
import Checkbox from "../Checkbox";
import ProgressBar from "../PropgressBar";
import List from "../Lists";
import Dropdown from "../Dropdown";

const DisbaledSection = () => {
  return (
    <div id="disabled" className="rpgui-container framed-grey">
      <h1>Disabled Elements</h1>
      <p>
        All RPGUI elements can be disabled using the "disable" attribute. Here's
        an example of disabled RPGUI elements.
      </p>
      <hr />
      {/* simple inputs */}
      <div style={{ width: "42%", float: "left" }}>
        <h1>Text Input</h1>
        <TextInput
          disabled
          label="Your hero name:"
          placeholder="Hero name"
          defaultValue="Bob"
        />
        <br />
        <br />
        <TextInput
          disabled
          label="Your hero last name:"
          placeholder="Hero last name"
          defaultValue="The Destroyer"
        />
        <br />
        <br />
        <TextInput
          label="Your hero bio:"
          disabled
          textarea
          rows={3}
          cols={50}
          defaultValue={"Bob The Destroyer likes to destroy stuff."}
        />
        <h1>Sliders:</h1>
        <Slider
          disabled
          min={0}
          max={10}
          defaultValue={8}
          style={{ width: "100%" }}
          datarpguitype="slider"
        />
        <p>Golden slider:</p>
        <Slider
          disabled
          golden
          min={1}
          max={5}
          defaultValue={3}
          style={{ width: "100%" }}
          datarpguitype="slider"
        />
        <h1>Icons</h1>
        <div className="rpgui-center">
          <Icon disabled icon="sword" />
          <Icon disabled icon="shield" />
          <Icon disabled icon="exclamation" />
          <br />
          <br />
          <Icon disabled icon="potion-red" />
          <Icon disabled icon="potion-green" />
          <Icon disabled icon="potion-blue" />
          <br />
          <br />
          <Icon disabled icon="weapon-slot" />
          <Icon disabled icon="shield-slot" />
          <Icon disabled icon="armor-slot" />
          <br />
          <br />
          <Icon disabled icon="helmet-slot" />
          <Icon disabled icon="ring-slot" />
          <Icon disabled icon="potion-slot" />
          <br />
          <br />
          <Icon disabled icon="magic-slot" />
          <Icon disabled icon="shoes-slot" />
          <Icon disabled icon="empty-slot" />
        </div>
      </div>
      <div style={{ width: "42%", float: "right" }}>
        <h1>Buttons</h1>
        <Button disabled style={{ width: "100%" }}>
          <p>Button</p>
        </Button>
        <br />
        <br />
        <Button disabled golden style={{ width: "100%" }}>
          <p>Gold Button</p>
        </Button>
        <br />
        <br />
        <h1>Radio/Check</h1>
        <br />
        <div>
          <Radio
            label="Male"
            disabled
            defaultChecked
            name="sex"
            defaultValue="male"
          />
          <br />
          <Radio label="Female" disabled name="sex" defaultValue="female" />
          <br />
        </div>
        <div>
          <Radio
            label="Male"
            disabled
            golden
            defaultChecked
            name="sex2"
            defaultValue="male"
          />
          <br />
          <Radio
            label="Female"
            disabled
            golden
            defaultChecked
            name="sex2"
            defaultValue="female"
          />
          <br />
        </div>
        <br />
        <Checkbox disabled defaultChecked label="Checkbox 1." />
        <br />
        <Checkbox disabled defaultChecked label="Checkbox 2." />
        <h1>Dropdown</h1>
        <Dropdown disabled>
          <option value="Warrior" selected>
            Warrior
          </option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
          <option value="Ranger">Ranger</option>
        </Dropdown>
        <br />
        <h1>List:</h1>
        <List disabled>
          <option value="Blacksmith">Blacksmith</option>
          <option value="Merchant">Merchant</option>
          <option value="City Guard">City Guard</option>
          <option value="Alchemist">Alchemist</option>
          <option value="Explorer">Explorer</option>
          <option value="Thug">Thug</option>
          <option value="Mercenary">Mercenary</option>
          <option value="Royalty">Royalty</option>
          <option value="Gladiator">Gladiator</option>
        </List>
        <h1>Progress bar:</h1>
        <ProgressBar dataValue="0.4" color="red" disabled />
      </div>
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default DisbaledSection;
