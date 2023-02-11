import React from "react";

function Stock({stocks, onStockClick}) {
  function handleClick() {
    onStockClick(stocks);
  }
 
console.log(stocks)
  return (
    <div onClick = {handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stocks.name}</h5>
          <p className="card-text">{stocks.ticker}: {stocks.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
