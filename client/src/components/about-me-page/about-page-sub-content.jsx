import React from 'react';

export default class AboutSubContent extends React.Component {


  render() {
    return (
      <div className="row center-text center-element subsection-subcontent">
        <p>{this.props.value}</p>
      </div>
    );
  }
}
