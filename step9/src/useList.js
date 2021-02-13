import { useEffect, useState, useRef } from "react";
import { getList } from "./api";
import useIntersect from "./useIntersect";

const useList = () => {
  let num = 0;
  const [state, setState] = useState({
    pageNum: 0,
    movies: [],
    isLoading: false
  });

  const fakeFetch = (delay = 1000) =>
    new Promise((res) => setTimeout(res, delay));

  const getListdata = async () => {
    try {
      setState((prev) => {
        return { ...prev, isLoading: true };
      });

      await fakeFetch();
      num += 1;
      const {
        data: {
          data: { movies }
        }
      } = await getList(num);
      setState((pre) => {
        return {
          movies: [...pre.movies, ...movies],
          pageNum: num,
          isLoading: false
        };
      });
    } catch (e) {
    } finally {
    }
  };

  useEffect(() => {
    getListdata(); //초기 세팅
  }, []);

  const [_, setRef] = useIntersect(async (entry, observer) => {
    if (num !== 0) {
      observer.unobserve(entry.target);
      await getListdata();
      observer.observe(entry.target);
    }
  }, {});

  return [state.pageNum, state.movies, state.isLoading, setRef];
};

export default useList;
