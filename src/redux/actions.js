import * as api from '../module/index'
import { AUTH, LOGOUT } from './actionTypes'

export const signInWithGoogle = (data,history) => async (dispatch) =>{
  try{
    dispatch({type:AUTH,payload:data})

    console.log(data)

    history.push('/home')
    
  }catch(err){
    console.log(err)
  }
}

export const signInWithJwt = (form,history) => async (dispatch) =>{
  try{
    const { data } = await api.signIn(form)
    
    dispatch({type:AUTH,payload:data})
    
    history.push('/home')

  }catch(error){
    console.log(error)
  }
}

export const signUpWithJwt = (form) => async () =>{
  try{
    await api.signUp(form)

  }catch(error){
    console.log(error)
  }
}

export const logout = (history) => async (dispatch) =>{
  try {
    dispatch({type:LOGOUT,payload:null})

    history.push('/')

  } catch (err) {
    console.log(err)
  }
}

