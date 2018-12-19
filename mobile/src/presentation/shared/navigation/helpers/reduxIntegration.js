// @flow strict

import * as React from 'react';
import { Provider } from 'react-redux';
import type { Store as StoreType } from 'redux';
import { configureStore } from 'core/src/frameworks/redux';

let store: StoreType;

const getStore = (): StoreType => {
  if (!store) {
    store = configureStore();
  }

  return store;
};

export function withReduxProvider(Component) {
  const wrappedComponent = class extends React.Component {
    render() {
      return (
        <Provider store={getStore()}>
          <Component {...this.props} />
        </Provider>
      );
    }
  };

  return () => wrappedComponent;
}
