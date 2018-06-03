import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatchGetAllProductsWired } from "../../actions";
import { ProductsList } from "../../components/ProductsList/ProductsList";

class Products extends Component {
  componentDidMount() {
    dispatchGetAllProductsWired();
  }

  render() {
    const { fetched, data } = this.props.products;
    return (
      <React.Fragment>
        {fetched ? (
          <ProductsList productInformation={data} />
        ) : (
          <div>...Loading</div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Products);
