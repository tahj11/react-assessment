import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="heading">
      <div className="card-header">
        <div className="left">
          <div className="all-cards">
            <Link to="/">All Cards</Link>
          </div>
          <div className="decks-card">
            <Link to="/deck-page">Decks</Link>
          </div>
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
