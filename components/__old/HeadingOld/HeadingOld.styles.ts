export const useStyles = (props: any) => {
  const styles = {
    base: "text-gray-900 font-semibold tracking-tight",
    sizes: {
      "text-[24]": !props.size,
      "text-[40px]": props.size === "h1",
      "text-[32px]": props.size === "h2",
      "text-[24px]": props.size === "h3",
      "text-[20px]": props.size === "h4",
      "text-[16px]": props.size === "h5",
      "text-[14px]": props.size === "h6",
      [`text-[${props.size}px]`]: typeof props.size === "number",
    },
    options: {
      uppercase: props.uppercase,
    },
  };

  return { styles };
};
