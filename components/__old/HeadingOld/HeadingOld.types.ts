import React from "react";

export type HeadingOldProps = {
  children: React.ReactNode;
  color?: string;
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | number;
  uppercase?: boolean;
};
