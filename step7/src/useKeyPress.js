import { useState, useEffect } from "react";

const useKeyPress = (keyValue) => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === keyValue) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === keyValue) {
      setKeyPressed(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", downHandler);
    document.addEventListener("keyup", upHandler);
    return () => {
      document.removeEventListener("keydown", downHandler);
      document.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyPressed;
};
export default useKeyPress;
