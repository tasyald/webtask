import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const RouterPath = () => (
  <Router history={browserHistory}>
    <h1>Home</h1>
    <Routes>
      {/* About & Contact Us routes */}
    </Routes>
  </Router>
);

export default RouterPath;
