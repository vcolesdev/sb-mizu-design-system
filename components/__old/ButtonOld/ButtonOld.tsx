import React, { ReactElement } from "react";
import classnames from "classnames";
import Icon from "../IconOld";
import { useStyles } from "./ButtonOld.styles";
import { mergeClasses } from "../../../utils";

export type ButtonProps = {
  children?: React.ReactNode | ReactElement | string | undefined;
  fullWidth?: boolean | undefined;
  hasIcon?: boolean | undefined;
  iconColor?: string | undefined;
  iconName?: string | undefined;
  iconPosition?: "left" | "right" | undefined;
  iconSize?: number | undefined;
  label?: string;
  role?: "button" | "submit" | "reset" | undefined;
  size?: "sm" | "md" | "lg" | "xl" | undefined;
  squared?: boolean | undefined;
  type?: "solid" | "outline" | "ghost" | undefined;
  variant?: "primary" | "secondary" | "brand" | "success" | "info" | "warning" | "danger" | undefined;
};

function ButtonOld({
  children,
  hasIcon,
  iconColor,
  iconName,
  iconPosition,
  iconSize,
  fullWidth,
  label,
  role,
  size,
  squared,
  type,
  variant,
}: ButtonProps) {
  let button;

  const props = {
    children,
    hasIcon,
    iconColor,
    iconName,
    iconPosition,
    iconSize,
    fullWidth,
    label,
    role,
    size,
    squared,
    type,
    variant,
  };

  const iconPosLeft = iconPosition === "left" && hasIcon;
  const iconPosRight = iconPosition === "right" && hasIcon;

  const { styles } = useStyles(props);
  const buttonStyles = classnames(mergeClasses(styles.base), styles.size, styles.variant || "", styles.options);
  const contentClasses = classnames({
    "ml-2": iconPosLeft,
    "mr-2": iconPosRight,
  });

  button = (
    <button role={role || "button"} className={`flex items-center ${buttonStyles}`}>
      {iconPosLeft && <Icon name={iconName || "LuBeer"} color={iconColor || "#000000"} size={iconSize || 24} />}
      <span className={contentClasses}>{children ? children : label ? label : "Button"}</span>
      {iconPosRight && <Icon name={iconName || "LuBeer"} color={iconColor || "#000000"} size={iconSize || 24} />}
    </button>
  );

  return button;
}

export default ButtonOld;
