import React from 'react';

export default class AboutSubImage extends React.Component {

  render() {
    return (
      <div>
        <img
           src={this.props.src}
           alt="One of the panels, among three others in this row"
           className="panel-img" />
      </div>
    );
  }
}
