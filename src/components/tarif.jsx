import "./tarif.css";
import React, { useState } from "react";

function Rate({ title, price, speed, description }) {
  let titleClassname = "title-bg" + price;
  let priceClassname = "price-bg" + price;

  const [select, setSelect] = useState(false);

  const handleSelect = () => {
    setSelect(!select);
  };

  return (
    <div className="wraper">
      <div
        onClick={handleSelect}
        className={"card-wraper " + (select ? "selected" : "")}
      >
        <div className={"card-title " + (titleClassname || "")}>{title}</div>
        <div className={"card-price " + (priceClassname || "")}>
          <div className="card-price-currency">руб.</div>
          <div className="card-price-rate">{price}</div>
          <div className="card-price-term">/мес.</div>
        </div>
        <div className="card-speed">{speed}</div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
}

export default Rate;
