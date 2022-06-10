import { createTheme } from '@vanilla-extract/css'
import { contractColors } from '../contracts/contract-colors.css'

/** client-side
 * Contracts & themes are configured
 * with client-side API 
 */
export const themeColors = createTheme(contractColors, {
    colors: {
        primary: '#79e769',
        secondary: 'purple',
        default: '#e0e4cc'
    }
})