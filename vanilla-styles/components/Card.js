import React from "react";

// styles
import { themeCard } from "../themes/theme-card.css";
import { 
  cardClass, 
  cardHeader, 
  cardAvatar 
} from "../styles/styles-card.css";

export default function Card({children}) {
  return (
    <div className={themeCard}>
      <div className={cardClass}>
        <div className={cardHeader}>
          <img className={cardAvatar} src="https://bit.ly/2qGUB4W" />
        </div>
        <div className="card-body">
          <h3 className="card-body-title">Card Title</h3>
          <p className="card-body-desc">Some description</p>
          <div className="card-body-footer">
            <span className="card-body-footer-badge">Discount</span>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
