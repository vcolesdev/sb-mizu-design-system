export const useStyles = (props: any) => {
  const styles = {
    base: [
      "inline-block",
      "font-semibold",
      "leading-relaxed",
      "text-violet-500",
      "transition",
      "duration-200",
      "ease-in-out",
    ],
    options: {
      ["underline underline-offset-2 hover:no-underline"]: props.underline,
      ["no-underline hover:underline hover:underline-offset-2"]: !props.underline,
    },
  };

  return { styles };
};
