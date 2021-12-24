import { createStore,combineReducers,applyMiddleware } from "redux"
import { connectRouter,routerMiddleware } from "connected-react-router"
import thunk from "redux-thunk"

// history
import { createBrowserHistory } from 'history'

// Import reducers
import authReducer from '../redux/reducers'

export const history = createBrowserHistory()

// store
export default function configureStore(){
  const store = createStore(
    combineReducers({
      auth:authReducer,
      router:connectRouter(history),
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
  return store
}