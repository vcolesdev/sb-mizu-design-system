export function useStyles(props: any) {
  let base;
  let label;
  let options;

  base = [
    "border-[1.5px]",
    "border-gray-300",
    "bg-gray-100",
    "rounded-lg",
    "px-3.5",
    "py-2.5",
    "w-full",
    "text-gray-500",
    "text-[15px]",
    "transition",
    "duration-200",
    "ease-in-out",
    "focus:bg-white",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "focus:ring-gray-500",
    "focus:border-transparent",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
  ];

  label = ["block", "mb-2", "font-medium", "text-sm", "text-gray-500", "tracking-tight"];

  options = {
    ["placeholder:italic placeholder:text-gray-400"]: props.placeholder,
  };

  const styles = {
    base: base,
    input: "mb-3",
    label: label,
    options: options,
  };

  return { styles };
}
