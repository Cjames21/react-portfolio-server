import React from 'react';
// import image when I get it taken


export default class LargeImageContainer extends React.Component {

  render() {
    return (
      <div className="large-img">
        <img src={require('../../img/img-placeholder.jpg')} alt="Big selfie of yours truly!" />
      </div>
    );
  }
}
