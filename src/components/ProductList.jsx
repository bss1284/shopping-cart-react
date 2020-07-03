import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Product from "./Product";

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
      <Container>
        {products.map((product) => (
          <Product key={product.id} onClick={onClick} {...product}></Product>
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  width: 100%;
`;
