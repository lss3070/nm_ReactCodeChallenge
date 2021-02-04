import React from "react";
import Router from "./Router";
import GlobalStyles from "../Components/GlobalStyles";

function App() {
  return (
    <div>
      <h1>Coin Explorer</h1>
      <Router />
      <GlobalStyles></GlobalStyles>
    </div>
  );
}
export default App;
