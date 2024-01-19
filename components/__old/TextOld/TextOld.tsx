import React from "react";
import classnames from "classnames";
import { TextProps } from "./TextOld.types";
import { useStyles } from "./TextOld.styles";

function TextOld({ children, color, last, mbSize, size, style, uppercase, weight }: TextProps) {
  const props = { color, last, mbSize, size, style, uppercase, weight };
  const { styles } = useStyles(props);

  let classes = classnames(styles.base, styles.mbSize, styles.size, styles.fontStyle, styles.options);

  return (
    <p className={classes} style={{ color: color }}>
      {children}
    </p>
  );
}

export default TextOld;
