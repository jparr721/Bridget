import React, {Component} from 'react';
import './AppBar.css';

class AppBar extends Component {
  render() {
    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="nav-bg p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar nav-bg">
          <button className="btn deal-btn" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            Deals
          </button>
          <span className="navbar-text">Bridget</span>
        </nav>
      </div>
    );
  }
}

export default AppBar;