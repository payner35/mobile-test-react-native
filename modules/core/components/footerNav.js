/* @flow */

import React, { Component, PropTypes } from 'react';
import {Footer, FooterTab, Button, Text } from 'native-base';


class FooterNav extends Component{

  constructor() {
    super();
  }

  render() {

    return (
      <Footer>
          <FooterTab>
              <Button full>
                  <Text>Footer</Text>
              </Button>
          </FooterTab>
      </Footer>
    )
  }
}


export default FooterNav;
