import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from 'components/Navbar';
import Home from 'views/Home';
import Footer from 'components/Footer';

const browserHistory = createBrowserHistory();

const RouterPath = () => (
  <Router history={browserHistory}>
    <Navbar />
    <Home />
    <Routes>
      <Route path="/webtask/home" component={Home} />
      {/* About & Contact Us routes */}
    </Routes>
    <Footer />
  </Router>
);

export default RouterPath;
