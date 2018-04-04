import React from 'react';

export default class AboutSubtitle extends React.Component {


  render() {
    return (
      <div className="subsection-title">
        <h3>{this.props.section}</h3>
      </div>
    );
  }
}
