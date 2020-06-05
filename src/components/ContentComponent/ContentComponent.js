import React, { Component } from "react";

//Components
import { Container, Row, Col } from "react-bootstrap";
import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";
import MovieCard from "../shared/MovieCard/MovieCard";

import "./ContentComponent.scss";

class ContentComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Content">
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="filter-menu">
                <div className="genre-menu">
                  <ul className="genre-list">
                    <li>
                      <span className="selected">All</span>
                    </li>
                    <li>
                      <span>Documentary</span>
                    </li>
                    <li>
                      <span>Comedy</span>
                    </li>
                    <li>
                      <span>Horror</span>
                    </li>
                    <li>
                      <span>Crime</span>
                    </li>
                  </ul>
                </div>
                <div className="sort">
                  <span className="sort-title">Sort by</span>
                  <div className="dropdown">
                    <div className="dropdown-title">
                      Release date <span className="down-arrow">&#9660;</span>
                    </div>
                    <div className="dropdown-content">
                      <ul>
                        <li>Rating</li>
                        <li>Year</li>
                        <li>Latest</li>
                        <li>Oldest</li>
                        <li>Likes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="horizontal-line"></hr>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="movies-found">
                <span className="movies-found-count">39</span>
                <span>movies found</span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={12} lg={4}>
              <div className="movie-card">
                <MovieCard
                  img="https://www.mauvais-genres.com/20615/alien-covenant-movie-poster-15x21-in-2017-ridley-scott-michael-fassbender.jpg"
                  title="Alien"
                  genre="Horror"
                  year={1979}
                />
              </div>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <div className="movie-card">
                <MovieCard
                  img="https://i.pinimg.com/originals/64/94/68/649468d4fd03bbf88f0f6d968e5b8946.jpg"
                  title="Phone booth"
                  genre="Action"
                  year={2002}
                />
              </div>
            </Col>

            <Col xs={12} md={12} lg={4}>
              <div className="movie-card">
                <MovieCard
                  img="https://i.pinimg.com/originals/cf/de/36/cfde369eea2a81535f8ec5be1b098349.jpg"
                  title="Fast 5"
                  genre="Action"
                  year={2012}
                />
              </div>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <div className="movie-card">
                <MovieCard
                  img="https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg"
                  title="Chernobyl"
                  genre="Documentary"
                  year={2019}
                />
              </div>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <div className="movie-card">
                <MovieCard
                  img="https://cdn.ozone.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/z/a/7234c6364e45cd8f73f32eed92a2ea1a/zakrilnikat-2-blu-ray-30.jpg"
                  title="The Equalizer 2"
                  genre="Action"
                  year={2018}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContentComponent;
