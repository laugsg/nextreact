import {
    createThemeContract,
    createTheme
} from '@vanilla-extract/css'



export const contract = createThemeContract({
    colors: {
        primary: null,
        secondary: null
    },
    fonts: {
        primary: null,
        secondary: null
    }
})

export const themePrimary = createTheme(contract, {
    colors: {
        primary: 'blue',
        secondary: 'grey'
    },
    fonts: {
        primary: 'serif',
        secondary: 'sans-serif'
    }
})











