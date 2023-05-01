import React from "react";
import "./cardType.css";
import { IoPlanetOutline } from "react-icons/io5";
import TramOutlinedIcon from "@mui/icons-material/TramOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

function CardType() {
  return (
    <div className="card_type-layout">
      <div className="card_type">
        <div className="card_type-content">
          <div className="card_type-left">
            <IoPlanetOutline />
            HomeWorld
          </div>
          <div className="card_type-right">Planet</div>
        </div>
      </div>
      <div className="card_type">
        <div className="card_type-content">
          <div className="card_type-left">
            <TramOutlinedIcon fontSize="20px" />
            Vehicles
          </div>
          <div className="card_type-right">0</div>
        </div>
      </div>
      <div className="card_type">
        <div className="card_type-content">
          <div className="card_type-left">
            <RocketLaunchOutlinedIcon fontSize="20px" />
            StarShips
          </div>
          <div className="card_type-right">0</div>
        </div>
      </div>
    </div>
  );
}

export default CardType;
