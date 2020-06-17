import React, { useState } from "react";

//Components
import { Container, Row, Col } from "react-bootstrap";
import Button from "../shared/Button/Button";
import Input from "../shared/Input/Input";
import MainHeader from "../shared/MainHeader/MainHeader";

import "./HeaderComponent.scss";

function HeaderComponent(props) {
  const [searchValue, setSearchValue] = useState("");

  function onSearchClicked() {
    console.log(searchValue);
  }

  function searchInputHandling(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="Header">
      <div className="background"></div>
      <div className="content">
        <Container fluid>
          <MainHeader buttonText="+ ADD MOVIE" />
          <Row>
            <Col xs={12} md={12} lg={{ span: 6, offset: 3 }}>
              <h2 className="search-title">FIND YOUR MOVIE</h2>
              <div className="search">
                <div className="search-field">
                  <Input
                    type="text"
                    value={searchValue}
                    onChange={searchInputHandling}
                  />
                </div>
                <div className="search-btn">
                  <Button text="Search" onClick={onSearchClicked} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HeaderComponent;
