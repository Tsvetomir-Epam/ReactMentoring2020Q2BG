import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

function MovieCard(props) {
  return (
    <div className="MovieCard">
      <div className="poster">
        <img className="poster-image" src={props.img}></img>

        <div className="info">
          <div className="title-genre">
            <span className="title">{props.title}</span>
            <span className="genre">{props.genre}</span>
          </div>
          <div className="year">{props.year}</div>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number,
};

export default MovieCard;
