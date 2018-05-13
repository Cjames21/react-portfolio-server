import React from 'react';
import SkillsContentContainer from './skills-overview/skills-container.jsx';
import SkillsHeader from './skills-overview/skills-header.jsx';

import './css/skills-overview.css';

export default class SkillsOverview extends React.Component {

  render() {
    return (
      <div className="row section-container">
        <SkillsHeader />
        <SkillsContentContainer />
      </div>

    );
  }
}
