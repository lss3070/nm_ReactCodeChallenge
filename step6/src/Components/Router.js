import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import CoinDetail from "../Screens/CoinDetail";
import CoinExchanges from "../Screens/CoinExchanges";
import CoinMarkets from "../Screens/CoinMarkets";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route path="/coins" exact component={Coins} />
      <Route path="/coins/:id" component={CoinDetail} />
      <Switch>
        <Route path="/coins/:id/exchanges" component={CoinExchanges} />
        <Route path="/coins/:id/markets" component={CoinMarkets} />
      </Switch>
    </Router>
  );
};
