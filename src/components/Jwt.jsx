import { useState , useCallback } from "react"
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom"
import { signInWithJwt,signUpWithJwt } from "../redux/actions"
import jwt from '../assets/jwt.svg'

const Jwt = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  // state
  const [mode,setMode] = useState('signin')
  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  
  // function
  // const formClear = useCallback(()=>{
  //   setEmail('')
  //   setPassword('')
  //   setPassword('')
  // },[setEmail,setUsername,setPassword])
  
  const toggleMode = useCallback(change=>{
    setMode(change)
  },[setMode])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(mode === 'signin'){
      console.log('signin')
      const form = {
        email,
        password
      }
      dispatch(signInWithJwt(form,history))
    }
    if(mode === 'signup'){
      console.log('signup')
      const form = {
        email,
        username,
        password
      }
      dispatch(signUpWithJwt(form))
      setMode('signin')
    }
  }

  // input handler
  const handleEmail = useCallback(e=>{
    setEmail(e.target.value)
  },[setEmail])
  const handleUsername = useCallback(e=>{
    setUsername(e.target.value)
  },[setEmail])
  const handlePassword = useCallback(e=>{
    setPassword(e.target.value)
  },[setPassword])

  // render
  return (
    <div className="card">
      <div className="head">
        <img className="logo auth" src={jwt} alt="" />
        <p>JWT</p>
      </div>
      <div className="mode">
        <button 
          type="button"
          onClick={()=>toggleMode('signin')}
          >signin</button>
        <button 
          type="button"
          onClick={()=>toggleMode('signup')}
        >signup</button>
      </div>
      <div className='jwtform'>
        <div className='flex'>
          <p>Email:</p>
          <input 
          type="email" name='email' 
          placeholder='email..'
          onChange={handleEmail} 
          />
        </div>
        {
          mode === 'signup' &&
          <div className='flex'>
            <p>Username:</p>
            <input 
            type="text" name='name' 
            placeholder='username..'
            onChange={handleUsername} 
            />
          </div>
        }
        <div className='flex'>
          <p>Password:</p>
          <input 
          type="password" name='password' placeholder='password..'
          onChange={handlePassword}
          />
        </div>
        {
          mode === 'signin' &&
          <button 
            type="button" 
            onClick={handleSubmit}
          >
            → Sign In
          </button>
        }
        {
          mode === 'signup' &&
          <button 
            type="button" 
            onClick={handleSubmit}
          >
            → Sign Up
          </button>
        }
      </div>
    </div>
  )
}

export default Jwt
