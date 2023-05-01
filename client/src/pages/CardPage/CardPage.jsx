import React from "react";
import "./cardPage.css";
import Header from "../../components/header/Header";
import BreadCrumbsSeparator from "../../components/BreadCrumbs/BreadCrumbsSeparator";
import SearchRow from "../../components/SearchRow/SearchRow";
import Cards from "../../components/Cards/Cards";
import PaginationRounded from "../../components/Pagination/PaginationFooter";

function CardPage() {
  return (
    <div className="card-page-footer">
      <div className="card-div">
        <div className="card-page">
          <Header />
          <div className="bread-crumbs">
            <BreadCrumbsSeparator />
          </div>
          <SearchRow />
          <div className="cards-grid">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
      <div className="footer">
        <PaginationRounded />
      </div>
    </div>
  );
}

export default CardPage;
