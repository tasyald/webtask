import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const browserHistory = createHashHistory();

const Home = React.lazy(() => import('views/Home'));
const About = React.lazy(() => import('views/About'));
const Contact = React.lazy(() => import('views/Contact'));

const RouterPath = () => (
  <Router history={browserHistory}>
    <Navbar />
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </Router>
);

export default RouterPath;
