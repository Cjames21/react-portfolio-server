import React from 'react';
import SubTitle from './about-page-subtitle.jsx';
import ImagePanel from './about-page-img-panel.jsx';
import SubContent from './about-page-sub-content.jsx';

export default class AboutSubsection extends React.Component {

  render() {
    return (
      <div className="row center about-page-subsection">
        <SubTitle section={this.props.sectionTitle} />
        <ImagePanel imgList={this.props.imagesList} />
        <br />
        <SubContent value={this.props.subContent}/>
      </div>
    );
  }
}
