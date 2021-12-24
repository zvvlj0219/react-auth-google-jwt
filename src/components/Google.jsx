import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signInWithGoogle } from '../redux/actions';
import google from '../assets/google.png'


const Google = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const googleSignInSuccess = async (res) => {
    const result = res.profileObj;
    const token = res.tokenId;

    console.log(result)
    console.log(token)

    const data = {
      result,
      token
    }

    try {
      dispatch(signInWithGoogle(data,history));
    } catch (error) {
      console.log(error);
    }
  };

  const googleSignInError = () => {
    alert('Google Sign In was unsuccessful. Try again later');
  }


  return (
    <div className="card">
      <div className="head">
        <img className="logo auth" src={google} alt="" />
        <p>Google</p>
      </div>
      <div className='card-content'>
        <GoogleLogin
          clientId='285377763345-gudokrlrdlubpm7a60mlj7j1vst46aud.apps.googleusercontent.com'
          onSuccess={googleSignInSuccess}
          onFailure={googleSignInError}
          render={renderProps =>{
            return (
              <button 
                type="button"
                className='google-login-button'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                → Googl Sign in
              </button>
            )
          }}
        />
      </div>
    </div>
  )
}

export default Google
