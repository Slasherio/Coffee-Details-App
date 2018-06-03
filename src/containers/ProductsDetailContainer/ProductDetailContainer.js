import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatchGetProductDetailWired } from "../../actions/productDetail/productDetail";
import LoadingPlaceholder from "react-loading-placeholder";

class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    dispatchGetProductDetailWired(id);
  }
  render() {
    return (
      <div>
        {this.props.fetched ? (
          <div>Hello</div>
        ) : (
          <LoadingPlaceholder
            numberOfRows={10}
            heightOfRows={40}
            spaceBetween={10}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productDetail: state.products
  };
};

export default connect(mapStateToProps)(ProductDetail);
