export const useStyles = (props: any) => {
  const styles = {
    base: "block",
    nested: "ml-4 py-2",
    titles: {
      ["list-outside ps-4"]: props.titles,
      ["list-inside"]: !props.titles,
    },
    type: {
      "list-none": props.type === "none",
      "list-decimal": props.type === "ordered",
      "list-disc": props.type === "unordered" || props.type === undefined,
    },
  };

  return { styles };
};
