import React from "react";

/**
 * Theme implementation is algebraic,
 * A style file works to define how contract connect with css properties,
 * then it's imported into the component to be used as parent wrapper,
 * finally the theme definition is implemented as class names for child elements
 */
import { darkTheme, lightTheme } from "./libs/globalVars.css";
// - Global theme plus local stlyes
// import * as styles from "./component.css";
import {
  global
} from './libs/global-theme.css'
// - Theme as wrapper plus styles
import { themeClass, exampleStyle } from "./theme-without-contract.css";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      {/* - Global theme plus local stlyes */}
      {/* <div className={styles.themeVars}> */}
        <div className={lightTheme}>
          {/* - Theme as wrapper plus styles */}
          <div className={themeClass}>
            <div className={exampleStyle}>
              <Header title="Develop. Preview. Ship. 🚀" />
              <ul>
                {names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>

              <button onClick={handleClick}>Like ({likes})</button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
