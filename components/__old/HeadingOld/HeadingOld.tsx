import React from "react";
import classnames from "classnames";
import { HeadingOldProps } from "./HeadingOld.types";
import { useStyles } from "./HeadingOld.styles";

function HeadingOld({ children, color, element, size, uppercase }: HeadingOldProps) {
  let classes: string;

  const props = { children, color, element, size, uppercase };
  const { styles } = useStyles(props);

  classes = classnames(styles.base, styles.sizes, styles.options);

  return React.createElement(
    element,
    {
      className: `${classes}`,
      style: {
        color: color || "inherit",
      },
    },
    children
  );
}

export default HeadingOld;
