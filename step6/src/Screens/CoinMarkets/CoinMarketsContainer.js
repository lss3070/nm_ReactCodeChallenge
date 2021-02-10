import React from "react";
import CoinDetailListPresenter from "./CoinMarketsPresenter";
import { getCoins } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
      error: null,
      loading: true
    };
  }

  getCoinsDetailList = async (id) => {
    try {
      const { data: coins } = await getCoins.detaillist(id, "markets");
      this.setState({ coins });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  async componentDidMount() {
    await this.load();
  }

  async load() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const parsedId = id;
    this.getCoinsDetailList(parsedId);
  }

  render() {
    return <CoinDetailListPresenter {...this.state} />;
  }
}
