import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import "./ProductDetail.css";
// import ProductService from "../../config/productService";

const ProductDetail = ({ data }) => {
  return (
    <div className="detail">
      <h2>{data.name}</h2>
      <Row className="table-header">
        <Col xs="6">Name</Col>
        <Col className="text-right" xs="2">
          Max Price
        </Col>
        <Col className="text-right" xs="2">
          Average Price
        </Col>
        <Col className="text-right" xs="2">
          Min Price
        </Col>
      </Row>
      <Row className="product__detail-row">
        <Col xs="6">{data.name}</Col>
        <Col className={`text-right `} xs="2">
          $99.99
        </Col>

        <Col className={`text-right `} xs="2">
          $99.99
        </Col>

        <Col className={`text-right `} xs="2">
          $99.99
        </Col>
      </Row>
    </div>
  );
};

ProductDetail.propTypes = {
  data: PropTypes.object.isRequired
};

ProductDetail.defaultProps = {
  data: {}
};

export default ProductDetail;
