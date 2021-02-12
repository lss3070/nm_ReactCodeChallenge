import React from "react";
import ReactDOM from "react-dom";
import usePrices from "./usePrices";
import Loader from "../../Components/Loader";
import Price from "../../Components/Price";

const Prices = () => {
  const { loading, prices } = usePrices();

  return loading ? (
    <Loader />
  ) : (
    prices.map((price) => <Price key={price.id} {...price} />)
  );
};

export default Prices;
