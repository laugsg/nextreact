import { contractDefaultButton } from "./contract-default-button.css";
import { createTheme } from '@vanilla-extract/css'

export const themeDefaultButton = createTheme(contractDefaultButton,{
    border: {
        border: '1px',
        borderRadius: '10px',
        borderColor: '#000',
        borderStyle: 'solid',
        borderWidth: '1px',
    },
    background: {
        primary: 'red',
        secondary: 'yellow',
        default: 'purple'
    },
    color: {
        primary: 'red',
        secondary: 'yellow',
        default: 'purple'
    },
    size: {
        small: '5px',
        medium: '10px',
        large: '20px',
    },
    margin: {
        small: '5px',
        medium: '10px',
        large: '20px',
    },
    padding: {
        small: '5px',
        medium: '10px',
        large: '20px',
    }
})