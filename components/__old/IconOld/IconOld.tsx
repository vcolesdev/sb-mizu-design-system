import React from "react";
import * as LucideIcons from "react-icons/lu";
import * as IonIcons from "react-icons/io5";

export type IconProps = {
  name: string | number | symbol | any;
  color: string;
  size: number;
  type?: "Ion" | "Lucide" | undefined;
};

function IconOld({ name, color, size, type }: IconProps) {
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons];
  const IonIcon = IonIcons[name as keyof typeof IonIcons];

  switch (type) {
    case "Ion":
      return <IonIcon name={name} color={color} size={size} />;
    case "Lucide":
      return <LucideIcon name={name} color={color} size={size} />;
    case undefined:
      return <LucideIcon name={name} color={color} size={size} />;
    default:
      return <LucideIcon name={name} color={color} size={size} />;
  }
}

export default IconOld;
