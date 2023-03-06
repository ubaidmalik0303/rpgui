import React from "react";

type Props = {
  dataValue?: string;
  id?: string;
  color?: "red" | "blue" | "green";
  label?: string;
  disabled?: boolean;
};

const index = ({ color, dataValue, id, label, disabled }: Props) => {
  return (
    <>
      <label>{label}</label>
      <div
        id={id || "hp-bar"}
        data-value={dataValue}
        className={`rpgui-progress ${disabled && "rpgui-disabled"} ${
          color && color
        }`}
      />
    </>
  );
};

export default index;
