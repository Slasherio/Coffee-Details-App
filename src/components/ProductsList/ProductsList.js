import React from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ProductsList.css";
import FaPlus from "react-icons/lib/fa/plus";

const ProductsList = ({ data }) => {
  return (
    <Container>
      <Row>
        {data.map((element, index) => {
          return (
            <Col md={{ size: 2 }} className="coffee" key={index}>
              <Link to={`/products/${index + 1}`}>
                <img
                  src={require(`../../images/${element.name}.png`)}
                  alt={element.name}
                />
              </Link>
              <p>{element.name}</p>
            </Col>
          );
        })}
        <Col md={{ size: 2 }} className="coffee">
          <FaPlus className="sidebar-icon" />
        </Col>
      </Row>
    </Container>
  );
};

ProductsList.propTypes = {
  data: PropTypes.array.isRequired
};

ProductsList.defaultProps = {
  data: []
};

export default ProductsList;
