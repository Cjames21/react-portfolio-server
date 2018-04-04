import React from 'react';
import AboutMeHeader from './about-me/about-me-header.jsx';
import AboutMeContentContainer from './about-me/content-img-container.jsx';
import './css/about-me.css';
import './css/general.css';

export default class AboutMe extends React.Component {

  render() {
    return (
      <div id="about-me" refs="about01" className="section-container">
        <AboutMeHeader />
        <AboutMeContentContainer />
      </div>
    );
  }

}
