import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getProductDetail } from "../../actions/productDetail/productDetail";
import { sendReportData } from "../../actions/sendData/sendData";

import { Button, Row, Col, Container } from "reactstrap";

import ModalComponent from "../../components/common/Modal/Modal";
import TableComponent from "../../components/Table/TableComponent";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import Preloader from "../../components/Preloader/Preloader";

import isEmpty from "lodash/isEmpty";
import isUndefined from "lodash/isUndefined";

import { maxPrice } from "../../utils/max";
import { minPrice } from "../../utils/min";
import { averagePrice } from "../../utils/avarage";
import { generateDates } from "../../utils/generateDate";

class ProductDetailContainer extends Component {
  state = {
    showModal: false
    // tableData: [{name: 'Americano', maxPrice: 11, minPrice: 12, averagePrice: 111, soldOut: 10.000}]
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      },
      getProductDetail
    } = this.props;
    getProductDetail(id);
  }

  createProductData = arr => {
    return arr.map((element, index) => {
      return {
        name: element.banner.name,
        maxPrice: maxPrice(element.pricingDataByWeek),
        minPrice: minPrice(element.pricingDataByWeek),
        averagePrice: averagePrice(element.pricingDataByWeek),
        soldOut: "10.000",
        dates: generateDates(element.pricingDataByWeek)
      };
    });
  };

  render() {
    const {
      productDetail,
      productDetailData,
      loading,
      sendReportData
    } = this.props;
    const { showModal } = this.state;
    return (
      <Container>
        <ProductDetail data={productDetail} />
        <Row>
          <Col sm={{ offset: 9 }}>
            <Button color="primary" onClick={this.toggleModal}>
              Create Report
            </Button>
          </Col>
        </Row>
        <Row className="table-header">
          <Col xs="4">Name</Col>
          <Col className="text-right" xs="2">
            Max Price
          </Col>
          <Col className="text-right" xs="2">
            Average Price
          </Col>
          <Col className="text-right" xs="2">
            Min Price
          </Col>
          <Col className="text-right" xs="2">
            Sold out
          </Col>
        </Row>
        {!isUndefined(loading) && !loading ? (
          <React.Fragment>
            <TableComponent data={this.createProductData(productDetailData)} />
            <ModalComponent
              showModal={showModal}
              toggle={this.toggleModal}
              productDetailData={this.createProductData(productDetailData)}
              productName={productDetail.name}
              sendDataFunc={sendReportData}
            />
          </React.Fragment>
        ) : (
          <Preloader countOfRow={7} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.productDetail
  };
};

const mapDispatchToProps = {
  getProductDetail,
  sendReportData
};

ProductDetailContainer.propTypes = {
  productDetail: PropTypes.object.isRequired,
  getProductDetail: PropTypes.func.isRequired,
  productDetailData: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailContainer);
