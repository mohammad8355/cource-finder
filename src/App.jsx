import { useEffect, useState } from "react";
import Search from "./Components/Search.jsx";
import "./App.css";
import "./index.css";
import "./bootstrap-grid.min.css";
import CourceList from "./Components/CourceList.jsx";
import { urlmaker } from "./youtubeApi.js";
import {aparaturlmaker} from "./aparatapi.js";

function App() {
  const [cources, setCources] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    async function fetchYouTubeCource(searchparameter) {
      try {
        const url = urlmaker(searchparameter,10);
        let result = await fetch(url,{signal: controller.signal});
        if (result.ok) {
          const data = await result.json();
          setCources(data.items);
        } else {
          throw new Error("fail to request to youtube api");
        }
      } catch (err) {
        console.error(err);
        return [];
      }
    }
    fetchYouTubeCource(query);
    return function(){
      controller.abort();
    }
  }, [query]);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchAparateCource(searchparameter) {
      try {
        const url = aparaturlmaker(searchparameter,10);
        let result = await fetch(url,{signal: controller.signal});
        if (result.ok) {
          const data = await result.json();
          console.log(`this is aparat data ${data}`);
          // setCources(data.);
        } else {
          throw new Error("fail to request to youtube api");
        }
      } catch (err) {
        // console.error(err);
        return [];
      }
    }
    fetchAparateCource(query);
    return function(){
      controller.abort();
    }
  }, [query]);
  return (
    <>
      <div className="container">
        <Welcome />
        <Search setQuery={setQuery} />
      </div>
      <div>
        <CourceList cources={cources} />
      </div>
      {/* <CourceDetail /> */}
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
