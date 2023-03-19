import React, { useEffect } from "react";
import "./Home.scss";
import MovieListing from "../movielisting/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../redux/movies/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies("avengers"));
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div className="Home">
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
