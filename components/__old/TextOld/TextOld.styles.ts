export const useStyles = (props: any) => {
  const base = "text-gray-600 pb-0 leading-relaxed";
  const styles = {
    base: base,
    size: {
      ["text-base"]: !props.size,
      [`text-${props.size}`]: !props.size,
      [`text-${props.size}`]: props.size,
      [`text-${props.size}px]`]: typeof props.size === "number",
    },
    fontStyle: {
      "font-normal": props.style === "normal",
      "font-italic": props.style === "italic",
      "font-oblique": props.style === "oblique",
    },
    mbSize: {
      ["mb-3"]: !props.mbSize,
      [`mb-${props.mbSize}`]: props.mbSize,
      [`mb-${props.mbSize}px]`]: typeof props.mbSize === "number",
    },
    options: {
      ["uppercase"]: props.uppercase,
      ["mb-0"]: props.last,
    },
  };
  return { styles };
};
