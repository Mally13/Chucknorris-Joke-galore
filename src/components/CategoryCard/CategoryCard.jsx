import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from 'reactstrap';

export class CategoryCard extends Component {
  render() {
    return (
      <div className="card card-category">
        <div className="content">
          <Row>
            <Col xs={5}>
              <div className="icon-big text-center icon-warning">
                {this.props.categoryIcon}
              </div>
            </Col>
            <Col xs={7}>
              <div className="about">
                <p>{this.props.categoryText}</p>
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="view">
              <Button>View</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryCard;
