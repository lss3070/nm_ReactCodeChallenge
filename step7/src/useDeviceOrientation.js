import { useState, useEffect } from "react";

function useDeviceOrientation() {
  const [deviceOrientation, setDeviceOrientation] = useState({
    alpha: null,
    beta: null,
    gamma: null
  });
  const updateDeviceOrientation = (e) => {
    setDeviceOrientation({ alpha: e.alpha, beta: e.beta, gamma: e.gamma });
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", updateDeviceOrientation, true);

    return () =>
      window.removeEventListener(
        "deviceorientation",
        updateDeviceOrientation,
        true
      );
  });
  return deviceOrientation;
}

export default useDeviceOrientation;
