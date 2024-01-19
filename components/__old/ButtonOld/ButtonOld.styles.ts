export const useStyles = (props: any) => {
  const base = [
    "border",
    "cursor-pointer",
    "font-semibold",
    "text-center",
    "tracking-tight",
    "transition",
    "ease-in-out",
    "duration-200",
  ];

  const size = {
    ["px-3 py-1.5 text-xs"]: props.size === "sm",
    ["px-4 py-2.5 text-sm"]: props.size === "md" || props.size === undefined,
    ["px-7 py-3.5 text-md"]: props.size === "lg",
    ["px-8 py-5 text-lg"]: props.size === "xl",
  };

  const primary = {
    solid: [
      "border",
      "border-gray-700",
      "bg-gray-700",
      "text-white",
      "hover:border-violet-500",
      "hover:bg-violet-500",
      "hover:shadow-none",
    ],
    outline: [
      "border",
      "border-gray-400",
      "bg-gray-500/5",
      "text-gray-600",
      "hover:border-violet-500",
      "hover:bg-violet-500",
      "hover:shadow-none",
      "hover:text-white",
    ],
    ghost: [
      "border",
      "border-transparent",
      "bg-gray-100",
      "text-gray-600",
      "hover:border-violet-500",
      "hover:bg-violet-500",
      "hover:shadow-none",
      "hover:text-white",
    ],
  };

  const secondary = {
    solid: [
      "border",
      "border-slate-200",
      "bg-slate-200",
      "text-gray-600",
      "hover:border-slate-300",
      "hover:bg-slate-300",
      "hover:shadow-none",
    ],
    outline: [
      "border",
      "border-slate-300",
      "bg-slate-500/5",
      "text-gray-500",
      "hover:border-slate-200",
      "hover:shadow-none",
      "hover:bg-slate-200",
    ],
    ghost: [
      "border",
      "border-slate-100",
      "bg-slate-100",
      "text-gray-500",
      "hover:border-slate-200",
      "hover:bg-slate-200",
    ],
  };

  const brand = {
    solid: [
      "border",
      "border-violet-500",
      "bg-violet-500",
      "text-white",
      "hover:border-violet-600",
      "hover:bg-violet-600",
      "hover:shadow-none",
    ],
    outline: [
      "border",
      "border-violet-400",
      "bg-violet-500/5",
      "text-violet-500",
      "hover:border-violet-200",
      "hover:bg-violet-200",
      "hover:text-violet-600",
      "hover:shadow-none",
    ],
    ghost: [
      "border",
      "border-violet-100",
      "bg-violet-100",
      "text-violet-500",
      "hover:border-violet-500",
      "hover:bg-violet-500",
      "hover:text-white",
    ],
  };

  const success = {
    solid: [
      "border",
      "border-green-600",
      "bg-green-600",
      "text-white",
      "hover:border-green-700",
      "hover:bg-green-700",
      "hover:shadow-none",
    ],
    outline: [
      "border",
      "border-green-300",
      "bg-green-500/5",
      "text-green-500",
      "hover:border-green-100",
      "hover:bg-green-100",
      "hover:shadow-none",
    ],
    ghost: [
      "border",
      "border-green-100",
      "bg-green-100",
      "text-green-500",
      "hover:border-green-500",
      "hover:bg-green-500",
      "hover:text-white",
    ],
  };

  const info = {
    solid: [
      "border",
      "border-blue-500",
      "bg-blue-500",
      "text-white",
      "hover:border-blue-600",
      "hover:bg-blue-600",
      "hover:shadow-none",
    ],
    outline: [
      "border",
      "border-blue-200",
      "bg-blue-50",
      "text-blue-400",
      "hover:border-blue-100",
      "hover:bg-blue-100",
      "hover:shadow-none",
    ],
    ghost: [
      "border",
      "border-blue-100",
      "bg-blue-100",
      "text-blue-500",
      "hover:border-blue-500",
      "hover:bg-blue-500",
      "hover:text-white",
    ],
  };

  const warning = {
    solid: [
      "border",
      "border-amber-500",
      "bg-amber-500",
      "text-white",
      "hover:border-amber-600",
      "hover:bg-amber-600",
      "hover:shadow-none",
    ],
    outline: [
      "border",
      "border-amber-300",
      "bg-amber-50",
      "text-amber-500",
      "hover:border-amber-100",
      "hover:bg-amber-100",
      "hover:shadow-none",
    ],
    ghost: [
      "border",
      "border-amber-100",
      "bg-amber-100",
      "text-amber-500",
      "hover:border-amber-500",
      "hover:bg-amber-500",
      "hover:text-white",
    ],
  };

  const danger = {
    solid: [
      "border",
      "border-red-600",
      "bg-red-600",
      "text-white",
      "hover:border-red-700",
      "hover:bg-red-700",
      "hover:shadow-none",
    ],
    outline: [
      "border",
      "border-red-200",
      "bg-red-500/5",
      "text-red-400",
      "hover:border-red-100",
      "hover:bg-red-100",
      "hover:shadow-none",
      "hover:text-red-500",
    ],
    ghost: [
      "border",
      "border-red-100",
      "bg-red-100",
      "text-red-500",
      "hover:border-red-600",
      "hover:bg-red-600",
      "hover:text-white",
    ],
  };

  const defaultStyles = {
    solid: [
      "border",
      "border-gray-700",
      "bg-gray-700",
      "text-white",
      "hover:border-violet-500",
      "hover:bg-violet-500",
      "hover:shadow-none",
    ],
    outline: [
      "border",
      "border-gray-300",
      "bg-transparent",
      "text-gray-700",
      "hover:border-gray-700",
      "hover:bg-gray-700",
      "hover:shadow-none",
      "hover:text-white",
    ],
    ghost: [
      "border",
      "border-gray-100",
      "bg-gray-100",
      "text-gray-700",
      "hover:border-gray-700",
      "hover:bg-gray-700",
      "hover:text-white",
    ],
  };

  const variants = {
    [`${primary.solid.join(" ")}`]: props.variant === "primary" && props.type === "solid",
    [`${primary.outline.join(" ")}`]: props.variant === "primary" && props.type === "outline",
    [`${primary.ghost.join(" ")}`]: props.variant === "primary" && props.type === "ghost",
    [`${secondary.solid.join(" ")}`]: props.variant === "secondary" && props.type === "solid",
    [`${secondary.outline.join(" ")}`]: props.variant === "secondary" && props.type === "outline",
    [`${secondary.ghost.join(" ")}`]: props.variant === "secondary" && props.type === "ghost",
    [`${brand.solid.join(" ")}`]: props.variant === "brand" && props.type === "solid",
    [`${brand.outline.join(" ")}`]: props.variant === "brand" && props.type === "outline",
    [`${brand.ghost.join(" ")}`]: props.variant === "brand" && props.type === "ghost",
    [`${success.solid.join(" ")}`]: props.variant === "success" && props.type === "solid",
    [`${success.outline.join(" ")}`]: props.variant === "success" && props.type === "outline",
    [`${success.ghost.join(" ")}`]: props.variant === "success" && props.type === "ghost",
    [`${info.solid.join(" ")}`]: props.variant === "info" && props.type === "solid",
    [`${info.outline.join(" ")}`]: props.variant === "info" && props.type === "outline",
    [`${info.ghost.join(" ")}`]: props.variant === "info" && props.type === "ghost",
    [`${warning.solid.join(" ")}`]: props.variant === "warning" && props.type === "solid",
    [`${warning.outline.join(" ")}`]: props.variant === "warning" && props.type === "outline",
    [`${warning.ghost.join(" ")}`]: props.variant === "warning" && props.type === "ghost",
    [`${danger.solid.join(" ")}`]: props.variant === "danger" && props.type === "solid",
    [`${danger.outline.join(" ")}`]: props.variant === "danger" && props.type === "outline",
    [`${danger.ghost.join(" ")}`]: props.variant === "danger" && props.type === "ghost",
  };

  const options = {
    ["flex justify-center w-full"]: props.fullWidth,
    ["inline-flex"]: !props.fullWidth,
    ["rounded-full"]: !props.squared,
  };

  const styles = {
    base: base,
    default: defaultStyles,
    options: options,
    size: size,
    variant: variants,
  };

  return { styles };
};
