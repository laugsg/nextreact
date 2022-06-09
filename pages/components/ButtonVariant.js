import React from "react";

// styles
import { themeSizing } from "../themes/theme-sizing.css";
import { themeColors } from "../themes/theme-colors.css";
import { buttonDefaultSprinkles } from "./recipes/style-sprinkles.css";
import { themeDefaultButton } from '../components/recipes/theme-default-button.css'
import { button } from '../components/recipes/recipe-button.css'


export default function Button({ onClick, likes }) {
  return (
    <>
    {/* <div className={`${themeSizing} ${themeButton}`}>
      <button className={buttonStyle.primary} onClick={onClick}>
        Love ({likes})
      </button>
    </div> */}
    
    <div className={themeDefaultButton}>
      <button className={buttonDefaultSprinkles({
        color: {
          theme: "secondary"
        },
        margin: "small",
        padding: "small"
      })} onClick={onClick}>
        Love ({likes})
      </button>
    </div>
    
    <div className={`${themeSizing} ${themeColors} ${themeDefaultButton}`}>
      <button className={button({
        color: "default",
        size: "large",
      })} onClick={onClick}>
        Love ({likes})
      </button>
    </div>
    
    <div className={`${buttonDefaultSprinkles} ${themeSizing} ${themeColors} ${themeDefaultButton}`}>
      <button className={button({
        color: "secondary",
        size: "large",
        margin: "small",
      })} onClick={onClick}>
        Love ({likes})
      </button>
    </div>
    </>
  );
}
