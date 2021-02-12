import React from "react";
import useCoin from "./useCoins";
import Loader from "../../Components/Loader";
import Coin from "../../Components/Coin";

const Exchanges = () => {
  const { loading, coins } = useCoin();

  return loading ? (
    <Loader />
  ) : (
    coins
      .filter((coin) => coin.rank !== 0)
      .sort((first, second) => first.rank - second.rank)
      .map((coin) => <Coin key={coin.id} {...coin} />)
  );
};

export default Exchanges;
