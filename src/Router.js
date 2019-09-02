import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// PAGES
import Home from './pages/Home';

class Router extends Component {

  render() {
    return (
      <HashRouter>
        <div className="app-nav-route">
          <div className="route">
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Router;