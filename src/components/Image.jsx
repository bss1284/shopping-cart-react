import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Image extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    padding: PropTypes.string,
    to: PropTypes.string,
  };

  render() {
    const { onClick, to, padding } = this.props;
    const clickable = onClick !== undefined && to !== undefined;

    return (
      <Container clickable={clickable} padding={padding}>
        {this.props.children}
      </Container>
    );
  }
}

const Container = styled.div`
  ${(props) => (props.clickable ? "cursor:pointer;" : null)}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding};
`;

const LinkContainer = styled(Link)``;
