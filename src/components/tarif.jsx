import "./tarif.css";

function Rate({
  title,
  price,
  speed,
  description,
  isRate300,
  isRate450,
  isRate550,
  isRate1000,
  isSelected,
}) {
  return (
    <div className="wraper">
      <div className={"card-wraper " + (isSelected ? "selected" : "")}>
        <div
          className={
            "card-title " +
            (isRate300 ? "title-bg300" : "") +
            (isRate450 ? "title-bg450" : "") +
            (isRate550 ? "title-bg550" : "") +
            (isRate1000 ? "title-bg1000" : "")
          }
        >
          {title}
        </div>
        <div className="card-price">
          <div
            className={
              "card-price-currency " +
              (isRate300 ? "price-bg300" : "") +
              (isRate450 ? "price-bg450" : "") +
              (isRate550 ? "price-bg550" : "") +
              (isRate1000 ? "price-bg1000" : "")
            }
          >
            руб.
          </div>
          <div
            className={
              "card-price-rate " +
              (isRate300 ? "price-bg300" : "") +
              (isRate450 ? "price-bg450" : "") +
              (isRate550 ? "price-bg550" : "") +
              (isRate1000 ? "price-bg1000" : "")
            }
          >
            {price}
          </div>
          <div
            className={
              "card-price-term " +
              (isRate300 ? "price-bg300" : "") +
              (isRate450 ? "price-bg450" : "") +
              (isRate550 ? "price-bg550" : "") +
              (isRate1000 ? "price-bg1000" : "")
            }
          >
            /мес.
          </div>
        </div>
        <div className="card-speed">{speed}</div>
        <div className="card-description">{description}</div>
      </div>
    </div>
  );
}

export default Rate;
