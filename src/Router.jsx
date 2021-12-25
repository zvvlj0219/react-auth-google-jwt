import React,{useEffect} from 'react'
import { Switch, Route,useHistory } from 'react-router-dom'
import PropTypes from 'prop-types' 

// components
import Auth from './view/Auth'
import Home from './view/Home'

const Router = ({isSignedIn}) => {
  const history = useHistory()
  
  useEffect(()=>{
    if(isSignedIn){
      history.push('/home')
    }
  },[isSignedIn])

  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/*" component={Auth} />
    </Switch>
  )
}

Router.defaultProps = {
  isSignedIn:null
}

Router.propTypes = {
  isSignedIn:PropTypes.string
}

export default Router
