import classnames from "classnames";

interface ObjectMap {
  [key: string]: any;
}

interface StylesObj extends ObjectMap {
  additionalProps?: ObjectMap | undefined;
}

export type useClassnamesProps = StylesObj;

/**
 * Use classnames
 */
function useClassnames({ props }: useClassnamesProps) {
  let styles: StylesObj = {};
  let objectProps: useClassnamesProps = props;

  // Add styles
  styles = {
    base: props.base || "",
    options: props.options || "",
    size: props.size || "",
    type: props.type || "",
    variant: props.variant || "",
    ...props.additionalProps,
  };

  Object.keys(styles).forEach((key) => {
    if (styles[key] === "") {
      delete styles[key];
    } else if (styles[key] == typeof Array) {
      styles[key] = classnames(styles[key]);
    } else {
      styles[key] = styles[key];
    }
  });

  return { styles, props };
}

export default useClassnames;
