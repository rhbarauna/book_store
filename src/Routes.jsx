import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Cart, Details, Home} from './pages'

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/details'>
          <Details />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default Routes;