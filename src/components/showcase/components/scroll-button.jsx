import React from 'react';

export default class ScrollToContent extends React.Component {

  constructor() {
    super();

    this.scrollToContent = this.scrollToContent.bind(this);
  }

  scrollToContent() {
    // Assign element being scrolled
    // Scroll to element
    alert('Button Clicked');
  }

  render() {
    return (
      <div className="scroll-to-content">
        <button type="button" onClick={this.scrollToContent}>
          <i className="" />
        </button>
      </div>
    );
  }
}
