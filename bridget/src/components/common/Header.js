import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div>
      <h1 className="header-text text-center">{props.headerText}</h1>
      <hr />
    </div>
  );
};

export default Header;
