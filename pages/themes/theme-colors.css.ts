import { createTheme } from '@vanilla-extract/css'

import { contractColors } from '../contracts/contract-colors.css'

export const themeColors = createTheme(contractColors, {
    colors: {
        primary: '#79e769',
        secondary: '#69d2e7',
        default: '#e0e4cc'
    }
})