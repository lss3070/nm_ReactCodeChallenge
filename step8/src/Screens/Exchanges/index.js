import React from "react";
import useExchanges from "./useExchanges";
import Loader from "../../Components/Loader";
import Exchange from "../../Components/Exchange";

const Exchanges = () => {
  const { loading, exchanges } = useExchanges();

  return loading ? (
    <Loader />
  ) : (
    exchanges.map((exchange) => <Exchange key={exchange.id} {...exchange} />)
  );
};

export default Exchanges;
