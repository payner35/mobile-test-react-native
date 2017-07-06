
import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { ApolloProvider } from 'react-apollo'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {connect} from 'react-redux';


//navigator
import AppNavigator from './util/routes';
import { addNavigationHelpers } from 'react-navigation';
import { AppRegistry } from 'react-native';


import client from './util/apollo';

//components
import TopNav from './modules/core/containers/topNav';
import FooterNav from './modules/core/containers/footerNav';

//redux Bitch
import coreModule from './modules/core';

const store = createStore(
  combineReducers({
    ...coreModule.reducers,
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
      applyMiddleware(
        createLogger({ predicate: () => __DEV__ }),
        client.middleware(),
        ReduxThunk
      )
  )
);




//lets get the state for just the nav
@connect(state => ({
    nav: state.nav
}))
class AppWithNavigationState extends Component {
    render() {
        return (
          <Container>
          <TopNav />
            <Content>
              <AppNavigator navigation={addNavigationHelpers({
                      dispatch: this.props.dispatch,
                      state: this.props.nav
                  })}
              />
            </Content>
          <FooterNav/>
        </Container>
        );
    }
}



export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
           <AppWithNavigationState />
      </ApolloProvider>
    );
  }
}
