import React, { Component } from "react";

//Components
import { Container, Row, Col } from "react-bootstrap";
import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";

import "./HeaderComponent.scss";

class HeaderComponent extends Component {
  constructor() {
    super();

    this.state = { searchValue: "" };

    this.searchInputHandling = this.searchInputHandling.bind(this);
  }

  onAddMovieClick() {
    console.log("clicked");
  }

  searchInputHandling(event) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <div className="Header">
        <div className="background"></div>
        <div className="content">
          <Container fluid>
            <Row>
              <Col xs={12} md={12} lg={12}>
                <div className="main-header">
                  <div className="logo">
                    <span>netflix</span>
                    <span>roulette</span>
                  </div>
                  <div className="btn-add">
                    <Button
                      text="+ ADD MOVIE"
                      transperant={true}
                      onClick={this.onAddMovieClick}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
                <h2 className="search-title">FIND YOUR MOVIE</h2>
                <div className="search">
                  <div className="search-field">
                    <Input
                      type="text"
                      value={this.state.searchValue}
                      onChange={this.searchInputHandling}
                    />
                  </div>
                  <div className="search-btn">
                    <Button text="Search" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
