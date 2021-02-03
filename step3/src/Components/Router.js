import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Coins from "../Screens/Coins";
import Exchanes from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import Header from "../Components/Header";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/coins" exact component={Coins} />
      <Route path="/exchanges" exact component={Exchanes} />
      <Route path="/prices" exact component={Prices} />
    </Router>
  );
};
