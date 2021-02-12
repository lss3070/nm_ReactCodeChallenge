import { useEffect, useState } from "react";
import { getExchanges } from "../../api";

const useExchnages = () => {
  const [state, setState] = useState({
    loading: true,
    exchanges: []
    // exchanges: [{ name: null, description: null, link: { website: null } }]
  });

  const getExchnagesdata = async () => {
    try {
      const { data: exchanges } = await getExchanges();
      setState({ exchanges, loading: false });
    } catch (e) {
    } finally {
    }
  };
  useEffect(() => {
    getExchnagesdata();
  }, []);
  return state;
};

export default useExchnages;
