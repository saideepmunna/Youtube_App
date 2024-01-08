import { configureStore } from "@reduxjs/toolkit";
import slideBarReducer from "./slideBarSlice"

const appStore = configureStore({
   reducer: {
    slideBar: slideBarReducer,
   },
})

export default appStore;