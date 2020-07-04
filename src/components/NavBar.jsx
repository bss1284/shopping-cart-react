import React, { Component } from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import Center from "./Center";
import ListView from "./ListView";
import Text from "./Text";
import Theme from "../theme";

export default class NavBar extends Component {
  render() {
    return (
      <ListView background={Theme.primary}>
        <LinkHomeIcon to="/" />
        <LinkText to="/">Products</LinkText>
        <LinkText to="/cart">Cart</LinkText>
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
    <Link to={props.to}>
      <Center padding="1em">
        <Text size="1.5em">{props.children}</Text>
      </Center>
    </Link>
  );
};
