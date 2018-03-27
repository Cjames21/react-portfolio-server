import React from 'react';
import SocialButtons from '../social-buttons.js';
import './css/index-header-content.css';

export default class HeaderContent extends React.Component {

  render() {
    return(
      <div className="row">
        <div className="large-7 medium-7 columns header-content-container">
          <h3>FREELANCE</h3>
          <h1>CREATIVE DEVELOPMENT</h1>
          <h4>WEBSITE AND DIGITAL MARKETING SOLUTIONS</h4>
          <SocialButtons className="shift-left-40px" />
        </div>
      </div>
    );
  }

}
