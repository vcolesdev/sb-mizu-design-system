import classnames from "classnames";

export const useStyles = (props: any) => {
  const base = "rounded-xl relative w-full";
  const close = "inline-block cursor-pointer";
  const content = "w-full";
  const icon = "leading-none";
  const title = "inline-block mb-1 font-semibold text-[12px] tracking-wider uppercase";

  const styles = {
    content: classnames(content, {
      ["block"]: !props.hasIcon,
      ["flex"]: props.hasIcon,
      ["ms-7"]: props.hasIcon && props.hasTitle,
    }),
    title: classnames(title, {
      ["ms-7"]: props.hasIcon,
    }),
    base: classnames(base, {
      [`flex items-center justify-between`]: !props.hasTitle,
      [`hidden`]: !props.showAlert,
    }),
    icon: classnames(icon, {
      ["flex items-center me-3"]: props.hasIcon,
      ["absolute top-[20px] left-[16px]"]: props.hasIcon && props.hasTitle,
    }),
    close: classnames(close, {
      [`absolute top-0 right-0 px-3 py-3`]: props.hasTitle,
    }),
    size: classnames({
      [`px-4 py-3.5 text-sm`]: props.size === "sm",
      [`px-4 py-3 text-base`]: props.size === "md" || props.size === undefined,
      [`px-4 py-3 text-lg`]: props.size === "lg",
      [`px-4 pt-3 pb-3.5 text-xl`]: props.size === "xl",
    }),
    variant: classnames({
      [`bg-transparent text-gray-500 ${props.hasBorder && "border border-gray-500"} `]: props.variant === undefined,
      [`bg-gray-100 text-gray-500 ${props.hasBorder && "border border-gray-300"}`]: props.variant === "primary",
      [`bg-slate-100 text-slate-500 ${props.hasBorder && "border border-slate-300"}`]: props.variant === "secondary",
      [`bg-violet-100 text-violet-900 ${props.hasBorder && "border border-violet-200"}`]: props.variant === "brand",
      [`bg-green-100 text-green-700 ${props.hasBorder && "border border-green-300"}`]: props.variant === "success",
      [`bg-blue-100 text-blue-900 ${props.hasBorder && "border border-blue-200"}`]: props.variant === "info",
      [`bg-amber-100 text-amber-800 ${props.hasBorder && "border border-amber-300"}`]: props.variant === "warning",
      [`bg-red-100 text-red-900 ${props.hasBorder && "border border-red-200"}`]: props.variant === "danger",
    }),
  };

  return { styles };
};
