import React from 'react'
import {useDispatch} from 'react-redux' // useDispatch'i almam lazım ki actionları dispatch edeip çalıştırabileyim.


export const LoginComponent = () => {
  return (
    <div>
        <h1>LoginComponent</h1>
        <button>Login</button>
        <button>Logout</button>
    </div>
  )
}

export default LoginComponent;






