// store'u doldurmam gerekiyor ki bu tanımlamış olduğum slice'ları kullanabileyim.
import { combineReducers, configureStore } from "@reduxjs/toolkit"; // combineReducer ve configureStore reduxjs/toolkit içerisinde bulunan fonksiyonlardır.
import { loginReducer } from "./features/login/LoginSlice"; // loginReducer'ı import ediyorum
import { themeReducer } from "./features/theme/ThemeSlice";

const rootReducer = combineReducers({
  // combineReducers ile bir obje döndürüyorum. Bu obje içerisinde reducer'lar bulunuyor.
  loginReducer,
  themeReducer
});

export const setupStore = () => {
  // store'u dolduruyorum
  return configureStore({
    reducer: rootReducer,
  });
};
