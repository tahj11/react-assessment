import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="heading">
      <div className="card-header">
        <div className="left">
          <div className="all-cards">All Cards</div>
          <div className="decks-card">Decks</div>
        </div>
        <div className="center">
          <div className="header-title">
            <span>SW-</span>API Deck Builder
          </div>
        </div>
        <div className="right">
          <div className="name-card">Tahjay Johnson</div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
