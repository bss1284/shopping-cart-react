import React, { Component } from "react";
import styled from "styled-components";

export default class ListView extends Component {
  render() {
    return <WrappedListView {...this.props}></WrappedListView>;
  }
}

const WrappedListView = styled.div`
  display: flex;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
`;
