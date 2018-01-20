import React, {Component} from 'react';
import AppBar from './AppBar';
import Foods from './Foods';
import Shop from './Shop';

class Bridget extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <div className="row">
          <div className="col-6">
            <Foods />
          </div>
          <div className="col-6">
            <Shop />
          </div>
        </div>
      </div>
    );
  }
}

export default Bridget;
