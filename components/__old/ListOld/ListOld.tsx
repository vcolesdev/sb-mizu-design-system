import React from "react";
import classnames from "classnames";
import { ListProps } from "./ListOld.types";
import { useStyles } from "./ListOld.styles";

function ListOld({ children, nested, titles, type }: ListProps) {
  let element;

  const props = { children, nested, titles, type };
  const { styles } = useStyles(props);

  const classes = classnames(styles.base, styles.nested, styles.nested, styles.titles, styles.type);

  const getElement = (type: ListProps["type"]) => {
    switch (type) {
      case "ordered":
        return "ol";
      case "unordered":
        return "ul";
      default:
        return "div";
    }
  };

  element = React.createElement(getElement(type), { className: `${classes}` }, children);
  return element;
}

export default ListOld;
