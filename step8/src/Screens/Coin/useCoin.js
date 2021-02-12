import { useEffect, useState } from "react";
import { getCoinDetail } from "../../api";

const useCoin = (coinid) => {
  const [state, setState] = useState({
    loading: true,
    coin: null
    // exchanges: [{ name: null, description: null, link: { website: null } }]
  });

  const getCoindetaildata = async () => {
    try {
      const { data: coin } = await getCoinDetail(coinid);

      setState({ coin, loading: false });
      return;
    } catch (e) {
    } finally {
    }
  };
  useEffect(() => {
    getCoindetaildata();
  }, []);
  return state;
};

export default useCoin;
