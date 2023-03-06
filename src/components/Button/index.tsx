import React, { PropsWithChildren } from "react";

type Props = {
  link?: string;
  pressed?: boolean;
  hover?: boolean;
  golden?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  cursor?:
    | "rpgui-cursor-default"
    | "rpgui-cursor-point"
    | "rpgui-cursor-select"
    | "rpgui-cursor-grab-open"
    | "rpgui-cursor-grab-close";
};

const index = ({
  children,
  link,
  pressed,
  hover,
  golden,
  disabled,
  style,
  cursor,
}: PropsWithChildren<Props>) => {
  return (
    <a href={link}>
      <button
        disabled={disabled}
        type="button"
        className={`rpgui-button ${pressed && "down"} ${cursor && cursor} ${
          hover && "hover"
        } ${golden && "golden"}`}
        style={style}
      >
        <span>{children}</span>
      </button>
    </a>
  );
};

export default index;
