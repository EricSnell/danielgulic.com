import React, { Component } from 'react';

class SocialLinks extends Component {
  render() {
    return (
      <div style={{marginBottom: 50}}>
        <div>
          <a href='https://twitter.com/danielgulic'>
            <i title='@danielgulic on Twitter' style={{fontSize: 50, color: '#1DA1F2', paddingRight: 10}} className="fab fa-twitter"></i>
          </a>
          <a href='https://github.com/danielgulic'>
            <i title='@danielgulic on GitHub' style={{fontSize: 50, color: 'black', paddingRight: 10}} className="fab fa-github"></i>
          </a>
          <i title='Résumé (coming soon)' style={{fontSize: 50, color: 'grey'}} className="fas fa-file-code"></i>
        </div>
      </div>
    );
  }
}

export default SocialLinks;
