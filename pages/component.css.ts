import { style, globalStyle } from "@vanilla-extract/css";
import { globalThemeVars } from "./libs/global-theme.css";
import { globalVars } from "./libs/globalVars.css"

export const root = globalStyle('body', {
    background: globalThemeVars.colors.pink,
    color: globalThemeVars.colors.green,
    padding: globalThemeVars.space.large,
})

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