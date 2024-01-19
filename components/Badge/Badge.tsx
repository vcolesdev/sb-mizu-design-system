import React from "react";
import classnames from "classnames";
import {
  BadgeCorners,
  BadgeProps,
  BadgeSize,
  BadgeType,
  BadgeVariant,
  CORNERS_MAP,
  GHOST_VARIANT_MAP,
  OUTLINE_VARIANT_MAP,
  SIZE_MAP,
  SOLID_VARIANT_MAP,
} from "./Badge.settings";

export default function Badge(props: BadgeProps) {
  const { children, corners, size, variant } = props;

  const layoutClasses: string[] = ["inline-flex", "items-center", "font-medium", "leading-none", "tracking-tight"];

  const badgeClasses = classnames(layoutClasses.join(" "), CORNERS_MAP[corners], SIZE_MAP[size]);

  let typeClasses = "";
  switch (props.type) {
    case BadgeType.solid:
      typeClasses = SOLID_VARIANT_MAP[variant];
      break;
    case BadgeType.outline:
      typeClasses = OUTLINE_VARIANT_MAP[variant];
      break;
    case BadgeType.ghost:
      typeClasses = GHOST_VARIANT_MAP[variant];
      break;
    default:
      typeClasses = SOLID_VARIANT_MAP[variant];
  }

  const classes = classnames(badgeClasses, typeClasses);

  return <span className={classes}>{children || "Badge"}</span>;
}

Badge.defaultProps = {
  corners: BadgeCorners.rounded,
  size: BadgeSize.md,
  type: BadgeType.solid,
  variant: BadgeVariant.primary,
};

Badge.corners = BadgeCorners;
Badge.size = BadgeSize;
Badge.type = BadgeType;
Badge.variant = BadgeVariant;
