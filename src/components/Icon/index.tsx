import React from "react";

type Props = {
  icon:
    | "sword"
    | "shield"
    | "exclamation"
    | "potion-red"
    | "potion-green"
    | "potion-blue"
    | "weapon-slot"
    | "shield-slot"
    | "armor-slot"
    | "helmet-slot"
    | "ring-slot"
    | "potion-slot"
    | "magic-slot"
    | "shoes-slot"
    | "empty-slot";
  disabled?: boolean;
};

const index = ({ icon, disabled }: Props) => {
  return (
    <div className={`rpgui-icon ${disabled && "rpgui-disabled"} ${icon}`} />
  );
};

export default index;
