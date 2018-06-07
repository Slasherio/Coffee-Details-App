import Skeleton from "react-skeleton-loader";
import { Col, Row } from "reactstrap";
import React, { Component } from "react";

export default class Preloader extends Component {
  createTableData = num => {
    var rows = [];
    for (let i = 0; i < num; i++) {
      rows.push(
        <Row className="product__detail-row" key={i}>
          <Col xs="4">
            <Skeleton width="100px" height="35px" />
          </Col>
          <Col xs="2">
            <Skeleton width="100px" height="35px" />
          </Col>

          <Col xs="2">
            <Skeleton width="100px" height="35px" />
          </Col>

          <Col xs="2">
            <Skeleton width="100px" height="35px" />
          </Col>

          <Col xs="2">
            <Skeleton width="100px" height="35px" />
          </Col>
        </Row>
      );
    }
    return rows;
  };
  render() {
    const { countOfRow } = this.props;

    return this.createTableData(countOfRow);
  }
}
