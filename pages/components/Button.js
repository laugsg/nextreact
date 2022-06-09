import React from "react";

// styles
import { buttonStyle } from "./Button.css";
import { themeSizing } from "../themes/theme-sizing.css";
import { themeButton } from "../themes/theme-button.css";

export default function Button({ onClick, likes }) {
  return (
    <>
    <div className={`${themeSizing} ${themeButton}`}>
      <button className={buttonStyle.primary} onClick={onClick}>
        Like ({likes})
      </button>
    </div>
      <div className={`${themeSizing} ${themeButton}`}>
        <button className={buttonStyle.secondary} onClick={onClick}>
          Like ({likes})
        </button>
      </div>
      <div className={`${themeSizing} ${themeButton}`}>
        <button className={buttonStyle.tertiary} onClick={onClick}>
          Like ({likes})
        </button>
      </div>
    </>
  );
}
