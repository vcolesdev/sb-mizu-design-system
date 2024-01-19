import React, { ReactNode } from "react";

export enum AlertVariant {
  primary = "primary",
  secondary = "secondary",
  brand = "brand",
  success = "success",
  info = "info",
  warning = "warning",
  danger = "danger",
}

export type AlertTitleProps = {
  children: ReactNode | ReactNode[] | string;
};

export type AlertContentProps = {
  children: ReactNode | ReactNode[] | string;
};

export type AlertFooterProps = {
  children: ReactNode | ReactNode[] | string;
};

export type AlertCloseProps = {
  handleClick: React.MouseEventHandler<HTMLElement>;
};

export type AlertProps = {
  children: ReactNode | ReactNode[] | string;
  border: boolean;
  hasClose: boolean;
  expanded: boolean;
  variant: AlertVariant;
};

export const ALERT_VARIANT_MAP: Record<AlertVariant, string> = {
  [AlertVariant.primary]: "bg-gray-100 text-gray-800",
  [AlertVariant.secondary]: "bg-secondary-100 text-secondary-500",
  [AlertVariant.brand]: "bg-brand-100 text-brand-900",
  [AlertVariant.success]: "bg-success-100 text-success-700",
  [AlertVariant.info]: "bg-info-100 text-info-900",
  [AlertVariant.warning]: "bg-warning-100 text-warning-800",
  [AlertVariant.danger]: "bg-danger-100 text-danger-900",
};

export const ALERT_BORDER_VARIANT_MAP: Record<AlertVariant, string> = {
  [AlertVariant.primary]: "border-gray-300",
  [AlertVariant.secondary]: "border-secondary-300",
  [AlertVariant.brand]: "border-brand-300",
  [AlertVariant.success]: "border-success-300",
  [AlertVariant.info]: "border-info-200",
  [AlertVariant.warning]: "border-warning-300",
  [AlertVariant.danger]: "border-danger-200",
};
