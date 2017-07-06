/* @flow */

import React from 'react';
import { Text } from 'native-base';

class NewsList extends React.Component{

  static navigationOptions = {
    title: 'News',
  };

  render() {
      return (<Text>Hello, Navigation!</Text>);
  }
}

export default NewsList;
