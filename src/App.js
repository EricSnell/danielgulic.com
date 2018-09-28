import React, { Component } from 'react';
import Router from './Router';
import { Provider } from 'rebass';

class App extends Component {
  render() {
    return (
      <div>
        <Provider>
          <Router />
        </Provider>
      </div>
    );
  }
}

export default App;
