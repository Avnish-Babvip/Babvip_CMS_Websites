import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import headMenu from "./slices/headMenu";
import footerMenu from "./slices/footerMenu";
import siteSettings from "./slices/siteSettings";
import home from "./slices/home";


const rootReducer = combineReducers({
  headMenu ,
  footerMenu,
  siteSettings,
  home,
  });

  
 // Redux-persist configuration
 const persistConfig = {
  key: "HotHouseAdminPanel",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_REACT_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        // Handle encryption errors if any
      },
    }),
  ],
};

// Persisted root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  export default store;