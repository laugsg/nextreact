import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";
import { globalVars } from "./global-vars.css";

const colorStyles = createAtomicStyles({
  conditions: {
    lightMode: { "@media": "(prefers-color-scheme: light)" },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: globalVars.color,
  },
});

export const atoms = createAtomsFn(colorStyles);
export type Sprinkles = Parameters<typeof sprinkles>[0];
