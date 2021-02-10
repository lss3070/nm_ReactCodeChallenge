import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-decoration: underline;
  font-size: 18px;
  margin-bottom: 20px;
`;
const RankItem = styled.span`
  font-weight: bold;
`;

const CoinsItem = ({ coin }) => (
  <Link to={`/coins/${coin.id}`}>
    <Container>
      <RankItem>#{coin.rank} </RankItem>
      {coin.name}/{coin.symbol} →
    </Container>
  </Link>
);

CoinsItem.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired
  }).isRequired
};

export default CoinsItem;
