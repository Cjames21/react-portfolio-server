import React from 'react';
import HeaderLogoImg from '../../img/logo-150-by-50.png';
import './css/index-header-logo.css';

export default class HeaderLogo extends React.Component {

  render() {
    return <div className="index-header-logo">
             <img src={HeaderLogoImg} alt="C James Web Dev Logo" />
           </div>
  }

}
