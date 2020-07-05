import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class ListView extends Component {
  static propTypes = {
    justifyContents: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    flexWrap: PropTypes.string,
    row: PropTypes.bool,
    column: PropTypes.bool,
  };

  render() {
    return <WrappedListView {...this.props}></WrappedListView>;
  }
}

const WrappedListView = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContents};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
