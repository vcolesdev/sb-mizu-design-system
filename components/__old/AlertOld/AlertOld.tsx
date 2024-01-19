import React from "react";
import classnames from "classnames";
import IconOld from "../IconOld/IconOld";
import { useStyles } from "./Alert.styles";
import { useAlert } from "./useAlert";

/**
 * Alert component props
 */
export type AlertOldProps = {
  children?: React.ReactNode;
  closeButton?: boolean;
  hasBorder?: boolean | undefined;
  hasIcon?: boolean | undefined;
  hasTitle?: boolean | undefined;
  icon?: string | undefined;
  iconSize?: number | undefined;
  iconType?: "Ion" | "Lucide" | undefined;
  isActive?: boolean | undefined;
  size?: "sm" | "md" | "lg" | "xl" | undefined;
  variant?: "primary" | "secondary" | "brand" | "success" | "info" | "warning" | "danger" | undefined;
};

/**
 * AlertTitle component props
 */
export type AlertTitleProps = {
  styles: string;
  variant: AlertOldProps["variant"];
};

export const AlertTitle = ({ styles, variant }: AlertTitleProps) => {
  return (
    <header className="opacity-70">
      <small className={styles}>{variant}</small>
    </header>
  );
};

function AlertOld({
  children,
  closeButton,
  hasBorder,
  hasIcon,
  icon,
  iconSize,
  iconType,
  hasTitle,
  isActive,
  size,
  variant,
}: AlertOldProps) {
  isActive = true;

  const { handleShowAlert, showAlert } = useAlert(hasTitle, isActive);

  const props = {
    children,
    closeButton,
    hasBorder,
    hasIcon,
    hasTitle,
    icon,
    iconSize,
    iconType,
    isActive,
    size,
    showAlert,
    variant,
  };

  const { styles } = useStyles(props);
  const classes = classnames(styles.base, styles.size, styles.variant);

  return (
    <div className={classes}>
      {/* Title */}
      {hasTitle && <AlertTitle styles={styles.title} variant={variant} />}

      {/* Content */}
      <div className={styles.content}>
        {/* Icon */}
        {hasIcon && icon && (
          <div className={styles.icon}>
            <IconOld color="currentColor" name={icon} size={iconSize || 20} type={iconType} />
          </div>
        )}
        <span className="inline-block w-full">{children || "This is a default alert."}</span>
      </div>

      {/* Close Button */}
      <button className={styles.close} onClick={(event) => handleShowAlert(event)}>
        {closeButton && <IconOld color="currentColor" name="LuX" size={16} />}
      </button>
    </div>
  );
}

export default AlertOld;
