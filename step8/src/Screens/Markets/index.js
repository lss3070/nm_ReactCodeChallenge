import React from "react";
import useMarkets from "./useMarkets";
import Loader from "../../Components/Loader";
import Market from "../../Components/Market";

const Markets = (props) => {
  const coinid = props.match.params.id;
  const { loading, markets } = useMarkets(coinid);

  return loading ? (
    <Loader />
  ) : (
    markets
      .filter((market) => market.market_url)
      .map((market, index) => (
        <Market
          key={market.id || index}
          url={market.market_url}
          name={market.exchange_name}
        />
      ))
  );
};

export default Markets;
