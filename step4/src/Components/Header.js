import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header``;
const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 30px 0;
`;

const Item = styled.li`
  margin-right: 40px;
`;

const SLink = styled(Link)`
  color: black;
  font-size: 20px;
  justify-content: center;
  font-weight: bold;
  &: hover {
    color: white;
    background-color: #ffca26;
  }
`;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Prices</SLink>
      </Item>
      <Item>
        <SLink to="/exchanges">Exchanges</SLink>
      </Item>
      <Item>
        <SLink to="/coins">Coins</SLink>
      </Item>
    </List>
  </Header>
);
