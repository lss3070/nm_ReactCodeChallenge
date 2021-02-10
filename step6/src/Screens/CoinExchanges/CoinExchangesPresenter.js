import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import CoinDetailList from "../../Components/CoinExchanges";

const CoinDetailListPresenter = ({ loading, coins }) =>
  loading ? (
    <Loader />
  ) : (
    coins.map((coin, index) => (
      <CoinDetailList
        key={index}
        name={coin.name}
        exchange_name={coin.exchange_name}
        fiats={coin.fiats}
      ></CoinDetailList>
    ))
  );

CoinDetailListPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      exchange_name: PropTypes.string,
      name: PropTypes.string,
      fiats: PropTypes.arrayOf(
        PropTypes.shape({
          symbol: PropTypes.string
        })
      )
    })
  ).isRequired
};

export default CoinDetailListPresenter;
