import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const MarketItem = styled.div`
  text-decoration: underline;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Coin = ({ exchange_name }) => (
  <Container>
    <MarketItem>{exchange_name}</MarketItem>
  </Container>
);

Coin.propTypes = {
  exchange_name: PropTypes.string,
  name: PropTypes.string,
  fiats: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired
    })
  )
};

export default Coin;
