import React from "react";
import classnames from "classnames";
import {
  ButtonCorners,
  ButtonRole,
  ButtonSize,
  ButtonType,
  ButtonVariant,
  ButtonProps,
  CORNERS_MAP,
  GHOST_VARIANT_MAP,
  OUTLINE_VARIANT_MAP,
  SIZE_MAP,
  SOLID_VARIANT_MAP,
} from "./Button.settings";

export default function Button(props: ButtonProps) {
  const { children, corners, role, size, type, variant } = props;

  const layoutClasses = [
    "border",
    "cursor-pointer",
    "font-semibold",
    "text-center",
    "transition",
    "tracking-wide",
    "ease-in-out",
    "duration-250",
  ];

  const buttonClasses = classnames(layoutClasses.join(" "), CORNERS_MAP[corners], SIZE_MAP[size]);

  let typeClasses = "";
  switch (props.type) {
    case ButtonType.solid:
      typeClasses = SOLID_VARIANT_MAP[variant];
      break;
    case ButtonType.outline:
      typeClasses = OUTLINE_VARIANT_MAP[variant];
      break;
    case ButtonType.ghost:
      typeClasses = GHOST_VARIANT_MAP[variant];
      break;
    default:
      typeClasses = SOLID_VARIANT_MAP[variant];
  }

  const classes = classnames(buttonClasses, typeClasses);

  return (
    <button type={role} className={classes}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  corners: ButtonCorners.pill,
  role: ButtonRole.button,
  size: ButtonSize.md,
  type: ButtonType.solid,
  variant: ButtonVariant.primary,
};

Button.corners = ButtonCorners;
Button.role = ButtonRole;
Button.size = ButtonSize;
Button.type = ButtonType;
Button.variant = ButtonVariant;
