import { createTheme } from "@vanilla-extract/css";
import { contractSizing } from "../contracts/contract-sizing.css";

export const themeSizing = createTheme(contractSizing, {
  size: {
    small: "5px",
    medium: "15px",
    large: "30px",
  }
});
