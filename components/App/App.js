import React from 'react';
import withRedux from 'next-redux-wrapper';
import { configureStore } from 'store';

export default function reduxWrapper(Component, mapStateToProps, mapDispatchToProps) {
  class Container extends React.Component {
    static async getInitialProps(props) {
      if (Component.getInitialProps) {
        await Component.getInitialProps(props);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return withRedux(configureStore, mapStateToProps, mapDispatchToProps)(Container);
}
