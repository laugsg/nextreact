import { style } from "@vanilla-extract/css";
import { globalVars } from "./libs/globalVars.css"

export const themeVars = style({
    padding: globalVars.space.large,
    color: globalVars.colors.background,
})

/** Contracts
 * 1. theme-contract
 * 2. create-theme
 * 3. style definition into component.css.ts (algebra implementation)
 * 4. theme-name into component.tsx/jsx/js
 */