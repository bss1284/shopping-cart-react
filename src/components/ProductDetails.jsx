import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Theme from "../theme";
import ListView from "./atoms/ListView";
import Text from "./atoms/Text";
import Image from "./atoms/Image";
import Center from "./atoms/Center";

export default class ProductDetails extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string,
  };

  render() {
    const { title, price, img, info } = this.props;

    return (
      <div>
        <ListView margin="2em 5em">
          <Image src={img} width="400px" height="400px"></Image>
          <div>
            <Text block color={Theme.primaryDark} size="4em">
              {title}
            </Text>
            <div>
              <Text color="red" size="2em">
                {price.toLocaleString()}
              </Text>
              <Text color="black" size="1em">
                원
              </Text>
            </div>

            <Text padding="2em 0" block color="gray">
              {info}
            </Text>
            <ListView padding="1em 0">
              <Link to="/">
                <Center background="gray" borderRadius="10px" padding="1em">
                  <Text color="white">돌아가기</Text>
                </Center>
              </Link>
            </ListView>
          </div>
        </ListView>
      </div>
    );
  }
}
