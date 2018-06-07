import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../../actions/products";
import PropTypes from "prop-types";

import ProductsList from "../../components/ProductsList/ProductsList";
import "./ProductListContainer.css";

import Skeleton from "react-skeleton-loader";

class ProductListContainer extends Component {
  componentDidMount() {
    const { getAllProducts } = this.props;
    getAllProducts();
  }
  render() {
    const { fetched, productsData } = this.props.productsInformation;

    return (
      <div>
        {fetched ? (
          <ProductsList data={productsData} />
        ) : (
          <div className="preload-content">
            <Skeleton
              width="170px"
              height="159px"
              borderRadius="50%"
              widthRandomness={0}
              count={7}
              margin={20}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsInformation: state.products
  };
};

const matchDispatchToProps = {
  getAllProducts
};

ProductListContainer.propTypes = {
  productsInformation: PropTypes.object.isRequired,
  getAllProducts: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ProductListContainer);
