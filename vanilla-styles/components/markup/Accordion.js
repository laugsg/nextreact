import React from "react";
import { accordionStyles, panelStyles } from "./recipe-accordion.css";

export function Accordion({ title, para }) {
  const togglePanel = (e) => {
    const panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  return (
    <div style={{ maxWidth: "500px", minWidth: "80px" }}>
      <button
        onClick={togglePanel}
        className={`accordion ${accordionStyles()}`}
      >
        {title}
      </button>
      <div className={`panel ${panelStyles()}`}>
        <p>{para}</p>
      </div>
    </div>
  );
}

export function MultiAccordion({ items }) {
  const togglePanel = (e) => {
    const panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  return items.map((item, index) => (
    <div key={index}>
      <button
        onClick={togglePanel}
        className={`${accordionStyles()}`}
      >
        {item.title}
      </button>
      <div className={`${panelStyles()}`}>
        <p>{item.para}</p>
      </div>
    </div>
  ));
}
