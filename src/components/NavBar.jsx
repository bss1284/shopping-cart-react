import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MdHome, MdShoppingBasket } from "react-icons/md";

import Theme from "../theme";
import Center from "./atoms/Center";
import ListView from "./atoms/ListView";
import Text from "./atoms/Text";
import Spacer from "./atoms/Spacer";

export default class NavBar extends Component {
  render() {
    return (
      <ListView background={Theme.primary} height="4em">
        <LinkHomeIcon to="/" />
        <LinkText to="/">Products</LinkText>
        <Spacer />
        <LinkBasketIcon to="/cart"></LinkBasketIcon>
      </ListView>
    );
  }
}

const LinkHomeIcon = (props) => {
  return (
    <Center padding="0.5em">
      <Link to={props.to}>
        <MdHome color="white" size={40} />
      </Link>
    </Center>
  );
};
const LinkText = (props) => {
  return (
    <Center padding="1em">
      <Link to={props.to}>
        <Text size="1.5em" color="white">
          {props.children}
        </Text>
      </Link>
    </Center>
  );
};
const LinkBasketIcon = (props) => {
  return (
    <Center padding="2em">
      <Link to={props.to}>
        <MdShoppingBasket color="white" size={40} />
      </Link>
    </Center>
  );
};
