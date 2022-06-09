import { createThemeContract } from '@vanilla-extract/css'

export const contractDefaultButton = createThemeContract({
    border: {
        border: null,
        borderRadius: null,
        borderColor: null,
        borderStyle: null,
        borderWidth: null,
    },
    color: {
        primary: null,
        secondary: null,
        default: null
    },
    background: {
        primary: null,
        secondary: null,
        default: null
    },
    size: {
        small: null,
        medium: null,
        large: null,
    },
    margin: {
        small: null,
        medium: null,
        large: null,
    },
    padding: {
        small: null,
        medium: null,
        large: null,
    }
})