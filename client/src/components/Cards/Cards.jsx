import React, { useEffect, useState } from "react";
import "./cards.css";
import CardType from "../CardType/CardType";
import axios from "axios";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/user/")
      .then((result) => {
        console.log(result.data);
        setCards(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="card_layout">
      <div className="card_layout-top">
        {/* <div className="icon_top"></div> */}

        <div className="card_layout-name">NAME</div>
      </div>
      <div className="card_layout-bottom">
        <div className="card_layout-heading">
          <div className="card_layout-left">199BBY</div>
          <div className="card_layout-right">Species</div>
        </div>
        <hr className="card_line" />
        <div className="cardtype_grid">
          <CardType />
          {/* <CardType />
          <CardType /> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
