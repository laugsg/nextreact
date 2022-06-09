import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import { contractDefaultButton } from "./contract-default-button.css";

const buttonDefaultProperties = defineProperties({
  conditions: {
    default: false,
    theme: true,
  },
  defaultCondition: "default",
  properties: {
    background: {
      primary: contractDefaultButton.color.primary,
      secondary: contractDefaultButton.color.secondary,
      default: "#a26445",
    },
    color: {
      primary: contractDefaultButton.color.primary,
      secondary: contractDefaultButton.color.secondary,
      default: "#a26445",
    },
    border: {
      border: contractDefaultButton.border.border,
      borderRadius: contractDefaultButton.border.borderRadius,
      borderColor: contractDefaultButton.border.borderColor,
      borderStyle: contractDefaultButton.border.borderStyle,
      borderWidth: "5px",
    },
    size: {
      small: contractDefaultButton.size.small,
      medium: contractDefaultButton.size.medium,
      large: "30px",
    },
    fontSize: {
      small: contractDefaultButton.size.small,
      medium: contractDefaultButton.size.medium,
      large: "30px",
    },
    margin: {
      small: contractDefaultButton.margin.small,
      medium: contractDefaultButton.margin.medium,
      large: "30px",
    },
    padding: {
      small: contractDefaultButton.padding.small,
      medium: contractDefaultButton.padding.medium,
      large: "30px",
    },
  },
});

export const buttonDefaultSprinkles = createSprinkles(buttonDefaultProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof buttonDefaultSprinkles>[0];
