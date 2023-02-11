import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, deleteStocks}) {
  const stockList = stocks.map((stock) => (
    <Stock key={stock.id} stocks={stock} onStockClick={deleteStocks} />
  ));
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stockList
      }
    </div>
  );
}

export default PortfolioContainer;
