import { style } from "@vanilla-extract/css";
import { contractCard } from "../contracts/contract-card.css";

export const cardClass = style({
  border: contractCard.border.border,
  borderRadius: contractCard.border.borderRadius,
  margin: contractCard.space.margin,
  padding: contractCard.space.padding,
  // flexWrap: contractCard.display.flexWrap,
  //   alignItems: contractCard.display.alignItems,
  //   justifyContent: contractCard.display.justifyContent,
  //   flexWrap: contractCard.display.flexWrap,
  //   maxWidth: contractCard.avatar.maxWidth,
  //   maxHeight: contractCard.avatar.maxHeight,
  "@media": {
    "screen and (min-width: 1024px)": {
      display: contractCard.display.display,
      aligItems: contractCard.display.aligItems,
    },
  },
});
