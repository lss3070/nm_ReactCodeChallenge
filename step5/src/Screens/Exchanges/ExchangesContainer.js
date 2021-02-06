import React from "react";
import ExchnagesPresenter from "./ExchangesPresenter";

import CommonApi from "../../api";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data } = await CommonApi.getExchanges();
      this.setState({ result: data });
    } catch (e) {
      this.setState({ error: "Cant't find anything." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;

    return (
      <ExchnagesPresenter result={result} error={error} loading={loading} />
    );
  }
}
