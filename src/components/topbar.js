import React from 'react';
import { Link } from 'react-router-dom';
import topbarLogo from '../img/logo-150-by-50.png';

import './css/topbar.css';

export default class TopBar extends React.Component {
  // NavBar will consist of img on the left side and the three navigation links on the right side.
  render() {
    return (
          <nav className="top-bar">
           <div className="top-bar-left">
             <Link to='/'>
               <img src={topbarLogo} alt="C James Web Dev Logo" />
             </Link>
           </div>
           <div className="top-bar-right">
             <ul className="menu navigation">
               <li><Link to='/'>HOME</Link></li>
               <li><Link to='/about'>ABOUT</Link></li>
               <li><Link to='/contact'>CONTACT</Link></li>
             </ul>
           </div>

           <nav className="mobile-nav">
             <ul className="menu navigation">
               <li><Link to='/'>HOME</Link></li>
               <li><Link to='/about'>ABOUT</Link></li>
               <li><Link to='/contact'>CONTACT</Link></li>
             </ul>
           </nav>
          </nav>
        );

  }
}
