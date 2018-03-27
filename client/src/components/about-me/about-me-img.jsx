import React from 'react';
import AuthorSelfie from '../../img/selfie.png';

export default class AboutMeImage extends React.Component {

  render() {
    return(
      <div className="large-4 small-12 columns hire-me-icon-container">
	       <img src={AuthorSelfie} className="selfie" alt="Selfie of the Author of this website." />
      </div>
    );
  }
}
