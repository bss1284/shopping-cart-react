import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Center from "./Center";

export default class Product extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    onClick: () => {},
  };

  render() {
    const { img, title, price, id, onClick } = this.props;
    return (
      <Container
        onClick={(e) => {
          e.preventDefault();
          onClick(id);
        }}
      >
        <Center>
          <h2>{title}</h2>
        </Center>
        <Center>
          <img width="250px" height="250px" src={img} alt="" />
        </Center>
        <Center>
          <h1>{price}$</h1>
        </Center>
      </Container>
    );
  }
}

const Container = styled.div`
  background: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px;
  padding: 1em 1em;
  margin-right: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  width: 300px;
  height: 400px;
  &:hover {
    background: ${(props) => props.theme.darkLight};
  }
`;
