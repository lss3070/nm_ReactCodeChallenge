import React from "react";
import CoinDetailPresenter from "./CoinDetailPresenter";
import { getCoins } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;

    this.state = {
      coin: null,
      error: null,
      loading: true,
      isCoins: pathname.includes("/coins/"),
      pathname: pathname
    };
  }

  getCoinsDetail = async (id) => {
    try {
      const { data: coin } = await getCoins.detail(id);
      this.setState({ coin });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedId = id;

    if (!parsedId) {
      return push("/");
    }
    this.getCoinsDetail(parsedId);
  }

  render() {
    return <CoinDetailPresenter {...this.state} />;
  }
}
