import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import "./MainHeader.scss";

function MainHeader(props) {
  let history = useHistory();

  function onButtonClick() {
    console.log("clicked");
  }

  function goToHome() {
    history.push("/");
  }

  return (
    <div className="MainHeader">
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className="main-header">
            <div className="logo" onClick={goToHome}>
              <span>netflix</span>
              <span>roulette</span>
            </div>
            <div className="btn-add">
              <Button
                text={props.buttonText}
                transperant={true}
                onClick={onButtonClick}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MainHeader;
