import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="heading">
      <div className="card-header">
        <div className="left">
          <Link to="/">
            <div className="all-cards">All Cards</div>
          </Link>
          <Link to="/deck-page">
            <div className="decks-card">Decks</div>
          </Link>
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
