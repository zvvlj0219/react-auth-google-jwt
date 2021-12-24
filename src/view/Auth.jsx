import React from 'react'

// components
import Google from '../components/Google'
import Jwt from '../components/Jwt'

const Auth = () => {
  return (
    <div className="flex">
      <Google />
      <Jwt />
    </div>
  )
}

export default Auth
