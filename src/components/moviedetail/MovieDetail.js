import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
  fetchAsyncMovieOrShowDetail,
} from "../../redux/movies/movieSlice";

function MovieDetail() {
  const param = useParams();

  const dispatch = useDispatch();

  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(param.imdbId));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, param]);

  return (
    <div className="MovieDetail">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="left-section">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Languages}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="right-section">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
      ;
    </div>
  );
}

export default MovieDetail;
