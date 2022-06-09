import { recipe } from "@vanilla-extract/recipes";
import { contractColors } from "../../contracts/contract-colors.css";
import { contractSizing } from "../../contracts/contract-sizing.css";
import { contractDefaultButton } from "./contract-default-button.css";
import { buttonDefaultSprinkles } from "./style-sprinkles.css";


export const button = recipe({
  // First, define a base set of styles that apply by default
  base: {
    border: contractDefaultButton.border.border,
    borderRadius: contractDefaultButton.border.borderRadius,
    borderColor: contractDefaultButton.color.borderColor,
    color: contractDefaultButton.color.default,
  },
  // Second, define variants
  variants: {
    color: {
      primary: {backgroundColor: contractColors.colors.primary},
      secondary: buttonDefaultSprinkles({background: "secondary"}),
      default: {backgroundColor: "#e769d9"},
    },
    size: {
        medium: buttonDefaultSprinkles({fontSize: "large"}),
        large: {fontSize: contractSizing.size.large},
    },
    margin: {
        small: buttonDefaultSprinkles({margin: "small"}),
      },
  },
//   Opotionally, define combinations of variants
  compoundVariants: [
    {
        variants: {
            color: "default",
            size: "large"
        },
        style: {
          borderStyle: "dotted",
          borderWidth: '17px',
        }
    }
  ],
  defaultVariants: {
      color: 'primary',
      size: "medium"
  }
});
