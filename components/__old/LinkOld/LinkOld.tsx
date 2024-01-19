import React from "react";
import classnames from "classnames";
import { LinkProps } from "./LinkOld.types";
import { useStyles } from "./LinkOld.styles";
import { mergeClasses } from "../../../utils";

function LinkOld({ children, color, external, href, underline }: LinkProps) {
  const props = { color, external, href, underline };
  const { styles } = useStyles(props);

  const classes = classnames(mergeClasses(styles.base), styles.options);

  return (
    <a className={classes} href={href} style={{ color: color }} target={external ? "_blank" : undefined}>
      {children}
    </a>
  );
}

export default LinkOld;
