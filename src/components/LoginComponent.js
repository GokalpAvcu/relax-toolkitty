import React from 'react'
import {useDispatch} from 'react-redux' // useDispatch'i almam lazım ki actionları dispatch edeip çalıştırabileyim.
import {loginAction, logoutAction} from '../store/features/login/LoginSlice' // actionları import ediyorum


export const LoginComponent = () => {

const dispatch = useDispatch(); // dispatch'i alıyorum

  return (
    <div>
        <h1>LoginComponent</h1>
        <button onClick={() => {dispatch(loginAction({name: "Gökalp", surname:"Avcu"}))}}>Login</button> 
        {/* yukarıdaki Gökalp Avcu objemi loginAction'da dispatch'e, dispatch ile loginSlice içerisindeki metoda, loginSlice içerisindeki state'a bağlamış oldukm */}
        <button onClick={() => {dispatch(loginAction())}}>Logout</button>
    </div>
  )
}

export default LoginComponent;






