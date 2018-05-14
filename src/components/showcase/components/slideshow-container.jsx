import React from 'react';
import Header from './header.jsx';
import SlideDescription from './slideshow-container.jsx';
import SlideArrowRight from './slide-arrow-right.jsx';
import SlideArrowLeft from './slide-arrow-left.jsx';

import '../css/showcase-desktop.css';
import '../css/showcase-mobile.css';

export default class SlideshowContainer extends React.Component {

  constructor(props) {
    super(props);

    const slideData = props.slideData;
  }

  render() {
    return (
      <div className="slideshow-container">
        <Header headerContent={this.slideData.slideTitle} />
        <SlideDescription descContent={this.slideData.slideDesc} />
        <SlideArrowLeft />
        <SlideArrowRight />
      </div>
    );
  }
}
