import React from 'react';
import SkillsContent from './skills-content.jsx';
import SkillsImage from './skills-img.jsx';

export default class SkillsContainer extends React.Component {
  
  render() {
    return(
      <div className="row">
        <SkillsImage />
        <SkillsContent />
      </div>
    );
  }
  
}