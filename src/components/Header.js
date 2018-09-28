import React, { Component } from 'react';
import Typist from 'react-typist';
import { Heading } from 'rebass';

class Header extends Component {
  render() {
    return (
      <div>
        <Typist cursor={{show: false}}>
          <Heading color='grey' fontFamily='VT323, monospace' fontSize={6}>
            <span style={{color: 'orange'}}>H</span>
            <span style={{color: 'magenta'}}>i</span>,
            I'm <span style={{color: 'red'}}>Daniel </span>
            <span style={{color: 'indigo' }}>Gulic</span>
          </Heading>
          <Heading color='black' fontFamily='Droid Sans Mono, monospace' fontSize={4}>
            Software Developer based in Australia
          </Heading>
        </Typist>
      </div>
    );
  }
}

export default Header;
