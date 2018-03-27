import React from 'react';
import './css/index-header-see-more.css';

export default class HeaderSeeMore extends React.Component {

  constructor() {
    super();

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(e) {
    const el = document.getElementById('about-me');
    el.scrollIntoView(true);
  }

  render() {
    return(
      <div className="see-more-container">
        <button onClick={this.buttonClicked} type="button">
          Click here to learn more <span className="fa fa-arrow-down"></span>
        </button>
      </div>
    );
  }
}
