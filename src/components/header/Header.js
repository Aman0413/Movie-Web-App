import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import userImg from "../../images/user.png";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../redux/movies/movieSlice";
function Header() {
  const [searchKey, setSearchKey] = useState();

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(fetchAsyncMovies(searchKey));
  }
  return (
    <div className="Header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
