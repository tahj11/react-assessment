import React from "react";
import "./searchRow.css";

function SearchRow() {
  return (
    <div className="searchRow">
      <form action="">
        <input type="text" placeholder="Search" />
      </form>
      <div className="AtoZCard">A to Z</div>
      <div className="youngCard">Youngest</div>
      <div className="oldCard">Eldest</div>
    </div>
  );
}

export default SearchRow;
