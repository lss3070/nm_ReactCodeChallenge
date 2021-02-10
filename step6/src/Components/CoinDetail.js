import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Title = styled.h1``;

const Description = styled.div`
  margin-bottom: 20px;
`;

const ItemList = styled.ul`
  margin-bottom: 20px;
`;

const Item = styled.li``;

const Btn = styled.button`
  border: 2px solid #489079;
  background-color: white;
  width: 140px;
  height: 40px;
  margin-right: 20px;
  font-size: 18px;
  text-align: center;
  &:focus {
    outline: 0;
  }
  &:hover {
    border: 2px solid #489079;
    color: white;
    background-color: #489079;
    cursor: pointer;
  }
`;
const CoinsItem = ({ coin, path }) =>
  ({ coin } && (
    <Container>
      <Title>
        {coin.name} / {coin.symbol}
      </Title>
      <Description>{coin.description}</Description>
      <ItemList>
        <Item>Rank: {coin.rank}</Item>
        <Item>Open Source: {coin.open_source ? "Yes" : "No"}</Item>
        <Item>Proof Type: {coin.proof_type}</Item>
        <Item>Structure: {coin.org_structure}</Item>
      </ItemList>
      <Link to={`${path}/markets`}>
        <Btn>MARKETS</Btn>
      </Link>
      <Link to={`${path}/exchanges`}>
        <Btn>EXCHANGES</Btn>
      </Link>
    </Container>
  ));

CoinsItem.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    open_source: PropTypes.bool.isRequired,
    proof_type: PropTypes.string.isRequired,
    org_structure: PropTypes.string.isRequired
  }).isRequired
};

export default CoinsItem;
