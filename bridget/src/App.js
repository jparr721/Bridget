import React, { Component } from 'react';
import Bridget from './components/Bridget';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Bridget />
        </div>
      </Provider>
    );
  }
}

export default App;
