import { 
  createGlobalTheme
} from "@vanilla-extract/css";
import { 
  defineProperties,
  createSprinkles
} from "@vanilla-extract/sprinkles";

export const globalVars = createGlobalTheme(":root", {
    color: {
      white: "#fff",
      black: "#000",
      orange: "#FFA500",
      primary: "#764abc",
    }
})

const colorProperties = defineProperties({
  conditions: {
    lightMode: { "@media": "(prefers-color-scheme: light)" },
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: false,
  properties: {
    color: globalVars.colors,
  },
});

export const sprinkles = createSprinkles(colorProperties);