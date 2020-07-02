import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Product from "./Product";

export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
  };

  render() {
    return (
      <Container>
        {this.props.products.map((product) => (
          <Product key={product.id} {...product}></Product>
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
