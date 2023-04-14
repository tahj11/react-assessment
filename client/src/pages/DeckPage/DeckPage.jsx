import React from "react";
import Header from "../../components/header/Header";
import BreadCrumbsSeparator from "../../components/BreadCrumbs/BreadCrumbsSeparator";
import SearchRow from "../../components/SearchRow/SearchRow";

function DeckPage() {
  return (
    <div className="card-div">
      <div className="card-page">
        <Header />
        <div className="bread-crumbs">
          <BreadCrumbsSeparator />
        </div>
        <SearchRow />
        <div className="cards-grid"></div>
      </div>
    </div>
  );
}

export default DeckPage;
