import React, { Component } from "react";
import { Row, Col, Table } from "reactstrap";
import ProductService from "../../config/productService";

export default class TableComponent extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="product__detail">
        {data.map((element, index) => {
          return (
            <Row className="product__detail-row" key={index}>
              <Col xs="4">{element.name}</Col>
              <Col className={`text-right `} xs="2">
                ${element.maxPrice}
              </Col>

              <Col className={`text-right `} xs="2">
                ${element.averagePrice}
              </Col>

              <Col className={`text-right `} xs="2">
                ${element.minPrice}
              </Col>

              <Col className={`text-right `} xs="2">
                {element.soldOut}
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}
