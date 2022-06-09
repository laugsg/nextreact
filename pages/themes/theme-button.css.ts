import { createTheme } from "@vanilla-extract/css";
import { contractButton } from "../contracts/contract-button.css";

export const themeButton = createTheme(contractButton, {
  space: {
    margin: "15px",
    padding: "5px",
  },
});
