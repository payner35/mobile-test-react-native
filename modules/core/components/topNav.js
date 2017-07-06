/* @flow */

import React from 'react';
import { Header, Title, Left, Right, Icon, Button, Body } from 'native-base';

class TopNav extends React.Component{

  constructor() {
    super();
  }

  render() {

    return (
      <Header>
          <Left>
              <Button transparent>
                  <Icon name='menu' />
              </Button>
          </Left>
          <Body>
              <Title>Header</Title>
          </Body>
          <Right />
      </Header>
    )
  }
}


export default TopNav;
