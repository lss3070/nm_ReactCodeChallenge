import React from "react";
import ReactDOM from "react-dom";
import useList from "./useList";
import styled from "styled-components";
import "./styles.css";

function App() {
  const [pageNum, movies, loading, setRef] = useList();

  return (
    <>
      <h1>Infinite Movies / Pages{pageNum}</h1>
      {movies &&
        movies.length &&
        movies.map((item, index) => {
          return <div key={item.index}>{item.title}</div>;
        })}
      <div ref={setRef} className="Loading">
        {loading && "Loading..."}
      </div>
    </>

    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
