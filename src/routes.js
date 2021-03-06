import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Header from './components/Header/Header.component';
  import Introduction from './components/Introduction/Introduction.component';
  import Skills from './components/Skills/Skills.component';
  import Projects from './components/Projects/Projects.component';
  import OpenSource from './components/OpenSource/OpenSource.component';
  import Talks from './components/Talks/Talks.component';

  import App from './App';

  function WrappedRoute(props) {
    return (
        <React.Fragment>
            <Header invertBg={props.invertBackground}/>
            {props.children}
        </React.Fragment>
    );
  }

  export default function RoutesManager() {
      return (
          <Router>
            <Switch>
                <Route path="/about">
                    <WrappedRoute>
                        <Introduction />
                    </WrappedRoute>
                </Route>
                <Route path="/skills">
                    <WrappedRoute>
                        <Skills />
                    </WrappedRoute>
                </Route>
                <Route path="/projects">
                    <WrappedRoute>
                        <Projects />
                    </WrappedRoute>
                </Route>
                <Route path="/oss">
                    <WrappedRoute>
                        <OpenSource />
                    </WrappedRoute>
                </Route>
                <Route path="/talks">
                    <WrappedRoute>
                        <Talks />
                    </WrappedRoute>
                </Route>
                <Route path="/">
                    <WrappedRoute>
                        <App />
                    </WrappedRoute>
                </Route>
            </Switch>
          </Router>
      )
  }