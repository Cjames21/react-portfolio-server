import React from 'react';
import { Link } from 'react-router-dom';

export default class DesktopTopBar extends React.Component {

  topbarLogo = require('../../img/logo-150-by-50.png');

  // NavBar will consist of img on the left side and the three navigation links on the right side.
  render() {
    return (
      <nav className="top-bar desktop-topbar">
        <div className="top-bar-left">
          <Link to='/'>
            <img src={this.topbarLogo} />
          </Link>
        </div>
        <div className="top-bar-right">
          <ul className="menu navigation">
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            <li><Link to='/projects'>PROJECTS</Link></li>
          </ul>
        </div>
      </nav>
        );

  }
}
