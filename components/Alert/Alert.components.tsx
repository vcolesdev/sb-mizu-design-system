import React from "react";
import classnames from "classnames";
import Icon, { IconType } from "../Icon/Icon";
import {
  AlertCloseProps,
  AlertContentProps,
  AlertFooterProps,
  AlertTitleProps,
} from "@/components/Alert/Alert.settings";

/* Components */

export const AlertContent = ({ children }: AlertContentProps) => {
  return <>{children}</>;
};

export const AlertFooter = ({ children }: AlertFooterProps) => {
  const baseClasses = ["block", "relative", "px-4", "py-2", "w-full", "text-sm"];
  const classes = classnames(baseClasses.join(" "));

  return <footer className={classes}>{children}</footer>;
};

export const AlertTitle = ({ children }: AlertTitleProps) => {
  const classes = {
    header: "block relative w-full opacity-70 px-4 py-2",
    title: "inline-block font-medium text-[12px] tracking-wide uppercase",
  };

  return (
    <header className={classes.header}>
      <h4 className={classes.title}>{children}</h4>
    </header>
  );
};

export const AlertClose = (props: AlertCloseProps) => {
  const { handleClick } = props;
  const baseClasses = [
    "inline-block",
    "cursor-pointer",
    "absolute",
    "top-[8px]",
    "right-[10px]",
    "p-1",
    "rounded",
    "bg-transparent",
    "hover:bg-gray-900/10",
  ];

  const classes = classnames(baseClasses.join(" "));

  return (
    <button className={classes} onClick={(event) => handleClick(event)}>
      <Icon color="currentColor" name="LuX" size={16} type={IconType.Lucide} />
    </button>
  );
};
