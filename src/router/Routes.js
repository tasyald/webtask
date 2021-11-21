import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const browserHistory = createBrowserHistory();

const Home = React.lazy(() => import('views/Home'));
const About = React.lazy(() => import('views/About'));
const Contact = React.lazy(() => import('views/Contact'));

const RouterPath = () => (
  <Router history={browserHistory}>
    <Navbar />
    <Switch>
      <Route path="/webtask/home" component={Home} />
      <Route path="/webtask/about" component={About} />
      <Route path="/webtask/contact" component={Contact} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </Router>
);

export default RouterPath;
