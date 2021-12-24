import React from 'react'
import { Switch, Route } from 'react-router-dom'

// components
import Auth from './view/Auth'
import Home from './view/Home'

const Router = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/*">
        <Auth />
      </Route>
    </Switch>
  )
}

export default Router
