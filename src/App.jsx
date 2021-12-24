import { useDispatch,useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {logout} from './redux/actions'

// components
import Header from './view/Header'
import Router from './Router'

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  // state
  // const [username,setUsername] = useState('')

  // selector
  const {user,isSignedIn} = useSelector(state=>state.auth)

  // function
  const username = () =>{
    let name = ''
    if(user?.result.googleId){
      name =  `${user.result.givenName} ${user.result.familyName}`
    }
    if(user?.result._id){
      name =  user.result.username
    }
    return name
  }

  return (
    <div>
      <Header />
      <p className="text-center loginstatus">&lt; login status &gt;</p>
      <div className='flex text-center  loginstatus msg'>
        <p>{isSignedIn ? 'logged in' : 'not log in' }</p>
        &nbsp;	&nbsp;
        <p>{username()}</p>
      </div>
      {
        isSignedIn ?
        (
          <button 
            type="button" 
            className='logout'
            onClick={()=>{
              dispatch(logout(history)) 
            }}
          >logout</button>
        )
        :
        ''
      }
      <Router />
    </div>
  )
}

export default App
