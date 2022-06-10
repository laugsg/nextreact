import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import { contractColors } from "../contracts/contract-colors.css";

/** server-side
 * This sprinkles reuse a previously defined contract
 * to provide types for styling,
 * includes values crated on the fly, 
 * includes conditional rendering based in @media query.
 * 
 * 
 * implemented: index.js
 * components:
 *  - Header
 *  - List
 */

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: {
      // 1. reuse contracts into Sprinkles
      primary: contractColors.colors.primary, // <-- contract
      secondary: contractColors.colors.secondary, // <-- contract
      // 2. load values into Sprinkles
      default: "#69d2e7", // <-- created on the fly
    },
    background: {
      // 1. reuse contracts into Sprinkles
      primary: contractColors.colors.primary, // <-- contract
      secondary: contractColors.colors.secondary, // <-- contract
      // 2. load values into Sprinkles
      default: "#e0e4cc", // <-- created on the fly
    },
  },
});

export const sprinkles = createSprinkles(colorProperties);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof colorProperties>[0];
