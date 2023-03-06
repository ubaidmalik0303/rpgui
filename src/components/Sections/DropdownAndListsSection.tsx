import React from "react";
import List from "../Lists";
import Dropdown from "../Dropdown";

const DropdownAndListsSection = () => {
  return (
    <div id="drop-and-list" className="rpgui-container framed-grey">
      <h1>Dropdown &amp; Lists</h1>
      <p>
        This example shows the dropdown (aka combobox) and the list widgets.
        These elements are made from simple "select" with "options" and rpgui
        class.
      </p>
      <hr />
      <div style={{ float: "left", width: "40%" }}>
        <p>Dropdown:</p>
        <Dropdown>
          <option value="Warrior" selected>
            Warrior
          </option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
          <option value="Ranger">Ranger</option>
        </Dropdown>
      </div>
      <div style={{ float: "right", width: "40%" }}>
        <p>List:</p>
        <List>
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
      </div>
      <div style={{ clear: "both" }} />
    </div>
  );
};

export default DropdownAndListsSection;
