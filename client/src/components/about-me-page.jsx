import React from 'react';
import AboutPageHeader from './about-me-page/about-me-header.jsx';
import AboutPageSubsection from './about-me-page/about-page-subsection.jsx';
import './about-me-page/css/about-page-styles.css';



export default class AboutMePage extends React.Component {

  sectionData = {
    skills: {
      title: "Coding is incredibly rewarding!",
      images: [
        "img/about-me-img-01.png",
        "img/about-me-img-02.png",
        "img/about-me-img-03.png",
        "img/about-me-img-04.png",
      ],
      subcontent: "Over time, I have been enjoying the feeling of constant improvement" +
        " in my abilities to design and build web applications.",
    },
    hobbies: {
      title: "I also enjoy a variety of other things",
      images:[
        "img/hobbies-img-01.png",
        "img/hobbies-img-02.png",
        "img/hobbies-img-03.png",
        "img/hobbies-img-04.png",
      ],
      subcontent: "Music, video games, friends and family, and more music. These " +
        "are the things I enjoy most when I'm not working or building projects.",
    },

  }

  render() {
    return (
      <div className="about-me-page" >
        <AboutPageHeader />

        <hr className="header-hr" />

        <AboutPageSubsection
          sectionTitle={this.sectionData.skills.title}
          imagesList={this.sectionData.skills.images}
          subContent={this.sectionData.skills.subcontent} />

        <hr />

        <AboutPageSubsection
            sectionTitle={this.sectionData.hobbies.title}
            imagesList={this.sectionData.hobbies.images}
            subContent={this.sectionData.hobbies.subcontent} />

          <hr />
      </div>
    );
  }
}
