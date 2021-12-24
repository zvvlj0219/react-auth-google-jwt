const initialState = {
  auth:{
    user:null,
    isSignedIn:localStorage.getItem('profile')
  }
}

export default initialState