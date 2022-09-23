import { createSlice } from "@reduxjs/toolkit"; // createSlice reduxjs/toolkit içerisinde bulunan bir fonksiyondur. createSlice ile reducer ve actionlar oluşturulur.

const initialState = "";

export const ThemeSlice = createSlice({ 
    name: "Theme",
    initialState: { value: "light" },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});
