import { useEffect, useState } from "react";
import { getCoinExchanges } from "../../api";

const useCoinExchanges = (id) => {
  const [state, setState] = useState({
    loading: true,
    exchanges: []
    // exchanges: [{ name: null, description: null, link: { website: null } }]
  });

  const getCoinExchangesdata = async () => {
    try {
      console.log(id);

      const { data: exchanges } = await getCoinExchanges(id);
      setState({ exchanges, loading: false });
      console.log(exchanges);
      console.log(state);
    } catch (e) {
    } finally {
    }
  };
  useEffect(() => {
    getCoinExchangesdata();
  }, []);
  return state;
};

export default useCoinExchanges;
