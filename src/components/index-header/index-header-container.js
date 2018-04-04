import React from 'react';
import HeaderLogo from './index-header-logo.js';
import HeaderContent from './index-header-content.js';
import SeeMore from './index-header-see-more.js';
import './css/index-header-container.css';

export default class HeaderContainer extends React.Component {

  render() {
    return (
      <div className="row header">
         <HeaderLogo />
         <HeaderContent />
         <SeeMore />
      </div>
    )
  }
}
