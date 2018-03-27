import React from 'react';
import AboutMeImg from './about-me-img.jsx';
import AboutMeContent from './about-me-content';


export default class AboutMeContentContainer extends React.Component {
  
  render() {
    return(
      <div className="row section-container">
        <AboutMeContent />
        <AboutMeImg />
      </div>
    );
  }
  
}