import { style } from '@vanilla-extract/css'
export const container = style({
    display: "flex",
    // height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    "@media": {
      "screen and (max-width: 1024px)": {
        display: "flex",
        aligItems: "center",
      },
    },
  })
