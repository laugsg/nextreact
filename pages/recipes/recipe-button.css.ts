import { recipe } from "@vanilla-extract/recipes";
import { contractColors } from "../contracts/contract-colors.css";
import { contractSizing } from "../contracts/contract-sizing.css";
import { contractDefaultButton } from "../contracts/contract-default-button.css";
import { buttonDefaultSprinkles } from "../styles/styles-sprinkles.css";

/** server-side
 * Reuse of contracts, themes and sprinkles to be implemented
 * with recipe API to create variants and combination of theme
 * to create new variants on fly.
 * 
 * implemented: ButtonVariant.js
 */
export const button = recipe({
  base: {
    border: contractDefaultButton.border.border,
    borderRadius: contractDefaultButton.border.borderRadius,
    borderColor: contractDefaultButton.border.borderColor,
    color: contractDefaultButton.color.default,
    margin: contractDefaultButton.margin.small,
    borderWidth: contractDefaultButton.border.borderWidth,
    borderStyle: "solid"
  },
  variants: {
    color: {
      primary: { color: contractColors.colors.primary },
      secondary: buttonDefaultSprinkles({ color: "secondary" }),
      default: { color: "#e769d9" },
    },
    size: {
      medium: buttonDefaultSprinkles({ fontSize: "large" }),
      large: { fontSize: contractSizing.size.large },
    },
    space: {
      small: buttonDefaultSprinkles({ padding: "medium" }),
    },
    border: {
      primary: { borderColor: contractColors.colors.primary },
      default: { borderColor: "#e769d9" },
    }
  },
  compoundVariants: [
    {
      variants: {
        color: "default",
        size: "large",
      },
      style: {
        borderStyle: "dashed",
        borderWidth: "17px",
        borderColor: 'purple',
      },
    },
  ],
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});

export type button = RecipeVariants<typeof button>;
