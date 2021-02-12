import { useEffect, useState } from "react";
import { getPrices } from "../../api";

const usePrcies = () => {
  const [state, setState] = useState({
    loading: true,
    prices: []
  });

  const getPricesdata = async () => {
    try {
      const { data: prices } = await getPrices();
      setState({ prices, loading: false });
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  useEffect(() => {
    getPricesdata();
  }, []);
  return state;
};

export default usePrcies;
