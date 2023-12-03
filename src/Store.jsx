import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./Reducer/UserSlice";

 export const store = configureStore({
    reducer:{
        app: UserSlice.reducer
    }
})