import React from "react";

type Props = {
  disabled?: boolean;
  label?: string;
  defaultChecked?: boolean;
  golden?: boolean;
};

const index = ({ defaultChecked, label, golden, disabled }: Props) => {
  return (
    <>
      <input
        disabled={disabled}
        className={`rpgui-checkbox ${golden && "golden"}`}
        type="checkbox"
        defaultChecked={defaultChecked}
      />
      <label>{label}</label>
    </>
  );
};

export default index;
