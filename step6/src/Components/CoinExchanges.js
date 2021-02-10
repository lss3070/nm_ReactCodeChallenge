import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const ExchangesItem = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Flat = styled.div`
  margin-bottom: 10px;
`;
const FlatItem = styled.a``;

const Coin = ({ name, fiats }) => (
  <Container>
    <ExchangesItem>{name}</ExchangesItem>
    <Flat>
      {fiats && fiats.length > 0 && <FlatItem>Pay On</FlatItem>}
      {fiats &&
        fiats.length > 0 &&
        fiats.map((item, index) => (
          <FlatItem key={index}> {item.symbol} </FlatItem>
        ))}
    </Flat>
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
