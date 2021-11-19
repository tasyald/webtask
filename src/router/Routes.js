import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from 'components/Navbar';
import Home from 'views/Home';
import About from 'views/About';
import Footer from 'components/Footer';

const browserHistory = createBrowserHistory();

const RouterPath = () => (
  <Router history={browserHistory}>
    <Navbar />
    <Switch>
      <Route path="/webtask/home" component={Home} />
      <Route path="/webtask/about" component={About} />
      {/* Contact route */}
    </Switch>
    <Footer />
  </Router>
);

export default RouterPath;
