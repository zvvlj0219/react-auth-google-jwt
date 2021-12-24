import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:5000/api'})

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const signIn = data  => {
  return API.post('/auth/signin',data)
}

export const signUp = data  => {
  return API.post('/auth/signup',data)
}

// export const signOut = data  => {
//   return API.post('/auth/logout',data)
// }