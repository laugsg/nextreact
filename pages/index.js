import React from "react";

// Elements
import Card from "./components/Card";
import {
  ButtonOne,
  ButtonTwo,
  ButtonThree
} from "./components/Button";
import { 
  ButtonOneVariant,
  ButtonTwoVariant,
  ButtonThreeVariant
} from "./components/ButtonStyleVariant";


// Styles
import { container } from "./index.css";
import { styleList } from './styles/styles-list.css'
import { sprinkles } from "./styles/styles-sprinkles-reuse-contract.css";
import { themeColors } from "./themes/theme-colors.css";
import { styleListElement } from "./styles/styles-list.css";

// components
export default function HomePage() {

  return (
    <>
      <Header />

      <List />

      <div className={container}>
        <Card>
          <ButtonOne />
          <ButtonOneVariant />
        </Card>
        
        <Card>
          <ButtonTwo />
          <ButtonTwoVariant />
        </Card>

        <Card>
          <ButtonThree />
          <ButtonThreeVariant />
        </Card>
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <h1
        className={sprinkles({
          color: "primary",
        })}
      >
        @vanilla-extract: Proof of Concept
      </h1>
    </>
  );
}

function List() {
  const names = [
    {
      api: "Styling API",
      url: "https://vanilla-extract.style/documentation/styling-api/",
    },
    {
      api: "Sprinkles API",
      url: "https://vanilla-extract.style/documentation/sprinkles-api/",
    },
    {
      api: "Recipes API",
      url: "https://vanilla-extract.style/documentation/recipes-api/",
    },
  ];
  const spkls = sprinkles({
    color: "secondary",
  });
  return (
    <ol className={`${styleList} ${themeColors}`}>
      {names.map((item) => (
        <li
          className={`${styleListElement} ${spkls}`}
          key={item.api}
        >
          {/* 
            If the theme is not provided
            the value comes from the most near definde value.
            e.g: if themeColors variable is comented into the className
            the value of default comes from styles-sprinkles-reuse-contract.css.ts
            because it's defined there but if themeColors is provided as a variable
            the value of default comes from the theme.
            Same for primary/secondary but in those cases any value is provided
            for color so it displays on black.

            Any place which links a contract to provide styling for an element
            Any element which is provided of styling by a methed that links a contract
            it should carries the theme which provides values for that contract.
            e.g: `color:{secondary: contractColors.colors.secondary}`
            this element should carries className={themeColors}
          */}
          <span>
          </span>
          <a href={item.url} target="_blank" style={{marginLeft:'2px',textDecoration:'none'}}>
            {item.api}
          </a>
        </li>
      ))}
    </ol>
  );
}
