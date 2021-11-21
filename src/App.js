import React, { Component, Suspense } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import Route from 'router/Routes';
import 'assets/scss/_base.scss';
import 'App.scss';

class App extends Component {
  render() {
    return(
      <Suspense
        fallback={
          <Backdrop open>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <Route />
      </Suspense>
    )
  }
}

export default App;
