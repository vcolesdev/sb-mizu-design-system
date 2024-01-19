import React from "react";

export type LinkProps = {
  children: React.ReactNode;
  color?: string | "inherit";
  external?: boolean;
  href?: string | "#";
  underline?: boolean;
};
