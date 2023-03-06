import React, { PropsWithChildren } from "react";

type Props = {
  variant?: string;
};

const index = ({ children, variant }: PropsWithChildren<Props>) => {
  if (variant === "h1") {
    return <h1>{children}</h1>;
  }
  if (variant === "h2") {
    return <h2>{children}</h2>;
  }
  if (variant === "h3") {
    return <h3>{children}</h3>;
  }
  if (variant === "h4") {
    return <h4>{children}</h4>;
  }

  return <h1>{children}</h1>;
};

export default index;
