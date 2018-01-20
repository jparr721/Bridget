import React, {Component} from 'react';
import './AppBar.css';

class AppBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg nav-bg">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-text">Bridget</span>
      </nav>
    );
  }
}

export default AppBar;
