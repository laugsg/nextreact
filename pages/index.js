import React from "react";

// Elements
import Button from "./components/Button";
import ButtonVariant from "./components/ButtonVariant";
import Card from "./components/Card";
/**
 * Theme implementation
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

// Styles
import { container } from './index.css'
import { themePrimary } from "./themes/theme-primary.css";
import { sprinkles } from "./styles/styles-contract-sprinkles.css";
import { themePrimaryDefinition } from "./styles/styles-contract.css";

// components
export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div className={container}>
      <Card />
      {/* - */}
      {/* <div className={themePrimaryWrapper}> */}
      {/* 1. reuse contracts into Sprinkles */}
      <div className={themePrimary}>
        <div className={themePrimaryDefinition}>
          {/* <div className={themeSprinkles}> */}
          <Header />
          <ul>
            {/*  */}
            {names.map((name) => (
              <li
                className={sprinkles({
                  color: "default",
                })}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>

          <ButtonVariant onClick={handleClick} likes={likes} />

          {/* <hr /> */}

          {/* <Button onClick={handleClick} likes={likes} /> */}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}

function Header() {
  return (
    <>
      {/* 2. load values into Sprinkles */}
      <h1
        className={sprinkles({
          color: "secondary",
        })}
      >
        Fancy Title
      </h1>
    </>
  );
}
