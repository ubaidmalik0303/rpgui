import React, { StyleHTMLAttributes } from "react";

type Props = {
  disabled?: boolean;
  golden?: boolean;
  label?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  style?: React.CSSProperties;
  datarpguitype?: string;
};

const index = ({
  golden,
  label,
  defaultValue,
  min,
  max,
  style,
  disabled,
  datarpguitype,
}: Props) => {
  return (
    <>
      <label>{label}</label>
      <input
        disabled={disabled}
        className={`rpgui-slider ${golden && "golden"} `}
        type="range"
        min={min}
        max={max}
        defaultValue={defaultValue}
        style={style}
        data-rpguitype={datarpguitype}
      />
    </>
  );
};

export default index;
