import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import CommonApi from "../../api";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data } = await CommonApi.getCoins();

      this.setState({ result: data });
    } catch (e) {
      this.setState({ error: "Cant't find anything." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <CoinsPresenter result={result} error={error} loading={loading} />;
  }
}
