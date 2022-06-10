import { style } from '@vanilla-extract/css'
export const container = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'sans-serif',
    "@media": {
      "screen and (max-width: 1024px)": {
        display: "flex",
        aligItems: "center",
        flexWrap: "wrap"
      },
    },
  })
