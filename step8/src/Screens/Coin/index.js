import React from "react";
import useCoin from "./useCoin";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import { Route, Link, Switch } from "react-router-dom";

import { Markets } from "../../Components/Market";
import { CoinExchanges } from "../../Components/CoinExchange";

const Coin = (props) => {
  const coinid = props.match.params.id;
  const pathname = props.location.pathname;
  const { loading, coin } = useCoin(coinid);

  const Title = styled("h1")``;

  const Description = styled("p")`
    margin: 30px 0px;
  `;

  const KeyValueRow = styled("div")`
    margin-bottom: 5px;
  `;

  const Key = styled("span")`
    font-weight: 600;
  `;

  const Value = styled("span")``;

  const InsideMenu = styled("div")`
    margin: 20px 0px;
  `;

  const List = styled("ul")`
    display: flex;
  `;

  const Item = styled("li")`
    margin-right: 20px;
    text-transform: uppercase;
    font-weight: 600;
    border: 2px solid #1abc9c;
    padding: 5px;
    border-radius: 3px;
    background-color: ${(props) => (props.active ? "#1abc9c" : "transparent")};
    color: ${(props) => (props.active ? "white" : "black")};
  `;

  return loading ? (
    <Loader />
  ) : (
    <>
      <Title>
        {coin.name} / {coin.symbol}
      </Title>
      <Description>{coin.description}</Description>
      <KeyValueRow>
        <Key>Rank:</Key> <Value>{coin.rank}</Value>
      </KeyValueRow>
      <KeyValueRow>
        <Key>Open Source:</Key> <Value>{coin.open_source ? "Yes" : "No"}</Value>
      </KeyValueRow>
      <KeyValueRow>
        <Key>Proof Type:</Key> <Value>{coin.proof_type}</Value>
      </KeyValueRow>
      <KeyValueRow>
        <Key>Structure:</Key> <Value>{coin.org_structure}</Value>
      </KeyValueRow>
      <InsideMenu>
        <List>
          <Item active={pathname === `/coins/${coin.id}/markets`}>
            <Link to={`/coins/${coin.id}/markets`}>Markets</Link>
          </Item>
          <Item active={pathname === `/coins/${coin.id}/exchanges`}>
            <Link to={`/coins/${coin.id}/exchanges`}>Exchanges</Link>
          </Item>
        </List>
      </InsideMenu>
    </>
  );
};

export default Coin;
