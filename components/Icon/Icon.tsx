import React, { ReactNode } from "react";
import { LuIcons, IoIcons } from "./icons";
import { LuIconNames, IoIconNames } from "./icons";

enum IconType {
  Ion = "Ion",
  Lucide = "Lucide",
}

type IconProps = {
  color: string;
  name: string;
  size: number;
  type: IconType;
};

export default function Icon(props: IconProps) {
  let iconElement: ReactNode;

  const { color, name, size, type } = props;

  const LuIcon = LuIcons[name as keyof typeof LuIcons];
  const IoIcon = IoIcons[name as keyof typeof IoIcons];

  switch (type) {
    case IconType.Ion:
      iconElement = <IoIcon name={name} color={color} size={size} />;
      break;
    case IconType.Lucide:
      iconElement = <LuIcon name={name} color={color} size={size} />;
      break;
    default:
      iconElement = <LuIcon name={name} color={color} size={size} />;
  }

  return iconElement;
}

Icon.defaultProps = {
  color: "#000000",
  name: "LuArrowRight",
  size: 24,
  type: IconType.Lucide,
};

Icon.type = IconType;

export { IconType, LuIconNames, IoIconNames };
