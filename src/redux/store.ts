import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import usersReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    users: usersReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
