import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Provider'i import ediyorum
import App from "./App";
import { setupStore } from "./store/store";

const store = setupStore(); // store'u oluşturuyorum

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
