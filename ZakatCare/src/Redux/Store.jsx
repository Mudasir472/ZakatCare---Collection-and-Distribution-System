import { configureStore } from "@reduxjs/toolkit";
import UserSlice, { UserFetch } from "./Slices/UserSlice"

const store = configureStore({
    reducer: {
        client:UserSlice
    }
});
store.dispatch(UserFetch());

export default store;