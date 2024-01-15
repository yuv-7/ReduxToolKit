import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../reducers/todo/TodoSlice";

export const UserStore = configureStore({
    reducer:TodoSlice
})