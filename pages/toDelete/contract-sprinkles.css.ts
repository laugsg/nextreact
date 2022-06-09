import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const contractSprinkles = createThemeContract({
  colors: {
    brand: null,
    muted: null,
  },
});

export const themeSprinkles = createTheme(contractSprinkles, {
  colors: {
    brand: "lime",
    muted: "grey",
  },
});
