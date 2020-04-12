import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Header from './components/Header/Header.component';
  import Introduction from './components/Introduction/Introduction.component';
  import App from './App';

  function WrappedRoute(props) {
    return (
        <React.Fragment>
            <Header />
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
                <Route path="/">
                    <WrappedRoute>
                        <App />
                    </WrappedRoute>
                </Route>
            </Switch>
          </Router>
      )
  }