import React from "react";
import classnames from "classnames";
import useAlert from "./useAlert";
import { AlertProps, AlertVariant, ALERT_VARIANT_MAP, ALERT_BORDER_VARIANT_MAP } from "./Alert.settings";
import { AlertClose, AlertContent, AlertFooter, AlertTitle } from "./Alert.components";

function Alert(props: AlertProps) {
  let content: any;
  let footer;
  let title;

  // Props
  let { children, border, hasClose, expanded, variant } = props;

  // Hooks
  const { handleCloseAlert, showAlert } = useAlert(expanded);

  // Styles
  const layoutClasses = "relative rounded-lg w-full";

  const isExpanded = classnames({
    "h-auto flex": showAlert,
    "h-0 hidden": !showAlert,
  });

  const toggleBorder = classnames({
    "border-none": !border,
    border: border,
  });

  const classes = classnames(
    layoutClasses,
    isExpanded,
    toggleBorder,
    ALERT_BORDER_VARIANT_MAP[variant],
    ALERT_VARIANT_MAP[variant]
  );

  /**
   * Update child type
   * @param child
   */
  const updateChildType = (child: any) => {
    switch (child.type) {
      case AlertTitle:
        title = child;
        break;
      case AlertFooter:
        footer = child;
        break;
      case AlertContent:
        content && content.push(child);
        break;
      default:
        content = child;
    }
  };

  // Handle children
  // @todo - Clean up this logic
  // @todo - Update type for child in children
  if (children && Array.isArray(children)) {
    children.forEach((child: any) => {
      updateChildType(child);
    });
  } else if (children && !Array.isArray(children)) {
    content = children;
  } else {
    content = null;
  }

  return (
    <div className={classes} role="alert" aria-expanded={expanded}>
      <div className="grow">
        {!!title && title}
        {content && <div className="px-3 py-2">{content || children}</div>}
        {!!footer && footer}
      </div>
      {hasClose && <AlertClose handleClick={(event) => handleCloseAlert(event)} />}
    </div>
  );
}

export default Alert;

// Defaults
Alert.defaultProps = {
  children: <p>This is a dismissable Alert message.</p>,
  expanded: true,
  border: false,
  hasClose: true,
  variant: AlertVariant.primary,
};

// Relatives
Alert.Content = AlertContent;
Alert.Footer = AlertFooter;
Alert.Title = AlertTitle;

// Props
Alert.hasClose = AlertClose;
Alert.variant = AlertVariant;
