// ProfileComponent içerisinde yapmam gereken şey useSelector ile state içerisindeki değeri alıp kullanmak.
// useSelector ve useDispatch react-redux içerisinde , createSlice combineReducers, configureStore redux-toolkit içerisinde

import React from 'react'
import {useSelector} from 'react-redux' // useSelector ile state içerisindeki değeri alıp kullanabilirim.
export const ProfileComponent = () => {

  const user = useSelector(state => state.loginReducer.value) // state (store.js) içerisindeki loginReducer içerisindeki value değerini alıp user değişkenine atadım.

  return (
    <div>
    {/* yukarıdaki useSelector ile bu verileri çekmiş oldum */}
    <h1>Profile Component</h1>
    <p> Name: {user.name} </p>
    <p> Surname: {user.surname}</p>

    </div>
  )
}

export default ProfileComponent;