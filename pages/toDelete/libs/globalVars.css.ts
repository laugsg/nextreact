import {
    createGlobalTheme,
    createTheme,
    createThemeContract
} from '@vanilla-extract/css';

/**
 * 1. First we create a global theme containing all the theme variables 
 * that don’t change between themes, like spacing, fonts & line-height.
 * 
 */
const global = createGlobalTheme('html',{
    space: {
        none: 0,
        small: '4rem',
        medium: '8rem',
        large: '12rem'
    },
    fonts: {
        heading: 'sans-serif',
        body: 'sans-serif'
    }
})

/**
 * 2. Then we create a “theme contact”, 
 * basically a blueprint for how the theme-specific values will look 
 * and pass it as the first argument to createTheme 
 * when defining our light and dark versions.
 */

/** Contracts
 * Contracts create (are like) Types of stlyes rules for themes,
 * they provide a model definition for the css rules to be applied,
 * to be implemented when the theme is created.
 * 
 * This is especially useful to define a theme variations,
 * reusing previously defined contracts, a variation provides 
 * customization when meeting the values from theme requirements.
 * 
 * 1. createThemeContract(contract)
 * 2. createTheme(contract, theme-declaration)
 */
const colors = createThemeContract({
    background: null,
    text: null
})

export const lightTheme = createTheme(colors, {
    background: 'purple',
    text: 'black'
})

export const darkTheme = createTheme(colors, {
    background: 'lime',
    text: 'white'
})

/**
 * 3. Finally export the combined theme for use inside you css.
 */
export const globalVars = {...global, colors, darkTheme}

/** Conclusion
 * 1. Create Contract (definition of Type)
 * 2. Create Theme (Contract & rules)
 * 
 * Global theme is explicit, it means that it's declared and defined,
 * attached to one DOM selector.
 * 
 * Both are css rules definitions but "global theme" provides a method
 * to attach definitions to DOM elements with the purpose to provide 
 * wide range coverage over html structures, by the other hand,
 * "theme contracts" dont care about elements, they provide classes with values.
 * 
 * Both need to be applied to css properties through "style" method as for example
 * "style({background: vars.colors.pink})" in order to be implemented.
 * 
 * Global theme is linked to DOM when it's provided with an element 
 * as their first argument (createGlobalTheme('body',definitions)).
 * 
 * # Main diferences
 * 1. scope : global / local
 * 2. reuse : static / contracts
 * 
 * # Implementation
 * 1. declaration : Types and Values (theme.css.ts)
 * 2. definition : CSS Property and Value Style Matching (component.css.ts)
 * 3. implementation : import style difinitions into component (component.tsx/jsx/js)
 * 
 * # Implementation Methods
 * 1. theme.css.ts
 *     A. createThemeContract(contract)
 *     B. createTheme(contract, theme-declaration)
 * 
 * 2. component.css.ts
 *     A. style({background: vars.colors.pink})
 * 
 * 3. component.tsx/jsx/js
 *     A. import into component.tsx/jsx/js
 * 
 */









