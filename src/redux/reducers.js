import * as Action from './actionTypes'
import initialState from './initialState'

const authReducer = (state = initialState.auth,action) =>{
  switch(action.type){
    case Action.AUTH :
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      return {
        ...state,
        user:action.payload,
        isSignedIn:true
      }
    case Action.LOGOUT :
      localStorage.clear();
      return {
        ...state,
        user:null,
        isSignedIn:null
      }
    default :
      return state
  }
}

export default authReducer


