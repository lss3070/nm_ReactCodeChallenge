import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import CoinDetail from "../../Components/CoinDetail";

const CoinsPresenter = ({ loading, coin, pathname }) =>
  loading ? (
    <Loader />
  ) : (
    <CoinDetail key={coin.id} coin={coin} path={pathname} />
  );
// <Coin key={coin.id} {...coin} />

CoinsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired
  }),
  pathname: PropTypes.string.isRequired
};

export default CoinsPresenter;
