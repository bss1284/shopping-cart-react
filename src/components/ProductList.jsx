import React, { Component } from "react";
import PropTypes from "prop-types";
import Product from "./Product";

import ListView from "./atoms/ListView";

export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    onClick: PropTypes.func,
  };
  static defaultTypes = {
    onClick: () => {},
  };

  render() {
    const { products, onClick } = this.props;

    return (
      <ListView flexWrap="wrap" padding="1em" justifyContents="center">
        {products.map((product) => (
          <Product key={product.id} onClick={onClick} {...product}></Product>
        ))}
      </ListView>
    );
  }
}
