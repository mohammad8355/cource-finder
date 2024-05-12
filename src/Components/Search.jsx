import { useState } from "react";
import "../assets/search-svgrepo-com.svg";
function Search({ setQuery }) {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="searchbox searchbox-left">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="enter any technologies..."
      />
      <svg
        fill="#ffffff"
        height="800px"
        width="800px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 488.4 488.4"
        xmlSpace="preserve"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z" />{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
      <button
        className="btn btn-right"
        onClick={() => setOpenFilter(!openFilter)}
      >
        Filter
      </button>
      {openFilter ? <Filter /> : ""}
    </div>
  );
}
function Filter() {
  return (
    <div className="filter">
      <form>
        <div className="form-group">
          <label>Price</label>
          <select className="select">
            <option value="-">--</option>
            <option value="free">free</option>
            <option value="price">price</option>
          </select>
        </div>
        <div className="form-group">
          <label>Language</label>
          <select className="select">
            <option value="-">--</option>
            <option value="EN">English</option>
            <option value="FA">Farsi</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select className="select">
            <option value="-">--</option>
            <option value="Programming">Programming</option>
            <option value="Marketing">Marketing</option>
            <option value="Personal Development">Personal Development</option>
            <option value="Finance & Accounting">Finance & Accounting</option>
            <option value="Business">Business</option>
            <option value="Health & Fitness">Health & Fitness</option>
          </select>
        </div>
        <div className="form-group">
          <label>SubCategory</label>
          <select className="select">
            <option value="-">--</option>
            {/* <option value="free">free</option>
              <option value="price">price</option> */}
          </select>
        </div>
        <div className="form-group">
          <label>Duration</label>
          <select className="select">
            <option value="-">--</option>
            <option value="short">short</option>
            <option value="medium">medium</option>
            <option value="long">long</option>
            <option value="extraLong">extraLong</option>
          </select>
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input type="number" min="0" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default Search;
