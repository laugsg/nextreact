import { style } from "@vanilla-extract/css";
import { contractCard } from "../contracts/contract-card.css";

/** client-side
 * Styles for card component
 */
export const cardClass = style({
  border: contractCard.border.border,
  borderRadius: contractCard.border.borderRadius,
  margin: contractCard.space.margin,
  padding: contractCard.space.padding,
  "@media": {
    "screen and (min-width: 1024px)": {
      display: contractCard.display.display,
      aligItems: contractCard.display.aligItems,
    },
  },
});

export const cardHeader = style({
  display: contractCard.display.display,
  justifyContent: contractCard.display.justifyContent,
  alignItems: contractCard.display.alignItems,
});

export const cardAvatar = style({
  maxWidth: contractCard.avatar.maxWidth,
  maxHeight: contractCard.avatar.maxHeight,
});