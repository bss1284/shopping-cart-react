import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

import Center from "./atoms/Center";
import Spacer from "./atoms/Spacer";
import Image from "./atoms/Image";
import Text from "./atoms/Text";
import Button from "./atoms/Button";
import ListView from "./atoms/ListView";
import Theme from "../theme";

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
        <Link to="/details">
          <Center>
            <Image width="250px" height="250px" src={img} alt="" />
          </Center>
        </Link>
        <ListView>
          <div>
            <Text block color="black" size="1.2em">
              {title}
            </Text>
            <Text color="black" size="1.4em" weight="bold">
              {price.toLocaleString()}
            </Text>
            <Text color="black" size="1em">
              원
            </Text>
          </div>
          <Spacer />
          <Center>
            <Button
              background={Theme.primary}
              color="white"
              hoverBackground={Theme.primaryDark}
              hoverColor="white"
              padding="1em"
              borderRadius="10px"
              onClick={(e) => {
                e.preventDefault();
                console.log("클릭");
              }}
            >
              <MdShoppingCart size={36} />
            </Button>
          </Center>
        </ListView>
      </Container>
    );
  }
}

const Container = styled.div`
  background: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px;
  padding: 1em 1em;
  margin-right: 1em;
  margin-bottom: 1em;
  width: 250px;
  &:hover {
    background: ${(props) => props.theme.darkLight};
  }
`;
