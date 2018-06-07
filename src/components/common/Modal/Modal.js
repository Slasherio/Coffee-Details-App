import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import React, { Component } from "react";
import filter from "lodash/filter";
import isEmpty from "lodash/isEmpty";

export default class ModalComponent extends Component {
  state = {
    bannerName: "",
    data: {}
  };

  handleSelectChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  loadNeedData = arr => {
    let data = filter(arr, product => {
      if (product.name === this.state.bannerName) {
        return product;
      }
    });
    this.setState({
      data: data[0]
    });
  };

  sendReport = () => {
    const requestData = {
      to: "oleksandr.myshchyshyn@kindgeek.com",
      dates: this.state.data.dates,
      data: [
        {
          name: this.state.bannerName,
          min: this.state.data.minPrice,
          max: this.state.data.maxPrice
        }
      ],
      product: this.props.productName
    };
    this.props.sendDataFunc(requestData);
    this.props.toggle();
  };

  render() {
    const { productDetailData, productName } = this.props;
    return (
      <Modal
        isOpen={this.props.showModal}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader>Create Report</ModalHeader>
        <ModalBody>
          <FormGroup>
            <h4>{`Product Name: ${productName}`}</h4>
            <hr />
            <Label for="bannerName">Select Name of coffee provider</Label>
            <Input
              value={this.state.name}
              onChange={this.handleSelectChange}
              type="select"
              name="bannerName"
              id="bannerName"
            >
              {productDetailData.map((element, index) => {
                return <option key={index}>{element.name}</option>;
              })}
            </Input>
          </FormGroup>
          {this.state.bannerName ? (
            <Button onClick={() => this.loadNeedData(productDetailData)}>
              Load Info
            </Button>
          ) : null}
          <hr />
          {!isEmpty(this.state.data) ? (
            <FormGroup>
              <Label for="minPrice">Min Price</Label>
              <Input
                value={this.state.data.minPrice}
                type="text"
                name="minPrice"
                id="minPrice"
                disabled
              />
              <Label for="maxPrice">Max Price</Label>
              <Input
                value={this.state.data.maxPrice}
                type="text"
                name="maxPrice"
                id="maxPrice"
                disabled
              />
              <Label for="dates">Dates</Label>
              <Input
                value={this.state.data.dates}
                type="text"
                name="dates"
                id="dates"
                disabled
              />
            </FormGroup>
          ) : null}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.sendReport}>
            Send Report
          </Button>{" "}
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
