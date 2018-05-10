import React from 'react';
import Header from '../header.js';
import AboutMe from '../about-me.js';
import SkillsOverview from '../skills-overview.js';

export default class IndexPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <hr />
        <AboutMe />
        <hr />
        <SkillsOverview />
        <hr />
      </div>
    );
  }
}
