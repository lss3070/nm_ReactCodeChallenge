import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import useDeviceOrientation from "./useDeviceOrientation";
import useFavicon from "./useFavicon";
import useGeolocation from "./useGeolocation";
import useLocalStorage from "./useLocalStorage";
import useKeyPress from "./useKeyPress";
import useMousePosition from "./useMousePosition";
import useLockScroll from "./useLockScroll";
import useOnline from "./useOnline";

function App() {
  const { alpha, beta, gamma } = useDeviceOrientation();

  const setFavicon = useFavicon("https://www.youtube.com/favicon.ico");

  const {
    coords: { lat, long },
    error
  } = useGeolocation();

  const kPress = useKeyPress("k");
  const iPress = useKeyPress("i");
  const mPress = useKeyPress("m");
  const cPress = useKeyPress("c");
  const hPress = useKeyPress("h");

  const [currentLS, setLS] = useLocalStorage();

  const { x, y } = useMousePosition();

  const inOnLine = useOnline();

  const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();

  return (
    <div className="App">
      <h1>SuperHooks!</h1>

      <h2>useDeviceOrientation</h2>

      <ul>
        <li> Alpha : {alpha}</li>
        <li> Beta : {beta}</li>
        <li> Gamma : {gamma}</li>
      </ul>

      <h2>useFavicon</h2>
      <button
        onClick={() => setFavicon("https://stackoverflow.com/favicon.ico")}
      >
        Change Favicon
      </button>

      <h2>useGeolocation</h2>
      <ul>
        <li>Latitude: {lat}</li>
        <li>Longitude: {long}</li>
        <li>Geolocation Error: {error === null ? "null" : error}</li>
      </ul>

      <h2>useKeyPress</h2>
      <ul>
        <li>Pressed 'k' : {kPress && "K"}</li>
        <li>Pressed 'i' : {iPress && "I"}</li>
        <li>Pressed 'm' : {mPress && "M"}</li>
        <li>Pressed 'c' : {cPress && "C"}</li>
        <li>Pressed 'h' : {hPress && "H"}</li>
      </ul>

      <h2>useLocalStorage</h2>
      <ul>
        <li>{currentLS}</li>
        <button onClick={() => setLS("12345")}>Set Value: 12345</button>
        <button onClick={() => setLS(null)}> Clear Ls</button>
      </ul>

      <h2>useMousePosition</h2>
      <ul>
        <li>Mouse :{x}</li>
        <li>Mouse :{y}</li>
      </ul>

      <h2>useOnline</h2>
      <div>{inOnLine ? "Yes" : "No"}</div>

      <h2>useLockScroll</h2>
      <div>Is Locked?{isLocked === "hidden" ? "Yes" : "No"}</div>
      <button onClick={lockScroll}>Lock Scroll</button>
      <button onClick={unlockScroll}>UnLock Scroll</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
