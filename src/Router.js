import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* navbar here */}

          <div className="container">
            <Switch>
              <Route path="/" component={Home}/>
            </Switch>
          </div>

          {/* footer here? */}
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;