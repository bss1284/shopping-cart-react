import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default class Image extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  };
  static defaultProps = {
    alt: "",
  };

  render() {
    const { src, alt } = this.props;
    return (
      <Container src={src} alt={alt} {...this.props}>
        {this.props.children}
      </Container>
    );
  }
}

const Container = styled.img`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
