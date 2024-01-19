import React from "react";

export type ListItemProps = {
  children?: React.ReactNode;
  content: string | React.ReactNode;
  items?: ListItemProps[] | undefined;
  title?: string | React.ReactNode | undefined;
  type?: "none" | "ordered" | "unordered" | undefined;
};
