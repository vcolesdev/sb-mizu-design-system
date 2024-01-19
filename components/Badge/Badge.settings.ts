import { ReactNode } from "react";

export enum BadgeCorners {
  pill = "pill",
  rounded = "rounded",
  square = "square",
}

export enum BadgeSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export enum BadgeType {
  ghost = "ghost",
  outline = "outline",
  solid = "solid",
}

export enum BadgeVariant {
  primary = "primary",
  secondary = "secondary",
  brand = "brand",
  success = "success",
  info = "info",
  warning = "warning",
  danger = "danger",
}

export const CORNERS_MAP: Record<BadgeCorners, string> = {
  [BadgeCorners.pill]: "rounded-full",
  [BadgeCorners.rounded]: "rounded-xl",
  [BadgeCorners.square]: "rounded-none",
};

export const SIZE_MAP: Record<BadgeSize, string> = {
  [BadgeSize.sm]: "p-1.5 px-2  text-xs",
  [BadgeSize.md]: "py-2 px-2.5 text-sm",
  [BadgeSize.lg]: "py-2.5 px-3 text-base",
};

export const SOLID_VARIANT_MAP: Record<BadgeVariant, string> = {
  [BadgeVariant.primary]: "bg-gray-800 text-white",
  [BadgeVariant.secondary]: "bg-secondary-200 text-secondary-800",
  [BadgeVariant.brand]: "bg-brand-500 text-white",
  [BadgeVariant.success]: "bg-success-600 text-white",
  [BadgeVariant.info]: "bg-info-500 text-white",
  [BadgeVariant.warning]: "bg-warning-500 text-white",
  [BadgeVariant.danger]: "bg-danger-500 text-white",
};

export const OUTLINE_VARIANT_MAP: Record<BadgeVariant, string> = {
  [BadgeVariant.primary]: "border border-gray-200 bg-transparent text-gray-800",
  [BadgeVariant.secondary]: "border border-secondary-200 bg-transparent text-secondary-800",
  [BadgeVariant.brand]: "border border-brand-300 bg-transparent text-brand-700",
  [BadgeVariant.success]: "border border-success-300 bg-transparent text-success-700",
  [BadgeVariant.info]: "border border-info-300 bg-transparent text-info-700",
  [BadgeVariant.warning]: "border border-warning-300 bg-transparent text-warning-700",
  [BadgeVariant.danger]: "border border-danger-300 bg-transparent text-danger-700",
};

export const GHOST_VARIANT_MAP: Record<BadgeVariant, string> = {
  [BadgeVariant.primary]: "bg-gray-100 text-gray-800",
  [BadgeVariant.secondary]: "bg-secondary-200 text-secondary-800",
  [BadgeVariant.brand]: "bg-brand-200 text-brand-800",
  [BadgeVariant.success]: "bg-success-200 text-success-800",
  [BadgeVariant.info]: "bg-info-200 text-info-800",
  [BadgeVariant.warning]: "bg-warning-200 text-warning-800",
  [BadgeVariant.danger]: "bg-red-200 text-danger-800",
};

export type BadgeProps = {
  children?: ReactNode | string;
  corners: BadgeCorners;
  size: BadgeSize;
  variant: BadgeVariant;
  type: BadgeType;
};
