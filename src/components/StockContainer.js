import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStocks}) {

  const stockList = stocks.map((stock) => (
    <Stock key={stock.id} stocks={stock} onStockClick={addStocks} />
  ));

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
