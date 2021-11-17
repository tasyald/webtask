import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navbar from 'components/Navbar/Navbar';
import Home from 'views/Home';

const browserHistory = createBrowserHistory();

const RouterPath = () => (
  <Router history={browserHistory}>
    <Navbar />
    <Home />
    <Routes>
      {/* About & Contact Us routes */}
    </Routes>
  </Router>
);

export default RouterPath;
