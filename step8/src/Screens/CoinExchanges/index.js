import React from "react";
import useCoinExchanges from "./useCoinExchanges";
import Loader from "../../Components/Loader";
import CoinExchange from "../../Components/CoinExchange";

const CoinExchanges = (props) => {
  const coinid = props.match.params.id;

  const { loading, exchanges } = useCoinExchanges(coinid);

  return loading ? (
    <Loader />
  ) : (
    exchanges
      .filter((exchange) => exchange.fiats.length > 0)
      .map((exchange) => <CoinExchange key={exchange.id} {...exchange} />)
  );
};

export default CoinExchanges;
