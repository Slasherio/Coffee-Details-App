import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./ProductList.css";
import { Link } from "react-router-dom";

import FaPlus from "react-icons/lib/fa/plus";

export const ProductsList = ({ productInformation }) => {
  return (
    <Container>
      <Row>
        {productInformation.data.map((element, index) => {
          return (
            <Col md={{ size: 2 }} className="coffee" key={index}>
              <Link to={`/products/${index + 1}`}>
                <img
                  src={require(`../../images/${element.name}.png`)}
                  alt={element.name}
                />
              </Link>
              <p className="coffee__name">{element.name}</p>
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
