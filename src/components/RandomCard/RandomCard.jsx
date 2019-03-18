import React, { Component } from "react";
import { Row, Col,Button } from "react-bootstrap";

export class RandomCard extends React.Component {
  render() {
    return (
      <div className="card card-random">
        <div className="content">
          <Row>
            <Col xs={5}>
              <div className="icon-big text-center icon-warning">
                {this.props.bigIcon}
              </div>
            </Col>
            <Col md={12}>
              <div className="joke">
                <p>
                {this.props.value}
                </p>
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="random">
              {this.props.jokeIcon} {this.props.jokeIconText}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomCard;
