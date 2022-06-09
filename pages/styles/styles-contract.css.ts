import {
    style
} from '@vanilla-extract/css'
import {
    contractColors
} from '../contracts/contract-colors.css'

export const themePrimaryDefinition = style({
    background: contractColors.colors.primary
})


// Sprinkles
// import { sprinkles } from './styles-contract-sprinkles.css.ts';
// export const themeSprinkles = sprinkles({
//     background: {
//       lightMode: 'secondary',
//       darkMode: 'default'
//     }
//   });