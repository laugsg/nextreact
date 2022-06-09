import React from "react";

export default function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <img className="card-avatar" src="https://bit.ly/2qGUB4W" />
      </div>
      <div className="card-body">
        <h3 className="card-body-title">Card Title</h3>
        <p className="card-body-desc">Some description</p>
        <div className="card-body-footer">
          <span className="card-body-footer-badge">Offer!</span>
          <button className="card-body-footer-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
