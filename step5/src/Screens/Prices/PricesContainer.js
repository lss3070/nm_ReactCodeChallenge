import React from "react";
import PricesPresenter from "./PricesPresenter";

import CommonApi from "../../api";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };
  async componentDidMount() {
    try {
      const { data } = await CommonApi.getTickers();
      this.setState({ result: data });
    } catch (e) {
      this.setState({ error: "Cant't find anything." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <PricesPresenter result={result} error={error} loading={loading} />;
  }
}
