import React from "react";
import classnames from "classnames";
import { ListItemProps } from "./ListItemOld.types";
import { useStyles } from "./ListItemOld.styles";

function ListItemOld({ children, content, items, title }: ListItemProps) {
  let element;

  const props = { children, content, items, title };
  const { styles } = useStyles(props);

  const classes = classnames(styles.base);
  const titleClasses = classnames(styles.title);
  const contentClasses = classnames(styles.content);

  element = title ? (
    <li className={classes}>
      <div>
        <h4 className={titleClasses}>{title}</h4>
        <div className={contentClasses}>{content}</div>
      </div>
      {children}
    </li>
  ) : (
    <li>
      <span>{content}</span>
      {children}
    </li>
  );

  return element;
}

export default ListItemOld;
