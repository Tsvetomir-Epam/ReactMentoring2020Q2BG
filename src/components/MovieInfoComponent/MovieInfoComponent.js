import React from "react";
import "./MovieInfoComponent.scss";
import { Container, Row, Col } from "react-bootstrap";
import MainHeader from "../shared/MainHeader/MainHeader";
import { FaSearch } from "react-icons/fa";

function MovieInfoComponent(props) {
  return (
    <div className="MovieInfo">
      <Container fluid>
        <MainHeader buttonText={<FaSearch/>} />
        <Row className="info">
          <Col xs={12} md={6} lg={4} className="poster">
            <img src="https://www.mauvais-genres.com/20615/alien-covenant-movie-poster-15x21-in-2017-ridley-scott-michael-fassbender.jpg"></img>
          </Col>

          <Col xs={12} md={6} lg={8} className="movie-content">
            <div className="title-score">
              <span className="title">Alien COVENANT</span>
              <span className="score">4.9</span>
            </div>
            <div className="aditional-info">Oscar wining movie</div>
            <div className="year-length">
              <span className="year">1994</span>
              <span className="length">154 min</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MovieInfoComponent;
