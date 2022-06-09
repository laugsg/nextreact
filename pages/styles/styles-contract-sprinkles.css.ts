import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import { contractColors } from "../contracts/contract-colors.css";

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: {
      // 1. reuse contracts into Sprinkles
      primary: contractColors.colors.primary, // <-- lightMode
      default: contractColors.colors.default, // <-- default
      // 2. load values into Sprinkles
      secondary: "#69d2e7", // <-- darkMode
    },
    background: {
      // 1. reuse contracts into Sprinkles
      primary: contractColors.colors.primary, // <-- lightMode
      secondary: contractColors.colors.secondary, // <-- darkMode
      // 2. load values into Sprinkles
      default: "#e0e4cc", // <-- default
    },
  },
});

export const sprinkles = createSprinkles(colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
