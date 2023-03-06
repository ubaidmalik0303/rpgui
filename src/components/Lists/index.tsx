import React, { PropsWithChildren } from "react";

const index = ({
  children,
  disabled,
}: PropsWithChildren<{ disabled?: boolean }>) => {
  return (
    <select
      disabled={disabled}
      className="rpgui-list"
      id="background-select"
      size={5}
    >
      {children}
    </select>
  );
};

export default index;
