import React from "react";

// styles
import { buttonStyle } from "../styles/styles-button.css";
import { themeSizing } from "../themes/theme-sizing.css";
import { themeButton } from "../themes/theme-button.css";

/** ButtonN: client-side
 * theme: theme-sizing.css && theme-button.css.ts
 * style variant: styles-button.css.ts
 */

export function ButtonOne() {
  return (
    <>
    {/* location: Left */}
    <div className={`${themeSizing} ${themeButton}`}>
      <button className={buttonStyle.primary}>
        Add to Cart
      </button>
    </div>
    </>
  );
}

export function ButtonTwo() {
  return (
    <>
    {/* location: Center */}
    <div className={`${themeSizing} ${themeButton}`}>
      <button className={buttonStyle.secondary}>
        Add to Cart
      </button>
    </div>
    </>
  );
}


export function ButtonThree() {
  return (
    <>
    {/* location: Right */}
    <div className={`${themeSizing} ${themeButton}`}>
      <button className={buttonStyle.tertiary}>
        Add to Cart
      </button>
    </div>
    </>
  );
}
