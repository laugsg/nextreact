import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

import { contractSprinkles } from "./contracts/contract-sprinkles.css";

const colorProperties = defineProperties({
  conditions: {
    lightMode: { "@media": "(prefers-color-scheme: light)" },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: false,
  properties: {
    color: contractSprinkles.colors,
  },
});

export const sprinkles = createSprinkles(colorProperties);
