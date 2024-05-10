import { useState } from "react";
import Search from "./Components/Search.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Welcome />
        <Search />
      </div>
    </>
  );
}
function Welcome() {
  return (
    <div className="welcome">
      <h1>
        Welcome to <span className="name">Cource Finder</span>
      </h1>
      <p>here you can find any cource to learn</p>
    </div>
  );
}

export default App;
