import React from "react";
import { Link, withRouter } from "react-router-dom";

export default withRouter(({ location: { pathname } }) => (
  <header>
    <ul>
      <li current={pathname === "/prices"}>
        <Link to="/prices">Prices</Link>
      </li>
      <li current={pathname === "/exchanges"}>
        <Link to="/exchanges">Exchanges</Link>
      </li>
      <li current={pathname === "/coins"}>
        <Link to="/coins">Coins</Link>
      </li>
    </ul>
  </header>
));
