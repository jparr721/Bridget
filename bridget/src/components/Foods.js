import React, {Component} from 'react';
import Header from './common/Header';
import List from './common/List';

class Foods extends Component {
  render() {
    return (
      <div>
        <Header headerText="Foods" />
        <List
          col1="Name"
          col2="Quantity"
          col3="Date Added"
          col4="Price"
          col5="Expiration Date"/>

      </div>
    );
  }
}

export default Foods;
