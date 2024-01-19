import React from "react";
import classnames from "classnames";
import { InputProps } from "./Input.types";
import { useStyles } from "./Input.styles";

function Input({ disabled, label, id, name, placeholder, type }: InputProps) {
  const [isDisabled, setIsDisabled] = React.useState(disabled);

  const props = { disabled, id, label, name, placeholder, type };
  const { styles } = useStyles(props);

  const classes = classnames(styles.base, styles.options);
  const inputClasses = classnames(styles.input);
  const labelClasses = classnames(styles.label);

  const handleSetDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className={inputClasses}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
      <input
        className={classes}
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder || undefined}
      />
    </div>
  );
}

export default Input;
