import React, { Component } from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <WrappedNavBar>
        <NavIconItem to="/">
          <MdHome color="white" size={40}></MdHome>
        </NavIconItem>

        <NavTextItem to="/">Products</NavTextItem>
        <NavTextItem to="/cart">Cart</NavTextItem>
      </WrappedNavBar>
    );
  }
}

const WrappedNavBar = styled.nav`
  width: 100%;
  height: 4em;
  padding: 0em 0em;
  background: ${(props) => props.theme.primary};
  display: flex;
  align-items: stretch;
`;
const NavItem = styled(Link)`
  cursor: pointer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavIconItem = styled(NavItem)`
  padding: 0 1em;
`;

const NavTextItem = styled(NavItem)`
  font-size: 1.5em;
  text-decoration: none;
  flex-basis: 6em;
  flex-shrink: 0;

  &:hover {
    border-top: 2px solid ${(props) => props.theme.primary};
    border-radius: 0.5em 0.5em 0 0;
    background: white;
    color: ${(props) => props.theme.primary};
  }
`;
