import styled from "styled-components";
import React, { Component } from "react";

export default class Spacer extends Component {
  render() {
    return <WrappedSpacer></WrappedSpacer>;
  }
}
const WrappedSpacer = styled.div`
  margin: auto;
`;
