import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { Flex, Box } from "@rebass/grid";
import { Heading, Caps } from "rebass";
import featured from "../featured";

class FeaturedProjects extends Component {
  render(props) {
    console.log(featured);
    return (
      <div style={{ paddingBottom: 50 }}>
        <Heading style={{ paddingBottom: 50 }}>
          <Caps>Featured Projects</Caps>
        </Heading>
        <div>
          <Flex
            alignItems="center"
            flexWrap="wrap"
            justifyContent="space-around"
          >
            {featured.map(project => (
              <Box px={2} py={20}>
                <ProjectCard project={project} />
              </Box>
            ))}
          </Flex>
        </div>
      </div>
    );
  }
}

export default FeaturedProjects;
