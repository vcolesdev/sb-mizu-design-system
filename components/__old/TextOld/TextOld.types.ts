import React from "react";

export type TextProps = {
  children: React.ReactNode;
  color?: string | "inherit";
  last?: boolean;
  mbSize?: "0" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" | "7" | number;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | number | undefined;
  style?: "normal" | "italic" | "oblique";
  uppercase?: boolean;
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | number;
};
