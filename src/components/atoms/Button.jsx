import PropTypes from "prop-types";
import styled from "styled-components";
import React, { Component } from "react";

export default class Button extends Component {
  static propTypes = {
    padding: PropTypes.string,
    margin: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
    hoverColor: PropTypes.string,
    hoverBackground: PropTypes.string,
    onClick: PropTypes.func,
    block: PropTypes.bool,
  };
  static defaultProps = {
    onClick: () => {},
  };

  render() {
    const { borderRadius } = this.props;

    return (
        className="myhover"
        borderRadius={borderRadius}
        {...this.props}
      >
        {this.props.children}
      </WrappedButton>
    );
  }
}

const WrappedButton = styled.button`
  cursor: pointer;
  display: ${(props) => (props.block ? "flex" : "inline-flex")};
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 1px 1px 0px 2px rgba (0, 0, 0, 0.3);
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  &:hover {
    color: ${(props) => props.hoverColor};
    background: ${(props) => props.hoverBackground};
  }
`;
