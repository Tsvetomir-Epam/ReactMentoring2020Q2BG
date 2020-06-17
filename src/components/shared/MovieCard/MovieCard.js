import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./MovieCard.scss";

function MovieCard(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/movie");
    window.scrollTo(0, 0);
  }

  return (
    <div className="MovieCard">
      <div className="poster">
        <a onClick={handleClick}>
          <img className="poster-image" src={props.img}></img>
        </a>
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
