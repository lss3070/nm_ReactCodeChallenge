import { useEffect, useState } from "react";
import { getCoinMarkets } from "../../api";

const useMarkets = (id) => {
  const [state, setState] = useState({
    loading: true,
    markets: []
    // exchanges: [{ name: null, description: null, link: { website: null } }]
  });

  const getCoinMarketsdata = async () => {
    try {
      const { data: markets } = await getCoinMarkets(id);
      setState({ markets, loading: false });
    } catch (e) {
    } finally {
    }
  };
  useEffect(() => {
    getCoinMarketsdata();
  }, []);
  return state;
};

export default useMarkets;
