import { contractCard } from "../contracts/contract-card.css";
import { createTheme } from "@vanilla-extract/css";

export const themeCard = createTheme(contractCard,{
    display: {
        display: "flex",
        alignItems: "center",
      },
      border: {
        border: "1px solid #eee",
        borderRadius: "10px",
      },
      avatar: {
        maxWidth: "100px",
        maxHeight: "100px",
      },
      space: {
        margin: "5px",
        padding: "5px",
      },
})