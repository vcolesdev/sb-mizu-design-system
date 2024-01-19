import React from "react";
import { ListItemProps } from "@/components/__old/ListItemOld/ListItem.types";

export type ListProps = {
  children?: React.ReactNode;
  items?: ListItemProps[];
  nested?: boolean | undefined;
  titles?: boolean | undefined;
  type?: "none" | "ordered" | "unordered" | undefined;
};
