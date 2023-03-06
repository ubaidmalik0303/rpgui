import React, { PropsWithChildren } from "react";

const index = ({
  children,
  disabled,
}: PropsWithChildren<{ disabled?: boolean }>) => {
  return (
    <select disabled={disabled} className="rpgui-dropdown">
      {children}
    </select>
  );
};

export default index;
