/* Enums */

import { ReactNode } from "react";

export enum ButtonCorners {
  pill = "pill",
  rounded = "rounded",
  square = "square",
}

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonRole {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export enum ButtonType {
  ghost = "ghost",
  outline = "outline",
  solid = "solid",
}

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  brand = "brand",
  success = "success",
  info = "info",
  warning = "warning",
  danger = "danger",
}

/* Settings */

export const CORNERS_MAP: Record<ButtonCorners, string> = {
  [ButtonCorners.pill]: "rounded-full",
  [ButtonCorners.rounded]: "rounded-xl",
  [ButtonCorners.square]: "rounded-none",
};

export const ROLE_MAP: Record<ButtonRole, string> = {
  [ButtonRole.button]: "button",
  [ButtonRole.submit]: "submit",
  [ButtonRole.reset]: "reset",
};

export const SIZE_MAP: Record<ButtonSize, string> = {
  [ButtonSize.sm]: "px-3 py-1.5 text-xs",
  [ButtonSize.md]: "px-4 py-2.5 text-sm",
  [ButtonSize.lg]: "px-7 py-3.5 text-[20px]",
  [ButtonSize.xl]: "px-8 py-5 text-[24px]",
};

export const SOLID_VARIANT_MAP: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]: "border-gray-700 bg-gray-700 text-white " + "hover:border-brand-500 hover:bg-brand-500",
  [ButtonVariant.secondary]:
    "border-secondary-200 bg-secondary-200 text-secondary-600 hover:border-secondary-300 hover:bg-secondary-300",
  [ButtonVariant.brand]: "border-brand-500 bg-brand-500 text-white hover:border-brand-600 hover:bg-brand-600",
  [ButtonVariant.success]: "border-success-500 bg-success-500 text-white hover:border-success-600 hover:bg-success-600",
  [ButtonVariant.info]: "border-info-500 bg-info-500 text-white hover:border-info-600 hover:bg-info-600",
  [ButtonVariant.warning]: "border-warning-500 bg-warning-500 text-white hover:border-warning-600 hover:bg-warning-600",
  [ButtonVariant.danger]: "border-danger-600 bg-danger-600 text-white hover:border-danger-700 hover:bg-danger-700",
};

export const OUTLINE_VARIANT_MAP: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]:
    "border-gray-400 bg-gray-500/5 text-gray-600 hover:border-brand-500 hover:bg-brand-500 hover:text-white",
  [ButtonVariant.secondary]:
    "border-secondary-300 bg-secondary-500/5 text-secondary-500 hover:border-secondary-200 hover:bg-secondary-200",
  [ButtonVariant.brand]:
    "border-brand-400 bg-brand-500/5 text-brand-500 hover:border-brand-200 hover:bg-brand-200 hover:text-brand-600",
  [ButtonVariant.success]:
    "border-success-300 bg-success-500/5 text-success-500 hover:border-success-100 hover:bg-success-100",
  [ButtonVariant.info]: "border-info-200 bg-info-50 text-info-500 hover:border-info-100 hover:bg-info-100",
  [ButtonVariant.warning]:
    "border-warning-300 bg-warning-50 text-warning-500 hover:border-warning-100 hover:bg-warning-100",
  [ButtonVariant.danger]:
    "border-danger-200 bg-danger-500/5 text-danger-400 hover:border-danger-100 hover:bg-danger-100 hover:text-danger-500",
};

export const GHOST_VARIANT_MAP: Record<ButtonVariant, string> = {
  [ButtonVariant.primary]:
    "border-transparent bg-gray-100 text-gray-600 hover:border-brand-500 hover:bg-brand-500 hover:text-white",
  [ButtonVariant.secondary]:
    "border-secondary-100 bg-secondary-100 text-secondary-500 hover:border-secondary-200 hover:bg-secondary-200",
  [ButtonVariant.brand]:
    "border-brand-100 bg-brand-100 text-brand-500 hover:border-brand-500 hover:bg-brand-500 hover:text-white",
  [ButtonVariant.success]:
    "border-success-100 bg-success-100 text-success-500 hover:border-success-500 hover:bg-success-500 hover:text-white",
  [ButtonVariant.info]:
    "border-info-100 bg-info-100 text-info-500 hover:border-info-500 hover:bg-info-500 hover:text-white",
  [ButtonVariant.warning]:
    "border-warning-100 bg-warning-100 text-warning-500 hover:border-warning-500 hover:bg-warning-500 hover:text-white",
  [ButtonVariant.danger]:
    "border-danger-100 bg-danger-100 text-danger-500 hover:border-danger-600 hover:bg-danger-600 hover:text-white",
};

/* Props */

export type ButtonProps = {
  children: ReactNode;
  corners: ButtonCorners;
  role: ButtonRole;
  size: ButtonSize;
  type: ButtonType;
  variant: ButtonVariant;
};
