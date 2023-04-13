import React from "react";
import "./cards.css";
import CardType from "../CardType/CardType";

function Cards() {
  return (
    <div className="card_layout">
      <div className="card_layout-top">
        <div className="card_layout-name">NAME</div>
      </div>
      <div className="card_layout-bottom">
        <div className="card_layout-heading">
          <div className="card_layout-left">199BBY</div>
          <div className="card_layout-right">Species</div>
        </div>
        <hr className="card_line" />
        <CardType />
      </div>
    </div>
  );
}

export default Cards;
