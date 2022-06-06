import React from "react";

/**
 * Theme implementation is algebraic,
 * A style file works to define how contract connect with css properties,
 * then it's imported into the component to be used as parent wrapper,
 * finally the theme definition is implemented as class names for child elements
 * 
 * Process :
 * 1. define how the Contract is it
 * 2. define how the Theme implements the contract
 * 3. define how the Style is based in 
 * which css property is defined by each contract value.
 * 4. import the Theme into the component
 * 5. import Style Definition
 * 6. Place the Theme as parent wrapper
 * 7. Place the Style Definition as child wrapper
 * 
 * Files involved:
 * 1. contract.css.ts (contract & theme)
 * 2. style.css.ts (style definition - imports the contract)
 * 3. Component.tsx/jsx/js (imports theme & themeDefinition)
 */

import {
  themePrimary
} from './contracts/contract.css'
import {
  themePrimaryDefinition
} from './styles.css'




export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      {/* - */}
      <div className={themePrimary}>
      <div className={themePrimaryDefinition}>
        <Header title="Develop. Preview. Ship. 🚀" />
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>

        <button onClick={handleClick}>Like ({likes})</button>
      </div>
      </div>
    </>
  );
}


function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}