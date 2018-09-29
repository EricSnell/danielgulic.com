import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import { Flex, Box } from '@rebass/grid';
import { Heading, Caps } from 'rebass';
import featured from '../featured';

class FeaturedProjects extends Component {
  render(props) {
    console.log(featured);
    return (
      <div style={{paddingBottom: 50}}>
        <Heading style={{paddingBottom: 50}}><Caps>Featured Projects</Caps></Heading>
        <div>
          <Flex align='center'>
          {
            featured.map((project) => 
              <Box width={1/3} px={2}>
                <ProjectCard project={project} />
              </Box>
            )
          }
          </Flex>
        </div>
      </div>
    );
  }
}

export default FeaturedProjects;
