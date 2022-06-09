import { style } from "@vanilla-extract/css";
import { contractCard } from "../contracts/contract-card.css";

export const cardAvatar = style({
    maxWidth: contractCard.avatar.maxWidth,
    maxHeight: contractCard.avatar.maxHeight,
});
