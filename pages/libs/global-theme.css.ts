import {
    createGlobalTheme,
} from '@vanilla-extract/css';

export const globalThemeVars = createGlobalTheme(':root', {
    colors: {
        blue: 'blue',
        green: 'green',
        pink: 'pink',
        darkslateblue: 'darkslateblue',
        lime: 'lime',
        aquamarine: 'aquamarine',
    },
    space: {
        small: '8px',
        medium: '16px',
        large: '32px',
    }
})