// ProfileComponent içerisinde yapmam gereken şey useSelector ile state içerisindeki değeri alıp kullanmak.
// useSelector ve useDispatch react-redux içerisinde , createSlice combineReducers, configureStore redux-toolkit içerisinde

import React from 'react'
import {useSelector} from 'react-redux' // useSelector ile state içerisindeki değeri alıp kullanabilirim.
export const ProfileComponent = () => {
  return (
    <div>
      
    <h1>Profile Component</h1>
    <p>Name: Gökalp </p>
    <p>Surname: Avcu </p>

    </div>
  )
}

export default ProfileComponent;