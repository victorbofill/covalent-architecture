import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Splash from './splash/Splash';
import Connect from './connect/Connect';
import Design from './design/Design';
import Projects from './design/projects/Projects';
import Process from './process/Process';
import Story from './story/Story';
import Values from './values/Values';

import './app.scss';

export default class App extends Component {
  isSplashLoaded(match) {
    const { pathname } = window.location;
    const isActive = pathname === '/' || pathname === match;
    return isActive;
  }

  render() {
    const { isSplashLoaded } = this;

    return (
      <Router>
        <main>
          <header className="header">
            <ul className="ul">
              <NavLink
                to="/story"
                activeClassName={'story-link'}
                isActive={() => isSplashLoaded('/story')}
              >
                <li>story</li>
              </NavLink>
              <NavLink
                to="/process"
                activeClassName={'process-link'}
                isActive={() => isSplashLoaded('/process')}
              >
                <li>process</li>
              </NavLink>
              <NavLink
                to="/design"
                activeClassName={'design-link'}
                isActive={() => isSplashLoaded('/design')}
              >
                <li>design & services</li>
              </NavLink>
              <NavLink
                to="/values"
                activeClassName={'values-link'}
                isActive={() => isSplashLoaded('/values')}
              >
                <li>values</li>
              </NavLink>
              <NavLink
                to="/connect"
                activeClassName={'connect-link'}
                isActive={() => isSplashLoaded('/connect')}
              >
                <li>connect</li>
              </NavLink>
            </ul>
          </header>

          <Switch>
            <Route exact path="/" component={Splash}/>
            <Route path="/story" component={Story}/>
            <Route path="/process" component={Process}/>
            <Route path="/design/projects" component={Projects}/>
            <Route path="/design" component={Design}/>
            <Route path="/values" component={Values}/>
            <Route path="/connect" component={Connect}/>
          </Switch>
        </main>
      </Router>
    );
  }
}
