import React from 'react';
import { Link } from 'react-router-dom';

export default class MobileTopBar extends React.Component {

  constructor(props) {
    super(props);
  }

  menuIsOpen = false;

  toggleNavMenu() {
    var element = document.getElementById('nav-menu');
    var className = 'show-nav-menu';
    if (!element) {
      return;
    }

    var classString = element.className;
    var nameIndex = classString.indexOf(className);
    if (nameIndex === -1) {
      classString += ' ' + className;
    } else {
      classString = classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length);
    }

    element.className = classString;
  }

  // NavBar will consist of img on the left side and the three navigation links on the right side.
  render() {
    return (
        <div className="mobile-topbar top-bar">
          <div className="menu-button-container">
            <button className="hamburger-menu"
                    type="button"
                    onClick={this.toggleNavMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="site-title">
            <h1>CJames Web Dev</h1>
          </div>

          <div className="mobile-nav-menu expanded row" id="nav-menu">
            <ul className="nav-list vertical menu">
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
              <li><Link to='/contact'>CONTACT</Link></li>
              <li><Link to='/projects'>PROJECTS</Link></li>
            </ul>
          </div>
        </div>
      );

  }
}
