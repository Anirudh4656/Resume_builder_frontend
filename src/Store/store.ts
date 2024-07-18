import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./reducers/authReducers";
import { userApi } from "../Services/api";
import ResumeReducer from "./reducers/ResumeReducer";
import { resumeApi } from "../Services/resume";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useDispatch, useSelector } from "react-redux";

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, authReducers)
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    [userApi.reducerPath]: userApi.reducer,
    resume: ResumeReducer,
    [resumeApi.reducerPath]: resumeApi.reducer,
   
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      resumeApi.middleware,
     
    ),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();


