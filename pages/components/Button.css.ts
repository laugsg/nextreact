import { styleVariants } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { contractSizing } from "../contracts/contract-sizing.css";
import { contractButton } from "../contracts/contract-button.css";

// style shared by buttons
const baseStyle = style({
  margin: "0px",
  padding: "0px",
});
// Theme
const baseTheme = style({
  margin: contractSizing.size.small,
});
// Theme specific for buttons margin & padding
const overwriteTheme = style({
  margin: contractButton.space.margin,
});
/** variants of button
 * Each key is an array containing a variant.
 * The primary key apply the base style,
 * the secondary key is the Theme variant that overwrites the base style,
 * the tertiary key is the button specific theme variant that overwrites the Theme.
 */
export const buttonStyle = styleVariants({
  primary: [baseStyle],
  secondary: [baseStyle, baseTheme],
  tertiary: [baseTheme, overwriteTheme],
});
