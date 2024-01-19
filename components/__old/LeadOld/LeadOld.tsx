import React from "react";
import Text from "../TextOld";
import { LeadOldProps } from "./LeadOld.types";

function LeadOld({ children, textSize }: LeadOldProps) {
  let content;

  switch (textSize) {
    case "sm":
      content = (
        <Text size="lg" mbSize="4" weight="medium">
          {children}
        </Text>
      );
      break;
    case "md":
      content = (
        <Text size="xl" mbSize="4" weight="semibold">
          {children}
        </Text>
      );
      break;
    case "lg":
      content = (
        <Text size="2xl" mbSize="4" weight="semibold">
          {children}
        </Text>
      );
      break;
    default:
      content = (
        <Text size="xl" mbSize="4" weight="semibold">
          {children}
        </Text>
      );
  }

  return content;
}

export default LeadOld;
