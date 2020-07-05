import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class Text extends Component {
  static propTypes = {
    padding: PropTypes.string,
    margin: PropTypes.string,
    size: PropTypes.string,
    weight: PropTypes.string,
    color: PropTypes.string,
    bold: PropTypes.bool,
    block: PropTypes.bool,
  };

  render() {
    return <WrappedText {...this.props}>{this.props.children}</WrappedText>;
  }
}

const WrappedText = styled.div`
  display: ${(props) => (props.block ? "block" : "inline")};
  font-size: ${(props) => (props.size ? props.size : "1em")};
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};

  color: ${(props) => (props.color ? props.color : "black")};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
