import React from 'react';
import SocialButtons from '../social-buttons.js';

import './css/footer.css';

export default class Footer extends React.Component {

  render() {
    return(
      <div className="row footer-container">
        <div className="large-4  small-12 columns">
			       <h5>charlestdjames1@gmail.com</h5>
		    </div>
		    <div className="large-4 small-12 columns">
          <div className="footer-social-buttons">            
            <SocialButtons />
          </div>
		    </div>
		    <div className="large-4 small-12 columns">
			    <h5>(613) 803-6794</h5>
		    </div>
      </div>

    );
  }
}
