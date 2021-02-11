import { useState, useEffect } from "react";
const useGeolocation = () => {
  const [geolocation, setGelocation] = useState({
    coords: { lat: null, long: null },
    error: null
  });

  const updateCoords = (e) => {
    setGelocation({
      coords: { lat: e.coords.latitude, long: e.coords.longitude },
      error: null
    });
  };
  const updateError = (e) => {
    setGelocation({
      coords: { lat: null, long: null },
      error: e.message
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(updateCoords, updateError);
  }, []);

  return geolocation;
};

export default useGeolocation;
