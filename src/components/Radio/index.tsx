import React from "react";

type Props = {
  disabled?: boolean;
  name?: string;
  defaultChecked?: boolean;
  defaultValue?: string | number | readonly string[] | undefined;
  label?: string;
  golden?: boolean;
};

const index = ({
  defaultChecked,
  defaultValue,
  name,
  label,
  golden,
  disabled,
}: Props) => {
  return (
    <>
      <input
        disabled={disabled}
        className={`rpgui-radio ${golden && "golden"}`}
        name={name}
        defaultValue={defaultValue}
        defaultChecked={defaultChecked}
        type="radio"
      />
      <label>{label}</label>
    </>
  );
};

export default index;
