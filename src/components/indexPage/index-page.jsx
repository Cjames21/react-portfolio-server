import React from 'react';
import Header from '../index-header/index-header-container.js';
import About from '../about-me.js';
import SkillsOverview from '../skills-overview.js';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div style={{ padding: 16 + 'px' }}>
        <Header />
        <About />
        <SkillsOverview />
      </div>
    );
  }
}
