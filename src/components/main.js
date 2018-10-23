import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-skeleton-css/styles/skeleton.2.0.4.css'

import LandingPage from './landingPage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={Resume} />
  </Switch>
)

export default Main;
