import React from 'react';
import LargeImage from './large-img-container.jsx';
import Title from './about-title';
import HeaderContent from './content.jsx';

import './css/about-page-styles.css';


export default class AboutMeHeader extends React.Component {

  render() {
    return (
      <div className="row about-header-content">
        <div className="large-6 small-12 columns">
          <LargeImage />
        </div>
        <div className="large-6 small-12 columns about-header-content">
          <Title />
          <HeaderContent />
        </div>

      </div>
    );
  }
}
