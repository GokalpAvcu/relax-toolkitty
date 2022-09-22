import createSlice from '@reduxjs/toolkit'; // createSlice reduxjs/toolkit içerisinde bulunan bir fonksiyondur. createSlice ile reducer ve actionlar oluşturulur.

const initialState = {name:"", surname:""} // initial state

export const LoginSlice = createSlice({ // createSlice fonksiyonu bir obje döndürür. Bu obje içerisinde reducer ve actionlar bulunur.
    name: 'Login', // name kısmı önemli çünkü reducer ismi olarak geçiyor
    initialState: initialState, // reducer başlangıç değeri
    reducers: { // actionlar
        loginAction: (state,action) => { // action ismi
            state.isLoggedIn = true;
            state.value = action.payload; // action içerisinden bir payload değeri gönderiyorum ve state içerisindeki value değerine atanır. useSelector ile herhangi bir component içerisinde bu değeri kullanabiliriz.
        },
        logoutAction: (state) =>{
            state.value = initialState; // state içerisindeki value değeri initialState değerine eşitlenir.
        }
    }
})

export const loginReducer = LoginSlice.reducer; // reducer export edilir
export const {loginAction, logoutAction} = LoginSlice.actions; // actionlar export edilir




