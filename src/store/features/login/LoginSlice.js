import createSlice from '@reduxjs/toolkit'; // createSlice reduxjs/toolkit içerisinde bulunan bir fonksiyondur. createSlice ile reducer ve actionlar oluşturulur.

export const LoginSlice = createSlice({ // createSlice fonksiyonu bir obje döndürür. Bu obje içerisinde reducer ve actionlar bulunur.
    name: 'Login', // name kısmı önemli çünkü reducer ismi olarak geçiyor
    initialState: { // reducer başlangıç değeri
        isLoggedIn: false,
        user: null
    },
    reducers: { // actionlar
        Login: (state,action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        }
    }
})

