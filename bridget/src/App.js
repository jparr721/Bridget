import React, { Component } from 'react';
import Bridget from './components/Bridget';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import grey from 'material-ui/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey,
  },
  status: {
    danger: 'orange',
  },
});

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div>
            <Bridget />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
