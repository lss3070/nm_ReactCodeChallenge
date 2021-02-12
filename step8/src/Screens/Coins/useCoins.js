import { useEffect, useState } from "react";
import { getCoins } from "../../api";

const useCoins = () => {
  const [state, setState] = useState({
    loading: true,
    coins: []
    // exchanges: [{ name: null, description: null, link: { website: null } }]
  });

  const getCoinsdata = async () => {
    try {
      const { data: coins } = await getCoins();
      setState({ coins, loading: false });
    } catch (e) {
    } finally {
    }
  };
  useEffect(() => {
    getCoinsdata();
  }, []);
  return state;
};

export default useCoins;
