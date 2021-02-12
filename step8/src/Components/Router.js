import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Coin from "../Screens/Coin";
import Prices from "../Screens/Prices";
import Markets from "../Screens/Markets";
import CoinExchanges from "../Screens/CoinExchanges";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins" exact component={Coins} />
      <Route path="/coins/:id" component={Coin} />
      <Switch>
        <Route path="/coins/:id/markets" component={Markets} />
        <Route path="/coins/:id/exchanges" component={CoinExchanges} />
      </Switch>
    </Router>
  );
};
