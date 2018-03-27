import React from 'react';
import ImageItem from './about-sub-img.jsx';

export default class AboutImgPanel extends React.Component {

  images = this.props.imgList;
  imageItems = this.images.map((img) =>
    <div className="large-3 medium-4 small-12 columns panel-container"
         key={img} >
      <ImageItem src={require("../../" + img)} />
    </div>
   );

  render() {
    return (
      <div className="row">
        {this.imageItems}
      </div>
    );
  }
}
