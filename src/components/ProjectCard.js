import React, { Component } from 'react';
import { Card, Subhead, BackgroundImage, Measure, Button, ButtonOutline } from 'rebass';

class ProjectCard extends Component {
  render() {
    return (
      <div>
        <Card width={256} boxShadow={20}>
          <Subhead p={2}>{this.props.project.name}</Subhead>
          <Measure style={{paddingBottom: 20}}>{this.props.project.about}</Measure>
          <BackgroundImage
            ratio={1/2}
            image={this.props.project.thumbnail}
            style={{marginBottom: 20}}
          />
          <a href={this.props.project.url} style={{marginRight: 20}}><Button>Visit</Button></a>
          {this.props.project.github && <a href={this.props.project.github}><ButtonOutline>GitHub</ButtonOutline></a>}
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
