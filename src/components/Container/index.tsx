import React, { PropsWithChildren } from "react";

type Props = {
  golden?: boolean;
  golden2?: boolean;
  framed?: boolean;
  grey?: boolean;
  style?: React.CSSProperties;
};

const index = ({
  children,
  golden,
  golden2,
  framed,
  grey,
  style,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`rpgui-container ${framed && "framed"} ${
        golden && "framed-golden"
      } ${golden2 && "framed-golden-2"} ${grey && "framed-grey"}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default index;
