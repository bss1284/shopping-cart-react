import React, { Component } from "react";
import styled from "styled-components";

export default class Text extends Component {
  render() {
    return <WrappedText {...this.props}>{this.props.children}</WrappedText>;
  }
}

const WrappedText = styled.span`
  font-size: ${(props) => (props.size ? props.size : "1em")};
  color: ${(props) => (props.color ? props.color : "white")};
`;
