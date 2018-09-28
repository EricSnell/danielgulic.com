import React, { Component } from 'react';
import Header from './Header';
import SocialLinks from './SocialLinks';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SocialLinks />
      </div>
    );
  }
}

export default Home;
