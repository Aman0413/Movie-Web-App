import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { data } = props;

  console.log(data);
  return (
    <div className="MovieCard">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-item">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
