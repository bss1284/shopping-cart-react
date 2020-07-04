import PropTypes from "prop-types";
import styled from "styled-components";
import React, { Component } from "react";

export default class Center extends Component {
  static propTypes = {
    padding: PropTypes.string,
    margin: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
  };

  render() {
    return <WrappedCenter {...this.props}>{this.props.children}</WrappedCenter>;
  }
}

const WrappedCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
`;
