import React, { Component } from 'react';
import Header from './Header';
import SocialLinks from './SocialLinks';
import FeaturedProjects from './FeaturedProjects';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SocialLinks />
        <FeaturedProjects />
      </div>
    );
  }
}

export default Home;
